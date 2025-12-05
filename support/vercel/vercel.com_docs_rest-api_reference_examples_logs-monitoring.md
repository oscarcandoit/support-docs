---
url: "https://vercel.com/docs/rest-api/reference/examples/logs-monitoring"
title: "Logs and Monitoring - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Examples

Logs and Monitoring

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

- [Get deployment logs and check status](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring#get-deployment-logs-and-check-status)
- [Aggregate logs and send alerts](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring#aggregate-logs-and-send-alerts)

Examples

# Logs and Monitoring

Copy page

Learn how to use the Vercel SDK through real-life examples.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring\#get-deployment-logs-and-check-status)  Get deployment logs and check status

In this example, you retrieve the deployment logs and check the deployment status.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});

async function getLogsAndStatus() {
  try {
    // Get deployment logs
    const logsResponse = await vercel.deployments.getDeploymentEvents({
      idOrUrl: 'project-name-uniqueid.vercel.app',
    });
    if (Array.isArray(logsResponse)) {
      if ('deploymentId' in logsResponse[0]) {
        const deploymentID = logsResponse[0].deploymentId;
        const deploymentStatus = await vercel.deployments.getDeployment({
          idOrUrl: deploymentID,
        });
        console.log(
          `Deployment with id, ${deploymentID} status is ${deploymentStatus.status}`,
        );
      }
      //Display logs with log type, timestamp and text
      for (const item of result) {
        if ('text' in item) {
          console.log(
            `${item.type} at ${new Date(item.created).toLocaleTimeString()}: ${
              item.text
            }`,
          );
        }
      }
    }
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

getLogsAndStatus();
```

## [​](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring\#aggregate-logs-and-send-alerts)  Aggregate logs and send alerts

Create a custom monitoring system that aggregates logs from multiple deployments, analyzes them for errors, and sends alerts if certain thresholds are exceeded.

run.ts

Copy

Ask AI

```
import { Vercel } from '@vercel/sdk';
import * as nodemailer from 'nodemailer';

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_TOKEN,
});
const ALERT_EMAIL = 'alerts@example.com';

interface Log {
  type: string;
  created: number;
  text: string;
}

async function monitorDeployments() {
  try {
    // Get recent deployments
    const deploymentsResponse = await vercel.deployments.getDeployments({
      limit: 5,
      projectId: 'my-project', //The project name used in the deployment URL
    });

    let totalErrors = 0;
    let totalWarnings = 0;

    for (const deployment of deploymentsResponse.deployments) {
      console.log(`Analyzing deployment: ${deployment.uid}`);
      const logsResponse = await vercel.deployments.getDeploymentEvents({
        idOrUrl: deployment.uid,
      });

      if (Array.isArray(logsResponse)) {
        const logs = logsResponse as Log[];
        const errors = logs.filter((log) => log.type === 'error');
        const warnings = logs.filter((log) => log.type === 'warning');
        totalErrors += errors.length;
        totalWarnings += warnings.length;
        console.log(`Errors: ${errors.length}, Warnings: ${warnings.length}`);
        errors.forEach((error) => console.log(`Error: ${error.text}`));
      }
    }

    console.log(
      `Total Errors: ${totalErrors}, Total Warnings: ${totalWarnings}`,
    );

    // Send alert if thresholds are exceeded
    if (totalErrors > 10 || totalWarnings > 20) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: 'your_email@example.com',
          pass: process.env.email_pwd,
        },
      });

      await transporter.sendMail({
        from: '"Vercel Monitor" <monitor@example.com>',
        to: ALERT_EMAIL,
        subject: 'Deployment Alert: High number of errors or warnings',
        text: `Alert: ${totalErrors} errors and ${totalWarnings} warnings detected in recent deployments.`,
      });

      console.log('Alert email sent');
    }
  } catch (error) {
    console.error(
      error instanceof Error ? `Error: ${error.message}` : String(error),
    );
  }
}

monitorDeployments();
```

[Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations) [Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.