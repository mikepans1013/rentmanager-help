# Tenant Prepays (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Prepays.htm

The Tenant Prepays report displays tenants and prospects with prepayments applied before a certain date. These prepayments include credits that are unallocated or allocated to certain charge types and prepayments that are applied to future charges. This report can be used to determine which tenants and prospects have unapplied credits and which do not need to have payments collected for charges dated in the future, such as next month's rent.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Tenant Prepays .

 For more information, refer to Control User Access .

 To view the Tenant Prepays report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward Tenant Prepays .
The Reports: Tenant Prepays page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Show Credits

 If checked, tenants with credits entered on or before the selected As of Date , regardless of whether they are allocated or applied to any future charges display in the report. If unchecked, only tenants with prepayments entered on or before the selected As of Date that are applied to a future charge dated after the selected As of Date display in the report.

 Sort Options

 Select one of the following options to determine how the report results are sorted:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Last Name

 Tenants are sorted alphabetically by their Last Name . Commercial tenants are sorted by Company Name .

 Unit

 Tenants are sorted alphanumerically by Unit name.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Charges to Include

 The report displays total prepayments associated with any of the selected charge types.

 Detail or Summary

 This option determines how much information is displayed in the report:

 Option
 Description

 Detail

 Line items for each prepayment for the account displays.

 Summary

 The total amount of prepayments combined into a single row for each account displays.

 Tenants to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 All

 All future, current, and past tenants display.

 This option must be selected for prospects to display.

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The last and first name of the tenant or prospect associated with the prepayment(s).

 Acc. #

 The tenant or prospect account number that was generated when the account was created.

 Phone Number: Default

 The phone number marked as Default on the tenant's View Contacts page.

 Property

 The tenant's or prospect's Property associated with the prepayment. If a tenant has multiple leases, each unit with a prepayment is listed separately on the report.

 Unit

 The tenant's leased unit associated with the prepayment.

 Item

 The charge type associated with the prepayment if it is a credit. If the prepayment is applied to a future charge, P+ displays.

 The column displays only if, in the Detail or Summary field of the report options, Detail is selected.

 Date

 The date that the prepayment is made. If there is more than one prepayment, the date for each prepayment is listed.

 The column displays only if, in the Detail or Summary field of the report options, Detail is selected.

 Amount

 The amount of each prepayment as well as the total amount of all prepayments of the tenant or prospect.

 Address

 The address marked as Default in the Contacts tile.

 The column displays only if, in the Detail or Summary field of the report options, Summary is selected.
