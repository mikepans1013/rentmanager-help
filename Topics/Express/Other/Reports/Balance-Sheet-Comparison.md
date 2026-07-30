# Balance Sheet Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Balance-Sheet-Comparison.htm

The Balance Sheet Comparison report shows a side-by-side comparison of the financial position of selected properties as of two given report dates. Generate this report to view the assets of one or more properties and the claims (liabilities and equities) against those assets at two points in time.

 As with all balance sheets, the following rule applies: Assets = Liabilities + Equities .

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

 Additionally, on the Reports tab, you must have access to Balance Sheet Comparison .

 For more information, refer to Control User Access .

 To view the Balance Sheet Comparison report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Balance Sheet arrow_forward Balance Sheet Comparison .
The Reports: Balance Sheet Comparison page displays.

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

 When the Owners tab in the Properties/Owners to Include report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

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

 Second As of Date

 Select a second date for which the report examines the information as of the entered date to compare to the data from the first As of Date .

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the As of Date begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected dates overlap. Filtered results display an asterisk (*) after the selected dates.

 Assets

 This section of the report displays ending asset account balances from the GL start date to the end of each selected date. Asset accounts are grouped together by type and provide subtotals for each grouping.

 The total of your assets is always equal to the total of your liabilities and equities: ( Assets = Liabilities + Equities ).

 Liabilities & Equity

 This section of the report displays ending liability and equity account balances from the GL start date to the end of each selected date. Liability and equity accounts are grouped together by type and provide subtotals for each grouping.

 The total of your liabilities and equities is always equal to the total of your assets: ( Assets = Liabilities + Equities ).

 Column Descriptions

 The columns that display in the report are described below.

 Related Preferences

 Some columns generate data based on the database's GL Start Date established in system preferences. For more information, refer to General Ledger Settings (System Preferences) .

 Column
 Description

 Amount as of First Date

 The final balance of each asset, liability, and equity GL account between the GL start date and the end of the As of Date .

 Amount as of Second Date

 The final balance of each asset, liability, and equity GL account between the GL start date and the end of the Second As of Date .

 $ Change

 The dollar amount difference between the ending GL account balances from the GL start date to the end of the As of Date and the GL start date to the end of the Second As of Date .

 % Change

 The percentage of increase or decrease between the ending GL account balances from the As of Date and the Second As of Date using the following calculation:

 Percent Change = First Balance / Second Balance * 100
