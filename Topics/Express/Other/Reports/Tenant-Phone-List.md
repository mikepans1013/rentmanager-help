# Tenant Phone List (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Phone-List.htm

The Tenant Phone List report provides a list of default phone numbers for tenants at the selected properties. The report is useful if you need a list of all tenant contact information. Additionally, you can export and import the Tenant Phone List report to make changes or updates to tenant phone numbers.

 By generating the Tenant Phone List in the comma-separated values (CSV) file format, you can export the file and make changes, such as updating all the tenants that don't have phone numbers listed. After making updates, you can import the data back into Rent Manager . This method enables you to update multiple tenant phone numbers simultaneously, forgoing the need for manual updates. For more information, please refer to Import Tenant/Prospect Contacts .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Tenant Phone List .

 For more information, refer to Control User Access .

 To view the Tenant Phone List report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Listings arrow_forward Tenant Phone List .
The Reports: Tenant Phone List page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report. Only properties with a Property Type of Manufactured Housing display in the list.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 Properties with the Property Type of RV/Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports listed in the Short Term Rentals report category.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by the tenant's system-generated ID number in ascending order (lowest to highest).

 Address

 Tenants are sorted alphabetically by the tenant's address.

 Last Name

 Tenants are sorted alphabetically by the tenant's Last Name .

 Phone

 Tenants are sorted numerically by the tenant's phone number.

 Unit

 Tenants are sorted alphanumerically by the tenant's Unit .

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Acc. #

 The system-generated account number assigned to the tenant upon creation.

 Phone Number

 The phone number marked as Default on the tenant's View Contacts page on the Phone Numbers tile.

 Property

 The default property where the tenant resides.

 Status

 The tenant's occupancy status of past, current, or future as determined by the move in and move out dates on the tenant's most recent lease.

 Street

 The street address marked as Default for thetenant.

 Tenant

 The full name of the tenant.

 Unit

 The name of the unit that the tenant is currently leasing.
