# Intercompany Loans

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Loans-Intercompany.htm

An intercompany loan is a debt from one financial entity, such as a property or an owner, to another within the same corporate group, and are used to manage and reallocate cash flow across entities. Intercompany loans should be treated as a loan contract between both entities, and are often repaid with interest. A journal entry can be recorded in Rent Manager to reflect the loan and to maintain accuracy of your financial records.

 More Information

 A less formal real-world money transfer between different properties and their associated bank accounts can be recorded in Rent Manager as a money transfer between properties without the requirement of an intercompany loan. For information, refer to Transfer Money Between Properties .

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 Add, View

 Journal entries
 Add, View

 View journal register
 Enabled

 For more information, refer to Control User Access .

 Step 1: Set Up General Ledger Accounts

 Rent Manager uses double-entry bookkeeping to track all accounting records. Intercompany loans impact your entity's Balance Sheet due to its use of asset and liability accounts general ledger (GL) accounts. If the necessary accounts are not already in your chart of accounts, they need to be added. For more information, refer to Add a General Ledger Account .

 The first step in setting up your intercompany loan workflow is to create and/or establish the GL accounts associated with the participating financial entities. The following GL accounts are necessary for intercompany loans:

 Account
 Description

 Bank

 The bank accounts tied to the properties participating in the intercompany loan. Each participating property must have an operating bank account assigned to it. For more information, refer to Add a Bank Account .

 Due To

 The asset-type GL account of the lending financial entity to record the loan amount that is owed to them. There should be an overall parent account along with subaccounts, where the subaccounts are the property-specific Due To asset GL accounts.

 For example, if the 1400 Due To GL account acts as a parent account, then GL account 1401 represents the Due To asset subaccount tied to the first property.

 Due From

 The liability-type GL account of the borrowing financial entity to record the amount owed to the lender. There should be an overall parent account along with child accounts, where the subaccounts are the property-specific Due From liability GL accounts.

 For example, if the 2200 Due From GL account acts as the parent account, then GL account 2201 represents the Due From liability subaccount tied to the first property.

 Step 2: Create a Journal Entry

 Creating a journal entry is the preferred method of intercompany loans in Rent Manager . A journal entry credits the source account to decrease the balance, and debit the destination account to increase the balance.

 To complete an intercompany loan via a journal entry, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Journals arrow_forward Journals .
The Journals page displays.

 -
 At the top right of the page, click Add Journal .
The Add Journal pop-up displays

 -
 In the top section, enter the applicable information into the following fields:

 Field
 Description

 Date

 The date on which the funds are being transferred.

 Reference

 A number or combination of letters and numbers used to easily identify the journal entry.

 Memo

 A brief note that provides further information about the purpose of the journal entry and/or intercompany loan.

 Basis

 It is recommended that the option Both is selected to ensure that this transaction is included in reports regardless of the selected accounting method.

 -
 In the grid below, click Add Item .
A new row displays in the grid.

 -
 In the columns described below, enter the information to credit (move funds out of) the source bank account of the lender entity. For each row you add, the columns Unit , Job , and Memo are optional, and can be filled out as needed.

 Column
 Description

 Account

 The source bank account tied to the lender entity from which funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The lender entity from which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 The amount of money being transferred out of the lender entity's bank account.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to debit (move funds into) the destination bank account of the borrower entity.

 Column
 Description

 Account

 The destination bank account, tied to the borrower entity, to where the funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The borrower entity to which the funds are being transferred to.

 Debit

 The amount of money being transferred into the destination bank account. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to debit the Due To GL account of the lender entity.

 Column
 Description

 Account

 The Due To asset account tied to the lender entity.

 Property

 The lender entity from which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Debit

 The amount of money being transferred into the destination account.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to credit the Due From GL account of the borrower entity.

 Column
 Description

 Account

 The Due From liability account tied to the borrower entity.

 Property

 The borrower entity from which funds are being transferred.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 The amount of money being transferred out of the source bank account. This must be the same amount entered in the previous row's Debit column to ensure the journal is in balance.

 -
 Click Save .
The journal entry is created and the intercompany loan is documented in Rent Manager .

 Next Steps: Paying off the Loan

 Intercompany loans require formal, possibly interest-bearing repayment, differing from money transfers between different properties.

 Option 1: Journal Entry

 A journal entry can be created to track the payments back to the original lender to pay off the intercompany loan.

 To record the intercompany loan payout with a journal entry, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Journals arrow_forward Journals .
 The Journals page displays.

 -
 At the top right of the page, click Add Journal .
 The Add Journal pop-up displays

 -
 In the top section, enter the applicable information into the following fields:

 Field
 Description

 Date

 The date on which the funds are being transferred.

 Reference

 A number or combination of letters and numbers used to easily identify the journal entry.

 Memo

 A brief note that provides further information about the purpose of the journal entry and/or intercompany loan.

 Basis

 It is recommended that the option Both is selected to ensure that this transaction is included in reports regardless of the selected accounting method.

 -
 In the grid below, click Add Item .
