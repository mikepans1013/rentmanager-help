# Reference Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Reference.htm

This function displays the reference number of a common area maintenance (CAM) expense adjustment for an amortization or one time adjustment.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().Reference()]

 Displays the reference number of the adjustment found on the CAM expense adjustment's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Reference( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine CAM adjustments. If no date is specified, the function defaults to the beginning of time.

 [Reference("12/31/ 2026 ")]

 Displays the reference number of the expense adjustment with the earliest date, starting on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine CAM adjustments. If no date is specified, the function defaults to the end of time.

 [Reference("","12/31/ 2026 ")]

 Displays the reference number of the expense adjustment with the earliest date, starting on or before December 31, 2026 .

 GLAccount

 Enter the number of the general ledger (GL) account for which to examine CAM adjustments.

 [Reference("","","5101")]

 Displays the reference number of the expense adjustment with the earliest date that expenses GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-time CAM expense adjustments.

 [Reference("","","","One-time")]

 Displays the reference number of the one-time expense adjustment with the earliest date.

 [Reference("","","","Amortization")]

 Displays the reference number of the amortization expense adjustment with the earliest date.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments page.

 [Reference("","","","","14")]

 Displays the reference number of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().CAMExpenseAdjustment().Reference("01/01/ 2026 ", "12/31/ 2026 ", "", "One-time")]

 Displays the reference number of the one-time CAM expense adjustment with the earliest date in the year 2026 for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().Reference("06/30/ 2026 ")]

 Displays the reference number of the CAM expense adjustment with the earliest date, starting on or after June 30, 2026 for the tenant's second-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment(2).Reference()]

 Displays the reference number of the CAM expense adjustment with the third-earliest date for the tenant's second-listed lease.

 [Tenant().Lease().CAMExpenseAdjustment(1).Reference("","","","Amortization")]

 Displays the reference number of the amortization-type CAM expense adjustment with the second-earliest date for the tenant's first-listed lease.
