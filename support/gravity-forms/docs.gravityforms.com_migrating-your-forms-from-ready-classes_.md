---
url: "https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/"
title: "Migrating Your Forms from Ready Classes - Gravity Forms Documentation"
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
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)    - [Basics](https://docs.gravityforms.com/category/user-guides/design-and-layout/basics/)
    - [CSS Selectors](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/)
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Migrating Your Forms from Ready Classes

- [Introduction](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-introduction)
- [CSS Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-css-ready-classes)
- [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets)

## Introduction

If your forms use [CSS Ready Classes](https://docs.gravityforms.com/list-of-css-ready-classes/), now is the time to begin transitioning to the Layout Editor or custom CSS solutions to ensure compatibility with upcoming versions of Gravity Forms.

**Image showing Ready Classes deprecation notice in the Form Editor**

[![Image showing Ready Classes deprecation notice in the Form Editor](https://docs.gravityforms.com/wp-content/uploads/2025/07/image-13-1024x258.png)](https://docs.gravityforms.com/wp-content/uploads/2025/07/image-13.png)

**Image showing Ready Classes deprecation notice in the Form Settings.**

[![Image showing Ready Classes deprecation notice in the Form Editor](https://docs.gravityforms.com/wp-content/uploads/2025/07/image-14-1024x246.png)](https://docs.gravityforms.com/wp-content/uploads/2025/07/image-14.png)

In this guide, you will find:

- A complete list of deprecated Ready Classes.
- Recommended alternatives using Layout Editor settings.
- CSS examples for replicating standard Ready Class functionality.

**Note**: With the release of Gravity Forms 3.1, [support for legacy markup](https://docs.gravityforms.com/about-legacy-markup/) will be fully removed. This change marks the end of the original markup structure introduced in 2009 and finalizes the platform’s transition to modern form rendering. Although modern markup has been available since version 2.5, many forms still rely on legacy markup features, including Ready Classes, for layout control. Refer to the [CSS Ready Classes Migration](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/) guide for more information.

## CSS Ready Classes

| **Class** | Status | Alternative |
| --- | --- | --- |
| gf\_left\_half | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_right\_half | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_left\_third | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_middle\_third | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_right\_third | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_first\_quarter | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_second\_quarter | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_third\_quarter | **Deprecated** since Gravity Forms 2.5 | Use [Column Features](https://docs.gravityforms.com/working-with-columns/). |
| gf\_fourth\_quarter | **Deprecated** since Gravity Forms 2.5 | **Use [Column Features](https://docs.gravityforms.com/working-with-columns/).** |
| gf\_inline | **Deprecated** since Gravity Forms 2.5 | **Use [Column Features](https://docs.gravityforms.com/working-with-columns/).** |
| gf\_list\_2col | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_3col | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_4col | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_5col | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_2col\_vertical | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_3col\_vertical | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_4col\_vertical | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_5col\_vertical | **Deprecation Planned** in Gravity Forms 3.1 | Use [Field Settings in the Form Editor.](https://docs.gravityforms.com/?p=45306) |
| gf\_list\_inline | **Deprecation Planned** in Gravity Forms 3.1 | Migrate to the [Multiple Choice](https://docs.gravityforms.com/multiple-choice-field/) field and use Alignment setting.<br>Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_list\_height\_25 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_list\_height\_50 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_list\_height\_75 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_list\_height\_100 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_list\_height\_125 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_list\_height\_150 | **Deprecation Planned** in Gravity Forms 3.1 | Modern CSS ensures they are displayed at the same height. |
| gf\_alert\_green | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_alert\_red | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_alert\_yellow | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_alert\_gray | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_alert\_blue | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_confirmation\_simple\_yellow | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_confirmation\_simple\_gray | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_confirmation\_yellow\_gradient | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_confirmation\_green\_gradient | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_simple\_horizontal | **Deprecated** since Gravity Forms 2.6 | You can use [Drag and Drop columns](https://docs.gravityforms.com/working-with-columns/) and the [Submit Button Location](https://docs.gravityforms.com/submit-button/#h-appearance-settings) setting. |
| gf\_scroll\_text | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_hide\_ampm | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_invisible | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |
| gf\_hide\_charleft | **Deprecated** since Gravity Forms 2.9.15 | Use a custom CSS. See [Code Snippets](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/#h-code-snippets) |

## Code Snippets

You can add this CSS to the Customizer (Appearance → Customize) or your child theme stylesheet.

See also: [Where to Put your Custom CSS](https://docs.gravityforms.com/where-to-put-your-custom-css/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>94<br>95<br>96<br>97<br>98<br>99<br>100<br>101<br>102<br>103<br>104<br>105<br>106<br>107<br>108<br>109<br>110<br>111<br>112<br>113<br>114<br>115<br>116<br>117<br>118<br>119<br>120<br>121<br>122<br>123<br>124<br>125<br>126<br>127<br>128<br>129<br>130<br>131<br>132<br>133<br>134<br>135<br>136<br>137<br>138<br>139<br>140<br>141<br>142<br>143<br>144<br>145<br>146<br>147<br>148<br>149<br>150<br>151<br>152<br>153<br>154<br>155<br>156<br>157<br>158<br>159<br>160<br>161<br>162<br>163<br>164<br>165<br>166<br>167<br>168<br>169<br>170<br>171<br>172<br>173<br>174<br>175<br>176<br>177<br>178<br>179<br>180<br>181<br>182<br>183<br>184<br>185<br>186<br>187<br>188<br>189<br>190<br>191<br>192<br>193<br>194<br>195<br>196<br>197<br>198<br>199<br>200<br>201<br>202<br>203<br>204<br>205<br>206<br>207<br>208<br>209<br>210<br>211<br>212<br>213<br>214<br>215<br>216<br>217<br>218<br>219<br>220<br>221<br>222 | `/*`<br>`gf_list_inline`<br>`*/`<br>`.gform-theme--framework .gfield--type-choice.gf_list_inline .gfield_checkbox,`<br>`.gform-theme--framework .gfield--type-choice.gf_list_inline .gfield_radio {`<br>```display``:``flex``;`<br>```flex-direction``:``row``;`<br>```flex-wrap``:``wrap``;`<br>```gap:``12px``16px``;`<br>`}`<br>`/*`<br>`gf_alert_green`<br>`*/`<br>`.gform_wrapper .gfield.gfield_html .gf_alert_green {`<br>```border-radius``:``3px``;`<br>```margin-block:``1.25``rem``!important``;`<br>```margin-inline:``0``!important``;`<br>```padding``:``1.25``rem``!important``;`<br>```background-color``:``#cbeca0``;`<br>```border``:``1px``solid``#97b48a``;`<br>```color``:``#030``;`<br>```text-shadow``:``#dfb``1px``1px``;`<br>`}`<br>`/*`<br>`gf_alert_red`<br>`*/`<br>`.gform_wrapper .gfield.gfield_html .gf_alert_red {`<br>```border-radius``:``3px``;`<br>```margin-block:``1.25``rem``!important``;`<br>```margin-inline:``0``!important``;`<br>```padding``:``1.25``rem``!important``;`<br>```background-color``:``#faf2f5``;`<br>```border``:``1px``solid``#cfadb3``;`<br>```color``:``#832525``;`<br>```text-shadow``:``#fff``1px``1px``;`<br>`}`<br>`/*`<br>`gf_alert_yellow`<br>`*/`<br>`.gform_wrapper .gfield.gfield_html .gf_alert_yellow {`<br>```border-radius``:``3px``;`<br>```margin-block:``1.25``rem``!important``;`<br>```margin-inline:``0``!important``;`<br>```padding``:``1.25``rem``!important``;`<br>```background-color``:``#fffbcc``;`<br>```border``:``1px``solid``#e6db55``;`<br>```color``:``#222``;`<br>```text-shadow``:``#fcfaea``1px``1px``;`<br>`}`<br>`/*`<br>`gf_alert_gray`<br>`*/`<br>`.gform_wrapper .gfield.gfield_html .gf_alert_gray {`<br>```border-radius``:``3px``;`<br>```margin-block:``1.25``rem``!important``;`<br>```margin-inline:``0``!important``;`<br>```padding``:``1.25``rem``!important``;`<br>```background-color``:``#eee``;`<br>```border``:``1px``solid``#ccc``;`<br>```color``:``#424242``;`<br>```text-shadow``:``#fff``1px``1px``;`<br>`}`<br>`/*`<br>`gf_confirmation_simple_yellow`<br>`*/`<br>`.gform_confirmation_wrapper .gf_confirmation_simple_yellow {`<br>```background-color``:``#fffbcc``;`<br>```border-block:``1px``solid``#e6db55``;`<br>```color``:``#424242``;`<br>```font-size``:``25px``;`<br>```margin-block:``30px``;`<br>```margin-inline:``0``;`<br>```max-inline-``size``:``99%``;`<br>```padding``:``32px``;`<br>`}`<br>`/*`<br>`gf_confirmation_simple_gray`<br>`*/`<br>`.gform_confirmation_wrapper .gf_confirmation_simple_gray {`<br>```background-color``:``#eaeaea``;`<br>```border-block:``1px``solid``#ccc``;`<br>```color``:``#424242``;`<br>```font-size``:``25px``;`<br>```margin-block:``30px``;`<br>```margin-inline:``0``;`<br>```max-inline-``size``:``99%``;`<br>```padding``:``32px``;`<br>`}`<br>`/*`<br>`gf_confirmation_yellow_gradient`<br>`*/`<br>`.gform_confirmation_wrapper .gf_confirmation_yellow_gradient {`<br>```background-color``:``#fffbd2``;`<br>```border``:``1px``solid``#e6db55``;`<br>```box-shadow``:``0``0``5px``rgba``(``221``,``215``,``131``,``0.75``);`<br>```margin-block:``30px``;`<br>```margin-inline:``0``;`<br>```position``:``relative``;`<br>`}`<br>`.gform_confirmation_wrapper .gf_confirmation_yellow_gradient .gform_confirmation_message {`<br>```background``:``#fffce5``;`<br>```background``: -moz-``linear-gradient``(``top``,``#fffce5``0%``,``#fff9bf``100%``);`<br>```background``: -webkit-gradient(``linear``,``left``top``,``left``bottom``, color-stop(``0%``,``#fffce5``), color-stop(``100%``,``#fff9bf``));`<br>```background``: -webkit-``linear-gradient``(``top``,``#fffce5``0%``,``#fff9bf``100%``);`<br>```background``: -o-``linear-gradient``(``top``,``#fffce5``0%``,``#fff9bf``100%``);`<br>```background``: -ms-``linear-gradient``(``top``,``#fffce5``0%``,``#fff9bf``100%``);`<br>```background``:``linear-gradient``(to``bottom``,``#fffce5``0%``,``#fff9bf``100%``);`<br>```background-color``:``#fffbcc``;`<br>```border-block-end:``1px``solid``#e6db55``;`<br>```border-block-start:``2px``solid``#fff``;`<br>```color``:``#424242``;`<br>```font-size``:``28px``;`<br>```margin``:``0``;`<br>```max-inline-``size``:``99%``;`<br>```padding``:``40px``;`<br>`}`<br>`.gform_confirmation_wrapper .gf_confirmation_yellow_gradient::before,`<br>`.gform_confirmation_wrapper .gf_confirmation_yellow_gradient::after {`<br>```background``:``rgba``(``0``,``0``,``0``,``0.2``);`<br>```box-shadow``:``0``15px``10px``rgba``(``0``,``0``,``0``,``0.2``);`<br>```content``:``""``;`<br>```inline-``size``:``50%``;`<br>```inset-block:``80%``15px``;`<br>```inset-inline-start:``10px``;`<br>```max-inline-``size``:``40%``;`<br>```position``:``absolute``;`<br>```transform``:``rotate``(``-3``deg);`<br>```z-index``:``-1``;`<br>`}`<br>`/*`<br>`gf_confirmation_green_gradient`<br>`*/`<br>`.gform_confirmation_wrapper .gf_confirmation_green_gradient {`<br>```background-color``:``#f1fcdf``;`<br>```border``:``1px``solid``#a7c37c``;`<br>```box-shadow``:``0``0``5px``rgba``(``86``,``122``,``86``,``0.4``);`<br>```margin-block:``30px``;`<br>```margin-inline:``0``;`<br>```position``:``relative``;`<br>`}`<br>`.gform_confirmation_wrapper .gf_confirmation_green_gradient .gform_confirmation_message {`<br>```background``:``rgb``(``219``,``242``,``183``);`<br>```background``: -moz-``linear-gradient``(``top``,``rgba``(``219``,``242``,``183``,``1``)``0%``,``rgba``(``180``,``208``,``136``,``1``)``100%``);`<br>```background``: -webkit-gradient(``linear``,``left``top``,``left``bottom``, color-stop(``0%``,``rgba``(``219``,``242``,``183``,``1``)), color-stop(``100%``,``rgba``(``180``,``208``,``136``,``1``)));`<br>```background``: -webkit-``linear-gradient``(``top``,``rgba``(``219``,``242``,``183``,``1``)``0%``,``rgba``(``180``,``208``,``136``,``1``)``100%``);`<br>```background``: -o-``linear-gradient``(``top``,``rgba``(``219``,``242``,``183``,``1``)``0%``,``rgba``(``180``,``208``,``136``,``1``)``100%``);`<br>```background``: -ms-``linear-gradient``(``top``,``rgba``(``219``,``242``,``183``,``1``)``0%``,``rgba``(``180``,``208``,``136``,``1``)``100%``);`<br>```background``:``linear-gradient``(to``bottom``,``rgba``(``219``,``242``,``183``,``1``)``0%``,``rgba``(``180``,``208``,``136``,``1``)``100%``);`<br>```background-color``:``#fffbcc``;`<br>```border-block-end:``1px``solid``#a7c37c``;`<br>```border-block-start:``2px``solid``#effade``;`<br>```color``:``#030``;`<br>```font-size``:``28px``;`<br>```margin``:``0``;`<br>```max-inline-``size``:``99%``;`<br>```padding``:``40px``;`<br>```text-shadow``:``#dfb``1px``1px``;`<br>`}`<br>`.gform_confirmation_wrapper .gf_confirmation_green_gradient::before,`<br>`.gform_confirmation_wrapper .gf_confirmation_green_gradient::after {`<br>```background``:``rgba``(``0``,``0``,``0``,``0.2``);`<br>```box-shadow``:``0``15px``10px``rgba``(``0``,``0``,``0``,``0.2``);`<br>```content``:``""``;`<br>```inline-``size``:``50%``;`<br>```inset-block:``80%``15px``;`<br>```inset-inline-start:``10px``;`<br>```max-inline-``size``:``40%``;`<br>```position``:``absolute``;`<br>```transform``:``rotate``(``-3``deg);`<br>```z-index``:``-1``;`<br>`}`<br>`/*`<br>`gf_scroll_text`<br>`*/`<br>`.gform_wrapper .gsection.gf_scroll_text {`<br>```background-color``:``#fff``;`<br>```block-``size``:``15``rem;`<br>```border``:``1px``solid``#ccc``;`<br>```overflow-x``:``hidden``;`<br>```overflow-y``:``scroll``;`<br>```padding``:``2``rem;`<br>`}`<br>`.gform_wrapper .gsection.gf_scroll_text .gsection_title {`<br>```margin-block-start:``0``;`<br>`}`<br>`/*`<br>`gf_hide_ampm`<br>`*/`<br>`.gform_wrapper .gf_hide_ampm .gfield_time_ampm {`<br>```display``:``none``!important``;`<br>`}`<br>`/*`<br>`gf_hide_charleft`<br>`*/`<br>`.gform_wrapper .gf_hide_charleft .charleft {`<br>```display``:``none``!important``;`<br>`}`<br>`/*`<br>`gf_invisible`<br>`*/`<br>`.gform_wrapper .gf_invisible {`<br>```left``:``-9999px``;`<br>```position``:``absolute``;`<br>```visibility``:``hidden``;`<br>`}` |

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 8, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)