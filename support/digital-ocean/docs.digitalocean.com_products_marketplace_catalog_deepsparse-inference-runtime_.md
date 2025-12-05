---
url: "https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/"
title: "DeepSparse Inference Runtime | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/)
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

- DeepSparse Inference Runtime

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DeepSparse Inference Runtime

Generated on 19 Jul 2023
from [the DeepSparse Inference Runtime catalog page](https://marketplace.digitalocean.com/apps/deepsparse-inference-runtime)

Neural Magic’s [DeepSparse](https://neuralmagic.com/deepsparse/) is an inference runtime allows you to create a Droplet capable of running performant state-of-the-art machine learning models on CPUs. This allows you to run your machine learning workloads without concern for specific hardware accelerators like GPUs. Simply select your droplet size based on the performance and cost requirements of your use case and deploy.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [DeepSparse](https://neuralmagic.com/deepsparse/) | [1.5.2](https://github.com/neuralmagic/deepsparse/releases/tag/v1.5.2) | [DeepSparse Community License](https://github.com/neuralmagic/deepsparse/blob/fd223aa935cef42c9c6dfcea62b14e003e0d6de5/LICENSE-NEURALMAGIC) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=neuralmagic-deepsparseinfere)

## Creating an App using the API

In addition to creating a Droplet from the DeepSparse Inference Runtime 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB DeepSparse Inference Runtime Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"neuralmagic-deepsparseinfere"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying DeepSparse Inference Runtime

After the [DeepSparse One-Click Droplet](https://github.com/neuralmagic/deepsparse/blob/b028422aff667487e973eb99418907b765d283f4/examples/do-marketplace/README.md) is created, access your Droplet via SSH by using your Droplet’s IP address:

`ssh root@your_droplet_public_ipv4 -L 5543:localhost:5543`

This command is used to establish a secure SSH tunnel and forward a port from a remote machine to your local machine for model serving. As soon as you log in, you are now ready to deploy and run state of the art computer vision and natural language processing models!

## Machine Learning Inference on CPUs

[DeepSparse](https://neuralmagic.com/deepsparse/) enables developers of all experience levels to execute Deep Learning models for a diverse range of Natural Language Processing and Computer Vision tasks on CPUs.

Let’s start using the [DeepSparse Server](https://github.com/neuralmagic/deepsparse/blob/860044680e4361ae28aa8687d9d93ced59e5053d/docs/user-guide/deepsparse-server.md) to make predictions. This server has been optimized to handle machine learning inference. You ask it to make a prediction by sending an API request, and it sends the prediction back to you.

## Deploy YOLOv8 for Computer Vision Object Detection

![computer_vision](https://neuralmagic.com/wp-content/uploads/2023/03/coomputer_vision.svg)

Object detection is a crucial task in the field of Computer Vision that empowers computers to perceive and identify specific objects within images. It enables machines to “see” and accurately recognize various elements depicted in photographs. Let’s say you have a photo that contains a cat, a dog, and a tree. Object detection involves utilizing a deep learning model to analyze that photo and accurately identify the objects present within it, as well as determine their respective locations.

For this task, we’ll use a [sparse YOLOv8](https://sparsezoo.neuralmagic.com/models/yolov8-s-coco-pruned50_quantized), which is a state-of-the-art model for the object detection task.

**Step 1)** From your Droplet’s terminal, initialize the DeepSparse Server with the YOLOv8 model:

```
deepsparse.server --task yolov8 --model_path zoo:cv/detection/yolov8-s/pytorch/ultralytics/coco/pruned50_quant-none
```

**Step 2)** From your local machine’s terminal, download the example image `human-dog.jpg` into your working directory:

```
wget -O human-dog.jpg https://raw.githubusercontent.com/neuralmagic/deepsparse/main/docs/use-cases/cv/images/human-dog.jpg
```

**Step 3)** On your local machine, use the Python `requests` and `opencv` libraries (`pip install requests opencv`) to make an API request to receive YOLOv8’s inference on what it “sees” in the picture and then draw boxes with labels in our image to know which objects it identified:

```
import requests
import cv2

def draw_boxes_on_image(image_path: str, output_path: str, url: str):
    # Send the image to the server and get the response
    with open(image_path, "rb") as image_file:
        detections = requests.post(url, files={"request": (image_path, image_file)}).json()

    # Load and draw the bounding boxes on the image
    image = cv2.imread(image_path)
    for box, score, label in zip(detections['boxes'][0], detections['scores'][0], detections['labels'][0]):
        x1, y1, x2, y2 = box
        cv2.rectangle(image, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
        cv2.putText(image, f'{label}: {score:.2f}', (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36, 255, 12), 2)

    # Save the image
    cv2.imwrite(output_path, image)
```

**Step 4)** Call the `draw_boxes_on_image` function and pass in the the source image path, newly annotated output path and the server’s url:

```
draw_boxes_on_image("human-dog.jpg", "human-dog-boxes.jpg", "http://0.0.0.0:5543/predict/from_files")
```

Here are all the objects identified by the model found in the new `human-dog-boxes.jpg` image:

![human-dog-boxes](https://raw.githubusercontent.com/neuralmagic/deepsparse/main/docs/use-cases/cv/images/human-dog-boxes.jpg)

Now you can try your own images! YOLOv8 can detect [over 80 different classes](https://gist.github.com/AruniRC/7b3dadd004da04c80198557db5da4bda) \- people, animals, plants, cars, and many more.

**\[Optional\] Step 5)** For more advanced setup, create the below yaml file as `config.yaml`. This will select the YOLOv8 model and the dataset labels the model expects to classify objects in images:

```
endpoints:
  - task: yolov8
    model: zoo:cv/detection/yolov8-s/pytorch/ultralytics/coco/pruned50_quant-none
    kwargs:
      class_names: "coco"
```

Then run the server with the newly-made config:

```
deepsparse.server --config-file config.yaml
```

## Deploy BERT for NLP Sentiment Analysis

![nlp](https://neuralmagic.com/wp-content/uploads/2023/03/NLP_image-1.png)

Sentiment analysis is a common task in Natural Language Processing that focuses on identifying and classifying opinions expressed in a piece of text. Imagine you’re a business that receives thousands of social media comments and posts about your product every day. Sentiment analysis could involve using a machine learning model to process these social media interactions and determine the general sentiment towards your product — be it positive or negative.

For this task, we’ll use a sparse BERT model, which is a transformer model for the sentiment analysis task. The model was trained to classify text into 2 sentiments: `positive` and `negative`. In addition, it also gives a score on how confident the model is in its prediction.

**Step 1)** From your Droplet’s terminal, initialize the DeepSparse Server with the BERT model:

```
deepsparse.server --task sentiment_analysis --model_path zoo:nlp/sentiment_analysis/obert-base/pytorch/huggingface/sst2/pruned90_quant-none
```

**Step 2)** On your local machine’s terminal, use `curl` to make an API request to receive BERT’s inference on the sentiment of a tweet:

```
curl -X POST -H "Content-Type: application/json" -d '{"sequences": "Hey @neuralmagic, DeepSparse is an an awesome piece of software!"}' http://localhost:5543/predict
```

Here is the output, where DeepSparse correctly labeled the message as positive:

```
{"labels":["positive"],"scores":[0.9994332790374756]}
```

Now you can try your own text! This BERT was fine-tuned on [customer reviews](https://huggingface.co/datasets/sst2) so it is adept at classification on full sentences.

## Resources

Thank you for deploying the Neural Magic DeepSparse droplet. Visit our [SparseZoo](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/sparsezoo.neuralmagic.com) full of other state-of-the-art fine-tuned ML models that you can run on DeepSparse - just copy a model stub and run.

You also can find many explanations, examples, and tutorials in our video library at [https://neuralmagic.com/video/](https://neuralmagic.com/video/). For an in-depth view over all of the advanced DeepSparse features such as benchmarking inference scenarios, different pipeline tasks, and the model server, [please visit the API guide](https://github.com/neuralmagic/deepsparse/blob/fd223aa935cef42c9c6dfcea62b14e003e0d6de5/docs/user-guide/README.md).

Please note that this distribution features the community license and is not for commercial use. View [our community license details](https://neuralmagic.com/legal/deepsparse-license-agreement/), or go to [https://neuralmagic.com/deepsparse/#form](https://neuralmagic.com/deepsparse/#form) for a commercial license.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#creating-an-app-using-the-api)
- [Getting Started After Deploying DeepSparse Inference Runtime](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#getting-started-after-deploying-deepsparse-inference-runtime)
- [Machine Learning Inference on CPUs](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#machine-learning-inference-on-cpus)
- [Deploy YOLOv8 for Computer Vision Object Detection](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#deploy-yolov8-for-computer-vision-object-detection)
- [Deploy BERT for NLP Sentiment Analysis](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#deploy-bert-for-nlp-sentiment-analysis)
- [Resources](https://docs.digitalocean.com/products/marketplace/catalog/deepsparse-inference-runtime/#resources)

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