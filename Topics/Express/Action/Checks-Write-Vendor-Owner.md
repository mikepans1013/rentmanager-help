# Write a Vendor/Owner Check

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Checks-Write-Vendor-Owner.htm

Entering checks into Rent Manager lets you track when they were written, which properties were expensed, and for how much. Vendor checks are typically written to pay a third party for products and services rendered to your business or the properties you manage. Owner checks are typically written to pay an owner for weekly or monthly distributions. You can also import information from a previous check using the Fill from history option.

 More Information

 This topic covers writing vendor and owner checks. For more information on writing tenant or prospect checks, refer to Write a Tenant/Prospect Check .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 Accounting
 General ledger accounts
 View

 For more information, refer to Control User Access .

 To write a new check for a vendor or owner in Rent Manager , do the following:

 -
 Go to   arrow_forward Payables arrow_forward Checks arrow_forward Write Check .
The Write Check pop-up displays.

 -
 In the section for the check's general information, enter the information into the available fields described below.

 Field
 Description

 Bank

 The bank account from which funds are drawn. After a bank is selected, its current Balance displays.

 Related Privileges

 To write checks that are not drawn from the Default Bank specified on the Property details page, the Write checks from banks that are not default privilege must be enabled. For more information, refer to Banks/Checks Privilege Group .

 Date

 The date on which the check was issued to the payee. This date should match your real-world financial records to prevent any issues with reconciliation.

 No.

 The check number that matches the number on the physical check written in the real world.

 Related Preferences

 In the check numbers system preferences, enable Next Check Number so each new check from the selected bank account defaults to the next number.

 In the General section of checks/bills system preferences, you can also enable the option Enforce sequential check numbers .If Enforce sequential check numbers is enabled but the user does not have the Override sequential check number enforcement option enabled, the No. field is unavailable. For more information, refer to Check Numbers (System Preferences) and Checks/Bills General (System Preferences) .

 Owner, Vendor, Tenant, or Prospect

 Select vendor or owner, followed by the account name in the field below. After selecting the account, the address displays below.

 If you have previously created a check for this recipient and would like to use that same information, click Fill from Check History and select the property from which the previous check was written. Rent Manager Express refreshes and populates the current check with information from the selected check.

 More Information

 This topic covers writing vendor and owner checks. For more information on writing tenant or prospect checks, refer to Write a Tenant/Prospect Check .

 Amount

 The total amount of this check. Alternatively, leave this field blank, and Rent Manager calculates the total from line items in the Expenses section. Click to update this Amount after adding line items.

 Address

 The address to which the check is sent, which populates when the account receiving the check is selected. Optionally, you can change the address by clicking and manually entering the address.

 Memo

 An optional note for this check. Check memos display in the Comment column on Vendor Transactions page.

 -
 In the check's summary section, enter or select the information in the available fields described below.

 Field
 Description

 Process through ePay

 Processes the check using the Zego ePay feature. If processed by ePay, the check details display that it is an ePay check.

 More Information

 If this option is checked after the check is saved the first time, it will not process through ePay .

 Related Preferences

 This option displays only if you have ePay set up in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 eChecks

 Processes the check using the Safeguard eChecks feature. Once enabled, enter the eChecks Email associated with the recipient.

 Related Preferences

 This option displays only if you have eChecks set up in the eChecks section of system preferences. For more information, refer to eChecks (System Preferences) .

 Check will be printed

 Allows the check to be printed from Rent Manager . If this option is not selected, the check cannot be printed from Rent Manager . For more information, refer to Print Checks .

 Avid Pay

 If checked, the check is processed via AvidPay and can be posted to your AvidXchange portal. For more information, refer to Post AvidPay (Page) .

 This option displays only for vendor checks.

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 More Information

 The best practice is to first import bills from AvidXchange using the paid integration AvidInvoice , then pay those bills using AvidPay rather than manually writing a check. If you do not have AvidInvoice , you can instead use this option to post the check payment to AvidXchange without importing bills. For more information, refer to Pay Bills with AvidXchange .

 Alternatively, you can use the Smart Bills feature to create bills in Rent Manager and then pay them via AvidPay . For more information, refer to Smart Bills .

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the check.

 -
 In the section for expense line items, enter or select the check information for the property into the available columns.

 Alternatively, click   Disburse Amount to have Rent Manager automatically calculate and distribute the total check amount between properties, units, or general ledger (GL) accounts into individual line items. For more information, refer to Disburse Amount .
The available columns are described in the table below.

 Column
 Description

 Property

 The property to be expensed by the vendor or owner.

 Unit

 If applicable, the specific unit to be expensed by the owner or vendor. If the expense applies only to the property as a whole, leave this field blank.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on account's Owner 1099 or Vendor 1099 reports. For more information, refer to Owner 1099 (Report) or Vendor 1099 (Report) .

 Job

 If applicable, the job-costing project with which this expense is associated.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 This option displays only if Enable job costing is checked in the General Options section of system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense. Expense memos display in the Memo column on the Bills page.

 Billable

 If this is a billable expense that should be covered by a tenant or owner, check Billable to create an invoice to bill that owner or tenant so they can reimburse you for the expense. Once checked, the Billable To and Markup fields become available. Click the drop-downs below for more information.

 More Information

 Click the icon to create an invoice directly associated with this bill. The information entered into the Billable To and Markup columns automatically populates in the invoice. For more information, refer to Invoice Details (Page) .

 You must click Save before an invoice can be created from the bill.

 Billable To

 First, select the Tenant or Owner tab to determine the type of account receiving the invoice. Then in the field below, select the owner or tenant account that will pay for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 -
 Click Save .
The check is created.
Optionally, click Save & Finish to complete the check creation process and close the pop-up. To save the check and refresh the pop-up to add another check, click Save & New .
