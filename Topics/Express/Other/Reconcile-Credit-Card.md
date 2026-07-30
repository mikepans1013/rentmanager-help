# Credit Card Reconciliation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reconcile-Credit-Card.htm

A credit card reconciliation is an essential business process that involves comparing your internal financial records in Rent Manager to the financial records provided by your credit card provider in the real world. This ensures that your accounting records are correct and can help you identify any unusual or missing transactions caused by fraud or accounting errors.

 Manual credit card reconciliation involves matching transactions in a real-world credit card statement to credit card transactions entered in Rent Manager for one of your credit cards. When a match is found, you clear the item in Rent Manager to confirm that the transaction also occurred in the real world. The goal is to match every credit card statement transaction to a credit card register transaction in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Edit

 For more information, refer to Control User Access .

 Step 1: Enter Credit Card Account Information

 To perform a credit card reconciliation, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Banking arrow_forward Credit Card Reconcile .
The Credit Card Reconcile page displays.

 -
 In the Information section, select the credit card Account you are reconciling from the drop-down list.

 Related Privileges

 This field populates with only credit cards to which you have access. Your access to credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 The following fields automatically populate with information related to the selected credit card account:

 Field
 Description

 Last Reconcile

 The last date on which this account was reconciled with a credit card statement. If this is the first time the credit card is reconciled in Rent Manager , this field is blank.

 Total Balance

 The total balance of the credit card account as of today’s date.

 Cleared balance

 The amount of the balance that was reconciled with a previous credit card statement. If this is the first time the credit card is reconciled in Rent Manager , this field is blank.

 -
 In the Ending Balance field, enter the final balance on your real-world credit card statement.

 -
 In the Reconcile Date field, enter the date of your real-world credit card statement. Today's date populates by default.

 -
 In the Attachments field, click Upload Files to browse your computer for a file to attach to the reconciliation, such as a copy of the credit card statement. Any attachments are saved with the reconciliation information and can be accessed from the Reconciles page.

 Step 2: Add Service Charges

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Journal entries
 Add, View

 For more information, refer to Control User Access .

 After you have finished matching your transactions and reviewed your reconciliation information, you have the option to add service charges to cover additional reconciliation charges, such as credit card fees. These fees can be added manually as individual line items, or you can have each line automatically calculated and added based on a total amount using the Disburse Amount option.

 Option 1: Manually Add Service Charges

 To manually add individual service charges, do the following:

 -
 In the Service Charges section, click Add Service Charge .

 -
 Enter the following information for each service charge line item:

 Column
 Description

 Property

 Select the property to be expensed by the service charge.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 If applicable, select the unit to be expensed by the service charge.

 Expense Account

 Select the general ledger (GL) account to track the expense.

 Memo

 Optionally, enter a message providing more detail about this service charge. This text displays in the Memo column of the charge's journal entry.

 Date

 Enter or select the date of the expense. Today's date populates by default.

 Amount

 Enter the expense amount of the service charge to allocate to the selected property (and unit, if applicable).

 -
 Add as many lines for additional service charges as needed. To copy details from an existing line item, click arrow_forward Duplicate .

 Option 2: Disburse Service Charge Amount

 This option automatically allocates a total amount across each selected property, unit, or GL account as a separate line item. The service charge on each line item is calculated automatically based on the amount total and the number of properties or units being expensed.

 To disburse the amount of the service charge, do the following:

 -
 In the Service Charges section header, click arrow_forward Disburse Amount .
The Disburse Amount pop-up displays.

 -
 In the Type field, select how the service charges are divided.

 Option
 Description

 Property

 The amount is divided between the properties you select in the next step.

 Unit

 The amount is divided between units you select in the next step for a specific property.

 GL Account

 The amount is divided between the general ledger (GL) accounts you select in the next step.

 -
 Enter the needed information into the remaining fields. The fields and their functions vary based on the disbursal Type selected above. For more information, refer to Disburse Amount .

 -
 Click Disburse .
A service charge line item is created for each property, unit, or GL account based on your selections.

 Step 3: Complete Reconciliation

 After selecting your account information adding any needed service charges, it's time to finish the credit card reconciliation. As you complete the reconciliation, the Summary section updates with the current information for the reconciliation.

 To complete the reconciliation, do the following:

 -
 After all information is entered on the Credit Card Reconcile page, click Reconcile .

 -
 To remove any transactions from the list that are dated after the Reconcile Date , check Exclude after reconcile date .

 -
 Review the information on the Charges and Credits tabs. Each transaction that was matched is checked by default and cleared when the reconciliation is completed. There may be intentionally unchecked (unmatched) transactions on these tabs that are not part of this reconciliation, or there may be transactions on your credit card statement that need to be created in Rent Manager and/or manually matched.

 -
 In the Summary section, review the information. The following fields display in the Summary section:

 Field
 Description

 Cleared Balance

 The current balance of all the charge and credit transactions that were cleared in the credit card register before this reconciliation.

 Selected Charges

 The total amount of all charge transactions selected on the Charges tab to be cleared in this reconciliation. The total number of the selected charges displays in parentheses next to the field name.

 Selected Credits

 The total amount of all credit transactions selected on the Credits tab to be cleared in this reconciliation. The total number of the selected credits displays in parentheses next to the field name.

 Reconciled Balance

 This total becomes the new Cleared Balance for the credit card register after you submit this new reconciliation. If the Reconciled Balance matches your Goal , then your register matches your credit card statement. This value changes as you clear (by selecting) new charges and credits on this form.

 Reconciled Balance = Cleared Balance + Selected Charges – Selected Credits

 Goal

 The balance on your actual credit card statement. The goal of the reconciliation is to get the balance of your cleared register ( Reconciled Balance ) to match your real-world credit card balance.

 Difference

 The difference between your Goal and the Reconciled Balance . When the Difference is 0 , you have reached your goal.

 -
 Add an optional Comment with additional details about the reconciliation. The text entered here displays on the Reconciles page in the Comment column for this reconciliation after it is saved or completed.

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
