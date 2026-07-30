# Owner Profit & Loss (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Profit-Loss.htm

The Owner Profit & Loss report displays income and expenses for an owner's properties over a period of time to track their financial performance. This P&L report also considers partnerships and displays income and expenses that reflect each partner's stake in the property as established on the property's Owners pop-up. For more information, refer to Property Owners (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Profit & Loss .

 For more information, refer to Control User Access .

 To view the Owner Profit & Loss report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Accounting arrow_forward Owner Profit & Loss .
The Reports: Owner Profit & Loss page displays.

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

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Cash or Accrual

 This option determines whether the financial activity is calculated on a cash or accrual basis and impacts which GL accounts display in the report.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Exclude Period Adjustments

 Check to remove any journal entries marked as a Period Adjustment from the report results.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

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

 Income

 Ending income account balances for all transaction activity that occurred during the Date Range . Income accounts are grouped together by type and provide subtotals for each grouping.

 Expense

 Ending expense account balances for all transaction activity that occurred during the Date Range . Expense accounts are grouped together by type and provide subtotals for each grouping.

 Net Income Summary Subreport

 Total income, total expenses, and net income calculated by using the following formula:

 Net Income = Total income - Total expense

 Column Descriptions

 The columns that display in the report are described below:

 Column
 Description

 Account

 The name and number for income and expense GL accounts that have transaction activity for the specified owner(s) in the Date Range .

 Amount

 The total of each income and expense GL account that had activity for the specified owner(s) within the Date Range .
