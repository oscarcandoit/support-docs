---
url: "https://docs.digitalocean.com/products/droplets/how-to/gpu/configure-multi-node/topo.xml"
title: undefined
---

This XML file does not appear to have any style information associated with it. The document tree is shown below.

<systemversion="1">

<cpunumaid="0"affinity="00000000,00000000,0000ffff,ffffffff,ffffffff"arch="x86\_64"vendor="GenuineIntel"familyid="6"modelid="143">

<pcibusid="ffff:ff:01.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:01:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:01:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_0"dev="0"speed="400000"port="1"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:02.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:02:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:02:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_1"dev="1"speed="400000"port="2"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:03.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:03:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:03:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_2"dev="2"speed="400000"port="3"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:04.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:04:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:04:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_3"dev="3"speed="400000"port="4"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

...

</cpu>

<cpunumaid="1"affinity="ffffffff,ffffffff,ffff0000,0000000,00000000"arch="x86\_64"vendor="GenuineIntel"familyid="6"modelid="143">

<pcibusid="ffff:ff:05.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:05:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:05:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_4"dev="4"speed="400000"port="5"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:06.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:06:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:06:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_5"dev="5"speed="400000"port="6"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:07.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:07:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:07:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_6"dev="6"speed="400000"port="7"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

<pcibusid="ffff:ff:08.0"class="0x060400"link\_speed="32 GT/s"link\_width="16"vendor="0x0000"device="0x0000"subsystem\_vendor="0x0000"subsystem\_device="0x0000">

<pcibusid="0000:08:01.0"class="0x030200"link\_speed="32.0 GT/s PCIe"link\_width="16"/>

<pcibusid="0000:08:02.0"class="0x020000"link\_speed="32.0 GT/s PCIe"link\_width="16">

<nic>

<netname="mlx5\_7"dev="7"speed="400000"port="8"latency="0.000000"maxconn="131072"gdr="1"/>

...

</nic>

...

</pci>

...

</pci>

...

</cpu>

...

</system>