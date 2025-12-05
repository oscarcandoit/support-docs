---
url: "https://docs.gravityforms.com/web-api/"
title: "REST API v1 Guide - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)    - [Endpoints](https://docs.gravityforms.com/category/developers/rest-api/rest-api-endpoints/)
    - [REST API v2 Basic Authentication](https://docs.gravityforms.com/rest-api-v2-basic-authentication/ "REST API v2 Basic Authentication")
    - [REST API v2 Guide](https://docs.gravityforms.com/rest-api-v2/ "REST API v2 Guide")
    - [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/ "REST API v2 Authentication")
    - [Gravity Forms REST API Settings](https://docs.gravityforms.com/gravity-forms-rest-api-settings/ "Gravity Forms REST API Settings")
    - [REST API v1 Guide](https://docs.gravityforms.com/web-api/ "REST API v1 Guide")
    - [v1 Examples](https://docs.gravityforms.com/web-api-examples/ "v1 Examples")
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# REST API v1 Guide

- [Introduction](https://docs.gravityforms.com/web-api/#h-introduction)
- [Requirements](https://docs.gravityforms.com/web-api/#h-requirements)
- [Security](https://docs.gravityforms.com/web-api/#h-security)
- [Authentication](https://docs.gravityforms.com/web-api/#h-authentication)
- [WordPress Cookie Authentication](https://docs.gravityforms.com/web-api/#h-wordpress-cookie-authentication)
- [Authentication for External applications](https://docs.gravityforms.com/web-api/#h-authentication-for-external-applications)
- [Authorization](https://docs.gravityforms.com/web-api/#h-authorization)
- [Response](https://docs.gravityforms.com/web-api/#h-response)
- [Status Codes](https://docs.gravityforms.com/web-api/#h-status-codes)
- [Errors](https://docs.gravityforms.com/web-api/#h-errors)
- [File extension support](https://docs.gravityforms.com/web-api/#h-file-extension-support)
- [Forms](https://docs.gravityforms.com/web-api/#h-forms)
- [GET /forms](https://docs.gravityforms.com/web-api/#h-get-forms)
- [GET /forms/\[Form IDs\]](https://docs.gravityforms.com/web-api/#h-get-forms-form-ids)
- [POST /forms](https://docs.gravityforms.com/web-api/#h-post-forms)
- [PUT /forms/\[Form ID\]](https://docs.gravityforms.com/web-api/#h-put-forms-form-id)
- [DELETE /forms/\[Form IDs\]](https://docs.gravityforms.com/web-api/#h-delete-forms-form-ids)
- [Form Submissions](https://docs.gravityforms.com/web-api/#h-form-submissions)
- [POST /forms/\[Form ID\]/submissions](https://docs.gravityforms.com/web-api/#h-post-forms-form-id-submissions)
- [Entries](https://docs.gravityforms.com/web-api/#h-entries)
- [GET /entries](https://docs.gravityforms.com/web-api/#h-get-entries)
- [GET /entries/\[Entry ID\]](https://docs.gravityforms.com/web-api/#h-get-entries-entry-id)
- [GET /forms/\[Form ID\]/entries](https://docs.gravityforms.com/web-api/#h-get-forms-form-id-entries)
- [GET /forms/\[Form ID\]/entries/\[Entry ID\]/fields/\[Field ID\]](https://docs.gravityforms.com/web-api/#h-get-forms-form-id-entries-entry-id-fields-field-id)
- [Querystring Parameters for Retrieval Routes](https://docs.gravityforms.com/web-api/#h-querystring-parameters-for-retrieval-routes)
- [Paging](https://docs.gravityforms.com/web-api/#h-paging)
- [Sorting](https://docs.gravityforms.com/web-api/#h-sorting)
- [Search Criteria](https://docs.gravityforms.com/web-api/#h-search-criteria)
- [Field Filters](https://docs.gravityforms.com/web-api/#h-field-filters)
- [POST /entries](https://docs.gravityforms.com/web-api/#h-post-entries)
- [POST /forms/\[Form ID\]/entries](https://docs.gravityforms.com/web-api/#h-post-forms-form-id-entries)
- [PUT /entries/\[Entry ID\]](https://docs.gravityforms.com/web-api/#h-put-entries-entry-id)
- [PUT /entries](https://docs.gravityforms.com/web-api/#h-put-entries)
- [DELETE /entries/\[Entry ID\]](https://docs.gravityforms.com/web-api/#h-delete-entries-entry-id)
- [Results](https://docs.gravityforms.com/web-api/#h-results)
- [GET /forms/\[Form ID\]/results](https://docs.gravityforms.com/web-api/#h-get-forms-form-id-results)
- [Tools](https://docs.gravityforms.com/web-api/#h-tools)
- [Sample REST API v1 Client](https://docs.gravityforms.com/web-api/#h-sample-rest-api-v1-client)
- [PHP Wrapper](https://docs.gravityforms.com/web-api/#h-php-wrapper)
- [URL generator & tester](https://docs.gravityforms.com/web-api/#h-url-generator-tester)
- [Other resources](https://docs.gravityforms.com/web-api/#h-other-resources)

## Introduction

The REST API v1, formerly called the Web API, allows developers to create, read, update and delete forms, entries and results over HTTP loosely following REST-style principles.

The URI defines the resource and the HTTP method defines the operation.

- Use the GET HTTP method to **read** data
- Use the POST HTTP method to **create/add** data
- Use the PUT HTTP method to **update** data
- Use the DELETE HTTP method to **delete** data

The base URI of the Web API is “gravityformsapi”. So the URL would be, for example:

|     |     |
| --- | --- |
| 1 | `http:``//mydomain.com/gravityformsapi` |

or, alternatively, if the WordPress installation is in a sub-directory:

|     |     |
| --- | --- |
| 1 | `http:``//mydomain.com/wordpress/gravityformsapi/` |

The resources are defined in the URL after the base, like this:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `http:``//mydomain.com/gravityformsapi/forms`<br>`http:``//mydomain.com/gravityformsapi/entries` |

Keys, or object IDs are sent in the next part of the URI, like this:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `http:``//mydomain.com/gravityformsapi/forms/1`<br>`http:``//mydomain.com/gravityformsapi/entries/543` |

Some resources also support sub-resources, for example:

|     |     |
| --- | --- |
| 1<br>2<br>3 | `http:``//mydomain.com/gravityformsapi/forms/1/results`<br>`http:``//mydomain.com/gravityformsapi/forms/1/entries` |

TIP:

Most of the endpoints are simply wrappers for their GFAPI counterparts. So if you have trouble getting the REST API v1 to work it can helpful to debug using the PHP equivalent.

## Requirements

The REST API v1 requires “pretty” permalinks to be enabled. Please ensure that the permalink setting is NOT set to the default (http://mydomain.com/?p=123) before trying to use the REST API v1. Any setting other than the default will be fine.

The REST API v1 is activated on the API settings tab. You can leave the default keys or generate new ones.

## Security

In addition to the security measures enforced by the REST API v1, it’s strongly advisable to implement SSL for the WordPress site (beyond the scope of this API).

### Authentication

There are two types of authentication:

Are you a plugin/theme running on the site? Use WordPress cookie authentication.

Are you a desktop/web/mobile client accessing the site externally? Use signatures.

All endpoints require authentication with the exception of the POST forms/\[ID\]/submissions end point.

#### WordPress Cookie Authentication

Cookie authentication is the basic authentication method included with WordPress. When users log in, this sets up the cookies, so plugin and theme developers need only to have a logged-in user.

However, the Gravity Forms REST API v1 uses nonces to avoid [CSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) issues. This prevents other sites from forcing you to perform actions without explicitly intending to do so.

The REST API v1 uses nonces with the action set to gf\_api. These are then be passed to the API with each request via the \_gf\_json\_nonce parameter in the URL.

#### Authentication for External applications

All requests from external applications are authenticated by checking an expiring signature. This is similar to the approach used by Amazon to secure access to their S3 Storage API. Once authenticated, standard WordPress and Gravity Forms role-based authorization is used to ensure that the API request is allowed to be fulfilled.

Each request at a minimum must include the following 3 query parameters:

- api\_key – The public API key defined on the settings page e.g. “1234”
- expires – Expiration date for the request expressed as a UNIX timestamp in seconds e.g. 1369749344
- signature – A URL-encoded, base64 HMAC-SHA1 hash of a colon separated string following this structure:


{api\_key}:{http method}:{route}:{expires}


e.g. 1234:GET:forms/1/entries:1369749344


The signature for this request using the private key of “abcd” is uJEnk0EoQ4d3iinjFMBrBzZfH9w%3D

Complete example request:

|     |     |
| --- | --- |
| 1<br>2 | `GET`<br>`http://mydomain.com/gravityformsapi/forms/25?api_key=1234&signature=PueNOtbfUe%2BMfClAOi2lfq%2BHLyo%3D&expires=1369749344` |

Sample code for generating signatures:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16 | `<?php`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``"sha1"``,``$string``,``$private_key``, true);`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``));`<br>```return``$sig``;`<br>`}`<br>`$api_key``=``"1234"``;`<br>`$private_key``=``"abcd"``;`<br>`$method``=``"GET"``;`<br>`$route``=``"forms/1/entries"``;`<br>`$expires``=``strtotime``(``"+60 mins"``);`<br>`$string_to_sign``= sprintf(``"%s:%s:%s:%s"``,``$api_key``,``$method``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`var_dump(``$sig``);`<br>`?>` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `<script src=``"http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"http://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>```function``CalculateSig(stringToSign, privateKey){`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>```}`<br>```var``d =``new``Date,`<br>```expiration = 3600``// 1 hour,`<br>```unixtime = parseInt(d.getTime() / 1000),`<br>```future_unixtime = unixtime + expiration,`<br>```publicKey =``"1234"``,`<br>```privateKey =``"abcd"``,`<br>```method =``"GET"``,`<br>```route =``"forms/1/entries"``;`<br>```stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>```sig = CalculateSig(stringToSign, privateKey);`<br>```console.log(sig);`<br>`</script>` |

**C#**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52 | `using``System;`<br>`using``System.Web;`<br>`using``System.Security.Cryptography;`<br>`using``System.Text;`<br>`namespace``GravityForms`<br>`{`<br>```public``class``Sample`<br>```{`<br>```public``static``GenerateSignature()`<br>```{`<br>```string``publicKey =``"1234"``;`<br>```string``privateKey =``"abcd"``;`<br>```string``method =``"GET"``;`<br>```string``route =``"forms/1/entries"``;`<br>```string``expires = Security.UtcTimestamp(``new``TimeSpan(0,1,0));`<br>```string``stringToSign =``string``.Format(``"{0}:{1}:{2}:{3}"``, publicKey, method, route, expires);`<br>```var``sig = Security.Sign(stringToSign, privateKey);`<br>```Console.WriteLine(sig);`<br>```}`<br>```}`<br>```public``class``Security`<br>```{`<br>```public``static``string``UrlEncodeTo64(``byte``[] bytesToEncode)`<br>```{`<br>```string``returnValue`<br>```= System.Convert.ToBase64String(bytesToEncode);`<br>```return``HttpUtility.UrlEncode(returnValue);`<br>```}`<br>```public``static``string``Sign(``string``value,``string``key)`<br>```{`<br>```using``(``var``hmac =``new``HMACSHA1(Encoding.ASCII.GetBytes(key)))`<br>```{`<br>```return``UrlEncodeTo64(hmac.ComputeHash(Encoding.ASCII.GetBytes(value)));`<br>```}`<br>```}`<br>```public``static``int``UtcTimestamp( TimeSpan timeSpanToAdd)`<br>```{`<br>```TimeSpan ts = (DateTime.UtcNow.Add(timeSpanToAdd) -``new``DateTime(1970,1,1,0,0,0));`<br>```int``expires_int =  (``int``) ts.TotalSeconds;`<br>```return``expires_int;`<br>```}`<br>```}`<br>`}` |

### Authorization

The REST API v1 adds an additional layer of security by executing the request on behalf of the user account defined in the account impersonation setting on the settings tab. Roles and capabilities for role-based authorization can be configured using the [Members](http://wordpress.org/plugins/members) plugin.

The number of users available on the settings page is set to a maximum of 200. This can be changed using the [gform\_webapi\_get\_users\_settings\_page](https://docs.gravityforms.com/gform_webapi_get_users_settings_page) filter.

## Response

The response body will always be a JSON object containing a status code and the result of the request. The HTTP status code in the header will always be 200 regardless of the result so it’s important to check for the status code in the response body to determine the success or failure of the request.

So, for example, if a non-existent form is requested, the raw response body would be the following:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `{`<br>```"status"``: 404,`<br>```"response"``:``"Not found"`<br>`}` |

A successful request for a form would look like this:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `{`<br>```"status"``: 200,`<br>```"response"``: {`<br>```"title"``:``"My Form"``,`<br>```"description"``:``"This is my form"``,`<br>```... snip ...`<br>```}`<br>`}` |

**TIP: successful requests will return a status of 200, 201 or 202. Anything above 202 signifies an error.** See the section below on status codes for further details.

### Status Codes

Although the HTTP status code in the response header will always be 200, the status code in the response body will follow the standard HTTP status code definitions:

- Successful requests will generate either a **200** (OK) or **201** (resource created) status code.

- Accepted but unfinished requests will generate a **202** (accepted) status code.

- Illegal or illogical requests, will result in a **400** (bad request) status code.

- Unauthenticated or unauthorized requests will receive the **401** (not authorized) status code.

- Requests for non-existent resources will receive a **404** (not found) status code.

- Server errors will generate a **500** (server error) status code.

- Unsupported requests will receive the **501** (Not implemented) status code.


### Errors

When the request is not successful, the _status_ code will be greater than 202. When appropriate, and when available, additional information about the error will be returned in the _response_ element in the following format:

- **code**: a code identifying further details about the error.
- **message**: a description of the error
- **data**: additional data pertaining to the failure. e.g. the error message generated by MySQL Server.

Example of an error message after trying to update an entry without a form ID:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `{`<br>```"status"``: 400,`<br>```"response"``: {`<br>```"code"``:``"empty_form_id"``,`<br>```"message"``:``"The form ID must be specified"`<br>```}`<br>`}` |

Example of an error when trying to update an array of entries but one of the entries could not be found:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `{`<br>```"status"``: 404,`<br>```"response"``: {`<br>```"code"``:``"not_found"``,`<br>```"message"``:``"Entry with ID 414 not found"``,`<br>```"data"``: 414`<br>```}`<br>`}` |

### File extension support

For the sake of clarity, forward compatibility and hook-based extensibility, a file extension is supported as part of the url. Currently .json is the only supported extension. This means that both of the following GET requests receive identical responses (the entry object):

|     |     |
| --- | --- |
| 1 | `http:``//mydomain.com/wordpress/gravityformsapi/forms/14/entries.json` |

|     |     |
| --- | --- |
| 1 | `http:``//mydomain.com/wordpress/gravityformsapi/forms/14/entries` |

## Forms

For more detailed examples of how to work with forms, go to [REST API v1 Examples](https://docs.gravityforms.com/web-api-examples).

### GET /forms

Returns a list of all ACTIVE forms along with its entry count.

- **URI:** /gravityformsapi/forms
- **Capability:** gravityforms\_edit\_forms
- **Output:** JSON string with the id, title, entry count for each form:





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `{`<br>```"1"``: {`<br>```"id"``:``"1"``,`<br>```"title"``:``"test form"``,`<br>```"entries"``:``"15"`<br>```},`<br>```"2"``: {`<br>```"id"``:``"2"``,`<br>```"title"``:``"test form 2"``,`<br>```"entries"``:``"26"`<br>```}`<br>`}` |

- **Example:**


The example below retrieves all ACTIVE forms:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```die``(``"Could not retrieve forms."``);`<br>`}`<br>`//forms retrieved successfully`<br>`$forms``=``$body``[``'response'``];`<br>`//To access each form, loop through the $forms array.`<br>`foreach``(``$forms``as``$form``){`<br>```$form_id``=``$form``[``'id'``];`<br>```$form_title``=``$form``[``'title'``];`<br>```$entry_count``=``$form``[``'entries'``];`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"forms"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```forms         = data.response;`<br>```document.write(``'<p>Results</p>'``);`<br>```document.write(``'<table border="1"><th>Form ID</th><th>Form Title</th><th>Entry Count</th>'``);`<br>```for``(``var``form``in``forms) {`<br>```document.write(``'<tr><td>'``+ forms[form][``'id'``] +``'</td><td>'``+ forms[form][``'title'``] +``'</td><td>'``+ forms[form][``'entries'``] +``'</td></tr>'``);`<br>```}`<br>```document.write(``"</table>"``);`<br>`});`<br>`</script>` |

Sample JSON output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"20"``:{``"id"``:``"20"``,``"title"``:``"Captcha 2"``,``"entries"``:``"35"``},``"15"``:{``"id"``:``"15"``,``"title"``:``"Credit Card Form"``,``"entries"``:``"24"``},``"5"``:{``"id"``:``"5"``,``"title"``:``"Custom Contact Form"``,``"entries"``:``"0"``},``"24"``:{``"id"``:``"24"``,``"title"``:``"Drop Down Test Alert Conditional Logic"``,``"entries"``:``"0"``},``"1"``:{``"id"``:``"1"``,``"title"``:``"Freshbooks"``,``"entries"``:``"28"``},``"27"``:{``"id"``:``"27"``,``"title"``:``"List Field"``,``"entries"``:``"1"``},``"11"``:{``"id"``:``"11"``,``"title"``:``"PayPal Standard"``,``"entries"``:``"8"``},``"12"``:{``"id"``:``"12"``,``"title"``:``"PayPal Standard - No Other Add-Ons"``,``"entries"``:``"4"``},``"13"``:{``"id"``:``"13"``,``"title"``:``"PayPal Standard With Zapier Not Delayed"``,``"entries"``:``"1"``},``"18"``:{``"id"``:``"18"``,``"title"``:``"Post Body Test with Text Editor"``,``"entries"``:``"2"``},``"14"``:{``"id"``:``"14"``,``"title"``:``"Products"``,``"entries"``:``"39"``},``"19"``:{``"id"``:``"19"``,``"title"``:``"Recaptcha"``,``"entries"``:``"5"``},``"25"``:{``"id"``:``"25"``,``"title"``:``"reCaptcha Multi-Page Test Page 1"``,``"entries"``:``"2"``},``"26"``:{``"id"``:``"26"``,``"title"``:``"reCaptcha Test Page 2"``,``"entries"``:``"2"``},``"28"``:{``"id"``:``"28"``,``"title"``:``"Test Form"``,``"entries"``:``"21"``},``"21"``:{``"id"``:``"21"``,``"title"``:``"Test reCaptcha 2"``,``"entries"``:``"0"``},``"16"``:{``"id"``:``"16"``,``"title"``:``"Textarea Test With Editor"``,``"entries"``:``"2"``},``"2"``:{``"id"``:``"2"``,``"title"``:``"Untitled Form"``,``"entries"``:``"0"``},``"3"``:{``"id"``:``"3"``,``"title"``:``"User Signup"``,``"entries"``:``"1"``},``"4"``:{``"id"``:``"4"``,``"title"``:``"User Signup - Update"``,``"entries"``:``"1"``},``"29"``:{``"id"``:``"29"``,``"title"``:``"_Test Recaptcha Secure Token"``,``"entries"``:``"6"``}}}` |

### GET /forms/\[Form IDs\]

Returns a [Form object](https://docs.gravityforms.com/form-object/). Multiple forms may be requested by separating the IDs by semicolons.

- **URI:** /gravityformsapi/forms/1 or /gravityformsapi/forms/1;3;6
- **Capability:** gravityforms\_edit\_forms
- **Output:** A JSON string containing the form or forms
- **Notes:** If a form does not exist for a form id provided, false is returned for that form. The entry count is not included.
- **Example:**


The example below retrieves the forms with ids 1000, 1, 14, 28, 29. Form id 1000 does not exist so false is returned for that form.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/1000;1;14;28;29'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```die``(``"Could not retrieve forms."``);`<br>`}`<br>`//forms retrieved successfully`<br>`$forms``=``$body``[``'response'``];`<br>`//To access each form, loop through the $forms array.`<br>`foreach``(``$forms``as``$form``){`<br>```$form_id``=``$form``[``'id'``];`<br>```$form_title``=``$form``[``'title'``];`<br>```$fields``=``$form``[``'fields'``];`<br>```foreach``(``$fields``as``$field``){`<br>```$field_id``=``$field``[``'id'``];`<br>```$field_label``=``$field``[``'label'``];`<br>```}`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"forms/1000;1;14;28;29"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```forms = data.response;`<br>```if``( forms ){`<br>```//loop through form ids returned`<br>```for``(``var``id``in``forms){`<br>```//if a form is not found, false is returned`<br>```form = forms[id];``//get single form object using id`<br>```form_id = form[``'id'``];`<br>```form_title = form[``'title'``];`<br>```fields = form[``'fields'``];`<br>```field_count=fields[``'length'``];`<br>```if``( fields ){`<br>```for``(``var``i=0;i<field_count;i++ ){`<br>```field_id = fields[i][``'id'``];`<br>```field_label = fields[i][``'label'``];`<br>```field_type = fields[i][``'type'``];`<br>```}`<br>```}`<br>```}`<br>```}`<br>`});`<br>`</script>` |

Sample JSON output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"1000"``:false,``"28"``:{``"title"``:``"Test Form"``,``"description"``:``""``,``"labelPlacement"``:``"top_label"``,``"descriptionPlacement"``:``"below"``,``"button"``:{``"type"``:``"text"``,``"text"``:``"Submit"``,``"imageUrl"``:``""``},``"fields"``:[{``"type"``:``"name"``,``"id"``:1,``"label"``:``"Name"``,``"adminLabel"``:``""``,``"isRequired"``:false,``"size"``:``"medium"``,``"errorMessage"``:``""``,``"nameFormat"``:``"advanced"``,``"inputs"``:[{``"id"``:``"1.2"``,``"label"``:``"Prefix"``,``"name"``:``""``,``"choices"``:[{``"text"``:``"Mr."``,``"value"``:``"Mr."``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Mrs."``,``"value"``:``"Mrs."``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Miss"``,``"value"``:``"Miss"``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Ms."``,``"value"``:``"Ms."``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Dr."``,``"value"``:``"Dr."``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Prof."``,``"value"``:``"Prof."``,``"isSelected"``:false,``"price"``:``""``},{``"text"``:``"Rev."``,``"value"``:``"Rev."``,``"isSelected"``:false,``"price"``:``""``}],``"isHidden"``:true,``"inputType"``:``"radio"``},{``"id"``:``"1.3"``,``"label"``:``"First"``,``"name"``:``""``},{``"id"``:``"1.4"``,``"label"``:``"Middle"``,``"name"``:``""``,``"isHidden"``:true},{``"id"``:``"1.6"``,``"label"``:``"Last"``,``"name"``:``""``},{``"id"``:``"1.8"``,``"label"``:``"Suffix"``,``"name"``:``""``,``"isHidden"``:true}],``"formId"``:28,``"pageNumber"``:1,``"description"``:``""``,``"allowsPrepopulate"``:false,``"inputMask"``:false,``"inputMaskValue"``:``""``,``"inputType"``:``""``,``"labelPlacement"``:``""``,``"descriptionPlacement"``:``""``,``"subLabelPlacement"``:``""``,``"placeholder"``:``""``,``"cssClass"``:``""``,``"inputName"``:``""``,``"adminOnly"``:false,``"noDuplicates"``:false,``"defaultValue"``:``""``,``"choices"``:``""``,``"conditionalLogic"``:``""``,``"displayOnly"``:``""``},{``"type"``:``"text"``,``"id"``:2,``"label"``:``"Testing"``,``"adminLabel"``:``""``,``"isRequired"``:false,``"size"``:``"medium"``,``"errorMessage"``:``""``,``"inputs"``:null,``"formId"``:28,``"pageNumber"``:1,``"description"``:``""``,``"allowsPrepopulate"``:false,``"inputMask"``:false,``"inputMaskValue"``:``""``,``"inputType"``:``""``,``"labelPlacement"``:``""``,``"descriptionPlacement"``:``""``,``"subLabelPlacement"``:``""``,``"placeholder"``:``""``,``"cssClass"``:``""``,``"inputName"``:``""``,``"adminOnly"``:false,``"noDuplicates"``:false,``"defaultValue"``:``""``,``"choices"``:``""``,``"conditionalLogic"``:``""``,``"displayOnly"``:``""``,``"multipleFiles"``:false,``"maxFiles"``:``""``,``"calculationFormula"``:``""``,``"calculationRounding"``:``""``,``"enableCalculation"``:``""``,``"disableQuantity"``:false,``"displayAllCategories"``:false},{``"type"``:``"text"``,``"id"``:3,``"label"``:``"Text 2"``,``"adminLabel"``:``""``,``"isRequired"``:false,``"size"``:``"medium"``,``"errorMessage"``:``""``,``"inputs"``:null,``"labelPlacement"``:``""``,``"descriptionPlacement"``:``""``,``"subLabelPlacement"``:``""``,``"placeholder"``:``""``,``"multipleFiles"``:false,``"maxFiles"``:``""``,``"calculationFormula"``:``""``,``"calculationRounding"``:``""``,``"enableCalculation"``:``""``,``"disableQuantity"``:false,``"displayAllCategories"``:false,``"inputMask"``:false,``"inputMaskValue"``:``""``,``"allowsPrepopulate"``:false,``"formId"``:28,``"pageNumber"``:1,``"description"``:``""``,``"inputType"``:``""``,``"cssClass"``:``""``,``"inputName"``:``""``,``"adminOnly"``:false,``"noDuplicates"``:false,``"defaultValue"``:``""``,``"choices"``:``""``,``"conditionalLogic"``:``""``}],``"version"``:``"1.9.10.12"``,``"id"``:28,``"useCurrentUserAsAuthor"``:true,``"postContentTemplateEnabled"``:false,``"postTitleTemplateEnabled"``:false,``"postTitleTemplate"``:``""``,``"postContentTemplate"``:``""``,``"lastPageButton"``:null,``"pagination"``:null,``"firstPageCssClass"``:null,``"notifications"``:{``"557b09f4495a0"``:{``"id"``:``"557b09f4495a0"``,``"to"``:``"{admin_email}"``,``"name"``:``"Admin Notification"``,``"event"``:``"form_submission"``,``"toType"``:``"email"``,``"subject"``:``"New submission from {form_title}"``,``"message"``:``"{all_fields}"``}},``"confirmations"``:{``"557b09f457c1b"``:{``"id"``:``"557b09f457c1b"``,``"name"``:``"Default Confirmation"``,``"isDefault"``:true,``"type"``:``"message"``,``"message"``:``"Thanks for contacting us! We will get in touch with you shortly."``,``"url"``:``""``,``"pageId"``:``""``,``"queryString"``:``""``}},``"is_active"``:``"1"``,``"date_created"``:``"2015-06-12 16:33:56"``,``"is_trash"``:``"0"``}}}` |

### POST /forms

Creates new forms using the given form objects

- **URI:** /gravityformsapi/forms
- **Capability:** gravityforms\_create\_forms
- **Input:** An array of valid form objects to create. If the ID of the form is included in the form object, then it will be ignored.
- **Output:** A JSON string containing an array of Form IDs, one for each form created, in the order in which the forms were processed.
- **Potential Errors:**


If the forms object is not an array, an ‘invalid’ error will be output:






|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid"``,``"message"``:``"Invalid form objects"``}}` |





If the form title is not provided, a ‘missing\_title’ error will be output:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"missing_title"``,``"message"``:``"The form title is missing"``}}` |





If there is a problem inserting the form in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_form_error"``,``"message"``:``"There was a problem while inserting the form"``,``"data"``:``"sql statement"``}` |

- **Example:**

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'POST'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`$forms``=``array``(`<br>```array``(`<br>```'title'``=>``'API Generated 10'``,`<br>```'description'``=>``'This is the description for the form generated by the API'``,`<br>```'labelPlacement'``=>``'top_label'``,`<br>```'button'``=>``array``(`<br>```'type'``=>``'text'`<br>```),`<br>```'confirmations'``=>``array``(`<br>```array``(`<br>```'id'``=> 0,`<br>```'name'``=>``'Default Confirmation'``,`<br>```'type'``=>``'message'``,`<br>```'message'``=>``'Thanks for contacting us! We will get in touch with you shortly.'``,`<br>```'isDefault'``=> true,`<br>```),`<br>```),`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'id'``=>``'1'``,`<br>```'label'``=>``'My Text'``,`<br>```'type'``=>``'text'`<br>```)`<br>```,`<br>```),`<br>```);`<br>`//json encode array`<br>`$form_json``= json_encode(``$forms``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'POST'``,``'body'``=>``$form_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//form insert failed, get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```die``(``"Could not post forms. {$status}"``);`<br>`}`<br>`$form_ids``=``$body``[``'response'``];`<br>`$form_ids_created``=``'The following form ids were created:</br>'``;`<br>`foreach``(``$form_ids``as``$form_id``){`<br>```$form_ids_created``.=``$form_id``.``'</br>'``;`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"POST"``;`<br>`var``route =``"forms"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``form = {`<br>```title           :``'API Generated Form'``,`<br>```description     :``'This is the description for the form generated by the API'``,`<br>```labelPlacement  :``'top_label'``,`<br>```button          : {type :``'text'``},`<br>```confirmations   : [`<br>```{id : 0, name :``'Default Confirmation'``, type :``'message'``, message :``'Thanks for contacting us! We will get in touch with you shortly.'``, isDefault :``true``},`<br>```{id : 1, name :``'Confirmation 2'``, type :``'message'``, message :``'Thanks for contacting us! We will get in touch with you shortly.'``, isDefault :``false``}`<br>```],`<br>```fields      : [`<br>```{id :``'1'``, label :``'My Text'``, type :``'text'``},`<br>```{id :``'2'``, label :``'More Text'``, type :``'text'``}`<br>```]`<br>`};`<br>`var``form_array = [];`<br>`form_array[0] = form;`<br>`form_json = JSON.stringify(form_array);`<br>`$.post(url, form_json,``function``(data){`<br>```console.log(data.response);`<br>`});`<br>`</script>` |

Sample JSON output for two forms inserted.

|     |     |
| --- | --- |
| 1 | `{``"status"``:201,``"response"``:[47,48]}` |

### PUT /forms/\[Form ID\]

Updates the form with a given ID, or if an ID is not provided in the route, updates the form(s) using the provided id(s) in the form array.

**NOTE:** To perform an update, the form object for the form being updated needs to first be retrieved because the entire [Form Object](https://docs.gravityforms.com/form-object) must be sent to the API. If the entire form object is not sent, fields not included will be removed, along with other information.

- **URI:** /gravityformsapi/forms/\[Form ID\] or /gravityformsapi/forms
- **Capability:** gravityforms\_edit\_forms
- **Input:** A JSON string representation of the form object(s). If the ID of the form is included in the form object then it will be overwritten with the form ID supplied in the request URI (if there is one).
- **Output:** A localized message describing the result: “Form(s) updated successfully”
- **Potential Errors:**


If the form object is not an array, an ‘invalid’ error will be output:






|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid"``,``"message"``:``"Invalid form object"``}}` |





If the form id is not provided in the route and not provided in the individual form array, a ‘missing\_form\_id’ error will be output:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"missing_form_id"``,``"message"``:``"Missing form id"``}}` |





If the form id provided cannot be found in the database, a ‘not\_found’ error will be output:





|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Form not found"``}}` |





If there is a problem updating the form in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"error_updating_form"``,``"message"``:``"Error updating form"``,``"data"``:``"sql statement"``}` |





If there is a problem updating a confirmation in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"error_updating_confirmations"``,``"message"``:``"Error updating form confirmations"``,``"data"``:``"sql statement"``}` |





If there is a problem updating a notification in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"error_updating_notifications"``,``"message"``:``"Error updating form notifications"``,``"data"``:``"sql statement"``}` |





If there is a problem updating the form title or the form’s active status in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"error_updating_title"``,``"message"``:``"Error updating title"``,``"data"``:``"sql statement"``}` |

- **Example:**


The example below updates forms with the ids 83,84:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route to retrieve forms that will be updated`<br>`$route``=``'forms/84;83'``;`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= self::calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp.dev/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request(``$url``,``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ) {`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ) {`<br>```die``(``"Could not retrieve forms."``);`<br>`}`<br>`//forms retrieved successfully`<br>`$forms``=``$body``[``'response'``];`<br>`//set route for updating`<br>`$route``=``'forms'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'PUT'``,``$route``,``$expires``);`<br>`$sig``= self::calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp.dev/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`foreach``(``$forms``as``&``$form``) {`<br>```//loop through forms and update data`<br>```//use the & so form object is updated in loop`<br>```if``(``$form``[``'id'``] ==``'83'``){`<br>```//update the title for the form, no other changes`<br>```$form``[``'title'``] =``'Title Updated by API'``;`<br>```//update confirmations`<br>```$form``[``'confirmations'``] =``array``(`<br>```array``(`<br>```'id'``=> 0,`<br>```'name'``=>``'Default Confirmation'``,`<br>```'type'``=>``'message'``,`<br>```'message'``=>``'Thanks for contacting us! We will get in touch with you shortlyXXX.'``,`<br>```'isDefault'``=> true,`<br>```),`<br>```);`<br>```break``;`<br>```}`<br>```if``(``$form``[``'id'``] ==``'84'``) {`<br>```foreach``(``$form``[``'fields'``]``as``&``$field``) {`<br>```//use the & so field object is updated in loop`<br>```//update the field label and drop down choices, leave other fields alone`<br>```if``(``$field``[``'id'``] ==``'2'``) {`<br>```$field``[``'label'``]   =``'Updated from API'``;`<br>```$field``[``'choices'``] =``array``(`<br>```array``(`<br>```'text'``=>``'Bulk Item Pickup'``,`<br>```'value'``=>``'3B6D4BD9B6FF'``,`<br>```),`<br>```array``(`<br>```'text'``=>``'General Repair'``,`<br>```'value'``=>``'E26618F9E10A'`<br>```)`<br>```);`<br>```}`<br>```}`<br>```}`<br>`}`<br>`//json encode array`<br>`$form_json``= json_encode(``$forms``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'PUT'``,``'body'``=>``$form_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//form insert failed, get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```die``(``"Could not update forms. {$status}"``);`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"PUT"``;`<br>`var``route =``"forms"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``forms = [`<br>```{`<br>```id      : 67,`<br>```title       :``'API Generated Form 1 Update'``,`<br>```description :``'This is the description for the form generated by the API'``,`<br>```labelPlacement  :``'top_label'``,`<br>```button      : {type :``'text'``},`<br>```confirmations   : [`<br>```{id :``'0'``, name :``'Default Confirmation'``, type :``'message'``, message :``'Thanks for contacting us! We will get in touch with you shortly.'``, isDefault :``true``}`<br>```],`<br>```fields      : [`<br>```{id :``'1'``, label :``'My Text Updated X'``, type :``'text'``},`<br>```{id :``'2'``, label :``'More Text Updated X'``, type :``'text'``},`<br>```{id :``'3'``, label :``'Email Updated X'``, type :``'email'``}`<br>```],`<br>```},`<br>```{`<br>```id      : 68,`<br>```title       :``'API Generated Form 2'``,`<br>```description :``'This is the description for the form generated by the API'``,`<br>```labelPlacement  :``'top_label'``,`<br>```button      : {type :``'text'``},`<br>```confirmations   : [`<br>```{id :``'0'``, name :``'Default Confirmation'``, type :``'message'``, message :``'Thanks for contacting us! We will get in touch with you shortly.'``, isDefault :``true``}`<br>```],`<br>```fields      : [`<br>```{id :``'1'``, label :``'My Text 2x'``, type :``'text'``},`<br>```{id :``'2'``, label :``'More Text 2x'``, type :``'text'``},`<br>```{id :``'3'``, label :``'Email 2x'``, type :``'email'``}`<br>```],`<br>```}`<br>`];`<br>`form_json = JSON.stringify(forms);`<br>`$.ajax({`<br>```url: url,`<br>```type:``'PUT'``,`<br>```data: form_json,`<br>```contentType:``'application/json'``,`<br>```success:``function``(result) {alert(``'success'``);},`<br>```error:``function``(result, textStatus, errorThrown){alert(``'error '``+ errorThrown);}`<br>`});`<br>`</script>` |

Sample output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:``"Forms updated successfully"``}` |

### DELETE /forms/\[Form IDs\]

Deletes the forms with the given IDs

- **URI:** /gravityformsapi/forms/\[Form ID or Form IDs\]





|     |     |
| --- | --- |
| 1<br>2 | `/gravityformsapi/forms/1`<br>`/gravityformsapi/forms/1;4;8` |

- **Output:** A localized message describing the results e.g. Forms deleted successfully: 2
- **Notes:** If a list of form ids is provided, and a form in the list cannot be found, processing ends and the rest of the forms are not deleted.
- **Potential Errors:**


If a form in the list to be deleted is not found in the database, the following message is displayed:






|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Form with id: 67 not found"``,``"data"``:``"67"``}}` |

- **Example:**

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/67;68'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'DELETE'``,``$route``,``$expires``);`<br>`$sig``= self::calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'DELETE'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//form delete failed, get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```die``(``"Could not delete forms. {$status}"``);`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"DELETE"``;`<br>`var``route =``"forms/42;43"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.ajax({`<br>```url: url,`<br>```type:``'DELETE'``,`<br>```contentType:``'application/json'``,`<br>```success:``function``(result) {document.write(result)},`<br>```error:``function``(result, textStatus, errorThrown){alert(``'error '``+ errorThrown);}`<br>`});`<br>`</script>` |

Sample output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:``"Forms deleted successfully: 2"``}` |

## Form Submissions

For more detailed examples of how to work with form submissions, go to [REST API v1 Examples](https://docs.gravityforms.com/web-api-examples).

#### POST /forms/\[Form ID\]/submissions

Submits a form. Use this function to send input values through the complete form submission process.

Supports field validation, notifications, confirmations, multiple-pages, save & continue and all the filters and actions that fire throughout the submission process.

This is exactly equivalent to submitting a form rendered by a Gravity Forms shortcode. The input names expected by this function are identical to the input names found in the form markup so if you have any doubts about the name of an input, just check the form preview. This is a wrapper for the GFAPI::submit\_form() function.

This is the only endpoint which does not require authentication.

- **URI:** /gravityformsapi/forms/\[Form ID\]/submissions
- **Input:** A JSON object containing each of the name-value pairs.





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `{`<br>```"input_values"``: {`<br>```"input_1"``:``"Hello"``,`<br>```"input_2_3"``:``"John"``,`<br>```"input_2_6"``:``"Smith"``,`<br>```"input_4"``:``"My paragraph"`<br>```}`<br>`}` |

- **Output:** A JSON object containing the result.


Example in the case of a successful submission:





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `{`<br>```"is_valid"``: true,`<br>```"page_number"``: 0,`<br>```"source_page_number"``: 1,`<br>```"confirmation_message"``:``"this is the confirmation [snipped]"`<br>`}` |


Example in the case of a validation failure:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10 | `{`<br>```"is_valid"``: false,`<br>```"validation_messages"``: {`<br>```"2"``:``"This field is required. Please enter the first and last name."``,`<br>```"3"``:``"Please enter a valid email address."`<br>```},`<br>```"page_number"``: 1,`<br>```"source_page_number"``: 1,`<br>```"confirmation_message"``:``""`<br>`}` |

\\* **Potential Errors:**

If the form id provided cannot be found (doesn’t exist, is inactive, is in the trash), a “form\_not\_found” error will be output:

|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"form_not_found"``,``"message"``:``"Your form could not be found"``}}` |

If input\_values is empty, a bad request error will be output:

|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:``"Bad request"``}` |

\\* **Notes:**

You cannot upload files using this method. To send pricing fields, you must check the setting “Allow field to be populated dynamically”.

- **Example:**


The example below submits form id 96 with field id 1 (input\_1) set to “Testing”.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55 | `//set route`<br>`$route``=``'forms/96/submissions'``;`<br>`//creating request URL`<br>`$url``=``'http://localhost/wpdev/gravityformsapi/'``.``$route``;`<br>`$values``=``array``(`<br>```'input_values'``=>``array``(`<br>```'input_1'``=>``'Testing'``,`<br>```)`<br>`);`<br>`//json encode array`<br>`$values_json``= json_encode(``$values``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'POST'``,``'body'``=>``$values_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```if``(``is_array``(``$error``) ) {`<br>```//get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```die``(``"Could not complete form submission. {$status}"``);`<br>```}`<br>```else``{`<br>```die``(``$error``);`<br>```}`<br>`}`<br>`else``{`<br>```if``(``$body``[``'response'``][``'is_valid'``] ){`<br>```echo``$body``[``'response'``][``'confirmation_message'``];`<br>```}`<br>```else``{`<br>```$form``= GFFormsModel::get_form_meta(96);`<br>```$result``=``''``;`<br>```$validation_messages``=``$body``[``'response'``][``'validation_messages'``];`<br>```foreach``(``$validation_messages``as``$id``=>``$message``){`<br>```$field``= GFFormsModel::get_field(``$form``,``$id``);`<br>```$result``.=``'Field '``. GFFormsModel::get_label(``$field``)  .``' (id: '``.``$id``.``') - '``.``$message``.``'</br>'``;`<br>```}`<br>```echo``$result``;`<br>```}`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"POST"``;`<br>`var``route =``"forms/96/submissions"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``values = {input_values : {input_1 :``'Testing'``}}`<br>`//json encode array`<br>`values_json = JSON.stringify(values);`<br>`$.post(url, values_json,``function``(data){`<br>```console.log(data.response);`<br>`});`<br>`</script>` |

## Entries

For more detailed examples of how to work with entries, go to [REST API v1 Examples](https://docs.gravityforms.com/web-api-examples).

### GET /entries

Returns the latest entries across all forms.

- **URI:** /gravityformsapi/entries
- **Capability:** gravityforms\_view\_entries
- **Output:** A JSON string containing a collection of entry objects
- **Notes:** Use the [Paging](https://docs.gravityforms.com/web-api/#paging) parameter to limit the number of entries otherwise you may find the database times out. On most servers we have found the optimum page size to be 200.
- **Parameters:**
  - [**Paging**](https://docs.gravityforms.com/web-api/#paging) – Controls the number of entries retrieved per page and allows paging to be implemented
  - [**Sorting**](https://docs.gravityforms.com/web-api/#sorting) – Allows entries to be sorted by a specific field and to be sorted ascending/descending.
  - [**Search**](https://docs.gravityforms.com/web-api/#search-criteria) – Allows entries to be filtered by search criteria and field filters.
- **Example:**


The example below retrieves all entries across all forms with paging set to be 5 entries per page:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries'``;`<br>`//set paging properties.`<br>`$page_size``= 5;``//five items will be returned`<br>`$offset``= 5;``//second page of results will be returned (first page had results 0-4, this needs to start with result 5 to see second page)`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``.``'&paging[page_size]='``.``$page_size``.``'&paging[offset]='``.``$offset``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```die``(``"Could not retrieve entries. Code: {$error['code']}. Message: {$error['message']}. Data: {$error['data']}."``);`<br>`}`<br>`//entries retrieved successfully`<br>`$entries``=``$body``[``'response'``][``'entries'``];`<br>`$total``=``$body``[``'response'``][``'total_count'``];``//Takes into account all entries including ones outside the current retrieved page.`<br>`//To access each entry, loop through the $entries array.`<br>`foreach``(``$entries``as``$entry``){`<br>```$entry_id``=``$entry``[``'id'``];`<br>```$data_created``=``$entry``[``'date_created'``];`<br>```$field_1``=``$entry``[``'1'``];``//Data for field with ID = 1.`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"entries"``;`<br>`var``page_size = 5;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`url +=``'&paging[page_size]='``+ page_size;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```console.log(data.status);`<br>```console.log(url);`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```response    = data.response;`<br>```entries     = response.entries;``//entries is a collection of Entry objects`<br>```total_count = response.total_count;`<br>`});`<br>`</script>` |

Sample JSON output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"total_count"``:``"155"``,``"entries"``:[{``"id"``:``"163"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-07-01 20:03:09"``,``"is_starred"``:0,``"is_read"``:1,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"spam"``,``"1.3"``:``"July"``,``"1.6"``:``"First"``,``"2"``:``"test"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"162"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-24 20:01:31"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"trash"``,``"1.3"``:``"d5"``,``"1.6"``:``"d5"``,``"2"``:``"d5"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"161"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-24 20:01:06"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"d4"``,``"1.6"``:``"d4"``,``"2"``:``"d4"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"157"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:43:23"``,``"is_starred"``:0,``"is_read"``:1,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:``""``,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Lee"``,``"1.6"``:``"Draven"``,``"2"``:``"brandonlee"``,``"3"``:``"The Crow"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``},{``"id"``:``"156"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:42:36"``,``"is_starred"``:0,``"is_read"``:1,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:``""``,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Ellen"``,``"1.6"``:``"Ripley"``,``"2"``:``"aliens"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``}]}}` |

### GET /entries/\[Entry ID\]

Returns the entry that matches the given entry id

- **URI:** /gravityformsapi/entries/\[Entry ID\]
- **Capability:** gravityforms\_view\_entries
- **Output:** A JSON string containing the entry object
- **Potential Errors:**


If the entry is not found, a ‘not\_found’ error will be output:






|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Entry with id 1000 not found"``,``"data"``:``"1000"``}}` |

- **Example:**


The example below retrieves the entry with id 146:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries/146'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```die``(``"Could not retrieve entry. Code: {$error['code']}. Message: {$error['message']}. Data: {$error['data']}."``);`<br>`}`<br>`//entry retrieved successfully`<br>`$entry``=``$body``[``'response'``];`<br>`$entry_id``=``$entry``[``'id'``];`<br>`$data_created``=``$entry``[``'date_created'``];`<br>`$field_1``=``$entry``[``'1'``];``//Data for field with ID = 1.`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"entries/146"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```response    = data.response;`<br>```console.log(response[``'id'``]);`<br>`});`<br>`</script>` |

Sample JSON output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"id"``:``"146"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:43:23"``,``"is_starred"``:1,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:``""``,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Eric"``,``"1.6"``:``"Draven"``,``"2"``:``"brandonlee"``,``"3"``:``"Rapid Fire"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``}}` |

### GET /forms/\[Form ID\]/entries

Returns the latest entries for the given Form ID.

- **URI:** /gravityformsapi/forms/\[form ID\]/entries
- **Capability:** gravityforms\_view\_entries
- **Output:** A JSON string containing a collection of entry objects
- **Parameters:**
  - [**Paging**](https://docs.gravityforms.com/web-api/#paging) – Controls the number of entries retrieved per page and allows paging to be implemented
  - [**Sorting**](https://docs.gravityforms.com/web-api/#sorting) – Allows entries to be sorted by a specific field and to be sorted ascending/descending.
  - [**Search**](https://docs.gravityforms.com/web-api/#search-criteria) – Allows entries to be filtered by search criteria and field filters.
- **Example:**


The example below retrieves entries for a form. Only 10 entries are retrieved since [Paging](https://docs.gravityforms.com/web-api/#paging) is not used.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/28/entries'``;`<br>`//creating request URL`<br>`//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/28/entries'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```//echo (wp_remote_retrieve_body( $response ) );`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```die``(``"Could not retrieve entries. Code: {$error['code']}. Message: {$error['message']}. Data: {$error['data']}."``);`<br>`}`<br>`//entries retrieved successfully`<br>`$entries``=``$body``[``'response'``][``'entries'``];`<br>`$total``=``$body``[``'response'``][``'total_count'``];``//Takes into account all entries including ones outside the current retrieved page.`<br>`//To access each entry, loop through the $entries array.`<br>`foreach``(``$entries``as``$entry``){`<br>```$entry_id``=``$entry``[``'id'``];`<br>```$data_created``=``$entry``[``'date_created'``];`<br>```$field_1``=``$entry``[``'1'``];``//Data for field with ID = 1.`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"forms/28/entries"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```response          = data.response;`<br>```entries           = response.entries;``//entries is a collection of Entry objects`<br>```total_count       = response.total_count;`<br>```});`<br>`</script>` |

The response from this example will look like the following if successful:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"total_count"``:``"13"``,``"entries"``:[{``"id"``:``"162"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-24 20:01:31"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"d5"``,``"1.6"``:``"d5"``,``"2"``:``"d5"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"161"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-24 20:01:06"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"d4"``,``"1.6"``:``"d4"``,``"2"``:``"d4"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"157"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:43:23"``,``"is_starred"``:0,``"is_read"``:1,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:``""``,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Eric"``,``"1.6"``:``"Draven"``,``"2"``:``"brandonlee"``,``"3"``:``"The Crow"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``},{``"id"``:``"156"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:42:36"``,``"is_starred"``:0,``"is_read"``:1,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:``""``,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Ellen"``,``"1.6"``:``"Ripley"``,``"2"``:``"aliens"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"155"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:42:15"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"James"``,``"1.6"``:``"Kirk"``,``"2"``:``"captain"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"154"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:41:56"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Jean-Luc"``,``"1.6"``:``"Picard"``,``"2"``:``"captain"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"153"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:41:33"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Wesley"``,``"1.6"``:``"Crusher"``,``"2"``:``"ensign"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"152"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:41:07"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Sam"``,``"1.6"``:``"Winchester"``,``"2"``:``"computer"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"151"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:40:48"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Dean"``,``"1.6"``:``"Winchester"``,``"2"``:``"supernatural"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``},{``"id"``:``"150"``,``"form_id"``:``"28"``,``"date_created"``:``"2015-06-15 22:40:29"``,``"is_starred"``:0,``"is_read"``:0,``"ip"``:``"::1"``,``"source_url"``:``"http:\/\/localhost\/wp\/?gf_page=preview&id=28"``,``"post_id"``:null,``"currency"``:``"USD"``,``"payment_status"``:null,``"payment_date"``:null,``"transaction_id"``:null,``"payment_amount"``:null,``"payment_method"``:null,``"is_fulfilled"``:null,``"created_by"``:``"1"``,``"transaction_type"``:null,``"user_agent"``:``"Mozilla\/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko\/20100101 Firefox\/38.0"``,``"status"``:``"active"``,``"1.3"``:``"Rupert"``,``"1.6"``:``"Giles"``,``"2"``:``"sunnydale"``,``"1.2"``:``""``,``"1.4"``:``""``,``"1.8"``:``""``,``"3"``:``""``}]}}` |

If no entries are located for the specified form, the response will look like the following:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"total_count"``:``"0"``,``"entries"``:[]}}` |

### GET /forms/\[Form ID\]/entries/\[Entry ID\]/fields/\[Field ID\]

Returns the specified entry property/properties for the specified entry/entries.

- **URI:**/gravityformsapi/entries/\[Entry ID\]/fields/\[Field ID or entry meta key\]





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `//retrieve field id 1.3 for entry id 146`<br>`http:``//[your_domain]/gravityformsapi/entries/146/fields/1.3`<br>`//retrieve field ids 1.3 and 1.6 with fields id, form_id, date_created, is_starred`<br>`//for entry ids 146 and 147`<br>`http:``//[your_domain]/gravityformaspi/entries/146;147/fields/id;form_id;date_created;is_starred;1.3;1.6;` |

- **Capability:** gravityforms\_view\_entries
- **Output:** A JSON string containing the filtered entry object
- **Potential Errors:**


If the entry is not found, a ‘not\_found’ error will be output. If multiple entries are being retrieved and the last entry is not found, no entries will be retrieved.






|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Entry with id 1001 not found"``,``"data"``:``"1001"``}}` |

- **Notes:** The entry meta keys which may be used are listed in the [Sorting](https://docs.gravityforms.com/web-api/#sorting) section.
- **Parameters:**
  - [**Paging**](https://docs.gravityforms.com/web-api/#paging) – Controls the number of entries retrieved per page and allows paging to be implemented
  - [**Sorting**](https://docs.gravityforms.com/web-api/#sorting) – Allows entries to be sorted by a specific field and to be sorted ascending/descending.
  - [**Search**](https://docs.gravityforms.com/web-api/#search-criteria) – Allows entries to be filtered by search criteria and field filters.
- **Example:**


The example below retrieves specific fields for a single entry:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries/1000/fields/id;form_id;date_created;is_starred;is_read;1.3;1.6;'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```//echo (wp_remote_retrieve_body( $response ) );`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```die``(``"Could not retrieve entry. Code: {$error['code']}. Message: {$error['message']}. Data: {$error['data']}."``);`<br>`}`<br>`//entry retrieved successfully`<br>`$entry``=``$body``[``'response'``];`<br>`$entry_id``=``$entry``[``'id'``];`<br>`$data_created``=``$entry``[``'date_created'``];`<br>`$field_1``=``$entry``[``'1'``];``//Data for field with ID = 1.`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``'entries/24/fields/id;form_id;date_created;is_starred;is_read;2.3;2.6;'``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```response = data.response;`<br>```console.log(response);`<br>`});` |

* * *

### Querystring Parameters for Retrieval Routes

There are four important features that may be set as querystring parameters included with the URI when retrieving entries:

- [Paging](https://docs.gravityforms.com/web-api/#paging)
- [Sorting](https://docs.gravityforms.com/web-api/#sorting)
- [Search Criteria](https://docs.gravityforms.com/web-api/#search-criteria)
- [Field Filters](https://docs.gravityforms.com/web-api/#field-filters)

NOTE: The examples below do not include the required api\_key, expires, or signature querystring parameter values for ease of reading.

#### Paging

By default, only 10 results are retrieved. This can be changed by specifying the **page\_size** within the querystring as part of the **paging** parameter.

|     |     |
| --- | --- |
| 1 | `http:``//localhost/wp/gravityformsapi/forms/28/entries/?paging[page_size]=5` |

Along with specifying a page size, a **offset** may also be set with the paging parameter. This is set to 0 by default. Using the page offset comes into play when displaying entries with the ability for the user to go to the next or previous set of results. The page offset controls which set of results are displayed as the user navigates through the pages. If the page size is set to 5 and the offset is 0, then results 0 – 4 are displayed. To see the next set of results, the page offset would be set to 5, displaying results 5 – 9 (actually the sixth through tenth results since the offset starts at zero), and the next page offset would be 10, displaying results 10 – 14 (eleventh through fifteenth since the offset starts at zero).

|     |     |
| --- | --- |
| 1 | `http:``//localhost/wp/gravityformsapi/forms/28/entries/?paging[page_size]=5&paging[offset]=10` |

#### Sorting

Retrieved entries are automatically sorted by entry id, descending. This means the most recently created entries are first. This may be changed by specifying a sorting key ( **key**) and a sorting direction ( **direction**) within the **sorting** querystring parameter. The possible values for the sorting direction are:

- ASC
- DESC

|     |     |
| --- | --- |
| 1 | `http:``//localhost/wp/gravityformsapi/forms/28/entries/?sorting[direction]=ASC` |

To specify a sorting key, field ids or an entry meta key may be used. The entry meta keys which are available for sorting are as follows:

- id
- form\_id
- post\_id
- date\_created
- is\_starred
- is\_read
- ip
- source\_url
- user\_agent
- created\_by
- status
- currency

For entries with payment information:

- payment\_status
- payment\_date
- payment\_amount
- payment\_method
- transaction\_id
- transaction\_type
- is\_fulfilled

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `//example using a field id`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?sorting[key]=1.3`<br>`//example using an entry meta key`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?sorting[key]=is_starred`<br>`//example with sorting key and direction`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?sorting[key]=form_id&sorting[direction]=ASC` |

#### Search Criteria

Specifying search criteria allows the results retrieved to be filtered into a subset of data, using specific entry meta. To specify search criteria, use **search** in the querystring along with an entry meta key and a value. The entry meta keys which are available to use as search criteria are as follows:

- start\_date
- end\_date
- status

If filtering needs to be done using any other set of data, it is necessary to use field filters.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `//example using status`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?search[status]=trash`<br>`//example using a specific date`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?search[start_date]=2015-06-24`<br>`//example using a date range`<br>`http:``//localhost/wp/gravityformsapi/forms/28/entries/?search[start_date]=2015-06-15&search[end_date]=2015-06-24` |

#### Field Filters

Field filters are an extension of search criteria that provides more flexibility with specifying multiple sets of data conditionally. The search may be done so that all or any of the criteria is met. The values provided may be set to match, not match, or be contained in the results. Field filters are structured into an array with child arrays for each criteria set. When using field filters, the value of the search argument needs to be a JSON string. The JSON string needs to be URL-encoded before it is used in the querystring to maintain the JSON formatting. Field filters may be broken down into the following:

- mode – indicates whether all conditions need to be met or any of them. The possible values are **all** (AND is used in the database query) or **any** (OR is used in the database query). The default mode is “all” so you do not need to include the mode when all conditions are required. The “mode” is contained in a top level array.
- key – the field id or entry meta being used to filter data
- operator – indicates how the data should be compared. The possible values are **is**, **isnot**, **contains**.
- value – the data used for comparison

The **key**, **operator**, and **value** together make up the child array and each piece is required for a criteria set. Below is an example of what the array would look like:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13 | `array``(`<br>```'mode'``=>``'any'``,`<br>```array``(`<br>```'key'``=>``'1.6'``,`<br>```'operator'``=>``'is'``,`<br>```'value'``=>``'Draven'`<br>```),`<br>```array``(`<br>```'key'``=>``'1.3'``,`<br>```'operator'``=>``'isnot'``,`<br>```'value'``=>``'Eric'`<br>```)`<br>`);` |

Once the array is JSON-encoded, the string will look like the following:

|     |     |
| --- | --- |
| 1 | `{``"field_filters"``:{``"mode"``:``"any"``,``"0"``:{``"key"``:``"1.6"``,``"operator"``:``"is"``,``"value"``:``"Draven"``},``"1"``:{``"key"``:``"1.3"``,``"operator"``:``"isnot"``,``"value"``:``"Eric"``}}}` |

Field filters may be used in combination with Search Criteria.

Below is an example on creating an array that contains both search criteria and field filters:

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17 | `$search``=``array``(`<br>```'field_filters'``=>``array``(`<br>```array``(`<br>```'key'``=>``'1.6'``,`<br>```'operator'``=>``'contains'``,`<br>```'value'``=>``'Test'`<br>```),`<br>```array``(`<br>```'key'``=>``'1.3'``,`<br>```'operator'``=>``'is'``,`<br>```'value'``=>``'Test'`<br>```)`<br>```),`<br>```'start_date'``=>``'2016-10-10'`<br>```);`<br>`$search_json``= urlencode( json_encode(``$search``) );`<br>`$url``.=``'&search='``.``$search_json``;` |

**JavaScript**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `var``search = {`<br>```field_filters : [`<br>```{`<br>```key:``'1.6'``,`<br>```operator:``'contains'``,`<br>```value:``'Test'`<br>```},`<br>```{`<br>```key:``'1.3'``,`<br>```operator:``'is'``,`<br>```value:``'Test'`<br>```}`<br>```],`<br>```start_date :``'2016-10-10'`<br>```};`<br>`//convert to a JSON string and url encode it so the JSON formatting persists`<br>`search = encodeURI(JSON.stringify(search));`<br>`//add search to url`<br>`url +=``'&search='``+ search;` |

### POST /entries

Creates/adds entries

- **URI:** /gravityformsapi/entries
- **Capability:** gravityforms\_edit\_entries
- **Input:** A JSON string containing a collection of entries that will be added
- **Output:** A localized message describing the result: “Entries created successfully” with the entry ids that were inserted
- **Potential Errors:**


If the entry information passed over to the API is not an array, an invalid\_entry\_object error code is returned:






|     |     |
| --- | --- |
| 1 | `{``"status"``:error_code,``"response"``:{``"code"``:``"invalid_entry_object"``,``"message"``:``"The entry object must be an array"``}}` |





If a form id is not provided for an entry, an empty\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"empty_form_id"``,``"message"``:``"The form id must be specified"``}}` |





If an invalid form id is provided, an invalid\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid_form_id"``,``"message"``:``"The form for this entry does not exist"``}}` |





If there is a problem inserting the entry in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_entry_properties_failed"``,``"message"``:``"There was a problem while inserting the entry properties"``,``"data"``:``"sql statement"``}` |





If there is a problem inserting the value for a field which has inputs, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_input_value_failed"``,``"message"``:``"There was a problem while inserting one of the input values for the entry"``,``"data"``:``"sql statement"``}` |





If there is a problem inserting the value for a field, the following message is displayed, along with the applicable SQL error, if one exists.





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_field_values_failed"``,``"message"``:``"There was a problem while inserting the field values"``,``"data"``:``"sql statement"``}` |

- **Notes:** If values are not provided for the following entry fields, default values are used:

  - date\_created – utc\_timestamp()
  - is\_starred – 0
  - is\_read – 0
  - ip – $\_SERVER
  - source\_url – http://$\_SERVER\[‘HTTP\_HOST’\] . $\_SERVER\[‘REQUEST\_URI’\] (If $\_SERVER\[‘HTTPS’\] or force ssl is on, then https is used)
  - user\_agent – API
  - currency – USD
  - status – active
  - created\_by – current user id if logged in
- **Example:**

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'POST'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`$entries``=``array``(`<br>```array``(`<br>```'form_id'``=>``'28'``,`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Manually'``,`<br>```'1.6'``=>``'Created Entry 1'``,`<br>```'2'``=>``'Creating using REST API v1'``,`<br>```'3'``=>``'Manually created using the POST route of the REST API v1'``,`<br>```),`<br>```array``(`<br>```'form_id'``=>``'28'``,`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Manually'``,`<br>```'1.6'``=>``'Created Entry 2'``,`<br>```'2'``=>``'This entry was created manually using the REST API v1.'``,`<br>```'3'``=>``'Manually created'``,`<br>```),`<br>`);`<br>`//json encode array`<br>`$entry_json``= json_encode(``$entries``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'POST'``,``'body'``=>``$entry_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//entry update failed, get error information, error could just be a string`<br>```if``(``is_array``(``$error``)){`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```}`<br>```else``{`<br>```$status``=``$error``;`<br>```}`<br>```die``(``"Could not post entries. {$status}"``);`<br>`}`<br>`$entry_ids``=``$body``[``'response'``];`<br>`$entry_ids_created``=``'The following entry ids were created:</br>'``;`<br>`foreach``(``$entry_ids``as``$entry_id``){`<br>```$entry_ids_created``.=``$entry_id``.``'</br>'``;`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"POST"``;`<br>`var``route =``'entries'``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``entries =`<br>`[`<br>```{`<br>```form_id     :``'1'``,`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 0,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Testing'``,`<br>```2.6         :``'Tester'``,`<br>```1           :``'The Crowsxxxxxxxxxxxxx'`<br>```},`<br>```{`<br>```form_id     :``'1'``,`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 1,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Second Testing'``,`<br>```2.6         :``'Second Tester'``,`<br>```1           :``'Testing.....'`<br>```}`<br>`];`<br>`entries_json = JSON.stringify(entries);`<br>`$.post(url, entries_json,``function``(data){`<br>```document.write(``'Inserted Ids: '``+ data.response);`<br>`});`<br>`</script>` |

### POST /forms/\[Form ID\]/entries

Creates/adds entries for the specified Form ID

- **URI:** /gravityformsapi/forms/\[Form ID\]/entries
- **Capability:** gravityforms\_edit\_entries
- **Input:** A JSON string containing a collection of entries that will be added
- **Output:** A localized message describing the result: “Entries created successfully” with the entry ids that were inserted
- **Potential Errors:**


If the entry information passed over to the API is not an array, an invalid\_entry\_object error code is returned:






|     |     |
| --- | --- |
| 1 | `{``"status"``:error_code,``"response"``:{``"code"``:``"invalid_entry_object"``,``"message"``:``"The entry object must be an array"``}}` |





If a form id is not provided for an entry, an empty\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"empty_form_id"``,``"message"``:``"The form id must be specified"``}}` |





If an invalid form id is provided, an invalid\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid_form_id"``,``"message"``:``"The form for this entry does not exist"``}}` |





If there is a problem inserting the entry in the database, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_entry_properties_failed"``,``"message"``:``"There was a problem while inserting the entry properties"``,``"data"``:``"sql statement"``}` |





If there is a problem inserting the value for a field which has inputs, the following message is displayed, along with the applicable SQL error, if one exists:





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_input_value_failed"``,``"message"``:``"There was a problem while inserting one of the input values for the entry"``,``"data"``:``"sql statement"``}` |





If there is a problem inserting the value for a field, the following message is displayed, along with the applicable SQL error, if one exists.





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"insert_field_values_failed"``,``"message"``:``"There was a problem while inserting the field values"``,``"data"``:``"sql statement"``}` |

- **Notes:** If values are not provided for the following entry fields, default values are used:

  - date\_created – utc\_timestamp()
  - is\_starred – 0
  - is\_read – 0
  - ip – $\_SERVER
  - source\_url – http://$\_SERVER\[‘HTTP\_HOST’\] . $\_SERVER\[‘REQUEST\_URI’\] (If $\_SERVER\[‘HTTPS’\] or force ssl is on, then https is used)
  - user\_agent – API
  - currency – USD
  - status – active
  - created\_by – current user id if logged in
- **Example:**

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/28/entries'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'POST'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`$entries``=``array``(`<br>```array``(`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Manually'``,`<br>```'1.6'``=>``'Created Entry using Form route'``,`<br>```'2'``=>``'Creating using REST API v1'``,`<br>```'3'``=>``'Manually created using the POST route of the REST API v1'``,`<br>```),`<br>```array``(`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Manually'``,`<br>```'1.6'``=>``'Created Entry 2 using Form route'``,`<br>```'2'``=>``'This entry was created manually using the REST API v1.'``,`<br>```'3'``=>``'Manually created'``,`<br>```),`<br>`);`<br>`//json encode array`<br>`$entry_json``= json_encode(``$entries``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'POST'``,``'body'``=>``$entry_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//entry update failed, get error information, error could just be a string`<br>```if``(``is_array``(``$error``)){`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```}`<br>```else``{`<br>```$status``=``$error``;`<br>```}`<br>```die``(``"Could not post entries. {$status}"``);`<br>`}`<br>`$entry_ids``=``$body``[``'response'``];`<br>`$entry_ids_created``=``'The following entry ids were created:</br>'``;`<br>`foreach``(``$entry_ids``as``$entry_id``){`<br>```$entry_ids_created``.=``$entry_id``.``'</br>'``;`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"POST"``;`<br>`var``route =``'forms/1/entries'``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``entries =`<br>`[`<br>```{`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 0,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Testing'``,`<br>```2.6         :``'Tester'``,`<br>```1           :``'The Crowsxxxxxxxxxxxxx'`<br>```},`<br>```{`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 1,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Second Testing'``,`<br>```2.6         :``'Second Tester'``,`<br>```1           :``'Testing.....'`<br>```}`<br>`];`<br>`entries_json = JSON.stringify(entries);`<br>`$.post(url, entries_json,``function``(data){`<br>```document.write(``'Inserted Ids: '``+ data.response);`<br>`});`<br>`</script>` |

### PUT /entries/\[Entry ID\]

Updates the entry with the given ID

- **URI:** /gravityformsapi/entries/\[Entry ID\]
- **Capability:** gravityforms\_edit\_entries
- **Input:** A JSON string with the entry. If an entry ID is provided in the entry object, it will NOT be used. The id provided in the request is used. Please see the [Entry Object](https://docs.gravityforms.com/entry-object) for more details regarding what may be included.
- **Output:** A message describing the result: “Entry updated successfully”
- **Potential Errors:**


If the entry id provided cannot be found, a not\_found error code is returned:






|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Entry with id 1000 not found"``,``"data"``:``"1000"``}}` |





If an invalid form id is provided when updating the entry, an invalid\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid_form_id"``,``"message"``:``"The form for this entry does not exist"``}}` |





If there is a problem updating the entry in the database, the following message is displayed, along with the applicable SQL error, if one exists.





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_entry_properties_failed"``,``"message"``:``"There was a problem while updating the entry properties"``,``"data"``:``"sql statement"``}` |





If there is a problem updating the value for a field which has inputs, the following message is displayed, along with the applicable SQL error, if one exists.





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_input_value_failed"``,``"message"``:``"There was a problem while updating one of the input values for the entry"``,``"data"``:``"sql statement"``}` |





If there is a problem updating the value for a field, the following message is displayed, along with the applicable SQL error, if one exists.





|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_field_values_failed"``,``"message"``:``"There was a problem while updating the field values"``,``"data"``:``"sql statement"``}` |

- **Notes:** If values are not provided for the following entry fields, default values are used:
  - date\_created – utc\_timestamp()
  - is\_starred – 0
  - is\_read – 0
  - ip – $\_SERVER
  - source\_url – http://$\_SERVER\[‘HTTP\_HOST’\] . $\_SERVER\[‘REQUEST\_URI’\] (If $\_SERVER\[‘HTTPS’\] or force ssl is on, then https is used)
  - user\_agent – API
  - currency – USD
  - status – active
  - created\_by – current user id if logged in
- **Example:**

**PHP**

The example below updates field id 3, read status, starred status for entry id 146. The existing entry object array is retrieved and the values in the array are modified. That array is then what is JSON-encoded and passed along for updating.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries/146'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'PUT'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`$entry``= GFAPI::get_entry( 146 );`<br>`$entry``[``'3'``] =``'Rapid Fire'``;`<br>`$entry``[``'is_read'``] = 0;`<br>`$entry``[``'is_starred'``] = 1;`<br>`$entry_json``= json_encode(``$entry``);`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'PUT'``,``'body'``=>``$entry_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//entry update failed, get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>`}`<br>`else``{`<br>```//entry updated successfully`<br>```$status``=``$status_code``;`<br>`}`<br>`die``(``"Entry update status: {$status}"``);`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"PUT"``;`<br>`var``route =``"entries/29"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``update_entry = {`<br>```form_id     :``'1'``,`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 0,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Testing'``,`<br>```2.6         :``'Tester'``,`<br>```1           :``'xxxxxxxxxxxxx'`<br>`} ;`<br>`entry_json = JSON.stringify( update_entry );`<br>`$.ajax({`<br>```url: url,`<br>```type:``'PUT'``,`<br>```data: entry_json,`<br>```contentType:``'application/json'``,`<br>```success:``function``(result) {alert(``'success'``);},`<br>```error:``function``(result, textStatus, errorThrown){alert(``'error '``+ errorThrown);}`<br>`});` |

If the update were successful, the result will look similar to the following:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:``"Entry updated successfully"``}` |

### PUT /entries

Updates the entries sent in the body

- **URI:** /gravityformsapi/entries
- **Capability:** gravityforms\_edit\_entries
- **Input:** A JSON string with a collection of entries. Please see the [Entry Object](https://docs.gravityforms.com/entry-object) for more details regarding what may be included.
- **Output:** A localized message describing the result: “Entries updated successfully”
- **Potential Errors:**


If the entry id provided cannot be found, a not\_found error code is returned:






|     |     |
| --- | --- |
| 1 | `{``"status"``:404,``"response"``:{``"code"``:``"not_found"``,``"message"``:``"Entry with id 1000 not found"``,``"data"``:``"1000"``}}` |





If an invalid form id is provided when updating the entry, an invalid\_form\_id error code is returned:





|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid_form_id"``,``"message"``:``"The form for this entry does not exist"``}}` |


If there is a problem updating the entry in the database, the following message is displayed, along with the applicable SQL error, if one exists.

|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_entry_properties_failed"``,``"message"``:``"There was a problem while updating the entry properties"``,``"data"``:``"sql statement"``}` |

```
If there is a problem updating the value for a field which has inputs, the following message is displayed, along with the applicable SQL error, if one exists.
```

|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_input_value_failed"``,``"message"``:``"There was a problem while updating one of the input values for the entry"``,``"data"``:``"sql statement"``}` |

```
If there is a problem updating the value for a field, the following message is displayed, along with the applicable SQL error, if one exists.
```

|     |     |
| --- | --- |
| 1 | `{``"status"``:error code,``"response"``:{``"code"``:``"update_field_values_failed"``,``"message"``:``"There was a problem while updating the field values"``,``"data"``:``"sql statement"``}` |

- **Notes:** If an error is encountered updating an entry, the error information is returned, and no further entries are updated.


If values are not provided for the following entry fields, default values are used:


  - date\_created – utc\_timestamp()
  - is\_starred – 0
  - is\_read – 0
  - ip – $\_SERVER
  - source\_url – http://$\_SERVER\[‘HTTP\_HOST’\] . $\_SERVER\[‘REQUEST\_URI’\] (If $\_SERVER\[‘HTTPS’\] or force ssl is on, then https is used)
  - user\_agent – API
  - status – active
  - currency – USD
- **Examples:**


The example below has two entries in a manually created array. Each entry is an array, and those entries are placed into one array. This array is then JSON-encoded so it may be passed to the API.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'PUT'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`$entries``=``array``(`<br>```array``(`<br>```'id'``=> 156,`<br>```'form_id'``=>``'28'``,`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Ellen'``,`<br>```'1.6'``=>``'Ripley'``,`<br>```'2'``=>``'aliens'``,`<br>```'3'``=>``'Sigourney Weaver'``,`<br>```),`<br>```array``(`<br>```'id'``=> 157,`<br>```'form_id'``=>``'28'``,`<br>```'date_created'``=>``'2015-06-15 22:43:23'``,`<br>```'is_starred'``=> 0,`<br>```'is_read'``=> 1,`<br>```'ip'``=>``'::1'``,`<br>```'source_url'``=>``'http://localhost/wp/?gf_page=preview&id=28'``,`<br>```'currency'``=>``'USD'``,`<br>```'created_by'``=> 1,`<br>```'user_agent'``=>``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```'status'``=>``'active'``,`<br>```'1.3'``=>``'Eric'``,`<br>```'1.6'``=>``'Draven'``,`<br>```'2'``=>``'brandonlee'``,`<br>```'3'``=>``'The Crow'``,`<br>```),`<br>`);`<br>`//json encode array`<br>`$entry_json``= json_encode(``$entries``);`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'PUT'``,``'body'``=>``$entry_json``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//entry update failed, get error information, error could just be a string`<br>```if``(``is_array``(``$error``)){`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```}`<br>```else``{`<br>```$status``=``$error``;`<br>```}`<br>```die``(``"Could not post entries. {$status}"``);`<br>`}`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"PUT"``;`<br>`var``route =``"entries"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`var``update_entries = [`<br>```{`<br>```id      :``'7'``,`<br>```form_id     :``'1'``,`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 0,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wp.dev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Gravity'``,`<br>```2.6         :``'Forms'``,`<br>```1           :``'X'`<br>```},`<br>```{`<br>```id      :``'16'``,`<br>```form_id     :``'1'``,`<br>```date_created:``'2016-07-29 21:38:23'``,`<br>```is_starred  : 0,`<br>```is_read     : 1,`<br>```ip          :``'::1'``,`<br>```source_url  :``'http://localhost/wpdev/?gf_page=preview&id=1'``,`<br>```currency    :``'USD'``,`<br>```created_by  : 1,`<br>```user_agent  :``'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'``,`<br>```status      :``'active'``,`<br>```2.3         :``'Rocket'``,`<br>```2.6         :``'Genius'``,`<br>```1           :``'gravity'`<br>```}`<br>`];`<br>`entry_json = JSON.stringify( update_entries );`<br>`$.ajax({`<br>```url: url,`<br>```type:``'PUT'``,`<br>```data: entry_json,`<br>```contentType:``'application/json'``,`<br>```success:``function``(result) {alert(``'success'``);},`<br>```error:``function``(result, textStatus, errorThrown){alert(``'error '``+ errorThrown);}`<br>`});`<br>`</script>` |

### DELETE /entries/\[Entry ID\]

Deletes the entry or entries with the specified ID or IDs. The deletion process completely removes the entry; it will NOT be available in the Trash.

- **URI:** /gravityformsapi/entries/\[Entry ID\]





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `//delete a single entry`<br>`http:``//[your_domain]/gravityformsapi/entries/1`<br>`//delete multiple entries`<br>`http:``//[your_domain]/gravityformsapi/entries/1;3;6` |

- **Capability:** gravityforms\_delete\_entries
- **Output:** A localized message describing the result: “Entries deleted successfully”
- **Potential Errors:**


If an entry being deleted cannot be found, and invalid\_entry\_id code is returned.






|     |     |
| --- | --- |
| 1 | `{``"status"``:400,``"response"``:{``"code"``:``"invalid_entry_id"``,``"message"``:``"Invalid entry id: 164"``,``"data"``:``"164"``}}` |

- **Notes:** If an error is encountered while deleting one of the entries in a list of multiple entries, the error information is returned, and no further entries are deleted.
- **Example:**


The example below deletes the entries with ids 164, 165, 166.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'entries/164;165;166'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'DELETE'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'DELETE'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```//entry update failed, get error information, error could just be a string`<br>```if``(``is_array``(``$error``)){`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```}`<br>```else``{`<br>```$status``=``$error``;`<br>```}`<br>`}`<br>`else``{`<br>```//entries deleted successfully`<br>```$status``=``$status_code``;`<br>`}`<br>`die``(``"Entry deletion status: {$status}"``);`<br>`function``calculate_signature(``$string``,``$private_key``) {`<br>```$hash``= hash_hmac(``'sha1'``,``$string``,``$private_key``, true );`<br>```$sig``= rawurlencode(``base64_encode``(``$hash``) );`<br>```return``$sig``;`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"DELETE"``;`<br>`var``route =``"entries/164;165;166"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.ajax({`<br>```url: url,`<br>```type:``'DELETE'``,`<br>```contentType:``'application/json'``,`<br>```success:``function``(result) {document.write(result.response);},`<br>```error:``function``(result, textStatus, errorThrown){alert(``'error '``+ errorThrown);}`<br>`});`<br>`</script>` |

If the deletion is successful, the response will look like the following:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:``"Entries deleted successfully: 3"``}` |

## Results

### GET /forms/\[Form ID\]/results

Returns the aggregate results (entry counts) for each of the fields in the given form.

If the results take longer than approximately 20 seconds to complete, then the calculation process will stop and the incomplete results will be returned with a status code of 202 (accepted).

The calculation will continue in the background using a recursive wp\_cron task with breaks of ten seconds until it finishes. When the calculation is complete, the results will be returned with a status code of 200 (OK).

If the background task for a request stops for more than 3 minutes (e.g. system restart, script timeout or memory issues) it will be rescheduled the next time the server is polled for the same request.

After an entry has been created the status of the results will change to “expired” and the new calculation of the results will begin again in the background.

When the fields have been edited using the form editor all cached results for that form will be deleted.

Editing form settings will not affect the cached results.

- **URI:** /gravityformsapi/forms/\[Form ID\]/results
- **Capability:** gravityforms\_view\_entries
- **Output:** A JSON string containing the results data plus the following where appropriate:

  - status = “incomplete”, “complete” or “expired”
  - timestamp = \[UTC UNIX timestamp for the calculation\]
  - progress = \[percentage of results calculated so far\]
  - offset = \[number of entries processed so far\]
- **Potential Errors:**
  - If the form id specified cannot be found, a “Not found” message is returned.





    |     |     |
    | --- | --- |
    | 1 | `{``"status"``:404,``"response"``:``"Not found"``}` |
- **Example:**


The example below retrieves the results for form id 3 which has two text fields. The count of how many times each field has been filled out is returned.

**PHP**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48 | `//set API keys`<br>`$api_key``=``'your_api_key'``;`<br>`$private_key``=``'your_private_key'``;`<br>`//set route`<br>`$route``=``'forms/3/results'``;`<br>`//creating request URL`<br>`$expires``=``strtotime``(``'+60 mins'``);`<br>`$string_to_sign``= sprintf(``'%s:%s:%s:%s'``,``$api_key``,``'GET'``,``$route``,``$expires``);`<br>`$sig``= calculate_signature(``$string_to_sign``,``$private_key``);`<br>`$url``=``'http://localhost/wp/gravityformsapi/'``.``$route``.``'?api_key='``.``$api_key``.``'&signature='``.``$sig``.``'&expires='``.``$expires``;`<br>`//retrieve data`<br>`$response``= wp_remote_request( urlencode(``$url``),``array``(``'method'``=>``'GET'``) );`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```//http request failed`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`//result is in the response "body" and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```$error``=``$body``[``'response'``];`<br>```if``(``is_array``(``$error``) ) {`<br>```//get error information`<br>```$error_code``=``$error``[``'code'``];`<br>```$error_message``=``$error``[``'message'``];`<br>```$error_data``= isset(``$error``[``'data'``] ) ?``$error``[``'data'``] :``''``;`<br>```$status``=``"Code: {$error_code}. Message: {$error_message}. Data: {$error_data}."``;`<br>```die``(``"Could not retrieve results. {$status}"``);`<br>```}`<br>```else``{`<br>```die``(``$error``);`<br>```}`<br>`}`<br>`else``{`<br>```$response``=``$body``[``'response'``];`<br>```$entry_count``=``$response``[``'entry_count'``];`<br>```$field_data``=``$response``[``'field_data'``];`<br>```$retrieval_status``=``$response``[``'status'``];`<br>```$timestamp``=``$response``[``'timestamp'``];`<br>```foreach``(``$field_data``as``$id``=>``$data``){`<br>```echo``'Field: '``.``$id``.``' Count: '``.``$data``;`<br>```}`<br>`}` |

**JavaScript**

**WARNING: This sample JavaScript is not secure and it’s not intended to be used on production sites. Never send your private key to the browser. Consider using WordPress cookie authentication instead.**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38 | `<script src=``"https://code.jquery.com/jquery-1.10.2.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"``></script>`<br>`<script src=``"https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64-min.js"``></script>`<br>`<script type=``"text/javascript"``>`<br>`function``CalculateSig(stringToSign, privateKey){`<br>```//calculate the signature needed for authentication`<br>```var``hash = CryptoJS.HmacSHA1(stringToSign, privateKey);`<br>```var``base64 = hash.toString(CryptoJS.enc.Base64);`<br>```return``encodeURIComponent(base64);`<br>`}`<br>`//set variables`<br>`var``d =``new``Date;`<br>`var``expiration = 3600;``// 1 hour,`<br>`var``unixtime = parseInt(d.getTime() / 1000);`<br>`var``future_unixtime = unixtime + expiration;`<br>`var``publicKey =``"your_public_key"``;`<br>`var``privateKey =``"your_private_key"``;`<br>`var``method =``"GET"``;`<br>`var``route =``"forms/1/results"``;`<br>`stringToSign = publicKey +``":"``+ method +``":"``+ route +``":"``+ future_unixtime;`<br>`sig = CalculateSig(stringToSign, privateKey);`<br>`var``url =``'http://localhost/wp.dev/gravityformsapi/'``+ route +``'?api_key='``+ publicKey +``'&signature='``+ sig +``'&expires='``+ future_unixtime;`<br>`$.get(url,``function``(data, textStatus)`<br>`{`<br>```//get the data from the api`<br>```if``( data.status != 200 || (``typeof``( data ) !=``'object'``) ) {`<br>```//http request failed`<br>```document.write(``'There was an error attempting to access the API - '``+ data.status +``': '``+ data.response );`<br>```return``;`<br>```}`<br>```response    = data.response;`<br>```entry_count = response.entry_count`<br>```field_data = response.field_data;`<br>`});`<br>`</script>` |

Sample JSON output from the code above:

|     |     |
| --- | --- |
| 1 | `{``"status"``:200,``"response"``:{``"entry_count"``:``"3"``,``"field_data"``:{``"1"``:4,``"2"``:2},``"status"``:``"complete"``,``"timestamp"``:1448490482}}` |

## Tools

### Sample REST API v1 Client

A sample add-on using the REST API v1 is available on GitHub:

[https://github.com/rocketgenius/webapiclient](https://github.com/rocketgenius/webapiclient)

### PHP Wrapper

The PHP wrapper itself can be found inside the includes folder of the sample REST API v1 client add-on:

[https://github.com/rocketgenius/webapiclient/blob/master/includes/class-gf-web-api-wrapper.php](https://github.com/rocketgenius/webapiclient/blob/master/includes/class-gf-web-api-wrapper.php)

Please take a look at both the inline documentation and the sample REST API v1 client add-on for examples of how to use it.

### URL generator & tester

On the REST API v1 settings tab you’ll find a link to the developer tools. The tools include a URL generator and a URL tester. These will help you generate the correct signatures so you can check you’re generating the correct URLs.

### Other resources

[Tutorial on the Gravity Forms API](http://www.stevenhenty.com/gravity-forms-api)

[Go package for Gravity Forms REST API v1](https://github.com/ITSecMedia/gfapigonnect) ( **3rd Party Resource**)

_Note that this is not maintained by or affiliated with Gravity Forms or Rocketgenius. Not officially supported. Use at your own risk._

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 22, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/web-api/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)