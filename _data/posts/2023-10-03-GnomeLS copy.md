---
title: Menyulap Lockscreen KDE Plasma menjadi seperti Gnome
date: '2020-03-16T05:35:07.322Z'
excerpt: Halo balik lagi sobat linux, khususnya kde fanboy pernah berfikir gk kenapa kita udh ngotak ngatik tema segala macem sampe login screen jg dicustom temanya tapi lockscreennya gitu2 aja tampilannya? Jadi gw smpet penasaran ubek2 file /usr/share sampe ketemu file2 yg cukup suspicious yaitu di folder plasma/look-n-feel. 
coverImage: 'https://extensions.gnome.org/extension-data/screenshots/screenshot_4801.png'
---


Halo balik lagi sobat linux, khususnya kde fanboy pernah berfikir gk kenapa kita udh ngotak ngatik tema segala macem sampe login screen jg dicustom temanya tapi lockscreennya gitu2 aja tampilannya? Jadi gw smpet penasaran ubek2 file /usr/share sampe ketemu file2 yg cukup suspicious yaitu di folder plasma/look-n-feel. Dimana ketika gw buka folder tema default itu ada file2 bernama LocksScreen dan segala macem, dan itu cuman terletak di folder breeze aja ges, since tema breeze itu tema defaultnya KDE. Nah pas gw cek ternyata itu isinya adalah file qml ges, dimana qml layout itu ibaratnya kalo ada yg maen android ya file xml buat ngehandle antarmuka/UI, ato kalo yg maennya webdev ya ibaratnya itu HTMLnya lah. Nah gw iseng ubek2 dokumentasi QML ternyata ini bagian dari QT framework, ternyata itu impact ke UI lockscreen lo loh. Jadi gw putusin buat melajarin gimana caranya ini lockscreen tampilannya makin elegan. Soalnya gw ngiri liat tampilan lockscreenya gnome, kok di KDE agak aneh gt bentuk jamnya shadow wallpapernya jg gak diblur atau digelapin

## Backup first!
## LockScreen.qml
## Clock.qml
## WallpaperFader.qml
## Final Result
jadi jamnya di buat ditengah, ketika lo ngetik sesuatu atau berintaksi lgsg ilang jamnya dan keganti dengan session manager disertai animasi dikit-dikit kaya begini.
Kalo ada yg penasaran gw taro di git juga kok gess filenya hehe.
Nah jadi itu ges sekedar pengalaman gw melajarin qml lockscreenya KDE Plasma, semoga membantu see u on the next post!