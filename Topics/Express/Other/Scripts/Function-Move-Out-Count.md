# Move Out Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Move-Out-Count.htm

This function displays the number of move outs for the unit as entered in the Move Out Date column on the unit Occupancy tile.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().MoveOutCount()]

 Displays information found on the unit's Occupancy tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [MoveOutCount( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine move outs. If no date is specified, the function uses the beginning of time.

 [MoveOutCount("1/1/ 2026 ")]

 Displays the move outs on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine move outs. If no date is specified, the function uses the end of time.

 [MoveOutCount("","1/31/ 2026 ")]

 Displays the move outs on or before January 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit().MoveOutCount()]

 Displays the move out count of the unit of the first lease listed for the selected tenant.

 [Tenant().Lease().Unit().MoveOutCount("1/1/2018","1/1/ 2026 ")]

 Displays the move out count of the unit of the first lease listed for the selected tenant with move-out dates between January 1, 2018 and January 1, 2026 .

 [Tenant().Lease().Unit().MoveOutCount("","1/1/ 2026 ")]

 Displays the move out count of the unit of the first lease listed for the selected tenant with move-out dates up to and including January 1, 2026 .
