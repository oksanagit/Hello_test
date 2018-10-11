# babyIOC
babyIOC is easy to assemble plug and play Debian server with installed latest NSLS2 EPICS Debian distribution, compiled areaDetector package with prosilica sample IOC deployed at /epics/iocs.  NSLS2 Epics Debian distribution is built from community epicsdeb repository and deployed at /usr/lib/epics/. X2Go server is intsalled on this system.  

## Introduction
Building an EPICS Control System from scratch could be a tedious, time consuming and challenging for the beginners.
We offer you an out of the box solution, when you buy and assemble Single Board Computer, load  precreated image onto microSD card, boot the discless babyIOC computer from this microSD card and build your EPICS iocs using prebuild libraries and packages. If community finds this useful, we can add more sample iocs to ease the learning curve, NSLS2 DAMA bluesky suit, etc.
 
 ## Hardware and parts
The selected hardware is [UDOO x86 Ultra board](https://shop.udoo.org/x86/udoo-x86-ultra.html), which can be enhanced with different daughter cards. In this project we use ethernet daughter card, which adds 2 additional interfaces useful in any controls environment.  Though the hardware can be purchased from many distributors, we advise buying directly from [UDOO](https://shop.udoo.org/). They ship fast. 

Parts list:
- UDOO x86 Ultra
- UDOO x86 metal case
- CPU fan for UDOO x86 heatsink 
- M.2 dual Ethernet Module Kit
- Power Supply USA
- HDMI to HDMI cable, or other cable to connect the monitor. We used HDMI port. 


## Assemble the hardware. 
Vendor's instructions how to assemble the hardware can be found [here](https://www.udoo.org/docs-x86/Hardware_&_Accessories/Official_Accessories.html). Vendor's metal case is desiged to hold a board without accesories. In order to use this metal case with ethernet daughter board, one needs to cut an opening in the back side. The original drawing can be found [here](http://download.udoo.org/files//UDOO_X86/mechanical_specs/UDOO_X86_metal_case_drawing.pdf). The needed cut out is indicated on UDOO_X86_metal_case_drawing-MODIFIED.pdf.   

## Copy image onto microSD card. 
- plug in  microSD card into your linux box. We used microSD-miniSD-USB dungle
run cat /proc/partitions to see what the device name is. It ussualy come up as /dev/sdb
<pre><code> 
oksana@oksana-linux:~$ cat /proc/partitions
major minor  #blocks  name

   8        0  244140625 sda
   8        1  234219520 sda1
   8        2          1 sda2
   8        5    9918464 sda5
   8       16  122241024 sdb
   8       17  121634816 sdb1
   8       18          1 sdb2
   8       21     604160 sdb5
</code></pre>
Copy image to microSD card. You should become root.
<pre><code>
hhh
</code></pre>

## Credits
* Christopher Stelmach, BNL for adding cutout to the drawing.
*
