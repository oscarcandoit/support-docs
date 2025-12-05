---
url: "https://vercel.com/docs/rest-api/reference/examples/team-management"
title: "Team and User Management - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/team-management#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Team and User Management

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

- [Using the REST API](https://vercel.com/docs/rest-api/reference/welcome)

- [Using the Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk)

- [Errors](https://vercel.com/docs/rest-api/reference/errors)

##### Examples

- [Deployment Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation)
- [Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management)
- [Environment Variables](https://vercel.com/docs/rest-api/reference/examples/environment-variables)
- [Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations)
- [Logs and Monitoring](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring)
- [Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management)
- [Team and User Management](https://vercel.com/docs/rest-api/reference/examples/team-management)
- [Vercel WAF Management](https://vercel.com/docs/rest-api/reference/examples/firewall-management)
- [Rolling Releases Management](https://vercel.com/docs/rest-api/reference/examples/rolling-releases)

On this page

- [Invite a user to a team](https://vercel.com/docs/rest-api/reference/examples/team-management#invite-a-user-to-a-team)

Examples

# Team and User Management

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/team-management\#invite-a-user-to-a-team)  Invite a user to a team

In this example, you will find your team id and invite a new member to that team with a specific role.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function inviteTeamMember() {
  try {
    // Invite a new team member
    const availableTeams = (await vercel.teams.getTeams({})).teams;
    const myTeam = availableTeams.filter(
      (team) => team.slug === 'my-team-slug',
    );
    if (myTeam.length > 0) {
      const teamid = myTeam[0].id;
      const inviteResponse = await vercel.teams.inviteUserToTeam({
        teamId: teamid,
        requestBody: {
          email: 'john@example.com',
          role: 'MEMBER',
        },
      });
      console.log(
        `User with role ${inviteResponse.role} invited: ${inviteResponse.username}`,
      );
    }
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

inviteTeamMember();
```

[Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management) [Vercel WAF Management](https://vercel.com/docs/rest-api/reference/examples/firewall-management)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.