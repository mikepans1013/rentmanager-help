# Unit Transaction Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Unit-Transaction-Listing.htm

The Unit Transaction Listing report displays tenants and their posted transactions over a selected date range. This report is useful for tracking balances by unit as opposed to by tenant, as it is sorted by property and unit. The transaction information is pulled directly from the tenant's transactions on their account.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Unit Transaction Listing .

 For more information, refer to Control User Access .

 To view the Unit Transaction Listing report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Charges arrow_forward Unit Transaction Listing .
The Reports: Unit Transaction Listing page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Do Not Show Inactive Units

 If checked, the report excludes any units with the INACT. unit status applied for the entirety of the report's date range. The INACT. unit status is a default system status and cannot be deleted from Rent Manager , but it can be renamed. For more information, refer to Unit Status Types (Page) .

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

 Select one of the following options to determine how the tenants in the report results are sorted in each unit subheading. Units are sorted alphanumerically first by property, then by unit name.

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated account number in ascending order (lowest to highest).

 First Name

 Tenants are sorted alphabetically by first name.

 Last Name

 Tenants are sorted alphabetically by last name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 Each unit and its assigned Unit Type displays in a list under its associated property. Each tenant and their street address displays under their associated unit. The columns that display in the report are described below.

 Column
 Description

 Date

 The date on which the transaction was posted.

 Check #

 The check number or payment method entered in the Reference # field for each transaction.

 Charge Type Description

 The full name of the charge type associated with the transaction, as entered in the charge type's Description field. If the transaction is a payment, the column displays Payment Received .

 Comment

 The note entered on the transaction in the Comment field.

 Amount

 The dollar amount of each transaction. Payments display as a negative amount.

 Balance

 The tenant's running balance as each transaction is posted to their account.

 For each tenant, the Balance Forward field displays the tenant's balance as of one day before the start date selected in the report date range.

 Summary Subreport

 The Summary subreport provides a breakdown of all charge types used for the transactions in the report. By default, payments are applied to accounts using the PR - Payment Received system charge type. The Total Balance Forward field in the subheading displays the total amount of tenant balances as of one day before the start date selected in the report date range.

 The following columns display in the subreport:

 Column
 Description

 Charge Type

 The abbreviated name of each charge type.

 Description

 The full name of the charge type, as entered in the charge type's Description field.

 # of Tenants

 The number of tenants who received a charge or credit associated with the charge type.

 Credits

 The total amount of all credits or payments associated with the charge type, displayed as a negative amount. The total amount credited between all charge types displays at the bottom of the column.

 Charges

 The total amount of all charges associated with the charge type. The total amount charged between all charge types displays at the bottom of the column.

 Total

 The total amount of all transactions associated with the charge type. Credits and payments display as a negative amount. The total amount charged between all charge types after payments and credits are subtracted displays at the bottom of the column.
