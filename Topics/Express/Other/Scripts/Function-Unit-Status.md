# Unit Status Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Status.htm

This function displays the unit status for the specified unit as of a specified date.

 Possible returns of this script are the same as the Unit Availability Listing report and are as follows:

 Result
 Description

 Occupied No Pre-Lease

 Occupied units with no Move Out date entered on the selected lease.

 Occupied Pre-Lease

 Occupied units that have both a current tenant with a Move Out date entered on Leases and a new tenant with a future Move In date.

 Occupied With Notice

 Occupied units that either have a current tenant with a future Notice date or a future Move Out date.

 Available

 Units that are vacant, not leased with a future date, and either do not have a unit status or have a unit status with Show As Available checked.

 Will Be Available

 Vacant units with a unit status that has Show as Available   unchecked and a future unit status End Date entered on View Unit Status .

 Pre-Lease Vacant

 Currently vacant units with a tenant that has a future Move In date.

 Pre-Lease Not Ready

 Vacant units with a unit status that has Show As Vacant checked and that have a tenant with a future Move In date.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().UnitStatus()]

 Displays information found on the unit's Occupancy tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitStatus( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the unit status.

 If no date is specified, today's date is used by default.

 [UnitStatus("12/31/ 2026 ")]

 Displays the unit status as of December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit().UnitStatus()]

 Displays the status of the unit of the first lease listed for the current tenant.

 [Tenant().Lease(1).Unit().UnitStatus()]

 Displays the status of the unit of the first additional lease listed for the current tenant.

 [Unit().UnitStatus("1/1/ 2026 ")]

 Displays the status of the unit as of January 1, 2026 .
