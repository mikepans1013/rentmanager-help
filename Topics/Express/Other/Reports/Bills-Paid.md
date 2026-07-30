# Bills Paid (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Bills-Paid.htm

The Bills Paid report displays all bills issued by a vendor that were fully or partially paid during a selected date range. The report allows you to track and monitor payments issued to vendors and can be cross-referenced with physical bills to verify that all information is correct. The bill amount is the portion of each bill that is paid by the selected property or properties.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Bills Paid .

 For more information, refer to Control User Access .

 To view the Bills Paid report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Bills Paid .
The Reports: Bills Paid page displays.

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

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Select Vendor

 Select a vendor to examine in the report. Alternatively, select All to generate the report for all active vendors.

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

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Bill Date

 Bills are sorted chronologically by the Bill Date in ascending order (oldest to newest).

 Vendor

 Bills are sorted alphabetically by vendor name. If there are multiple bills for a vendor, they are further sorted chronologically by the order they were created in Rent Manager in ascending order (oldest to newest).

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Vendor

 The name of the vendor who issued each bill.

 Acct #

 The Account Number issued to you by the vendor.

 Invoice #

 The Invoice # entered on the Bill Details for each bill.

 Bill Amount

 The Amount of the bill paid by the properties for which the report was generated and a Bill Amount total at the bottom of the column.

 Bill Date

 The Bill Date entered on the Bill Details for each bill.

 Check Date

 The Date of the check which pays each bill.

 Bills that are paid with multiple checks will include additional rows for each check.

 Check #

 The No. of the check that pays each bill or the payment method used (e.g., ePay , ACH , Debit ).

 Bills that are paid with multiple checks include additional rows for each check.

 Amount Paid

 The amount paid toward the bill amount allocated to the selected properties and an Amount Paid total at the bottom of the column.

 Bills that are paid with multiple checks include additional rows for each check.
