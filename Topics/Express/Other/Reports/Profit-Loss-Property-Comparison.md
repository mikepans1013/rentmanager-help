# Profit & Loss Property Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Profit-Loss-Property-Comparison.htm

The Profit & Loss Property Comparison report displays income and expense general ledger (GL) accounts for properties across a date range, allowing you to compare the profitability of different properties. This P&L report also displays the net income to track the overall financial impact of each property. To view more than 12 properties on one report, run the report as a CSV file. This displays the report with a separate column for every selected.

 More Information

 The GL start date is considered the financial start date, so any transactions or information dated before the GL start date are not included in the report results.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Profit & Loss Property Comparison .

 For more information, refer to Control User Access .

 To view the Profit & Loss Property Comparison report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Profit & Loss arrow_forward Profit & Loss Property Comparison .
The Reports: Profit & Loss Property Comparison page displays.

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

 Cash or Accrual

 This option determines whether the financial activity is calculated on a cash or accrual basis.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Type of Amounts to Display

 Select how the general ledger (GL) totals are calculated in the report.

 Option
 Description

 Show Actual Amounts

 The balance of each GL account's actual activity during the specified date range displays.

 Show Amounts Per Unit

 The balance of each GL account's activity during the specified date range is divided by the number of units in each property to show the balance per unit.

 Show Amounts Per Sq. Ft.

 The balance of each GL account's activity during the specified date range is divided by the number of square feet each property occupies, determined by what has been entered on property's details page, or the sum of all active unit square footage from the unit's details page.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Income

 This section of the report displays ending income account balances for all property transaction activity that occurred during the specified date range. Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense

 This section of the report displays ending expense account balances for all property transaction activity that occurred during the specified date range. Expense accounts are grouped together by type and provide subtotals for each grouping.

 Net Income

 This section of the report displays the net income for each property (calculated by subtracting the total expenses from the total income), followed by the net income for all properties in the report.

 Net Income Summary Subreport

 This subreport displays the totals of Income , Expense , and Other Income & Expense for each property as well as the Net Income .
