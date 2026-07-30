# Aged Payables (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Aged-Payables.htm

The Aged Payables report can be used to review your property's monthly expenses that are upcoming and outstanding as well as displaying credits. This report is also helpful because it generates vendor and bill information for unpaid bills that are categorized as overdue or due within 1-30 days, 31-60 days, and 61 or more days.

 This report shows activity performed only through the Bills page; activity performed outside of the Bills page (e.g., writing a check to a vendor) does not impact this report's unpaid bill amounts.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Aged Payables .

 For more information, refer to Control User Access .

 To view the Aged Payables report, do the following:

 -
 Go to arrow_forward Payables arrow_forward  General arrow_forward Aged Payables .
The Reports: Aged Payables page displays.

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

 Bank Balance Summary

 Optionally, display additional bank information in the report.

 Option
 Description

 Show bank balance summary

 The Bank Balance Summary subreport, which shows balances for all bank accounts in Rent Manager , displays at the end of the report.

 If checked, the Selected property balances only option becomes available.

 Selected property balances only

 Includes only the properties in the Properties to Include section in the Balance column totals.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 The option selected in Date Restriction On determines which date field on the bill(s) Rent Manager examines.

 Date Restriction On

 Select one of the following options to determine how bills are displayed in the report results:

 Option
 Description

 Bill Date

 Bills with a Bill Date that falls on or before the selected As of Date display.

 Post Date

 Bills with a Post Date that falls on or before the selected As of Date display.

 Due Date

 Bills with a Due Date that falls on or before the selected As of Date display.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each open payable organized by vendor account displays.

 Summary

 Only the open amount total for each vendor account displays.

 Batch

 Check Run properties separately to generate a separate report for each property. Otherwise, all selected properties are combined into a single report.

 Optionally, also check Exclude empty reports to remove reports with no data from the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Chart Name

 The vendors and GL accounts associated with unpaid bills as of the report date.

 If you selected the Show Credits or Summary report options, see the information below for how it affects this column.

 Show Credits

 The GL account for each unallocated vendor credit displays in addition to the GL account associated with each unpaid bill.

 Summary

 Only the vendors associated with the unpaid bills display.

 Account Number

 The account number for each vendor with at least one unpaid bill as it is entered on the vendor's details page.

 Past Due

 Unpaid bills with a bill, post, or due date on or before the As of Date and are past due (P) by 1-30 days, 31-60 days, or 61+ days. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor.

 If you selected the Show Credits or Summary report options, see the information below for how it affects this column.

 Show Credits

 The amounts of vendor credits display in the age group column for which the credit date falls compared to the report as of date. For example, if the vendor credit has a credit date of yesterday and the report is generated as of today, the vendor credit displays in the 30-1 (P) column.

 Summary

 The total amounts of unpaid bills for the associated vendor by age group.

 Current

 Unpaid bills that have a bill, post, or due date on or before the As of Date and are due in 0-30 days, 31-60 days, or 61+ days. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor. If no bills are due in an age group, a 0.00 subtotal displays.

 If you selected the Show Credits or Summary report options, see the information below for how it affects this column.

 Show Credits

 The amounts of vendor credits display in the age group column for which the credit date falls compared to the report as of date. For example, if the vendor credit has a credit date of yesterday and the report is generated as of today, the vendor credit displays in the 30-1 (P) column.

 Summary

 The total amounts of unpaid bills for the associated vendor by age group.

 Total

 The total amount of all unpaid bills by vendor minus any unallocated vendor credits. Sub-totals are given at the bottom of each Past Due and Due In age group and the sum of all subtotals is given in the Total column.

 If you selected the Show Credits or Summary report options, see the information below for how it affects this column.

 Show Credits

 Unallocated credits for the associated vendor display as negative amounts and are subtracted from the grand total of bills for the vendor.

 Summary

 The total of each vendor's unpaid bills and unallocated vendor credits from all age groups.

 Open Vendor Credits Subreport

 This subreport displays unallocated vendor credits as of the report date for the vendor(s) of the selected properties.

 The following columns display:

 Column
 Description

 Vendor

 The vendor associated with each vendor credit.

 Reference

 If applicable , the message entered on the vendor credit.

 Date

 The credit date for each vendor credit.

 Property

 The property associated with each vendor credit.

 Unit

 If applicable, the unit associated with each vendor credit.

 Chart Name

 The GL account associated with each vendor credit.

 Amount (first)

 The value of the full vendor credit amount before any allocations.

 Open Amount

 The current unallocated amount of each vendor credit.

 More Information

 To display this subreport, vendor credits must be added using the vendor credits tool. For more information, refer to Add a Vendor Credit .

 Bill Prepayments Subreport

 This subreport displays the transaction details of checks and credits that pay a bill with a future Post Date or Due Date . The subreport displays if each of the following occurs in a generated report:

 -
 In the Date Restriction On section of the report options, either Post Date or Due Date is selected.

 -
 At least one bill in the report has a Post Date or Due Date , depending on which is selected in the Date Restriction On section, set in the future.

 -
 A check or credit is applied to a bill before the Post Date or Due Date that is set in the future, depending on which is selected in the Date Restriction On section.

 The following columns display:

 Column
 Description

 Vendor

 The name of each vendor that has a check or credit applied before an unpaid bill's Bill Date .

 Check #

 The check number for each check or the message entered in the Reference field for credits.

 Invoice #

 If applicable the invoice number entered on the bill.

 Payment Date

 The date on which the check was written or the credit was created.

 Bill Date

 The date listed on each bill.

 Post Date

 The date each bill was posted.

 Due Date

 The date payment is due for each bill.

 Payment Amount

 The amount for each prepayment applied to a bill.

 Chart of Account Summary Subreport

 This subreport displays the total amount of all unpaid bills by GL account.

 The following columns display:

 Column
 Description

 Chart Account

 The GL account that has one or more associated unpaid bills.

 Amount

 The total of all unpaid bills for each GL Account minus any allocated vendor credits. The total of this subreport should match the Total column of the Aged Payables report.

 If you selected the Show Credits report option, the Amount column includes any unallocated vendor credits lowering the total amount for unpaid bills.

 Payable Summary by Property Subreport

 This subreport displays the amount of all unpaid bills by the property each bill is allocated.

 The following columns display:

 Column
 Description

 Property

 The name of each property with unpaid bill allocations.

 Amount

 The total of all unpaid bills for each property minus any allocated vendor credits. The total of this subreport should match the Total column of the report.

 If you selected the Show Credits report option, the Amount column includes any unallocated vendor credits lowering the total amount for unpaid bills.

 Bank Balance Summary Subreport

 The default bank accounts balances for properties with an unpaid bill allocated to them as of the report date. The subreport displays only if the report option to Show bank balance summary is checked.

 The following columns display:

 Column
 Description

 Bank Account

 The name and number of each default bank account for properties with an unpaid bill allocated to them.

 Balance

 The bank balance for each bank account as of the report date.

 If Selected property balances only is checked in the report options, only properties selected in the Properties to Include section of the report options are included in the Balance column totals.
