# Bill Back an Owner for Property Expenses

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Owners-Billable-Expenses.htm

Billable expenses is a billing and invoicing tool that allows you to charge back expenses to owners in the form of invoices, and optionally add a markup amount to each billable expense as part of the reimbursement. You can bill an owner for work completed by your management company, or for property expenses paid by your company (e.g., vendor bills).

 More Information

 Before you can bill expenses to an owner, you must enable billable expenses and establish owner-specific invoicing options in system preferences. For more information, refer to Set Up Billable Expenses .

 Bill Back an Owner for Work Completed by the Management Company

 If your property management company completed work for an owner, you can invoice owners for those expenses and add an optional markup amount to each expense.

 Step 1: Add the Vendor Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 To bill an owner for work completed by your company, you must first create the bill and assign it to the owner by doing the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .
The Add Bill pop-up displays.

 -
 In the Vendor field, select your property management company's vendor account from the drop-down list.

 -
 Enter bill and payment details at the top of the pop-up. For more information, refer to Add a One-Time Vendor/Owner Bill .

 -
 Enter information about the line item(s) that are being billed to the owner.

 Column
 Description

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on the account's Owner 1099 report. For more information, refer to Owner 1099 (Report) .

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 Job

 If applicable, the job-costing project with which this expense is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense.

 Property

 The property to be expensed by the vendor.

 Unit

 If applicable, the specific unit to be expensed by vendor. If the expense applies only to the property as a whole, leave this field blank.

 -
 Check the Billable column on the line item(s) that are being billed to the owner.
The Billable To and Markup columns are made available.

 -
 Enter information in the Billable To and Markup columns:

 Column
 Description

 Billable To

 Select the Owner tab, then select the owner to charge for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 -
 Click Save .
The bill is created and its details page displays.

 Step 2: Create an Invoice for the Owner

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Once you have assigned the billable expenses to a bill, you may generate an invoice to charge the owner by doing the following:

 -
 In the bill's Billable column, click .

 -
 Verify that the correct Owner and management company Property are selected.

 -
 Enter the invoice's details. For more information, refer to Add an Invoice .

 -
 Click Save & Close .
The invoice is created and added to the owner's account.

 Step 3: Pay the Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 Once you generate an invoice to charge the owner and receive payment from them, you can pay the bill created to expense the owner by doing the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 On the bill you received reimbursement for, select Pay .

 -
 Verify that the Bank account, Amount To Pay , and Pay Method are correct.

 -
 Click Pay Bills .
The Payment Info pop-up displays.

 -
 Enter information in the following fields:

 Option
 Description

 Comment

 An optional note that provides further context for this payment. The note displays in the Comment column on Vendor Transactions pop-up and in the check's Memo field.

 To select a memorized comment, click .

 Consolidate By Vendor

 Combines bills from a specific vendor into a single payment. The selected bills with the same Vendor , Bank , and Pay Method are paid together with a single check or payment transaction.

 Mark check(s) to be printed

 Indicates you want to print the check(s) from Rent Manager for the bill(s) being paid.

 Payment Date

 The date on which the payment was issued. This date should match your real-world financial records to prevent any issues with reconciliation. By default, the current date populates.

 -
 Click Pay to create payment transactions in Rent Manager . Or, if Mark check(s) to be printed is selected, click Pay & Print Checks to pay bills and open the Print Checks pop-up to print the checks immediately.
The bills are marked as paid and can be located on the Bills page when Show unpaid bills only is unchecked.

 Related Preferences

 If the Add a payment from the owner when a bill is paid to the management company option is enabled in system preferences, a payment is automatically made to the charge created on the owner account using funds from the property's default bank account. For more information, refer to Management Company (System Preferences) .

 Bill Back an Owner for Expenses Paid by the Management Company

 If your property management company paid a vendor out of pocket for work, you can invoice owners for those expenses and add an optional markup amount to each expense.

 Step 1: Add the Vendor Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Before you can create the owner invoice, you must first create a bill to pay the vendor for products and services rendered to the property that you manage by doing the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .
