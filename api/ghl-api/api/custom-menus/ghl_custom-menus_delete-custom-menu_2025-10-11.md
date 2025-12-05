---
source: https://marketplace.gohighlevel.com/docs/ghl/custom-menus/delete-custom-menu
category: custom-menus
scraped: 2025-10-11T23:18:50.238Z
title: HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/delete-custom-menu/index.html#__docusaurus_skipToContent_fallback)

# Delete Custom Menu Link

```
DELETE /custom-menus/:customMenuId
```

Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/delete-custom-menu/index.html\#request "Direct link to Request")

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/custom-menus/delete-custom-menu/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 403
- 404
- 422

Custom menu successfully deleted

Bad Request. Invalid parameters provided.

Unauthorized

Forbidden. The client does not have necessary permissions to delete this custom menu.

Not Found. The specified custom menu does not exist or has already been deleted.

Unprocessable Entity