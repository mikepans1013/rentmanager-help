# Fiscal Year Budget (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Fiscal-Year-Budget.htm

The Fiscal Year Budget report displays financial data from your budget or budgets for the fiscal year. The year is determined by either the fiscal start date on the property level, if set, or the fiscal year established in your system preferences that the selected report date falls under. Totals for your budget(s) display for each month and the entire fiscal year in the report results.

 More Information

 The GL start date is considered the financial start date, so any transactions or information dated before the GL start date are not included in the report results.

 Related Preferences

 If a single property is selected, the fiscal year used in the report follows the date set on the property's details page in the Fiscal Year tile. If multiple properties are selected, the fiscal year used in the report is the date set in the General Ledger Settings system preferences.

 If one or more owners are selected, the fiscal year used in the report is the date set on the property's details page in the Fiscal Year tile or the date set in the General Ledger Settings system preferences.

 For more information, refer to General Ledger Settings (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Fiscal Year Budget .

 For more information, refer to Control User Access .

 To view the Fiscal Year Budget report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Budget arrow_forward Fiscal Year Budget .
The Reports: Fiscal Year Budget page displays.

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

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Include Budget Comments

 Check to include the Comments subreport, which lists comments added to the budget organized by the GL account.

 Comments can be viewed or added from the Budget page by clicking a cell in the budget and selecting Comment . For more information, refer to Budget (Page) .

 Amount Selection

 Select how the general ledger totals are calculated in the report.

 Option
 Description

 Show Actual Amounts

 The balance of each GL account’s actual activity during the Date Range displays.

 Optionally, check Include Total Per Sq Ft Amount to view a calculation of the budgeted amount per square foot, calculated using the following formula:

 Total PSF = Total amount of the GL account / Property square footage or the sum of all units square footage

 The balance of each GL account’s activity during the Date Range is divided by the number of square feet each property occupies, determined by what is entered on the property details page, or the sum of all active unit square footage from the unit details page.

 Show Amounts Per Sq. Ft.

 The balance of each GL account’s activity during the Date Range is divided by the number of square feet each property occupies, determined by what is entered on the property details page, or the sum of all active unit square footage from the unit details page

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Budget Monthly Column

 A column is created for each month in the year of the selected report date. Each column displays the monthly total of your budget or budgets for each general ledger (GL) account. Subtotals for each column display at the bottom of each subsection.

 Total PSF

 If you selected the Amount Selection report option of Include Total Per Sq Ft Amount , this column is added to the report and displays the balance of each GL account’s actual activity during the selected report year divided by the number of square feet each property occupies as entered on the property details page. If the field on the property is blank, the report pulls in the sum of all active unit square footage from the unit details page instead.

 Total

 The total budgeted amount for the GL account.

 Summary Subreport

 If in the Budget Type report option, Profit & Loss is selected, the Summary subreport displays. The budgeted income and expenses for each month in the fiscal year display as well as the Net Income total.

 Comments Subreport

 If the Include Budget Comments report option is checked, the Comments subreport displays. Any comments that were added to a budget are listed, grouped together by general ledger account. The following columns display in this subreport:

 Column
 Description

 Month-Year

 The month and year of the budget item where the comment was made.

 Property

 The property for which the budget comment was made.

 User

 The user who made the most recent comment update.

 Updated

 The date and time of the most recent edit to the comment.

 Comment

 The text entered on the budget's details page.
