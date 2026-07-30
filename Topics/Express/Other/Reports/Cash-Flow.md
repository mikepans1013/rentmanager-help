# Cash Flow (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Cash-Flow.htm

The Cash Flow report displays how changes to balance sheet and income statement general ledger (GL) accounts over a specified time period impact the cash balance. This report is used to track the movement of cash over a period of time. It starts with the beginning cash balance and reports all changes that were made to result in the ending cash balance. When properties receive money, such as collecting rental income, receiving owner contributions, or selling assets, positive totals display in the report. When properties spend money, such as paying maintenance fees, providing owner distributions, or purchasing assets, negative totals display in the report. Additionally, this report's totals include deposited and undeposited funds and provides users with a clear picture of how the company is receiving and spending cash.

 More Information

 The GL start date is considered the financial start date, so any transactions or information dated before the GL start date are not included in the report results.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Cash Flow .

 For more information, refer to Control User Access .

 To view the Cash Flow report, do the following:

 -
 Go to arrow_forward Financial Statements arrow_forward  Cash Flow arrow_forward Cash Flow .
The Reports: Cash Flow page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

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

 A line item for each GL account with changes that impact the cash balance organized by the type of GL account displays.

 Summary

 Only the total changes that impact cash balance display.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Section Descriptions

 The report is separated into the following sections.

 Operating Activities

 This section displays income and expenses that have impacted cash flow as well as the net income for the Date Range . Specifically, this section tracks cash received and lost from daily business activities like collecting rent and paying maintenance costs and measures how much cash is generated from core business products or services.

 More Information

 If, in the Detail or Summary report option, you select Summary , the total of your Income transactions minus your Expense transactions over the Date Range shows as Net Income .

 If you select Detail , the report displays the change over the Date Range of each individual Income and Expense account separately along with the percentage of each account's contribution to the Net Income in the % Income column.

 Adjustments to reconcile net income to net cash provided by operations lists all of the operational activities that impacted Net Income but not your cash flow for the same properties and Date Range but were not linked to Income or Expense accounts. For example, depreciation is an expense that is subtracted from your Net Income but not your bank account which is part of your cash flow. Collecting security deposits increases the bank but also has no effect on Net Income .

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Investing Activities

 This section displays asset activity for the selected properties or properties associated with owners during the Date Range . Specifically, this section tracks cash received and lost from investments in marketable securities and in long-term assets like land, buildings, etc. Transactions linked to Fixed Asset or Other Asset accounts are considered investing activities.

 As a rule, when you purchase assets in the specified reporting period, you can see negative totals in this section of the report as an asset purchase represents a cash outflow. If you sell assets, you can see positive totals in this section, because you are receiving a cash inflow.

 Financing Activities

 This section displays liability and equity activity for the properties during the Date Range . Specifically, this section tracks cash received and lost from activities used to finance the business like taking out or paying off long-term loans, receiving owner contributions, distributing funds back to owners, etc. Transactions linked to Long Term Liability or Equity accounts are considered financing activities.

 Taking out a loan, payments made against long-term loans, acquisition of equity funds, and a release of equity funds may display in this section of the report if applicable.

 Summary Subreport

 Beneath the Financing Activities section, the Summary subreport displays three additional rows that summarize key financial information in the report. Each row is described below.

 Row
 Description

 Net cash increase for the period

 The total change in cash balance between all of your GL accounts over the specified reporting period. This value is the sum of the totals from the Operating Activities , Investing Activities , and Financing Activities sections.

 Cash at beginning of period

 The sum of all bank accounts of the selected properties as of one day prior to the Date Range . This sum includes both deposited and undeposited funds.

 Cash at end of period

 The total cash at the end of the Date Range . This includes both deposited and undeposited funds. It is calculated as:

 Cash at end of period = Cash at beginning of period +/- Net cash increase for the period

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The GL account name and number for each transaction.

 The report options for Collapse all parent accounts and Separation Method can limit or expand the number of GL subaccounts that are displayed in the report.

 Amount

 The total of all transactions that occurred during the Date Range for each GL account of the selected properties.

 % Income

 The percentage each income or expense entry is of the total income or expenses in the report displays. Income displays as a positive percentage and expenses displays a negative percentage.

 This column displays only if, in the Detail or Summary report option, Detail is selected.
