---
url: "https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon"
title: "Supabase Docs | Troubleshooting | Enabling the IPv4 add-on FAQ"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Enabling the IPv4 add-on FAQ

Last edited: 11/26/2025

* * *

Enabling the IPv4 add-on will attach an IPv4 address to your project's compute instance, while preserving the existing IPv6 address. Both DNS records `ref.supabase.co` and `db.ref.supabase.co` will be updated to point to the IPv4 address.

## How much downtime can be expected when enabling the IPv4 add-on? [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#how-much-downtime-can-be-expected-when-enabling-the-ipv4-add-on)

Enabling the IPv4 add-on will not cause any downtime since existing connections will not be dropped. New inbound connections (both direct connections on ports 5432 and 6543, as well as PostgREST requests) will use the newly allocated IPv4 address.

## Will the project instance will be restarted? [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#will-the-project-instance-will-be-restarted)

No, the IPv4 add-on will not require a restart of the instance.

## Will IPv6 address change? [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#will-ipv6-address-change)

The IPv6 address will be preserved. New inbound connections (both direct connections on ports 5432 and 6543, as well as PostgREST requests) will use the newly allocated IPv4 address.

## Will existing connections be dropped? [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#will-existing-connections-be-dropped)

DNS changes do not affect already-established connections, and only new connections will resolve the updated record. For `db.ref.supabase.co` (i.e database connections through ports 5432 and 6543), the existing AAAA record will be updated to an A record pointing to the IPv4 address. This is essentially an in-place update for `db.ref.supabase.co`'s value and record type which would externally translate to an AAAA removal and an A record creation, which mitigates against split moments in time where no record would be available.

## Is it the case that the new IPv4 address cannot be connected until DNS is updated? [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#is-it-the-case-that-the-new-ipv4-address-cannot-be-connected-until-dns-is-updated)

Clients will use the new IPv4 address only after DNS propagation; until then, IPv6 continues to resolve and work for connectivity.

## Removing the IPv4 add-on [\#](https://supabase.com/docs/guides/troubleshooting/enabling-ipv4-addon\#removing-the-ipv4-add-on)

Removing the IPv4 add-on does tend to result in 'downtime' at a sub-minute time interval for database connections, given clients would've resolved the A record which now points to an unassigned IP address, and would need to wait for DNS propagation to go through in order for the AAAA record to be available

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform) [Supavisor](https://supabase.com/docs/guides/troubleshooting?products=supavisor)

* * *

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)