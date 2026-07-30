# Total Occupants Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Occupants.htm

This function displays the total number of contacts for all tenants occupying the unit of the selected lease as of a specified date. The results of this function can be narrowed to display only the occupancy count of a specific leased unit by using the Lease index parameter.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Tenant().Lease().Unit.TotalOccupants()]

 Displays information found on the tenant's Contacts tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalOccupants( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the number of contacts. If no date is specified, today's date is used by default.

 [TotalOccupants("12/10/ 2026 ")]

 Displays the total tenant occupants of the unit as of December 10, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit.TotalOccupants()]

 Displays the total number of contacts for all tenants occupying the unit of the first lease listed for the current tenant.

 [Tenant().Lease(1).Unit.TotalOccupants()]

 Displays the total number of contacts for all tenants occupying the unit of the first additional lease listed for the current tenant.

 [Tenant().Lease().Unit.TotalOccupants("3/19/ 2026 ")]

 Displays the total number of contacts for all tenants occupying the unit of the first lease listed for the current tenant as of March 19, 2026 .
