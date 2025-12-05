---
url: "https://vercel.com/docs/rest-api/reference/examples/rolling-releases"
title: "Rolling Releases Management - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/rolling-releases#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Rolling Releases Management

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

- [Updating your project’s rolling release configuration](https://vercel.com/docs/rest-api/reference/examples/rolling-releases#updating-your-project%E2%80%99s-rolling-release-configuration)
- [Approve the next stage of a rolling release](https://vercel.com/docs/rest-api/reference/examples/rolling-releases#approve-the-next-stage-of-a-rolling-release)
- [Force completion of a rolling release](https://vercel.com/docs/rest-api/reference/examples/rolling-releases#force-completion-of-a-rolling-release)

Examples

# Rolling Releases Management

Copy page

Learn how to use the Vercel SDK to manage Rolling Releases through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/rolling-releases\#updating-your-project%E2%80%99s-rolling-release-configuration)  Updating your project’s rolling release configuration

In this example, you configure rolling releases for your project with multiple stages. This allows you to gradually roll out deployments to production, starting with a small percentage of traffic and progressively increasing it.

run.ts

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function setRollingReleaseConfig() {
  const result = await vercel.rollingRelease.updateRollingReleaseConfig({
    idOrName: "your-project-id", // Can be project ID or URL-encoded project name
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l", // Optional - required if your token is scoped to multiple teams
    slug: "my-team-url-slug", // Optional - alternative to teamId
    requestBody: {
      target: "production",
      stages: [\
        {\
          targetPercentage: 5,     // Start with 5% of traffic\
          duration: 300           // Wait 5 minutes before next stage\
        },\
        {\
          targetPercentage: 25,    // Then 25% of traffic\
          duration: 600           // Wait 10 minutes\
        },\
        {\
          targetPercentage: 50,    // Then 50% of traffic\
          duration: 900           // Wait 15 minutes if approved\
        },\
        {\
          targetPercentage: 100,   // Finally, 100% of traffic\
        }\
      ]
    }
  });

  console.log("Rolling Release Configuration Updated:", result.rollingRelease);
}

setRollingReleaseConfig();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/rolling-releases\#approve-the-next-stage-of-a-rolling-release)  Approve the next stage of a rolling release

In this example, you manually approve advancing a rolling release to the next stage. This is useful when you have stages configured with `requireApproval: true` and want to control the rollout progression.

run.ts

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function approveNextStage() {
  const projectId = "your-project-id";

  try {
    // First, get the current rolling release status to understand the current state
    const currentStatus = await vercel.rollingRelease.getActiveRollingRelease({
      idOrName: projectId,
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l", // Optional
    });

    if (!currentStatus.rollingRelease || currentStatus.rollingRelease.state !== "ACTIVE") {
      console.log("No active rolling release found for this project");
      return;
    }

    const { rollingRelease } = currentStatus;

    console.log(`Current stage: ${rollingRelease.activeStage?.index} (${rollingRelease.activeStage?.targetPercentage}% traffic)`);
    console.log(`Next stage: ${rollingRelease.nextStage?.index} (${rollingRelease.nextStage?.targetPercentage}% traffic)`);

    if (!rollingRelease.nextStage) {
      console.log("Rolling release is already at the final stage");
      return;
    }

    if (!rollingRelease.nextStage.requireApproval) {
      console.log("Next stage does not require manual approval");
      return;
    }

    // Approve advancing to the next stage
    const approvalResult = await vercel.rollingRelease.approveRollingReleaseStage({
      idOrName: projectId,
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l", // Optional
      requestBody: {
        nextStageIndex: rollingRelease.nextStage.index,
        canaryDeploymentId: rollingRelease.canaryDeployment?.id || "",
      },
    });

    console.log("✓ Rolling release stage approved successfully!");
    console.log(`Advanced to stage ${approvalResult.rollingRelease?.activeStage?.index} (${approvalResult.rollingRelease?.activeStage?.targetPercentage}% traffic)`);

    // Display updated rollout information
    if (approvalResult.rollingRelease?.nextStage) {
      console.log(`Next stage will be: ${approvalResult.rollingRelease.nextStage.index} (${approvalResult.rollingRelease.nextStage.targetPercentage}% traffic)`);
    } else {
      console.log("This was the final stage - rolling release will complete automatically");
    }

  } catch (error) {
    console.error("Failed to approve rolling release stage:", error);
  }
}

approveNextStage();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/rolling-releases\#force-completion-of-a-rolling-release)  Force completion of a rolling release

In this example, you force-complete an active rolling release, immediately promoting the canary deployment to serve 100% of traffic. This is useful for emergency situations or when you want to skip remaining stages.

run.ts

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function forceCompleteRollingRelease() {
  const projectId = "your-project-id";

  try {
    // First, get the current rolling release status
    const currentStatus = await vercel.rollingRelease.getActiveRollingRelease({
      idOrName: projectId,
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l", // Optional
    });

    if (!currentStatus.rollingRelease || currentStatus.rollingRelease.state !== "ACTIVE") {
      console.log("No active rolling release found for this project");
      return;
    }

    const { rollingRelease } = currentStatus;

    console.log(`Current rolling release state: ${rollingRelease.state}`);
    console.log(`Current stage: ${rollingRelease.activeStage?.index} (${rollingRelease.activeStage?.targetPercentage}% traffic)`);
    console.log(`Canary deployment: ${rollingRelease.canaryDeployment?.name} (${rollingRelease.canaryDeployment?.id})`);

    if (!rollingRelease.canaryDeployment?.id) {
      console.error("No canary deployment found to complete");
      return;
    }

    // Confirm the action (in a real scenario, you might want additional checks)
    console.log("⚠️  WARNING: This will immediately promote the canary deployment to 100% traffic");
    console.log(`   Skipping ${rollingRelease.stages?.length - (rollingRelease.activeStage?.index || 0) - 1} remaining stages`);

    // Force complete the rolling release
    const completionResult = await vercel.rollingRelease.completeRollingRelease({
      idOrName: projectId,
      teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l", // Optional
      requestBody: {
        canaryDeploymentId: rollingRelease.canaryDeployment.id,
      },
    });

    console.log("✓ Rolling release completed successfully!");
    console.log(`Final state: ${completionResult.rollingRelease?.state}`);

    // The canary deployment is now the current deployment serving 100% traffic
    if (completionResult.rollingRelease?.currentDeployment) {
      console.log(`New production deployment: ${completionResult.rollingRelease.currentDeployment.name}`);
      console.log(`Production URL: ${completionResult.rollingRelease.currentDeployment.url}`);
    }

    // Log completion time
    if (completionResult.rollingRelease?.updatedAt) {
      const completedAt = new Date(completionResult.rollingRelease.updatedAt);
      console.log(`Completed at: ${completedAt.toISOString()}`);
    }

  } catch (error) {
    console.error("Failed to complete rolling release:", error);

    // Handle specific error cases
    if (error.response?.status === 404) {
      console.error("Project not found or no rolling release configuration exists");
    } else if (error.response?.status === 400) {
      console.error("Invalid request - check the canary deployment ID");
    } else if (error.response?.status === 403) {
      console.error("Insufficient permissions to complete rolling release");
    }
  }
}

forceCompleteRollingRelease();
```

[Vercel WAF Management](https://vercel.com/docs/rest-api/reference/examples/firewall-management)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.