---
rak_desc: Provides comprehensive information about your RAK2560 WisNode Sensor Hub to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2560/hub-datasheet/body-dimensions.png
prev: ../Installation/
next: ../IO-Datasheet/
tags:
  - datasheet
  - wisnode
  - RAK2560
  - SensorHub
---

# RAK2560 WisNode Sensor Hub Datasheet

## Overview

### Description

The **RAK2560 WisNode Sensor Hub** is a modular sensor ecosystem consisting of the main body and multiple pre-configured sensor probes. With pluggable, interchangeable probes, and the option to add third-party sensors to the mixture, the Sensor Hub is a suitable and versatile solution platform for various IoT applications where environmental monitoring is needed.

The Sensor Hub consists of a robust waterproof enclosure with two (2) sensor probe ports to connect the sensors or an external power source like a solar panel.

The device can work in full battery mode or with an external power supply depending on the deployment location.

The Sensor Hub and its sensor probes are easily configured via the WisToolBox app, available for mobile and desktop.

### Product Features

- LoRa 868-930&nbsp;MHz support 
- Based on [RAK4630](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/Overview/#product-description) (MCU: nRF52840, Radio Chip: SX1262)
- [RUI3](https://docs.rakwireless.com/RUI3/#overview) - based code
- Auto-detection of the power source
- Auto-detection of the Sensor Probes
- 2~4&nbsp;pcs 3.6&nbsp;V ER18505 4000&nbsp;mAh Li-SOCl2 primary lithium batteries
- 12&nbsp;V<sub>DC</sub> over power supply or solar panel 
- NB-IoT interface module ([RAK5860](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5860/Overview/)) support (optional)
- Embedded antenna
  - High efficiency (over 75%) LoRa Band 860~930&nbsp;MHz 
  - Support 700~960&nbsp;MHz and 1700~2170&nbsp;MHz.
- NFC tag for power on and smart connect over BLE
- Prevent theft via the hall effect sensor on the exclusive mounting bracket
- IP66-rated waterproof enclosure
- Sensor ports can host multiple Sensor Probes via Probe Splitters

## Specifications

### Overview

#### Main Specifications

| Feature              | Specification                                                                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wireless technology  | Support LoRa end node (915&nbsp;MHz&nbsp;/&nbsp;868&nbsp;MHz)<br>Support Bluetooth for easy setup<br>Support NFC for easy setup                                                                                       |
| Antenna              | 1 x internal: high-gain and high-efficiency LoRa antenna (also support NB-IoT)<br>1 x internal: NFC antenna<br>1 x internal: Bluetooth antenna                                                                        |
| External interfaces  | 2 x SP11 connector (IP67) for multiple-purpose sensors<br>The SP11 supports a 12&nbsp;V power adapter and a solar panel kit for external power                                                                        |
| Weatherproof design  | IP66 rated<br>SP11 connector for professional installation and fast deployment<br>Plastic top (UL-746C), UV-resistant<br>Metal body, die-casted, with solid and good thermal dissipation<br>Internal gasket (UL-94V0) |
| Power source         | +12&nbsp;V<sub>DC</sub> at 1&nbsp;A (12&nbsp;W) power adapter<br>Support 12&nbsp;V<sub>DC</sub> solar panel<br>4 x ER18505 Li-SOCl2 batteries (4000&nbsp;mAh)                                                         |
| Mounting options     | Solid mounting kit for wind speed load of 215&nbsp;km/h<br>Pole-mount (vertical or horizontal)<br>Wall-mount                                                                                                          |
| Enclosure dimensions | 120&nbsp;x&nbsp;80&nbsp;x&nbsp;39&nbsp;mm                                                                                                                                                                             |
| Surge and ESD        | 6&nbsp;kV surge and 8&nbsp;kV ESD protection                                                                                                                                                                          |
| Working environment  | -30°&nbsp;C to +60°&nbsp;C<br>Suitable for outdoor and indoor use                                                                                                                                                     |
| Storage temperature  | -40°&nbsp;C to +80°&nbsp;C                                                                                                                                                                                            |

#### Dimensions

The dimensions for the body of the Sensor Hub are 120&nbsp;x&nbsp;80&nbsp;x&nbsp;39&nbsp;mm. There are two equal physical ports for Sensor Probe&mdash;the DC supply and the Probe IO at the bottom of the enclosure.

<rk-img
  src="/assets/images/wisnode/rak2560/hub-datasheet/body-dimensions.png"
  width="30%"
  caption="RAK2560 WisNode Sensor Hub dimensions"
/>

#### Block Diagram

The **RAK2560 Sensor Hub** uses RAK4630 as a core. The One-wire protocol provides easy connection and easy assembly. The device supports two kinds of wireless communication, LoRa, and NB-IoT that are switchable. A hybrid power system provides more possibilities to customize the Hub to correspond to the customer/market demands. 

<rk-img
  src="/assets/images/wisnode/rak2560/hub-datasheet/block-diagram.png"
  width="60%"
  caption="RAK2560 WisNode Sensor Hub block diagram"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the pinouts of the sensor hub and their corresponding functions and diagram. It also covers the rf, power supply, and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK2560 WisNode Sensor Hub.

#### Pin Definition

Each of the two ports has five (5) pins and they are the same for both ports.

<rk-img
  src="/assets/images/wisnode/rak2560/hub-datasheet/pin-definition.png"
  width="30%"
  caption="RAK2560 WisNode Sensor Hub pin definition"
/>

| Pin No. | Name          | Type | Description                   | Remarks                                                       |
| ------- | ------------- | ---- | ----------------------------- | ------------------------------------------------------------- |
| 1       | Vin           | PI   | 12&nbsp;V<sub>DC</sub> supply | Input 5~16&nbsp;V                                             |
| 2       | GND           | -    | Ground                        | -                                                             |
| 3       | One-wire UART | IO   | Communication with probe      | -                                                             |
| 4       | Vcc_Probe     | PO   | Power supply for the probe    | 3.3&nbsp;V<sub>DC</sub> support mode; 3.4&nbsp;V battery mode |
| 5       | Reserved      | -    | Not defined                   | Reserved for future applications                              |

#### RF Characteristics
##### Operating Frequencies

The board supports the following LoRa frequency channels, allowing easy configuration while building the firmware from the source code.

| Region        | Frequency    |
| ------------- | ------------ |
| Europe        | EU868        |
| North America | US915        |
| Asia          | AS923, AS920 |
| Australia     | AU915        |
| Korea         | KR920        |
| India         | IN865        |

:::tip 📝 NOTE:
The above frequency band parameters are different, depending on the region, and comply with the local regulatory requirements. Have your location in mind when placing an order.
:::


#### Power Supply

The **RAK2560 Sensor Hub** must be supplied through the 12&nbsp;V SP11 pins by a DC power supply or 4 x EVE ER18505 3.6&nbsp;V Lithium 4000&nbsp;mAh battery and the voltage must be stable.

##### Power Consumption

| Mode               | Condition                                                    | Min         | Typical      | Max         |
| ------------------ | ------------------------------------------------------------ | ----------- | ------------ | ----------- |
| Active mode (TX)   | The power of TX channel is 20&nbsp;dBm and 3.6&nbsp;V supply | 110&nbsp;mA | 120&nbsp;mA  | 130&nbsp;mA |
| Active mode (RX)   | TX disabled and RX enabled                                   | 7.5&nbsp;mA | 8.55&nbsp;mA | 15&nbsp;mA  |
| Active mode (idle) | TX disabled and RX disabled. MCU wake up                     | 3.0&nbsp;mA | 3.3&nbsp;mA  | 3.6&nbsp;mA |
| Sleep mode         | Sleep mode                                                   | 13&nbsp;uA  | 15&nbsp;uA   | 20&nbsp;uA  |

#### Environmental Requirements

##### Operating Conditions

| Parameter                    | Min         | Typical     | Max         |
| ---------------------------- | ----------- | ----------- | ----------- |
| Normal operating temperature | –30°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |



#### Sensor Connection Diagram

The **RAK2560** can support both Sensor Probes and Probe IO in all possible combinations.

:::tip 📝 NOTE:
If you want to add a Probe IO to your setup, the Sensor Hub must be supplied by an external 12&nbsp;V<sub>DC</sub> power source.
:::

<rk-img
  src="/assets/images/wisnode/rak2560/hub-datasheet/connection-schematics.png"
  width="90%"
  caption="RAK2560 WisNode Sensor Hub connection schematics"
/>


### Software

| Supported Protocol | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| NFC                | For waking up the Sensor Hub via the WisToolBox App                                    |
| BLE                | For pairing the Sensor Hub to a mobile device for configuration via the WisToolBox App |
| LoRaWAN            | For data transfer, provided by the RAK4630 WisBlock LPWAN module                       |
| NB-IoT             | For data transfer, optional, provided by the RAK5860 WisBlock NB-IoT interface module  |
| One-wire UART      | For communication between the Sensor Probe/Probe IO and the Hub                        |

