# Move In/Move Out (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Move-In-Move-Out.htm

The Move In/Move Out report displays tenant move-in and move-out data for the specified properties over a date range, allowing you to verify move-in and move-out numbers at any time. The subreports allow you to audit move-ins and move-outs, and provides a summary of the overall change in occupancy.

 More Information

 Site classification names and short names can be customized to fit your business needs. For more information, refer to Homeowner Statuses & Site Classifications .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Move In/Move Out .

 For more information, refer to Control User Access .

 To view the Move In/Move Out report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Move In/Move Out .
The Reports: Move In/Move Out page displays.

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

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property is selected.

 Checking this option also displays two Site Classification Breakdown subreports only for units associated with a manufactured housing–type property with a Move In and Move Out date during the Date Range .

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

 Site Classification

 Tenants are sorted alphanumerically by Site Classification name.

 Status

 Tenants are first sorted by status: Current tenants first, then Future tenants, and then Past tenants. Tenants are further sorted alphabetically by First Name .

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 Include Expected Move In/Move Out Dates

 Check one or both of the following options to determine if special cases display in the report:

 Option
 Description

 Tenants with expected move out dates

 Check to include tenants who have an Expected MO date configured in the report as though this were their Move Out date.

 Prospects with reserved move in dates

 Check to include prospects who have a Reserved Move In date configured in the report as though this were their tenant Move In date.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 More Information

 This report does not include units with a unit type marked as Other Rentable Item . To view ORI move ins and move outs, refer to the ORI Move In/Move Out report.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Move Ins

 The tenant and leasing information for each tenant that moved in during the Date Range .

 The columns that display in the subreport are described below.

 Column
 Description

 Acc. #

 The system-generated account ID number assigned to each tenant upon creation.

 Address

 The address marked as Default for each tenant.

 Lease End

 The date when the lease ends as entered on the tenant's details page.

 Lease Start

 The date when the lease begins as entered on the tenant's details page.

 Move In

 The date when the tenant will move in as entered on the tenant's details page.

 Move Out

 If applicable, the date when the tenant will move out as entered on the tenant's details page.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Tenant

 The name of the tenant with a Move In date during the Date Range .

 Unit

 The name of the unit the tenant will be or is currently leasing.

 Unit Type

 The category of unit the tenant will be or is currently leasing.

 Move Outs

 The tenant and leasing information for each tenant that moved out during the Date Range .

 The columns that display in the subreport are described below.

 Column
 Description

 Acc. #

 The system-generated account ID number assigned to each tenant upon creation.

 Address

 The default address marked as Default for each tenant.

 Expected Move Out

 The date when the tenant expects or expected to move out as entered on the tenant's details page.

 Lease End

 The date when the lease ends as entered on the tenant's details page.

 Lease Start

 The date when the lease began as entered on the tenant's details page.

 Move Out

 The date when the tenant will move out as entered on the tenant's details page.

 Site Classification

 The name of the unit's site classification as displayed on the unit's details page. A blank row displays if the unit is not associated with a manufactured housing–type property.

 Tenant

 The name of the tenant with a Move Out date during the Date Range .

 Unit

 The name of the unit the tenant was or is currently leasing.

 Unit Type

 The category of unit the tenant was or is currently leasing.

 Summary Subreport

 A summary of the report data including how many tenants moved in and out for the properties in the report.

 The following rows display in the subreport:

 Row
 Description

 Date Range

 The dates selected in the Date Range report option.

 Days In Range

 The calculated number of days in the reporting period.

 Move Ins

 The total number of tenants that moved in during the Date Range .

 Move Outs

 The total number of tenants that moved out during the Date Range .

 Net Change in Occupancy

 The overall change in occupancy during the Date Range calculated using the following formula:

 Net Change in Occupancy = Move Ins – Move Outs

 Total Move Ins/Move Outs

 The total number of tenants that moved in and moved out during the Date Range .

 Occupancy Reconciliation Subreport

 The total occupancy of the properties one day before and one day after the Date Range . The information in this subreport can be used to calculate the total occupancy of your properties at the end of the report date range and reconcile against the Vacancy report. For more information, refer to Vacancy (Report) .

 More Information

 When calculating the occupancy, a tenant move out date does not render a unit vacant in Rent Manager until the following calendar day.

 The following rows display in the subreport:

 Row
 Description

 Move Ins from MM/DD/YY to MM/DD/YY

 The number of tenants who moved in during the Date Range .

 Move Outs from MM/DD/YY to MM/DD/YY

 The number of tenants who moved out during the Date Range .

 Move Outs on MM/DD/YY

 The number of tenants who moved out one day before the Date Range .

 Move Outs on MM/DD/YY

 The number of tenants who moved out on the last day of the Date Range .

 Occupancy on MM/DD/YY

 The number of units with an active lease one day before the Date Range .

 Occupancy on MM/DD/YY

 The total number of units with an active lease on the last day of the Date Range .

 Unitless Move Ins from MM/DD/YYYY to MM/DD/YYYY

 The number of tenants who moved in during the Date Range without an associated unit.

 Unitless Move Outs from MM/DD/YYYY to MM/DD/YYYY

 The number of tenants who moved out during the Date Range without an associated unit.

 Site Classification Breakdown by Move In Subreport

 This subreport displays when the Include Site Classification report option is checked, and includes only units associated with a manufactured housing–type property. Only site classifications with one or more units with a Move In date during the Date Range are included in this subreport.

 Site Classification Breakdown by Move Out Subreport

 This subreport displays when the Include Site Classification report option is checked, and includes only units associated with a manufactured housing–type property. Only site classifications with one or more units with a Move Out date during the Date Range are included in this subreport.
