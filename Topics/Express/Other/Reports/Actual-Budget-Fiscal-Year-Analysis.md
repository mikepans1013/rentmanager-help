# Actual/Budget Fiscal Year Analysis (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Actual-Budget-Fiscal-Year-Analysis.htm

The Actual/Budget Fiscal Year Analysis report displays your financial activity over the fiscal year up to the selected report date alongside the budget(s) for any future months in the fiscal year. Totals for your current financial activity and budget(s) display in the report results. The total of your original budget for the fiscal year also displays to help you determine how your financial activity is lining up with your budget.

 To get the most meaningful report results, it is recommended that you generate this report for the last day of the month.

 More Information

 The GL start date is considered the financial start date, so any transactions or information dated before the GL start date are not included in the report results.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Actual/Budget Fiscal Year Analysis .

 For more information, refer to Control User Access .

 To view the Actual/Budget Fiscal Year Analysis report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Budget arrow_forward Actual/Budget Fiscal Year Analysis .
The Reports: Actual/Budget Fiscal Year Analysis page displays.

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

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 To the right of the As of Date option, you can click Date to manually select an as of date, or Period to select an as of date based on accounting periods.

 Related Preferences

 To generate the report using accounting periods, the General Ledger Settings (System Preferences) option to Enable accounting periods must be enabled.

 Financial reports default to manual Date view unless the General Ledger Settings (System Preferences) option to Default to accounting periods for financial reports is checked. Enabling this option sets the financial reports to default to the Period view for As of Date .

 Period As of Date

 Configure the following options in descending order to determine the period As of Date used:

 Field
 Description

 Series

 Select the desired series, as defined in accounting periods.

 Start Year

 Select the name of the period year to use.

 Period

 Select the name of the period to use. The End Date of the selected period is used as the As of Date in the report.

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

 This option determines whether the financial activity is calculated on a cash or accrual basis.

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

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Actual Monthly Column

 A column is created for each month of the fiscal year up until the selected report date. Each column displays the monthly total of your financial activity for each general ledger account.

 Budget Monthly Column

 A column is created for each month after the selected report date. Each column displays the monthly total of your budget(s) for each general ledger account.

 Revised Total

 For each general ledger account, this column displays the total for the Actual columns plus any Budget columns included in the report results.

 Original Budget

 For each general ledger account, this column displays the total from the budget(s) by adding the amounts in the budget(s) for each column that displays in the report to help you measure your financial activity against your budget.

 Net Income Summary Subreport

 This subreport displays the income, cost of goods sold, gross profit, and expense for each month as well as the Net Income total.
