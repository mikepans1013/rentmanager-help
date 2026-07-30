# Undeposited Receipts (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Undeposited-Receipts.htm

The Undeposited Receipts report displays a list of payments received from tenants or prospects within a date range that are not deposited as of the date the report is generated. The report includes the due date of the payment, the tenant or prospect's name and account number, and the dollar amount of each undeposited payment.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Undeposited Receipts .

 For more information, refer to Control User Access .

 More Information

 If all payments in the selected date range are deposited, this report does not generate any results even if there are existing undeposited payments. For example, if you generate the report on December 1, 2026 , and set the date range for the month of January 2026 , undeposited payments display only if they are dated in January 2026 . Any undeposited payments made between February 2026 and December 1, 2026 , are not included in the results.

 To view the Undeposited Receipts report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Undeposited Receipts .
The Reports: Undeposited Receipts page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each property subheading. Payments with the same sort criteria are further sorted alphabetically by the tenant's last name.

 Option
 Description

 Account Number

 Payments are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Date

 Payments are sorted chronologically by each Date in ascending order (oldest to newest). Tenants with multiple charges may display multiple times in the results.

 Date Created

 Payments are sorted chronologically by the date they were created in ascending order (oldest to newest). Tenants with multiple charges may display multiple times in the results.

 Last Name

 Payments are sorted alphabetically by the tenant's Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Payments are sorted alphanumerically by the tenant's associated Unit name. Tenants with no unit display first in the results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Date

 The date the undeposited payment was made.

 Tenant

 The tenant or prospect who made the undeposited payment.

 Status

 The account status (i.e., Current , Past , or Future ) of the tenant who made the payment as of the date the report is generated. If the payer is a prospect, Future displays.

 Acc. #

 The system-generated ID number of the tenant or prospect with which the undeposited payment is associated.

 Property

 The property with which the undeposited payment is associated.

 Unit

 The unit with which the undeposited payment is associated.

 Reference

 The Reference # of the undeposited payment.

 Amount

 The dollar amount of the undeposited payment.
