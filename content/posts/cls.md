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

## (Optionnel) Obtenir du réseau sur le LiveCD et lancer un serveur SSH

Si vous souhaitez utiliser SSH pour installer votre système, vous devez d'abbord configurer le réseau.

### Configurer le réseau

Si vous disposez d'une connection filaire, le réseau est censé être déjà configuré et prêt à l'emploit. Dans le cas contraire, utilisez la commande `cl-setup-network` comme décrite dans l'acceuil du LiveCD.

Si vous utilisez du wifi, la configuration reste plutôt simple. `nmcli` est déjà disponible sur le live et peut être utilisée de cette manière:

```bash
# Obtenir la liste des réseaux disponibles
nmcli d wifi list
# Se connecter à <réseau>
nmcli d wifi connect <réseau>
# Se connecter à <réseau> avec un mot de passe
nmcli d wifi connect <réseau> password <monsupermotdepasse>
```

Vous pouvez ensuite vérifier que tout est fonctionnel en utilisant, par exemple, `ping github.com`.

### Lancer un serveur SSH

Lancer un serveur SSH est plutôt simple. Il vous suffit d'utiliser `rc-service sshd start` et le tour est joué. Si vous souhaitez modifier certaines configurations de SSH dans `/etc/ssh/sshd_config` et relancer le service avec `rc-service sshd restart`

### Se connecter à la machine

Vous pouvez obtenir l'ip de la machine avec `ip a` et vous connecter ensuite en ssh avec l'utilisateur `root`. Le mot de passe par défaut de celui-ci est "root" mais il peut être changé avec `passwd`.


## Partitionner ses disques

C'est ici que ça commence à être amusant. bien que le partitionnement ne soit pas compliqué en soit, la taille que chaque partition peut être débatue pendant des heures. Voici pour une installation en UEFI, à vous de les adapter en fonction de vos besoins.

|Type de partition|Taille| Dans CFDisk|
|-----------------|------|------------|
|/ (root)         |Au moins 40G| Système de fichiers Linux |
|swap             |Voir [taille du swap](#taille_du_swap)| Partition d'échange Linux |
|/boot/efi(ESP)   |512Mo pour être tranquilles, surtout en cas de Dualboot [Note sur les dualboots](#Note-sur-les-dualboots)| Partition système EFI |
|/home (option) | Taille restante | Système de fichiers Linux |

### Taille du swap

La taille du swap est un grand débat. Etant donné que Calculate inclut [zRam](https://doc.ubuntu-fr.org/zram) par défaut, je trouve que le swap est assez peu utilisé et à partir de 8Go de RAM, j'ai personnelement décidé de le désactiver sur ma machine (je vous conseille de garder 1Go de SWAP "au cas ou", par mesure de sécurité). Pour ceux qui disposent de moins, un swap de la taille de la RAM me semble suffisant. N'hésitez pas à laisser un peu d'espace non alloué afin de pouvoir augmenter la taille de cette partition si besoin.

### Note sur les dualboots

Si vous disposez d'un dualboot, vous devez utiliser la même partition EFI que l'autre OS (que ce soit Windows, une autre distribution GNU/Linux,...). **ATTENTION A NE PAS LA FORMATER**, ça pourrait rendre l'autre Os inutilisable.

Si vous dualbootez avec une autre distribution GNU/Linux, vous **pouvez** choisir de partager le swap entre les 2 distributions, ça ne **devrait** pas poser de problèmes.

### Partitionner les disques

Vous pouvez utiliser `cfdisk` ou `fdisk` pour partitionner vos disques, tout deux sont fournis par défaut dans le LiveCD.

