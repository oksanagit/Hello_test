
# babyIOC
babyIOC is easy to assemble plug and play Debian server with latest NSLS2 EPICS Debian distribution installed and compiled areaDetector package. Prosilica sample IOC is deployed at /epics/iocs. NSLS2 Epics Debian distribution is built from community epicsdeb repository and deployed at /usr/lib/epics/. X2Go server is installed on this system.  

# current Image details
- Debian Jessie
- NSLS2 EPICS Debian distribution in /urs/lib/epics
- areaDetector-3-3-1 with
<ul>
 <ul>
  <li>epics-base R7.0.1.1</li>
  <li>ipac R2.14 </li>
  <li>seq R2.2.5</li>
  <li>asyn R4.33</li>
  <li>autosave R5.9</li>
  <li>busy R1.7</li>
  <li>sscan R2.11.1</li>
  <li>calc R3.7</li>
  <li>ioc-stats R3.1.15</li>
</ul>
</ul>
 

## Introduction
Building an EPICS Control System from scratch could be a tedious, time consuming and challenging for the beginners.
We offer you an out of the box solution, when you buy and assemble Single Board Computer, load  precreated image onto microSD card, boot the discless babyIOC computer from this microSD card and build your EPICS iocs using prebuild libraries and packages. If community finds this useful, we can add more mudules, sample iocs to ease the learning curve, as well as NSLS2 DAMA bluesky suit, etc.
 ## Hardware and parts
The selected hardware is [UDOO x86 Ultra board](https://shop.udoo.org/x86/udoo-x86-ultra.html), which can be enhanced with different daughter cards. In this project we use ethernet daughter card, which adds 2 additional interfaces useful in any controls environment.  Though the hardware can be purchased from many distributors, we advise buying directly from [UDOO](https://shop.udoo.org/). They ship fast. 

Parts list:
- UDOO x86 Ultra
- UDOO x86 metal case
- CPU fan for UDOO x86 heatsink 
- M.2 dual Ethernet Module Kit
- Power Supply USA
- HDMI to HDMI cable, or other cable to connect the monitor. We used HDMI port. 
- microSD memory card 16GB or bigger 

 
 ## [Assemble the Hardware](HARDWARE.md)


## [Copy Image onto microSD Card](microSDimage.md) 

  
## [You are ready to boot!](readyToBoot.md)

## [Reconfiguring network interfaces](NETWORK.md)

## Refferences
- [babyIOC contribution @ EPICS collaboration meeting 2018 in APS](https://epics.anl.gov/meetings/2018-06/talks/06-14/PM/7.11.pdf)
- [EPICS Debian source](https://github.com/epicsdeb)
- [NSLS2 EPICS Debian repository](https://epicsdeb.bnl.gov/debian/)
- [areaDetector package](https://github.com/areaDetector/)

## Credits
* Thomas Smith (BNL) sysadmin project father, 
* Dennis Poshka (BNL) project technician
* Leon Flaks (BNL) image purification for community 
* Matt Cowan (BNL) sysadmin help
* Kevin Peterson (ANL) directions in disc size expention
* 28ID1, Milinda Abeykoon, Julian Adams (BNL) for project support
* Christopher Stelmach (BNL) drawing modification to add a cutof
*
