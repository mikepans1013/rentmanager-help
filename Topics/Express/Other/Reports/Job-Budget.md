# Job Budget (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Job-Budget.htm

The Job Budget report displays general ledger (GL) account budgeted amounts for selected jobs. The amounts displayed in the report come directly from the job budget.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Run accounting reports
 Enabled

 Additionally, on the Reports tab, you must have access to Job Budget .

 For more information, refer to Control User Access .

 To view the Job Budget report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Job Costing arrow_forward Job Budget .
The Reports: Job Budget page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Select a file format from the drop-down list. By default, PDF is selected.

 -
 Click Generate Report .

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Chart of Accounts Mapping

 To customize how general ledger accounts display in the report, select the name of the desired Chart Mapping . If no chart mappings are created, < None > displays. For more information, refer to Chart Accounts Mapping (Page) .

 Collapse All Parent Accounts

 Check to display only the total value of the parent account in the report. Otherwise, the value of the parent account and all subaccounts and their values.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Run Jobs Separately

 Check to generate a separate report for each selected job. Otherwise, all selected jobs are combined into a single report.

 Include Job Budget Comments

 Check to include the Comments subreport, which lists comments added to the job budget organized by GL account. For more information, refer to Job Budget (Pop-Up) .

 Jobs to Include

 Select the job(s) to be examined in the report. Optionally, check Include Inactive Jobs to include jobs that are no longer active.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Report Sections

 The report results are separated by general ledger (GL) account type. This includes Income , Expense , Asset , Liability , and Equity . The report also includes a Summary section that displays the total amount budgeted to each GL account type for the jobs selected. A Comments section is included if the report option to Include Job Budget Comments is selected.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Account

 The name and number for GL accounts that have budgeted amounts for the selected job(s).

 Amount

 The amount that was budgeted for each GL account.

 Comments Subreport

 If the report option to Include Job Budget Comments is selected, the Comments section displays with any comments added to the job budget, grouped by job.

 Column
 Description

 Chart Account

 The name and number for GL accounts for which budget comments were entered.

 Comment

 The text of the comment as entered on the job budget.
