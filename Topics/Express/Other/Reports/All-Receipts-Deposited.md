# All Receipts Deposited (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/All-Receipts-Deposited.htm

The All Receipts Deposited report examines all deposits and their included payments for multiple banks and properties entered in Rent Manager within a specified date range. This report is helpful in auditing all receipts that have been deposited in Rent Manager to ensure none are missing compared to real world bank statements. Additionally, it can be useful for having a summarized overview of your deposits prior to posting management fees.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to All Receipts Deposited .

 For more information, refer to Control User Access .

 To view the All Receipts Deposited report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward All Receipts Deposited .
The Reports: All Receipts Deposited page displays.

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

 Detail or Summary

 This option determines how much information is displayed in the report:

 Option
 Description

 Detail

 All individual payments display as line items under the each deposit's subheading.

 Summary

 Each deposit displays as a single line item in the list.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Bank Accounts

 Select the bank account(s) for which to examine deposit information.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Sort Options

 Deposits are sorted chronologically by Date in ascending order (oldest to most recent). If the report option Detail is selected, select one of the following options to determine how the payment line items under each deposit are further sorted.

 Option
 Description

 Date

 Payments under each deposit are sorted chronologically by Date in ascending order (oldest to most recent).

 Unit

 Payments under each deposit are sorted alphanumerically by Unit name.

 Account Number

 Payments under each deposit are sorted numerically by the tenant's system-generated Account Number in ascending order (lowest to highest).

 Last Name

 Payments under each deposit are sorted alphabetically by the tenant's Last Name .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The report generates with different columns depending on the selection in the Detail or Summary field. The report output for each report option is described below.

 Detail

 If the report option for Detail is selected, each deposit made during the date range displays with the following fields:

 Field
 Descripiton

 Deposit Number

 The system-generated number of the deposit (e.g., D100 ).

 Date

 The date on which the deposit was made in Rent Manager .

 Bank

 The bank into which the associated payments were deposited.

 Additionally, all payment line items display under each deposit subheading with the following columns of information:

 Column
 Description

 Date

 The date on which the payment was posted in Rent Manager .

 Tenant

 The first and last name of the tenant associated with the payment, if applicable.

 Status

 The tenancy status of the payment's associated tenant ( Past , Current , or Future ).

 Account #

 The system-generated account number of the tenant associated with the payment.

 Property

 The abbreviated name of the property associated with the payment, as entered on the property's details page in the Short Name field.

 Unit

 The name of the unit tied to the payment.

 Reference

 The check number or payment method used for this payment, as recorded on the payment's details in the Reference field.

 Amount

 The dollar amount of the individual payment. Each deposit also displays a Subtotal field at the bottom which is the sum of all amounts in this column for the entire deposit.

 Summary

 If the report option for Summary is selected, the following columns display:

 Column
 Description

 Deposit Number

 The system-generated number of the deposit (e.g., D100 ).

 Date

 The date on which the deposit was made in Rent Manager .

 Bank

 The bank into which the associated payments were deposited.

 Amount

 The total dollar amount of all payments included in the deposit.
