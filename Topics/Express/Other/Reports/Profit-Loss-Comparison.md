# Profit & Loss Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Profit-Loss-Comparison.htm

The Profit & Loss Comparison report displays a side-by-side comparison of income and expense general ledger (GL) accounts for selected properties or owners across two selected date ranges. This allows you to view the change difference and the percentage of increase or decrease between the two date ranges. This P&L report also displays the net income to track the financial impact of the selected properties.

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

 Additionally, on the Reports tab, you must have access to Profit & Loss Comparisons .

 For more information, refer to Control User Access .

 To view the Profit & Loss Comparison report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Profit & Loss arrow_forward Profit & Loss Comparison .
The Reports: Profit & Loss Comparison page displays.

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

 More Information

 When the Owners tab of the Properties/Owners to Include report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

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

 Amount Selection

 Select how the general ledger totals are calculated in the report.

 Option
 Description

 Show Actual Amounts

 The balance of each GL account’s actual activity during the Date Range displays.

 Show Amounts Per Sq. Ft.

 The balance of each GL account’s activity during the Date Range is divided by the number of square feet each property occupies, determined by what is entered on the property details page, or the sum of all active unit square footage from the unit details page

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Second Date Range

 Select a second date range to examine the income and expenses for that time period and compare them to the income and expenses from the time period selected in the first Date Range .

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

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 After selecting the report options, they may be saved, allowing you to quickly generate the report with that criteria.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Income

 A row for each general ledger account with the Income type that displays the ending income account balances for all property transaction activity that occurred during the Date Range and Second Date Range . Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense

 A row for each general ledger account with the Expense type that displays the ending expense account balances for all property transaction activity that occurred during the Date Range and Second Date Range . Expense accounts are grouped together by type and provide subtotals for each grouping.

 Net Income Summary

 This section of the report displays the net income for the selected properties during the Date Range and Second Date Range . Net income is calculated using the following formula:

 Net income = Total expenses - Total income

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and number for income and expense general ledger (GL) accounts with transaction activity in the Date Range and/or Second Date Range .

 Amounts from Period 1

 The balance for the income and expense GL accounts with activity within the first Date Range .

 Amounts from Period 2

 The balance for the income and expense GL accounts with activity within the Second Date Range .

 $ Change

 The dollar amount difference between the ending GL account balances for activity in the first Date Range and the Second Date Range .

 % Change

 The percent increase or decrease in the ending GL account balances for activity between the first Date Range and the Second Date Range .
