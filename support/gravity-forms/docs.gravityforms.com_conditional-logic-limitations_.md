---
url: "https://docs.gravityforms.com/conditional-logic-limitations/"
title: "Nested Conditional Logic Limitations - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)    - [Enabling Conditional Logic for Confirmations](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/ "Enabling Conditional Logic for Confirmations")
    - [Enabling Conditional Logic For A Field](https://docs.gravityforms.com/enable-conditional-logic/ "Enabling Conditional Logic For A Field")
    - [Enabling Conditional Logic for a Feed](https://docs.gravityforms.com/enabling-conditional-logic-for-feeds/ "Enabling Conditional Logic for a Feed")
    - [Enabling Conditional Logic for Notifications](https://docs.gravityforms.com/enable-conditional-logic-for-notifications/ "Enabling Conditional Logic for Notifications")
    - [Nested Conditional Logic Limitations](https://docs.gravityforms.com/conditional-logic-limitations/ "Nested Conditional Logic Limitations")
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Nested Conditional Logic Limitations

- [Disclaimer](https://docs.gravityforms.com/conditional-logic-limitations/#h-disclaimer)
- [When will nested conditional logic work?](https://docs.gravityforms.com/conditional-logic-limitations/#h-when-will-nested-conditional-logic-work)
- [When will nested conditional logic not work?](https://docs.gravityforms.com/conditional-logic-limitations/#h-when-will-nested-conditional-logic-not-work)
- [Workarounds](https://docs.gravityforms.com/conditional-logic-limitations/#h-workarounds)
- [Possible Approach](https://docs.gravityforms.com/conditional-logic-limitations/#h-possible-approach)
- [Drop Down Placeholders](https://docs.gravityforms.com/conditional-logic-limitations/#h-drop-down-placeholders)
- [Finding nested conditional Logic](https://docs.gravityforms.com/conditional-logic-limitations/#h-finding-nested-conditional-logic)

## Disclaimer

Gravity Forms does not officially support nested conditional logic. This means a field should not have conditional logic based on a field that also has conditional logic. Some clever folks have come up with workarounds or specific scenarios they feel work, but these are not officially supported by us.

With that in mind, here is some info that may or may not be of use!

## When will nested conditional logic work?

Nested conditional logic will work if the conditional field does not have a default value, is not dynamically populated, and, if the field is a Drop Down, it uses a placeholder.

## When will nested conditional logic _not_ work?

Nested conditional logic will _not_ work if:

- the conditional field has a default value
- the conditional field is dynamically populated
- if the conditional field is a Drop Down that does not use a placeholder
- the values of earlier fields are changed on multipage or conversational forms

When Gravity Forms hides a field via conditional logic, it resets the field’s initial value. Conditional logic dependent on this field will be evaluated with that reset value rather than an empty value, which is unexpected.

## Workarounds

### Possible Approach

**Note:** _While adding extra conditions to account for nested dependencies can help, this approach suits simpler logic requirements and may not fully resolve issues for users dealing with complex nested conditions._

The best method to support nested conditional logic is to add additional conditions to account for the nested dependency.

For example:

- Field B is conditionally dependent upon Field A
- you want Field C to be conditionally dependent upon Field B

In this case, you would set up Field C’s dependence on B, but also add the conditions that you configured for Field B onto Field C as well. In this way, you make Field C explicitly dependent on both Field B **and** Field A.

![](https://docs.gravityforms.com/wp-content/uploads/2019/02/conditiona-logic-nested1-1024x399.png)Conditional logic as configured for Field B![](https://docs.gravityforms.com/wp-content/uploads/2019/02/conditional-logic-nested2-1024x481.png)Conditional logic as configured for field C, in order to enforce the nested dependency.

### Drop Down Placeholders

Nested conditional logic issues are most commonly exposed by Drop Downs. If the Drop Down does not have a choice with an empty value (such as a placeholder), the Drop Down’s value will be reset to that of the Drop Down’s first option when the field is hidden via conditional logic. Since the field is hidden, many users expect the value of the field to be empty and create nested conditional logic rules based on this assumption.

The simplest solution is to make sure your Drop Down has a placeholder. In this way, the Drop Down value will be reset to an empty value (via the placeholder) when hidden via conditional logic. **Note:** This does not address the issues with setting a default value and dynamic population mentioned above.

## Finding nested conditional Logic

To check if your form has any nested conditional logic, copy and paste this script into your browser’s console on the form editor page.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30 | `var``deps = {};`<br>`for``(``var``i = 0; i < form.fields.length; i++ ) {`<br>```var``field = form.fields[i];`<br>```if``( ! field.conditionalLogic ) {``continue``; }`<br>```if``(``typeof``deps[ field.id ] ===``'undefined'``) { deps[ field.id ] = []; }`<br>```for``(``var``j = 0; j < field.conditionalLogic.rules.length; j++ ) {`<br>```var``rule = field.conditionalLogic.rules[j];`<br>```if``( jQuery.inArray( rule.fieldId, deps[ field.id ] ) === -1 ) {`<br>```deps[ field.id ].push( rule.fieldId );`<br>```}`<br>```}`<br>`}`<br>`for``(``var``fieldId``in``deps ) {`<br>```if``( ! deps.hasOwnProperty( fieldId ) ) {``continue``; }`<br>```for``( i = 0; i < deps[ fieldId ].length; i++ ) {`<br>```var``depFieldId = deps[ fieldId ][i];``// Does current dependent field have any dependencies?`<br>```if``(``typeof``deps[ depFieldId ] !==``'undefined'``) {`<br>```console.log(``'Nested dependency found'``,``'|'``,``'ID:'``, fieldId,``'|'``,``'Label:'``, GetFieldById( fieldId ).label );`<br>```}`<br>```}`<br>`}` |

It will output a message to the browser **Console Logs** for each dependency found.

```
Nested dependency found | ID: 3 | Label: Field C
```

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 3, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/conditional-logic-limitations/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)