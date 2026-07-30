# Late Fee Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Late-Fee-Amount.htm

This function displays the potential total of per-day late fees incurred by the tenant if they pay their rent on the parameter date. This function calculates only per-day late fees; it does not include fixed or percentage late fees.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Tenant

 [Tenant().LateFeeAmount()]

 Displays per-day late fee information found on the tenant's Add Payment pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LateFeeAmount( "AsOfDate" )]

 AsOfDate

 Specify the as of date to use when examining late fees. If no date is specified, the function uses the current date.

 [LateFeeAmount("6/20/ 2026 ")]

 Displays the total of the per-day late fees calculated as of the tenant paying their rent on June 20, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().LateFeeAmount()]

 Displays the total of all per-day late fees calculated as of today for the current tenant.

 [Tenant().LateFeeAmount("03/01/ 2026 ")]

 Displays the total of all per-day late fees calculated as of March 1, 2026 for the current tenant, assuming they paid their accumulated charges on March 1, 2026 .
