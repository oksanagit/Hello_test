
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
root@oksana-linux:/home/oksana# date; dd if=udooImage of=/dev/sdb bs=64k; date
Thu Oct 11 15:11:48 EDT 2018
243096+0 records in
243096+0 records out
15931539456 bytes (16 GB) copied, 597.654 s, 26.7 MB/s
Thu Oct 11 15:21:45 EDT 2018
root@oksana-linux:/home/oksana# 

You are ready to 
</code></pre>
Word of warning: dd command will happily overwrite your system's hard drive if you use the wrong /dev/sdX and it won't warn you or anything since you are root. Always double check the dd commands! dd stands for Disk Destroyer.

You can plug your microSD card and boot, however if your microSD card size was more then 16GB, you will not be able to use it at this time.

## Extend your disc partition
we used this website as a resource.
The commands below will output information about all your partitions. We will include only the one we are resizing.
<pre><code>
root@oksana-linux:/home/oksana# fdisk -l
......
Disk /dev/sdb: 116.6 GiB, 125174808576 bytes, 244482048 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x9adc4c27

Device     Boot    Start      End  Sectors  Size Id Type
/dev/sdb1  *        2048 29747199 29745152 14.2G 83 Linux
/dev/sdb2       29749246 31115263  1366018  667M  5 Extended
/dev/sdb5       29749248 31115263  1366016  667M 82 Linux swap / Solaris
</code></pre>
  We would like to extend Linux partion, which happened to be the boot partition as well, and the only way to do this is to delete all partions, and recreate them again.
  <pre><code>
  # fdisk /dev/sdb
  </code></pre> 
  1. Delete by pressing "d" and accepting the default suggestion 5, them 2, then 1.
  2. Press "n" to create new partion, 'p' for primary,Last  1, offered default, fist sector offered 2048,since you have to perserve your boot partion beginning, and accept default for your last sector. Your total size is less then you expected, SD card vendors a bit creative with the size definition.
  3. press w to write changes and exit
  
  Now you need to resize your file system to use all available space. If you run #resize2fs /dev/sdb1, you will be asked to run e2fsck first.
  <pre><code>
  #e2fsck -f /dev/sdb1
  </code></pre>
press y (for yes) for offers to correct the errors
 <pre><code>
  #resize2fs  /dev/sdb1
  </code></pre>
  
## You are ready to boot!
Connect a monitor, we used HDMI port, a mouse and keyboard. we used one USB doungle for both periferals. When you power the board, you may see the "no botable device" or another similar error. The bootloader needs to be changed. 
- Keep pressing Esc button, while power is applied. 
<img src=images/IMG_1.JPG width="40%">
- Select Boot Manager. Inside you have to chooselegasy boot option. We have seen different screens for this:
<div class="row">
  <div class="column">
     <img title="Boot Config 1" src=images/IMG_2.JPG width="37%">  
  </div>
 <div class="column">
  <p>
  </p>
  </div>
  <div class="column">
    <img title="Boot Config 2" src=images/IMG_3.JPG width="40%">
  </div>
  </div>

## Credits
* Christopher Stelmach, BNL for adding cutout to the drawing.
*
