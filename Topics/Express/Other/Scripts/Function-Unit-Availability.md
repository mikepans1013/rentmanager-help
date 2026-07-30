# Unit Availability Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Availability.htm

This function displays if the selected unit is occupied or vacant as of the specified date. If the unit is vacant with a current unit status, the name of that status displays.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().UnitAvailability()]

 Displays information found on the unit's Occupancy  tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitAvailability( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the unit availability. If no date is specified, today's date is used by default.

 [UnitAvailability("1/1/ 2026 ")]

 Displays the unit availability as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().UnitAvailability()]

 Displays the unit availability status as of today for the selected unit.

 [Unit().UnitAvailability("3/12/ 2026 ")]

 Displays the unit availability status on March 12, 2026 for the selected unit.

 [Unit("132").UnitAvailability("3/1/ 2026 ")]

 Displays the unit availability status on March 1, 2026 of the unit with the system-generated account ID number 132.
