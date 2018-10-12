
# babyIOC
babyIOC is easy to assemble plug and play Debian server with latest NSLS2 EPICS Debian distribution installed, compiled areaDetector package. Prosilica sample IOC is deployed at /epics/iocs. NSLS2 Epics Debian distribution is built from community epicsdeb repository and deployed at /usr/lib/epics/. X2Go server is installed on this system.  

# current Image details
- Debian jessie
- NSLS2 EPICS Debian distribution in /urs/lib/epics
- areaDetector-3-3-1 package 

## Introduction
Building an EPICS Control System from scratch could be a tedious, time consuming and challenging for the beginners.
We offer you an out of the box solution, when you buy and assemble Single Board Computer, load  precreated image onto microSD card, boot the discless babyIOC computer from this microSD card and build your EPICS iocs using prebuild libraries and packages. If community finds this useful, we can add more mudules, sample iocs to ease the learning curve, as well as NSLS2 DAMA bluesky suit, etc.
 
 ## [Assemble the Hardware](HARDWARE.md)


## [Copy Image onto microSD Card](microSDimage.md) 

  
## [You are ready to boot!](readyToBoot.md)

## [Reconfiguring network interfaces](NETWORK.md)

## Credits
* Christopher Stelmach, BNL for adding cutout to the drawing.
*
