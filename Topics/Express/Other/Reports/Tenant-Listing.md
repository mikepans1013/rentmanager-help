# Tenant Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Listing.htm

The Tenant Listing report displays leasing and contact information for past, current, and/or future tenants at selected properties as of the report date. You can use this report to export a list of tenant details for owners, keep up to date on the statuses of active leases by property, or review upcoming move-in dates for future tenants.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Tenant Listing .

 For more information, refer to Control User Access .

 To view the Tenant Listing report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Listings arrow_forward Tenant Listing .
The Reports: Tenant Listing page displays.

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

 More Information

 Properties with the Property Type of RV/Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports listed in the Short Term Rentals report category.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Address

 Tenants are sorted alphanumerically by their Default address. Tenants with no address display first in the list.

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Lease End

 Tenants are sorted chronologically by the Lease End date in ascending order (oldest to furthest in the future). Tenants with no lease end date display first in the list.

 Lease Start

 Tenants are sorted chronologically by the Lease Start date in ascending order (oldest to furthest in the future).

 Move In

 Tenants are sorted chronologically by the Move In date in ascending order (oldest to furthest in the future).

 Move Out

 Tenants are sorted chronologically by the Move Out date in ascending order (oldest to furthest in the future). Tenants with no move out date display first in the list.

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each tenant.

 Acc. #

 The system generated account number assigned to each tenant upon creation.

 Unit

 The name of the unit that the tenant is currently occupying.

 Unit Type

 The category of unit the tenant is currently occupying as selected on the unit's details page in the General Information tile.

 Address

 The default street address for each tenant.

 Move In

 The move in date as entered on leases for each tenant.

 Move Out

 The move out date as entered on leases for each tenant.

 Lease Start

 The lease start date as entered on leases for each tenant.

 Lease End

 The lease end date as entered on leases for each tenant.

 Phone Number: Default

 The phone number marked as Default on the tenant's View Contacts page

 Property Summary Subreport

 The Property Summary subreport displays additional leasing information including the number of units and the occupancy rate for each property. The subtotals for Units , Occupied Units , and Tenants display as well as the average occupancy rate across all properties included in the report results at the bottom of the subreport.

 Column
 Description

 Property

 The name of each property with tenants selected in the report options.

 Short Name

 The abbreviated name for each property as entered on the property's details page in the General Information tile.

 Units

 The total number of units associated with each property.

 Occupied Units

 The total number of units that are occupied by a tenant or tenant(s) at each property by the As of Date .

 Tenants

 The total number of tenants who are occupying a unit at each property by the As of Date .

 % Occupied

 The percentage of units at each property that is occupied by a tenant or tenant(s) by the As of Date . The occupancy rate is calculated using the following formula:

 Occupied = Occupied Units/Units
