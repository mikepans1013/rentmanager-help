# Total Prepay Allocations Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Prepay-Allocations.htm

This function displays the total value of prepayments and/or credits that are unapplied to charge(s) as of a specified date.

 You can examine credits and prepayments toward specific charge types, limit the types of credits (including prepayments) that are examined; specify the date that examines whether the credit or prepayment is still unapplied to a charge; the date range of the prepayments and/or credits to examine; which types of credits, if any, should be excluded; and whether or not unallocated prepays and credits should be included in the total.

 More Information

 The Total Allocations Function can be used to evaluate credits and payments that have been applied to a charge. Only prepayments are evaluated in this script.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.TotalPrepayAllocations()]

 Displays information from the tenant's Transactions page for the financial property listed for the selected asset.

 Lease

 [Tenant().Lease().TotalPrepayAllocations()]

 Displays information from the tenant's Transactions page for the specified lease.

 Property

 [Property().TotalPrepayAllocations()]

 Displays information from the tenant's Transactions page for the specified property.

 Tenant

 [Tenant().TotalPrepayAllocations()]

 Displays information from the tenant's Transactions page.

 Unit

 [Unit().TotalPrepayAllocations()]

 Displays information from the tenant's Transactions tile for the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalPrepayAllocations( "ChargeTypes" , "CreditTypes" , "AsOfDate" , "CreditFromDate" , "CreditToDate" , "ExcludeCreditTypes" , "ExcludeUnallocatedPrepays" )]

 More Information

 By default, unallocated prepayments and credits of the types specified by the CreditTypes parameter are added to your results.

 If you do not want unallocated prepayments and credits returned, set the ExcludeUnallocatedPrepays parameter to True .

 ChargeTypes

 Specify the preallocations to these charge type(s) you wish to examine. If no charge types are specified, all charge types display. Each charge type should be separated by a comma.

 [TotalPrepayAllocations("RC")]

 Displays the total value of all prepayments that have been allocated to the rent charge (RC) charge type as of today's date.

 CreditTypes

 Specify the preallocations to these credit type(s) you wish to examine. If no credit types are specified, all credit types display. Each credit type should be separated by a comma.

 [TotalPrepayAllocations("RC","PR")]

 Displays the total value of all prepayments that have been preallocated to the rent charge (RC) charge type as of today's date and unallocated prepayments of the payment received (PR) credit type.

 AsOfDate

 Specify the date for which to determine if the credit or payment is considered unapplied. If no date is specified, today's date is used by default.

 [TotalPrepayAllocations("","MCRD","1/1/ 2026 ")]

 Displays the value of move in special credits (MCRD) preallocated to any charge type as well as unallocated MCRD credits as of January 1, 2026 .

 CreditFromDate

 Specify the start date for returning pre allocated credit amounts . If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preferences.

 [TotalPrepayAllocations("RC","PR","10/31/ 2026 ","10/1/ 2026 ")]

 Displays the value of prepayments made on or after October 1 that are unapplied as of October 31 and are preallocated to the rent charge (RC) charge type.

 CreditToDate

 Specify the end date for returning pre allocated credit amounts . If no date is specified, the function defaults to the end of time.

 [TotalPrepayAllocations("RC","PR","10/31/ 2026 ","10/1/ 2026 ","10/31/ 2026 ")]

 Displays the value of preallocated payments of the payment received (PR) charge type made between October 1 and October 31 that are unapplied as of October 31 and are preallocated to the rent charge (RC) charge type.

 ExcludeCreditTypes

 Specify whether to ignore certain credit types. If no parameter is specified, the function defaults to False.

 True means to return all credit types except the type defined in the Credit Types parameter. False means examine only the credit type specified in the Credit Types parameter.

 [TotalPrepayAllocations("RC","PR","10/31/ 2026 ","10/1/ 2026 ","10/31/ 2026 ","True")]

 Displays the value of all preallocated credits, except for the payment received (PR) charge type, that were made between October 1 and October 31, that are unapplied as of October 31, and that are preallocated to the rent charge (RC) charge type.

 ExcludeUnallocatedPrepays

 Specify whether to exclude prepayments or credits that are not allocated to any charge. By default, payments or charges that are not allocated to anything are included in the results.

 [TotalPrepayAllocations("","PR","10/31/ 2026 ","10/1/ 2026 ","10/31/ 2026 ","","True")]

 Displays the value of all prepayments made between October 1 and October 31 that are unapplied as of October 31.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().TotalPrepayAllocations()]

 Displays the value of all unapplied prepayments (of the payment-received type) for the current tenant, plus unallocated prepayments of all credit types.

 [Property().TotalPrepayAllocations()]

 Displays the value of all unapplied prepayments (of the payment-received type) for all tenants at the current property, plus unallocated prepayments of all credit types.

 [Tenant().Lease().TotalPrepayAllocations()]

 Displays the value of all unapplied prepayments (of the payment-received type) for the first lease listed for the current tenant, plus unallocated prepayments of all credit types.

 [Tenant().Lease().TotalPrepayAllocations("RC", "PR", "1/31/ 2026 ", "1/1/ 2026 ", "1/31/ 2026 ")]

 Displays the value of preallocated payments (of the payment-received type) that were received beginning January 1, 2026 through January 31, 2026 that are preallocated to the rent charge (RC) charge type, as well as unallocated prepayments of the payment received type, but that have not been allocated as of January 31, 2026 .

 [Tenant().Lease().TotalPrepayAllocations("", "PR", "", "1/1/ 2026 ", "1/31/ 2026 ", "", "True")]

 Displays the value of all preallocated payments (of the payment-received type) that were received beginning January 1, 2026 through January 31, 2026 that are preallocated to any charge and unapplied as of today's date for the first lease listed for the current tenant. No unallocated prepayments are included.
