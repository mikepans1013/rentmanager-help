# Credit Card Transaction Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Credit-Cards-Details.htm

The Credit Card Transaction details page allows you to view and manage credit card transaction information. From this page, you can track credits and charges associated with vendors and attach documents for historical records.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Credit card transactions
 View, Edit

 For more information, refer to Control User Access .

 To view a credit card transaction's details, go to arrow_forward Accounting arrow_forward Banking arrow_forward Credit Card Register and select a transaction from the list.

 General Information

 In this tile, the entity account, amount, vendor, transaction date, and reference number associated with the transaction display.

 Field
 Description

 Property

 The property associated with the credit card transaction. If the transaction is paid by more than one property, <Multiple Properties> displays.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit Card

 The credit card account charged or credited by this transaction.

 Related Privileges

 This field populates with only credit cards to which you have access. Your access to credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Date

 The date the transaction took place.

 Reference

 If applicable, the transaction's reference number or invoice number.

 Vendor

 The vendor being credited or charged by this transaction.

 Amount

 The total dollar amount being credited or charged by this transaction.

 Credit/Charge

 Indicates whether this transaction is receiving ( Credit ) or paying ( Charge ) the amount.

 Comment

 An optional message or reference about the transaction.

 Attachments

 In this tile, any documents or files attached to this transaction, such as a receipt, display. To add additional files to the transaction, click Upload Files .

 Credits or Charges

 In this tile, line items for each credit or charge associated with the transaction display.

 To have Rent Manager automatically calculate and distribute the total transaction amount between properties, units, or GL accounts into individual line items, click Disburse Amount . To add any additional line items, click Add Expense . To remove all line items on the transaction, select Clear Allocations .

 Column
 Description

 Property

 The property associated with the transaction line item. If the credit card transaction is associated with a single property, this column is read-only.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The unit associated with the transaction line item, if applicable.

 1099

 If checked, the line item is reported as a 1099 expense.

 Job

 If job costing is enabled, select a job from the drop-down list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Expense Account

 The general ledger (GL) account used to track the charge or credit.

 Memo

 An optional message for this line item.

 Amount

 The portion of the overall transaction amount allocated to this line item.

 Billable

 If checked, this is a billable expense that should be covered by a tenant or owner and an invoice can be created to bill that owner or tenant so they can reimburse you for the expense. Once checked, the icon, Billable To fields, and Markup fields become available.

 More Information

 To create an invoice directly associated with this credit card transaction, click . The information entered into the Billable To and Markup columns automatically populates in the invoice. For more information, refer to Invoice Details (Page) .

 Related Preferences

 This option displays only if Enable billable expenses is checked in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Billable To

 The Tenant or Owner receiving the invoice.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. It can be a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ). Markups use the following formula:

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and a markup of 50 is entered, the invoice created bills the account for $450. If a markup of 25% is entered, the invoice bills the account for $500, since 25% of 400 is 100.
