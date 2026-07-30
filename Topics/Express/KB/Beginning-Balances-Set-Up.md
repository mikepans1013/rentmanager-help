# Set Up Beginning Balances for a New Property Acquisition

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Beginning-Balances-Set-Up.htm

Beginning balances allow you to enter the complete financial position of your business prior to when you started using Rent Manager . This ensures that your Rent Manager reports (such as the General Ledger ) and bank balances precisely reflect the financial status of your properties and tenants. Whenever you acquire a new property, you similarly need to establish the starting financial status of that new property within Rent Manager . Setting up the beginning balances for a new property acquisition ensures that the property's bank balances and financial reports are accurate.

 More Information

 This topic guides you through the general process for setting up your beginning balances after acquiring a new property. If you would like a more detailed, step-by-step walkthrough, you can take the course for setting up your new property beginning balances on Rent Manager University (RMU) .

 Warning

 Please work with your accountant to ensure that all your financial information is carefully and accurately recorded.

 Step 1: Gather Your Information

 Before entering your beginning balances, be sure you gather the necessary documents that reflect the current financial state for the property you are adding.

 More Information

 Before you can enter the beginning balance and financial information for your property, that property must be created in  Rent Manager . For more information, refer to Add a Property .

 The information you need is described in the table below.

 Information
 Description

 Accounting Basis

 Confirm whether the new property uses cash or accrual basis accounting. It is recommended you enter the balances for both accounting methods.

 Outstanding Tenant Charges and Prepayments

 Records of any outstanding charges (such as unpaid rent or late fees) and prepayments (such as rent paid in advance) for all tenants at the property.

 Property GL Account Balances

 The general ledger (GL) account balances for each property you are acquiring. This can generally be retrieved from your previous software's Trial Balance report (or equivalent), but can also be pulled from your property's bank statements as an alternative method.

 Tenant Security Deposits

 The total amounts for your tenant security deposits currently held in your bank. Ensure that you account for whether or not these deposits are held in a separate trust account.

 Uncleared Checks and Deposits

 Any checks or deposits associated with the property that have not cleared the bank before the acquisition date. This ensures your next reconciliation has all the necessary information documented in Rent Manager .

 Unpaid Bills

 Any bills associated with the property that have not yet been paid, including partially paid bills.

 Step 2: Create Beginning Balance Journals

 It is best practice to use journal entries to establish your beginning balances for any newly acquired properties. Unless your accountant recommends otherwise, you should enter values for all GL accounts with a balance. If your property uses accrual-based accounting, you should enter balances for both accounts receivable (AR) and accounts payable (AP).

 More Information

 For new property acquisitions, you will not use the Beginning Balances page because this page is only used during implementation when you first start using Rent Manager . Instead, you will create journal entries to set the financial starting point for the new property because this allows you to properly date the acquisition, where the Beginning Balances page uses the system's GL start date established in system preferences.

 There are two ways to enter your balances via journal entries: manually or via importing. The date of your journal entry should be the property's acquisition date.

 Option
 Description

 Manual Journal Entries

 Create a journal entry to establish the finances of the property's GL accounts. For more information, refer to Add a Journal Entry .

 Import Journals

 If you have a large amount of financial history to add, you can import a journal entry as a more efficient way to upload the data. You can create one spreadsheet for each new property's GL account balances and import it all at once. For more information, refer to Import Journals .

 Verify Your GL Balances

 After adding your beginning balance journal entries, you must verify that the information was properly imported using three methods.

 Method
 Description

 Bank Register

 From your bank register, verify that the property's total bank balance is correct.

 Warning

 The journal entry you created is not a transaction, therefore it will not appear on a bank statement as a transaction to reconcile. You must manually clear the journal entry from the bank register by clicking arrow_forward Mark as reconciled .

 Balance Sheet

 Generate the Balance Sheet as of the date of your property acquisition (as recorded on your journal entry). From there, verify that the financial information on this report matches up with your records (such as the Trial Balance report from your prior software). For more information, refer to Balance Sheet (Report) .

 Profit & Loss

 If you entered any income or expenses as part of your beginning balance amounts, run the Profit & Loss report for the property acquisition date to verify those amounts. For more information, refer to Profit & Loss (Report) .

 Step 3: Enter Tenant Transactions

 All GL balances entered via journal entries show only on financial statements, not tenant reports (such as the Aged Receivables or Security Deposit Listing ) and not on your tenants' transactions pages. You do not need to add every transaction ever recorded on your tenant accounts, but do need to add the following transactions:

 -
 Security Deposits

 -
 Unpaid (or partially paid) Charges

 -
 Unapplied Payments or Prepayments

 Security Deposits

 There are two ways to add security deposits: manually or via importing. Your security deposits should have the option Deposit Prior to GL Start Date selected to create both a charge and credit without recording the liability twice.

 Option
 Description

 Manual Security Deposit Entry

 You can opt to manually add a security deposit to each of your tenant accounts individually. This may be ideal if you are adding a small property or a property that currently has low occupancy. For more information, refer to Add a Previously Held Security Deposit .

 Import Security Deposits

 If you have not yet added the tenants for your property, the easiest way to add security deposits is to import your tenants and their security deposit simultaneously. If you have already added your tenants to the property in Rent Manager , you can use the importing tool to update existing tenant accounts with their security deposit information. For more information, refer to Import Tenants .

 More Information

 After entering your security deposits, you should run the Security Deposit Listing and Balance Sheet reports for the property's acquisition date. Then compare the total amount held on the Security Deposit Listing to the total security deposit liability on the Balance Sheet to ensure the amounts match. For more information, refer to Security Deposit Listing and Balance Sheet .

 Unpaid Charges

 Adding your tenants' unpaid or partially paid charges allows you to properly record your delinquent charges and accurately track when these charges were paid and how long they were outstanding.

 There are two ways to add outstanding charges: manually or via importing. You should use the designated charge type for each charge and they should all be dated for the date on which they were posted.

 Option
 Description

 Manual Charge Entry

 You can opt to manually add open charges to each tenant account. This may be ideal if most of your tenants do not have an outstanding balance owed and you only need to add a few outstanding transactions. For more information, refer to Add a One-Time Charge .

 Import Charges

 If you have a large number of open charges to add, it may be more efficient to import them from a single spreadsheet. For more information, refer to Import Charges .

 Accrual Accounting: Correct the Duplication

 If this newly acquired property uses accrual-basis accounting, your accounts receivable amounts were already included in your initial journal entry. As a result, adding the open charges duplicates the accounts receivable amount on your financial reports.

 To correct this duplication, do the following:

 -
 Run the Balance Sheet and Delinquency reports as of the property acquisition date. For more information, refer to Balance Sheet (Report) and Delinquency (Report) .

 -
 Compare the AR total amount on the Balance Sheet to the total amount delinquent on the Delinquency report. Note that the amount on the Balance Sheet is double the delinquent amount.

 -
 Create a journal entry to offset the duplication. For more information, refer to Add a Journal Entry . Your journal entry should include the following information:

 Field
 Description

 Reference

 A note that provides context for the journal, such as AR Correction - Property Acquisition .

 Date

 The date on which the charge was posted.

 Basis

 The best practice is to select Both .

 Account

 The GL accounts being effected by the open charges you added.

 Property

 The newly acquired property.

 Debit

 The charge's income account's amount to correct.

 Credit

 The Accounts Receivable GL account's amount to correct.

 -
 After creating the journal entry, run both reports again and verify that the amounts now match.

 Prepayments

 If any tenants have prepayments or unapplied payments, these must be added in Rent Manager on the tenant account to account for credit balances.

 Warning

 All prepayments entered as beginning balances should be entered using a beginning balance prepay charge type. If you do not already have a charge type set up for your prepay beginning balances, you must create one. For more information, refer to Add a Charge Type .

 There are two ways to add prepayments: manually or via importing. You should use the designated charge type for each prepayment and they should all be dated for the date on which they were posted.

 Option
 Description

 Manual Prepayment Entry

 You can opt to manually add prepayments to each tenant account. This may be ideal if most of your tenants do not pay ahead of time and you only need to add a few prepayments. For more information, refer to Add a Prepayment .

 Import Charges

 If you have a large number of prepayments to add, it may be more efficient to import them from a single spreadsheet. This process is mostly the same as importing charges, except the amounts should be added as negative amounts. For example, to record a prepayment for $100, you would import a charge with an amount of -100 . For more information, refer to Import Charges .

 More Information

 After adding your prepayments, you should run the Credit Detail report for your beginning balance prepayment charge type and the Balance Sheet for the property acquisition date. Then verify that the Amount Credited on the Credit Detail report matches the Unearned Income amount on the Balance Sheet . For more information, refer to Credit Detail (Report) and Balance Sheet (Report) .

 Step 4: Add Unpaid Bills

 Adding unpaid bills is critical for accrual-basis properties because when those bills are paid, the associated beginning balance entry for your accounts payable account is zeroed out. For cash-basis properties, entering unpaid bills can still be a helpful tool to give you an idea of your upcoming expenses.

 There are two ways to add unpaid bills: manually or via importing. The dates for your bills (such as the bill date and due date) should reflect the dates on the bill in the real world.

 Option
 Description

 Manual Bill Entry

 You can opt to manually add bills individually. This may be ideal if you only have a few outstanding bills. For more information, refer to Add a One-Time Tenant/Prospect Bill and Add a One-Time Vendor/Owner Bill .

 Import Bills

 If you have a large number of open bills to add, it may be more efficient to import them from a single spreadsheet. For more information, refer to Import Bills .

 Step 5: Add Uncleared Checks and Deposits

 Checks and deposits from the property's bank should have already been accounted for in your beginning bank balances, but if any of these transactions have not yet cleared the bank account, they will need to be included in a future bank reconciliation. This means these uncleared transactions must be entered so they can be reconciled without duplicating your established beginning balances. Uncleared checks and deposits are also known as looped checks and deposits.

 Add Uncleared Checks

 To add an uncleared check for the newly acquired property, do the following:

 -
 Go to   arrow_forward Payables arrow_forward Checks arrow_forward Write Check .
