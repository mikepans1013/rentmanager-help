# Recurring Bill Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Bills-Recurring-Details.htm

Recurring bills are bill templates that can be posted as one-time bills on a recurring basis. If you manage properties that receive bills on a regular cycle, you can save time by creating recurring bills and posting them when necessary. The Recurring Bill details page, allows you to view and edit existing recurring bill information.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Recurring Bills
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a recurring bill, go to arrow_forward Payables arrow_forward Bills arrow_forward Recurring Bills and select a recurring bill from the list.

 Once a recurring bill is created, click to view information about the creation date, time, and user, as well as the updated date, time, and user.

 Details

 In this section, the entity account, amount, term, bill date, and invoice number associated with the recurring bill display.

 Field
 Description

 Vendor/Owner

 The Vendor or Owner account that receives the payment for the recurring bill.

 Amount

 The total dollar amount expensed on the bill.

 Invoice #

 If applicable, the bill's reference number or invoice number.

 Terms

 The terms that determine the Due Date for each one-time bill created from this recurring bill template. For more information, refer to Bill Terms (Page) .

 Start Date

 The date the recurring bill should first be posted to create a new one-time bill.

 End Date

 If applicable, the date this recurring bill should no longer post new one-time bills.

 Frequency

 How often a new one-time bill should be created from this template. For example, 1 month means post once every month; 2 months means post once every two months; 3 months means post once every three months (quarterly), and so on.

 Number Left

 How many more times the bill needs to be posted. For example, a car payment may be set up for 36 payments. After the thirty-sixth bill is posted, no additional bills are posted.

 Summary

 In this section, information about how the recurring bill is paid displays.

 Field
 Description

 Memo

 An optional message or reference for this bill. This message displays on the owner's Checks pop-up or Vendor Transactions pop-up.

 Payment Method

 The method by which the bill is paid.

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay is checked in the ePay section of system preferences. For more information, refer to General ePay (System Preferences) .

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange Settings section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 Default Bank

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank from which this bill payment is deducted. If < Property Default > is selected, the payment is deducted from the bank selected as the Default Bank account on the property's details page.

 Notification Email

 The email address to receive an email notification for each successful or failed automatic posting of this bill. If entering more than one email address, separate each with a semicolon (;).

 Automate

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Post recurring bills
 Enabled

 For more information, refer to Control User Access .

 If enabled, Rent Manager automatically posts this bill – without any user intervention – based on the posting schedule on the recurring bill. The bill is automatically posted as a new one-time bill at the appropriate times.

 Expenses

 In this section, multiple line items can be expensed, with one item per row. To add any additional line items, click Add Item .

 Column
 Description

 Property

 The property expensed by the recurring bill.

 Unit

 If applicable, the unit expensed by the recurring bill.

 Expense Account

 The general ledger (GL) account to track this expense.

 1099

 If checked, this expense is reported as a 1099 expense.

 Memo

 An optional message for the expense item, which displays in the Detail Memo column of the Bills page and in the Memo column on a Bill Worksheet .

 Amount

 The portion of the overall expense amount allocated to this line item.
