# Bank Reconcile

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reconcile-Bank.htm

A bank reconciliation is an essential business process that involves comparing your internal financial records in Rent Manager to the financial records provided by your bank in the real world. This ensures that your accounting records are correct and can help you identify any unusual or missing transactions caused by fraud or accounting errors.

 Manual bank reconciliation involves matching transactions in a real-world bank statement to transaction items entered in Rent Manager for one of your banks. When a match is found, you clear the item in Rent Manager to confirm that the transaction also occurred in the real world. The goal is to match every bank statement transaction to a bank register transaction in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add

 For more information, refer to Control User Access .

 To perform a bank reconciliation, go to arrow_forward Accounting arrow_forward Banking arrow_forward Bank Reconcile .

 Step 1: Enter Bank Account Information

 In the Information section, do the following:

 -
 In the Account field, select the bank account you are reconciling from the drop-down list.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 The following fields automatically populate with information related to the selected bank account.

 Field
 Description

 Cleared balance

 The total dollar amount that was already reconciled with a previous bank statement for this account.

 Last Reconcile

 The date on which this bank account was most recently reconciled.

 Total Balance

 The total dollar amount of the bank's balance as it displays on the Bank Registers page.

 -
 In the Ending Balance , enter the final bank balance amount that displays on your actual bank statement.

 -
 In the Reconcile Date field, enter the date that displays on your actual bank statement.

 -
 In the Attachments field, click Upload Files and attach a document or image to the reconciliation, such as a scan of the bank statement.

 Step 2: Add Service Charges

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 After you have selected a bank account and reviewed your reconciliation information, you have the option to add service charges as needed to cover additional reconciliation charges, such as bank fees. These fees can be added manually as individual line items, or you can have each line automatically calculated and added based on a total amount using the Disburse Amount option.

 Option 1: Manually Add Service Charges

 To manually add service charges, do the following:

 -
 In the Service Charges section, click Add Service Charge .

 -
 Enter the information applicable to the service charge in the columns described below.

 Column
 Description

 Property

 Select the property to be expensed by the bank.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be expensed by the bank.

 Expense Account

 Select the general ledger (GL) account to track the expense.

 Memo

 Enter an optional message providing more detail about this service charge. This text displays in the Memo column of the charge's journal entry.

 Date

 Enter or select the date of the expense.

 Amount

 Enter the dollar amount of the service charge to allocate to the selected property (and unit, if applicable).

 -
 Add as many lines for additional service charges as needed. Optionally, you can click arrow_forward Copy Down to create a copy of an existing line item, which is added to the list with the same information prepopulated to save time.

 Option 2: Disburse Service Charge Amount

 This option automatically allocates a total amount across each selected property, unit, or GL account as a separate line item. The service charge on each line item is calculated automatically based on the amount total and the number of properties or units being expensed.

 To disburse the amount of service charges, do the following:

 -
 In the Service Charges section header, click arrow_forward Disburse Amount .
The Disburse Amount pop-up displays.

 -
 In the Type field, select how the service charges should be divided.

 Option
 Description

 Property

 The amount is divided between the properties you select in the next step.

 Unit

 The amount is divided between units you select in the next step for a specific property.

 GL Account

 The amount is divided between the GL accounts you select in the next step.

 -
 Enter the needed information into the remaining fields. The fields and their functions vary based on the disbursal Type selected above.

 -
 Click Disburse .
