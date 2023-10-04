---
title: Hijab Ibnaty
date: '2020-03-16T05:35:07.322Z'
excerpt: Hello guys, di postingan kali ini gw bakal share pengalaman gw pasang flutter di linux. Flutter sendiri merupakan framework berbasis widget/component dan bersifat cross platform antara android, ios, ataupun web menggunakan satu codebase yang sama. Cara ini seharusnya cukup applicable mau lo make distro apapun, kebetulan distro yg gw pake kali ini adalah Garuda Linux berbasis Arch. Oke tanpa basa basi ini step by step instalasi flutter di linux.
coverImage: '/images/project-hijab.png'
---

Hello guys, di postingan kali ini gw bakal share pengalaman gw pasang flutter di linux. Flutter sendiri merupakan framework berbasis widget/component dan bersifat cross platform antara android, ios, ataupun web menggunakan satu codebase yang sama. Cara ini seharusnya cukup applicable mau lo make distro apapun, kebetulan distro yg gw pake kali ini adalah Garuda Linux berbasis Arch. Oke tanpa basa basi ini step by step instalasi flutter di linux.

## Install Android Studio
Langkah pertama yg gw lakukan adalah memasang android studio, tujuannya cuman manfaatin sdk manager berbasis GUI yang udah terintegrasi dengan baik di andro studio lah. Karena di garuda linux cukup gw repot ketika maintain android sdk dari package manager distro (pacman) buat otak atik permission sama env pathnya. Dengan android studio masalah kaya begini udah gak ada harusnya.

## Inisialisasi Android Studio
Oke lanjut setelah diinstal android studionya, kita next aja untuk accept semua license agreement dari android studio sendiri sekaligus memasang Android SDK melalui android studio. Setelah selesai jangan diclose dulu, buka more SDK Manager, disini kita checklist emulator dan juga android command line toolsnya. Kemudian ini opsional tapi kita jg bisa pasang virtual disk untuk dijalankan nanti lewat emulator atau alternatif lain siapin device android asli untuk dijadiin korban tester lewat adb.

## Download Flutter dari Google Developer
Yup, gw gk pake package manager buat pasang flutter, karena ketika gw cek flutter sendiri suka ngebuat cache di dalam foldernya sendiri ketika ngejalanin perintah tertentu, dan gw entah kenapa selalu gagal untuk set permission flutter di base env pathnya. Jadi biar lebih aman gw download tarball filenya aja di download di home kaya gini. Next tinggal gw extract aja di /home/nama_user/Flutter. Beres.

## Setup environment variable
Next kita perlu setup environment variable supaya setiap app yg dipasang tadi bisa berjalan dengan baik. Pertama env ANDROID_HOME, kemudian flutternya juga, dan terakhir ini opsional flutter web development secara default akan nyari basepath google chrome sebagai browser defaultnya. Tapi lo bisa pake chromium-web based lain (contohnya di gw brave browser) dengan cara setup env variable kaya begini. Next jangan lupa login logout atua restart linux lo biar env variablenya keload ulang lagi

## Flutter Doctor
Last but not least, jalanin perintah flutter doctor -v maka terminal bakal ngelist dependency/requirement yg udah terpenuhi dari flutter apaan aja. Kalo ada yg masih merah mungkin ada yg keskip dr ente pas setup flutter + andro studionya. Jangan lupa juga buat agree all license dari flutter doctor dengan jalanin perintah ini.

## Opsional - VS Code Setup
Ini opsional, tapi gw prefer pake visual studio code buat dev flutter karena lebih enteng ketimbang android studio, since gw gk pake xml based layout alias rada-rada kaya reactjs component based gt jadi gw lebih suka pake code editor biasa + adb/emulator. Nah di marketplace vscode ada satu extension keren tinggal dipasang aja buat ngesulap vscode jadi kaya IDE flutter. Dengan begini lo bisa ngerun dan ngedebug file main.dart pake code editor dan bakalan ngedetect available virtual device yg dipasang sekaligus adb device yg lagi jalan

## Happy Fluttering
Mantap seharusnya dengan begini flutter siap dipake buat ngerjain proyek proyek keren lu di luar sana. Jangan lupa share artikel ini kalo menurut kalian bermanfaat yess. adios~