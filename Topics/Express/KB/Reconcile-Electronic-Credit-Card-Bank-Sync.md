# Electronic Credit Card Reconciliation with Bank Sync

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Reconcile-Electronic-Credit-Card-Bank-Sync.htm

A credit card reconciliation is an essential business process that involves comparing your internal financial records in Rent Manager to the financial records provided by your credit card provider in the real world. This ensures that your accounting records are correct and can help you identify any unusual or missing transactions caused by fraud or accounting errors.

 Paired with the Bank Sync feature, Rent Manager Express allows you to import your credit card statement directly from the institution without the need to prepare a CSV file. Once the financial records are imported from your statement, the transactions are automatically matched to the related transactions in your database. Fore more information, refer to Set Up Bank Sync .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add

 For more information, refer to Control User Access .

 If you do not use Bank Sync for specific credit card accounts, you can still perform an electronic credit card reconciliation using an imported CSV file. For more information, refer to Electronic Credit Card Reconciliation .

 Step 1 : Import and Match Transactions

 To perform an electronic credit card reconciliation, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Reconciliation arrow_forward Electronic Credit Card Reconciliation .
The Electronic Credit Card Reconcile page displays.

 -
 In the Credit Card Transactions section, select the Credit Card account to reconcile from the drop-down list.

 Related Privileges

 This field populates with only credit cards to which you have access. Your access to credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 In the Imported Transactions section, click Sync Transactions . This option displays only if the selected Credit Card account was set up for Bank Sync. For more information on the setup process, refer to Set Up Bank Sync .
The Sync End Date pop-up displays.

 -
 Enter or select the date of the statement to import. All transaction data is imported from either the last reconciliation date or the general ledger (GL) start date, whichever is more recent.
A pop-up displays indicating that transactions are being imported from the account.

 -
 Once import is complete, the Import Complete pop-up displays how many transactions were imported and matched. Click OK to close the pop-up.
The transactions from the credit card statement display in the Imported Transactions section. Any matching transactions are automatically checked and marked as Matched .

 More Information

 Payment and deposit transactions are automatically matched based on the Amount and closest Date . The date on the Rent Manager transaction must be on or before the imported bank statement's date for that transaction in order to match automatically.

 If there are multiple potential transaction matches, the Reference is also used to determine automatic matches. For payment transactions with no reference number, the name of the vendor in the bank statement description is compared to the payee in Rent Manager to determine the match.

 -
 Review your matched transactions. If you need to clear any matched transactions, uncheck the box next to the transaction; the corresponding matched item in the other section then displays as Pending .

 -
 Review the remaining unmatched transactions. To more easily see your unmatched transactions, check Hide All Matches to display only transactions without currently-selected matches.

 -
 Manually match your remaining transactions by checking the box for a transaction in the Credit Card Transactions section; then check the box for that same transaction in the Imported Transactions section.

 -
 If you are missing transactions in Rent Manager that are on your credit card statement, you can click to display additional options to create those transactions in Rent Manager . The following options are available for transactions without matches in Rent Manager :

 Option
 Description

 Add Credit

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Credit card transactions
 Add, View

 For more information, refer to Control User Access .

 This option is available only for credit transactions.

 Select this option to add a credit in Rent Manager for the credit card. The Credit Card account, Amount , and Date fields automatically populate with the information from the credit card statement, and the Credit option is selected. For more information, refer to Add a Credit Card Transaction .

 Add Charge

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Credit card transactions
 Add, View

 For more information, refer to Control User Access .

 This option is available only for debit transactions.

 Select this option to add a charge in Rent Manager for the credit card. The Credit Card account, Amount , and Date fields automatically populate with the information from the credit card statement, and the Charge option is selected. For more information, refer to Add a Credit Card Transaction .

 Write Check

 Related Privileges

 Group
 Privilege
 Column

 Banks / Checks
 Checks
 View, Add

 Override sequential check number enforcement
 Enabled

 For more information, refer to Control User Access .

 This option is available only for credit transactions.

 Select this option to write a check in Rent Manager to match the transaction on your statement. The Bank , Amount , and Date fields automatically populate with the information from the credit card statement. For more information, refer to Check Details (Page) .

 -
 Click Save & Continue when you are finished matching transactions between the two sections.
