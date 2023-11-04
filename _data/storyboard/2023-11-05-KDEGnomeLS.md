---
title: Menyulap Lockcreen KDE Plasma menjadi seperti Gnome
date: 2023-11-05
description: Langkah-langkah memodifikasi layout lockscreen KDE Plasma
preview: https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen_preview.jpg?alt=media
tags:
  - Linux
  - KDE Plasma
slug: menyulap-lockcreen-kde-plasma-menjadi-seperti-gnome
---

Hey sobat linux, kali ini gw bakal share tutorial buat custom lockscreen KDE Plasma biar animasi/behavenya mirip dengan lockscreen Gnome. Jadi belum lama sekitar di bulan September lalu gw switch desktop environment dari gnome ke KDE karena ngerasa secara pemakaian cukup berat dan makan resource. Kebetulan gw notice perbedaan antara lockscreenya gnome dan KDE Plasma.

## Let's observe the difference

Bisa dilihat di bawah ini gimana tampilan lockscreen di Gnome.

![Gnome Lockscreen - PopOS 22.04](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-gnome_lockscreen.gif?alt=media)

Dan coba perhatiin di bawah ini lockscreennya KDE Plasma

![KDE Plasma Lockscreen - Fedora KDE 38-1.6](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-kde_lockscreen.gif?alt=media)

Nah kalo diperhatiin baik-baik dari kedua sisi si Plasma dan Gnome ini sama-sama punya dua state lockscreen, state pertama cuman nampilin jam dan state kedua nampilin form untuk login ke lockscreennya. Nah yang gua suka dari gnome ini adalah cara nyajiin komponennya cukup elegan menurut gua, dibuat komponennya bener-bener centered layout dari kedua state.

Di sisi lain kalo si Plasma dia cuman ngeganti state transparasi dan blur di antara kedua state yang menurut gw pribadi gak semenarik punyanya gnome.

## Now the preps

Nah goals dari artikel ini gw mau ngunjukkin gimana caranya kita memimik state yang serupa di kde plasma lockscreen. Lanjut di bawah ini list yang perlu diperhatiin sebelum eksekusi ya:

