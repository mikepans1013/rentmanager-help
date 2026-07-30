# Tenant Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Tenant-Count.htm

This function displays the total number of current, past, and future tenants associated with the selected property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.TenantCount()]

 Displays information found on the Occupancy tile of each unit at the financial property of a selected asset.

 Property

 [Property().TenantCount()]

 Displays information found on the Occupancy tile of each unit at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TenantCount( "FromDate" , "TenantType" )]

 FromDate

 Specify the date on or after which to examine the tenant count. If no date is specified, the function uses the beginning of time.

 [TenantCount("1/1/ 2026 ")]

 Displays the total number of current, past, and future tenants on or after January 1, 2026 .

 TenantType

 Specify the type of tenant ( Current , Past , or Future ) to examine. If no parameter is specified, the function examines all tenant types.

 [TenantCount("","Current")]

 Displays the total number of tenants with the tenant type Current at the selected property.

 Script Examples

 The following scripts show various ways the function can be used:

 [Asset().FinancialProperty.TenantCount()]

 Displays the total number of current, past, and future tenants at the asset's financial property.

 [Property().TenantCount("5/1/ 2026 ")]

 Displays the total number of current, past, and future tenants on or after May 1, 2026 at the selected property.

 [Property().TenantCount("1/1/ 2026 ","Past")]

 Displays the total number of tenants with the tenant type Past on or after January 1, 2026 at the selected property.
