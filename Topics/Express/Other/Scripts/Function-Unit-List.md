# Unit List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-List.htm

This function displays a list of unit names, separated by commas, for every unit where the tenant is either currently leasing or has leased in the past when used with the Tenant class. The results are listed in chronological order based on the Original Date for each lease.

 In addition, this function can be utilized with the Property class to display unit names, separated by commas, for every unit at the selected property as of the selected date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.UnitList()]

 Displays information found on the details page of each unit at the asset's financial property.

 Property

 [Property().UnitList()]

 Displays information found on the details page of each unit at the property.

 Tenant

 [Tenant().UnitList()]

 Displays information found on the tenant's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitList( "UnitTypes" )]

 Warning

 The UnitTypes parameter applies only to the function when it is used with the FinancialProperty or Property class. If using this function with the Tenant class, there are no available parameters.

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [UnitList("1B1B")]

 Displays units of unit type 1B1B for the selected property or tenant.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().UnitList()]

 Displays a list of unit names for every unit where the current tenant is either actively leasing or has leased in the past.

 [Property().UnitList("1B1B,2B2B")]

 Displays a list of units of the unit types 1B1B and 2B2B at the selected property.

 [Asset().FinancialProperty.UnitList()]

 Displays a list of unit names for every unit at the financial property of the current asset.