A new row displays in the grid.

 -
 In the columns described below, enter the information to debit (move funds into) the bank account of the lender entity to be paid back.

 Column
 Description

 Account

 The bank account tied to the lender entity that is to be paid back.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The lender entity who is to be paid back.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Debit

 The amount of money being transferred into the lender entity's bank account to pay off the loan.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to credit (move funds out of) the bank account of the borrower entity.

 Column
 Description

 Account

 The destination bank account, tied to the borrower entity, to where the funds are being moved.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Property

 The borrower entity that is paying off the loan.

 Credit

 The amount of money being transferred out of the operating bank account of the borrower entity to pay off the loan. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to credit the Due To GL account of the lender entity.

 Column
 Description

 Account

 The Due To asset account tied to the lender entity.

 Property

 The lender entity who is to be paid back.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Credit

 The amount of money being transferred out of the borrower entity's bank account that is paying off the loan.

 A new blank row should display automatically. If not, click Add Item to add it manually.

 -
 In the same columns for the new row, enter the information to credit the Due From GL account of the borrower entity.

 Column
 Description

 Account

 The Due From liability account tied to the borrower entity.

 Property

 The borrower entity that is paying off the loan.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Debit

 The amount of money being transferred into the lender entity's bank account to pay off the loan. This must be the same amount entered in the previous row's Credit column to ensure the journal is in balance.

 -
 The columns Unit , Job , and Memo are optional, and can be filled out as needed.

 -
 Click Save .
The journal entry is created to document the intercompany loan pay off.

 Option 2: Add and Pay Bill and Make Deposit

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bill register
 Enabled

 Payables
 Bills
 Add, View

 Allow user to pay bills
 Enabled

 Banks/Checks
 Step three deposits
 Add

 For more information, refer to Control User Access .

 A vendor/owner bill can be added and paid to show the process of paying off the intercompany loan.

 To pay off the intercompany loan by adding and paying a bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Bills .
The Bills page displays.

 -
 At the top right of the page, click Add Bill .
The Add Bill pop-up displays.

 -
 In the Vendor field, select the lender entity from the drop-down list.

 -
 In the Default Bank field, select the bank account that is used to pay the lender entity.

 -
 Enter bill and payment details at the top of the pop-up. For more information, refer to Add a One-Time Vendor/Owner Bill .

 -
 Enter information about the line item(s) that are being billed to the borrower entity.

 Column
 Description

 1099

 Check this option if this line item should be reported as a 1099 expense for self-employed individuals (such as independent contractors, consultants, and so on).

 Amount

 The dollar amount expensed for this line item only.

 Once an Amount is added for all line items, you can click at the top of the page next to the Amount field to populate the total of all line item amounts in this section.

 Expense Account

 The Due From liability GL account of the borrower entity.

 For example, if this line item is to pay off the intercompany loan example described in Step 2: Create a Journal Entry , you would select the 2201 Due From Clearcreek liability account as shown in the image above.

 Job

 If applicable, the job-costing project with which this intercompany loan is associated. If this expense is not tied to a project or the project is not being tracked in Rent Manager 's job costing tool, leave this field blank.

 For example, if you are tracking a renovation project in Rent Manager and this bill is from a vendor assisting with those renovations, select that job from the list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note that provides further context for this expense or intercompany loan.

 Property

 The borrower entity to be expensed.

 For example, if this line item is to pay off the intercompany loan example described in Step 2: Create a Journal Entry , you would select the Clearcreek Condominiums property.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, the specific unit with which the intercompany loan is associated. This field is typically left blank for intercompany loan pay offs.

 -
 Click Save .
The bill is created and its details page displays.

 -
 Once the bill is saved, it can be paid, decreasing the borrower entity's Due From liability account. For more information refer to Pay Bills .

 -
 Make a bank deposit for the lender entity by clicking Add Other Income on the Make Deposit page. Select the lender entity from the Property drop-down list and select the lender entity's Due To asset account from the Income Account drop-down list. For more information, refer to Add Other Income to a Deposit .
Once the bill is paid and the bank deposit is made, the intercompany loan payout is documented in Rent Manager .
