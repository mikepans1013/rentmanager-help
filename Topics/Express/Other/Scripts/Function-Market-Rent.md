# Market Rent Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Market-Rent.htm

This function displays the market rent as of a specified date for the selected unit. The market rent may be defined for each unit on the Current Market Rent tile. It is the estimated value of the unit in relation to similar rental units in that area.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().MarketRent]

 Displays the Market Rent of the rentable asset as entered on the asset's General tile.

 Financial Property

 [ Class(). FinancialProperty.MarketRent()]

 Displays information found on the unit's Current Market Rent tile for the asset's listed financial property.

 Home

 [ Class(). Home().MarketRent()]

 Displays the Market Rent of the rentable home as entered on the home's General tile.

 Property

 [Property().MarketRent()]

 Displays property information found on the unit's Current Market Rent tile.

 Unit

 [Unit().MarketRent()]

 Displays information found on the unit's Current Market Rent tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [MarketRent( "FromDate" , "ToDate" , "AsOfDate" )]

 Warning

 The FromDate and ToDate parameters listed below apply only to the function when it is used with the FinancialProperty and Property classes.

 The AsOfDate parameter listed below applies only to the function when it is used with the Unit class.

 FromDate

 Specify the date on or after which to examine market rent. If no date is specified, the function uses today's date.

 [MarketRent("1/1/ 2026 ")]

 Displays the market rent on or after January 1, 2026 .

 ToDate

 Specify the date on or before which to examine market rent. If no date is specified, the function uses today's date.

 [MarketRent("","1/1/ 2026 ")]

 Displays the market rent on or before January 1, 2026 .

 AsOfDate

 Specify the date for which to retrieve the market rent.

 If no date is specified, today's date is used by default.

 [MarketRent("12/31/ 2026 ")]

 Displays the market rent amount as of December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().MarketRent()]

 Displays the market rent as of today for the unit.

 [Unit().MarketRent("3/1/ 2026 ")]

 Displays the market rent as of March 1, 2026 for the unit.

 [Tenant().Lease().Unit().MarketRent()]

 Displays the market rent for the unit of the first lease listed for the current tenant as of today.

 [Tenant().Property().MarketRent()]

 Displays the market rent for the default property listed for the current tenant as of today.

 [Tenant().Lease().Property().MarketRent("6/1/ 2026 ")]

 Displays the market rent for the property of the first lease listed for the current tenant on or after June 1, 2026 .

 [Asset().FinancialProperty.MarketRent("","3/1/ 2026 ")]

 Displays the market rent on or before March 1, 2026 at the financial property of the asset.

 [Tenant().Home().MarketRent("","5/29/ 2026 ")]

 Displays the market rent on or before May 29, 2026 for the rentable home-type asset.

 [Tenant().Lease().Property().MarketRent("5/1/ 2026 ","6/1/ 2026 ")]

 Displays the market rent for the property of the first lease listed for the tenant between May 1, 2026 and June 1, 2026 .
