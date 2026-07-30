# Owner Aged Payables (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Owner-Aged-Payables.htm

The Owner Aged Payables report can be used to review your owners monthly expenses that are upcoming and outstanding as well as displaying the amount owed to each bill and a summary of balances of related chart of accounts. This report is also helpful because it generates vendor and bill information for unpaid bills that are categorized as overdue or due within 1-30 days, 31-60 days, and 61 or more days.

 This report shows activity performed only through the Bills page; activity performed outside of the Bills page (e.g., writing a check to a vendor) does not impact this report's unpaid bill amounts.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Owner Aged Payables .

 For more information, refer to Control User Access .

 To view the Owner Aged Payables report, do the following:

 -
 Go to arrow_forward Owners arrow_forward Payables arrow_forward Owner Aged Payables .
The Reports: Owner Aged Payables page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Owners to Include

 Select each owner or an owner Group to be included in the report.

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Inactive Owners to include owners that are no longer active.

 Optionally, check Show Inactive Properties to include properties that are no longer active.

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

 Three additional columns ( Name and Chart Name ) display. Additionally, each aged payable display as individual line items.

 Summary

 The total balance of each aged payable in a single line item, regardless of the chart account it is linked to, display.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Batch

 Check Run owners separately to generate a separate report for each owner. Otherwise, all selected owners are combined into a single report.

 Optionally, also check Exclude empty reports to remove reports with no data from the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Name

 The name of the owner associated with the unpaid bills.

 Chart Name

 The name of the related chart of account.

 Past Due

 Unpaid owner bills that are past due (P) by 1–30 days, 31–60 days, or 61+ days as of the report date. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor.

 Due In

 Unpaid owner bills that are due in 1–30 days, 31–60 days, or 61+ days as of the report date. If any portion of the bill was previously paid, the unpaid amount includes those allocations. Each age group displays sums by vendor. If no bills are due in an age group, a 0.00 subtotal displays.

 Total

 The total amount of all unpaid bills by vendor minus. Sub-totals are given at the bottom of each Past Due and Due In age group and the sum of all subtotals is given in the Total column.

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

 The total of all unpaid bills for each GL account. The total of this subreport should match the Total column of the Owner Aged Payables report.
