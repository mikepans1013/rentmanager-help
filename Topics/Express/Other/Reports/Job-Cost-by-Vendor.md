# Job Cost by Vendor (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Job-Cost-by-Vendor.htm

The Job Cost by Vendor report displays the expenses of a specific job to track the work completed by vendors and vendors with expenses associated with the selected job.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Job Cost by Vendor .

 For more information, refer to Control User Access .

 To view the Job Cost by Vendor report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Job Costing arrow_forward Job Cost by Vendor .
The Reports: Job Cost by Vendor page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

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

 Jobs to Include

 Select the job(s) to be examined in the report. Optionally, check Include Inactive Jobs to include jobs that are no longer active.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The transaction date. If the transaction is a bill, the Post Date displays.

 Type

 The category of transaction, for example, Check or Bill .

 Reference

 The reference number of the transaction. For checks, the check number displays. For bills, the invoice number displays.

 Description

 The optional message entered in the Memo field on checks or bills.

 Amount

 The amount of each transaction. At the bottom of each set of vendor transactions, a total displays. The report operates on an accrual basis, meaning that bills display in the report even if they have not yet been paid.
