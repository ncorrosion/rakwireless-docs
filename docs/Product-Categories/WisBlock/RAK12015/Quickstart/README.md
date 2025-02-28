---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12015. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12015/overview/RAK12015_home.png
tags:
  - quickstart
  - wisblock
  - RAK12015
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12015 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12015 WisBlock Vibration Detection Sensor Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12015 WisBlock Vibration Detection Sensor Module](https://store.rakwireless.com/products/wisblock-vibration-sensor-rak12015)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19008 WisBlock IO Extension Cable (optional)](https://store.rakwireless.com/products/wisblock-io-extension-cable-rak19008)
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK12015, a part of WisBlock Sensor, is a Vibration Detection Module that uses a high-precision sensor, the ANT-801S. This sensor is capable of detecting micro shocks or vibration without direction limits. For more information about RAK12015, refer to the [Datasheet](../Datasheet/).

RAK12015 module can be connected to the IO slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/connection.png"
  width="80%"
  caption="RAK12015 Connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/mounting-mechanism.png"
  width="70%"
  caption="RAK12015 assembly to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. 
:::  

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

In this example, you will monitor if this sensor is triggered by nearby vibrations.

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

**RAK4631 Board**
<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**
<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**
<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Copy the example code below:

::: details Click Here to View Example Code
```c
/**
   @file RAK12015_Shock_801S.ino
   @author rakwireless.com
   @brief Setup and read values from a 801S sensor
   @version 0.1
   @date 2021-07-23
   @copyright Copyright (c) 2021
**/

#include <Arduino.h>
#include "Wire.h"
#define SensorOutput   WB_A1
uint8_t interrupt1Flag = 0;

void setup() {
  // put your setup code here, to run once:
  time_t timeout = millis();
  Serial.begin(115200);
  /* WisBLOCK 12015 Power On*/
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  /* WisBLOCK 12015 Power On*/
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }
  //falling edge fires , triggers interrupt a1, and calls the interrupt flag function
  pinMode(SensorOutput, INPUT);
  attachInterrupt(SensorOutput, interruptHandle1, RISING);
  Serial.println("RAK12015 test Example");
}


/*
 * brief:The threshold of the sensor is determined by the resistance of the pull-up resistor. 
 * Now the pull-up resistance is 10K
 */
void loop() {
  // put your main code here, to run repeatedly:
  if (interrupt1Flag == 1)
  {
    Serial.println("Trigger vibration sensor");
    interrupt1Flag=0;
  }
  delay(500);
}

void interruptHandle1(void)
{
  interrupt1Flag = 1;
}
```
:::

:::tip 📝 NOTE:
If you experience any error in compiling the example sketch, check the updated code for the RAK12015 WisBlock Vibration Detection Sensor Module that can be found on the [RAK12015 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/561cfc8ad9d1b0f8c8f2e5c7223f5fd4d45f273f/examples/common/IO/RAK12015_Shock_801S.ino)
:::

4. Then select the right Serial Port and upload the code, as shown in **Figure 9** and **Figure 10**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::


<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/selecting_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/upload.png"
  width="100%"
  caption="Uploading the sample code"
/>

5. When you have successfully uploaded the sample code, lay the module flat on the table and hit or stomp the table, as shown in **Figure 11**. Then, you can open up your serial monitor to get the sensor reading, as shown in **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/hitting_desk.png"
  width="60%"
  caption="Hitting the desk or table to create vibrations"
/>

<rk-img
  src="/assets/images/wisblock/rak12015/quickstart/serial_monitor.png"
  width="100%"
  caption="Triggered sensor reading in Serial Monitor"
/>


