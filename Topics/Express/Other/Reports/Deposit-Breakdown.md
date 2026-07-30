# Deposit Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Deposit-Breakdown.htm

The Deposit Breakdown report displays an itemization of each bank deposit made during a selected date range. Payments included in the deposit are broken down by the general ledger account that was impacted by the payment and the type of charge that was paid. For more information, refer to Make a Bank Deposit .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Deposit Breakdown .

 For more information, refer to Control User Access .

 To view the Deposit Breakdown report, do the following:

 -
 Go to arrow_forward Banking arrow_forward  Deposits arrow_forward Deposit Breakdown .
The Reports: Deposit Breakdown page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Deposits to Include

 Select each deposit to display all of its associated transactions in the report results. All deposits made to the selected Bank Accounts option during the report date range are available in the list.

 Banks

 Select the bank(s) for which Rent Manager examines bank deposits. All deposits that were made to the selected bank account(s) during the selected Date Range are available to select in the Deposits to Include field.

 Sort Options

 Report results are first sorted by deposit, then further sorted by GL account. Select one of the following options to determine how the report results are sorted in each GL account subheading:

 Option
 Description

 Last Name, First Name

 Payments are sorted alphabetically by Last Name . Accounts with the same last name are further sorted by First Name .

 Unit

 Payments are sorted alphanumerically by associated Unit name. Payments with no associated unit display first in the results.

 After selecting the report options, click Icon added on the action bar to save them, allowing you to quickly generate the report with that criteria.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the subreport are described below.

 Column
 Description

 Amount

 The total amount of each payment allocated to the charge.

 Charge Type

 The applicable charge type associated with each charge that was paid by the tenant's payment.

 Deposit Name

 Each deposit is prefaced by a row containing the deposit's Reference number and the date of the deposit in Rent Manager .

 GL Account

 Payments are grouped together under the general ledger account that was impacted by each payment. For example, if your rent charge type is linked to 4101 - Rental Income in the chart of accounts, all payments on rent charges included in the deposit are grouped together under the 4101 - Rental Income section.

 Name

 If the deposit is associated with a tenant payment, the full name of the tenant displays. If the deposit is associated with an Other Income payment, the Name of the vendor or owner displays. If a tenant, vendor, or owner payment is not associated with the deposit, the column is left blank.

 Property

 The full name of the property associated with each tenant's payment.

 Reference

 The Reference #  entered when receiving each payment.

 Unit

 The name of the unit associated with each tenant's payment.

 Chart Account Summary Subreport

 The Chart Account Summary subreport displays every general ledger account that was impacted by tenant payments in the report, and the total amount of payments that were allocated to each account.
