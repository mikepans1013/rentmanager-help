# Total Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Amount.htm

This function displays the Total Amount of an amortization-type common area maintenance (CAM) expense adjustment for a tenant's specified lease.

 More Information

 This function is used primarily for amortization-type CAM expense adjustments, which have multiple periods with varying adjustment amounts that make up the total amount of the adjustment. For one time-type adjustments, this script functions the same as the AdjustmentAmount function. For more information, refer to Adjustment Amount Function (Script) .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().TotalAmount()]

 Displays the Total Amount of the adjustment found on the amortization-type CAM expense adjustment's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalAmount( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine CAM adjustment amounts. If no date is specified, the function defaults to the beginning of time.

 [TotalAmount("12/31/ 2026 ")]

 Displays the total dollar amount of the expense adjustment with the earliest date, starting on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine CAM adjustment amounts. If no date is specified, the function defaults to the end of time.

 [TotalAmount("","12/31/ 2026 ")]

 Displays the total dollar amount of the expense adjustment with the earliest date, starting on or before December 31, 2026 .

 GLAccount

 Enter the number of the general ledger (GL) account for which to examine CAM adjustment amounts.

 [TotalAmount("","","5101")]

 Displays the total dollar amount of the expense adjustment with the earliest date that expenses GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-time CAM expense adjustments.

 [TotalAmount("","","","One-time")]

 Displays the dollar amount of the one-time expense adjustment with the earliest date.

 [TotalAmount("","","","Amortization")]

 Displays the total dollar amount of the amortization expense adjustment with the earliest date.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments  page.

 [TotalAmount("","","","","14")]

 If it is a one-time adjustment, displays the dollar amount of expense adjustment number 14 .

 If it is an amortization adjustment, displays the total dollar amount of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().CAMExpenseAdjustment().TotalAmount("01/01/ 2026 ", "12/31/ 2026 ", "", "Amortization")]

 Displays the total dollar amount of the amortization CAM expense adjustment with the earliest date in the year 2026 for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().TotalAmount("06/30/ 2026 ")]

 Displays the total dollar amount of the CAM expense adjustment with the earliest date, starting on or after June 30, 2026 for the tenant's second-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment(2).TotalAmount()]

 Displays the total dollar amount of the CAM expense adjustment with the third-earliest date for the tenant's second-listed lease.

 [Tenant().Lease().CAMExpenseAdjustment(1).TotalAmount("","","","Amortization")]

 Displays the total dollar amount of the amortization-type CAM expense adjustment with the second-earliest date for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().TotalAmount("","","","","20")]

 If CAM expense adjustment number 20 is on the tenant's second-listed lease, displays the total dollar amount of the adjustment. If CAM expense adjustment 20 is part of a different lease for the tenant, this script is invalid.
