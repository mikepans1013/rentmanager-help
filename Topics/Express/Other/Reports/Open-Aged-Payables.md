# Open Aged Payables (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Open-Aged-Payables.htm

The Open Aged Payables report can be used to review your property's monthly expenses that are outstanding as well as displaying the related general ledger (GL) account balances. This report is also helpful because it generates vendor and bill information for unpaid bills that are categorized as overdue or due within 1-30 days, 31-60 days, and 61 or more days.

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

 Additionally, on the Reports tab, you must have access to Open Aged Payables .

 For more information, refer to Control User Access .

 To view the Open Aged Payables report, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Open Aged Payables .
The Reports: Open Aged Payables page displays.

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

 Detail or Summary

 Select on of the follow options to determine how results display in the report.

 Field
 Description

 Detail

 A line item for every open amount for each vendor account display.

 Summary

 Only the total open amount for each vendor account display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Show Credits

 If checked, credits linked to the associated accounts display in the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Chart Name

 The general ledger (GL) accounts associated with unpaid bills as of the report date. Bills are grouped together beneath the associated vendor's name.

 How results display in the report depend on the following report options:

 Show Credits

 The GL account for each unallocated vendor credit displays in addition to the GL account associated with each unpaid bill.

 Summary

 Only the vendors associated with the unpaid bills display.

 Acc. #

 The Account Number for each vendor with at least one unpaid bill

 Invoice #

 Each bill's invoice number as it is entered on the bill. The column displays only if Detail is selected in the Detail or Summary section of the report options.

 Past Due

 Unpaid bills that are past due (P) by 1–30 days, 31–60 days, or 61+ days as of the report date. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor.

 How results display in the report depend on the following report options:

 Show Credits

 The amount of vendor credits display in the age group column for which the credit date falls compared to the report date.

 For example, if the vendor credit has a credit date of yesterday and the report is generated as of today, the vendor credit displays in the 30–1 (P) column.

 Summary

 The total amount of unpaid bills for the associated vendor by age group.

 Due In

 Unpaid bills that are due in 1–30 days, 31–60 days, or 61+ days as of the report date. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor. If no bills are due in an age group, a 0.00 subtotal displays.

 How results display in the report depend on the following report options:

 Show Credits

 The amount of vendor credits display in the age group column for which the credit date falls compared to the report as of date.

 For example, if the vendor credit has a credit date of tomorrow and the report is generated as of today, the vendor credit displays in the 0–30 column.

 Summary

 The total amount of unpaid bills for the associated vendor by age group.

 Total

 The total amount of all unpaid bills by vendor minus any unallocated vendor credits. Sub-totals are given at the bottom of each Past Due and Due In age group and the sum of all subtotals is given in the Total column.

 How results display in the report depend on the following report options:

 Show Credits

 Unallocated credits for the associated vendor display as negative amounts and are subtracted from the grand total of bills for the vendor.

 Summary

 The total from all age groups of each vendor’s unpaid bills.

 Chart Account Summary Subreport

 The Chart Account Summary subreport displays the total amount of all unpaid bills by GL account.

 The following columns displays on the subreport.

 Column
 Description

 Account Number

 The account number of each GL account that has one or more associated unpaid bills.

 Account Name

 The name of each GL account that has one or more associated unpaid bills.

 Total

 The total of all unpaid bills for each GL account. The total of this subreport should match the Total column of the Open Aged Payables report.

 If the report option for Show Credits is checked, the Amount column includes any unallocated vendor credits lowering the total amount for unpaid bills.
