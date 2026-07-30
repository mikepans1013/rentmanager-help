# Bill Worksheet (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Bill-Worksheet.htm

The Bill Worksheet report displays a printable summary of information for bills that can be filtered in a number of ways, such as showing only paid or unpaid bills. Separate sections for file attachments, payments and credits, a breakdown of the ledger, and credit allocations are included on the report. This report is useful if you wish to generate a paper copy of the bill to keep on file.

 A Bill Worksheet can be quickly generated for a single bill by clicking on the Bill details page.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Bill Worksheet .

 For more information, refer to Control User Access .

 To view the Bill Worksheet report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Bill Worksheet .
The Reports: Bill Worksheet page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Date Restriction On

 Select one of the following options to determine how bills are displayed in the report results:

 Option
 Description

 Bill Date

 Bills with a Bill Date that falls within the selected Date Range display.

 Paid Date

 Bills with a Paid Date that falls within the Date Range display.

 Post Date

 Bills with a Post Date that falls within the selected Date Range display.

 Due Date

 Bills with a Due Date that falls within the selected Date Range display.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Select Vendor

 Select a vendor to examine in the report. Alternatively, select All to generate the report for all active vendors.

 Transactions to Include

 Select an option to determine which bills display in the report results.

 Option
 Description

 Open

 Includes only unpaid or partially paid bills.

 Paid

 Includes only fully paid bills.

 All

 Includes fully paid, partially paid, and unpaid bills.

 Run Bills Separately

 Check to generate separate bill worksheets for each of the selected properties or ownerships.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Sort Options

 Select one of the following options to determine the order in which bill worksheets generate.

 More Information

 The Last Check Date or a bill's Due Date , Post Date , or Bill Date is compared to the Date Range depending on which option is selected in the Date Restriction On section to determine whether to include the bill worksheet in the report results.

 Option
 Description

 Vendor/Invoice #

 Bills are sorted alphabetically by vendor name. If there are multiple bills for a vendor, they are further sorted by Invoice # in ascending order (lowest to highest). Bills with no invoice number display first in the results.

 Bill Date

 Bills are sorted chronologically by the Bill Date in ascending order (oldest to newest).

 Due Date

 Bills are sorted chronologically by the Due Date in ascending order (oldest to newest).

 Post Date

 Bills are sorted chronologically by the Post Date in ascending order (oldest to newest).

 Last Check Date

 Bills are sorted chronologically by the date of the check that paid the bill in ascending order (oldest to newest).

 If All is selected in the Transactions To Include report option, unpaid bills display first in the results.

 Invoice #

 Bills are sorted numerically by invoice number in ascending order (lowest to highest). Bills with no invoice number display first in the results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Bill Information

 At the top of the report, information about the bill and associated vendor display. This information is organized with the following fields:

 Field
 Description

 Vendor

 The name of the vendor that was paid.

 Address

 The vendor's address as shown on the bill.

 Default Bank

 The bank from which the bill was paid. If Default Bank of the property tied to the bill was selected on an unpaid bill, that bank's name populates.

 If multiple properties are contributing to the bill's payment, <Property Default> populates.

 Terms

 The bill terms entered on the bill. For more information, refer to Bill Terms (Page) .

 Memo

 An optional message or reference for this bill, if entered.

 Invoice #

 The invoice number of the bill, if entered.

 Bill Date

 The date the bill was created.

 Post Date

 The date this bill is recognized on the general ledger on an accrual accounting basis.

 Due Date

 The date the bill must be paid.

 Status

 The bill's status of Paid , Partially Paid , or Not Paid .

 Amount

 The total amount of the bill.

 File Attachments

 Any attachments to the bill are displayed in the File Attachments section. If there are no attachments to the bill, this section does not display.

 Applied Checks and Credits

 For bills that have a status of Paid or Partially Paid , applied credits and payment methods are displayed with one payment or credit per row in the Applied Checks and Credits section.

 Column
 Description

 Payment Type

 The type of payment used to pay the bill. Credit displays for bills that were paid using a vendor credit. Check displays for bills using a Pay Method of ACH, AvidPay , check, debit, eChecks , EFT, or ePay .

 Check/Credit

 The following displays based on the payment type:

 Check

 The check number.

 Credit

 The optional entry in the Reference line of a credit.

 eChecks / ePay

 The word ePay .

 AvidPay

 The prefix AV , followed by the number of the AvidPay payment.

 Debit

 The word Debit .

 EFT

 The word EFT .

 ACH

 The word ACH .

 Date

 For a credit, the date that the credit was applied to the bill. For a payment, the date of the payment.

 Comment

 The optional Memo line of a check.

 Amount

 The amount of the payment or credit.

 Ledger Breakdown

 The Ledger Breakdown section provides a line-by-line detail of the expenses that make up the bill. The sum total of all expense lines displays at the bottom of the Amount column in this subreport, which equals the total of the bill.

 More Information

 If a bill expenses multiple properties or ownerships, only the line items in the Ledger Breakdown report subheading that are associated with the selected properties or owners display.

 Column
 Description

 Property

 The property short name for the property being billed for this line item.

 Unit

 The optional unit being billed for this line item.

 1099

 Yes displays for bills with 1099-eligible expenses. No displays for bills that are not 1099-eligible expenses.

 Expense Account

 The general ledger (GL) account tracking this line item.

 Memo

 An optional comment regarding this line item.

 Amount

 The portion of the overall expense allocated to this line item.

 Credit Allocations

 If a tenant bill was created to refund a security deposit or overpayment, a line item for the credit displaysin the Credit Allocations section when the tenant bill is paid. If no credits have been allocated to a tenant bill, this section does not display.

 Column
 Description

 Date

 The date the tenant was issued a credit or made an overpayment.

 Property

 The property short name of the tenant's property. If a tenant rents at multiple properties, the property associated with the credit displays.

 Unit

 The tenant's unit. If a tenant rents multiple units, the unit associated with the credit displays.

 Description

 For unallocated overpayments, Unallocated Payment displays, and Unallocated Credit displays for unallocated credits issued. For allocated credits or overpayments, Prepaid displays in front of the allocated charge type.

 Open Amount

 The amount of credit or overpayment owed to the tenant.

 Allocated Amount

 The amount of the credit or overpayment that was allocated to this expense.
