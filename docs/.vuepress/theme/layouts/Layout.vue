<template>
  <ClientOnly>
    <q-layout view="hHh LpR lfr">
      <div id="lt-md-div" class="lt-md"></div>
      <q-header class="bg-primary text-white">
        <q-toolbar style="height: 70px">
          <q-btn
            flat
            @click="showDrawer = !showDrawer"
            round
            dense
            :icon="showDrawer ? 'menu_open' : 'menu'"
            class="lt-md"
          />
          <div class="full-height flex flex-center">
            <q-item :to="`/`" class="q-pa-none full-height text-white">
              <q-item-section class="q-pa-none" side>
                <!-- <a href="/"> -->
                <img
                  :src="`/assets/rakwireless/rak-white.svg`"
                  style="width: 7.5rem"
                  alt="https://docs.rakwireless.com/assets/rakwireless/RAK-only-gray.png"
                />
                <!-- </a> -->
              </q-item-section>
              <q-item-section class="gt-xs text-h5 q-px-sm"
                >Documentation Center</q-item-section
              >
            </q-item>
            <q-item>
              <q-item-section>
                <rk-toolbar-dropdown class="gt-sm" />
              </q-item-section>
            </q-item>
          </div>
          <q-space />
          <rk-search-box 
            class="gt-md"
          />
          <rk-search-box class="lt-lg" minimized />
        </q-toolbar>
        <q-separator class="bg-primary" style="padding: 0.1px" />
      </q-header>

      <q-drawer
        v-model="shouldShowDrawer"
        content-class="bg-grey-1 text-grey-9 q-pa-none"
        @show="onDrawerShow"
        @hide="onDrawerHide"
      >
        <rk-sidebar :items="sidebarItems">
          <template #top>
            <slot name="sidebar-top" />
          </template>
          <template #bottom>
            <slot name="sidebar-bottom" />
          </template>
        </rk-sidebar>
      </q-drawer>
      <q-page-container @scroll="onPageScroll">
        <rk-header v-if="shouldHaveHeader" />
        <rk-page :sidebar-items="sidebarItems" v-bind:isKnowledgeHub="isKnowledgeHub" />
        <rk-zoom />
        <rk-faq-footer v-if="isShow"/>
        <q-page-sticky
          position="top-right"
          :offset="[15, 15]"
          style="z-index: 100"
        >
          <transition
            appear
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
          >
            <q-btn
              v-if="showBack2Top"
              color="primary"
              icon="fas fa-chevron-up"
              @click="back2Top"
              round
              v-ripple
            >
              <q-tooltip
                content-class="bg-black text-white"
                transition-show="scale"
                transition-hide="scale"
                >Back to Top</q-tooltip
              >
            </q-btn>
          </transition>
          
        </q-page-sticky>
      </q-page-container>
      <q-footer>
        <rk-footer />
      </q-footer>
    </q-layout>
  </ClientOnly>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'

import RkToolbarDropdown from '@theme/components/RkToolbarDropdown.vue'
import RkPage from '@theme/components/RkPage.vue'
import RkFooter from '@theme/components/RkFooter.vue'
import RkSidebar from '@theme/components/RkSidebar.vue'
import RkHeader from '@theme/components/RkHeader.vue'
import RkZoom from '@theme/components/RkZoom.vue'
import RkSearchBox from '@theme/components/RkSearchBox.vue'

import ScrollMixin from '@theme/components/mixins/scroll.mixin'
import TagsMixin from '@theme/components/mixins/tags.mixin'
import CommonMixin from '../../components/common.mixin'

import { resolveSidebarItems } from '../util'
import { Screen } from 'quasar'

