# Write a Tenant/Prospect Check

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Checks-Write-Tenant-Prospect.htm

Entering checks into Rent Manager lets you track when they were written, which properties were expensed, and for how much. Tenant checks could potentially be written to refund a tenant's security deposit or overpayment. Prospect checks could be written to refund a fee or other upfront expense.

 Checks can only be written if the tenant/prospect account has open credits. If nothing populates on the bill during creation, you can go back to the tenant or prospect account to clear allocations from the credit if needed. For more information, refer to Clear Transaction Allocations .

 More Information

 This topic covers writing tenant and prospect checks. For more information on writing vendor or owner checks, refer to Write a Vendor/Owner Check .

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 To write a new check for a tenant or prospect in Rent Manager , do the following:

 -
 Go to arrow_forward Payables arrow_forward Checks arrow_forward Write Checks .
The Write Check pop-up displays.

 -
 In the tile for the check's general information, enter the information into the available fields described below.

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

 Tenant/Prospect

 To determine the type of entity for which accounts can be selected, select Tenant or Prospect .

 More Information

 This topic covers writing tenant and prospect checks. For more information on writing vendor or owner checks, refer to Write a Vendor/Owner Check .

 Amount

 The total amount of this check. Alternatively, leave this field blank, and Rent Manager calculates the total from line items in the Expenses section. Click to update this Amount after adding line items.

 Payee Information

 The address to which the check is sent, which populates when the account receiving the check is selected. Optionally, you can change the address by clicking and manually entering the address.

 Memo

 An optional note for this check. Check memos display on View Transactions pop-up in the Comment column.

 -
 In the check's summary tile, enter or select the information in the available fields described below.

 Field
 Description

 Check will be printed

 Allows the check to be printed from Rent Manager . If this option is not selected, the check cannot be printed from Rent Manager . For more information, refer to Print Checks .

 Attachments

 Click Upload Files to attach any related images or documents from your network or computer to the check.

 -
 The total open credits on the account displays in the line items. Checks can only be created for tenant and prospect accounts that have open credits. If nothing displays in this section, the tenant or prospect credit is already allocated to something else and must be cleared before continuing. Alternatively, to add a credit, click Add Credit .

 The Add Credit pop-up displays. The available fields are described in the table below.

 More Information

 It is not common to apply additional credits to tenants or prospects while writing a check, but this could potentially be used to refund a fee in exchange for payment.

 Column
 Description

 Charge Type

 The charge type to be associated with this charge.

 Unit

 If applicable, the specific unit associated with the credit. If the credit applies only to the property as a whole, select the associated property name.

 Date

 The date on which the credit was issued to the payee.

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click Prorate to prorate the amount in this section. For more information, refer to Add a Prorated Charge .

 Comment

 An optional description about the transaction. For example, you may use this field to enter the name of the individual who performed the work.

 Reference #

 An additional comment regarding the transaction. For example, you may use this field to record the invoice number for the transaction.

 Click Save & Close to complete adding a credit or Save & New to add additional credits.

 -
 In the Allocated Amount column, enter the amount you intend to refund to the tenant or prospect.

 -
 Click Save .
The check is created.
Optionally, click Save & Finish to complete the check creation process and close the pop-up. To save the check and refresh the pop-up to add another check, click Save & New .
