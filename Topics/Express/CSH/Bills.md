# Bills (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Bills.htm

The Bills page lets you track and pay one-time bills received from vendors. You can also create bills to pay tenants, prospects, and even owners. Entering bills into Rent Manager allows you to track the amounts of these bills, when they are due, and which properties are responsible for paying the bills.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 View

 For more information, refer to Control User Access .

 To view the Bills page, go to   arrow_forward Payables arrow_forward Bills .

 Column Descriptions

 The following columns are available on this page. By default, some columns display only if added via . Additionally, you can sort some columns on the page to change the order in which the information displays in the list.

 Column
 Description

 Aprvd

 A displays if the bill is approved for payment by a user or owner.

 Related Preferences

 This column displays only if the Require bills to be approved before they can be paid option is enabled in the Checks/Bills section of system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Vendor

 The vendor expensed on the bill. If you have a bill associated with an owner, tenant, or prospect, nothing displays in this column.

 Invoice #

 If applicable, the invoice number of the bill.

 Bill Date

 The date the bill was created as stated on the physical bill.

 Due Date

 The latest date this bill must be paid before payment is considered late.

 Terms

 The specified amount of time ( Immediately , NET MONTH , 1st of the Month , and any custom terms created) given after the Bill Date before a bill is considered due. For more information, refer to Bill Terms (Page) .

 Amount

 The total dollar amount of all items in the bill.

 Paid

 A displays if the bill is paid.

 Memo

 The message or reference number providing further context for the bill, as entered in the Memo field on the Bill details page.

 Pay Method

 The method ( ACH , AvidPay , Check , Debit , EFT , eChecks, ePay , NACHA) used to pay the bill.

 Optional Column

 Description

 Amount Paid

 The total amount currently paid towards the bill.

 Approved By

 If the bill has been approved, the name of the owner or user who approved the bill to be paid.

 Approved Date

 The date on which the bill was approved to be paid.

 Avid PO#

 If the bill is linked to a purchase order imported via AvidInvoice , this displays the number of the purchase order.

 Avid URL

 The External Invoice link to the original bill in your AvidInvoice portal. For more information, refer to AvidInvoice (Page) .

 Bank

 The name of the bank selected to pay this bill in the bill's Default Bank field.

 Created By

 The user who created the bill.

 Created Date

 The date on which the bill was created in Rent Manager .

 Detail Memo

 The text entered in the bill's Memo field to provide further context or information.

 Expense Account

 The GL account from your chart of accounts to track the expense.

 Expense Account Number List

 The GL account number(s) of the debited expense accounts as listed in the line items of the bill.

 PO #

 If the bill is created from a purchase order via Add Bill Link in the Links section, the PO number of that purchase order displays. For more information, refer to Add a Bill or Invoice to a Purchase Order .

 Post Date

 The date the expense is added on the general ledger on an accrual accounting basis.

 Properties

 The property that are associated with the bill.

 Property Short Names

 The short name of the property associated the bill.

 Unit

 The unit(s) associated with the line items on the bill.

 Updated By

 The user who most recently updated the bill.

 Updated Date

 The date on which the bill was most recently updated.

 Vendor Payee Name

 The name as entered on the Vendor details page in the Payee field for the bill's vendor.

 Row/Bulk Actions

 Row actions, which are available from the menu to the right of each bill, affect only the selected account. To perform actions on multiple bills, the Bulk Actions menu allows you to select an action and then check all the bills for which to apply the action.

 The following actions are available from the Bills page. Actions that can be performed in bulk are marked with a Check .

 Action
 Bulk Action
 Description

 Details

  

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 Opens the Bill details page, where you can view specific bill information and if you have the appropriate permissions, approve the bill for payment.

 Void

  

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 Void the bill to reverse the expense transaction without deleting the original bill.

 When a bill is voided, it shows as paid in Rent Manager and the Comment displays as Void . Another bill is then created for the exact same amount of the original bill, but the amount is negative. The reversal bill is also considered paid and the Comment also says Void .

 Delete

  

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 View, Delete

 For more information, refer to Control User Access .

 Delete a bill from Rent Manager .

 Warning

 Deleting a bill cannot be undone. Before deleting a bill, consider the Void option to maintain a historical record of the bill.

 Make Recurring

  

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Recurring Bills
 Add, View

 Bills
 View

 For more information, refer to Control User Access .

 Opens the Recurring Bill from Bill pop-up. Recurring bills are bill templates that are posted at set intervals of time to automatically create new one-time bills. By converting a normal bill into a recurring bill, you can set new parameters that determine when and how often this bill should be posted in the future.

 Mass Edit Mode

 Check

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 Update multiple bills simultaneously without leaving the Bills page. To edit multiple bills' Due Date , Memo , etc., click Bulk Actions arrow_forward Mass Edit Mode . Then, click on the applicable fields to make the desired edits. When finished, click Exit .