import debounce from 'lodash.debounce'
import RkFaqFooter from '../../components/RkFaqFooter.vue'

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    RkToolbarDropdown,
    RkPage,
    RkFooter,
    RkSidebar,
    RkHeader,
    RkZoom,
    RkSearchBox,

  },
  mixins: 
    [ScrollMixin, TagsMixin, CommonMixin],

  data() {
    return {
      isShow : false,
      isSidebarOpen: false,
      showDrawer: true,
      showBack2Top: false,
      disableActiveHash: false,
      isKnowledgeHub : false
    }
  },

  computed: {
    shouldShowDrawer: {
      get() {
        const { frontmatter } = this.$page
        if (this.ltMdDiv) return this.showDrawer
        else
          return (
            !frontmatter.home &&
            frontmatter.sidebar !== false &&
            this.sidebarItems.length !== 0
          )
      },
      set(val) {
        console.log('VALUE',val);
        this.showDrawer = val
      },
    },
    shouldHaveHeader() {
      return this.$page.frontmatter.header || this.$page.frontmatter.article
    },
    shouldShowNavbar() { 
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page

      
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      )
    },

    showSidebarItems() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length !== 0
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ]
    },
    computedMobileScreen(){
      if(window.screen.width <= 760) {
        console.log("MOBILE VIEW")
        return true
      }
      else {
        console.log("DESKTOP VIEW")
        return false
      }
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    let fullPath = this.$route.fullPath
    // console.log('pages: ', this.$site.pages)
    // console.log('page: ', this.$page)

    // const min = Math.min(window.innerHeight, window.innerWidth)
    // document.documentElement.style.fontSize = `${0.015 * min}px`
    // document.documentElement.style.fontSize = '14px'
    // console.log('mounted: ', window.innerHeight, window.innerWidth, min, document.documentElement.style)
    // console.log('sidebaritems: ', this.sidebarItems)
    this.checkRouteName(this.$route.name);
    this.checkIsKnowledgeHub(fullPath)
    this.setScript();
    this.isMobile();
    window.onscroll = this.onPageScroll
    window.onload = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash)
        if (el) {
          setTimeout(() => {
            window.scroll(0,findPos(el));
          }, 250)
        }
      }
    }
  },
  updated() {
    this.replaceAllTables()
  },

  methods: {
    replaceAllTables: debounce(function () {
      // replace all table with q-table instances
      const tables = document.getElementsByTagName('table')
      for (const tbl of tables) {
        // skip pdf-container
        if (tbl.id === 'pdf-container') continue

        // skip processed
        if (
          tbl.parentNode &&
          Array.from(tbl.parentNode.classList).includes('q-markup-table')
        )
          continue

        const tbl_ = tbl
        const parent = tbl.parentNode

        const qtable = document.createElement('div')
        qtable.classList.add(
          'pdf-group',
          'q-markup-table',
          'q-table__container',
          'q-table__card',
          'q-table--horizontal-separator',
          'q-table--flat',
          'q-table--bordered'
        )

        parent.replaceChild(qtable, tbl)
        tbl_.classList.add('q-table')
        qtable.appendChild(tbl_)
      }
    }, 250),
    onDrawerShow() {
      if (this.ltMdDiv) {
        // temporarily disabled setting active hash and smooth scroll
        document.documentElement.style.scrollBehavior = 'unset'
        this.disableActiveHash = true
      }
    },
    onDrawerHide() {
      const self = this
      setTimeout(() => {
        // re-enabled stuffs
        document.documentElement.style.scrollBehavior = 'smooth'
        self.disableActiveHash = true
      }, 100)
    },
    back2Top() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    onPageScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      )
        this.showBack2Top = true
      else this.showBack2Top = false
    },
    toggle() {},
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      console.log("X",dx)
      console.log("Y",dy)
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },
    setIsShow(flag){
      this.isShow = flag;
    },
    checkRoute(route){
      if(route.path === '/Knowledge-Hub/FAQs/'
        ||route.path === '/Knowledge-Hub/FAQs/General/'
        ||route.path === '/Knowledge-Hub/FAQs/Hardware/'
        ||route.path === '/Knowledge-Hub/FAQs/Software/'){
          this.setIsShow(true);


        }
      else {
       
        this.setIsShow(false);
      }
    },
    checkRouteName(routeName){
      if(routeName == 'v-00ca1ee8' || routeName == 'v-339265df' || routeName == 'v-1f7eaef6' || routeName == 'v-83e8fff2'){
        this.setIsShow(true);
       
      }else {
        
        this.setIsShow(false);
      }
    },
    setScript: function(){
      let externalScript = document.createElement('script')
      externalScript.setAttribute('src','https://static.zdassets.com/ekr/snippet.js?key=1a5ac733-fac6-4769-9091-f47005c3893d');
      externalScript.setAttribute('id','ze-snippet');
      document.body.appendChild(externalScript);
    },
    isMobile : function(){
      if(window.screen.width <= 760){
        console.log("screen width",window.screen.width);
        this.showDrawer = false;
      }else {
        this.showDrawer = true;
      }
    },
    checkIsKnowledgeHub (fullPath){
      if((fullPath).includes('/Knowledge-Hub/Learn/') && fullPath.length > 21){
        this.isKnowledgeHub = true;

      }else {
        this.isKnowledgeHub = false;
      }
    }
  },
  watch: {
    $page: function (newval, oldval) {
      this.$root.lastPath = oldval.path
    },
    $route(to, from) {
      
      if(to.fullPath === '/Knowledge-Hub/Learn/' && (to.fullPath).length <= 21 ){
        console.log('INSIDE',(to.fullPath).length <= 21 )
        this.isKnowledgeHub = false;
      }
      this.checkIsKnowledgeHub(to.fullPath)
      this.checkRoute(to);
    }
  },
}
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3498db;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2980b9;
}
</style>