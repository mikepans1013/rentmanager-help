# Unit Expense Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Expense-Detail.htm

The Unit Expense Detail report allows you to examine all checks and credit card transactions with line items that have been assigned to specific units during a selected date range.
This helps to further break down your expenses by unit which can be useful when tracking your unit turnover costs.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit Expense Detail .

 For more information, refer to Control User Access .

 To view the Unit Expense Detail report, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Unit Expense Detail .
The Reports: Unit Expense Detail page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Units to Include

 Select the unit(s) to be examined in the report. Only the units associated with the properties selected in the Properties to Include section display.

 Separation Method

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Separate by Properties

 Generates a separate report for each selected property.

 Separate by Units

 Generates a separate report for each unit associated with the selected properties.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 Each unit that incurred expenses displays in a list under its associated property. The columns that display in the report for each unit are described below.

 Column
 Description

 Date

 The date of the associated check or credit card transaction.

 Check #

 For checks, the number entered in the check's No. field displays. For credit card transactions, the number entered in the transaction's Reference field displays.

 Vendor

 The vendor who issued the expense transaction.

 Chart Account

 The general ledger (GL) account expensed for the transaction.

 Memo

 The note entered in the check's Memo field or the credit card transaction's Memo column.

 Amount

 The dollar amount allocated to each line item on the check or credit card transaction.

 Report Totals Subreport

 This subreport displays the Amount field, which displays the total combined dollar amount of expenses for all units at the selected properties.
