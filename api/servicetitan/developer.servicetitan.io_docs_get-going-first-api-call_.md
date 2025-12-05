---
url: "https://developer.servicetitan.io/docs/get-going-first-api-call/"
title: "330. Docs: Make Your First API Call - ServiceTitan API - developer portal"
---

[![Picture](https://developer.servicetitan.io/content/st-logo-small-black.png)](https://developer.servicetitan.io/)

- [Home](https://developer.servicetitan.io/)
- [Docs](https://developer.servicetitan.io/docs/welcome)
- [API Reference](https://developer.servicetitan.io/apis)
- [FAQs](https://developer.servicetitan.io/docs/faqs-environments)
- [Release Notes](https://developer.servicetitan.io/release-notes)
- [Request Access](https://developer.servicetitan.io/request-access)

- [My Apps](https://developer.servicetitan.io/custom/my-apps)
- [Sign out](https://developer.servicetitan.io/docs/get-going-first-api-call/#signout)

- [Login to My Apps](https://developer.servicetitan.io/signin)

- [Welcome](https://developer.servicetitan.io/docs/welcome)
- [Overview](https://developer.servicetitan.io/docs/overview)
- [Get Going](https://developer.servicetitan.io/docs/get-going-first-api-call/#)
  - [Getting Access](https://developer.servicetitan.io/docs/get-going-getting-access)
  - [Create a User](https://developer.servicetitan.io/docs/get-going-create-a-user)
  - [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)
  - [Client ID & Secret](https://developer.servicetitan.io/docs/get-going-manage-client-id-and-secret)
  - [Environments](https://developer.servicetitan.io/docs/get-going-environments)
  - [First API Call](https://developer.servicetitan.io/docs/get-going-first-api-call)
  - [Going Live](https://developer.servicetitan.io/docs/get-going-going-live)
  - [OAuth 2.0](https://developer.servicetitan.io/docs/oauth20)
  - [Transactional & Export APIs](https://developer.servicetitan.io/docs/transactional-and-export-apis)
- [API Resources](https://developer.servicetitan.io/docs/get-going-first-api-call/#)
  - [Accounting](https://developer.servicetitan.io/docs/api-resources-accounting)
  - [CRM](https://developer.servicetitan.io/docs/api-resources-crm)
  - [Dispatch](https://developer.servicetitan.io/docs/api-resources-dispatch)
  - [Equipment Systems](https://developer.servicetitan.io/docs/api-resources-equipment-systems)
  - [Inventory](https://developer.servicetitan.io/docs/api-resources-inventory)
  - [Job Planning](https://developer.servicetitan.io/docs/api-resources-job-planning)
  - [Marketing](https://developer.servicetitan.io/docs/api-resources-marketing)
  - [Memberships](https://developer.servicetitan.io/docs/api-resources-memberships)
  - [Payroll](https://developer.servicetitan.io/docs/api-resources-payroll)
  - [Pricebook](https://developer.servicetitan.io/docs/api-resources-pricebook)
  - [SalesTech](https://developer.servicetitan.io/docs/api-resources-salestech)
  - [Scheduling Pro](https://developer.servicetitan.io/docs/api-resources-scheduling-pro)
  - [Service Agreements](https://developer.servicetitan.io/docs/api-resources-service-agreements)
  - [Settings](https://developer.servicetitan.io/docs/api-resources-settings)
  - [Task Management](https://developer.servicetitan.io/docs/api-resources-task-management)
  - [Telecom](https://developer.servicetitan.io/docs/api-resources-telecom)

# Make your first API call

**We recommend you develop and test in the Integration environment  before switching to production.**

Steps to make a successful API call

First your application should call the ServiceTitan OAuth API and passes Client ID & Secret Key for authorization. If the authorization is successful, you will get back an access token.

Next your application should call the resource API endpoint and pass the access token along with the app key. If the validation is successful, then your GET/PUT/POST/DELETE operation will be successful.

HTTPS protocol

All ServiceTitan API resources are protected by Secure Sockets Layer (SSL) encryption. Any call you make to a ServiceTitan API resource must use the HTTPS scheme in the URL. SSL establishes an encrypted link between the ServiceTitan resource server and your application. This link ensures that all data passed between the resource server and your application remains private.

**Using cURL to make your first ServiceTitan API Call**

The cURL command line tool below is used to retrieve an OAuth 2.0 access token and make a simple call to the ServiceTitan API.

To obtain an access token

1. Make a call to the Auth token endpoint using a REST URL. You have to pass your ClientID and ClientSecret. Example REST URL format: https://auth-integration.servicetitan.io/connect/token


- client\_id

- client\_secret

- grant\_type—This should be  set to “client\_credentials”Additional helpful information


Example cURL command for retrieving an access token:

_Request:_

_curl --request POST \_

_--url https://auth-integration.servicetitan.io/connect/token \_

_--header 'Content-Type: application/x-www-form-urlencoded' \_

_--data grant\_type=client\_credentials \_

_--data client\_id=%client\_id% \_

_--data client\_secret=%client\_secret% \_

_Running the above command returns a JSON block similar to the following example:_

_Response_

_{_

_"access\_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkM2QTRDMjA2MjE3OEYyMEI4NzkyNjg2MTJGNkMwNEE1NzUwRjU3NzdSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InhxVENCaUY0OGd1SGttaGhMMndFcFhVUFYzYyJ9.eyJuYmYiOjE2MjkxNDYyODksImV4cCI6MTYyOTE0NzE4OSwiaXNzIjoiaHR0cHM6Ly9wdWJsaWMtYXBpLWF1dGguc3QuZGV2IiwiY2xpZW50X2lkIjoiY2lkLjl2Ym9hNXRiYmEzMGpuaXN6ZG8wMWZ0NGwiLCJ0ZW5hbnQiOiI4NDUwIiwianRpIjoiNTRBNzM0RkJFNzBFQzU4Q0VFM0U3NUMxNjNDMUU0NjUiLCJpYXQiOjE2MjkxNDYyODksInNjb3BlIjpbInRuLmFjYy5pbnZvaWNlczpyIl19.coWQGRmbQmE9G-KADciVQeiXXoGm-g5y4\_B79SUSYezCi6S7x3\_W506vsCTPq7iPwEe5XGAofiWFEWf2v8CSq1cQJrIVVisHqTeygUbAYRBcj1iuNA6fCGvl72wY8uh0F\_IzJ8UVp6Vdvklvupl3zelakJNVlmA0dSYtQnc9RN2whKNrqEuUDJRD5aYctAUv6z\_-WpedMueOfAn8iUXcxvgbS4vXc96aZQX-v-0VLS7ZE457Y-HMhEPPGZ5UV27CHrZd6ohyJ-GldI849SJsQnwPjjeyJqjF\_bb9PpDqxzKyzeS1f\_bptPNahwYmGFYWnqZNw4fHjIQFdmzHl\_3BOw",_

_"expires\_in": 900,_

_"token\_type": "Bearer",_

_"scope": "tn.acc.invoices:r"_

}

Making a call to the ServiceTitan Resource API

Now that we have successfully retrieved an access token, we can use it to make our first call to the ServiceTitan Resource API.

For this example, we’ll use the simple https://api-integration.servicetitan.io/accounting/v2/tenant/{tenant}/invoices endpoint to show that we can successfully contact the ServiceTitan API server and return information. Again, we’ll use cURL to show this.

_Request:_

_curl --request GET \_

_--url https://api-integration.servicetitan.io/settings/v2/tenant/985798691/employees \_

_--header 'Authorization: <access token>' \_

_--header 'ST-App-Key: <app key>'_

_Where <access token> is the string value for the access token we retrieved in the previous step._

<app key> is the application key (see [Create an App](https://developer.servicetitan.io/docs/get-going-create-an-app)).

_If we execute the above cURL command with a valid access token, it returns a JSON block similar to this example:_

_Response:_

_{_

_"page": 1,_

_"pageSize": 50,_

_"totalCount": 1,_

_"hasMore": false,_

_"data": \[_\
\
_{_\
\
_"id": 1679,_\
\
_"syncStatus": "Pending",_\
\
_"summary": null,_\
\
_"referenceNumber": "1676",_\
\
_"invoiceDate": "2021-07-19T00:00:00Z",_\
\
_"dueDate": "2021-07-19T00:00:00Z",_\
\
_"subTotal": "0.00",_\
\
_"salesTax": "0.00",_\
\
_"salesTaxCode": null,_\
\
_"total": "0.00",_\
\
_"balance": "0.00",_\
\
_"customer": {_\
\
_"id": 1673,_\
\
_"name": "Customer"_\
\
_},_\
\
_"customerAddress": {_\
\
_"street": "801 North Brand Boulevard",_\
\
_"unit": null,_\
\
_"city": "Glendale",_\
\
_"state": "CA",_\
\
_"zip": "91203",_\
\
_"country": "USA"_\
\
_},_\
\
_"locationAddress": {_\
\
_"street": "801 North Brand Boulevard",_\
\
_"unit": null,_\
\
_"city": "Glendale",_\
\
_"state": "CA",_\
\
_"zip": "91203",_\
\
_"country": "USA"_\
\
_},_\
\
_"businessUnit": {_\
\
_"id": 319,_\
\
_"name": "Plumbing - Service"_\
\
_},_\
\
_"termName": "Due Upon Receipt",_\
\
_"createdBy": "admin",_\
\
_"batch": null,_\
\
_"modifiedOn": "2021-07-19T20:35:38.2876004Z",_\
\
_"adjustmentToId": null,_\
\
_"job": null,_\
\
_"projectId": null,_\
\
_"royalty": {_\
\
_"status": "Pending",_\
\
_"date": null,_\
\
_"sentOn": null,_\
\
_"memo": null_\
\
_},_\
\
_"employeeInfo": {_\
\
_"id": 21,_\
\
_"name": "admin",_\
\
_"modifiedOn": "2021-06-22T16:23:12.9688553Z"_\
\
_},_\
\
_"commissionEligibilityDate": null,_\
\
_"items": null,_\
\
_"customFields": null_\
\
_}_\
\
_\]_

**Additional helpful information**

Working with cURL and Postman

You can use these popular web development test tools to explore the capabilities of the ServiceTitan API without having to fully build out your application. In the following sections, we use these tools to illustrate how you can make your first call to the ServiceTitan API. If you are unfamiliar with these tools, here are some helpful resources to get you started:

- [cURL](https://developer.servicetitan.io/docs/get-going-first-api-call/#)

- [cURL GitHub Repository README](https://developer.servicetitan.io/docs/get-going-first-api-call/#)


• [ServiceTitan Inc](https://www.servicetitan.com/)• [Privacy Policy](https://www.servicetitan.com/legal/privacy-policy) • [API Terms](https://www.servicetitan.com/legal/api-terms) •