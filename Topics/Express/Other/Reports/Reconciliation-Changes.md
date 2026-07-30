# Reconciliation Changes (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Reconciliation-Changes.htm

The Reconciliation Changes report displays information about changes to selected bank or credit card accounts since their most recent bank reconciliation or credit card reconciliation. Run this report to quickly identify discrepancies between your selected accounts in Rent Manager and their real-world counterparts since your last reconciliation in order to accurately perform your next reconciliation.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Reconciliation Changes .

 For more information, refer to Control User Access .

 To view the Reconciliation Changes report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Reconciliation arrow_forward Reconciliation Changes .
The Reports: Reconciliation Changes page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Exclude Accounts With Correct Cleared Balances

 Check to include only banks and/or credit cards whose cleared balances changed since the most recent reconciliation in the report results.

 Accounts

 Check each account to include in the report. Alternatively, choose an account type group from the Group Selection drop-down list to quickly select all accounts of that type. For example, selecting Banks selects all banks in the list.

 Sort Options

 Select one of the following options to determine the order in which the pages of the report generate:

 Option
 Description

 Account Name

 Accounts are sorted alphanumerically by the Name of the general ledger (GL) account.

 Chart Account Order

 Accounts are sorted by the order in which they are listed in the chart of accounts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Change Date

 The date the change was made to the transaction.

 Transaction Type

 The type of each transaction (for example, Check , Deposit , Journal , or Beginning Balance ) that is included in the report.

 Transaction Date

 The date of the transaction as it displays on the Bank Registers page.

 Description

 A brief description of the change to the transaction.

 Changed By

 The name of the user who made the change.

 Amount

 The total value of the transaction.

 Reconcile Date

 The date of the transaction's most recent reconciliation.

 Summary Subreport

 The following fields display in Summary subreport.

 Field
 Description

 Previous Cleared Balance

 The balance of the selected account that was cleared through bank reconciliation or credit card reconciliation on the account's most recent reconciliation date.

 Current Cleared Balance

 The new balance of the selected account following changes to transactions included in the most recent reconciliation.

 Difference

 The amount gained or lost due to the difference between the Previous Cleared Balance and Current Cleared Balance , calculated using the following formula:

 Difference = Current Cleared Balance – Previous Cleared Balance
