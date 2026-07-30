# Electronic Bank Reconciliation

Source: https://rmxhelp.rentmanager.com/MicroContent/Resources/MicroContent/Improve-Search/bank-reconciliation.htm

A bank reconciliation is an essential business process that involves comparing your internal financial records in Rent Manager to the financial records provided by your bank in the real world. This ensures that your accounting records are correct and can help you identify any unusual or missing transactions caused by fraud or accounting errors.

 Electronic bank reconciliation is a tool that allows you to import a copy of the transactions from your bank statement into Rent Manager , and it automatically matches transactions on that statement with the related transactions in your database. This provides a side-by-side look at the transactions that impacted your real-world bank and the transactions entered in Rent Manager on the same page. Using this tool reduces the risk of missing data due to switching back and forth between Rent Manager and a paper or digital statement; everything you need to perform a reconciliation is in one place.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add

 For more information, refer to Control User Access .

 Step 1: Prepare the Bank Statement Import File

 Bank statements must be in either a .CSV or .QIF format to be imported into Rent Manager . If you're unable to download your account activity in the correct format, you can ask your bank to send you a copy of your statement in one of these file formats.

 Related Preferences

 If this is your first time importing a .CSV bank statement for electronic reconciliation, you must first enter the format specifications for your bank statements in system preferences so that Rent Manager can accurately read and import the information. For more information, refer to Bank Reconciliation (System Preferences) .

 Step 2 : Import and Match Transactions

 To perform an electronic bank reconciliation, do the following:

 -
 Go to arrow_forward Banking arrow_forward Electronic Bank Reconciliation .
The Electronic Bank Reconcile page displays.

 -
 In the Bank Transactions section, select the Bank account to reconcile from the drop-down list.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 In the Imported Transactions section, click Import CSV or QIF .
The Import File pop-up displays.

 -
 Click to select the bank statement file from your computer and click Import .
The transactions from the bank statement display in the Imported Transactions section. Any matching transactions are automatically checked and marked as Matched .

 More Information

 If, after you already imported a QIF or CSV file, you need to upload a different file, you must first rollback the import transactions posting from the previous bank reconciliation.

 -
 Review your matched transactions. If you need to clear any matched transactions, uncheck the box next to the transaction; the corresponding matched item in the other section then displays as Pending .

 -
 Review the remaining unmatched transactions. To more easily see your unmatched transactions, check Hide All Matches to display only transactions without currently-selected matches.

 -
 Manually match your remaining transactions by checking the box for a transaction in the Bank Transactions section; then check the box for that same transaction in the Imported Transactions section.

 -
 If you are missing transactions in Rent Manager that are on your bank statement, you can click to display additional options to create those transactions in Rent Manager . The following options are available for transactions without matches in Rent Manager :

 Option
 Description

 Make Deposit

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Bank deposits
 Add

 For more information, refer to Control User Access .

 This option is available only for bank deposits.

 Select this option to create a deposit in Rent Manager to match the deposit on your statement. The Bank Account and Deposit Date fields automatically populate with the information from the statement. For more information on creating a deposit, refer to Make a Bank Deposit .

 Write Journal

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 Select this option to create a journal entry in Rent Manager to match the transaction on your statement. The Date and Basis fields automatically populate with the information from the statement. For more information, refer to Journal Details (Page) .

 Write Check

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 View, Add

 For more information, refer to Control User Access .

 Select this option to write a check in Rent Manager to match the transaction on your statement. The Bank Account and Date fields automatically populate with the information from the bank statement. For more information, refer to Check Details (Page) .

 Related Preferences

 If the Enforce sequential check numbers option is enabled in system preferences, the user privilege below must be enabled to edit the check number for the reconciliation.

 Group
 Privilege
 Column

 Banks/Checks
 Override sequential check number enforcement
 Enabled

 For more information, refer to Checks/Bills General (System Preferences) .

 -
 Click Save & Finish when you are finished matching transactions between the two sections.