The Write Check pop-up displays.

 -
 In the top tile for the check, enter the general check information as it reflects the check in real life. For more information, refer to Write a Vendor/Owner Check .

 -
 In the grid below, enter the following information into the available columns:

 Column
 Description

 Property

 The newly acquired property associated with the check.

 Expense Account

 The same bank that money is being pulled from, as entered in the Bank field at the top of the check. This "loops" the money out of the bank and back in, allowing you to reconcile the transaction later without duplicating your financial information.

 Warning

 Looped checks should be used only for beginning balances during a new property acquisition. Any checks written in the future should be expensed to the proper expense account to properly track your finances.

 Amount

 The dollar amount the check is written for.

 -
 Click Save & Close .
The looped check is created.

 -
 Repeat for each uncleared check.

 -
 Go to   arrow_forward Accounting arrow_forward Banking arrow_forward Bank Register and select the property's bank account.

 -
 For each looped check with an amount in the Deposit column, click arrow_forward Mark as reconciled .
The looped check is now recorded without affecting your beginning balances, and can be cleared as normal during your next bank reconciliation.

 Add Uncleared Deposits

 To add an uncleared deposit for the newly acquired property, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward Banking arrow_forward Make Deposit .
The Make Deposit page displays.

 -
 In the Properties field, select the newly acquired property.

 -
 Verify that there are no payments in the list to deposit. If any payments display, first deposit them as normal before proceeding. For more information, refer to Make a Bank Deposit .

 -
 Click Add Other Income .
The Other Income tile displays at the top.

 -
 In the Other Income tile, enter the following information into the available columns:

 Column
 Description

 Property

 The newly acquired property associated with the deposit.

 Income Account

 The same bank that money was deposited into. This "loops" the money out of the bank and back in, allowing you to reconcile the transaction later without duplicating your financial information.

 Warning

 Looped deposits should be used only for beginning balances during a new property acquisition. Any deposits made in the future should select the relevant income account to properly track your finances.

 Amount

 The dollar amount of the property's deposit.

 -
 Click Deposit .
The Deposit Information pop-up displays.

 -
 In the Bank field, select the same bank account that you selected in the Income Account column.

 -
 In the remaining fields, enter the general deposit information as it reflects the deposit in real life. For more information, refer to Add Other Income to a Deposit .

 -
 Click Deposit .
The looped deposit is created.

 -
 Repeat for each uncleared deposit.

 -
 Go to   arrow_forward Accounting arrow_forward Banking arrow_forward Bank Register and select the property's bank account.

 -
 For each looped deposit with an amount in the Payment column, click arrow_forward Mark as reconciled .
The looped deposit is now recorded without affecting your beginning balances, and can be cleared as normal during your next bank reconciliation.
