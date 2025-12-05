---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities"
title: " How to Format CSV Files for Contact and Opportunity Imports in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
4. [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Contacts](https://help.gohighlevel.com/support/solutions/155000000123)
   - [Smart Lists](https://help.gohighlevel.com/support/solutions/folders/48000666017)
6. CSV File Format for Importing Contacts and Opportunities

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# CSV File Format for Importing Contacts and Opportunities

Modified on: Thu, 24 Apr, 2025 at 7:01 AM

This article will help you format your CSV file correctly before importing it into HighLevel. By following this guide, you’ll avoid common import errors, save time, and ensure your data flows seamlessly into your CRM.

* * *

**TABLE OF CONTENTS**

- [Key Benefits of Preparing Your CSV File](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Key-Benefits-of-Preparing-Your-CSV-File)
- [What is a CSV File Format?](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#What-is-a-CSV-File-Format?)
- [Structuring Your File](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Structuring-Your-File)
  - [1\. Sample CSV Format](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#1.-Sample-CSV-Format)
  - [2\. Mandatory Fields](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#2.-Mandatory-Fields)
  - [3\. Field Formatting](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#3.-Field-Formatting)
  - [4\. Supported File Type and File Size](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#4.-Supported-File-Type-and-File-Size)
  - [5\. Required and Optional Fields for Import](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#5.-Required-and-Optional-Fields-for-Import)
  - [6\. Formatting Guidelines by Field Type](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#6.-Formatting-Guidelines-by-Field-Type)
- [Supported Countries List in CSV Imports](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Supported-Countries-List-in-CSV-Imports)
- [Supported Timezones](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Supported-Timezones)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities#Related-Articles)

* * *

## **Key Benefits of Preparing Your CSV File**

Taking the time to format your CSV file correctly before importing ensures your contact data is clean, complete, and mapped accurately.

- Reduces the chance of import errors or upload failures

- Helps HighLevel automatically map fields during import

- Enables contact deduplication and accurate updates

- Supports custom fields and advanced segmentation

- Saves time by avoiding post-import cleanup

- Increases success with bulk contact/opportunity uploads

* * *

## **What is a CSV File Format?**

CSV stands for 'Comma-Separated Values'. It's a simple file format used to store tabular data like spreadsheets or databases. Each line in a CSV file represents a single record, and fields within the record are separated by commas. It’s one of the most widely used formats for importing and exporting data between different systems.

- CSV files typically have a `.csv` extension.

- You can create or edit them in tools like Excel, Google Sheets, or Notepad.

- Ensure only one sheet is present in the file to prevent import issues.


**Example**:

| First Name | Last Name | Email | Phone |
| --- | --- | --- | --- |
| Jane | Doe | jane@example.com | +11234567890 |
| John | Smith | john@example.com | +10987654321 |

* * *

## **Structuring Your File**

To ensure accurate data mapping, structure your CSV file with column headers corresponding to standard or custom fields in HighLevel.

### **1\. Sample CSV Format**

| First Name | Last Name | Email | Phone | Company | Tags | Status | Created Date | Additional Phone |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| John | Doe | john@example.com | +11234567890 | ABC Corp | VIP, Lead | New | 01/01/2024 | +17877123462 |
| Jane | Smith | jane@example.com | +15556667777 | XYZ Ltd | Customer | Active | 02/02/2024 | +17877123464 |

- Each row represents a single contact or opportunity.

- Each column represents a distinct property.

- The header row is required to map fields correctly.


### **2\. Mandatory Fields**

At least one of the following is required to create or update a contact:

- First Name

- Email Address

- Phone Number


```
Note: For updating contacts, a Unique Identifier (Contact ID, Email, or Phone) is required based on your deduplication settings. For opportunities, include the Opportunity ID if updating. Without it, a new one will be created.
```

### **3\. Field Formatting**

Follow these specific formatting rules to avoid import failures:

|     |     |
| --- | --- |
| Field Type | Accepted Formats / Notes |
| **Date Picker (Date Fields)** | MM/DD/YYYY, YYYY/MM/DD, MM-DD-YYYY, YYYY-MM-DD |
| **Multi-Select / Checkbox** | Commas: `VIP, Lead`, Semicolons: `Gold; Silver`, Periods: `Yes. No`❌ Slashes = Invalid |
| **Single Option (Dropdown)** | One value only. Example: `Blue` |
| **Contact Owner** | `FirstName LastName` — e.g., `Logan Paul` |
| **Tags** | Commas, semicolons, or periods. e.g., `Blue, Yellow`, `Blue; Yellow` |
| **Phone Number** | E.164: `+11234567890` (recommended); also `123-456-7890`, `(123) 456-7890` (US only) |
| **Invalid Phone Formats** | `1234567`, `abc1234567` |
| **Numerical Fields** | `1.23`, `1234`, `.123` |
| **Monetary Fields** | `1234`, `1,234,234.33` |
| **Contact Followers** | `FirstName LastName, FirstName2 LastName2` — e.g., `Adam Smith, David Lee` |
| **Additional Emails** | `abc@email.com, abc1@email.com` |
| **Additional Phone Numbers** | `+1 7877123460, +1 7877123461` |

### **4\. Supported File Type and File Size**

Your file must meet certain basic requirements for a successful upload.

| Requirement | Details |
| --- | --- |
| File Format | `.csv` only |
| Sheets Allowed | One sheet per file |
| Max File Size | 30 MB |

### **5\. Required and Optional Fields for Import**

Including the right fields helps HighLevel identify and process your records accurately.

|     |     |     |
| --- | --- | --- |
| Import Action | Required/Optional Fields | Notes |
| **New Contact** | Name **or** Email, **or** Phone | At least one is required |
| **Update Existing Contact** | Contact ID **or** Name/Email/Phone | Depends on duplicate settings |
| **Header Row** | Required | Headers must match existing or custom fields in HighLevel |

### **6\. Formatting Guidelines by Field Type**

To prevent import errors, follow these formatting rules for each data type in your CSV.

|     |     |     |     |
| --- | --- | --- | --- |
| Field Type | Format | Example | Notes |
| **Phone Number** | E.164 or standard US formats | `+1 1234567890123-456-7890` | Clean and consistent formatting |
| **Email Address** | Standard format | `name@example.com` | Must include `@` and domain |
| **Date** | Multiple accepted formats | `04/16/2025`, `2025-04-16` | Choose one format and stick to it |
| **Multi-Select Fields** | Separate with `,`, `;`, or `.` | `Blue, Yellow, Green` | Must match field options in CRM |
| **Additional Emails** | Comma-separated | `email1@example.com, email2@example.com` | Add in a separate column |
| **Additional Phones** | Comma-separated | `1234567890, 9876543210` | Add in a separate column |

```
Tip: Before importing your CSV, ensure custom fields are already created in your HighLevel account using the same labels and data types.For help with creating custom fields, refer to Overview of Merge Fields & Custom Variables
```

* * *

## **Supported Countries List in CSV Imports**

This section contains a **table of country names** accepted during CSV imports into HighLevel. These are the official country values that should be used in your CSV file when mapping a **country field**, whether standard or custom. Use the exact country names or short codes listed below in your CSV file.

- **Purpose**: HighLevel validates country names during import. If your CSV includes a `Country` field, each row must match one of the **exact names** in this list.

- **Format**: Must match exactly—case-sensitive and spelling-sensitive. For example, `United States` is accepted, but `USA` or `U.S.` will cause an error.

- **Custom Field Use**: If you're using a custom country field, you can still benefit from sticking to this list to maintain compatibility.


|     |     |     |
| --- | --- | --- |
| Country Name (Code) | Country Name (Code) | Country Name (Code) |
| Afghanistan (AF) | Albania (AL) | Algeria (DZ) |
| Andorra (AD) | Angola (AO) | Antigua and Barbuda (AG) |
| Argentina (AR) | Armenia (AM) | Australia (AU) |
| Austria (AT) | Azerbaijan (AZ) | Bahamas (BS) |
| Bahrain (BH) | Bangladesh (BD) | Barbados (BB) |
| Belarus (BY) | Belgium (BE) | Belize (BZ) |
| Benin (BJ) | Bhutan (BT) | Bolivia (BO) |
| Bosnia and Herzegovina (BA) | Botswana (BW) | Brazil (BR) |
| Brunei (BN) | Bulgaria (BG) | Burkina Faso (BF) |
| Burundi (BI) | Cabo Verde (CV) | Cambodia (KH) |
| Cameroon (CM) | Canada (CA) | Central African Republic (CF) |
| Chad (TD) | Chile (CL) | China (CN) |
| Colombia (CO) | Comoros (KM) | Congo (CG) |
| Congo (Kinshasa) (CD) | Costa Rica (CR) | Croatia (HR) |
| Cuba (CU) | Cyprus (CY) | Czech Republic (CZ) |
| Denmark (DK) | Djibouti (DJ) | Dominica (DM) |
| Dominican Republic (DO) | East Timor (TL) | Ecuador (EC) |
| Egypt (EG) | El Salvador (SV) | Equatorial Guinea (GQ) |
| Eritrea (ER) | Estonia (EE) | Eswatini (SZ) |
| Ethiopia (ET) | Fiji (FJ) | Finland (FI) |
| France (FR) | Gabon (GA) | Gambia (GM) |
| Georgia (GE) | Germany (DE) | Ghana (GH) |
| Greece (GR) | Grenada (GD) | Guatemala (GT) |
| Guinea (GN) | Guinea-Bissau (GW) | Guyana (GY) |
| Haiti (HT) | Honduras (HN) | Hungary (HU) |
| Iceland (IS) | India (IN) | Indonesia (ID) |
| Iran (IR) | Iraq (IQ) | Ireland (IE) |
| Israel (IL) | Italy (IT) | Jamaica (JM) |
| Japan (JP) | Jordan (JO) | Kazakhstan (KZ) |
| Kenya (KE) | Kiribati (KI) | Korea, North (KP) |
| Korea, South (KR) | Kosovo (XK) | Kuwait (KW) |
| Kyrgyzstan (KG) | Laos (LA) | Latvia (LV) |
| Lebanon (LB) | Lesotho (LS) | Liberia (LR) |
| Libya (LY) | Liechtenstein (LI) | Lithuania (LT) |
| Luxembourg (LU) | Madagascar (MG) | Malawi (MW) |
| Malaysia (MY) | Maldives (MV) | Mali (ML) |
| Malta (MT) | Marshall Islands (MH) | Mauritania (MR) |
| Mauritius (MU) | Mexico (MX) | Micronesia (FM) |
| Moldova (MD) | Monaco (MC) | Mongolia (MN) |
| Montenegro (ME) | Morocco (MA) | Mozambique (MZ) |
| Myanmar (MM) | Namibia (NA) | Nauru (NR) |
| Nepal (NP) | Netherlands (NL) | New Zealand (NZ) |
| Nicaragua (NI) | Niger (NE) | Nigeria (NG) |
| North Macedonia (MK) | Norway (NO) | Oman (OM) |
| Pakistan (PK) | Palau (PW) | Panama (PA) |
| Papua New Guinea (PG) | Paraguay (PY) | Peru (PE) |
| Philippines (PH) | Poland (PL) | Portugal (PT) |
| Qatar (QA) | Romania (RO) | Russia (RU) |
| Rwanda (RW) | Saint Kitts and Nevis (KN) | Saint Lucia (LC) |
| Saint Vincent and the Grenadines (VC) | Samoa (WS) | San Marino (SM) |
| Sao Tome and Principe (ST) | Saudi Arabia (SA) | Senegal (SN) |
| Serbia (RS) | Seychelles (SC) | Sierra Leone (SL) |
| Singapore (SG) | Slovakia (SK) | Slovenia (SI) |
| Solomon Islands (SB) | Somalia (SO) | South Africa (ZA) |
| South Sudan (SS) | Spain (ES) | Sri Lanka (LK) |
| Sudan (SD) | Suriname (SR) | Sweden (SE) |
| Switzerland (CH) | Syria (SY) | Taiwan (TW) |
| Tajikistan (TJ) | Tanzania (TZ) | Thailand (TH) |
| Togo (TG) | Tonga (TO) | Trinidad and Tobago (TT) |
| Tunisia (TN) | Turkey (TR) | Turkmenistan (TM) |
| Tuvalu (TV) | Uganda (UG) | Ukraine (UA) |
| United Arab Emirates (AE) | United Kingdom (GB) | United States (US) |
| Uruguay (UY) | Uzbekistan (UZ) | Vanuatu (VU) |
| Vatican City (VA) | Venezuela (VE) | Vietnam (VN) |
| Yemen (YE) | Zambia (ZM) | Zimbabwe (ZW) |

* * *

## **Supported Timezones**

Use one of the following timezone formats in your CSV. These are case-sensitive and must match exactly.

|     |     |     |
| --- | --- | --- |
| **Timezone** | **Timezone** | **Timezone** |
| Etc/GMT+12 | Pacific/Midway | Pacific/Honolulu |
| America/Juneau | US/Alaska | America/Dawson |
| America/Los\_Angeles | America/Phoenix | America/Tijuana |
| US/Arizona | America/Belize | America/Boise |
| America/Chihuahua | America/Denver | America/Edmonton |
| America/Guatemala | America/Managua | America/Regina |
| Canada/Saskatchewan | US/Mountain | America/Bahia\_Banderas |
| America/Bogota | America/Cancun | America/Chicago |
| America/Mexico City | US/Central | America/Caracas |
| America/Detroit | America/Indiana/Indianapolis | America/Louisville |
| America/Manaus | America/New\_York | America/Santiago |
| America/Santo\_Domingo | America/Toronto | US/East-Indiana |
| US/Eastern | America/Argentina/Buenos\_Aires | America/Glace\_Bay |
| America/Montevideo | America/Sao\_Paulo | Canada/Atlantic |
| America/St\_Johns | Canada/Newfoundland | America/Godthab |
| America/Noronha | Etc/GMT+2 | Atlantic/Cape\_Verde |
| Atlantic/Azores | UTC | Africa/Algiers |
| Africa/Casablanca | Africa/Lagos | Atlantic/Canary |
| Europe/London | Africa/Cairo | Africa/Harare |
| Europe/Amsterdam | Europe/Belgrade | Europe/Brussels |
| Europe/Madrid | Europe/Oslo | Europe/Sarajevo |
| Africa/Nairobi | Asia/Amman | Asia/Baghdad |
| Asia/Jerusalem | Asia/Kuwait | Asia/Qatar |
| Europe/Athens | Europe/Bucharest | Europe/Helsinki |
| Europe/Moscow | Asia/Baku | Asia/Dubai |
| Asia/Kabul | Asia/Tehran | Asia/Karachi |
| Asia/Yekaterinburg | Asia/Colombo | Asia/Kolkata |
| Asia/Calcutta | Asia/Kathmandu | Asia/Almaty |
| Asia/Dhaka | Asia/Rangoon | Asia/Bangkok |
| Asia/Krasnoyarsk | Asia/Irkutsk | Asia/Kuala\_Lumpur |
| Asia/Shanghai | Asia/Taipei | Australia/Perth |
| Asia/Seoul | Asia/Tokyo | Asia/Yakutsk |
| Australia/Adelaide | Australia/Darwin | Asia/Vladivostok |
| Australia/Brisbane | Australia/Canberra | Australia/Hobart |
| Australia/Sydney | Pacific/Guam | Asia/Magadan |
| Pacific/Auckland | Pacific/Fiji | Pacific/Tongatapu |

* * *

## **Frequently Asked Questions**

**Q: Can I import contacts with more than one phone number or email?**

Yes! Use separate columns like `Additional phone numbers` and `Additional email addresses`, and separate entries with commas.

**Q: What happens if I include a field in the CSV that doesn’t exist in HighLevel?**

That field will be ignored unless you map it to an existing standard or custom field during the import process.

**Q: Will HighLevel detect duplicates automatically?**

Yes, based on your **Duplicate Detection Settings**, it can match by Contact ID, phone, or email and either merge or skip duplicates.

**Q: Can I update contacts with a CSV import?**

Absolutely. Just make sure you're including a field used in your duplicate matching (like Contact ID, email, or phone).

**Q: Do I need to clean blank rows and columns?**

Yes. It’s best to remove all unnecessary data to avoid unexpected import behavior.

* * *

## **Related Articles**

- [Importing Opportunities using a CSV file](https://gohighlevelassist.freshdesk.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)
- [Troubleshooting Bulk Imports via CSV](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-bulk-imports-via-csv)

- [Importing Contacts using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts)

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- ["Add Contact" Form Upgrade and Customizations](https://help.gohighlevel.com/support/solutions/articles/155000006513--add-contact-form-upgrade-and-customizations)
- [Adding Files To Contacts using a Custom Field](https://help.gohighlevel.com/support/solutions/articles/48001171922-adding-files-to-contacts-using-a-custom-field)
- [Adding Multiple Phone Numbers for a Contact](https://help.gohighlevel.com/support/solutions/articles/155000000448-adding-multiple-phone-numbers-for-a-contact)
- [AND/OR Filters](https://help.gohighlevel.com/support/solutions/articles/155000001247-and-or-filters)
- [Automatically Merge Facebook Messenger Contacts With Lead Ad Contacts](https://help.gohighlevel.com/support/solutions/articles/48001146104-automatically-merge-facebook-messenger-contacts-with-lead-ad-contacts)
- [Company Object Feature: A Manual Way to Organize Contacts](https://help.gohighlevel.com/support/solutions/articles/48001223777-company-object-feature-a-manual-way-to-organize-contacts)

## Related Articles

- [Importing Opportunities using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000002517-importing-opportunities-using-a-csv-file)
- [Importing Contacts using a CSV file](https://help.gohighlevel.com/support/solutions/articles/155000004432-importing-contacts-using-a-csv-file)
- [Importing Contacts and Opportunities via CSV](https://help.gohighlevel.com/support/solutions/articles/155000003905-importing-contacts-and-opportunities-via-csv)
- [ActiveCampaign to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003296-activecampaign-to-highlevel-migration-guide-)
- [Troubleshooting Bulk Imports Via CSV](https://help.gohighlevel.com/support/solutions/articles/48001223155-troubleshooting-bulk-imports-via-csv)
- [Zoho to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003316-zoho-to-highlevel-migration-guide-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005143-csv-file-format-for-importing-contacts-and-opportunities/hit)