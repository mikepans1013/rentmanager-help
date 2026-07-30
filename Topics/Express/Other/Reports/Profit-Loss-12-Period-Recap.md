# Profit & Loss 12 Period Recap (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Profit-Loss-12-Period-Recap.htm

The Profit & Loss 12 Period Recap report displays income and expense general ledger (GL) accounts for selected properties for a specific period across multiple years, allowing you to compare the profitability of your portfolio over time. For example, this P&L report can be used to specifically view the profitability of a certain fiscal quarter across multiple years. The report also displays the net income to track the overall financial impact of the period in each year.

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

 Additionally, on the Reports tab, you must have access to Profit & Loss 12 Period Recap .

 For more information, refer to Control User Access .

 To view the Profit & Loss 12 Period Recap report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Profit & Loss arrow_forward Profit & Loss 12 Period Recap .
The Reports: Profit & Loss 12 Period Recap page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

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

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Separation Method

 This option becomes available when the Properties tab is selected.

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Separate by Properties

 Generates a separate report for each selected property.

 Separate by Units

 Generates a separate report for each unit associated with the selected properties.

 Select Start and End Year

 Select the Start Year and End Year of the year range for which income and expenses are examined for the selected properties.

 The period selected in the Date Range is examined for each year selected. For example, if you choose the first quarter (1/1 – 3/31) in the Date Range and 2015 – 2026 in the Year Range , the financial activity of the first quarter is examined for each year between (and including) 2015 – 2026 .

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

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

 Income

 This section of the report displays ending income account balances for all property transaction activity that occurred during the selected period across up to 12 years, depending on the date restriction selection. Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense

 This section of the report displays ending expense account balances for all property transaction activity that occurred during the selected period across up to 12 years, depending on the date restriction selection. Expense accounts are grouped together by type and provide subtotals for each grouping.

 Net Income

 This section of the report displays the net income for each year (calculated by subtracting the total expenses from the total income), followed by the net income for all properties in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Chart Account

 The name and number for income and expense GL accounts that had transaction activity in the Start Year and End Year .

 Year

 The balance for the income and expense GL accounts that had activity within each year during the Date Range .

 More Information

 Due to space constraints, this report can generate data for only up to 12 years. To view more than 12 months, select CSV in the formats drop-list and then click Generate Report .

 Total

 The balance of income or expense GL account transaction activity at the end of the Date Range .

 Summary Subreport

 This subreport displays income, expense, and net income for the period in each year as well as the totals for all the selected properties.
