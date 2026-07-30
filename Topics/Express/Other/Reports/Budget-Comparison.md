# Budget Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Budget-Comparison.htm

The Budget Comparison report displays budgets alongside real-world financial data across two selected date ranges to help you measure financial activity against forecasted projections. This report allows you compare budgets of all types including profit and loss, balance sheet, or both budget types.

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

 Additionally, on the Reports tab, you must have access to Budget Comparison .

 For more information, refer to Control User Access .

 To view the Budget Comparison report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Budget arrow_forward Budget Comparison .
The Reports: Budget Comparison page displays.

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

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

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

 Second Date Range

 Select a second date range to examine the actual financial activity and budgets for that time period and compare them to the budget and financial activity from the time period selected in the first Date Range .

 Budget Type

 Select a budget type to determine which type of financial information from the properties during the Date Range displays. A budget can be created with either P & L or Balance Sheet selected. For more information, refer to Budget (Page) .

 Option
 Description

 Profit and Loss

 Actual income and expense activity against a budget(s) with P & L applied displays.

 Balance Sheet

 Actual asset, liability, and equity account activity against a budget(s) with Balance Sheet applied displays.

 PL and Balance Sheet

 Actual financial activity for all general ledger account types against a budget(s) with either P & L or Balance Sheet applied displays.

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

 Include Budget Comments

 Check to include the Comments subreport, which lists comments added to the budget organized by the GL account.

 Comments can be viewed or added from the Budget page by clicking a cell in the budget and selecting Comment . For more information, refer to Budget (Page) .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Income

 The Income section displays the totals for all budgets and income accounts for the selected property or properties during the selected date ranges. The difference in dollars and percentage between the Budget and Budget YTD totals and the Actual and Actual YTD income account totals is calculated for both of the selected date ranges as well. All Income subaccounts are grouped under their parent account, and sub-totals are provided for each grouping.

 This section displays only if the Profit & Loss report option is selected.

 Expense

 The Expense section displays the totals for all budgets and expense accounts for the selected property or properties during the selected date ranges. The difference in dollars and percentage between the Budget and Budget YTD totals and the Actual and Actual YTD expense account totals is calculated for both of the selected date ranges as well. All Expense subaccounts are grouped under their parent account, and sub-totals are provided for each grouping.

 This section displays only if the Profit & Loss report option is selected.

 Net Income

 The Net Income section displays the net income for the selected property or properties (calculated by subtracting the total expense from the total income) for both of the selected report date ranges.

 This section displays only if the Profit & Loss report option is selected.

 Assets

 The Assets section displays activity for all budgets and asset accounts for the selected property or properties during the selected date ranges. The difference in dollars and percentage between the Budget and Budget YTD totals and the Actual and Actual YTD asset account totals is calculated for both of the selected date ranges as well. All asset subaccounts are grouped under their parent account, and sub-totals are provided for each grouping.

 Liabilities & Equity

 This section displays activity for all budgets, liability accounts, and equity accounts for the selected property or properties during the selected date ranges. The difference in dollars and percentage between the Budget and Budget YTD totals and the Actual and Actual YTD liability and equity account totals is calculated for both of the selected date ranges as well. All liability and equity subaccounts are grouped under their parent account, and sub-totals are provided for each grouping.

 This section displays only if the Balance Sheet report option is selected.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Actual (Date Range 1)

 The balance if Balance Sheet is selected in the report options or activity if Profit & Loss is selected for each general ledger account for the Date Range selected in the report options for the selected property or properties.

 Budget (Date Range 1)

 The total amount entered in the budget(s) for the selected property or properties for each general ledger account for the Date Range selected in the report options.

 $ Change

 The difference between the Actual (Date Range 1) value and the Budget (Date Range 1) value using the following formula:

 Actual – Budget = $ Change

 % Change

 The percentage difference between the Actual (Date Range 1) value and the Budget (Date Range 1) value using the following formula:

 $ Change / Budget = % Change

 Actual YTD (Date Range 2)

 The balance if Balance Sheet is selected in the report options or activity if Profit & Loss is selected for each general ledger account for the Second Date Range selected in the report options for the selected property or properties.

 Budget (Date Range 2)

 The total amount entered in budget(s) for the selected property or properties for each general ledger account for the Second Date Range selected in the report options.

 $ Change

 The difference between the Actual (Date Range 2) value and the Budget (Date Range 2) value using the following formula:

 Actual – Budget = $ Change

 % Change

 The percentage difference between the Actual (Date Range 2) value and the Budget (Date Range 2) value using the following formula:

 $ Change / Budget = % Change

 Comments Subreport

 If the Include Budget Comments report option is checked, the Comments subreport displays. Any comments that were added to a cell on the Budget page are listed and grouped together by general ledger account.

 The following columns appear in the subreport:

 Column
 Description

 Month-Year

 The month and year of the budget amount that had a comment added.

 Property

 The name of the property for which the budget applies.

 User

 The username associated with the user who added or last updated the comment.

 Updated

 The date and time on which the comment was added or last updated.

 Comment

 The Comment as entered in the Budget Item Details pop-up.
