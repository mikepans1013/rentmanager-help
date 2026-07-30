# Check Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Check-Details.htm

The Check page displays information about a check, including the bank it was paid from, all the expense line items, the amount of the check, and if the check pays a bill.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a check, go to   arrow_forward Payables arrow_forward Checks arrow_forward Checks and select the check you wish to examine.

 General Information

 In this section, the bank, amount, payee, date, and number associated with the check display.

 The following fields are available in this section.

 More Information

 If the check was created to refund a tenant security deposit via Zego Resident Payout, the check's details automatically populate with information from the ePay refund check. Only a few select fields can be edited, such as Date and Memo .

 Field
 Description

 Property

 The property expensed by the check.

 Related Preferences

 This field displays only if Select property first on checks/bills is enabled in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 eCheck Status/
AvidPay Status

 If the check was posted through AvidPay or eChecks , the processing status displays at the top of the page.

 Bank

 The bank from which funds are drawn. The actual Balance of the bank displays above the field.

 Date

 The date on which the check was issued to the payee. This date should match your real-world financial records to prevent any issues with reconciliation.

 No.

 The identifying number of the check.

 If the check was created to refund a tenant security deposit via Zego Resident Payout, the Zego Payout ID displays.

 Related Preferences

 If Enforce sequential check numbers is enabled in system preferences, the check number cannot be changed. For more information, refer to Checks/Bills General (System Preferences) .

 Amount

 The total dollar amount of this check.

 Alternatively, if you have multiple line items on the bill, click to populate the total of all fields in the line items' Amount column.

 Vendor/
Owner/
Tenant/
Prospect

 The Vendor , Owner , Prospect , or Tenant account that is associated with the payee of the check.

 If the selected account has any past checks in Rent Manager , you can click Fill from history to automatically copy information from the past check you select and import it to this check. The information imported includes the Amount , and Bank .

 Address

 The address to which the check is sent. It automatically populates when the account receiving the check is selected.

 Alternatively, next to Payee Information , click to manually edit the payee name and address.

 Memo

 An optional note for this check. The memo displays on the printed check and on the associated transaction pages for the payee.

 If the check was created to refund a tenant security deposit via Zego Resident Payout, Security Deposit Refund: Resident Payout automatically populates.

 Check Printing and Files

 In this section, information about the if the check needs to be printed, files, and bills associated with the check display.

 The following fields are available in this section:

 Field
 Description

 Check will be printed

 If you are printing this check from Rent Manager , enable this option so the check displays on the Print Checks page.

 AvidPay

 If the check is associated with a bill, check to submit the check through AvidPay . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in system preferences. For more information, refer to AvidXchange (System Preferences) .

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the check in Rent Manager , such as a digital copy of the original bill the check pays.

 Expenses/Open Credits

 Depending on if the payee is a vendor/owner or tenant/prospect, different options are available in the line item section of the check. Vendor and owner checks have an expenses section where line items are expensed. Tenant and prospect bills have an open credits section, where credits that may be refunded back display.

 Expenses

 In the expenses section for checks written to vendors or owners, multiple line items can be expensed, with one item per row.

 To have Rent Manager automatically calculate and distribute the total check amount between properties, units, or GL accounts into individual line items, click Disburse Amount . To add any additional line items, click Add Detail . Select Clear Allocations to remove all line items on a check.

 The following columns display in the expenses section:

 Column
 Description

 Property

 The property expensed by the vendor or owner.

 Unit

 The specific unit expensed by the vendor or owner.

 Expense Account

 The general ledger (GL) account used to track the expense.

 1099

 Check if the expense should be reported as a 1099 expense.

 Job

 If job costing is enabled, select a job from the drop-down list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional message for this line item. When the check is printed, this displays under the Comment column for the line item.

 Billable

 If this is a billable expense that should be covered by a tenant or owner, check Billable to create an invoice to bill that owner or tenant so they can reimburse you for the expense. Once checked, the Billable To and Markup fields become available.

 Related Preferences

 In order to manage billable expenses on a check, the Enable billable expenses option must be selected in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 More Information

 Click to create an invoice directly associated with this bill. The information entered into the Billable To and Markup columns automatically populates in the invoice. For more information, refer to Invoice Details (Page) .

 You must click Save before an invoice can be created from the bill.

 Billable To

 First, select the Tenant or Owner tab to determine the type of account receiving the invoice. Then in the field below, select the owner or tenant account that will pay for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 Related Preferences

 If a Default Markup is established in system preferences, a default value autopopulates. For more information, refer to Checks/Bills General (System Preferences) .

 Amount

 The portion of the overall expense amount allocated to this line item.

 Open Credits

 Open credits on the selected tenant or prospect account display in this section. To add additional credits on the check, click Add Credit .

 The following columns display in the open credits section:

 Column
 Description

 Date

 The date the open credit posted to the account.

 Property

 The property associated with the open credit.

 Unit

 The unit associated with the open credit.

 Description

 If the credit is allocated, the description and charge type associated with the credit displays. Otherwise, Unallocated Payment displays.

 Open Amount

 The total dollar amount of the credit on the tenant or prospect account.

 Allocated Amount

 The amount refunded to the tenant or prospect.
