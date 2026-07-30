# Property Invoice Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Property-Invoice-Listing.htm

The Property Invoice Listing report provides a breakdown of all invoices that were issued to tenants, prospects, or owners from selected properties during a specified date range. This report can be used to quickly see which invoices are fully paid and which ones still have a balance.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Property Invoice Listing .

 For more information, refer to Control User Access .

 To view the Property Invoice Listing report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Sales Invoicing arrow_forward Property Invoice Listing .
The Reports: Property Invoice Listing page displays.

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

 Sort Options

 Select one of the following options to determine how the report results are organized in each property subheading. Multiple recipient entries may display if they have multiple invoices.

 Option
 Description

 Invoice #

 Invoices are sorted numerically by their system-generated invoice number in ascending order (lowest to highest).

 Name

 Invoices are sorted alphabetically by the recipient's Last Name .

 Unit

 Invoices are sorted alphanumerically by the associated Unit name. Invoices with no unit display first in the results.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Transactions to Include

 Select an option to determine which invoices display.

 Option
 Description

 Open

 Includes only unpaid or partially paid invoices in the results.

 Paid

 Includes only fully paid invoices in the results.

 All

 Includes unpaid, partially paid, and fully paid invoices in the results.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Inv. #

 The system-generated identification number for each invoice.

 Date

 The date that the invoice was created.

 Account

 The name of the tenant, prospect, or owner who received each invoice.

 Acc. #

 The system-generated account number for each tenant or prospect recipient. For owner recipients, this displays 0 .

 Property

 The property associated with each tenant or prospect recipient. For owner recipients, the property management company displays.

 Unit

 For a tenant or prospect recipient, the unit to which the invoice is linked.

 Amount

 The original Sub Total of each invoice.

 Tax

 The total tax amount applied to each invoice, if applicable.

 Total

 The original total amount of each invoice, calculated using the following formula:

 Total = Amount + Tax

 Paid

 The total amount paid towards each invoice as of the last day in the Date Range . If the amount paid is greater than zero, it displays as a negative number.

 Balance Due

 The remaining balance left to be paid for each invoice as of the last day in the Date Range .
