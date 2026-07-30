# Available Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Available.htm

This function displays whether the selected unit is available to be occupied on the specified date. The function outputs True if the unit is available and False if it is not available.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().Available()]

 Displays information from the unit's Occupancy tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Available( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the unit availability. If no date is specified, today's date is used by default.

 [Available("1/1/ 2026 ")]

 Displays whether the unit is available as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().Available()]

 Displays True if the selected unit is available as of today. Otherwise, it displays False .

 [Unit().Available("3/1/ 2026 ")]

 Displays True if the selected unit is available on March 1, 2026 . Otherwise, it displays False .

 [Unit(132).Available("3/1/ 2026 ")]

 Displays True if the unit with the system-generated account ID number 132 is available on March 1, 2026 . Otherwise, it displays False .
