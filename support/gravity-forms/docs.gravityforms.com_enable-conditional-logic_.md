---
url: "https://docs.gravityforms.com/enable-conditional-logic/"
title: "Enabling Conditional Logic For A Field - Gravity Forms Documentation"
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

# Enabling Conditional Logic For A Field

- [Introduction](https://docs.gravityforms.com/enable-conditional-logic/#h-introduction)
- [Examples](https://docs.gravityforms.com/enable-conditional-logic/#h-examples)
- [Basic Conditional Logic](https://docs.gravityforms.com/enable-conditional-logic/#h-basic-conditional-logic)
- [Conditional Logic using Sections](https://docs.gravityforms.com/enable-conditional-logic/#h-conditional-logic-using-sections)
- [Conditional Logic using Page Breaks](https://docs.gravityforms.com/enable-conditional-logic/#h-conditional-logic-using-page-breaks)
- [Conditional logic based on an Empty field](https://docs.gravityforms.com/enable-conditional-logic/#h-conditional-logic-based-on-an-empty-field)
- [Limitations](https://docs.gravityforms.com/enable-conditional-logic/#limitations)
- [Performance](https://docs.gravityforms.com/enable-conditional-logic/#h-performance)

## Introduction

The _Enable Conditional Logic_ option in the field settings allows you to create rules to dynamically display or hide the field **based on values from another field**. In order to use conditional logic, you will need to add a field to your form which supports conditional logic.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic1-1024x464.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic1.png)

After enabling conditional logic for a field, you will have the option to show or hide the field depending on whether all/any of the conditions you specify are met. You can specify additional conditions by clicking the plus icon to right of the conditions. Clicking the minus sign will remove the corresponding condition.

## Examples

### Basic Conditional Logic

[![Conditional Logic Account Id](https://docs.gravityforms.com/wp-content/uploads/2017/09/basic-conditional-logic-gif.gif)](https://docs.gravityforms.com/wp-content/uploads/2017/09/basic-conditional-logic-gif.gif)

In this example, we will use conditional logic to show different products based on a parent category. A dropdown field will determine what products may be purchased based on the current selection.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto1.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto1.png)

1. First, set up your fields. As we will be using a dropdown to handle the display of various products, start off by creating a single **dropdown**, a few **product** fields, and a **total** field to display the order total. In this example, we have created 3 different options within the dropdown for Jeep, Ford, and Honda, as well as product fields such as Wrangler, Cherokee, and Mustang.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto2-1024x423.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto2.png)

2. As we want Jeep models to show up when Jeep is selected, Ford models when Ford is selected, and Honda models when Honda is selected, we will need to enable conditional logic on each of these products. Open the options on one of your products by clicking on the field, and click on the **Conditional Logic** section.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto3.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto3.png)

3. Within the fly-out, you should see a toggle labeled **Enable Conditional Logic**. When toggled on, the options to conditionally display or hide this field will be shown.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto4-1024x418.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-auto4.png)

4. On each of your products, simply enable conditional logic, and use the dropdowns to only show when your dropdown equals the desired selection. For example, for our _Wrangler_ product, we have set it to only show if the Option field equals Jeep.

That’s all there is to creating basic conditional logic within products. You should now be able to conditionally show or hide fields based on other fields in your form.

### Conditional Logic using Sections

In this example, we will use conditional logic to show different sections of a form based on the user’s input. A radio button field will determine which form section displays based on the current selection.

[![Showing Section Breaks with Conditional Logic](https://docs.gravityforms.com/wp-content/uploads/2014/06/Showing-Section-Breaks-with-Conditional-Logic.gif)](https://docs.gravityforms.com/wp-content/uploads/2014/06/Showing-Section-Breaks-with-Conditional-Logic.gif)

1. As we will be using a radio button field to handle the display of the sections, start off by creating a single **radio button** field. In this example, we have created 3 different options within the radio button for Cat, Dog, and Fish.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets1-1.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets1-1.png)

2. Next you will need to create the different sections of the form using the Section field. Create the 3 sections of Cat, Dog, and Fish with the necessary fields under each section break. In this case we used Single Line Text, Number, and Paragraph fields.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets2a-1024x380.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets2a-1024x380.png)

3. As we want the Cat section to show up when Cat is selected, Dog section when Dog is selected, and Fish section when Fish is selected, we will need to enable conditional logic on each of these sections. Open the options on one of your sections by clicking on the field, and click on the **Conditional Logic** section.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets3-1024x435.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets3.png)

4. Within the fly-out, you should see a toggle labeled **Enable Conditional Logic**. If you click the toggle on, the options to conditionally display or hide this field will be shown.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets4-1024x432.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets4.png)

5. On each of your sections, simply enable conditional logic, and use the dropdowns to only show when your dropdown equals the desired selection. For example, for our _Cat_ section, we have set it to only show if the radio button field equals Cat.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets5-1024x430.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/conditional-logic-pets5.png)

### Conditional Logic using Page Breaks

In this example, we will use Conditional Logic to show different pages and hide the Next button of a page based on the user’s input. A Radio Buttons field will determine which form page will be displayed based on the current selection.

We want the user to be able to complete the form if they have a license (Active or Expired). If the license is Active, we will show them a page to complete their Active license details. If the license is Expired, we will show a different page. When the user doesn’t have a license, we will hide the Next page button since they can’t continue completing the form.

1. We will add a Radio Buttons field with the License statuses:

![Image showing a Radio Buttons field choices flyout.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-52-1024x626.png)

2. On each page break field, we will enable conditional logic, and use the dropdowns to only show each Page when the dropdown equals the desired selection, otherwise, the Page and its content wont’ be shown. In this example: _Show the Page if the “Do You Have A License” field is “Yes, it is active”._

![Image showing Page conditional logic settings.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-53.png)![](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-56.png)

3. Since we want to hide the Next button when the user doesn’t have a license, we will also enable Conditional Logic for the Next button. Show the Next button if the “Do You Have A License” field is not “No, I don’t have a license.”

![Image showing Next button conditional logic.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-54.png)![](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-57.png)

### Conditional logic based on an Empty field

In some cases you may want your logic to check if a certain field is empty or not.

Configuring this type of logic is pretty easy, you would just select the field you want to check in your logic rule, and use the “is” or “is not” operator, leaving the input for the value empty. The example below would show a field only if an Email field in the form is not empty.

![](https://docs.gravityforms.com/wp-content/uploads/2022/10/show-field-when-email-is-not-empty.png)

## Limitations

- As mentioned above in the introduction, conditional logic rules must be based on values from another field, **configuring conditional logic to display or hide a field based on its own values is not supported**.
- Fields hidden by conditional logic are **ignored on form submission**, this is one of the main reasons to use conditional logic and **can’t be changed**. This means fields hidden will be not available for any process done after form submission (e.g. Calculations) and not saved in the entry.

- Certain special characters, like pipe (\|) greater than and less than ( < > ) or HTML tags in field values, can prevent conditional logic rules from working as expected. To avoid this problem when using a field with pre-defined choices, like a Drop Down or Radio Buttons field, we recommend enabling the “show values” setting in the field and ensure you use **only plain text in the Value column for the choices**, without any special character or HTML tags.
- Nested conditional logic. Please check the following documentation page for [more details](https://docs.gravityforms.com/conditional-logic-limitations/).

- When working with decimals, you need to **use a preceding 0 if required**. Example: **0.2** is valid, **.2** is not valid.
- As Gravity Forms **rounding is limited to four decimal places**; this same limitation applies to values entered in conditional logic rules.

Example: 0.0002 is valid, 0.00002 is not valid.

## Performance

Conditional logic evaluation is done at client side (the browser) using JavaScript, and unfortunately browsers are not super fast doing these tasks. The browser has to process all fields to evaluate conditional logic and know which fields to display/hide, along with any other JS scripts that you may have in the page. Also some conditional logic use cases can add extra work to the browser, e.g. If you’re using conditional logic to show/hide a field and also using this same field as value in another field conditional logic that would make the browser to be constantly checking both fields rules, creating a loop and increasing the CPU resource usage of the browser.

This means **if you have a huge form with lots of fields you may experience slowness in the form displaying or usage**, this is something expected due to the explained above. The only workaround for improving the conditional logic performance in this case would be to reduce the number of fields or split your form in many smaller forms.

In the following tutorial you can see how to pass data from one form to another if you need it: [Using Confirmation Query Strings to Populate a Form Based on Another Submission](https://docs.gravityforms.com/confirmation-query-string-populate-form/). There’s also a third-party add-on that could help to simplify the process: [Easy Passthrough](https://www.gravityforms.com/community/easy-passthrough/).

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 28, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/enable-conditional-logic/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)