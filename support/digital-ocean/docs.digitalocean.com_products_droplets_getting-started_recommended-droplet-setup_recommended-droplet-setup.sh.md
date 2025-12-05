---
url: "https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/recommended-droplet-setup.sh"
title: undefined
---

#!/bin/bash
set -euo pipefail

USERNAME=sammy # TODO: Customize the sudo non-root username here

\# Create user and immediately expire password to force a change on login
useradd --create-home --shell "/bin/bash" --groups sudo "${USERNAME}"
passwd --delete "${USERNAME}"
chage --lastday 0 "${USERNAME}"

\# Create SSH directory for sudo user and move keys over
home\_directory="$(eval echo ~${USERNAME})"
mkdir --parents "${home\_directory}/.ssh"
cp /root/.ssh/authorized\_keys "${home\_directory}/.ssh"
chmod 0700 "${home\_directory}/.ssh"
chmod 0600 "${home\_directory}/.ssh/authorized\_keys"
chown --recursive "${USERNAME}":"${USERNAME}" "${home\_directory}/.ssh"

\# Disable root SSH login with password
sed --in-place 's/^PermitRootLogin.\*/PermitRootLogin prohibit-password/g' /etc/ssh/sshd\_config
if sshd -t -q; then systemctl restart sshd fi