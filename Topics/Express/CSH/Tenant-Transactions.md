# Tenant Transactions (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-Transactions.htm

This pop-up allows you to view and manage the transactions linked to the currently selected tenant. This includes adding and deleting charges, processing NSF payments, refunding electronic payments, clearing the allocations of payments, and so on.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View

 For more information, refer to Control User Access .

 To access the View Transactions pop-up, go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list. On the Transactions tile, click .

 Filter Options

 The following filters are available on this pop-up:

 Option
 Description

 Search

 Type in the Search field to narrow the list to match your search criteria.

 Filter By Date

 Enter the From and/or To dates to only show transactions created during the specified period.

 Click to select a date from the calendar, or click Today to select today's date. To clear the selection(s), click clear . Alternatively, click to select a preset date range.

 Show Account Group Items

 Includes transactions relating to any tenant in the selected tenant's account group. The Account column is added to the ledger to show the tenant associated with each transaction.

 This displays only for tenant accounts that are part of an account group. For more information, refer to Manage Account Groups .

 Collapse Invoices

 Check to show a single line item for the combined total of items on an invoice. By default, separate lines display for each item on the invoice.

 View Open Receivables Only

 Check to display only the account's unpaid charges

 Column Descriptions

 The following columns are available on this pop-up:

 Option
 Description

 Date

 The date the charge, credit, or payment posted to the account.

 Reference #

 If applicable, the note entered by a user describing the type ( CASH , MO , the check number, and so on) of transaction.

 Description

 The system generated details to provide context for the transaction.

 Comment

 If applicable, the note entered by a user providing more information about the transaction.

 Amount

 The total value of the transaction. Payments and credits display with a negative value while charges display with a positive value.

 Balance

 The total amount due on the account after the transaction is applied.

 Row Actions

 The following row actions are available from the menu.

 Option
 Description

 Details

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Checks
 View

 Receivables
 Tenant transactions
 Edit

 For more information, refer to Control User Access .

 View or edit transaction details. Click Save on the pop-up to save any changes made to the transaction.

 Delete

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Delete a transaction from the account. Click Yes on the pop-up to remove the selected transaction.

 If you delete a charge that has payments allocated toward it, those payments are automatically applied to other open charges.

 Additionally. you can delete only undeposited payments. Payments that are deposited cannot be deleted until the deposit is deleted from the bank register. Deleting a bank deposit does not delete the payment. The payment is simply reverted to an undeposited payment until it is redeposited.

 Clear Allocations

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Clear tenant transaction allocations
 Enabled

 For more information, refer to Control User Access .

 Remove the current allocation of a payment. This allows received money to be used to pay current or future charges on the account. On the Clear Allocations pop-up, click Yes to save the changes made to the transaction.

 NSF

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Allow to NSF/Void a payment
 Enabled

 For more information, refer to Control User Access .

 Payments recorded in Rent Manager can be reversed to reflect real-world transaction activity, such as insufficient funds or bank errors. You can either void those payments or charge a non-sufficient funds (NSF) fee to the account.

 View Receipt

 Only on payment line items, you can select this option to open the Payment Receipt Export Options pop-up, and select the format in which the receipt should be exported. Click OK for the receipt to be downloaded or printed.

 Move Payment

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Edit

 Move payments between tenants
 Enabled

 For more information, refer to Control User Access .

 If you have entered a payment on the wrong tenant or prospect account, that payment can be moved to the correct tenant or prospect account, provided the following conditions are met:

 -
 The destination tenant/prospect (the tenant/ prospect receiving the misapplied payment) is a current tenant or prospect associated with the same default Property , as the source tenant (the tenant who currently has the payment).

 -
 If your management company uses the standard method for management fee postings, payments tied to management fee postings cannot be transferred until the fee posting is rolled back.
