# Rented Square Footage Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Rented-Square-Footage.htm

This function displays the total square footage of all units at the selected property that are currently occupied.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.RentedSquareFootage()]

 Displays information found in the Square Footage field on the unit's Miscellaneous tile for the financial property of a selected asset.

 Property

 [Property().RentedSquareFootage()]

 Displays information found in the Square Footage field on the unit's Miscellaneous tile for the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RentedSquareFootage( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the rented square footage. If no date is specified, today's date is used by default.

 [RentedSquareFootage("1/1/ 2026 ")]

 Displays the rented square footage as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().RentedSquareFootage()]

 Displays the total square footage of all units at the property that are currently occupied as of today's date.

 [Property().RentedSquareFootage("5/1/ 2026 ")]

 Displays the total square footage of all units at the property that are currently occupied as of May 1, 2026 .

 [Asset().FinancialProperty.RentedSquareFootage()]

 Displays the total square footage of all rented units at the asset's financial property as of today's date.
