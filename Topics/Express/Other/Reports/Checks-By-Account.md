# Checks By Account (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Checks-By-Account.htm

The Checks By Account report displays the checks you've written to vendors, tenants, prospects, and/or owners by general ledger (GL) account over the report date range. This report allows you track and monitor check payments by GL account to verify that all information is correct. Additionally, the report makes it easy to review distributions when paying owners, compare and verify payments against bills.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Checks By Account .

 For more information, refer to Control User Access .

 To view the Checks By Account report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Payments arrow_forward Checks By Account .
The Reports: Checks By Account page displays.

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

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

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

 Vendors to Include

 Check the name of the vendor to include information associated with the vendor in the report results. Optionally, check Inactive Vendors to include vendors that are no longer active.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each general ledger (GL) account subheading:

 Option
 Description

 Amount

 Checks are sorted numerically by the Amount value in ascending order (least to greatest).

 Reference

 Checks are sorted alphanumerically by the Reference value. Checks with no reference display first in the results.

 Transaction Date

 Checks are sorted chronologically by the Check Date in ascending order (oldest to newest).

 Vendor

 Checks are sorted alphabetically by recipient's name.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Payee Account Types to Include

 Select each desired account type to include only checks paid out to the selected account types in the report results. For example, if you select Tenant and Owner , only checks made to tenant and owner accounts display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Payee

 The name of the tenant, prospect, owner, or vendor who received a check payment from you.

 Check Date

 The date that the check was written as entered on the Check details page.

 Reference

 The check number for each check as entered on the Check details page.

 Memo

 The optional comment entered on the Check details page, in the Memo field.

 Bill Date

 If the check paid a bill, the date on which the bill was issued as entered on the Bill details page.

 Bill Reference

 If the check paid a bill, the Invoice # associated with the bill as entered on the Bill details page.

 Property

 The property short name of the property associated with the check payment.

 Amount

 The total amount of the check payment as entered on the Check details page.
