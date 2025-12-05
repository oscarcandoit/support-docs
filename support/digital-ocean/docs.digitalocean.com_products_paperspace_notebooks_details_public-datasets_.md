---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/"
title: "Public Datasets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/quickstart/)
    - [Create a Jupyter Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/)
    - [Run Example Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
    - [Create Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/)
    - [Swap Machines](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/)
    - [Fork Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/fork-notebooks/)
    - [Share Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/share-notebooks/)
    - [Add Run on Gradient Badge](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/)
    - [Mount Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/)
    - [Transfer Datasets and Files](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/)
    - [Connect Data Sources](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/)
    - [Set Up Storage Providers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/)
    - [Manage Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/)
    - [Use Terminal](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-terminal/)
    - [Connect to Kernel](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-remote-kernel/)
    - [Restart Kernels](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/restart-kernels/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-containers/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-metrics/)
    - [Use TensorBoard](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-tensorboard/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/notebooks/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/)
    - [Notebook Templates](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/)
  - [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/notebooks/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/notebooks/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/notebooks/details/limits/)
    - [Public Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/)
    - [Storage Architecture](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/)
    - [Storage Types](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/notebooks/support/)

- [Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
- [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
- Public Datasets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Public Datasets

Validated on 8 May 2024 • Last edited on 28 May 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

A read-only collection of public datasets is available for free to use with Notebooks and Workflows.

- **Notebooks**: Datasets are available in the `/datasets` directory, for example, `/datasets/mnist`. You can also see these datasets in the Paperspace console by clicking the **Public** tab.
- **Workflows**: Datasets are in the Gradient namespace, for example, in YAML, `ref: gradient/mnist`.

The following table shows the available public datasets:

| Name | Description | Source |
| --- | --- | --- |
| `chest-xray-nihcc-3` | NIH Chest X-ray dataset comprising frontal-view X-ray images of unique patients with text-mined 14 disease image labels. | [https://nihcc.app.box.com/v/ChestXray-NIHCC](https://nihcc.app.box.com/v/ChestXray-NIHCC) |
| `coco` | COCO, a large-scale object detection, segmentation, and captioning dataset. | [http://cocodataset.org](http://cocodataset.org/) |
| `conll2003` | CoNLL 2003, a named entity recognition dataset. | [https://www.clips.uantwerpen.be/conll2003/ner/](https://www.clips.uantwerpen.be/conll2003/ner/) |
| `dfki-sentinel-eurosat` | EuroSAT, a land use and land cover classification dataset based on Sentinel-2 satellite images. | [https://madm.dfki.de/downloads](https://madm.dfki.de/downloads) |
| `dolly-v2-12b` | Dataset for Dolly, instruction-following large language model trained on the Databricks machine learning platform. | [https://github.com/databrickslabs/dolly](https://github.com/databrickslabs/dolly) |
| `fastai` | Paperspace’s Fast.ai template is built for getting up and running with the Fast.ai online MOOC named [Practical Deep Learning](https://course.fast.ai/). | [https://registry.opendata.aws](https://registry.opendata.aws/) |
| `gcl` | Paperspace notebook logger key store. |  |
| `glue` | General Language Understanding Evaluation (GLUE) dataset for multi-task benchmarking and analysis platform for natural language understanding. | [https://gluebenchmark.com](https://gluebenchmark.com/) |
| `ieee-fraud-detection` | Vesta’s real-world e-commerce transactions containing a range of features from device type to product features. | [https://www.kaggle.com/c/ieee-fraud-detection](https://www.kaggle.com/c/ieee-fraud-detection) |
| `librispeech_asr` | Data from read audiobooks from the LibriVox project | [https://www.openslr.org/12](https://www.openslr.org/12) |
| `llama` | Dataset consisting of question-answer pairs and source context to benchmark RAG pipelines for different use cases. | [https://llamahub.ai/?tab=llama\_datasets](https://llamahub.ai/?tab=llama_datasets) |
| `lsun` | Large-scale Scene Understanding (LSUN) dataset containing around one million labeled images for each of 10 scene categories and 20 object categories. | [https://github.com/fyu/lsun](https://github.com/fyu/lsun) |
| `mnist` | The Modified National Institute of Standards and Technology database of handwritten digits with a training set of 60,000 examples, and a test set of 10,000 examples. | [http://yann.lecun.com/exdb/mnist/](http://yann.lecun.com/exdb/mnist/) |
| `ogb_lsc_pcqm4mv2` | Quantum chemistry dataset originally curated under the PubChemQC project. OGB-LSC is the Large Scale Competition by Open Graph Benchmark for graph structured data. | [https://ogb.stanford.edu/docs/lsc/pcqm4mv2](https://ogb.stanford.edu/docs/lsc/pcqm4mv2) |
| `ogbl_wikikg2_custom` | Knowledge Graph extracted from the [Wikidata](https://en.wikipedia.org/wiki/Wikidata) knowledge base. | [https://ogb.stanford.edu/docs/linkprop/#ogbl-wikikg2](https://ogb.stanford.edu/docs/linkprop/#ogbl-wikikg2) |
| `ogbn_arxiv` | Directed graph, representing the citation network between all Computer Science arXiv papers indexed by [Microsoft Academic Graph (MAG)](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/). Each node is an arXiv paper and each directed edge indicates that one paper cites another one. | [https://ogb.stanford.edu/docs/nodeprop/#ogbn-arxiv](https://ogb.stanford.edu/docs/nodeprop/#ogbn-arxiv) |
| `openslr` | Open Speech and Language Resources dataset number 12, the LibriSpeech ASR corpus. | [https://www.openslr.org/resources.php](https://www.openslr.org/resources.php) |
| `pyg-cora` | Scientific publications classified into one of 7 classes. | [https://people.cs.umass.edu/~mccallum/data.html](https://people.cs.umass.edu/~mccallum/data.html) |
| `pyg-fb15k-237` | FB15K237 dataset containing 14,541 entities, 237 relations and 310,116 fact triples. | [https://pytorch-geometric.readthedocs.io/en/latest/generated/torch\_geometric.datasets.FB15k\_237.html](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.FB15k_237.html) |
| `pyg-qm9` | QM9 dataset consisting of about 130,000 molecules with 19 regression targets | [https://pytorch-geometric.readthedocs.io/en/latest/generated/torch\_geometric.datasets.QM9.html](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.QM9.html) |
| `pyg-reddit` | Reddit dataset containing posts belonging to different communities. | [https://pytorch-geometric.readthedocs.io/en/latest/generated/torch\_geometric.datasets.Reddit.html](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.Reddit.html) |
| `pyg-tudataset` | Graph kernel benchmark datasets collected from the TU Dortmund University | [https://pytorch-geometric.readthedocs.io/en/latest/generated/torch\_geometric.datasets.TUDataset.html](https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.datasets.TUDataset.html) |
| `realistic-vision-v2-0` | Fine-tuned stable diffusion model. | [https://huggingface.co/SG161222/Realistic\_Vision\_V2.0](https://huggingface.co/SG161222/Realistic_Vision_V2.0) |
| `squad` | Stanford Question Answering Dataset (SQuAD), a reading comprehension dataset consisting of questions on a set of Wikipedia articles | [https://rajpurkar.github.io/SQuAD-explorer/](https://rajpurkar.github.io/SQuAD-explorer/) |
| `stable-diffusion-classic` | Dataset containing a Safetensors checkpoint for the Stable Diffusion v1-5 model from RunwayML and StabilityAI. | [https://stability.ai/stable-image](https://stability.ai/stable-image) |
| `stable-diffusion-classic-v2` | Dataset containing a Safetensors checkpoint for the Stable Diffusion v2 model from StabilityAI. | [https://stability.ai/stable-image](https://stability.ai/stable-image) |
| `stable-diffusion-diffusers` | Dataset containing the Diffusers model files for the Stable Diffusion v1.5 model from StabilityAI. | [https://github.com/Stability-AI/diffusers](https://github.com/Stability-AI/diffusers) |
| `stable-diffusion-diffusers-v2` | Dataset containing the Diffusers model files for the Stable Diffusion v2 model from StabilityAI. | [https://github.com/Stability-AI/stablediffusion](https://github.com/Stability-AI/stablediffusion) |
| `stable-diffusion-v2-1` | Dataset containing the Diffusers and Safetensors checkpoint model files for the Stable Diffusion v2-1 model from StabilityAI (756p). | [https://github.com/Stability-AI/stablediffusion](https://github.com/Stability-AI/stablediffusion) |
| `stable-diffusion-v2-1-512` | Dataset containing the Diffusers and Safetensors checkpoint model files for the Stable Diffusion v2-1 model from StabilityAI (512p). | [https://github.com/Stability-AI/stablediffusion](https://github.com/Stability-AI/stablediffusion) |
| `stable-diffusion-v2-base-classic` | Dataset containing a Safetensors checkpoint for the Stable Diffusion v2 model from StabilityAI. | [https://github.com/Stability-AI/stablediffusion](https://github.com/Stability-AI/stablediffusion) |
| `stable-diffusion-xl` | Dataset containing the Diffusers and Safetensors checkpoint model files for the Stable Diffusion XL model from StabilityAI (1024p). | [https://github.com/Stability-AI/stablediffusion](https://github.com/Stability-AI/stablediffusion) |
| `superb` | Speech processing Universal PERformance Benchmark (SUPERB) dataset to benchmark shared model performance across a wide range of speech processing tasks. | [https://superbbenchmark.org/](https://superbbenchmark.org/) |
| `swag` | Situations With Adversarial Generations (SWAG) dataset for grounded commonsense inference, unifying natural language inference and physically grounded reasoning | [https://rowanzellers.com/swag/](https://rowanzellers.com/swag/) |
| `tiny-imagenet-200` | A subset of the ImageNET dataset created by the Stanford CS231n course, spanning 200 image classes with 500 training examples per class, 50 validation, and 50 test examples per class. | [http://cs231n.stanford.edu/tiny-imagenet-200.zip](http://cs231n.stanford.edu/tiny-imagenet-200.zip) |
| `wikitext` | Language modeling dataset containing over 100 million tokens extracted from the verified [good](https://en.wikipedia.org/wiki/Wikipedia:Good_articles) and [featured](https://en.wikipedia.org/wiki/Wikipedia:Featured_articles) articles on Wikipedia. | [https://blog.einstein.ai/the-wikitext-long-term-dependency-language-modeling-dataset/](https://blog.einstein.ai/the-wikitext-long-term-dependency-language-modeling-dataset/) |
| `wmt16` | Datasets used in shared tasks of the First Conference on Machine Translation | [https://www.statmt.org/wmt16/](https://www.statmt.org/wmt16/) |
| `xsum` | The Extreme Summarization dataset for evaluating abstractive single-document summarization systems. | [https://trends.openbayes.com/dataset/xsum](https://trends.openbayes.com/dataset/xsum) |

In this article...

[Public Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/)

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