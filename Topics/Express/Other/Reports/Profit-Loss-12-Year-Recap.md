# Profit & Loss 12 Year Recap (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Profit-Loss-12-Year-Recap.htm

The Profit & Loss 12 Year Recap report displays income and expense general ledger (GL) accounts for selected properties for up to a 12-year period, allowing you to compare the profitability of your portfolio across multiple years. This P&L report also displays the net income to track the overall financial impact in each year.

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

 Additionally, on the Reports tab, you must have access to Profit & Loss 12 Year Recap .

 For more information, refer to Control User Access .

 To view the Profit & Loss 12 Year Recap report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Profit & Loss arrow_forward Profit & Loss 12 Year Recap .
The Reports: Profit & Loss 12 Year Recap page displays.

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

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

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

 Select Start and End Year

 Select the Start Year and End Year of the year range for which income and expenses are examined for the selected properties.

 The period selected in the Date Range is examined for each year selected. For example, if you choose the first quarter (1/1 – 3/31) in the Date Range and 2015 – 2026 in the Year Range , the financial activity of the first quarter is examined for each year between (and including) 2015 – 2026 .

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Income

 This section of the report displays ending income account balances for all property transaction activity that occurred during a period of up to 12 years, depending on the date restriction selection. Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense

 This section of the report displays ending expense account balances for all property transaction activity that occurred during a period of up to 12 years, depending on the date restriction selection. Expense accounts are grouped together by type and provide subtotals for each grouping.

 Net Income

 This section of the report displays the net income for each year (calculated by subtracting the total expenses from the total income), followed by the net income for all properties in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Chart Account

 The name and number for income and expense general ledger (GL) accounts that had transaction activity in the Year Range .

 Year

 The balance for the income and expense GL accounts that had activity within each year during the Date Range .

 More Information

 Balances for transaction activity during the Date Range display in a separate column for each month. Due to space constraints, this report can generate data for only up to 12 months. To view more than 12 months, select CSV in the formats drop-list and then click Generate Report .

 Total

 The balance of income or expense GL account transaction activity at the end of the Date Range .

 Net Income Summary Subreport

 The Net Income Summary subreport displays the income, expense, and net income for each year as well as the totals for all the selected properties.
