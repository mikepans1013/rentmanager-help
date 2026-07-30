# Charge Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Charge-Comparison.htm

The Charge Comparison report displays the total amount of charges posted to individual tenant accounts on a month-to-month or year-to-year basis across a selected date range.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charge Comparison .

 For more information, refer to Control User Access .

 To view the Charge Comparison report, do the following:

 -
 Go to arrow_forward  Receivables arrow_forward  Charges arrow_forward Charge Comparison .
The Reports: Charge Comparison page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 The report displays a column for each month included in the date range. If the selected Date Range spans more than 12 months, the report instead displays a column for each year included in the date range.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Charges to Include

 The report displays posted charges associated with any of the selected charge types.

 Tenants to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 All

 All future, current, and past tenants display.

 This option must be selected for prospects to display.

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Records with Zero Amounts

 Check to remove tenants with no charges of the selected charge types posted from the report results.

 Show Credits

 If checked, credits linked to the associated accounts display in the report results.

 Sort Options

 Select one of the following options to determine how the report results are organized in each property subheading.

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column

 Description

 Tenant

 The name of each tenant.

 Unit

 The name of the unit with which the tenant's charges are associated.

 Month/Year Columns

 A column displays for each month included in the Date Range . If the range spans more than 12 months, a column displays for each year.

 Each column displays the total amount of charges using the selected Charges to Include that were posted to the tenant's account during each month/year. The grand total of all charges posted during each month/year appears at the bottom of each column.

 Total

 The total amount of charges posted to each tenant's account during the Date Range . A grand total of all charges posted during the date range displays at the bottom of the column.

 More Information

 If the report option for Show Credits is enabled, each column and the total is adjusted to reflect these credits.

 Charge Totals Subreport

 This subreport displays at the end of the report and is a line graph that shows the amount of charges (and possibly credits) that were posted to tenant accounts during each month/year included in the Date Range .
