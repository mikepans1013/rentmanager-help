# Check Worksheet (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Check-Worksheet.htm

The Check Worksheet report provides a printable collection of information related to checks that you record in Rent Manager . The report displays the date the check was issue, who received the payment, and how the check payment was recorded in your general ledger. This report is useful for keeping historical records about payment allocations.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Check Worksheet .

 For more information, refer to Control User Access .

 To view the Check Worksheet report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Payments arrow_forward Check Worksheet .
The Reports: Check Worksheet page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Batch Checks

 Check to create an individual report PDF for each check included in the report.

 Only Print Worksheets with 20+ Allocations

 Check to include only the checks where the payment is allocated to 20 or more expense line items.

 Payable Accounts

 Select an entity type as the recipient of check payments. All checks issued to entities of that type display in the report. You can also use the search bar to select specific account of each available entity type.

 Banks

 Select which banks to include in the report.

 Sort Options

 Select one of the following options to determine how the report results are sorted. If any owners display in the report results, they display first in the list and are sorted alphabetically by the owner Name .

 Option
 Description

 Bank Account, Check Number

 Sorts first by the GL number of the bank, then by the Check #  of checks written from each bank.

 Account, Check Number

 Sorts first by the GL number of the Expense Account listed in the first line item in the Ledger Breakdown section, then by the Check # of checks written from each account.

 Check Date

 Sorts by the date the check was written.

 Amount

 Sorts in ascending order using the total in the Amount Paid column.

 Report Results

 The report results for each check are divided into the three sections described below.

 Check Information

 This section displays information about the check, including the bank it was issued from and the date it was issued. The following rows display in this section:

 Row
 Description

 Account

 Depending on your selection in the Payable Accounts report option, this field displays the name of the tenant, prospect, owner, or vendor who was paid by the check.

 Address

 The address of the recipient of the check.

 Bank

 The bank account that was credited by this check payment.

 Memo

 The memo entered on the check when it was created.

 Check #

 The number used to identify the check.

 Date

 The date on which the check was created.

 Status

 Indicates whether or not the check has been printed from Rent Manager .

 Cleared

 Indicates if the check amount has been cleared via a bank reconciliation.

 Amount

 The total dollar amount listed on the check.

 Ledger Breakdown

 This section displays information about the general ledger accounts linked to each of the line items in the check's allocations section. The following columns display in this section:

 Column
 Description

 Property

 The property expensed by the allocation in the line item.

 Unit

 The unit associated with the line item from the check payment.

 1099

 Indicates if the allocation in the line item was made to a 1099 contractor.

 Expense Account

 The general ledger expense account used to record this line item's payment.

 Memo

 The memo entered on each line item in the check's expense breakdown section.

 Amount

 The total dollar amount allocated to the line item.

 Bills Paid

 The Bills Paid section displays when Vendor is selected in the Payable Accounts report option. This section lists any bills that were paid by the check. The following columns display in this section:

 Column
 Description

 Bill Date

 The date that the bill was created.

 Due Date

 The date that the bill is due to be paid.

 Invoice #

 The invoice number that identifies the bill.

 Memo

 The memo entered on the bill.

 Bill Amount

 The total unpaid dollar amount that remains on the bill after this check's total is deducted.

 Amount Paid

 The total dollar amount from this check that was allocated to the specified expense on the bill.

 Credit Allocations

 The Credit Allocations section displays when Tenant is selected in the Payable Accounts report option. This section lists any bills that were paid by the check. The following columns display in this section:

 Column
 Description

 Date

 The date that the bill was created.

 Property

 The property expensed by the bill.

 Unit

 The unit expensed by the bill.

 Description

 The memo entered on the bill.

 Open Amount

 The total unpaid dollar amount that remains on the bill after this check's total is deducted.

 Allocated Amount

 The total dollar amount from this check that was allocated to the specified expense on the bill.
