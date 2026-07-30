# Available Unit List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Available-Unit-List.htm

This function displays a list of unit names (separated by commas) of available units at the selected property on the specified date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.AvailableUnitList()]

 Displays information found on the Occupancy tile of each unit at the financial property.

 Property

 [Property().AvailableUnitList()]

 Displays information found on the Occupancy tile of each unit at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AvailableUnitList( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the list of unit IDs. If no date is specified, today's date is used by default.

 [AvailableUnitList("1/1/ 2026 ")]

 Displays a list of unit names, separated by commas, of units that are available as of January 1, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [AvailableUnitList("","Studio")]

 Displays a list of unit names, separated by commas, of units of the Studio type that are available today.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().AvailableUnitList()]

 Displays a list of unit names for units available today at the selected property.

 [Property().AvailableUnitList("","Retail")]

 Displays a list of unit names for units with the type of Retail available today at the selected property.

 [Tenant().Property.AvailableUnitList("3/1/ 2026 ")]

 Displays a list of unit names for units available on 3/1/ 2026 at the default property listed for the selected tenant.

 [Tenant().Lease().Property.AvailableUnitList("4/1/ 2026 ")]

 Displays a list of unit names for units available on 4/1/ 2026 at the property of the first lease listed for the selected tenant.

 [Tenant().Lease().Property.AvailableUnitList("4/1/ 2026 ","1Bed")]

 Displays a list of unit names for units available on 4/1/ 2026 that are also of the type of 1Bed at the property of the first lease listed for the selected tenant.

 [Asset().FinancialProperty.AvailableUnitList()]

 Displays a list of unit names for units available today at the financial property of the selected asset.
