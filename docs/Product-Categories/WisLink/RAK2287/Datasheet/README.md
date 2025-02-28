---
tags:
  - datasheet
  - wislink
  - RAK2287
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287%20CE%20certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287%20FCC%20certification.zip]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287%20IC%20certification.zip]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287_KCC_Certificate.zip]
  - [NCC, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287_NCC_Certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287_REACH_Report.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification-Report/RAK2287_RoHS_Report.pdf]

rak_desc: Provides comprehensive information about your RAK2287 WisLink LPWAN Concentrator to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lora/rak2287/quickstart/1main/RAK2287_home.png
---

# RAK2287 WisLink LPWAN Concentrator Datasheet



## Overview

### Description

**RAK2287** is an LPWAN Concentrator Module with mini-PCIe form factor based on Semtech SX1302, which enables an easy integration into an existing router or other network equipment with LPWAN Gateway capabilities. It can be used in any embedded platform offering a free mini-PCIe slot with SPI connection. Furthermore, **ZOE-M8Q GPS chip** is integrated on board.

This module is an exceptional, complete and cost efficient gateway solution offering up to 10 programmable parallel demodulation paths, an 8 x 8 channel LoRa packet detectors, 8 x SF5-SF12 LoRa demodulators and 8 x SF5-SF10 LoRa demodulators. It is capable of detecting uninterrupted combination of packets at 8 different spreading factors and 10 channels with continuous demodulation of up to 16 packets. This product is best for smart metering fixed networks and Internet-of-Things (IoT) applications, that can cover up to 500 nodes per km² in an environment of moderate interference.

### Features

- Designed based on **Mini PCI-e form factor** with Heat Sink.
- **SX1302 base band processor** emulates 8 x8 channels LoRa packet detectors, 8 x SF5-SF12 LoRa demodulators, 8 x SF5-SF10 LoRa demodulators, one 125 /250 / 500 kHz high-speed LoRa demodulator and one (G)FSK demodulator.
- 3.3V **Mini PCI-e**, compatible with 3G/LTE card of Mini PCI-e type.
- Compatible with **3G/LTE card** of Mini PCI-e type.
- Tx power up to 27dBm, Rx sensitivity down to -139dBm@SF12, BW 125 kHz.
- Supports **global license-free frequency band** (EU868,CN470, US915, AS923, AU915, KR920 and IN865).
- Supports optional SPI interfaces.
- Built-in **ZOE-M8Q GPS** module

## Specifications

### Overview

The overview shows the top and back views of the RAK2287 board. It also presents the block diagram that discusses how the board works. 

#### Board Overview

RAK2287 is a compact LPWAN Gateway Module, making it suitable for integration in systems where mass and size constraints are essential. It has been designed with the PCI Express Mini Card form factor in mind, so it can easily become a part of products that comply with the standard, where they allow cards with a thickness of at least 10.5 mm.

The board has two UFL interfaces for the LoRa and GNSS antennas and a standard 52 pin connector (mPCIe).

<rk-img
  src="/assets/images/wislink-lora/rak2287/datasheet/board-overview/yujozcseyi0lmakv0gtz.jpg"
  width="80%"
  caption="RAK2287 Board Overview"
/>

#### Block Diagram

RAK2287 card is equipped with one SX1302 chip and two SX1250. The first chip is utilized for RF signal and the core of the device. While the latter provides the related LoRa modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one UFL connector is available for external antennas integration.

<rk-img
  src="/assets/images/wislink-lora/rak2287/datasheet/interfaces/block-diagram.png"
  width="80%"
  caption="RAK2287 Block Diagram"
/>

### Hardware

The hardware is categorized into seven parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board. 

#### Interface

##### Power Supply

