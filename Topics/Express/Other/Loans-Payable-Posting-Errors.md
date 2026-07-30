# Resolve Errors That May Occur When Posting Loans Payable

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Loans-Payable-Posting-Errors.htm

When posting loans payable, Rent Manager records payments from the responsible properties—using journals or checks—as of the loan due dates. If there are conflicting settings or missing permissions when you attempt to post loans payable, you may encounter errors or warning messages when you post your loans payable. If you receive a pop-up warning or error, review the headings below for more information on the pop-up message and steps on how to resolve it.

 More Information

 If you need further assistance in trying to resolve any of these errors or warnings, please contact our support team at 800-669-0871 or support@rentmanager.com .

 Add Checks Privilege

 I received a pop-up warning that I don't have permission to write checks.

 Resolution:

 This indicates that the user account you are logged in as does not have the proper privileges to post the loan(s) payable, which involves writing a check to the vendor(s). To resolve this issue, contact your administrator or manager about getting access to the required privilege listed below.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 Budget Exceeded

 I received a pop-up warning that the budget has been exceeded.

 Resolution:

 This warning pop-up does not prevent you from posting your loans payable, but warns you that the posted payment will put you over the monthly budgeted amount for that property for the related general ledger (GL) accounts. This warning displays if you paid the loan by check and exceeded the budget by the percentage amount established in system preferences.

 To review your budgets, go to arrow_forward Accounting arrow_forward Accounting Setup arrow_forward General arrow_forward Budget and select the Property that triggered the warning pop-up. Here, you can review the monthly budgeted amounts for the GL account(s) used to make the loan payment. For more information, refer to Budget (Page) .

 Related Preferences

 This warning occurs only if the amount exceeded meets the percentage set in your system preferences in the Percentage to begin budget warnings field, and the option Checks is selected in the Transactions to consider budget percentage warnings field below. For more information, refer to Budget (System Preferences) .

 Check Number Preference

 I received a pop-up stating that I need to update the check number preference.

 Resolution:

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 This error generally only occurs if this is the first time you are writing a check from a bank account and have not established the starting check number in system preferences.

 To resolve this issue, go to arrow_forward Administration arrow_forward Preferences arrow_forward System Preferences arrow_forward Checks/Bills arrow_forward Check Numbers and add the first check number to use in the Next Check # column for the bank account associated with the loan.

 Duplicate Check Number

 I received a pop-up warning about the check number being a duplicate.

 Resolution:

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 This can occur if sequential check numbers are not enforced in system preferences, allowing a check number to be automatically chosen for the loan posting even if it was already used in Rent Manager before. To prevent and resolve this issue, do the following:

 -
 Go to arrow_forward Administration arrow_forward Preferences arrow_forward System Preferences arrow_forward Checks/Bills arrow_forward General .
The System Preferences: Checks/Bills - General page displays.

 -
 In the General section, check the Enforce sequential check numbers option.

 -
 Click Save .

 -
 Try to post the payable loan again.

 If needed, the check number for the payment can be manually edited from the check's details after posting. To view the loan payment's check, go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan. The check can be found on the Transaction & Amortization tile.

 Future Date

 I received a pop-up warning about a future date error.

 Resolution:

 Loan payment dates can be scheduled in the future, but there is a limit. You can post a loan's Payment Date up until the day before the next scheduled payment date, but not on or after. For example, if today is the 19th of the month and the next loan payment date is the 25th, you can post a loan payment for any time through the 24th.

 Hard Close

 I received a pop-up warning about the hard close date.

 Resolution:

 If the books are closed for the accounting period, users can no longer add, edit, or delete transactions in that period. This includes posting loan payments. If the hard close date has passed and the Payment Date column to a prior date in the closed accounting period, you are unable to post the loan payment. Accounting close dates are set at the system level in system preferences, but some properties may also have their own accounting close settings that differ from system preferences. For more information, refer to Property Accounting Close (Pop-Up) and Accounting Close (System Preferences) .

 This warning can be overridden only by users with the privilege listed below. This privilege is generally restricted to administrative roles.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Override accounting close date
 Enabled

 For more information, refer to Control User Access .

 Owner Overdraft

 I received a pop-up warning about an owner overdraft for one or more properties.

 Resolution:

 This warning pop-up displays if owner overdraft is enabled in system preferences and you overdraft the owner's finances. These system preferences also determine what causes and overdraft (such as a zero balance, reserve amount, security deposits held, etc.). You can set this warning to be overridden by a user or set it to prevent them from posting entirely. For more information, refer to Owner Overdraft (System Preferences) .

 Invalid GL Account

 I received a pop-up warning about an invalid GL account.

 Resolution:

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Payables
 Loans Payable
 View, Edit

 For more information, refer to Control User Access .

 This warning displays if the loan's property does not have access to the loan's selected bank account. This warning cannot be overridden. To resolve this issue, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property associated with the payable loan.
The property's details page displays.

 -
 On the Other Information tile's Bank Settings field, take note of which banks are selected.

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan.
The loan's details page displays.

 -
 In the Chart Accounts section's Bank Account field, take note of which bank is selected.

 -
 Determine which bank is correct. If the loan's bank is correct, add that bank account to the property's Bank Settings field. Otherwise, update the loan's selected Bank Account .

 -
 Click Save .

 -
 Try to post the payable loan again.

 Property Default Bank

 I received a pop-up warning about the property default bank.

 Resolution:

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Payables
 Loans Payable
 View, Edit

 For more information, refer to Control User Access .

 This warning displays if the loan's selected bank account does not match the default bank account of the loan's property. You can proceed with posting despite the warning, but if you wish to correct the default bank, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property associated with the payable loan.
The property's details page displays.

 -
 On the Other Information tile's Default Bank field, take note of which bank is selected.

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Loans Payable and select the loan.
The loan's details page displays.

 -
 In the Chart Accounts section's Bank Account field, take note of which bank is selected.

 -
 Determine which bank is correct and for whichever location (loan or property) has the incorrect bank selected, update the selection.

 -
 Click Save .

 -
 Post the payable loan again.