The Add Bill pop-up displays.

 -
 In the Vendor field, select the vendor account that completed the work from the drop-down list.

 -
 Enter bill and payment details at the top of the pop-up. For more information, refer to Add a One-Time Vendor/Owner Bill .

 -
 In the Property column for each line item, select the property management company's property.

 -
 Enter additional information about the line item(s) for expenses from the vendor.

 Column
 Description

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on the account's Owner 1099 report. For more information, refer to Owner 1099 (Report) .

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 Job

 If applicable, the job-costing project with which this expense is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense.

 Unit

 Since the expense applies only to the property management company as a whole, leave this field blank.

 -
 Click Save .
The bill is created and its details page displays.

 Step 2: Add the Bill to Expense the Owner

 After creating the bill to cover the vendor's services, you need to create a bill to expense the owner and reimburse the management company.

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Add Bill .
The Add Bill pop-up displays.

 -
 In the Vendor field, select the property management company's vendor account from the drop-down list.

 -
 Enter bill and payment details at the top of the pop-up. For more information, refer to Add a One-Time Vendor/Owner Bill .

 -
 Enter information about the line item(s) that are being billed to the owner.

 Column
 Description

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 More Information

 These expenses are included on the account's Owner 1099 report. For more information, refer to Owner 1099 (Report) .

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Expense Account

 The GL account used to track this line item's expense. For example, if the line item is for landscaping at a property, you would select the expense account used for that type of maintenance work (such as 5101 - Maintenance & Landscaping ).

 Job

 If applicable, the job-costing project with which this expense is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note or comment that provides further context for this expense.

 Property

 The property where the vendor completed the work.

 Unit

 If applicable, the specific unit where the vendor completed the work. If the expense applies only to the property as a whole, leave this field blank.

 -
 Check the Billable column on the line item(s) that are being billed to the owner.
The Billable To and Markup columns are made available.

 -
 Enter information in the Billable To and Markup columns:

 Column
 Description

 Billable To

 Select the Owner tab, then select the owner to charge for this expense line item.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 -
 Click Save .
The bill is created and its details page displays.

 Step 3: Create an Invoice for the Owner

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Invoices
 Add, View

 For more information, refer to Control User Access .

 Once you have assigned the billable expenses to a bill, you may generate an invoice to charge the owner by doing the following:

 -
 In the bill's Billable column, click .

 -
 Verify that the correct Owner and management company Property are selected.

 -
 Enter the invoice's details. For more information, refer to Add an Invoice .

 -
 Click Save & Close .
The invoice is created and added to the owner's account.

 Step 4: Pay the Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 Once you generate an invoice to charge the owner and receive payment from them, you can pay the bill created to expense the owner by doing the following:

 -
 Go to arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 On the bill you received reimbursement for, select Pay .

 -
 Verify that the Bank account, Amount To Pay , and Pay Method are correct.

 -
 Click Pay Bills .
The Payment Info pop-up displays.

 -
 Enter information in the following fields:

 Option
 Description

 Comment

 An optional note that provides further context for this payment. The note displays in the Comment column on Vendor Transactions pop-up and in the check's Memo field.

 To select a memorized comment, click .

 Consolidate By Vendor

 Combines bills from a specific vendor into a single payment. The selected bills with the same Vendor , Bank , and Pay Method are paid together with a single check or payment transaction.

 Mark check(s) to be printed

 Indicates you want to print the check(s) from Rent Manager for the bill(s) being paid.

 Payment Date

 The date on which the payment was issued. This date should match your real-world financial records to prevent any issues with reconciliation. By default, the current date populates.

 -
 Click Pay to create payment transactions in Rent Manager . Or, if Mark check(s) to be printed is selected, click Pay & Print Checks to pay bills and open the Print Checks pop-up to print the checks immediately.
The bills are marked as paid and can be located on the Bills page when Show unpaid bills only is unchecked.

 Related Preferences

 If the Add a payment from the owner when a bill is paid to the management company option is enabled in system preferences, a payment is automatically made to the charge created on the owner account using funds from the property's default bank account. For more information, refer to Management Company (System Preferences) .
