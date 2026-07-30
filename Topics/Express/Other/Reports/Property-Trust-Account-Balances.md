# Property Trust Account Balances (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Property-Trust-Account-Balances.htm

The Property Trust Account Balances report shows the beginning balance, ending balance and bank account activity for a bank account across a date range, separated by property. You can use this report to break down a commingled bank account and show each property's portion of the total account balance. This report can also be used to meet a realty board's requirements of a three-way match (also known as a triple tie), since the bank account balance per property is displayed.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Property Trust Account Balances .

 For more information, refer to Control User Access .

 To view the Property Trust Account Balances report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Bank Balances arrow_forward Property Trust Account Balances .
The Reports: Property Trust Account Balances page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Bank Account

 Select the bank for which Rent Manager examines deposit and withdrawal activity.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The Full Name of the property associated with the account's balance, as entered on the Property details page.

 Address

 This column displays the default street address as it is entered on the Primary Address tile of the Property details page.

 Beginning Balance

 The balance of the selected property's bank account as of one day prior to the start of the Date Range .

 Deposits

 The total of all deposited accounts receivable transactions and/or journal entries at the property for the selected bank account during the selected Date Range .

 Withdrawals

 The total of all accounts payable transactions at the property for the selected bank account within the selected Date Range .

 Ending Balance

 The balance of the selected property's bank account as of the last day of the Date Range . The balance is calculated using the following formula:

 Ending Balance = Beginning Balance + Deposits - Withdrawals
