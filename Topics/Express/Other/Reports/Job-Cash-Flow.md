# Job Cash Flow (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Job-Cash-Flow.htm

The Job Cash Flow report displays how changes to balance sheet and income statement accounts over a specified time period impact the cash balance of a job. This report is used to document the changes to cash associated with a job over a period of time. The beginning cash balance is displayed, and all changes that were made to result in the ending cash balance are shown. This report provides users with a clear picture of how the company is receiving and spending cash on a job.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Job Cash Flow .

 For more information, refer to Control User Access .

 To view the Job Cash Flow report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Job Costing arrow_forward Job Cash Flow .
The Reports: Job Cash Flow page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

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

 This option determines whether the financial activity is calculated on a cash or accrual basis.

 Option
 Description

 Accrual

 Includes all transactions for which income was earned and expenses were incurred, regardless of whether the payment was received or disbursed.

 Cash

 Includes only transactions for which payments are received or made.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 Income and expense details for the selected job(s) by GL account display. Additionally, displays a column for % Income .

 Summary

 Condensed information regarding income and expenses for the selected job(s) display.

 Separation Method

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 All selected properties are combined into a single report.

 Properties

 Generates a separate report for each selected property.

 Jobs

 Generates a separate report for each job associated with the selected properties.

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Jobs to Include

 Select the job(s) to be examined in the report. Optionally, check Include Inactive Jobs to include jobs that are no longer active.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Operating Expenses

 This section displays income and expenses that have impacted cash flow for the jobs as well as the net income for the Date Range . Additionally, this section tracks cash received and lost from the job.

 More Information

 If you run the report with the Summary report option, the total of your Income transactions minus your Expense transactions over the Date Range displays as Net Income .

 If you run the report with Detail report option, the report displays the change over the Date Range range of each individual Income and Expense account separately along with the percentage of each account's contribution to the Net Income in the % Income column.

 Adjustments to reconcile Net Income to net cash provided by operations lists all of the transactions that impacted Net Income but not your cash flow for the same jobs and Date Range , but were not linked to income or expense accounts. For example, depreciation is an expense that is subtracted from your Net Income but not your bank account, which is part of your cash flow.

 Investing Activities

 This section displays asset activity for the selected jobs associated during the Date Range . Specifically, this section tracks cash received and lost from investments in marketable securities and in long-term assets like land, buildings, etc. Transactions linked to Fixed Asset or Other Asset accounts are considered investing activities.

 As a rule, when you purchase assets in the specified reporting period, you can see negative totals in this section of the report as an asset purchase represents a cash outflow. If you sell assets, you can see positive totals in this section, because you are receiving a cash inflow.

 For example, you sell a portion of land for $3,000. Because you made money by selling an asset, this entry displays as a positive number. A few days later, you purchase a new generator to use on the job with the money earned from selling the land. Since you are spending money to buy an asset, this entry displays as a negative number.

 Financing Activities

 This section displays liability and equity activity for the jobs during the Date Range . Specifically, this section tracks cash received and lost from activities used to finance the business like taking out or paying off long-term loans, receiving owner contributions, distributing funds back to owners, etc. Transactions linked to Long Term Liability or Equity accounts are considered financing activities.

 Taking out a loan, payments made against long-term loans, acquisition of equity funds, and a release of equity funds may display in this section of the report if applicable.

 Summary Subreport

 The Summary subreport displays the dollar amounts for balances at three different financial periods during the report's date range.

 The following three rows display in the Summary subreport.

 Row
 Description

 Cash at beginning of period

 The sum of all bank accounts of the selected job(s) as of one day prior to the Date Range . This sum includes both deposited and undeposited funds.

 Net cash increase for period

 The total change in cash balance for the job(s) in all of your GL accounts over the specified reporting period. This value is the sum of the totals from the Operating Activities , Investing Activities , and Financing Activities sections.

 Cash at end of period

 The total cash at the end of the Date Range . This includes both deposited and undeposited funds. It is calculated as:

 Cash at end of period = Cash at beginning of period +/- Net cash increase for the period

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The general ledger (GL) account name and number for each transaction.

 The report options for Collapse all parent accounts and Separation Method can limit or expand the number of GL subaccounts that are displayed in the report.

 Amount

 The total of all transactions that occurred during the Date Range for each GL account of the selected jobs.

 % Income

 The percentage each income or expense entry is of the total income or expenses in the report displays. Income displays as a positive percentage and expenses displays a negative percentage.

 This column displays only if, in the Detail or Summary report option, Detail is selected.
