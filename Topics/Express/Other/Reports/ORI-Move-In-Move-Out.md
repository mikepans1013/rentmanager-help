# ORI Move In/Move Out (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/ORI-Move-In-Move-Out.htm

The ORI Move In/Move Out report displays tenant move in and move out data for units with a unit type marked as Other Rentable Item (ORI) at the specified properties over a date range. This report helps you verify the number of tenants renting ORI units, such as storage units and garages, at your properties.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to ORI Move In/Move Out .

 For more information, refer to Control User Access .

 To view the ORI Move In/Move Out report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward ORI Move In/Move Out .
The Reports: ORI MoveIn/Move Out page displays.

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

 Properties with the Property Type of RV / Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports organized in the Short Term Rentals report category.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading.

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

 Status

 Tenants are first sorted by status: Current tenants first, then Future tenants, and then Past tenants. Tenants are further sorted alphabetically by First Name .

 Unit

 Tenants are sorted alphanumerically by ORI Unit name.

 Unit Type

 Tenants are sorted alphanumerically by ORI Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 Include Expected Move In/Move Out Dates

 Check one or both of the following options to determine if special cases display in the report:

 Option
 Description

 Tenants with expected move out dates

 Check to include tenants who have an Expected MO date configured in the report as though this were their Move Out date.

 Prospects with reserved move in dates

 Check to include prospects who have a Reserved Move In date configured in the report as though this were their tenant Move In date.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

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

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 More Information

 If the Restrict by owner contract dates report option is checked and the selected Date Range begins before and/or ends after the active owner contract, the report header displays only the dates where the active owner contract and the selected Date Range overlap. Filtered results display an asterisk (*) after the Date Range .

 Move In Section

 This section displays tenant and leasing information for each tenant that rented the ORI unit during the selected Date Range .

 The columns that display in the section are described below.

 Column
 Description

 Tenant

 The name of the tenant.

 Acc. #

 The system-generated account ID number assigned to each tenant upon creation.

 Unit

 The name of the ORI unit the tenant is currently leasing.

 Unit Type

 The category of ORI unit the tenant is currently leasing.

 Address

 The default address for each tenant.

 Lease Start

 The date when the lease begins as selected on the lease.

 Lease End

 The date when the lease ends as selected on the lease.

 Move In

 The date when the tenant moved in asselected on the lease.

 Move Out

 The date when the tenant moved out as selected on the lease.

 Move Out Section

 This section displays tenant and leasing information for each tenant that moved out during the selected Date Range .

 The columns that display in the section are described below.

 Column
 Description

 Tenant

 The name of the tenant.

 Acc. #

 The system generated-account ID number assigned to each tenant upon creation.

 Unit

 The name of the ORI unit the tenant is currently leasing.

 Unit Type

 The category of ORI unit the tenant is currently leasing.

 Address

 The default address for each tenant.

 Lease Start

 The date when the lease begins as entered or selected on the lease.

 Lease End

 The date when the lease ends as entered or selected on the lease.

 Move In

 The date when the tenant moved in as entered or selected on the lease.

 Move Out

 The date when the tenant moved out as entered or selected on the lease.

 Expected Move Out

 The date when the tenant expects or is expected to move out as entered or selected on the lease.

 Summary Section

 This section displays a summary of the report data including how many tenants moved in and out for the properties displayed in the report.

 The following rows display in this section:

 Row
 Description

 Date Range

 The date range selected in the report options.

 Days In Range

 The number of days in the reporting period.

 Move Ins

 The total number of tenants that moved in during the selected Date Range .

 Move Outs

 The total number of tenants that moved out during the selected Date Range .

 Net Change in Occupancy

 The overall change in occupancy during the report's date range, calculated using the following formula:

 Net Change in Occupancy = Move Ins - Move Outs

 Total Move Ins/Move Outs

 The total number of tenants that moved in and moved out during the selected Date Range .

 Occupancy Reconciliation

 This section displays the total occupancy of the selected property one day before and one day after the Date Range . The information in this subreport can be used to calculate the total occupancy of your properties at the end of the Date Range and reconcile against the ORI Vacancy report.

 More Information

 When calculating the occupancy, it is important to note that a tenant move out date does not render a unit vacant in Rent Manager until the following calendar day.

 The following rows display in this section:

 Row
 Description

 Occupancy on MM/DD/YY

 The number of units with an active lease one day before the selected Date Range of the report.

 Move Ins from MM/DD/YY to MM/DD/YY

 The number of tenants who moved in during the selected Date Range of the report.

 Move Outs from MM/DD/YY to MM/DD/YY

 The number of tenants who moved out during the selected Date Range of the report.

 Move Outs on MM/DD/YY

 The number of tenants who moved out one day before the selected Date Range .

 Move Outs on MM/DD/YY

 The number of tenants who moved out on the last day of the selected Date Range .

 Occupancy on MM/DD/YY

 The total number of units with an active lease on the last day of the selected Date Range .
