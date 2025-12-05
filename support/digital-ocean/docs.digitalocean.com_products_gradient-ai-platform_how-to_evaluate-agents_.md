---
url: "https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/"
title: "How to Evaluate Agent Performance on DigitalOcean Gradient™ AI Platform | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/gradient-ai-platform.d44093369d163f66a792e27c3d48418be24ba1c7d9e216e99032e5cd6c166096.svg)Gradient AI Platform](https://docs.digitalocean.com/products/gradient-ai-platform/)
- [Getting Started](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/quickstart/)
  - [Test and Compare Models](https://docs.digitalocean.com/products/gradient-ai-platform/getting-started/use-model-playground/)
- [How-Tos](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/)
  - [Use Serverless Inference](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-serverless-inference/)
  - [Manage Partner Provider Model Keys](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-model-provider-keys/)
  - [Manage Workspaces](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-workspaces/)
  - [Create Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-agents/)
  - [Configure Model Settings](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/configure-models/)
  - [Use Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/use-agents/)
  - [Test Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/)
  - [Evaluate Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/)
  - [Create Evaluation Dataset](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-evaluation-datasets/)
  - [View Agent Insights and Logs](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/view-agent-observability/)
  - [Trace Agent Responses](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/trace-agents/)
  - [Route to Multiple Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/route-agents/)
  - [Route Functions in Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/route-agent-functions/)
  - [Manage Agent Versions](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-versions/)
  - [Create and Manage Knowledge Bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/)
  - [Attach and Detach Agent Knowledge Bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/attach-agent-knowledge-bases/)
  - [Manage Agent Guardrails](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-guardrails/)
  - [Destroy Agents](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/destroy-agents/)
- [Reference](https://docs.digitalocean.com/products/gradient-ai-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/genai/)
  - [Python SDK Reference](https://gradientai-sdk.digitalocean.com/api/python)
  - [Agent Evaluation Metrics](https://docs.digitalocean.com/products/gradient-ai-platform/reference/agent-evaluation-metrics/)
  - [Agent Tracing Data](https://docs.digitalocean.com/products/gradient-ai-platform/reference/agent-tracing-metrics/)
- [Concepts](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/)
  - [Context Management Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/context-management/)
  - [Agent Instructions Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/agent-instructions/)
  - [Function Instructions Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/function-instructions/)
  - [Prompt Writing Best Practices](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/prompts/)
  - [Effectively Use Workspaces](https://docs.digitalocean.com/products/gradient-ai-platform/concepts/workspaces/)
- [Details](https://docs.digitalocean.com/products/gradient-ai-platform/details/)
  - [Features](https://docs.digitalocean.com/products/gradient-ai-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/gradient-ai-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/gradient-ai-platform/details/limits/)
  - [Available Models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/)
  - [Data Privacy](https://docs.digitalocean.com/products/gradient-ai-platform/details/data-privacy/)
- [Support](https://docs.digitalocean.com/products/gradient-ai-platform/support/)

- [How-Tos](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/)
- Evaluate Agents

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Evaluate Agent Performance on DigitalOcean Gradient™ AI Platform

Validated on 1 Jul 2025 • Last edited on 14 Nov 2025

DigitalOcean Gradient™ AI Platform lets you build fully-managed AI agents with knowledge bases for retrieval-augmented generation, multi-agent routing, guardrails, and more, or use serverless inference to make direct requests to popular foundation models.

Agent evaluations help you to measure how well your agent performs across a variety of criteria, including response quality, safety, instruction following, and tool handling. You can run evaluations on individual agents or across all agents in a [workspace](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-workspaces/) using customizable test cases and prompts that define what you want to measure and how. Evaluations can provide useful feedback to help you tweak and improve your agent’s responses.

## Create an Evaluation Test Case

Test cases are templates you configure with the metrics and data you want to use to test your agents. For example, you can set up a test case to specifically measure the tone and safety of responses, and then have a second test case that measures for contextual accuracy and other Retrieval-Augmented Generation (RAG) related qualities.

Test cases are linked to the [workspaces](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-workspaces/) you create them in and you cannot move them to other workspaces.

To create a test case from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), in the left hand menu, click **Agent Platform**. From the **Agent workspaces** tab, click the workspace you want to create a test case for. From the workspace’s **Agents** tab, click the **Actions** button, and then select **Create evaluation test case** from the drop-down menu.

On the **Set up an evaluation test case** page, give the test case a name and an optional description.

Under the **What qualities do you want to evaluate agents for?** section, metrics are divided into two overall approaches to measuring agent responses: **General agent quality** and **RAG and Tool Correctness**. The metrics under General Agent Quality column measure responses for safety, correctness, user experience. The metrics under RAG and Tool Correctness measure how effective the agent uses your RAG pipeline and external tools. See our [evaluation metrics reference page](https://docs.digitalocean.com/products/gradient-ai-platform/reference/agent-evaluation-metrics/) for detailed descriptions of each metrics and how they’re scored.

Select the metrics that you want to measure for the test case. You can click the check boxes beside to **General Agent Quality** and **RAG and Tool Correctness** to select all metrics for their respective columns.

Then select one star metric. Star metrics are the most important metrics you want to measure for your agent and their scores determine whether the run passes or fails. For example, if you want to ensure your agent is safe and does not generate harmful content, you can select the **Toxicity** metric as your star metric, and if the agent fails to meet the passing score for the toxicity metric, the test case fails.

Next, in the **What data should we use for this test case?**, add your test prompt dataset. Datasets must be in CSV format and contain a `query` column, like this:

```csv
ID,query
1,"What makes DigitalOcean different from other cloud providers?"
2,"Explain the benefits of using DigitalOcean for startups."
...
```

We recommend having 50 to 100 prompts to get a good representative sample of your agent’s behavior. Your dataset can have a maximum of 500 prompts.

For additional guidance on how to write test prompts for your agents, see [How to Create an Evaluation Dataset](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-evaluation-datasets/).

To add the dataset, click **Add dataset**, select your CSV file from your local machine, and then click **Add**. The file is uploaded to your test case. You can add multiple datasets to a test case.

After uploading your dataset, set the passing score threshold for your star metric in **Define the test case scoring rules** section. This is an arbitrary score you consider a passing score for your agent. It may take a reviewing the results of a few runs and adjusting the scoring threshold to meet your needs of what you consider a passing for failing score.

Before creating your test case, you can review the estimated token usage to run this test case by clicking the arrow beside **Estimated run costs**. Test cases use your [agent’s current configuration](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/) to perform evaluation runs and you are charged for the tokens used during the evaluation runs.

To create the test case, click **Create test case**. This adds the test case to your workspace. You can view it by clicking the workspace’s **Evaluation** tab. You can edit the test case by clicking the **…** menu beside the evaluation and selecting **Edit test case configuration**.

## Run an Evaluation

Once you have created a test case, you can use it to run an evaluation on the agents in your workspace.

To create run an evaluation from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), in the left-hand menu, click **Agent Platform**. From the **Agent workspaces** tab, click the workspace you want to run an evaluation on, then click the the **Evaluations** tab in the workspace. From the list of evaluations, click the **…** menu beside the evaluation you want to run, and then select **Run Evaluation**.

From the **Run an evaluation** page, select which agents you want to run the evaluation on in the workspace by clicking the checkboxes beside each agent. You can run the evaluation on all agents in the workspace by selecting the **Select All** option.

Next, give the run a name to distinguish it from past and future runs. We append each run name with a unique ID that allows you to more easily reference runs.

Before running the evaluation, you can review the estimated token usage to run this test case by clicking the arrow beside **Estimated run costs**. Test cases use your [agent’s current configuration](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/) to perform evaluation runs.

Click **Run Evaluation** to start the run. The run starts and directs you to the run’s overview page where you can view its progress. Runs may take several minutes to complete depending on the complexity of your model’s configuration and prompts.

## Review Run Results

Once a run finishes, you can view its results in the control panel by clicking on the workspace’s **Evaluations** tab and then clicking the test case you previously ran. The test case’s overview page lists the runs for each agent in the **Test case runs** section.

To review the results of a run, either click on the **+** button beside a run to open a list of metric scores, or click on the run’s name to open the run’s overview page. The run’s overview page displays the test case’s configuration, total time to run the evaluation, run cost, and the score for each metric evaluated.

The **Scores** tab displays the average scores for each metric across all the prompts in the dataset. The **Prompts** tab displays the list of prompts used in the run and allows you to review how the agent responded to each prompt.

To review how the agent responded to each prompt, click the **Prompts** tab, locate the prompt you want to review details for, and then click **Prompt details** for that prompt. The prompt details page displays the following information:

- **Input**, your test prompt.
- **Agent response**, the content the agent responded with to the input.
- **Metric scores**, how the individual response score across your selected metrics.
- **Retrieved data from knowledge bases**, the data retrieved from your knowledge bases to form the response.

The details page also displays how many input and output tokens the agent used during the request.

After reviewing the results of your run, you can adjust your model in various ways to improve your agent’s responses. This includes:

- Providing additional context to your agent by [attaching knowledge bases](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/) that contain custom data.
- [Adding or updating guardrails](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/manage-agent-guardrails/) to keep the agent from responding in undesirable ways.
- [Using the Agent Playground](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/test-agents/#model-settings) to refine the agent’s model setting and instructions (system prompt).

Once you’ve adjusted your agent’s configuration, you can re-run the evaluation to see if the agent’s responses have improved and continue to adjust as needed.

In this article...

- [Create an Evaluation Test Case](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/#create-an-evaluation-test-case)
- [Run an Evaluation](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/#run-an-evaluation)
- [Review Run Results](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/evaluate-agents/#review-run-results)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)