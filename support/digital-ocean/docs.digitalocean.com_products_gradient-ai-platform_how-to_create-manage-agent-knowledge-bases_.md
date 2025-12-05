---
url: "https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/"
title: "How to Create, Edit, and Destroy Knowledge Bases on DigitalOcean Gradient™ AI Platform | DigitalOcean Documentation"
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
- Create and Manage Knowledge Bases

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create, Edit, and Destroy Knowledge Bases on DigitalOcean Gradient™ AI Platform

Validated on 28 Apr 2025 • Last edited on 5 Nov 2025

DigitalOcean Gradient™ AI Platform lets you build fully-managed AI agents with knowledge bases for retrieval-augmented generation, multi-agent routing, guardrails, and more, or use serverless inference to make direct requests to popular foundation models.

A knowledge base stores private data sources such as unstructured files, Spaces folders, or web pages to supplement an agent’s training data and improve response accuracy. Using retrieval-augmented generation (RAG), agents can search and reference external data to deliver more accurate, up-to-date, and domain-specific answers.

When you create a knowledge base, we automatically index your data by transforming it into vector embeddings, numerical representations that capture the meaning of the text and help agents efficiently find relevant information. These embeddings are stored in a [Managed OpenSearch database](https://docs.digitalocean.com/products/databases/opensearch/), which appears in your **Databases** list and you can [scale to increase its performance](https://docs.digitalocean.com/products/databases/opensearch/how-to/resize/).

Knowledge bases support the following data sources:

- [DigitalOcean Spaces buckets](https://docs.digitalocean.com/products/spaces/) or specific folders.
- Direct file uploads from your local machine.
- Public websites crawled at a URL you specify. You can choose to crawl a seed URL or a sitemap URL.
- [Amazon S3 buckets](https://aws.amazon.com/s3/).
- [Dropbox](https://www.dropbox.com/) folders.

Each knowledge base requires at least one data source. You can add more or remove data sources after creation.

## Create a Knowledge Base Using the Control Panel

To create a knowledge base from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), in the left-hand menu, click **Agent Platform**, click the **Knowledge Bases** tab, then click **Create Knowledge Base** to open the creation page.

In the **Configure your knowledge base** section, either keep the autogenerated name or choose a unique name using 3 to 63 characters, including only letters, numbers, dashes, and periods.

### Select Your Data Sources

In the **Select data sources to index** section, click **Select data sources** to open the data source selection window, then click the dropdown menu to select a data source type:

You can add multiple types of data sources to a knowledge base and include as many as needed. To save processing time and cost, organize your files in dedicated [Spaces buckets](https://docs.digitalocean.com/products/spaces/details/features/), specific folders, or local storage containing only relevant files.

Knowledge bases support the following text-based file formats: `.csv`, `.eml`, `.epub`, `.xls`, `.xlsx`, `.html`, `.md`, `.odt`, `.pdf`, `.txt`, `.rst`, `.rtf`, `.tsv`, `.doc`, `.docx`, `.xml`, `.json`, and `.jsonl`.

You can add any of the following data sources:

Spaces Bucket or Folder

[You can add entire DigitalOcean Spaces buckets or select specific folders](https://docs.digitalocean.com/products/spaces/how-to/create/) to organize files in your knowledge base. The system indexes all supported file formats in selected buckets and folders, regardless of privacy settings.

To add a Spaces bucket, select **Spaces Bucket or folder** and choose the buckets you want to index. You can also click the **+** beside buckets to expand their contents and select specific folders within a bucket to limit the indexed content.

For optimal performance and indexing quality, we recommend using five or fewer buckets and uploading only indexing data to your buckets.

File Upload

You can [upload files from your local machine to your Space](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/#upload-files) to be indexed.

URL for Web Crawling

You can add a public seed URL or a sitemap URL for our web crawler to crawl and index content from. Depending on the behavior you select, the crawler follows HTML links on the site, indexes text and certain image types, ignores videos and navigation links, and respects `robots.txt` rules.

For web crawling data sources, the crawler indexes up to 5500 pages and skips inaccessible or disallowed links to prevent excessively large indexing jobs.

To add a URL to crawl, select **URL for web crawling**. You can then choose to specify a seed URL or a sitemap URL.

### Specify Seed URL

To specify a seed URL, select the **Seed URL** option. Then, in the **Seed URL** field, enter the public URL you want to crawl. The crawler indexes pages that are reachable from links you provide in this URL and indexes up to 5500 pages.

Under the **Crawling Rules** section, define the crawl scope:

- **Scoped** crawls only the seed URL.
- **Path** crawls the seed URL and all pages within the same path.
- **Domain** crawls all pages in the same domain.
- **Subdomains** crawls the domain and all its subdomains.

Select the **Index embedded media** option to index supported images and other media encountered during the crawl. To include each page’s header and footer content, such as links in them, select the **Include headers and footers** option. Click **Add URL** to add the seed URL as a data source.

### Specify Sitemap URL

The sitemap URL is a web URL in `.xml` format where you can identify a specific list of URLs to crawl. You can use this option to add scoped URLs all at once instead of adding them individually or choosing a crawling rule for a seed URL.

To specify a sitemap URL, select the **Site map URL** option. Then, in the **Site map URL** field, enter the web URL you want to crawl. For example, `docs.digitalocean.com/sitemap.xml`. Next, select the **Index embedded media** option to index supported media types such as images encountered during the crawl. If you want to include each page’s header and footer content, such as links in them, select the **Include headers and footers** option. Click **Add URL** to add the sitemap URL as a data source.

To verify the crawl completed, re-add the same seed or sitemap URL as a new data source. If it shows zero tokens, the original crawl indexed all content, and you can delete the duplicate.

Amazon S3 Bucket

You can add an Amazon S3 bucket as a data source to your knowledge base.

To add an S3 bucket, select **Amazon S3 Bucket**, and then provide the following credentials in the fields provided:

- **[Access Key ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)**, the IAM access key ID for your S3 bucket
- **Secret Key**, the secret key associated with your access key ID
- **Bucket Name**, the name of the S3 bucket you want to index
- **Region**, the AWS region where your S3 bucket is located, such as `us-east-1` or `eu-west-1`

Click the **+** button to add another S3 bucket as a data source.

Dropbox

You can add a [Dropbox](https://www.dropbox.com/) folder as a data source to your knowledge base.

To add a Dropbox folder, select **Dropbox**, then click **Connect**. This opens a new window where you can log in to your Dropbox account and authorize the connection. Once you’ve authorized the connection, you can select a folder to index back in the **Select data source** window.

After selecting your data source, click **Add selected data source**. If needed, you can add more files later.

View your selected data sources and check the **Status** of each:

- **Ready**, the data source is uploaded and ready for indexing.

- **Error**, the upload or processing failed. Remove the data source and try again. If it fails again, [contact support](https://cloudsupport.digitalocean.com/).

- **Uploading**, the data source is still uploading and not ready for indexing.

To avoid delays, upload fewer than 100 files at a time, each under 2 GB. For larger uploads, use the [DigitalOcean API](https://docs.digitalocean.com/products/spaces/reference/). If uploads continue to stall, [contact support](https://cloudsupport.digitalocean.com/).


Knowledge bases require a new or existing [OpenSearch database](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#opensearch) to store the vector embeddings created from your data. Below the list, **Estimated Size** shows the total size of all uploaded data. Use this value to estimate the final embedding size and allocate at least twice that amount to ensure your database is properly sized to store embeddings. This may affect costs based on [OpenSearch pricing](https://docs.digitalocean.com/products/databases/opensearch/details/pricing/).

### Choose Your OpenSearch Database

In the **Where should your knowledge base live?** section, under the **OpenSearch database options** sub-section, select either **Use existing** to connect to an existing OpenSearch database or **Create new** to provision a new one.

Use Existing OpenSearch Database

If you choose **Use existing**, under the **Select an OpenSearch database** section, click the dropdown menu, then select the database you want to use. If it already contains data, it may limit how much new data you can index. You only pay for successfully indexed data.

Create a New OpenSearch Database

If you choose **Create new**, under the **Choose a datacenter region** section, select the default datacenter region for your knowledge base, or click **Additional datacenter regions** to choose a different one. We recommend choosing the same region as your Gradient AI Platform agents to reduce latency.

New databases are automatically sized to the smallest option that fits your data. We recommend allocating about twice the size of your original dataset to efficiently store embeddings.

### Choose Your Embedding Model

An embedding model converts your data into vector embeddings which are stored in your OpenSearch database. In the **How much will I pay?** section, click the **Embeddings model** dropdown menu, then select a model. You can’t change the model after creating your knowledge base. We offer [multiple embedding models](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#embedding-models) for different use cases, and indexing costs depend on the selected model and the size of your data.

The pricing table estimates token counts and indexing costs based on your dataset size and the model’s token rate. Each row shows the **Dataset Size**, the approximate **Token Count**, and the estimated **Indexing Cost**. Larger datasets generate more tokens, which increases the indexing cost. Pricing scales linearly with both model and data size, and you only pay for successfully indexed data. Final costs may vary. For more details, see our [embedding model pricing](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#knowledge-bases).

### Finalize Details

In the **Final Details** section, under the **Select a project** sub-section, choose the project where you want the knowledge base to live. You can use the default project or select another, and attach the knowledge base to agents in any project.

Under the **Tags** sub-section, add tags to help organize and filter your knowledge base. Tags can include letters, numbers, colons, dashes, and underscores. Choose a tag name, then press `ENTER` or `SPACEBAR` to add it. Use the arrow keys to navigate and the `BACKSPACE` key to remove tags.

After adding your knowledge base to a project and providing your tags, click **Create Knowledge Base**.

### Provisioning Your Knowledge Base

After creation, your knowledge base appears under Gradient AI Platform’s [**Knowledge Bases** tab](https://cloud.digitalocean.com/gen-ai/knowledge-bases).

Provisioning typically takes five minutes or longer while the system processes, embeds, and stores your data. After indexing completes, go to the knowledge base’s **Overview** tab, and then under the **Embeddings Details** section is a summary of the indexing results, including final costs.

You can also enable auto-indexing from the knowledge base’s **Data sources** tab by clicking **Schedule Indexing**. Auto-indexing keeps your knowledge base up to date automatically without manual re-ingest.

If indexing takes longer than expected, let the job continue running until it either completes or fails. If it fails, [check the **Activity** tab for detailed logs to understand what went wrong](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity) (for example, failed or skipped files). After reviewing the logs and fixing any issues, you can click **Re-run job** to restart indexing. If problems persist, [contact support](https://cloudsupport.digitalocean.com/).

### View Indexing Job Logs

When you create or update a knowledge base, the system indexes its data sources. You can track this activity in the **Activity** tab of your knowledge base. To access your knowledge base’s activity logs, go to the [control panel](https://cloud.digitalocean.com/) and click **Agent Platform** in the left menu. Next, click the **Knowledge bases** tab, and then select the knowledge base you want to see activity logs for.

On the knowledge base’s overview page, click the **Activity** tab to view its logs. The **Activity** tab lists the 15 most recent indexing jobs. Since only 15 are stored, we recommend downloading the CSV for each run you perform.

While a job is in progress, the **Activity** tab shows real-time updates. When it finishes, the status helps you interpret the results:

- **Completed**: All files indexed successfully.
- **No Changes**: No updates were detected in the data sources and no files or URLs were re-indexed.
- **Partially Completed**: Some files were indexed, but others were skipped or failed. This may create gaps in knowledge base results.
- **Failed**: No files were indexed, usually due to a system or configuration issue (for example, formatting problems or unsupported characters).

Each log entry shows:

- The overall status (see above).
- How many files were processed, skipped, or failed (for example, “Indexed 0 of 2 files/URLs (0%)”).
- Token usage and charges for the run.
- A timestamp showing when the job ran.
- A per–data source summary (source name and type, number of files scanned, skipped, or failed).

You can then download a CSV file by clicking **Download Details** for debugging or auditing. File-level details, such as filenames and error reasons, are only available in the downloadable CSV. Files with unchanged content are skipped to avoid extra charges. If another indexing job is already running, the new job is skipped since only one job can run at a time.

Logs also include the token count with the indexing rate, for example `0 tokens @ $0.09/1M`. You only pay for successfully indexed data, and prices are rounded down to two decimal places. For more details, see [knowledge base pricing](https://docs.digitalocean.com/products/gradient-ai-platform/details/pricing/#knowledge-bases).

If some files fail, download the CSV for that run to see the specific errors. Fix the issue with your data, re-upload the file, and re-run the job. If problems continue, [contact support](https://cloudsupport.digitalocean.com/).

## Create a Knowledge Base Using the API

To create a knowledge base using the DigitalOcean API, provide a name, an [embedding model](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/#embedding-models), a [data source](https://docs.digitalocean.com/reference/api/digitalocean/#tag/GradientAI-Platform/operation/genai_list_knowledge_base_data_sources), a project ID, and a datacenter region. You can also specify the ID of an existing OpenSearch database. If you don’t, a new one is created and automatically sized to about twice the size of your data to accommodate embeddings.

To list available embedding models and their IDs, call the [`/v2/gen-ai/models` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_models) with the usecases query parameter. After creation, your data sources are indexed.

How to Create a Knowledge Base Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/gen-ai/knowledge_bases`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/genai_create_knowledge_base).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json"  \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/gen-ai/knowledge_bases" \
  -d '{
    "name": "kb-api-create",
    "embedding_model_uuid": "05700391-7aa8-11ef-bf8f-4e013e2ddde4",
    "project_id": "37455431-84bd-4fa2-94cf-e8486f8f8c5e",
    "tags": [\
      "tag1"\
    ],
    "database_id": "abf1055a-745d-4c24-a1db-1959ea819264",
    "datasources": [\
      {\
          "spaces_data_source": {\
              "bucket_name": "test-public-gen-ai",\
              "region": "tor1"\
            }\
      },\
      {\
        "web_crawler_data_source": {\
          "base_url": "https://example.com",\
          "crawling_option": "SCOPED",\
          "embed_media": false,\
          "exclude_tags": ["nav","footer","header","aside","script","style","form","iframe", "noscript"]\
        }\
      }\
    ],
    "region": "tor1",
    "vpc_uuid": "f7176e0b-8c5e-4e32-948e-79327e56225a"
  }'
```

After creating a knowledge base, you can [list all available knowledge bases](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_knowledge_bases), [view details](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_get_knowledge_base), or [update the knowledge base](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_update_knowledge_base).

## Add, Remove, Reindex, or Auto-Index Data Sources Using the Control Panel

You can add, remove, reindex, or enable auto-indexing of existing knowledge base data sources as needed.

To add, remove, or reindex a data source using the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), in the left-hand menu, click **Agent Platform**, click the **Knowledge Bases** tab, find and then select the knowledge base you want to update, then click the **Data sources** tab.

### Add Data Sources

To add a data source from the **Data sources** tab, click **Add source**.

On the **Add Data Source** page, click **Select data source** and then select a data source from the dropdown menu. For detailed information about each data source type, see the [Select Your Data Sources section of the create workflow](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources).

After adding new data sources, review the estimated price to index the data under the **Indexing event summary** section and then click **Index added source**. The data sources are added to the knowledge base and the data is automatically indexed. You can track progress and review results in the [**Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity).

### Remove Data Sources

To remove a data source from the **Data sources** tab, click the **…** menu beside the data source you want to remove and then click **Remove source** from the dropdown menu.

In the **Remove data source** modal, enter the name of the data source to confirm its removal, and then click **Destroy** to remove it.

After removal, the knowledge base automatically reindexes the remaining data sources. You can track the reindexing process in the [**Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity).

### Manually Reindex Data Sources

To manually reindex a data source from the **Data sources** tab, click the **…** menu beside the data source you want to reindex and then click **Update source** from the dropdown menu.

In the confirmation window, click **Update source** to reindex the data. You are only charged for any new data found during the indexing.You can view the results of the reindexing job in the [**Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity).

### Auto-Index Data Sources

You can enable auto-indexing to keep your knowledge base up to date without manual re-ingest. Review indexing details and resolve any data source issues before scheduling to avoid failed jobs or skipped content.

To set up auto-indexing, open the **Data sources** tab, click **Schedule Indexing** on the right to open the **Create Indexing Schedule** window. In this window, under **Days**, select the days you want indexing to run. Under **Trigger Time**, set the time of day using the **Hrs** and **Mins** dropdowns. Scheduling time is in UTC. Lastly, under **Summary**, review your schedule, and then click **Create Indexing Schedule**.

Your schedule appears in the **Data sources** tab with details such as the current schedule, the next scheduled run, the last indexing job (manual or auto-index), whether the last job completed or failed, and when the schedule was created.

Indexing jobs normally generate costs because they process your data and create embeddings. If no changes are detected in the data sources, the job completes with no changes, and you are not billed.

If a manual job starts while another job is running, it queues until the current job finishes. If an auto-indexing job overlaps with another job (manual or scheduled), it is skipped. You can view results of each run in the [**Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity).

Failed auto-indexing jobs do not cancel the schedule. Failures are logged in the [**Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity). Review the logs to identify the cause of the failure, then either wait for the next scheduled run shown in the auto-indexing table or [manually re-run the job](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#manually-reindex-data-source-control-panel).

To manage your indexing schedule, go to the **Data sources** tab, find your schedule, and then click its **…** menu. Then, click either **Pause Indexing**, **Edit Schedule**, or **Destroy**. If you pause indexing, you can resume it in the schedule’s settings. To destroy a schedule, click **Destroy** to open the **Remove Scheduled Indexing** window, type “delete”, and then click **Destroy** to confirm.

## Add, Remove, Reindex, or Auto-index Data Sources Using the API

You can add, remove, reindex, or auto-index existing knowledge base data sources as needed using the API.

### Add a Data Source

To add a data source using the API, provide the knowledge bases unique identifier and specify the Spaces bucket, folder, file, or URL to use. For detailed information about each data source type, see the [Select Your Data Sources section of the create workflow](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources). To retrieve knowledge base IDs, use the [`/v2/gen-ai/knowledge_bases` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_knowledge_bases).

After adding a data source, [start indexing it using the API](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#reindex-data-source-api) to make the content available for retrieval.

How to Add a Data Source Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/genai_create_knowledge_base_data_source).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json"  \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/gen-ai/knowledge_bases/20cd8434-6ea1-11f0-bf8f-4e013e2ddde4/data_sources" \
  -d '{
"knowledge_base_uuid": "20cd8434-6ea1-11f0-bf8f-4e013e2ddde4",
"web_crawler_data_source": {
  "base_url": "https://example.com",
  "crawling_option": "SCOPED",
  "embed_media": false,
  "exclude_tags": ["nav","footer","header","aside","script","style","form","iframe", "noscript"]
}
}'
```

To confirm the data source was added, [list the knowledge base’s data sources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_knowledge_base_data_sources).

### Remove a Data Source

To remove a data source using the API, provide the knowledge base ID and the specific data source ID. This detaches the data source from the knowledge base but does not delete the original source file or URL.

You can find data source IDs by [listing the knowledge base’s data sources](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_knowledge_base_data_sources).

How to Remove a Data Source Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/genai_delete_knowledge_base_data_source).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json"  \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/gen-ai/knowledge_bases/9a6e3975-b0c6-11ef-bf8f-4e013e2ddde4/data_sources/bd2a2db5-b8b0-11ef-bf8f-4e013e2ddde4"
```

### Manually Index a Data Source

To index a data source using the API, create an indexing job with the knowledge base ID and data source ID. Use the [Create Indexing Job](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_create_indexing_job) endpoint to start the process.

How to Start an Indexing Job Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}/indexing_jobs`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/%25!s(%3Cnil%3E)).

You can check the job status using the [Get Indexing Job](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_get_indexing_job) endpoint.

After indexing completes, use the [Get Knowledge Base](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_get_knowledge_base) endpoint to confirm completion and review the final token count and indexing cost.

If the job takes longer than expected, cancel it using the [Cancel Indexing Job](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_cancel_indexing_job) endpoint, then restart it. If issues persist, [contact support](https://cloudsupport.digitalocean.com/) for assistance.

### Auto-index Data Sources

To schedule auto-indexing using the API, create an auto-indexing schedule with the knowledge base ID, the time of day you want the job to run (in UTC, using 24-hour format), and the days of the week to schedule the runs, where days are numbered `1` (Monday) through `7` (Sunday). Use the [Create Scheduled Indexing Job](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_create_scheduled_indexing_job) endpoint.

How to Create an Auto-Indexing Schedule Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/gen-ai/scheduled-indexing`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/genai_create_scheduled_indexing).

### cURL

Using cURL:

```shell
curl --location --request POST 'https://api.digitalocean.com/v2/gen-ai/scheduled-indexing' \
--header 'Authorization: Bearer $DIGITALOCEAN_TOKEN"' \
--header 'Content-Type: application/json' \
--data '{
    "knowledge_base_uuid": "knowledge_base_uuid",
    "time": "18:00",
    "days": [\
        1,\
        2,\
        3\
    ]
}'
```

After you set up auto-indexing, use the [List Scheduled Indexing Jobs for a Knowledge Base](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_scheduled_indexing_jobs) endpoint to verify the schedule on your knowledge base. If you no longer need the schedule, use the [Delete Scheduled Indexing Job](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_delete_scheduled_indexing_job) endpoint.

Deleting a schedule does not affect existing knowledge base data or previously completed indexing jobs.

## Edit Knowledge Base Settings

You can edit an existing knowledge base to change its name, project, or tags, and view details like its embedding model, attached agents, and the OpenSearch database storing its data.

To make changes from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), on the left-hand menu, click **GenAI Platform**, click the **Knowledge Bases** tab, select the knowledge base you want to edit, then open its **Settings** tab. In the **Settings** section, click **Edit** next to the section you want to update, then click **Submit** to apply your changes.

You can edit the following attributes:

- **Knowledge base info**, change the knowledge base name or select a different project.
- **Tags**, add or remove tags.
- **Destroy**, [destroy the knowledge base](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#destroy).

You can view but not edit the following sections:

- **Embeddings Model** shows the model in use and the token rate for indexing events.
- **Associated agents** lists the agents using the knowledge base. You can [attach it to any agent as needed](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/attach-agent-knowledge-bases/#attach) or leave it unattached.
- **OpenSearch DB** shows the database in use and its region. To manage databases, see our [OpenSearch documentation](https://docs.digitalocean.com/products/databases/opensearch/).

After making changes, [check the **Activity** tab to confirm that indexing jobs completed successfully if your edits triggered reindexing](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity).

## Destroy a Knowledge Base Using the Control Panel

If you no longer need a knowledge base, you can permanently and irreversibly delete it along with its embeddings and automated backups. Destroying a knowledge base does not delete the associated OpenSearch database, but [you can delete the database separately](https://docs.digitalocean.com/products/databases/opensearch/how-to/destroy/).

Deleting a knowledge base triggers redeployment of any agents using it and may affect their performance.

To delete a knowledge base from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), in the left-hand menu, click **GenAI Platform**, click the **Knowledge Bases** tab, find the knowledge base you want to destroy, then on the right of it, click **…**, then select **Destroy**.

In the confirmation window, type the knowledge base name to confirm deletion, then click **Destroy** to complete the deletion.

Once a knowledge base is destroyed, its indexing logs are no longer available. If you need to keep activity history for record-keeping or debugging, [download all relevant CSV files from the **Activity** tab](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity) before destroying the knowledge base.

## Destroy a Knowledge Base Using the API

To destroy a knowledge base using the DigitalOcean API, provide its unique identifier. You can retrieve available knowledge bases and their IDs using the [`/v2/gen-ai/knowledge_bases` endpoint](https://docs.digitalocean.com/reference/api/digitalocean/#operation/genai_list_knowledge_bases).

How to Destroy a Knowledge Base Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/gen-ai/knowledge_bases/{uuid}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/genai_delete_knowledge_base).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json"  \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/gen-ai/knowledge_bases/8241f44e-b0da-11ef-bf8f-4e013e2ddde4"
```

In this article...

- [Create a Knowledge Base Using the Control Panel](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#create-control)
  - [Select Your Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#select-your-data-sources)
  - [Choose Your OpenSearch Database](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#opensearch)
  - [Choose Your Embedding Model](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#choose-your-embedding-model)
  - [Finalize Details](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#finalize-details)
  - [Provisioning Your Knowledge Base](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#provisioning-your-knowledge-base)
  - [View Indexing Job Logs](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#activity)
- [Create a Knowledge Base Using the API](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#create-api)
- [Add, Remove, Reindex, or Auto-Index Data Sources Using the Control Panel](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-remove-reindex-or-auto-index-data-sources-using-the-control-panel)
  - [Add Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-data-source-control-panel)
  - [Remove Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#remove-data-source-control-panel)
  - [Manually Reindex Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#manually-reindex-data-source-control-panel)
  - [Auto-Index Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#auto-index-data-source-control-panel)
- [Add, Remove, Reindex, or Auto-index Data Sources Using the API](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-remove-reindex-or-auto-index-data-sources-using-the-api)
  - [Add a Data Source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#add-data-source-api)
  - [Remove a Data Source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#remove-data-source-api)
  - [Manually Index a Data Source](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#reindex-data-source-api)
  - [Auto-index Data Sources](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#auto-index-data-source-api)
- [Edit Knowledge Base Settings](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#edit)
- [Destroy a Knowledge Base Using the Control Panel](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#destroy)
- [Destroy a Knowledge Base Using the API](https://docs.digitalocean.com/products/gradient-ai-platform/how-to/create-manage-agent-knowledge-bases/#destroy-a-knowledge-base-using-the-api)

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