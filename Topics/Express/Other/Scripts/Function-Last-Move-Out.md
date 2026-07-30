# Last Move Out Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Last-Move-Out.htm

This function displays the last move-out date for the unit as entered in the Move Out Date column on the unit's Occupancy tile.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().LastMoveOut()]

 Displays information found on the unit's Occupancy tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LastMoveOut( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the last move out. If no date is specified, today's date is used by default.

 [LastMoveOut("1/1/ 2026 ")]

 Displays the last move-out date as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit().LastMoveOut()]

 Displays the last move-out date of the unit of the first lease listed for the selected tenant.

 [Tenant().Lease(1).Unit().LastMoveOut()]

 Displays the last move-out date of the unit of the first additional lease listed for the selected tenant.

 [Unit().LastMoveOut("3/14/ 2026 ")]

 Displays the last move-out date of the selected unit as of March 14, 2026 .
