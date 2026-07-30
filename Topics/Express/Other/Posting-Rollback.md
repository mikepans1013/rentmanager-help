# Roll Back a Posting

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Posting-Rollback.htm

The posting rollback tool can reverse or undo charges and account reconciliations that have been posted while keeping other transactions intact. This tool is most commonly used to revert a recurring charge posting when payments are received for tenants, but the charges need to be re-posted. For example, if rent is posted using the wrong posting date and several tenant payments were already recorded, this feature can undo the posting and leave the payments in place.

 The following posting types can be reversed:

 -
 Asset depreciation

 -
 Batch payments

 -
 CAM reconciliations

 -
 Scanned check batches

 -
 Late fees

 -
 Management fees

 -
 Reconciliations

 -
 Utilities

 -
 Market rent

 -
 Recurring charges

 -
 Security deposit interest

 -
 Gross Potential Rent (GPR)

 -
 Imported charges and payments

 -
 Imported reconciliation transactions

 -
 Loan Payables

 -
 Loan Receivables

 -
 Owner payments

 -
 Automated Recurring Bills

 -
 Recurring journals

 -
 Common Area Maintenance (CAM)/Commercial Recoverable Expenses (CRE)

 Related Privileges

 Group
 Privilege
 Column

 System
 Posting Rollback
 Enabled

 For more information, refer to Control User Access .

 Warning

 Rolling back a posting does not automatically undo any payment or deposit that was made related to that posting. Any payment that was made toward that posting automatically becomes an unapplied credit on the tenant's Transactions pop-up because the charges it was allocated to are removed.

 To roll back a posting, do the following:

 -
 Go to arrow_forward Administration and then select Rollback arrow_forward Posting Rollback .

 -
 To narrow down the list, use the Post Type filter to select which type of posting to revert. Each type is described below.

 Type
 Description

 Asset Depreciation

 Roll back the creation of asset depreciation journal entries. For more information, refer to Post Depreciation .

 Batch Transaction

 Roll back a batch posting of multiple payments. For more information, refer to Make Multiple Payments in a Batch .

 CAM Reconciliation

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back a completed common area maintenance (CAM) reconciliation. For more information, refer to CAM Reconciliation .

 Check Scan Batch Payment

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back a batch posting of scanned checks.

 Commercial Recoverable Expense (CRE)

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back any recurring or non-recurring commercial recoverable expenses (CRE) charges. For more information, refer to Post Non-Recurring CRE .

 Daily/Monthly/Weekly

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back a posting of recurring charges for tenants with a Daily , Monthly , or Weekly rent period. For more information, refer to Post Recurring Charges .

 Deposit Interest

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back a posting of security deposit interest charges.

 GPR

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 View, Delete

 For more information, refer to Control User Access .

 Roll back a journal entry created to project the maximum gross potential rent (GPR) for a property or properties. For more information, refer to Post Gross Potential Rent (GPR) .

 Import

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back the importing of payments or charges. For more information, refer to Import Payments and Import Charges .

 Import Transaction

 Roll back the importing of transactions for an electronic bank reconciliation. For more information, refer to Electronic Bank Reconciliation and Electronic Bank Reconciliation using Bank Sync .

 Late Fee

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back the posting of tenant late fees. For more information, refer to Post Late Fees .

 Loan Payables

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Delete

 For more information, refer to Control User Access .

 Roll back the posting of payments made on your outstanding loans. For more information, refer to Post Loans Payable .

 Loans Receivable

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Delete

 For more information, refer to Control User Access .

 Roll back the posting of owner-financed tenant loans. For more information, refer to Post Loans Receivable .

 Management Fee

 Related Privileges

 Depending on the options selected in system preferences, one or more of the following privileges are required:

 Group
 Privilege
 Column

 Accounting

 Journal Entries

 Delete

 Receivables

 Owner Transactions

 Delete

 Sales/Invoicing

 Invoices

 Delete

 Payables

 Bills

 Delete

 Banks/Checks

 Checks

 Delete

 For more information, refer to Control User Access .

 Roll back the posting of owner management fees. For more information, refer to Post Management Fees .

 Related Preferences

 The exact transactions that are rolled back are dependent on the options selected in system preferences for management fee postings. Each option checked in the Management Fees section is rolled back. For more information, refer to Management Company (System Preferences) .

 Manual Owner Payment

 Roll back a manually processed owner payment. For more information, refer to Manual Owner Pay .

 Market Rent

 Roll back a batch modification of units' market rent amounts. For more information, refer to Modify Market Rent .

 Owner Payment

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Delete

 For more information, refer to Control User Access .

 Roll back an owner payment distribution. For more information, refer to Pay Owners .

 RUBS

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Rollback RUBS charge postings
 Enabled

 For more information, refer to Control User Access .

 Roll back a ratio utility billing system (RUBS) charge posting. For more information, refer to Post RUBS .

 Reconcile

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Delete

 For more information, refer to Control User Access .

 Roll back a bank or credit card reconciliation, including electronic reconciliations.

 Recurring Journal

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 View, Delete

 For more information, refer to Control User Access .

 Roll back a recurring journal posting. For more information, refer to Post Recurring Journals .

 Task Automation Bill

 Related Privileges

 Group
 Privilege
 Column

 System
 Rollback task automation bills
 Enabled

 For more information, refer to Control User Access .

 Roll back a recurring bill automated posting. For more information, refer to Post Recurring Bills .

 Utility

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Rollback utility readings
 Enabled

 For more information, refer to Control User Access .

 Roll back a utility charge posting. For more information, refer to Post Utilities .

 -
 Review the following columns to ensure the correct entry is rolled back:

 Column
 Description

 Amount

 The total dollar amount of the transactions associated with the posting.

 Created

 The date that the posting was performed by a user.

 ID

 The system-generated ID for the posting.

 Information

 The short name(s) of each property affected by the posting.

 Post Date

 The date that the posting applies to your financial records.

 Post Type

 The type of posting (e.g., Management Fee , Utility , Late Fee ).

 Transactions

 The total number of transactions associated with the posting.

 -
 On the posting that you would like to undo in Rent Manager , click arrow_forward Rollback .
The Rollback pop-up displays.

 -
 Click Yes .
The posting is removed from the page and the charges associated with the posting are removed.
