# Vacant Unit Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Vacant-Unit-Count.htm

This function displays the number of vacant units for the selected property.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.VacantUnitCount()]

 Displays information found on the Occupancy tile of each unit at the financial property of a selected asset.

 Property

 [Property().VacantUnitCount()]

 Displays information found on the Occupancy tile of each unit at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [VacantUnitCount( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the number of vacant units. If no date is specified, today's date is used by default.

 [VacantUnitCount("1/1/ 2026 ")]

 Displays the number of vacant units as of January 1, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [VacantUnitCount("","1B1B")]

 Displays the number of vacant units of unit type 1B1B at the selected property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().VacantUnitCount()]

 Displays the number of vacant units as of today at the selected property.

 [Tenant().Property().VacantUnitCount("3/1/ 2026 ")]

 Displays the number of vacant units as of March 1, 2026 , at the default property listed for the selected tenant.

 [Asset().FinancialProperty.VacantUnitCount()]

 Displays the number of vacant units for the financial property of the selected asset as of today's date.

 [Property().VacantUnitCount("1/1/ 2026 ","2B1B,3B2B")]

 Displays the number of vacant units of the unit types 2B1B and 3B2B at the selected property as of January 1, 2026 .
