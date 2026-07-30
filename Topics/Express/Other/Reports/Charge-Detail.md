# Charge Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Charge-Detail.htm

The Charge Detail report displays tenants and prospects with posted charges across a selected date range, along with any payments made or credits applied toward those charges.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charge Detail .

 For more information, refer to Control User Access .

 To view the Charge Detail report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Charge Detail .
The Reports: Charge Detail page displays.

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

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 This option must be selected for prospects to display.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Charges to Include

 The report displays posted charges associated with any of the selected charge types.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each property subheading. Charges with the same sort criteria are further sorted alphabetically by the tenant's last name.

 Option
 Description

 Account Number

 Charges are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Amount Charged

 Charges are sorted numerically by each Amount Charged in descending order (greatest to least). Tenants with multiple charges may display multiple times in the results.

 Charge Type

 Charges are sorted alphanumerically by the Charge type. Tenants with multiple charges may display multiple times in the results.

 Date Charged

 Charges are sorted chronologically by each Date Charged in ascending order (oldest to newest). Tenants with multiple charges may display multiple times in the results.

 Last Name

 Charges are sorted alphabetically by the tenant's Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Charges are sorted alphanumerically by the tenant's associated Unit name. Tenants with no unit display first in the results.

 Unit Type

 Charges are sorted alphanumerically by the tenant's associated Unit Type name. Tenants with no unit display first in the results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The full name of the tenant or prospect.

 Acc. #

 The system-generated account ID number assigned to each tenant or prospect upon creation.

 Unit

 The name of the unit the tenant is leasing, or to which the prospect is assigned.

 Unit Type

 The category of unit the tenant is leasing, or to which the prospect is assigned.

 Charge

 The name of the charge type associated with the charge.

 Date Charged

 The date of the charge on the tenant or prospect's View Transactions pop-up.

 Amount Charged

 The total dollar amount of each charge.

 Date Paid

 If payment is received, the date the tenant or prospect paid the charge displays. If the charge is not paid, this field is blank. If multiple payments are made on the charge, they are listed oldest to newest.

 Amount Paid

 If payment is received, the amount the tenant paid toward the charge. If multiple payments are made on the charge, they are listed oldest to newest.

 Report Summary Subreport

 This subreport displays a breakdown of the information included in the Charge Detail report, including statistical data about charge counts and amounts charged.

 Row or Column
 Description

 Tenants

 The number of tenants included in the report.

 Prospects

 The number of prospects included in the report.

 Charge Types

 The total number of charge types included in the report.

 Date Range

 The start and end dates selected in the report options.

 Days in Range

 The total number of days included in the date range.

 Move Ins During Range

 The total number of move ins that took place during the date range.

 Total Accounts During Range

 The total sum of active tenants, move-ins and prospects included in the report.

 Tenants as of MM/DD/YYYY

 The total number of active tenants for all selected properties as of the first date in the date range.

 Charge Type

 The name of each charge type associated with a charge included in the report.

 Description

 The optional description of each charge type.

 Tenants Charged

 The number of tenants and prospects who had a charge associated with the charge type.

 % Charged

 The percentage of tenants and prospects who had a charge associated with the charge type.

 # of Charges

 The number of times this charge is included in the report.

 Amount Charged

 The total amount charged for the charge type during the date range.

 Amount Paid

 The total amount of payments allocated to a charge associated with the charge type during the date range.

 Balance

 The unpaid balance remaining for each charge type as of the end of the date range.
