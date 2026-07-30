# Payables Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Payables-Listing.htm

The Payables Listing report displays paid or unpaid bills associated with vendors across a date range. The report can be configured to display bills that are open, paid, or both. The Paid as of date option can help with audits.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Payables Listing .

 For more information, refer to Control User Access .

 To view the Payables Listing report, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Payables Listing .
The Reports: Payables Listing page displays.

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

 More Information

 The option selected in the Date Restriction On report option determines which dates Rent Manager examines within the Date Range report option.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 A line item for each property transaction associated with the bill displays.

 Summary

 A condensed line item for the total of each vendor bill displays.

 Select Vendor

 Select a vendor to examine in the report. Alternatively, select All to generate the report for all active vendors.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Paid as Of

 Enter a date which determines how the report calculates the amount paid of each bill. The Amount Paid column displays the amount of the bill paid as of the entered date.

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Amount

Bills are sorted numerically by the Amount Paid on the bill in ascending order (least to greatest).

 Bill Date

 Bills are sorted chronologically by the Bill Date in ascending order (oldest to newest).

 Due Date

 Bills are sorted chronologically by the Due Date in ascending order (oldest to farthest in the future).

 Reference

 Bills are sorted alphanumerically by the Invoice # . Bills with no invoice number display first in the results.

 Vendor

Bills are sorted alphabetically by vendor name. If there are multiple bills for a vendor, they are further sorted chronologically by the order they were created in Rent Manager in ascending order (oldest to newest).

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Vendor

 The name of the vendor who issued the bill.

 Reference

 The Invoice # of the bill.

 Comment

 The Memo entered for the bill.

 Bill Date

 The date on which the bill was issued.

 Due Date

 The date on which the bill is due.

 Paid

 One of the following indicates the bill's status:

 -
 Yes indicates the bill was paid.

 -
 No indicates the bill is not paid.

 -
 P indicates the bill was partially paid.

 Terms

 The bill terms selected for the bill.

 Amount Paid

 The dollar amount of the bill that was paid as of the selected date.

 Bill Amount

 The total dollar amount of the bill.

 Detail Fields

 When generating the report with the report option for Detail checked, the following unlabeled allocation fields display below the general information for each bill.

 Field
 Description

 Property

 The short name of each property expensed in the allocations grid of the bill.

 Unit

 The name of each unit expensed in the allocations grid of the bill.

 Expense Account

 The general ledger expense account used by each line item in the allocations grid of the bill.

 Memo

 The memo entered for each line item in the allocations grid of the bill.

 Amount Paid

 The dollar amount that was paid towards each line item in the allocations grid of the bill.

 Total Amount

 The dollar amount of each line item in the allocations grid of the bill.

 Chart Account Summary Subreport

 The Chart Account Summary subreport displays at the end of the Payables Listing report regardless of the report options selected. This subreport provides the name of the general ledger accounts and the total dollar amount that was expensed by the bills displayed in the report.
