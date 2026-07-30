# Total Unit Allocations Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Function-Total-Unit-Allocations.htm

This function displays the total value of all payment and prepay allocations for a specified period and/or specified charge or credit types for the unit of the tenant's selected lease.

 More Information

 This script has been replaced with a newer version. If you have used this script in letters or reports, it will continue to function.

 For more information refer to Total Allocations Function (Script) or Total Prepay Allocations Function (Script) .

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Tenant().Lease().Unit.TotalUnitAllocations()]

 Displays information from the tenant's View Transactions pop-up for the specified lease.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalUnitAllocations( "ChargeTypes" , "CreditTypes" , "ChargeFromDate" , "ChargeToDate" , "CreditFromDate" , "CreditToDate" , "ExcludeCreditTypes" , "AllocationFromDate" , "AllocationToDate" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalUnitAllocations("RC")]

 Displays the value of payment received credit type allocations applied to the rent charge (RC) charge type.

 CreditTypes

 Specify the credit type(s) you wish to examine. If no credit types are specified, PR —or Payment Received—transactions are examined. Each credit type should be separated by a comma.

 [TotalUnitAllocations("RC","PR")]

 Displays the value of payment received (PR) credit type allocations applied to the rent charge (RC) charge type.

 ChargeFromDate

 Specify the start date for displaying allocated charge amounts. If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preferences.

 [TotalUnitAllocations(“RC,LC”,””,”1/1/ 2026 ”)]

 Examines the value of paid allocations for Rent Charge (RC) and Late Charge (LC) charge types and allocated (applied) credits for the Payment Received (PR) credit type beginning January 1, 2026 .

 ChargeToDate

 Specify the end date for displaying allocated charge amounts. If no date is specified, the function defaults to the end of time.

 [TotalUnitAllocations(“”,””,”1/1/ 2026 ”,”2/1/ 2026 ”)]

 Examines the value of paid allocations for all applied charge types and allocated (applied) credits for the Payment Received (PR) credit type from January 1, 2026 to February 1, 2026 .

 AllocationFromDate

 Specify the start date for displaying allocated credit amounts. If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preference.

 [TotalUnitAllocations(“”,””,”1/1/ 2026 ”,”2/1/ 2026 ”,”1/1/ 2026 ”)]

 Examines the value of paid allocations for all applied charge types from January 1, 2026 to February 1, 2026 and allocated (applied) credits for the Payment Received credit type from January 1, 2026 to the end of time.

 AllocationToDate

 Specify the end date for displaying allocated credit amounts. If no date is specified, the function defaults to the end of time.

 [TotalUnitAllocations(“”,””,”1/1/ 2026 ”,”2/1/ 2026 ”,”1/1/ 2026 ”,”2/1/ 2026 ”)]

 Examines the value of paid allocations for all applied charge types from January 1, 2026 to February 1, 2026 and allocated (applied) credits for the Payment Received credit type from January 1, 2026 to February 1, 2026 .

 ExcludeCreditTypes

 Specify whether to ignore certain credit types. If no parameter is specified, the function defaults to False.

 True means to return all credit types except the type defined in the Credit Types parameter. False means examine only the credit type specified in the Credit Types parameter.

 [TotalUnitAllocations(“RC,LC”,”PR”,””,””,””,””,"True")]

 Examines the value of paid allocations for Rent Charge (RC) and Late Charge (LC) charge types for all credit types except the Payments Received credit type.

 IgnorePreallocations

 Specify whether to ignore preallocations. If no parameter is specified, the function defaults to False .

 True means to ignore preallocations. False means to include preallocations.

 More Information

 Preallocations display only if they have been applied to a charge.

 [TotalUnitAllocations(“RC,LC”,”PR”,””,””,””,””,"True","False")]

 Examines the value of paid allocations for Rent Charge (RC) and Late Charge (LC) charge types for all credit types except the Payments Received credit type and including preallocations.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Unit.TotalUnitAllocations()]

 Displays the value of all allocations for the unit of the tenant's first listed lease.

 [Tenant().Lease(1).Unit.TotalUnitAllocations()]

 Displays the value of all allocations for the unit of the tenant's first additional lease.

 [Tenant().Lease().Unit.TotalUnitAllocations(“RC”,”WCRD”,”1/1/ 2026 ”,”1/31/ 2026 ”,”1/1/ 2026 ”,”1/31/ 2026 ”,”False”)]

 Displays the value of the paid allocations for the Rent Charge (RC) charge type from 1/1/ 2026 –1/31/ 2026 and the allocated (applied) credits for the Work Credit (WCRD) credit type from 1/1/ 2026 –1/31/ 2026 for the unit of the tenant's first listed lease.

 [Tenant().Lease().Unit.TotalUnitAllocations(“RC”,”PR”,”1/1/ 2026 ”,”1/31/ 2026 ”,”1/1/ 2026 ”,”1/31/ 2026 ”,”True”,”True”)]

 Displays the value of paid allocations for the Rent Charge (RC) charge type from 1/1/ 2026 –1/31/ 2026 and all allocated (applied) credit types except Payment Received (PR) from 1/1/ 2026 –1/31/ 2026 plus preallocations for the unit of the tenant's first listed lease.

 [Tenant().Lease().Unit.TotalUnitAllocations(“RC,LC”,””,””,””,””,””,””,”True”)]

 Displays the value of all paid allocations for the Rent Charge (RC) and Late Charge (LC) charge types and all allocated (applied) credits for the Payment Received(PR) credit type, ignoring preallocations, for the unit of the tenant's first listed lease.
