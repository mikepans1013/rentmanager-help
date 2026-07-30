# Bank Reconciliation (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Bank-Reconciliation.htm

The Bank Reconciliation report displays a list of the payments, journal entries, and deposits cleared when a user performs a bank reconciliation. The report also displays the cleared and actual bank balances as of the reconciliation date and the totals of the cleared payments and deposits.

 Additionally, you can select Saved Report or Live Report . The saved version of the report is what is created at the time the user finishes the bank reconciliation and the report results are saved as a PDF. The live version of the report displays any transaction items that were edited or deleted after the reconciliation. As a result, the live version of the report may not match the saved version.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Bank Reconciliations .

 For more information, refer to Control User Access .

 To view the Bank Reconciliation report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Reconciliation arrow_forward Bank Reconciliation .
The Reports: Bank Reconciliation page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Bank

 Select the bank account for which Rent Manager examines reconciliation data.

 Reconcile

 Select the desired reconciliation date from the drop-down list and then choose one of the following report types:

 Option
 Description

 Live Report

 A current version of the reconciliation data, which includes any edits and deletions made to transaction items that occurred after the reconciliation displays. This version of the report may not match the saved version.

 Saved Report

 The static version of the report that was created at the time the user completed the reconciliation. This version excludes any edits or deletions made to transaction items after the reconciliation displays.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Deposits

 The journal entries that debited the bank account and/or deposits that were reconciled during the selected bank reconciliation period display.

 Payments

 The journal entries that credited the bank account and/or payments that were reconciled during the selected bank reconciliation period display.

 Outstanding Deposits

 Any journal entries that debited the bank account and/or deposits that were created in Rent Manager but not reconciled yet. This section displays only if the Saved Report report option is selected.

 Outstanding Payments

 Any journal entries that credited the bank account and/or payments that were created in Rent Manager but not reconciled yet. This section displays only if the Saved Report report option is selected.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date of each transaction.

 Reference

 The system-generated reference number for each payment, journal entry, or the deposit number created for each deposit.

 Details

 The name of the payee associated with each payment. Bank Deposit displays for deposits. Journal displays for journals entries.

 Amount

 The amount for each payment, journal entry, or deposit. A subtotal displays at the bottom of each section.

 Summary Subreport

 The Summary subreport provides two columns of information to help you see the impact of the reconciliation on your bank account. This subreport displays the bank balances at the time of the selected bank reconciliation and the current values of payments, deposits, and journal entries.

 The following rows display in the Original Values section:

 Row
 Description

 Beginning Balance

 The cleared balance as of the previous bank reconciliation.

 Selected Deposits

 The total of the selected journal entries that debited the bank account and/or deposits reconciled during the selected bank reconciliation period. The total number of selected deposits appears in parentheses.

 Selected Payments

 The total of the selected journal entries that credited the bank account and/or payments reconciled during the selected bank reconciliation period. The total number of selected payments appears in parentheses.

 Ending Balance

 The bank balance after the reconciliation has taken place using the following formula:

 Ending Balance = Reconciled Balance + Previous Cleared Balance + Selected Deposits - Selected Payments

 The amount that displays should match the ending bank balance on your bank statement and is the new cleared bank balance.

 Goal

 The Ending Balance entered on the bank reconciliation for your reference. The number entered should match the total of the payments, journal entries, and deposits that appear on your bank statement.

 Difference

 Any difference between the Reconciled Balance and the Goal . Ideally, the Difference is 0 , meaning that your bank account and the Rent Manager bank balance are in agreement.

 The following rows display in the Current Values section:

 Row
 Description

 Deposits

 The total of all deposits and/or journal entries that debited the bank account in the bank reconciliation. This total includes any changes that were made to the deposits since the bank reconciliation was completed.

 Payments

 The total of all payments and/or journal entries that credited the bank account in the bank reconciliation. This total includes any changes that were made to the payments since the bank reconciliation was completed.

 Balance

 The difference between the Deposits and Payments for the selected bank reconciliation period.
