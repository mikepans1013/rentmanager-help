# Batch ePay (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/ePay-Batch.htm

Batch ePay system preferences allow you to set system defaults for recurring ePay batch payment postings.

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

 Set up and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward ePay arrow_forward Batch .
The System Preferences: ePay - Batch page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 General

 In this section's Batch Calculation field, select from the following options to determine how much money to post against a tenant or prospect’s account when that tenant is involved in a batched ePay posting.

 Option
 Description

 Full Balance

 When recurring ePay payments are posted, the ePay payment is calculated to cover the entire balance of the tenant or prospect.

 To set a maximum limit to collect from ePay payments, check Never Charge More Than and enter a value. When recurring ePay payments are posted, tenants and prospects by default are not charged more than the entered value.

 Selected Charges

 When ePay payments are posted, tenant and prospect accounts are debited only for charges for the specified charge types. In the Charge Types field, select which charge types to include charges for.

 To set a maximum limit to collect from ePay payments, check Never Charge More Than and enter a value. When recurring ePay payments are posted, tenants and prospects by default are not charged more than the entered value.

 Set Amount

 When recurring ePay payments are posted, tenants and prospects are always charged the dollar amount specified in the Amount field.

 Send Receipts After Batch

 In this section, select what should be included in receipts and determine when a receipt should be sent to the owner, tenant, or vendor.

 Option
 Description

 Email Decline Receipt

 If checked, automatically generate a declined letter to email to tenants or prospects for declined transactions in a batch. Then select the letter template to use for the declined letter.

 Email Success Receipt

 If checked, automatically generate a confirmation letter to email to tenants or prospects for successful transactions in a batch. Then select the letter template to use for the confirmation letter.

 Optionally, check Attach Invoices so that when invoices are paid by an ePay payment, that invoice is attached to the confirmation email.
