# Payment Comparison (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Payment-Comparison.htm

The Payment Comparison report displays the total amount of payments received from individual tenant accounts on a month-to-month or year-to-year basis across a selected date range. The report displays a column for each month included in the date range and can be used to view trends in which tenants are consistently paying on time and which are consistently late or miss payments.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Payment Comparison .

 For more information, refer to Control User Access .

 To view the Payment Comparison report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Payment Comparison .
The Reports: Payment Comparison page displays.

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

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Charges to Include

 The report displays total payments associated with any of the selected charge types.

 Tenants to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 All

 All future, current, and past tenants display.

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Records with Zero Amounts

 Check to remove tenants who made no payments allocated to charges of the selected charge types from the report results. Otherwise, all tenants display.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading.

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their last name. Tenants marked as Company are sorted alphabetically by Company Name .

 Unit

 Tenants are sorted alphanumerically by unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each tenant associated with the properties selected in the report options.

 Unit

 The name of the unit with which the tenant's payments are associated.

 Month/Year

 The full or abbreviated name of each month included in the date range selected in the report options. If the date range spans more than twelve months, a column displays for each year.

 Total

 The total amount of payments made by each tenant during the date range selected in the report options. A grand total of all payments received during the date range displays at the bottom of the column.

 Report Totals Subreport

 This subreport displays at the end of the report and lists the amount of payments that were received during each month/year included in the date range selected in report options and the total dollar amount received for all of the months.
