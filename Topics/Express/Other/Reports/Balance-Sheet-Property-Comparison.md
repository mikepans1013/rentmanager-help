# Balance Sheet Property Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Balance-Sheet-Property-Comparison.htm

The Balance Sheet Property Comparison report displays the ending balance of asset, liability, and equity accounts for the selected property or up to twelve properties as of the report date. General Ledger (GL) accounts with balances, including beginning balances, for one or more properties from the GL start date to the selected report date also display. This report is a convenient way to compare the financial activity of several properties at once.

 The following rule applies to all Balance Sheets: Assets = Liabilities + Equities .

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

 Additionally, on the Reports tab, you must have access to Balance Sheet Property Comparison .

 For more information, refer to Control User Access .

 To view the Balance Sheet Property Comparison report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Balance Sheet arrow_forward Balance Sheet Property Comparison .
The Reports: Balance Sheet Property Comparison page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 Due to space constraints, this report can generate data for only up to 12 properties. To view more than 12 properties, select the desired properties and select CSV  in the formats drop-list. Then click Generate Report .

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

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

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 After selecting the report options, click Icon added on the action bar to save them, allowing you to quickly generate the report with that criteria.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Assets

 A row for each general ledger account with the Asset type that has a balance for the selected properties by the As of Date displays. In addition, the rows are grouped together by the subtype of Asset selected in the chart of accounts and subtotals display for each subtype of Asset at the bottom of each grouping.

 For example, all Bank type general ledger accounts and Fixed Asset type GL accounts are placed in their own group and have a subtotal row displayed underneath the grouping.

 Liabilities

 A row for each general ledger account with either the Liability type or Equity type that has a balance for the selected properties by the As of Date displays. In addition, the rows are grouped together by the Liability subtype and Equity subtype selected in the chart of accounts and subtotals are displayed for each subtype of Liability or Equity at the bottom of each grouping.

 For example, all Credit Card type general ledger accounts and Other Current Liability type GL accounts are placed in their own group and have a subtotal row display underneath the grouping.

 Column Descriptions

 The columns that display in the report are described below.

 Default Column
 Description

 Account

 The name of each general ledger account with a balance. The GL accounts are grouped with the Assets , Liabilities , and Equity sections based on the subtype of Asset , Liability , or Equity that is selected in the chart of accounts. For example, all Bank and all Fixed Assets GL accounts are placed in their own groups within the Assets section.

 Property Name

 A column displays for each property selected in report options. The property's short name displays as the name of the columns and the balance for each general ledger account displays for each row.

 Total

 The total amount of each general ledger account row.