RAK2287 card must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1302 chip (see [SX1302 Datasheet](https://www.mouser.com/pdfDocs/Semtech_08072019_DS_SX1302_V10-1626824.pdf))

##### SPI Interface

SPI interface mainly provides for the Host_SCK, Host_MISO, Host_MOSI, Host_CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1302 via a synchronous full-duplex protocol. Only the slave side is implemented.

##### UART and I2C Interface

RAK2287 integrates ZOE-M8Q GPS module which has UART and I2C interface. The PINs on golden finger provide an UART connection and an I2C connection, which allows direct access to the GPS module. The PPS signal is not only connected to SX1302 internally, but also connected to golden finger which can be used by host board.

##### GPS_PPS

RAK2287 card includes
the GPS_PPS input for received packets time-stamped.

##### RESET

RAK2287 card includes the RESET active-high input signal to reset the radio operations as specified by the SX1302 Specification[.](#_bookmark73)

##### Antenna RF Interface

The modules have one RF interface over a standard UFL connector (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface.

#### Pin Definition

##### Pinout Diagram

<rk-img
  src="/assets/images/wislink-lora/rak2287/datasheet/pin-definition/vxzsalj5pmn34nysz34q.png"
  width="80%"
  caption="RAK2287 Pinout Diagram"
/>

##### Pinout Description

| **Type** | **Description** |
| -------- | --------------- |
| IO       | Bidirectional   |
| DI       | Digital input   |
| DO       | Digital output  |
| OC       | Open collector  |
| OD       | Open drain      |
| PI       | Power input     |
| PO       | Power output    |
| NC       | No Connection   |

| **Pin No.** | **Mini PCIEx Pin Rev. 2.0** | **RAK2287 Pin** | **Type** | **Description**                             | **Remarks**                                                                 |
| ----------- | --------------------------- | --------------- | -------- | ------------------------------------------- | --------------------------------------------------------------------------- |
| **1**       | WAKE#                       | NC     |       | No Connection                               |                                                                             |
| **2**       | 3.3Vaux                     | 3V3             | PI       | 3.3V DC supply                              |                                                                             |
| **3**       | COEX1                       | NC     |        | No Connection                               |                                                                             |
| **4**       | GND                         | GND             |          | Ground                                      |                                                                             |
| **5**       | COEX2                       | NC     |        | No Connection                               |                                                                             |
| **6**       | 1.5V                        | GPIO(6)         | IO       |                                             | Connect to SX1302’s GPIO[6].                                                |
| **7**       | CLKREQ#                     | NC      |        | No Connection                               |                                                                             |
| **8**       | UIM_PWR                     | NC              |          | No Connection                               |                                                                             |
| **9**       | GND                         | GND             |          | Ground                                      |                                                                             |
| **10**      | UIM_DATA                    | NC              |          | No Connection                               |                                                                             |
| **11**      | REFCLK-                     | NC   |        | No Connection                               |                                                                             |
| **12**      | UIM_CLK                     | NC              |          | No Connection                               |                                                                             |
| **13**      | REFCLK+                     | MCU_NRESET      | DI       | No Connection by default                    | Reserved for future applications                                            |
| **14**      | UIM_RESET                   | NC              |          | No Connection                               |                                                                             |
| **15**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **16**      | UIM_VPP                     | NC              |          | No Connection                               |                                                                             |
| **17**      | RESERVED                    | NC              |          | No Connection                               |                                                                             |
| **18**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **19**      | RESERVED                    | PPS             | DO       | Time pulse output                           | Leave open if not used.                                                     |
| **20**      | W_DISABLE#                  | NC              |          | No Connection                               |                                                                             |
| **21**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **22**      | PERST#                      | SX1302_RESET    | DI       | RAK2287 reset input                         | Active high, ≥100ns for SX1302 reset.                                       |
| **23**      | PERn0                       | RESET_GPS       | DI       | GPS module ZOE-M8Q reset inputs             | Active low, Leave open if not used.                                         |
| **24**      | 3.3Vaux                     | 3V3             | PI       | 3.3V DC supply                              |                                                                             |
| **25**      | PERp0                       | STANDBY_GPS     | DI       | GPS module ZOE-M8Q external interrupt input | Active low, Leave open if not used.                                         |
| **26**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **27**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **28**      | 1.5V                        | NC              |          | No Connection                               |                                                                             |
| **29**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **30**      | SMB_CLK                     | I2C_SCL         | IO       | HOST SCL                                    | Connect to GPS module ZOE-M8Q’s SCL internally. Leave open if not used.     |
| **31**      | PETn0                       | PI_UART_TX      | DI       | HOST UART_TX                                | Connect to GPS module ZOE-M8Q’s UART_RX internally. Leave open if not used. |
| **32**      | SMB_DATA                    | I2C_SDA         | IO       | HOST SDA                                    | Connect to GPS module ZOE-M8Q’s SDA internally. Leave open if not used.     |
| **33**      | PETp0                       | PI_UART_RX      | DO       | HOST UART_RX                                | Connect to GPS module ZOE-M8Q’s UART_TX internally. Leave open if not used. |
| **34**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **35**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **36**      | USB_D-                      | USB_DM          | IO       | USB differential data (-)                   | Require differential impedance of 90Ω.                                      |
| **37**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **38**      | USB_D+                      | USB_DP          | IO       | USB differential data (+)                   | Require differential impedance of 90Ω.                                      |
| **39**      | 3.3Vaux                     | 3V3             | PI       | 3.3V DC supply                              |                                                                             |
| **40**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **41**      | 3.3Vaux                     | 3V3             | PI       | 3.3V DC supply                              |                                                                             |
| **42**      | LED_WWAN#                   | NC              |          | No Connection                               |                                                                             |
| **43**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **44**      | LED_WLAN#                   | NC              |          | No Connection                               |                                                                             |
| **45**      | RESERVED                    | HOST_SCK        | I/O      | Host SPI CLK                                |                                                                             |
| **46**      | LED_WPAN#                   | NC              |          | No Connection                               |                                                                             |
| **47**      | RESERVED                    | HOST \_MISO     | I/O      | Host SPI MISO                               |                                                                             |
| **48**      | 1.5V                        | NC              |          | No Connection                               |                                                                             |
| **49**      | RESERVED                    | HOST \_MOSI     | I/O      | Host SPI MOSI                               |                                                                             |
| **50**      | GND                         | GND             |          | Ground                                      |                                                                             |
| **51**      | RESERVED                    | HOST \_CSN      | I/O      | Host SPI CS                                 |                                                                             |
| **52**      | 3.3Vaux                     | 3V3             | PI       | 3.3V DC supply                              |                                                                             |

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels, allowing easy configuration while building the firmware from the source code.

| **Region**    | **Frequency ( MHz )** |
| ------------- | --------------------- |
| Europe        | EU868                 |
| North America | US915                 |
| Asia          | AS923                 |
| Australia     | AU915                 |
| Korea         | KR920                 |
| Indian        | IN865                 |
| China         | CN470                 |

##### RF Characteristics

The following table gives typically sensitivity level of the RAK2287 card.

| **Signal Bandwidth / \[KHz\]** | **Spreading Factor** | **Sensitivity / \[dBm\]** |
| ------------------------------ | -------------------- | ------------------------- |
| 125                            | 12                   | -139                      |
| 125                            | 7                    | -125                      |
| 250                            | 7                    | -123                      |
| 500                            | 12                   | -134                      |
| 500                            | 7                    | -120                      |

#### Electrical Requirements

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or at any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.

The operating condition range defines those limit within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

##### Absolute Maximum Rating

Limiting values given below are in accordance with the Absolute Maximum Rating System (IEC 134).

| **Symbol** | **Description**       | **Condition**                              | **Min.** | **Max.**  |
| ---------- | --------------------- | ------------------------------------------ | -------- | --------- |
| 3.3Vaux    | Module supply voltage | Input DC voltage at 3.3Vaux pins           | -0.3V    | 3.6V      |
| USB        | USB D+/D- pins        | Input DC voltage at USB interface pins     |          | 3.6V      |
| RESET      | RAK2287 reset input   | Input DC voltage at RESET input pin        | -0.3V    | 3.6V      |
| SPI        | SPI interface         | Input DC voltage at SPI interface pin      | -0.3V    | 3.6V      |
| GPS_PPS    | GPS 1 pps input       | Input DC voltage at GPS_PPS input pin      | -0.3V    | 3.6V      |
| Rho_ANT    | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 |          | 10:1 VSWR |
| Tstg       | Storage Temperature   |                                            | -40°C    | 85°C      |

::: warning ⚠️ WARNING
The product is not protected against overvoltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::

##### Maximum ESD

The table below lists the maximum ESD.

| **Parameter** | **Min** | **Typical** | **Max** | **Remarks**                                |
| ------------- | ------- | ----------- | ------- | ------------------------------------------ |
| ESD_HBM       |         |             | 1000V   | Charged Device Model JESD22-C101 CLASS III |
| ESD_CDM       |         |             | 1000V   | Charged Device Model JESD22-C101 CLASS III |

::: tip 📝 NOTE
Although this module is designed to be as robust as possible, electrostatic discharge (ESD) can damage this module. This module must be protected at all times from ESD when handling or transporting. Static charges may easily produce potentials of several kilovolts on the human body or equipment, which can discharge without detection. Industry-standard ESD handling precautions should be used at all times.
:::

##### Power Consumption

| **Mode**         | **Condition**                                     | **Min.** | **Typical** | **Max.** |
| ---------------- | ------------------------------------------------- | -------- | ----------- | -------- |
| Active-Mode(TX)  | The power of TX channel is 27dBm and 3.3V supply. | 511 mA   | 512 mA      | 513 mA   |
| Active-Mode(RX ) | TX disabled and RX enabled.                       | 70 mA    | 81.6 mA     | 101 mA   |

##### Power Supply Range

The table below lists the power supply range.

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch-on the module.

| **Symbol** | **Parameter**                           | **Min**. | **Typical** | **Max**. |
| ---------- | --------------------------------------- | -------- | ----------- | -------- |
| 3.3Vaux    | Module supply operating input voltage14 | 3 V      | 3.3 V       | 3.6 V    |

#### Mechanical Characteristics

The board weighs 16.3 grams, it is 30 mm wide and 50.96 mm tall. The dimensions of the module fall completely within the **PCI Express Mini Card Electromechanical Specification**, except of the card's thickness (10.5 mm at its thickest).

<rk-img
  src="/assets/images/wislink-lora/rak2287/datasheet/mechanical/dimension.png"
  width="80%"
  caption="RAK2287 Board Dimensions"
/>

#### Environmental Requirements

##### Operating Conditions

The table below lists the operation temperature range

| **Parameter**                | **Min**. | **Typical** | **Max**. | **Remarks**                                                                        |
| ---------------------------- | -------- | ----------- | -------- | ---------------------------------------------------------------------------------- |
| Normal operating temperature | -40°C    | +25°C       | +85°C    | Normal operating temperature range (fully functional and meet 3GPP specifications) |

::: tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°C. Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

#### Schematic Diagram

RAK2287 card refers to Semtech's reference design of SX1302. The SPI interface can be used on PCIE connector. The next figure shows the minimum application schematic of RAK2287 card. You should use it at least 3.3V/1A DC power, connect SPI interface to the main processor.

<rk-img
  src="/assets/images/wislink-lora/rak2287/datasheet/schematic-diagram/gpvh8ltdwzxkureac6jq.jpg"
  width="80%"
  caption="Schematic Diagram of RAK2287"
/>

### Software

Download the latest firmware of the RAK2287 WisLink-LoRa in the table provided below.

#### Firmware

| Model   | Raspberry Pi Board  | Firmware Version | Source                                                                                                    |
| ------- | ------------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| RAK2287 | Raspberry Pi 3B+, 4 | V4.2.5_20200909  | [Download](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/RAK2287_Latest_Firmware.zip) |

## Models / Bundles

**Order Information**

In general, the RAK2287's variation is defined as **RAK2287 - XY**, where **X is the model variant** and **Y is the supported region**. Take a look at the tables below to know the variants and their individual specification.

| Parameter            | Variations                                                       |
| -------------------- | ---------------------------------------------------------------- |
| X - Model Variant    | S; M; A; C                                                       |
| Y - Supported Region | 3 - EU868; 4 - US915; 5 - KR920; 6 - AS923; 7 - IN865; 8 - AU915 |

The table below shows the board order configurations of the RAK2287 WisLink LPWAN Concentrator.

| Model      | SX1302 on board | STM32L412Kx on board | GPS module on board | SPI Interface | USB Interface |
| ---------- | --------------- | -------------------- | ------------------- | ------------- | ------------- |
| RAK2287-SY | √               |                      | √                   | √             |               |
| RAK2287-MY | √               |                      |                     | √             |               |
| RAK2287-AY | √               | √                    | √                   |               | √             |
| RAK2287-CY | √               | √                    |                     |               | √             |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
