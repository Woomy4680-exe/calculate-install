---
title: "Installer Calculate GNU/Linux scratch en UEFI"
date: 2021-04-16T14:06:23+02:00
draft: false
---

Ce guide en plusieur étapes à pour but de vous permettre d'install **Calculate GNU/Linux scratch** sur une machine utilisant de **l'UEFI**. Le cas traité ici est un monoboot, mais il peut facilement être adapté à un multiboot.

## Récupération de l'image ISO de Calculate.

L'image ISO de Calculate peut être récupérée sur n'importe quel miroir, [voici une liste qui en contient une partie](https://wiki.calculate-linux.org/nightly). Je vous recommande très fortement de prendre une édition "nightly", celles-ci sont plus à jour et tout aussi stables.

> NOTE: Les Français(es) pourront aussi utiliser [Le miroir Linuxtricks](http://miroir.linuxtricks.fr/)

Il est recommandé de vérifier l'iso afin de ne pas avoir de mauvaises surprises durant l'installation.

## Créer une clé USB bootable de Calculate

Pour toutes les plateformes, je conseille [Ventoy](https://www.ventoy.net/en/index.html), qui vous permettra d'installer plusieurs isos sur la clé et d'utiliser son espace pour vos données.

Si vous êtes sous Windows: Vous pouvez utiliser [rufus](https://rufus.ie), ne disposant pas de windows sous la main, je vous redirige vers [ce tutoriel](https://lecrabeinfo.net/creer-une-cle-usb-bootable-avec-rufus.html)

Si vous êtes sur GNU/Linux, vous pouvez utiliser dd, `man dd` est votre meilleur ami.

## Démarrer Calculate

Démarrez Calculate et martyrisant la touche pour accéder a votre boot menu. GRUB apparait ensuite.
![GRUB](/calculate-install/cls_grub.png)

A ce moment, vous pouvez configurer certaines choses avant de démarrer le livecd. Je vous recommande déjà de vous rendre dans "Timezone Selection" et "Language Selection" qui permettront de ne pas avoir de soucis de timezone / clavier dans le LiveCD.

> NOTE: Vous pouvez également changer les autres options si vous recontrez des problèmes avec le livecd.

