# Update Paid Bills

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Bills-Update-Paid.htm

As a security measure to prevent fraudulent changes when editing a paid bill, only the Bill Date , Invoice # , Post Date , Due Date , and Memo fields can be modified. If you notice incorrect data on a paid bill, like in a line item's Property or Expense Account fields, you can update it by entering the changes on the check that paid it.

 You can quickly locate the check used to pay a bill on the bill's details page, which links directly to the check's details page. When you save your changes to the check, Rent Manager applies those changes to the bill to ensure any changes you make update on both simultaneously. This helps prevent discrepancy issues in your payables accounts that occur due to mismatched data between bills and checks.

 Step 1: Locate the Bill and Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View

 Payables
 Bills
 View

 For more information, refer to Control User Access .

 To locate the bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills
The Bills page displays.

 -
 Select the bill you want to update.
The Bill page displays

 -
 At the top-right of the page, click the check link.
The Check page for the associated check displays.

 Step 2: Update the Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Edit

 Reconciled transactions
 Delete, Edit

 Override sequential check number enforcement
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 To update the check, do the following:

 -
 On the Check page, in the primary check section at the top, update any of the fields below you want to update on the bill.

 Field
 Description

 Bank Account

 The bank that the funds draw from.

 Date

 The date the check was written.

 No.

 The check number that displays on the physical check that paid the bill.

 Owner, Vendor, Tenant, or Prospect

 The payee's entity type, with the account name in the field below. This also populates the payee's default address under Payee Information .

 Amount

 The total amount of the check, which is calculated as the sum of the line item amounts. If you change the total check amount first, you must apply the difference to the line items. If you change the line items first, you can quickly update the total amount on the check by clicking to update the total amount from the line item amounts.

 Address

 The default address on the payee's account. This information populates when the payee is selected.

 Memo

 Additional notes for the check you want to display in Rent Manager , for example, when accessing the bill's details or an entity's transactions.

 -
 In the line items section, update any of the fields below you want to update on the bill. These fields correspond to the matching field in the bill under the Expenses section.

 Field
 Description

 Property

 The property to which the expense applies.

 Unit

 The unit to which the expense applies.

 Expense Account

 The general ledger account that tracks the expense.

 1099

 If checked, the expense reports as a 1099 expense.

 Job

 The job that the bill and check are tracked under.

 Related Preferences

 This field displays only when Enable job costing is checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 Additional notes for the line item you want to display in Rent Manager , for example, when accessing the bill's details.

 Amount

 The amount allocated to a specific line item.

 -
 Click Save .
The check and bill are updated with the new information.
