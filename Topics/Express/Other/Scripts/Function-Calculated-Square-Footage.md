# Calculated Square Footage Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Calculated-Square-Footage.htm

This function displays the total of all active units' square footage at the selected property as of a specified date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.CalculatedSquareFootage()]

 Displays the sum of all Square Footage values specified on the unit's details page for every unit that does not have an inactive status at the property assigned to track financial and reporting activity for an asset.

 Property

 [Property().CalculatedSquareFootage()]

 Displays the sum of all Square Footage values specified on the unit's details page for each unit at the property that does not have an inactive status.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CalculatedSquareFootage( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the total calculated square footage. If no date is specified, today's date is used by default.

 [CalculatedSquareFootage("11/22/ 2026 ")]

 Displays the total calculated square footage as of November 22, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().CalculatedSquareFootage()]

 Displays the total calculated square footage of the property.

 [Tenant().Property.CalculatedSquareFootage()]

 Displays the total calculated square footage of the tenant's default property.

 [Tenant().Lease(1).Property.CalculatedSquareFootage()]

 Displays the total calculated square footage of the first property associated with the tenant's second lease.

 [Tenant().Home().FinancialProperty.CalculatedSquareFootage("03/17/ 2026 ")]

 Displays the total calculated square footage at the property to which the tenant's home-type asset is currently linked on the details page as of March 17, 2026 .
