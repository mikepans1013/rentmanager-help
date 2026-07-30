# Reconciliation Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Reconciliation-Listing.htm

The Reconciliation Listing report displays information about the most recent bank reconciliation or credit card reconciliation performed on the selected bank or credit card accounts as of a selected date. This report is valuable for administrators, as you can quickly and easily review bank and credit card reconciliations that were performed.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Reconciliation Listing .

 For more information, refer to Control User Access .

 To view the Reconciliation Listing report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Reconciliation arrow_forward Reconciliation Listing .
The Reports: Reconciliation Listing page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Accounts

 Check each account to include in the report. Alternatively, choose an account type group from the Group Selection drop-down list to quickly select all accounts of that type. For example, selecting Banks selects all banks in the list.

 Sort Options

 Select one of the following options to determine how the report results are organized in each account type subheading:

 Option
 Description

 Account Name

 Accounts are sorted alphanumerically by the name of the general ledger (GL) account.

 Chart Account Order

 Accounts are sorted by the order in which they are listed in the chart of accounts.

 Reconcile Date

 Accounts are sorted chronologically by the reconcile date in ascending order (oldest to newest). Accounts with no reconcile date display first in the results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Acc. #

 The general ledger (GL) account number of each bank or credit card account.

 Account Name

 The name of each bank or credit card account.

 Reconcile Date

 The date on which the most recent reconciliation was performed.

 Previous Cleared Balance

 The balance of the account that was cleared through bank reconciliation or credit card reconciliation on the account's most recent reconciliation date.

 Reconciled Balance

 The new balance of the account after transactions were reconciled. This total becomes the new cleared balance for future reconciliations.

 Goal

 The balance on the actual bank or credit card statement that was entered prior to the reconciliation.

 Difference

 The amount gained or lost due to the difference between the Previous Cleared Balance and Current Cleared Balance , calculated using the following formula:

 Difference = Current Cleared Balance – Previous Cleared Balance
