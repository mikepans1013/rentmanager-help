# Unit Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Count.htm

This function displays the number of units associated with the selected tenant, property, or owner prospect.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.UnitCount()]

 Displays information found on the scoreboard of the selected asset's financial property.

 Owner Prospect

 [OwnerProspect().UnitCount()]

 Displays information found on the owner prospect's Properties pop-up.

 Property

 [Property().UnitCount()]

 Displays information found on the scoreboard of the selected property.

 Tenant

 [Tenant().UnitCount]

 Displays information found on the tenant's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitCount( "UnitTypes" )

 Warning

 The UnitTypes parameter listed below applies only to this function when used with the FinancialProperty, OwnerProspect, or Property classes. If using this function with the Tenant class, there are no available parameters.

 UnitTypes

 Examine units only of the selected unit type(s). Multiple unit types are separated by commas.

 [UnitCount("1B1B")]

 Displays the unit count of unit type 1B1B at the selected property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().UnitCount]

 Displays the number of units that the current tenant is actively leasing or has leased in the past.

 [Asset().FinancialProperty.UnitCount()]

 Displays the total number of active and inactive units for the asset's financial property.

 [Property().UnitCount("1B1B,2B2B")]

 Displays the total number of unit types 1B1B and 2B2B at the selected property.
