# Vendor Expense (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-Expense.htm

The Vendor Expense report displays information on expenses related to vendors broken down by the property, unit, and general ledger (GL) account impacted during the report date range.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor Expense .

 For more information, refer to Control User Access .

 To view the Vendor Expense report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Vendor arrow_forward Vendor Expense .
The Reports: Vendor Expense page displays.

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

 Units to Include

 Select the unit(s) to be examined in the report. Only the units associated with the properties selected in the Properties to Include section display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Records with Zero Amounts from the Report

 Check to remove properties accounts from the report results who have no transactional activity. Otherwise, all accounts display.

 Restrict by Owner Contract Dates

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The name of the property and property default address linked to the transaction.

 Unit

 The unit linked to the transaction.

 Date

 The date each transaction occurred.

 Reference

 Information about the payment method used for each expense transaction such as the check number or journal number.

 Amount

 The total dollar amount of the transaction that is either debited or credited.

 Allocated Amount

 The individual allocations per unit that add up to the value displayed in the Amount column.

 Chart Account Summary

 The Chart Account Summary subreport displays the general ledger account separated transaction totals for all of the properties in the report and the grand total for all transactions.

 The columns that display in the subreport are described below.

 Column
 Description

 Acc #

 The account number used as the system-wide identifier for the GL account.

 Name

 The name of each general ledger (GL) account.

 Total

 The total amount debited or credited to the GL account associated with a transaction in the report.
