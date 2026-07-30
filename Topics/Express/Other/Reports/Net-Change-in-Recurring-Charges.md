# Net Change In Recurring Charges (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Net-Change-in-Recurring-Charges.htm

The Net Change In Recurring Charges report examines the difference between recurring charges inherited by tenants across a date range. The report displays the amount of recurring charges inherited by a tenant as of the first day in a selected date range, the new amount inherited at the end of the date range, and the percentage and dollar amount change between the two amounts. A report summary also provides details about the net change across all charge types included in the results.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Net Change In Recurring Charges .

 For more information, refer to Control User Access .

 To view the Net Change In Recurring Charges report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Rent Roll arrow_forward Net Change In Recurring Charges .
The Reports: Net Change In Recurring Charges page displays.

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

 The report displays total recurring charges associated with any of the selected charge types.

 Posting Period

 Select an option to determine whether the report examines Monthly or Weekly recurring charges, as selected in the Rent Period field of the tenant's details page.

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

 Show Amounts That Have Not Changed

 Check to include unchanged recurring charges in the report.

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 First Name

 Tenants are sorted alphabetically by their First Name .

 Last Name

 Tenants are sorted alphabetically by their Last Name .

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each tenant with inherited recurring charges.

 Acc. #

 Each tenant's system-generated account ID number.

 Unit

 The name of the unit each tenant is leasing.

 Amount As Of MM/DD/YY (From date)

 The total amount of recurring charges using any of the Charges to Include charge types inherited by each tenant on the first day of the Date Range .

 The sum of all inherited charges on the first day of the Date Range displays at the bottom of the column.

 Amount As Of MM/DD/YY (To date)

 The total amount of recurring charges using any of the Charges to Include charge types inherited by each tenant on the last day of the Date Range .

 The sum of all inherited charges on the last day of the Date Range displays at the bottom of the column.

 Net Change

 The difference between the amount of inherited recurring charges on the last day of the date range and the first day of the date range, using the following formula:

 Net Change = Amount As Of (To date) - Amount As Of (From date)

 The net change between all inherited charges displays at the bottom of the column.

 % Change

 The percent change between the amount of inherited recurring charges on the first day of the date range and the last day of the date range, using the following formula:

 % Change = Net Change / Amount As Of (From date)

 The percent change between all inherited charges displays at the bottom of the column.

 Report Summary Subreport

 This subreport displays information about the number of tenants included in the report, the number of days in the report date range, and statistics about the charge types included in the report.

 The information in this subreport is organized into the following fields and columns:

 Field
 Description

 Total Tenants Listed

 The number of tenants included in the report results.

 Total Current Tenants

 The number of tenants who are considered current (with a Move In date before the last day in the Date Range and either no Move Out date or a Move Out date after the last day in the Date Range ) as of the last day in the Date Range .

 Charge Types

 The name of each charge type included in the report results. If all charge types are included, All displays.

 Date Range

 The Date Range selected in the report options.

 Days In Range

 The number of days included in the selected Date Range .

 Column
 Description

 Charge Type

 The Name of each charge type included in the report, as it displays in the Charge Types page.

 Description

 The Description of each charge type included in the report, as it displays in the Charge Types page.

 Tenants Charged (From date)

 The number of tenants included in the report who inherited a recurring charge of each type as of the first day in the Date Range .

 % Charged (From date)

 The percentage of tenants included in the report who inherited a recurring charge of each type as of the first day in the Date Range , calculated using the following formula:

 % Charged (From date) = Custs Charged (From date) / Customers

 # of Charges (From date)

 The number of times a recurring charge of each type was inherited by a tenant as of the first day in the Date Range .

 Amount Charged (From date)

 The total amount of recurring charges of each type that was inherited by tenants as of the first day in the Date Range .

 Tenants Charged (To date)

 The number of tenants included in the report who inherited a recurring charge of each type as of the last day in the Date Range .

 % Charged (To date)

 The percentage of tenants included in the report who inherited a recurring charge of each type as of the last day in the Date Range , calculated using the following formula:

 % Charged (To date) = Custs Charged (To date) / Customers

 # of Charges (To date)

 The number of times a recurring charge of each type was inherited by a tenant as of the last day in the Date Range .

 Amount Charged (To date)

 The total amount of recurring charges of each type that was inherited by tenants as of the last day in the Date Range .