Alternatively, click Save if you do not wish to complete the process at this time. Matched transactions remain checked when the reconciliation process is resumed.

 Related Privileges

 To open and complete a reconciliation that was saved for later:

 Group
 Privilege
 Column

 Banks / Checks
 Reconciled transactions
 Add, Edit

 For more information, refer to Control User Access .

 If you clicked Save & Continue , the Credit Card Reconcile page displays.

 -
 In the Information section, review the available fields and make adjustments if needed. The following fields are available in this section. The information that displays in the fields is prepopulated from the previous Electronic Credit Card Reconciliation page where transactions were matched.

 Field
 Description

 Account

 Confirm that you are performing a credit card reconciliation with the correct credit card account.

 Last Reconcile

 The last date on which this account was reconciled with a credit card statement.

 Total Balance

 The total balance of the credit card account as of today’s date.

 Cleared Balance

 The amount of the balance that was reconciled with a previous credit card statement.

 Ending Balance

 Enter the ending balance listed on your credit card statement.

 Reconcile Date

 Confirm that this date is the same as the date of your credit card statement.

 Upload Files

 Optionally, click Upload Files to browse your computer for a file to attach to the reconciliation, such as a copy of the credit card statement. Any attachments are saved with the reconciliation information and can be accessed from the Reconciles page.

 Step 2 : Add Service Charges

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 After you have finished matching your transactions and reviewed your reconciliation information, you have the option to add service charges as needed to cover additional reconciliation charges, such as credit card fees. These fees can be added manually as individual line items, or you can have each line automatically calculated and added based on a total amount using the Disburse Amount option.

 Option 1: Manually Add Service Charges

 To manually add individual service charges, do the following:

 -
 In the Service Charges section, click Add Service Charge .

 -
 In the available columns, enter the information applicable to the service charge. The following columns are available when you add a service charge:

 Column
 Description

 Property

 Select the property to be expensed by the credit card .

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be expensed by the credit card .

 Expense Account

 Select the GL account to track the expense.

 Memo

 Optionally, enter a message providing more detail about this service charge. This text displays in the Memo column of the charge's journal entry.

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

 Step 3 : Complete Reconciliation

 After matching your transactions and adding any needed service charges, it's time to finish the credit card reconciliation. As you complete the reconciliation, the Summary section updates with the current information for the reconciliation.

 To complete the reconciliation, do the following:

 -
 After all information is entered on the Credit Card Reconcile page, click Reconcile .
The final page of the electronic credit card reconciliation displays.

 -
 Optionally, check Exclude after reconcile date to remove any transactions from the list that are dated after the Reconcile Date .

 -
 Review the information on the Charges and Credits tabs. Each transaction that was matched is checked by default and will be cleared when the reconciliation is completed.

 The Charges tab includes charge transactions that debited the credit card account. The Credits tab includes transactions that credited the credit card account. There may be intentionally unchecked (unmatched) transactions on either tab that are not part of this reconciliation.

 If there are any unchecked transactions that were missed for this reconciliation, find the associated transaction on your credit card statement. Once located, check that matching transaction on the Charges or Credits tab.

 -
 In the Summary section, review the information. The following fields display in the Summary section:

 Field
 Description

 Cleared Balance

 The current balance of all the charge and credit transactions that were cleared in the credit card register prior to this reconciliation.

 Selected Charges

 The total amount of all charge transactions selected on the Charges tab to be cleared in this reconciliation. The total number of the selected charges displays in parentheses next to the field name.

 Selected Credits

 The total amount of all credit transactions selected on the Credits tab to be cleared in this reconciliation. The total number of the selected credits displays in parentheses next to the field name.

 Reconciled Balance

 This total becomes the new Cleared Balance for the credit card register once you submit this new reconciliation. If the Reconciled Balance matches your Goal , then your register matches your credit card statement. This value changes as you clear (by selecting) new charges and credits on this form.

 Reconciled Balance = Cleared Balance + selected Charges – selected Credits

 Goal

 The balance on your actual credit card statement. The goal of the reconciliation is to get the balance of your cleared register ( Reconciled Balance ) to match your real-world credit card balance.

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

 Banks / Checks
 Reconciled transactions
 Add, Edit

 For more information, refer to Control User Access .
