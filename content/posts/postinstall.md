---
title: "Postinstall"
date: 2021-04-17T13:28:23+02:00
draft: false
---

## Mettre à jour son système

La **première chose à faire** lorsque vous arrivez sur un système tout frais est de le mettre à jour. Si vous avez besoin, vous pouvez réutiliser `nmcli` pour vous reconnecter au message.

La mise à jour peut être éffectuée via `cl-update` (en root)

## Installer et configurer sudo

Afin d'obtenir les privilèges root en tant qu'utilisateur "classique", sudo peut être utilisé

Installer sudo:

```bash
root@calculate# emerge app-admin/sudo
```

Utilisez ensuite `visudo` pour configurer sudo.

