# Cash Flow 12 Month Recap (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Cash-Flow-12-Month-Recap.htm

The Cash Flow 12 Month Recap report displays monthly cash flow data for the selected properties or ownerships during a date range. A column is displays for each month in the date range so that you can review the income and expenses for multiple general ledger (GL) accounts up to twelve months at a time.

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

 Additionally, on the Reports tab, you must have access to Cash Flow 12 Month Recap .

 For more information, refer to Control User Access .

 To view the Cash Flow 12 Month Recap report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward Cash Flow arrow_forward Cash Flow 12 Month Recap .
The Reports: Cash Flow 12 Month Recap page displays.

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

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 Details for each type of account in each section ( Operating Activities , Investing Activities , and Financing Activities ) display.

 Summary

 Condensed account information for each section ( Operating Activities , Investing Activities , and Financing Activities ) display.

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

 Print on Legal Sized Paper

 If checked, the report is adjusted to fit on legal-sized paper (8.5 × 14 inches) which provides additional space for the report results. Otherwise, the report is sized to fit onto a standard, letter-sized sheet of 8.5 x 11 paper.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Operating Activities

 The Operating Activities section tracks cash received and lost from daily business activities like collecting rent, paying maintenance costs, and supply purchases.

 More Information

 If you run the report in Detail mode, the report displays the change over the Date Range of each individual Income and Expense account separately.

 If you run the report in Summary mode, the total of your Income transactions minus your Expense transactions over the Date Range shows as Net Income .

 Adjustments to reconcile Net Income to net cash provided by operations lists all of the operational activities that impacted Net Income but not your cash flow for the same properties and Date Range but were not linked to Income or Expense accounts. For example, depreciation is an expense that is subtracted from your Net Income but not your bank account which is part of your cash flow. Collecting security deposits increases the bank but also has no effect on Net Income .

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Investing Activities

 The Investing Activities this section tracks cash received and lost from investments in marketable securities and in long-term assets like land, buildings, etc. Transactions linked to Fixed Asset or Other Asset accounts are considered investing activities.

 As a rule, when you purchase assets in the specified reporting period, negative totals display in this section of the report as an asset purchase represents a cash outflow. If you sell assets, positive totals display in this section because you are receiving a cash inflow. For example, after receiving an offer for $3,000 for a portion of unused land, you decide to sell it. Since you made money by selling an asset, this entry displays as a positive number. A few days later, you decide to purchase new mowers to help with lawn maintenance using the money earned from selling the land. Since you are spending money to buy an asset, this entry displays as a negative number.

 Financing Activities

 The Financing Activities section tracks cash received and lost from activities used to finance the business like taking out or paying off long-term loans, receiving owner contributions, distributing funds back to owners, etc. Transactions linked to Long Term Liability or Equity accounts are considered financing activities.

 Taking out a loan, payments made against long-term loans, acquisition of equity funds, and a release of equity funds may display in this section of the report if applicable.

 Summary Subreport

 Beneath the Financing Activities section, the Summary subreport displays three additional rows that summarize key financial information in the report. Each row is described below.

 Row
 Description

 Net cash increase for period

 The total change in cash balance between all of your GL accounts over the specified reporting period. This value is the sum of the totals from the Operating Activities , Investing Activities , and Financing Activities sections.

 Cash at beginning of period

 The sum of all bank accounts of the selected properties as of one day prior to the Date Range . This sum includes both deposited and undeposited funds.

 Cash at end of period

 The total cash at the end of the Date Range . This includes both deposited and undeposited funds. It is calculated using the following formula:

 Cash at end of period = Cash at beginning of period +/- Net cash increase for the period

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The GL account name and number associated with your cash flow for each listed month.

 Total

 The total amount of positive or negative cash flow for each GL account.
