# Last Paid Balance (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Last-Paid-Balance.htm

The Last Paid Balance report displays the last date on which each tenant made a payment, as well as a breakdown of all charges posted, payments received, static late fees, and balance due. It can be used to view a list of tenants with a balance due and compare it to the date of the last payment the tenant made. This report is best generated for the current month to provide the most meaningful results.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Last Paid Balance .

 For more information, refer to Control User Access .

 To view the Last Paid Balance report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Last Paid Balance .
The Reports: Last Paid Balance page displays.

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

 Report Method

 Select one of the following options to determine which tenants display in the report results:

 Option
 Description

 Current tenants only

 Only tenants with a status of Current during the Date Range display.

 Only activity in the period

 Only tenants who made payments or had charges posted to their account during the Date Range display.

 Activity and prior balances

 Only tenants who either have a balance prior to the first day in the Date Range or who posted charges or received payments during the date range display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Records with Zero Amounts from the Report

 Check to remove units with no activity in the selected chart accounts from the report results.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

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

 The tenant's name.

 Status

 The tenant's status, such as past ( P ), current ( C ), or future ( F ).

 Acc. #

 The tenant's system-generated account number.

 Unit

 The name of the unit the tenant is leasing.

 Last Paid

 The date on which the tenant made their most recent payment.

 Previous Balance

 The tenant's balance as of one day prior to the Date Range .

 Rent Charges

 The sum of all rent charges posted to the tenant's account during the Date Range .

 Total Paid

 The total dollar amount of payments received from the tenant during the Date Range .

 Late Charges

 The sum of all late fees posted to the tenant's account during the Date Range .

 Other Charges

 The sum of all non-rent charges posted to the tenant's account during the Date Range .

 Balance Due

 The amount that the tenant still owes as of the last day in the Date Range .
