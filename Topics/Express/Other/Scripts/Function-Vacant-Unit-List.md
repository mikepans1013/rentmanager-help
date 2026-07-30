# Vacant Unit List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Vacant-Unit-List.htm

This function displays unit names, separated by commas, of vacant units of the selected unit type(s) at the selected property as of the selected date. Units are considered vacant if there is no occupant with the Status of Current Occupant listed on the unit's View Unit Occupancy page.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.VacantUnitList()]

 Displays information regarding the units at the selected asset's financial property.

 Property

 [Property().VacantUnitList()]

 Displays information regarding the units at the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [VacantUnitList( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the vacant unit list. If no date is specified, today's date is used by default.

 [VacantUnitList("12/31/ 2026 ")]

 Displays the names of vacant units, separated by commas, of the current property as of December 31, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [VacantUnitList("","1B1B")]

 Displays the vacant units of unit type 1B1B at the selected property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().VacantUnitList()]

 Displays the names of vacant units, separated by commas, at the selected property as of today's date.

 [Asset().FinancialProperty.VacantUnitList()]

 Displays the names of vacant units, separated by commas, at the selected asset's financial property as of today's date.

 [Property().VacantUnitList("1/1/ 2026 ")]

 Displays the names of vacant units, separated by commas, at the selected property as of January 1, 2026 .

 [Property().VacantUnitList("1/1/ 2026 ","2B1B,3B2B")]

 Displays the names of vacant units, separated by commas, of the unit types 2B1B and 3B2B at the selected property as of January 1, 2026 .
