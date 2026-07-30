# Unit Balance Sheet (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Balance-Sheet.htm

The Unit Balance Sheet report shows the financial position of a single unit as of the report date. Generate this report to view the assets of a unit and the claims (liabilities and equities) against those assets. In order to make financial data appear for a unit, receivables and payables transactions must be linked to that unit. The report displays the balances of asset, liability, and equity GL accounts as of the report date for the selected unit.

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

 Additionally, on the Reports tab, you must have access to Unit Balance Sheet .

 For more information, refer to Control User Access .

 To view the Unit Balance Sheet report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Balance Sheet arrow_forward Unit Balance Sheet .
The Reports: Unit Balance Sheet page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

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

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Select a Property and Unit

 Select a Property from the drop-down list, then select a Unit from that property to examine. Alternatively, select < No Unit selected > to examine report data that is not tied to any specific unit.

 To include properties that are no longer active, check Inactive Properties .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Assets

 This section of the report displays ending asset account balances for the unit from the GL start date to the end of each selected date. Asset accounts are grouped together by type and provide subtotals for each grouping.

 The total of your assets is always equal to the total of your liabilities and equities.

 Liabilities & Equities

 This section of the report displays ending liability and equity account balances for the unit from the GL start date to the end of each selected date. Liability and equity accounts are grouped together by type and provide subtotals for each grouping.

 The total of your liabilities and equities is always equal to the total of your assets.

 More Information

 Net Income is an equity account that is calculated by subtracting expenses from income. However, any manual transactions made to the Net Income equity account also affects the balance displayed on the Unit Balance Sheet . If you drill down on the Net Income amount, Rent Manager displays a Unit Profit & Loss report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and number for general ledger accounts that are assets, liabilities, and equity that have a balance for the As of Date selected in the report options.

 Amount

 The balance for the assets, liabilities, and equity GL accounts.
