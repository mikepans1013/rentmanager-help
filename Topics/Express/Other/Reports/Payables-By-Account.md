# Payables By Account (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Payables-By-Account.htm

The Payables By Account report displays paid or unpaid bills across a date range, organized by GL account. The report can be configured to display bills that are open, paid, or both.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Payables By Account .

 For more information, refer to Control User Access .

 To view the Payables By Account report, do the following:

 -
 Go to arrow_forward  Payables arrow_forward General arrow_forward Payables By Account .
The Reports: Payables By Account page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 The option(s) selected in Date Restriction On report option determines which date(s) Rent Manager examines within the Date Range report option.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Select Vendor

 Select a vendor to examine in the report. Alternatively, select All to generate the report for all active vendors.

 Sort Options

 Select one of the following options to determine how the report results are sorted within each account subheading:

 Option
 Description

 Amount

 Bills are sorted numerically by each bill's Amount for the associated account in ascending order (least to greatest).

 Bill Date

 Bills are sorted chronologically by the Bill Date in ascending order (oldest to newest).

 Due Date

 Bills are sorted chronologically by the Due Date in ascending order (oldest to farthest in the future).

 Reference

 Bills are sorted alphanumerically by the Invoice # . Bills with no invoice number display first in the results.

 Vendor

 Bills are sorted alphabetically by vendor name. If there are multiple bills for a vendor, they are further sorted chronologically by the order they were created in Rent Manager in ascending order (oldest to newest).

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Bills to Include

 Select an option from the drop-down list to determine whether the report displays Open bills (unpaid or partially paid bills), Paid bills, or All bills.

 Date Restriction On

 Select one of the following options to determine how bills are displayed in the report results:

 Option
 Description

 Bill Date

 Bills with a Bill Date that falls within the selected Date Range display.

 Post Date

 Bills with a Post Date that falls within the selected Date Range display.

 Due Date

 Bills with a Due Date that falls within the selected Date Range display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 If the Restrict by owner contract dates report option is checked and the selected date range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected date range overlap.

 Column Descriptions

 The report is organized by GL account. Bills display in the section under each account listed in the Expense Account column of the bill's details. The columns that display in the report are described below.

 Most of the information displayed in this report can be found in the bill's details. For more information, refer to Bill Details (Page) .

 Column
 Description

 Payee

 The name entered in the Payee field on the vendor's General tab for a vendor bill. If the bill is for a tenant or prospect, the name of the tenant or prospect displays.

 Reference

 The Invoice # on the bill.

 Memo

 The text entered in the Memo field on the bill.

 Bill Date

 The date on which the bill was issued.

 Due Date

 The date by which the bill must be paid.

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis.

 Property

 The short name of the property selected on the line item with the correlating expense account on the bill.

 Paid Status

 The payment status of the bill on or before the To date selected in the report options.

 If the bill has been fully paid, Y displays. If the bill has been partially paid, P displays.

 If the bill has not yet been paid, N displays.

 Check #

 If the bill has been partially or fully paid, displays the No. as entered on the check that paid the bill. If the bill was paid with multiple checks, <Multi> displays.

 Check Date

 If the bill has been partially or fully paid, displays the date on which the check paid the bill. If the bill was paid with multiple checks, this field remains blank.

 Amount

 The total dollar amount of the line item with the according expense account on the bill.
