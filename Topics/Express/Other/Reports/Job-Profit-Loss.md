# Job Profit & Loss (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Job-Profit-Loss.htm

The Job Profit & Loss report displays income and expense general ledger (GL) accounts for a selected job across a date range. The report also displays the net income to track the financial impact of the selected job.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Job Profit & Loss .

 For more information, refer to Control User Access .

 To view the Job Profit & Loss report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Job Costing arrow_forward Job Profit & Loss .
The Reports: Job Profit & Loss page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

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

 This option determines whether the financial activity is calculated on a cash or accrual basis and impacts which GL accounts display in the report.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Separation Method

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Properties

 Generates a separate report for each selected property.

 Jobs

 Generates a separate report for each job associated with the selected properties.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 Jobs to Include

 Select the job(s) to be examined in the report. Optionally, check Include Inactive Jobs to include jobs that are no longer active.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and number for income and expense general ledger (GL) accounts that have activity in any of the selected jobs during the Date Range .

 Amount

 The total balance for the income and expense GL accounts.

 Income Section

 This section of the report displays ending income account balances for all job transaction activity that occurred during the Date Range . Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense Section

 This section of the report displays ending expense account balances for all job transaction activity that occurred during the Date Range . Expense accounts are grouped together by type and provide subtotals for each grouping.

 Summary Subreport

 The Summary subreport displays total Income , total Expenses , and Net Income (calculated by subtracting the total expenses from the total income).

 The following fields display in the subreport.

 Field
 Description

 Income

 The total income for each job as a percentage of the entire report's income.

 Expense

 The total expense for each job as a percentage of the entire report's expenses.

 Net Income

 The total net income for each job as a percentage of the entire report's net income.
