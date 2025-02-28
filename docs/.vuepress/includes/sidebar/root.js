module.exports = {
  '/': [
    {
      title: 'Introduction',
      path: '/Introduction/',
      collapsable: false,
      sidebarDepth: 4
    },
    {
      title: 'Certification',
      path: '/Certification/',
      collapsable: false,
      sidebarDepth: 4
    },
    {
      title: 'Product Categories',
      path: '/Product-Categories/',
      collapsable: false,
      sidebarDepth: 4,
      children: [
        '/Product-Categories/WisGate/',
        '/Product-Categories/WisNode/',
        '/Product-Categories/WisBlock/',
        '/Product-Categories/WisDuo/',
        '/Product-Categories/WisTrio/',
        '/Product-Categories/WisLink/',
        '/Product-Categories/WisHat/',
        '/Product-Categories/WisDuino/',
        '/Product-Categories/Accessories/',
        '/Product-Categories/Software-APIs-and-Libraries/',
        '/Product-Categories/Software-Tools/',
      ]
    }
  ],
}