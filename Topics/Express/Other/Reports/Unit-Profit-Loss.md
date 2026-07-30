# Unit Profit & Loss (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Profit-Loss.htm

The Unit Profit & Loss report displays the ending balances of unit-level income and expense transactions for the units within selected properties or owner portfolios across a date range. This P&L report also displays the net income to track the financial impact of the units. Additionally, it displays the ending balances of income and expenses in the selected properties that were not tied to a unit to provide you with information on the overall financial activity of the property.

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

 Additionally, on the Reports tab, you must have access to Unit Profit & Loss .

 For more information, refer to Control User Access .

 To view the Unit Profit & Loss report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Profit & Loss arrow_forward Unit Profit & Loss .
The Reports: Unit Profit & Loss page displays.

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

 Sort Options

 Select one of the following options to determine how the report results are organized within each property subheading:

 Option
 Description

 Street Address

 Units are sorted alphanumerically by Default address. Units with no address display first in the list. Units with the same address are further sorted alphanumerically by Unit name.

 Unit

 Units are sorted alphanumerically by Unit name.

 Unit Type

 Units are first sorted alphanumerically by Unit Type name. Units with the same unit type are further sorted alphanumerically by Unit name.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Unit

 The name of the unit.

 Unit Type

 The category of the unit as defined on the Unit details page.

 Address

 The street address of the address type marked as Default on the Unit details page.

 Last Occupied By

 The name of the Current Occupant or most recent Past Occupant of the unit, as displayed on the Unit details page.

 If this column is blank, the unit has never been occupied by a tenant.

 Income

 The total ending income balance of all unit-level transaction activity that took place during the specified Date Range .

 Expense

 The total ending expense balance of all unit-level transaction activity that took place during the specified Date Range .

 Net Income

 The net income of the unit during the specified Date Range calculated with the following equation:

 Net Income = Income - Expense

 Summary Subreport

 The Summary subreport displays the overall net income of all units included in the report, as well as the net income of transactions that were not tied to a unit, in order to provide an Overall Total Profit & Loss for all properties included in the report.

 The subreport is organized with a header and three sections containing columns of information, which are described below.

 Profit & Loss Assigned to Units

 This section displays the overall Net Income from unit-level transactions for each property.

 Column
 Description

 Property

 The name of the property.

 Units

 The number of units within the property.

 Income

 The total ending income balance for all unit-level transactions that took place during the Date Range .

 Expense

 The total ending expense balance for all unit-level transactions that took place during the Date Range .

 Net Income

 The total net income of the unit-level transactions that occurred within the selected property during the Date Range , calculated with the following equation:

 Net Income = Income - Expense

 Profit & Loss Not Assigned to Units

 This section displays the Net Income of all transactions that impacted the selected properties within the Date Range that were not tied to a unit.

 Column
 Description

 Property

 The name of the property.

 Units

 The number of units within the property.

 Income

 The total ending income balance for all transactions that took place during the Date Range that were not tied to a unit.

 Expense

 The total ending expense balance for all transactions that took place during the Date Range that were not tied to a unit.

 Net Income

 The total net income of all transactions that occurred within the selected property during the Date Range , calculated with the following equation:

 Net Income = Income - Expense

 Overall Total Profit & Loss

 The overall income, expense, and net income, accounting for both unit-level transactions and transactions that were not tied to a unit, for all properties in the report during the selected Date Range .

 Because these amounts include all transactions, they can be reconciled against the amounts in a Profit & Loss report generated for the same properties or owners during the same Date Range .