A service charge line item is created for each property, unit, or GL account based on your selections.

 Step 3: Add Interest

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 If needed, you have the option to add additional interest transactions to the reconciliation. This can be useful if the bank account pays interest on checking account balances, but it is not displayed on the bank statement. These interest transactions can be added manually as individual line items, or you can have each line automatically calculated and added based on a total amount using the Disburse Amount option.

 Option 1: Manually Add Interest

 To manually add individual interest transactions, do the following:

 -
 In the Interest section, click Add Interest Income .

 -
 Enter the information applicable to the interest transaction in the columns described below.

 Column
 Description

 Property

 Select the property to be credited by the bank.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be credited by the bank.

 Income Account

 Select the general ledger (GL) account to track the credit.

 Memo

 Enter an optional message providing more detail about this service charge. This text displays in the Memo column of the charge's journal entry.

 Date

 Enter or select the date of the credit.

 Amount

 Enter the amount of the interest transaction to allocate to the selected property (and unit, if applicable).

 -
 Add as many lines for additional interest transactions as needed. Optionally, you can click arrow_forward Copy Down to create a copy of an existing line item, which is added to the list with the same information prepopulated to save time.

 Option 2: Disburse Interest Amount

 This option automatically allocates a total amount across each selected property, unit, or GL account as a separate line item. The interest transaction on each line item is calculated automatically based on the amount total and the number of properties or units being credited.

 To disburse the amount of bank interest, do the following:

 -
 In the Interest section header, click arrow_forward Disburse Amount .
The Disburse Amount pop-up displays.

 -
 In the Type field, select how the interest should be divided.

 Option
 Description

 Property

 The amount is divided between the properties you select in the next step.

 Unit

 The amount is divided between units you select in the next step for a specific property.

 GL Account

 The amount is divided between the GL accounts you select in the next step.

 -
 Enter the needed information into the remaining fields. The fields and their functions vary based on the disbursal Type selected above.

 -
 Click Disburse .
An interest credit is created for each property, unit, or GL account based on your selections.

 Step 4: Complete Reconciliation

 After adding any needed interest or service charges, it's time to finish the bank reconciliation. The Summary section updates with the current information for the reconciliation.

 To complete the reconciliation, do the following:

 -
 After all information is entered on the Bank Reconcile page, click Reconcile .

 -
 If you wish to remove any transactions from the list that are dated after the Reconcile Date , check Exclude after reconcile date .

 -
 Review your bank statement and locate the matching Rent Manager transaction on either the Payments tab or the Deposit tab, then check the box next to those transactions.

 More Information

 The Payments tab includes checks and journal entries that credited the bank account. The Deposits tab includes bank deposits and journal entries that debited the bank account. There may be intentionally unchecked (unmatched) transactions on either tab that are not part of this reconciliation.

 If there are any unchecked transactions that were missed for this reconciliation, find the associated transaction on your bank statement. Once located, check that matching transaction on the Payments or Deposits tab.

 -
 In the Summary section, review the information.

 Field
 Description

 Cleared Balance

 The current balance of all the checks and deposits that were cleared in a previous bank reconciliation or on the Bank Registers page prior to this reconciliation.

 Selected Payments

 The total dollar amount of all payments selected on the Payments tab to be cleared in this reconciliation. The number of selected payments displays in parentheses next to the field name.

 Selected Deposits

 The total dollar amount of all deposits selected on the Deposits tab to be cleared in this reconciliation. The number of selected deposits displays in parentheses next to the field name.

 Reconciled Balance

 This total becomes the new Cleared Balance for the bank register once you submit this new reconciliation. If the Reconciled Balance matches your Goal , then your register matches your bank statement. This value changes as you select new payments and deposits to be cleared on this form.

 Reconciled Balance = Cleared Balance + selected Deposits – selected Payments

 Goal

 The balance on your actual bank statement. The goal of the reconciliation is to get the balance of your cleared register ( Reconciled Balance ) to match your real-world bank balance.

 Difference

 The difference between your Goal and the Reconciled Balance . When the Difference is 0 , you have reached your goal.

 -
 In the Comment field, add an optional note with additional details about the reconciliation. The text entered here displays on the Reconciles page in the Comment column for this reconciliation after it is saved or completed.

 -
 Click Finished to complete the reconciliation.
Alternatively, click Save For Later if you do not wish to complete the process at this time. All information and matches are saved and automatically populate when the reconciliation is resumed.

 If you wish to open and complete a reconciliation that was saved for later, the following privileges are required:

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add, Edit

 For more information, refer to Control User Access .
