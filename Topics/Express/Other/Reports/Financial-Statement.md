# Financial Statement (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Financial-Statement.htm

The Financial Statement report displays assets, liabilities, and equities from the general ledger (GL) start date to the end of the selected report date range for selected properties or ownerships. The report includes ending balances for all five of the major GL account types: assets, liabilities, equity, income, and expenses.

 Financial information for income and expense accounts display only if the corresponding transactions fall within the report's selected date range; otherwise, they are rolled into a GL system account depending on your system preferences.

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

 Additionally, on the Reports tab, you must have access to Financial Statement .

 For more information, refer to Control User Access .

 To view the Financial Statement report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward General arrow_forward Financial Statement .
The Reports: Financial Statement page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

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

 More Information

 If the Restrict by owner contract dates report option is checked and the selected Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Assets

 This section of the report displays ending asset account balances from the GL start date to the end of the selected date range. Asset accounts are grouped together by type and provide subtotals for each grouping.

 The total of your assets is always equal to the total of your liabilities and equities.

 Liabilities & Equity

 This section of the report displays ending liability and equity account balances from the GL start date to the end of the selected date range. Liability and equity accounts are grouped together by type and provide subtotals for each grouping.

 The Equity section also includes income and expense data, which displays on the report only if the transactions that took place occurred within the selected Date Range . Following the income and expenses is the Net Income total, found by subtracting expenses from income.

 More Information

 The Total Equity and Total Liabilities values vary depending on the options and accounts established in system preferences. For more information, refer to General Ledger Settings (System Preferences) and General Ledger System Accounts (System Preferences) .

 The total of your liabilities and equities is always equal to the total of your assets.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and GL account number for asset, liability, and equity accounts that have a balance as of the end of the Date Range selected in the report options.

 More Information

 The GL account number displays in this column only if Show Account Numbers is enabled in system preferences. For more information, refer to General Ledger Settings (System Preferences) .

 Amount

 The balance for the GL accounts as of the end of the Date Range selected in the report options.
