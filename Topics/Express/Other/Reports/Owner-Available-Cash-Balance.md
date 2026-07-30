# Owner Available Cash Balance (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Available-Cash-Balance.htm

The Owner Available Cash Balance report shows the owner's beginning bank balance for the selected date range and the ending balance after the transactions of the period are taken into account. Additionally, it displays the amount not available to owners for open payables, security deposits and reserves, followed by the current balance of available funds for each owner. This report is useful in tracking the general activity of each owner's bank account and see at a glance how much of those funds are available.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Available Cash Balance .

 For more information, refer to Control User Access .

 To view the Owner Available Cash Balance report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Banking arrow_forward Owner Available Cash Balance .
The Reports: Owner Available Cash Balance page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Detail or Summary

 This option determines how much information is displayed in the report:

 Option
 Description

 Detail

 A line item for the bank activity of each property, sorted by owner, displays.

 Summary

 The total bank activity combined into a single row for each owner displays.

 Optional Columns

 This option determines what additional information displays in the report results. Check or uncheck any of the following options to determine whether or not the column is included the report:

 Option
 Description

 Open Payables

 The total amount of unpaid bills for the owner.

 Security Deposits

 The total amount of held security deposits at the owner's properties.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Reserve

 The total reserve amount specified on the property's Owners pop-up.

 Exclude Records with Zero Amounts

 Check to remove properties which have zero balances from the report results. Otherwise, all properties display.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The properties display data individually beneath the name of their associated owner(s).

 The column displays only if the Detail report option is selected.

 Owner Name

 The name of the owner. The totaled data for all the owner's properties display in a single line.

 The column displays only if the Summary report option is selected.

 Beginning Balance

 The balance of the owner's bank account(s) for the properties as of the start of the date range.

 Deposits

 The total of all deposits made to the owner's bank account(s) for the properties during the date range.

 Checks

 The total of all checks written from the owner's bank account(s) for the properties during the selected date range. This number displays as a negative amount since the money is being withdrawn from the account.

 Journal Entries

 The total of all journal entries written from the owner's bank account(s) for the properties during the date range. This number may display as a negative amount if there was more money withdrawn from the account via a journal entry than what was deposited via journal entry.

 Ending Balance

 The remaining balance of the owner's bank account(s) as of the last day of the report.

 Open Payables

 If selected in the report options, the total amount of unpaid bills for the owner.

 Security Deposits

 If selected in the report options, the total amount of security deposits held for the owner's properties.

 Reserve

 If selected in the report options, the total reserve amount of the owner's properties as specified on the Owners pop-up.

 Available Cash

 The total dollar amount available in the owner's bank account(s) for the properties after the Open Payables , Security Deposits , and/or Reserve were subtracted from the Ending Balance .