- Sediain linux dengan Desktop environment KDE Plasma (iyalah kan mau diport di KDE Plasma)
- Buat backupun file nanti sebelum kita otak-atik (kalo ragu bisa dicobain di VM dulu biar aman)
- Gw juga siapin repo khusus buat artikel ini bisa dicek di link [ini](https://github.com/yazidzm010101/kde-plasma-gnomelike-lockscreen) ya

Nah lanjut kita sikat, kuncinya ada di komponen tema default sendiri yaitu breeze theme yang berlokasi di

```
/usr/share/plasma/look-and-feel/org.kde.breeze.desktop/contents
```

Ada dua file yang bakal diedit dari folder diatas yaitu

```
- ./components/WallpaperFader.qml
- ./locsckreen/LockScreenUi.qml
```

Semua file ini berisi layout berekstensi QML, dimana QML sendiri merupakan layouting system yang dimiliki antarmuka aplikasi berbasis QT (dibaca cute in slang) pada desktop environment KDE Plasma.

## Eksekusi

Jujur pas gw pertama kali buka direktori ini gw gk langsung paham apa yg gw kerjain, tp gw coba sedikit baca-baca tentang QML dan sedikit paham lah mungkin dr agan bisa custom lebih jauh lagi. Nah saran gua agan copy dulu semua isi dalem folder tersebut ke tempat terpisah karena kita bakal ngubek-ngubek komponen sistem (walaupun dari KDE plasma ada lockscreen fallbacknya kalo kenapa-napa).

##### LockScreenUi.qml

Pertama ada satu bagian yang memanggil komponen WallpaperFader kaya potongan script di bawah ini

```qml LockScreenUi.qml
WallpaperFader {
    anchors.fill: parent
    state: lockScreenRoot.uiVisible ? "on" : "off"
    source: wallpaper
    mainStack: mainStack
    footer: footer
    clock: clock
}
```

Kita buat komponen ini nerima satu property tambahan dengan nama mainBlock, di mana mainBlock ini si parent yang nampung mainStack (form session user) dan clock (si jam itu sendiri)

```qml LockScreenUi.qml
WallpaperFader {
    anchors.fill: parent
    state: lockScreenRoot.uiVisible ? "on" : "off"
    source: wallpaper
    mainStack: mainStack
    mainBlock: mainBlock
    footer: footer
    clock: clock
}
```

Lanjut di bawahnya ata satu komponen namanya drop shadow kaya begini

```qml LockScreenUi.qml
DropShadow {
    id: clockShadow
    anchors.fill: clock
    source: clock
    visible: !softwareRendering
    radius: 6
    samples: 14
    spread: 0.3
    color : "black" // shadows should always be black
    Behavior on opacity {
        OpacityAnimator {
            duration: PlasmaCore.Units.veryLongDuration * 2
            easing.type: Easing.InOutQuad
        }
    }
}
```

Dengan sengaja disini kita matiin aja dropshadownya dengan value property visiblenya jadi false

```qml LockScreenUi.qml
DropShadow {
    id: clockShadow
    anchors.fill: clock
    source: clock
    // visible: !softwareRendering
    visible: false
    radius: 6
    samples: 14
    spread: 0.3
    color : "black" // shadows should always be black
    Behavior on opacity {
        OpacityAnimator {
            duration: PlasmaCore.Units.veryLongDuration * 2
            easing.type: Easing.InOutQuad
        }
    }
}
```

Di dalem file ini agan cari satu block dengan id "clock" kaya snippet di bawah ini

```qml LockScreenUi.qml
Clock {
    id: clock
    property Item shadow: clockShadow
    visible: y > 0
    anchors.horizontalCenter: parent.horizontalCenter
    y: (mainBlock.userList.y + mainStack.y)/2 - height/2
    Layout.alignment: Qt.AlignBaseline
}
```

Nah kita cukup ubah scriptnya jadi begini

```qml LockScreenUi.qml
 Clock {
    id: clock
    property Item shadow: clockShadow
    visible: y > 0
    anchors.horizontalCenter: parent.horizontalCenter
    // y: (mainBlock.userList.y + mainStack.y)/2 - height/2
    Layout.alignment: Qt.AlignBaseline
}
```

Ya kita cukup set komentar posisi jamnya, karena sekarang posisi jamnya bakalan bersifat kondisional diatur oleh WallpaperFader.qml

##### WallpaperFader.qml

Lanjut di file WallpaperFader.qml ini adalah komponen yang dipanggil di file sebelumnya yg berperan buat ngatur state dan transisi UI Lockscreen, nah di paling atas pas banget ada satu definisi Item kaya gini

```qml WallpaperFader.qml
Item {
    id: wallpaperFader
    property Item clock
    property Item mainStack
    property Item footer
    // some big script below here
}
```

Nah si Item ini kita buat biar bisa nerima parameter mainBlock yang dipanggil di LockScreenUi.qml

```qml WallpaperFader.qml
Item {
    id: wallpaperFader
    property Item clock
    property Item mainStack
    property Item mainBlock
    property Item footer
    // some big script below here
}
```

Lanjut, geser ke bawah di file yang sama ada state definition kaya begini

```qml WallpaperFader.qml
states: [
    State {
        name: "on"
        PropertyChanges {
            target: mainStack
            opacity: 1
        }
        PropertyChanges {
            target: footer
            opacity: 1
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        PropertyChanges {
            target: clock.shadow
            opacity: 0
        }
        PropertyChanges {
            target: clock
            opacity: 1
        }
    },
    // .
    // .
    // .
    // .
    // di bawah ini ada potongan state dengan name "off" harusnya
]
```

Nah kalo udah ketemu potongan kode diatas ubah scriptnya jadi kaya gini

```qml WallpaperFader.qml
states: [
    State {
        name: "on"
        PropertyChanges {
            target: mainStack
            opacity: 1
        }
        PropertyChanges {
            target: footer
            opacity: 1
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        // PropertyChanges {
        //     target: clock.shadow
        //     opacity: 0
        // }
        PropertyChanges {
            target: clock
            opacity: 0
        }
        PropertyChanges {
            target: clock
            y: ((mainBlock.height)/2 - height) - 200
        }
        PropertyChanges {
            target: clock
            scale: 0.5
        }
    },
    // .
    // .
    // .
    // .
    // di bawah ini ada potongan state dengan name "off" harusnya
]
```

Nah script di atas tuh ngelakuin hal-hal berikut:

- State "on" ini adalah ketika lockscreen nerima interaksi dari user (state urutan kedua kalo dari dua gambar gif di atas)
- Shadow jam sengaja dikomen karena di gnome emang gk ada shadow cuman efek blur background doang
- Nah ketika state on jamnya dibuat opacity nya nol, ukurannya dibuat 0.5 dari aslinya
- Posisi y dari jam juga dibuat dengan kalkukasi tinggi parent dibagi dua dikurangi tinggi jam sendiri dan dikurangi 200 unit (dari posisi tengah naik dikit lah intinya)

Lanjut kita bakal ubah juga state "off" nya, aslinya potongan scriptnya kaya begini kurang lebih

```qml WallpaperFader.qml
states: [
    // .
    // .
    // .
    // .
    // di atas ini ada potongan state dengan name "on" harusnya

    State {
        name: "off"
        PropertyChanges {
            target: mainStack
            opacity: 0
        }
        PropertyChanges {
            target: footer
            opacity: 0
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 0
        }
        PropertyChanges {
            target: clock.shadow
            opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        }
        PropertyChanges {
            target: clock
            opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        }
    }
]
```

Nah dibawah ini scriptnya abis gw modif dikit

```qml WallpaperFader.qml
states: [
    // .
    // .
    // .
    // .
    // di atas ini ada potongan state dengan name "on" harusnya

    State {
        name: "off"
        PropertyChanges {
            target: mainStack
            opacity: 0
        }
        PropertyChanges {
            target: footer
            opacity: 0
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        // PropertyChanges {
        //     target: clock.shadow
        //     opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        // }
        PropertyChanges {
            target: clock
            opacity: 1
        }
        PropertyChanges {
            target: clock
            y: (mainBlock.height / 2) - height
        }
        PropertyChanges {
            target: mainBlock
            y: 200
        }
        PropertyChanges {
            target: mainBlock
            scale: 0.5
        }
    }
]
```

Nah gw jelasin dikit beberapa poin perubahannya:

- State "off" ini artinya pas lockscreen pertama kali show, dan lom nerima interaksi apa-apa dari user
- clock shadow sengaja dicomment ya reasonnya sama kaya sebelumnya
- Opacity clock dibuat jadi 1, artinya jamnya keshow pas pertama kali kebuka
- Nah si jamnya posisi y nya gua buat ketengahin ya jadi defaulnya pas lom di apa-apain itu harusnya di tengah layar
- untuk si mainBlocknya ini sebenernya UI form user session yg lagi aktif tapi:
  - posisinya dibuat 200 artinya dibawah dikit daripada si jam
  - dan scalenya dibuat 0.5 biar agak zooming gitu animasinya pas aktif, jadi awalnya sengaja dikecilin
  - dan opacity-nya dibuat 0 biar ada animasi Fading in pas aktif

Last, but not least masih di file yang sama kita ubah script untuk handle transisi nya

```qml WallpaperFader.qml
transitions: [
    Transition {
        from: "off"
        to: "on"
        //Note: can't use animators as they don't play well with parallelanimations
        NumberAnimation {
            targets: [mainStack, footer, clock]
            property: "opacity"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    },
    Transition {
        from: "on"
        to: "off"
        NumberAnimation {
            targets: [mainStack, footer, clock]
            property: "opacity"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    }
]
```

Nah, diubah jadi kaya gini

```qml WallpaperFader.qml
transitions: [
    Transition {
        from: "off"
        to: "on"
        //Note: can't use animators as they don't play well with parallelanimations
        NumberAnimation {
            targets: [mainStack, footer, clock, mainBlock]
            properties: "opacity,y,scale"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    },
    Transition {
        from: "on"
        to: "off"
        NumberAnimation {
            targets: [mainStack, footer, clock, mainBlock]
            properties: "opacity,y,scale"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    }
]
```

Untuk bagian ini kita ubah NumberAnimation nya yang pake parameter property (single) jadi properties (multiple) karena kita ubah statenya gak cuman opacity aja, tapi scale dan juga y nya.

## Final Result

![KDE Plasma Lockscreen Modified - Fedora KDE 38-1.6](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-kde_lockscreen_modified.gif?alt=media)

Nah, kurang lebih gitu mayan panjang tapi mayan ada hal baru yg gw pelajarin tentang QML di KDE Plasma. Moga bisa ngebuat hari agan agak cerah tiap afk dari linuxnya yaa hehe 😏
