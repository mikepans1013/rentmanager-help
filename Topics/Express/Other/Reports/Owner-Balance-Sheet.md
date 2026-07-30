# Owner Balance Sheet (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Balance-Sheet.htm

The Owner Balance Sheet is a financial report that displays the balance of asset, liability, and equity general ledger accounts as of the selected report date for the associated properties of the selected owner(s). For partnerships, this report allocates the account balances to the respective individual owner based upon the percentages established on the property's Ownership pop-up, and generates a separate report for each owner. This separation makes it easy to track each partner's financial information.

 The following rule applies to all balance sheets: Assets = Liabilities + Equity .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Balance Sheet .

 For more information, refer to Control User Access .

 To view the Owner Balance Sheet report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Accounting arrow_forward Owner Balance Sheet .
The Reports: Owner Balance Sheet page displays.

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

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

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

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Assets

 The Assets section of the report displays the balances as of the report date for all asset general ledger accounts associated with the owner's properties. The account balances are calculated based on the owner’s percent of ownership. Asset accounts are grouped together by type and provide sub-totals for each grouping.

 The total of the owner's assets is always equal to the total of their liabilities and equity.

 Liabilities & Equity

 The Liabilities & Equity section of the report displays the balances as of the report date for all liability and equity general ledger accounts associated with the owner's properties. The account balances are calculated based on the owner’s percent of ownership. Liability and equity accounts are grouped together by type and provide sub-totals for each grouping.

 The total of the owner's liabilities and equity is always equal to the total of their assets.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and number for GL accounts that are assets, liabilities, and equity that also have a balance for the As of Date selected in the report options.

 Amount

 The total balance for the asset, liability, and equity GL accounts.
