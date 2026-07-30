# Occupied Unit List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Occupied-Unit-List.htm

This function displays a list of the unit names (separated by commas) of units occupied as of a specified date for the selected property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.OccupiedUnitList()]

 Displays a list of the occupied unit names at the selected asset's financial property.

 Property

 [Property().OccupiedUnitList()]

 Displays a list of the occupied unit names at the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OccupiedUnitList( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the list of occupied units. If no date is specified, today's date is used by default.

 [OccupiedUnitList("10/31/ 2026 ")]

 Displays a list of the unit names (separated by commas) of units occupied as of October 31, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [OccupiedUnitList("1B1B")]

 Displays the unit names (separated by commas) for occupied units of unit type 1B1B for the current property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().OccupiedUnitList()]

 Displays a list of the unit names (separated by commas) occupied as of today for the selected property.

 [Prospect().Property().OccupiedUnitList("","2B2B")]

 Displays a list of the occupied unit names (separated by commas) of the unit type 2B2B at the selected prospect's current property.

 [Property(113).OccupiedUnitList("01/01/ 2026 ")]

 Displays a list of the unit names (separated by commas) of units occupied as of January 1, 2026 for the property with the system-generated account ID number 113.

 [Tenant().Home().FinancialProperty.OccupiedUnitList("03/17/ 2026 ")]

 Displays a list of the unit names (separated by commas) occupied at the financial property of the selected tenant's home-type asset as of March 17, 2026 .
