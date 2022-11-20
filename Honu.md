---
tags:
 - Kali
 - linux
---
# Honu the egg of Chaos
Living up to it words the mac running kali broke again just a couple days after I turned it back on.  The probrelm again is the video drivers I should never had tried to get CUDA working.
> [!note]- DD write command
> Source [Kali Linux Live USB Install Procedure](https://www.kali.org/docs/usb/live-usb-install-with-linux/#kali-linux-live-usb-install-procedure)
> ```
> kali@kali:~$ dd if=kali-linux-2022.3-live-amd64.iso of=/dev/sdb conv=fsync bs=4M status=progress
> ```

 - This is writing locally a 3.1 GiB iso at 16.6 MB/s so.....breaktime
 - 