# GL Account Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-GL-Account.htm

This function displays the general ledger (GL) account number and name of a common area maintenance (CAM) expense adjustment for a tenant's specified lease.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().GLAccount()]

 Displays the GL account of the adjustment found on the CAM expense adjustment's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [GLAccount( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine the CAM adjustment GL account. If no date is specified, the function defaults to the beginning of time.

 [GLAccount("12/31/ 2026 ")]

 Displays the GL account of the expense adjustment with the earliest date, starting on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine the CAM adjustment GL account. If no date is specified, the function defaults to the end of time.

 [GLAccount("","12/31/ 2026 ")]

 Displays the GL account of the expense adjustment with the earliest date, starting on or before December 31, 2026 .

 GLAccount

 Enter the number of the GL account for which to examine CAM adjustments.

 [GLAccount("","","5101")]

 Displays the GL account name and number of the expense adjustment with the earliest date that expenses GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-time CAM expense adjustments.

 [GLAccount("","","","One-time")]

 Displays the GL account of the one-time expense adjustment with the earliest date.

 [GLAccount("","","","Amortization")]

 Displays the GL account of the amortization expense adjustment with the earliest date.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments  page.

 [GLAccount("","","","","14")]

 If it is a one-time adjustment, displays the GL account of expense adjustment number 14 .

 If it is an amortization adjustment, displays the GL account of the first period of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().CAMExpenseAdjustment().GLAccount("01/01/ 2026 ", "12/31/ 2026 ", "", "One-time")]

 Displays the GL account of the one-time CAM expense adjustment with the earliest date in the year 2026 for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().GLAccount("06/30/ 2026 ")]

 Displays the GL account of the CAM expense adjustment with the earliest date, starting on or after June 30, 2026 for the tenant's second-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment(2).GLAccount()]

 Displays the GL account of the CAM expense adjustment with the third-earliest date for the tenant's second-listed lease.

 [Tenant().Lease().CAMExpenseAdjustment(1).GLAccount("","","","Amortization")]

 Displays the GL account of the amortization-type CAM expense adjustment with the second-earliest date for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().GLAccount("","","","","20")]

 If CAM expense adjustment number 20 is on the tenant's second-listed lease, displays the GL account of the adjustment. If CAM expense adjustment 20 is part of a different lease for the tenant, this script is invalid.

 [Tenant().Lease().CAMExpenseAdjustment(2).GLAccount("","","","","15")]

 If CAM expense adjustment number 15 is an amortization-type adjustment and is part of the tenant's first-listed lease, displays the GL account of the third period for the amortized adjustment. If CAM expense adjustment 15 is a one-time adjustment, this script is invalid.
