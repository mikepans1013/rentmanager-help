# Set Up Tenant Payment Options

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Tenant-Payment-Option-Set-Up.htm

Rent Manager offers many options to receive tenant payments. From traditional methods like paper checks to a suite of ePay options provided by our integration partner Zego , there is no shortage of choices to streamline your receivables operations and provide maximum flexibility to tenants. To help manage the options available to tenants, there are several settings you can configure at the tenant-level and the system-level.

 More Information

 ePay is a licensed feature by Zego . To use Zego ePay , you must set up an account with Zego and enter that information into Rent Manager . For more information, contact sales@rentmanager.com .

 System-level Options

 Managing payment options at the system-level allows you to set broad policies that affect every tenant in your database (provided their tenant-level settings do not override the system settings). Payment settings at the system level affect the different Zego features available to tenants and they make payments in Tenant Web Access (TWA) or through features like CashPay and Zego Lockbox.

 System Preferences

 Zego ePay settings are located primarily in system preferences. The options here allow you to determine what methods tenants can use to pay their balances and what, if any, restrictions are applied to those methods.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 Lockbox Preferences

 The Zego Pay Lockbox integration provides an alternative way for tenants to submit physical payments, such as checks or money orders. Instead of mailing or dropping off payments at a front office, payments are mailed to a P.O. box that is managed by Zego . Zego then processes the payments and uploads them directly to the tenant's account in Rent Manager . For more information, refer to Tenant Lockbox ePay (System Preferences) .

 To configure Lockbox payment options, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Tenant ePay arrow_forward Lockbox .

 -
 Optionally, in the Payment Options section, select from the following options:

 Option
 Description

 Accept over payments

 Allows tenants to make payments that are greater than their current balance through Zego Pay Lockbox.

 Accept partial payments

 Allows tenants to make payments that are less than their current balance through Zego Pay Lockbox.

 More Information

 If, on a tenant's details page, the setting Don't Accept Payments is enabled, this setting will be overridden for that tenant.

 -
 Click Save
 The selected settings are applied.

 CashPay Preferences

 CashPay allows tenants and prospects to pay their rent and other charges in cash at more than 25,000 retail locations within the United States. For more information, refer to CashPay (System Preferences) .

 To configure Lockbox payment options, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward CashPay .

 -
 Optionally, select from the following options:

 Option
 Description

 Allow partial payments

 Allows partial payments (less than the current balance in the transaction ledger) through CashPay .

 More Information

 If, on a tenant's details page, the setting Don't Accept Payments is enabled, this setting will be overridden for that tenant.

 Allow payments over amount due

 Allows payments that are greater than the transaction ledger balance through CashPay .

 -
 Click Save
 The selected settings are applied.

 System Web Preferences

 The settings you configure in system web preferences determine the options available to tenants when making payments in Tenant Web Access . These settings include options such as what amount of payment is required and whether AutoPay is available.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 Financial Preferences

 The settings in system web preferences allow you to configure various options relating the tenant payment experience in their portal. For more information, refer to Tenant Web Access Financial (System Web Preferences) .

 To configure what amount, if any, tenants are required to pay, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Financial .
 The Tenant Web Access - Financial page displays.

 -
 Check Require payment of , then select from the following options:

 Option
 Description

 Total Balance Due

 Require tenants to pay their full balance due for all charges on their account, including future charges.

 More Information

 With this option enabled, tenants who use AutoPay can only select the payment types Total Balance Due or Specific Amount .

 Current Balance Due

 Require tenants to pay only their current balance due.

 More Information

 With this option enabled, tenants are able (but not required ) to overpay their current balance amount and partially or fully pay future charges.

 Current or Total Balance Due

 Require tenants to pay either the current balance due or the total balance due.

 Warning

 With this option enabled, tenants are not able to partially pay future charges.

 -
 Click Save
 The selected settings are applied.

 AutoPay Preferences

 If enabled, AutoPay allows tenants to establish an automatic payment schedule in Tenant Web Access . In system web preferences, you can configure the days and frequencies available to tenants. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 Tenant-level Options

 Managing payment options at the tenant-level provides you with the most granular level of control. Rather than depending only on system-wide settings, you can tailor the options available to individual tenants to ensure they comply with lease agreements or other obligations. For example, if a tenant has repeatedly written you bad checks, you can configure tenant-level settings in Rent Manager to prevent checks from being processed for that tenant. Additionally, certain tenant-level settings can override system-level settings.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To configure tenant-level payment options, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.
The tenant details page displays.

 -
 On the Miscellaneous tile, configure the following options:

 Option
 Description

 Don't Accept Checks

 Prevents all users from applying check payments to this tenant's account. When adding a payment to the tenant's open receivables, a message stating Do not accept checks from this tenant displays. Additionally, the user cannot submit the payment if a check number is added to the Reference # field; the user must select Cash , MO , or CC .

 Don't Accept Partial Payments

 Prevents any partial payments from being processed for this tenant. A partial payment is considered anything below the tenant's current balance due as of the payment date. This option also prevents tenants from making partial payments via Tenant Web Access (TWA) , CashPay , and Lockbox.

 Don't Accept Payments

 Prevents any payments from being processed for this tenant, including payments made via TWA, CashPay , and Lockbox.

 Don't Allow TWA Payments

 Prevents web users associated with the tenant account from making any ePay payments, including AutoPay payments, via TWA.

 -
 Click Save .
The payment options for the tenant are applied.