Alternatively, click Save For Later if you do not wish to complete the process at this time. Matched transactions remain checked when the reconciliation process is resumed.

 Related Privileges

 To open and complete a reconciliation that was saved for later:

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add, Edit

 For more information, refer to Control User Access .

 If you clicked Save & Finish , the Bank Reconcile page displays.

 -
 In the Information section, review the available fields and make adjustments if needed. The following fields are available in this section. The information that displays in the fields is prepopulated from the previous Electronic Bank Reconciliation page where transactions were matched.

 Field
 Description

 Account

 Confirm that you are performing a bank reconciliation with the correct bank account.

 Last Reconcile

 The last date on which this account was reconciled with a bank statement.

 Total Balance

 The total balance of the bank account as of today’s date.

 Cleared Balance

 The amount of the balance that was reconciled with a previous bank statement.

 Ending Balance

 Enter the ending balance listed on your bank statement.

 Reconcile Date

 Confirm that this date is the same as the date of your bank statement.

 Upload Files

 Optionally, click Upload Files to browse your computer for a file to attach to the reconciliation, such as a copy of the bank statement. Any attachments are saved with the reconciliation information and can be accessed from the Reconciles page.

 Step 3 : Add Service Charges

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 After you have finished matching your transactions and reviewed your reconciliation information, you have the option to add service charges as needed to cover additional reconciliation charges, such as bank fees. These fees can be added manually as individual line items, or you can have each line automatically calculated and added based on a total amount using the Disburse Amount option.

 Option 1: Manually Add Service Charges

 To manually add individual service charges, do the following:

 -
 In the Service Charges section, click Add Service Charge .

 -
 In the available columns, enter the information applicable to the service charge. The following columns are available when you add a service charge:

 Column
 Description

 Property

 Select the property to be expensed by the bank.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be expensed by the bank.

 Expense Account

 Select the GL account to track the expense.

 Memo

 Optionally, enter a message providing more detail about this service charge. This text displays in the Memo column of the charge's journal entry. For more information, refer to Journal Details (Page) .

 Date

 Enter or select the date of the expense.

 Amount

 Enter the expense amount of the service charge to allocate to the selected property (and unit, if applicable).

 -
 Add as many lines for additional service charges as needed. Optionally, you can click arrow_forward Duplicate to create a copy of an existing line item, which is added to the list with the same information prepopulated to save time.

 Option 2: Disburse Service Charge Amount

 This option automatically allocates a total amount across each selected property, unit, or GL account as a separate line item. The service charge on each line item is calculated automatically based on the amount total and the number of properties or units being expensed.

 To disburse the amount of the service charge, do the following:

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

 Step 4 : Add Interest

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
 In the available columns, enter the information applicable to the interest transaction. The following columns are available when you add an interest transaction:

 Column
 Description

 Property

 Select the property to be credited by the bank.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be credited by the bank.

 Income Account

 Select the GL account to track the credit.

 Memo

 Optionally, enter a message providing more detail about this interest transaction. This text displays in the Memo column of the journal entry.

 Date

 Enter or select the date of the credit.

 Amount

 Enter the amount of the interest transaction to allocate to the selected property (and unit, if applicable).

 -
 Add as many lines for additional interest transactions as needed. Optionally, you can click arrow_forward Duplicate to create a copy of an existing line item, which is added to the list with the same information prepopulated to save time.

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

 GL Account

 The amount is divided between the GL accounts you select in the next step.

 -
 Enter the needed information into the remaining fields. The fields and their functions vary based on the disbursal Type selected above.

 -
 Click Disburse .
An interest credit is created for each property, unit, or GL account based on your selections.

 Step 5 : Complete Reconciliation

 After matching your transactions and adding any needed interest or service charges, it's time to finish the bank reconciliation. As you do, the Summary section updates with the current information for the reconciliation.

 To complete the reconciliation, do the following:

 -
 After all information is entered on the Bank Reconcile page, click Reconcile .
The final page of the electronic bank reconciliation displays.

 -
 Optionally, check Exclude after reconcile date to remove any transactions from the list that are dated after the Reconcile Date .

 -
 Review the information on the Payments and Deposits tabs. Each transaction that was matched is checked by default and will be cleared when the reconciliation is completed.

 The Payments tab includes checks and journal entries that credited the bank account. The Deposits tab includes bank deposits and journal entries that debited the bank account. There may be intentionally unchecked (unmatched) transactions on either tab that are not part of this reconciliation.

 If there are any unchecked transactions that were missed for this reconciliation, find the associated transaction on your bank statement. Once located, check that matching transaction on the Payments or Deposits tab.

 -
 In the Summary section, review the information. The following fields display in the Summary section:

 Field
 Description

 Cleared Balance

 The current balance of all the checks and deposits that were cleared in the bank register prior to this reconciliation.

 Selected Payments

 The total amount of all payments selected on the Payments tab to be cleared in this reconciliation. The total number of the selected payments displays in parentheses next to the field name.

 Selected Deposits

 The total amount of all deposits selected on the Deposits tab to be cleared in this reconciliation. The total number of the selected deposits displays in parentheses next to the field name.

 Reconciled Balance

 This total becomes the new Cleared Balance for the bank register once you submit this new reconciliation. If the Reconciled Balance matches your Goal , then your register matches your bank statement. This value changes as you clear (by selecting) new payments and deposits on this form.

 Reconciled Balance = Cleared Balance + selected Deposits – selected Payments

 Goal

 The balance on your actual bank statement. The goal of the reconciliation is to get the balance of your cleared register ( Reconciled Balance ) to match your real-world bank balance.

 Difference

 The difference between your Goal and the Reconciled Balance . When the Difference is 0 , you have reached your goal.

 -
 Optionally, in the Summary section, add a Comment with additional details about the reconciliation. The text entered here displays on the Reconciles page in the Comment column for this reconciliation after it is saved or completed.

 -
 Click Finished to complete the reconciliation.
Alternatively, click Save For Later if you do not wish to complete the process at this time. All information and matches are saved and automatically populate when the reconciliation is later resumed.

 Related Privileges

 To open and complete a reconciliation that was saved for later:

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add, Edit

 For more information, refer to Control User Access .
