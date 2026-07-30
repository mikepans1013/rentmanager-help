# Available Unit Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Available-Unit-Count.htm

This function displays the number of units available at the selected property on the specified date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.AvailableUnitCount()]

 Displays information found on the details page of the asset's financial property.

 Property

 [Property().AvailableUnitCount()]

 Displays information found on the details page of the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AvailableUnitCount( "AsOfDate" , "UnitTypes" )]

 AsOfDate

 Specify the date for which to retrieve the number of available units. If no date is specified, today's date is used by default.

 [AvailableUnitCount("1/1/ 2026 ")]

 Displays the number of available units as of January 1, 2026 .

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [AvailableUnitCount("","Studio")]

 Displays the number of units with a unit type of Studio that are available today.

 Script Examples

 [Property().AvailableUnitCount()]

 Displays the number of units available today at the selected property.

 [Property().AvailableUnitCount("","2Bed")]

 Displays the number of units with the type of 2Bed available today at the selected property.

 [Tenant().Property.AvailableUnitCount("3/1/ 2026 ")]

 Displays the number of units available on March 1, 2026 at the default property listed for the selected tenant.

 [Tenant().Lease().Property.AvailableUnitCount("4/1/ 2026 ")]

 Displays the number of units available on April 1, 2026 at the property of the first lease listed for the selected tenant.

 [Tenant().Lease().Property.AvailableUnitCount("4/1/ 2026 ","Studio")]

 Displays the number of units available on April 1, 2026 that are also of the Studio type at the property of the first lease listed for the selected tenant.
