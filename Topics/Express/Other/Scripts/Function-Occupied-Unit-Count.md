# Occupied Unit Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Occupied-Unit-Count.htm

This function displays the number of units occupied as of a specified date for the selected property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.OccupiedUnitCount()]

 Displays information found on the Occupancy tile of each unit at the financial property of a selected asset.

 Property

 [Property().OccupiedUnitCount()]

 Displays information found on the Occupancy tile of each unit at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OccupiedUnitCount( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the total number of occupied units. If no date is specified, today's date is used by default.

 A date during the tenant's occupancy period must be entered in this parameter to return results. If the provided date or default current date is outside the tenant's occupancy period, this parameter returns 0 .

 [OccupiedUnitCount("1/1/ 2026 ")]

 Displays the total number of occupied units as of January 1, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [OccupiedUnitCount("","1B1B")]

 Displays the occupied unit count of unit type 1B1B at the selected property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().OccupiedUnitCount()]

 Displays the number of units occupied as of today for the selected property.

 [Tenant().Home().FinancialProperty.OccupiedUnitCount("03/17/ 2026 ")]

 Displays the number of units at the financial property to which the tenant's home-type asset is currently linked as of March 17, 2026 .

 [Property(113).OccupiedUnitCount("","2B1B")]

 Displays the number of occupied units of unit type 2B1B for the property with the system-generated account ID number 113.

 [Property().OccupiedUnitCount("01/01/ 2026 ","1B1B")]

 Displays the number of occupied units of unit type 1B1B as of January 1, 2026 for the selected property.
