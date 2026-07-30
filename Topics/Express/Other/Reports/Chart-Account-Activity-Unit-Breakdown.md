# Chart Account Activity Unit Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Chart-Account-Activity-Unit-Breakdown.htm

The Chart Account Activity Unit Breakdown report displays unit-level transaction activity that impacted general ledger (GL) accounts across a selected date range. This report can be useful for determining which units are the most profitable and if repeated expenses require further investigation.

 More Information

 Due to space constraints, this report can generate data for only up to eight accounts. To view more than eight GL accounts, select the desired accounts, select CSV in the formats drop-list, generate the report, and click Download Document .

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

 Additionally, on the Reports tab, you must have access to Chart Account Activity Unit Breakdown .

 For more information, refer to Control User Access .

 To view the Chart Account Activity Unit Breakdown report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward General arrow_forward Chart Account Activity Unit Breakdown .
The Reports: Chart Account Activity Unit Breakdown page displays.

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

 Chart Accounts to Include

 The report displays the balances of transaction activity for up to eight of the selected general ledger (GL) accounts.

 In addition to manually selecting GL accounts, you can use the following options to filter and select the accounts. The list of GL accounts updates depending on the options selected here.

 Option
 Description

 Mapping

 Select the name of the desired mapping method to customize the display of GL accounts included in the report by using the virtual accounts of a chart mapping. For more information, refer to Chart Accounts Mapping (Page) .

 If no chart account mappings are created, the drop-down list displays None .

 From Account

 To set a range of GL accounts, select the first account in your range from the drop-down list. All accounts between and including the From Account and To Account are checked in the list.

 To Account

 To set a range of GL accounts, select the last account in your range from the drop-down list. All accounts between and including the From Account and To Account are checked in the list.

 Group

 Select a GL account type group from the drop-down list to quickly select all accounts of that type. For example, selecting Bank checks all the banks in the list.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 To the right of the Date Range option, you can click Date to manually select a date range, or Period select a date range based on accounting periods.

 Set a Date Range

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Select an Accounting Period

 Related Preferences

 To generate the report using accounting periods, the General Ledger Settings (System Preferences) option to Enable accounting periods must be enabled.

 Financial reports default to the manual Date view unless the General Ledger Settings (System Preferences) option to Default to accounting periods for financial reports is checked. Enabling this option sets the financial reports to default to the Period view for Date Range .

 Configure the following options to determine the period Date Range uses:

 Option
 Description

 Series

 Select the desired series, as defined in accounting periods.

 Single Period

 Select Single Period to generate the report for one accounting period.

 When this option is selected, you can also select the Year of the period you wish to use and the Period, which allows you to generate the report from the period's Start Date through the period's End Date .

 Multiple Periods

 Select Multiple Periods to generate the report across multiple accounting periods.

 When this option is selected, you can also select a Start Year and End Year or a Start Period and End Period to determine the To and From date for which the report is generated.

 Cash or Accrual

 This option determines whether the financial activity is calculated on a cash or accrual basis.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Exclude Records with Zero Amounts from the Report

 Check to remove units with no activity in the selected chart accounts from the report results.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Unit

 The name of each unit at the selected properties.

 Chart Account Columns

 A column displays for each GL account selected in the Chart Accounts to Include section of the report options, with up to eight columns. Each column displays the total of that account's transaction activity during the Date Range for each unit.

 Total

 The total of all transaction activity for each unit during the Date Range across the displayed chart accounts.
