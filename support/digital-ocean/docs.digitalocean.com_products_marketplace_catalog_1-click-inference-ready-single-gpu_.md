---
url: "https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/"
title: "1-Click Inference Ready - Single GPU | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- 1-Click Inference Ready - Single GPU

[Give Feedback](https://ideas.digitalocean.com/documentation)

# 1-Click Inference Ready - Single GPU

Generated on 22 Jul 2025
from [the 1-Click Inference Ready - Single GPU catalog page](https://marketplace.digitalocean.com/apps/1-click-inference-ready-1x)

Inference Optimized image simplifies the setup and deployment of large language models (LLMs) by leveraging Docker and vLLM, with built-in support for Hugging Face model downloads, speculative decoding, prompt caching and multi-model concurrency.

Users can configure the system to run one, two, or four models concurrently, each with customizable tensor parallelism settings to optimize hardware utilization. If a model isn’t already cached locally, it is automatically downloaded and stored for future use.

The image also includes special handling for FP8 quantization, enabling efficient low-precision inference. Speculative decoding is fully supported, including the use of draft models to enhance performance.

This makes it a powerful, plug-and-play solution for scalable and optimized LLM inference.

## Models Available (H100x8)

### Single Model Mode (8 GPUs)

- `meta-llama/Llama-3.1-8B-Instruct`
- `meta-llama/Llama-3.3-70B-Instruct`
- `meta-llama/Llama-4-Scout-17B-16E-Instruct`
- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B`
- Any **custom model** available on Hugging Face (manual specification)

### Two Models Concurrent Mode (4 GPUs Each)

- `meta-llama/Llama-3.1-8B-Instruct`
- `meta-llama/Llama-3.3-70B-Instruct`
- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B`

### Four Models Concurrent Mode (2 GPUs Each)

- `meta-llama/Llama-3.1-8B-Instruct`
- `meta-llama/Llama-3.3-70B-Instruct-FP8`
- `deepseek-ai/DeepSeek-R1-Distill-Llama-70B-FP8`
- `meta-llama/Llama-3.3-70B-Instruct-FP8-Speculative-Decoding`

> ⚠️ **Licenses**: Please check the respective model licenses on Hugging Face.
>
> Many models require license acceptance before running the automation script.

* * *

## Models Available (Other Nvidia GPUs)

### RTX 4000 ADA

- `meta-llama/Llama-3.1-8B-FP8`

### H100, L40S, or RTX6000 ADA

- `meta-llama/Llama-3.1-8B`
- `meta-llama/Llama-3.1-8B-FP8`
- `mistralai/Mistral-Nemo-Instruct-2407`
- `mistralai/Mistral-Nemo-Instruct-2407-FP8`

* * *

## Hardware Support

- Only supports **DigitalOcean GPU Droplets** with **Nvidia GPUs**
- Supports both **single-GPU** and **multi-GPU** configurations

* * *

## HuggingFace Token

- A HuggingFace Token with **Read** access is required for downloading the models. Note that some models require applications on HuggingFace website to be downloaded.
- The Hugging Face tokens are stored at **/.cache/huggingface** directory, under the **stored\_tokens** and **token** file. Please remove them prior to sharing your droplet to others.

* * *

## Software Included

| Package | Version | License |
| --- | --- | --- |
| Ubuntu | 24.04 LTS | [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html) |
| CUDA Toolkit | 12.9 | [NVIDIA EULA](https://docs.nvidia.com/cuda/eula/index.html) |
| NVIDIA Driver | 575.51.03 | [NVIDIA EULA](https://www.nvidia.com/content/DriverDownloads/licence.php?lang=us) |
| vLLM (vllm-openai container) | 0.9.0 | [Apache 2.0](https://github.com/vllm-project/vllm/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=digitaloceanai-1clickinferencer)

## Creating an App using the API

In addition to creating a Droplet from the 1-Click Inference Ready - Single GPU 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB 1-Click Inference Ready - Single GPU Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"digitaloceanai-1clickinferencer"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying 1-Click Inference Ready - Single GPU

## Getting started after deploying the Inference Optimized image

1. Access the Droplet Console

* * *

1. Navigate to the GPU Droplets page.

2. Locate your newly created Droplet and click on its name.

3. At the top of your screen, select and launch the Web Console.

4. **Note:** For H100x8, it may take an additional 5 minutes for the machine to become fully operational after it has been activated.

5. Login via SSH


* * *

1. If you selected an SSH key during droplet creation:
   - Open your preferred SSH client (e.g., PuTTY, Terminal).
2. Use the droplet’s public IP address to log in as root:


```
ssh root@your_droplet_public_IP
```

3. Ensure your SSH key is added to the SSH agent, or specify the key file directly:

```
ssh -i /path/to/your/private_key root@your_droplet_public_IP
```

4. Once connected, you will be logged in as the root user without needing a password.

5. Execute the Inference Optimized Script


* * *

1. Run the following command:

```
bash run_model.sh
```

2. If it’s your first time, input your Hugging Face token from [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens).

3. You’ll be presented with the following options (for H100x8):
   - Option 1: Single model (8 GPUs, TP=8)
   - Option 2: Two models concurrently (4 GPUs each, TP=4)
   - Option 3: Four models concurrently (2 GPUs each, TP=2)
4. For non-H100x8, available models will depend on GPU type.

5. Select a configuration option and follow the prompts to choose models.


### If Option 1 is selected:

```
Select a model to download and run:
 [0] meta-llama/Llama-3.1-8B-Instruct
 [1] meta-llama/Llama-3.3-70B-Instruct
 [2] meta-llama/Llama-4-Scout-17B-16E-Instruct
 [3] deepseek-ai/DeepSeek-R1-Distill-Llama-70B
 [C] Enter custom model name
```

### If Option 2 is selected:

```
Select TWO models to run concurrently (4 GPUs each):
 [0] meta-llama/Llama-3.1-8B-Instruct
 [1] meta-llama/Llama-3.3-70B-Instruct
 [2] deepseek-ai/DeepSeek-R1-Distill-Llama-70B
```

### If Option 3 is selected:

```
Select FOUR models to run concurrently (2 GPUs each):
Note: You can select the same model multiple times for data parallelism!
 [0] meta-llama/Llama-3.1-8B-Instruct
 [1] meta-llama/Llama-3.3-70B-Instruct-FP8
 [2] deepseek-ai/DeepSeek-R1-Distill-Llama-70B-FP8
 [3] meta-llama/Llama-3.3-70B-Instruct-FP8-Speculative-Decoding
```

For single GPU (example: RTX 6000 ADA), you will see:

```
[INFO] Detected GPU: NVIDIA RTX 6000 Ada Generation
[INFO] GPU Type: RTX6000ADA
[INFO] RTX6000ADA detected - All models are available

Select a model to download and run:
 [0] meta-llama/Llama-3.1-8B
 [1] meta-llama/Llama-3.1-8B-FP8
 [2] mistralai/Mistral-Nemo-Instruct-2407
 [3] mistralai/Mistral-Nemo-Instruct-2407-FP8
 [C] Enter custom model name
```

**Note:** For Options 2 and 3, you can select the same model multiple times to achieve data parallelism.

### Sample Option 3 Walkthrough

```
Choose concurrent model configuration:
 [1] Single model (8 GPUs, tensor-parallel-size=8)
 [2] Two models concurrent (4 GPUs each, tensor-parallel-size=4)
 [3] Four models concurrent (2 GPUs each, tensor-parallel-size=2)

Enter your choice (1-3): 3

Select FOUR models to run concurrently (2 GPUs each):
Enter model choice for slot 1 (0-3): 0
  Slot 1: meta-llama/Llama-3.1-8B-Instruct
Enter model choice for slot 2 (0-3): 1
  Slot 2: meta-llama/Llama-3.3-70B-Instruct-FP8
Enter model choice for slot 3 (0-3): 2
  Slot 3: deepseek-ai/DeepSeek-R1-Distill-Llama-70B-FP8
Enter model choice for slot 4 (0-3): 3
  Slot 4: meta-llama/Llama-3.3-70B-Instruct-FP8-Speculative-Decoding
```

4. Check Deployment Status

* * *

A summary appears as models are downloaded and vLLM containers are created:

```
Waiting for all model APIs to become ready. It is expected to take a few minutes.
  [meta-llama/Llama-3.1-8B-Instruct on port 8000] Waiting for API to be ready... Retry in 10 seconds.
...
Deployment on port 8000 is ✅ Ready!
```

When deployment is ready, you’ll see:

### Running Models and Ports

```
Model 1: meta-llama/Llama-3.1-8B-Instruct
Container: vllm
Port: 8000
CUDA Devices: 0,1
API Endpoint: http://localhost:8000/v1
---
Model 2: meta-llama/Llama-3.3-70B-Instruct-FP8
Container: vllm2
Port: 8001
CUDA Devices: 2,3
API Endpoint: http://localhost:8001/v1
---
Model 3: deepseek-ai/DeepSeek-R1-Distill-Llama-70B-FP8
Container: vllm3
Port: 8002
CUDA Devices: 4,5
API Endpoint: http://localhost:8002/v1
---
Model 4: meta-llama/Llama-3.3-70B-Instruct-FP8-Speculative-Decoding
Container: vllm4
Port: 8003
CUDA Devices: 6,7
API Endpoint: http://localhost:8003/v1
```

### View logs:

```
docker exec vllm tail -n 100 /var/log/vllm.log
docker exec vllm2 tail -n 100 /var/log/vllm.log
docker exec vllm3 tail -n 100 /var/log/vllm.log
docker exec vllm4 tail -n 100 /var/log/vllm.log
```

### Test APIs:

```
curl http://localhost:8000/v1/models
curl http://localhost:8001/v1/models
curl http://localhost:8002/v1/models
curl http://localhost:8003/v1/models
```

* * *

## At this point

The models are now running. You can verify functionality via logs or API calls.

* * *

5. Troubleshooting

* * *

1. If containers are running, check logs:

```
docker exec vllm tail -n 100 /var/log/vllm.log
   docker exec vllm2 tail -n 100 /var/log/vllm.log
   docker exec vllm3 tail -n 100 /var/log/vllm.log
   docker exec vllm4 tail -n 100 /var/log/vllm.log
```

2. Nvidia driver upgrades are held to avoid version mismatches.


   - However, **Ubuntu unattended upgrades** may cause CUDA errors.
   - If errors occur, run:

```
sudo reboot
 bash run_model.sh
```

   - View unattended upgrade logs at:

```
/var/log/apt/history.log
```

3. If you don’t have access to a Hugging Face model, you’ll see:


> Access to model mistralai/Mistral-Nemo-Instruct-2407 is restricted and you are not in the authorized list. Visit [https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407](https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407) to ask for access.

4. For Option 1 with custom models, ensure they fit into H100x8 GPU memory. Most models fit, except very large ones (e.g., `deepseek-ai/DeepSeek-R1`).
5. Hugging Face cache info:

```
/.cache/huggingface
```

- Models are under `hub/`
- Tokens are stored in `stored_tokens` and/or `token` file
- Delete these if you wish to switch Hugging Face tokens

In this article...

- [Models Available (H100x8)](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#models-available-h100x8)
  - [Single Model Mode (8 GPUs)](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#single-model-mode-8-gpus)
  - [Two Models Concurrent Mode (4 GPUs Each)](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#two-models-concurrent-mode-4-gpus-each)
  - [Four Models Concurrent Mode (2 GPUs Each)](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#four-models-concurrent-mode-2-gpus-each)
- [Models Available (Other Nvidia GPUs)](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#models-available-other-nvidia-gpus)
  - [RTX 4000 ADA](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#rtx-4000-ada)
  - [H100, L40S, or RTX6000 ADA](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#h100-l40s-or-rtx6000-ada)
- [Hardware Support](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#hardware-support)
- [HuggingFace Token](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#huggingface-token)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#creating-an-app-using-the-api)
- [Getting Started After Deploying 1-Click Inference Ready - Single GPU](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#getting-started-after-deploying-1-click-inference-ready---single-gpu)
- [Getting started after deploying the Inference Optimized image](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#getting-started-after-deploying-the-inference-optimized-image)
  - [If Option 1 is selected:](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#if-option-1-is-selected)
  - [If Option 2 is selected:](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#if-option-2-is-selected)
  - [If Option 3 is selected:](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#if-option-3-is-selected)
  - [Sample Option 3 Walkthrough](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#sample-option-3-walkthrough)
  - [Running Models and Ports](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#running-models-and-ports)
  - [View logs:](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#view-logs)
  - [Test APIs:](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#test-apis)
- [At this point](https://docs.digitalocean.com/products/marketplace/catalog/1-click-inference-ready-single-gpu/#at-this-point)

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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices