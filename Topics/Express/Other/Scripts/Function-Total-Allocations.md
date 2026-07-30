# Total Allocations Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Allocations.htm

This function displays the total value of applied allocations for the specified class. The parameters in this function can examine only the current state of the allocation and not if it was previously allocated.

 More Information

 The function TotalPrepayAllocations can be used to evaluate credits and payments that have not yet been applied to a charge. No prepayments or unallocated credits are returned by this script.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.TotalAllocations()]

 Displays information from the tenant's View Transactions pop-up for all tenants at the financial property listed for the selected Asset .

 Lease

 [Tenant().Lease().TotalAllocations()]

 Displays information from the tenant's View Transactions pop-up for the specified lease.

 Property

 [Property().TotalAllocations()]

 Displays information from the tenant's View Transactions pop-up for all tenants at the specified property.

 Tenant

 [Tenant().TotalAllocations()]

 Displays information from the tenant's View Transactions pop-up.

 Unit

 [Unit().TotalAllocations()]

 Displays information from the tenant's View Transactions pop-up for all tenants at the specified unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalAllocations( "ChargeTypes" , "CreditTypes" , "ChargeFromDate" , "ChargeToDate" , "CreditFromDate" , "CreditToDate" , "ExcludeCreditTypes" , "AllocationFromDate" , "AllocationToDate" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [TotalAllocations("RC")]

 Displays the value of payment received credit type allocations applied to the rent charge (RC) charge type.

 CreditTypes

 Specify the credit type(s) you wish to examine. If no credit types are specified, PR —or Payment Received—transactions are examined. Each credit type should be separated by a comma.

 [TotalAllocations("RC","PR")]

 Displays the value of payment received (PR) credit type allocations applied to the rent charge (RC) charge type.

 ChargeFromDate

 Specify charges posted on or after this date. This examines the date the charge was posted, not the date a payment was allocated to a charge. If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preferences.

 [TotalAllocations("RC","PR","1/1/ 2026 ")]

 Displays the value of payment received (PR) credit type allocations that have been applied to the rent charge (RC) charge type starting on January 1, 2026 .

 ChargeToDate

 Specify charges posted on or before this date. This examines the date the charge was posted, not the date a payment was allocated to a charge. If no date is specified, the function defaults to the end of time.

 [TotalAllocations("RC,LC","PR","1/1/ 2026 ","2/1/ 2026 ")]

 Displays the value of payment received (PR) credit type allocations applied to the rent charge (RC) and late charge (LC) charge types starting on January 1, 2026 through February 1, 2026 .

 CreditFromDate

 Specify payments and credits applied on or after this date . If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preferences.

 [TotalAllocations("RC,LC","PR","1/1/ 2026 ","2/1/ 2026 ","1/1/ 2026 ")]

 Displays the total value of all credits applied to the rent charge (RC) and late charge (LC) charge types from January 1, 2026 to February 1, 2026 and the value of payment received (PR) credit type allocations applied from January 1, 2026 to the current date.

 CreditToDate

 Specify payments and credits posted on or after this date . If no date is specified, the function defaults to the end of time.

 [TotalAllocations("RC,LC","PR","1/1/ 2026 ","2/1/ 2026 ","1/1/ 2026 ","2/1/ 2026 ")]

 Displays the total value of all credits applied to the rent charge (RC) and late charge (LC) charge types from January 1, 2026 to February 1, 2026 and the value of payment received (PR) credit type allocations applied from January 1, 2026 to February 1, 2026 .

 ExcludeCreditTypes

 Specify whether to ignore certain credit types. If no parameter is specified, the function defaults to False.

 True means to return all credit types except the type defined in the Credit Types parameter. False means examine only the credit type specified in the Credit Types parameter.

 [TotalAllocations("RC,LC","PR","1/1/ 2026 ","2/1/ 2026 ","1/1/ 2026 ","2/1/ 2026 ","True")]

 Displays the total value of all credits applied to the rent charge (RC) and late charge (LC) charge types from January 1, 2026 to February 1, 2026 and the value of all credit type allocations, except for the payment received (PR) type, applied from January 1, 2026 to February 1, 2026 .

 AllocationFromDate

 Specify the start date for displaying allocated credit amounts. If no date is specified, the function uses the G/L Start Date as entered in the General Ledger Settings section of system preference.

 More Information

 This parameter is helpful when troubleshooting and looking for payments and credits issued during the CreditTo and CreditFrom dates that were posted during a closed accounting period and the user chose to date the allocation of that transaction in an open period. This is considered the allocation date of that transaction.

 Unless you are specifically looking for credits and payments made outside the hard close period, the AllocationFrom and AllocationTo dates should be left blank. Generally, the transactions are allocated on the same date that they are made.

 [TotalAllocations("", "PR", "1/1/ 2026 ", "1/31/ 2026 ", "1/1/ 2026 ", "1/1/ 2026 ", "1/31/ 2026 ", "", "2/1/ 2026 ")]

 Displays the total value of all payments received in January that were allocated to any charge posted in January but that were actually allocated on February 1 or later.

 AllocationToDate

 Specify the end date for displaying allocated credit amounts. If no date is specified, the function defaults to the end of time.

 More Information

 This parameter is helpful when troubleshooting and looking for payments and credits issued during the CreditTo and CreditFrom dates that were posted during a closed accounting period and the user chose to date the allocation of that transaction in an open period. This is considered the allocation date of that transaction.

 Unless you are specifically looking for credits or payments made outside the hard close period, the AllocationFrom and AllocationTo dates should be left blank. Generally, the transactions are allocated on the same date that they are made.

 [TotalAllocations("", "PR", "1/1/ 2026 ", "1/31/ 2026 ", "1/1/ 2026 ", "1/31/ 2026 ", "", "2/1/ 2026 ", "2/28/ 2026 ")]

 Displays the total value of all payments received in January that were allocated to any charge posted in January but that were actually allocated in February.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().TotalAllocations()]

 Displays the value of all paid allocations for the current tenant.

 [Property().TotalAllocations()]

 Displays the value of all paid allocations for all tenants at the current property.

 [Tenant().Lease().Unit().TotalAllocations()]

 Displays the value of all allocations for the unit of the first lease listed for the current tenant.

 [Tenant().TotalAllocations("RC", "WCRD", "1/1/ 2026 ", "1/31/ 2026 ", "1/1/ 2026 ", "1/31/ 2026 ")]

 Displays the value of credits and payments allocated to the rent charge (RC) charge type that were dated from January 1, 2026 , through January 31, 2026 , and the allocated (applied) credits for the work credit (WCRD) credit type that were dated from January 1, 2026 , through January 31, 2026 , for the current tenant.

 [Tenant().TotalAllocations("RC", "PR", "1/1/ 2026 ", "1/31/ 2026 ", "1/1/ 2026 ", "1/31/ 2026 ", "True")]

 Displays the value of credits allocated to the rent charge (RC) charge type from January 1, 2026 , through January 31, 2026 , and all allocated (applied) credit types except payment received (PR) from January 1, 2026 , through January 31, 2026 , for the current tenant.

 [Tenant().TotalAllocations("", "", "10/1/ 2026 ", "10/31/ 2026 ", "", "", "", "11/1/ 2026 ", "11/30/ 2026 ")]

 Displays the value of credits allocated to all charge types where charges were posted from October 1, 2026 , through October 31, 2026 , and all allocated (applied) credits for all credit types where an allocation was made from November 1, 2026 , through November 30, 2026 , for the current tenant.
