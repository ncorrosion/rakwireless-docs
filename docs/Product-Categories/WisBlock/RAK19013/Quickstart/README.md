---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19013. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19013/overview/rak19013_home.png
tags:
  - quickstart
  - wisblock
  - RAK19013
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK19013 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19013 WisBlock LiPo Solar Power Slot module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK19013 WisBlock LiPo Solar Power Slot Module](https://store.rakwireless.com/products/rak19013-lipo-solar-power-slot-module?utm_source=RAK19013&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- [Li-Ion/LiPo battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger](https://store.rakwireless.com/products/solar-panel-connector-cable)
- [RAK5804](https://store.rakwireless.com/products/rak5804-wisblock-interface-extension-board)(Reprogramming of the WisBlock Core via USB) 

#### Software 

##### Arduino

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK19013 WisBlock LiPo Solar Power Slot Module is a power board that comprises a battery connector, a solar panel connector, a reset push button, and a power connector that can connect with the WisBlock Base board.

For more information about RAK19013, refer to the [Datasheet](../Datasheet/).

#### RAK19013 Connection to WisBlock Base

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/rak19013-rechargeable.svg"
  width="80%"
  caption="RAK19013 pinout and connector assignments"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

#### RAK19013 Supplemented by RAK5804 to Support WisBlock Core Reprogramming

Since there is no USB on RAK19013, the only way to upload the code is by using RAK5804.

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/rak19013-rechargeable-rak5804.svg"
  width="80%"
  caption="RAK19013 and RAK5804 Connector assignments"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK19013 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK19013 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/removing_screw.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

#### Battery Connector

##### Rechargeable Battery

RAK19013 can be powered by a rechargeable Li-Ion/LiPo battery via the dedicated connectors, as shown in **Figure 7**. The matching connector for the rechargeable battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199). A cable assembly for the rechargeable battery connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/battery-connector-cable). 

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/rak19013-battery-connection.svg"
  width="40%"
  caption="Rechargeable battery connector pin"
/>

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- Make sure the battery wires, both rechargeable and non-rechargeable, match the polarity on the RAK19013 board. Not all batteries have the same wiring.

:::

#### Solar Panel Connection

The battery can be recharged, as well, via a small Solar Panel, as shown in **Figure 8**. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287). A cable assembly for the solar panel connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/solar-panel-connector-cable). 

<rk-img
  src="/assets/images/wisblock/rak19013/quickstart/rak19013-solar-connection.svg"
  width="40%"
  caption="Solar panel connector VIN and GND"
/>


:::warning ⚠️ WARNING

- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- The GND pin of the Solar Panel Connector is located on edge of the board. Make sure the solar panel wires match the polarity on the RAK19013 board.

:::

### Software Setup

The WisBlock Core is designed to be interfaced with other WisBlock Modules like sensors, displays, and other interfaces. To make useful devices, you need to upload a source code to the WisBlock Core. 
Before you continue, you should have already set up either an [Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) or
[PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md).

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the [WisBlock Example code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples). The example codes on folder `common` are compatible with RAK4631, RAK11200, and RAK11310 WisBlock Cores.
The two user LEDs of RAK19013 can be accessed using macrodefinitions `LED_GREEN` / `PIN_LED1` for the green LED and `LED_BLUE` / `PIN_LED2` for the blue LED. For the battery voltage reading, `WB_A0` is used.

