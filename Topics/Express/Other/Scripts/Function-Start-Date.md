# Start Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Start-Date.htm

This function displays the first period adjustment date of a common area maintenance (CAM) expense adjustment for a tenant's specified lease.

 More Information

 This function is used primarily for amortization-type CAM expense adjustments, which have multiple periods with ascending dates. For one time–type adjustments, this script functions the same as the AdjustmentDate function. For more information, refer to Adjustment Date Function (Script) .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().StartDate()]

 Displays the first period date of the adjustment found on an amortized CAM expense adjustment's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [StartDate( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine first period CAM adjustment dates. If no date is specified, the function defaults to the beginning of time.

 [StartDate("12/31/ 2026 ")]

 Displays the first period adjustment date of an amortized expense adjustment, starting on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine first period CAM adjustment dates. If no date is specified, the function defaults to the end of time.

 [StartDate("","12/31/ 2026 ")]

 Displays the first period adjustment date of an amortization expense adjustment, starting on or before December 31, 2026 .

 GLAccount

 Enter the number of the general ledger (GL) account for which to examine first period CAM adjustment dates.

 [StartDate("","","5101")]

 Displays the first period adjustment date of the amortization expense adjustment that expenses GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-time CAM expense adjustments.

 [StartDate("","","","One-time")]

 Displays the adjustment date of the one-time expense adjustment.

 [StartDate("","","","Amortization")]

 Displays the first period adjustment date of the amortization expense adjustment.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments  page.

 [StartDate("","","","","14")]

 If it is a one-time adjustment, displays the date of expense adjustment number 14 .

 If it is an amortization adjustment, displays the first period adjustment date of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().CAMExpenseAdjustment().StartDate("01/01/ 2026 ", "12/31/ 2026 ", "", "Amortization")]

 Displays the first period adjustment date of the amortization CAM expense adjustment with the earliest date in the year 2026 for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().StartDate("06/30/ 2026 ")]

 Displays the first period adjustment date of the CAM expense adjustment with the earliest date, starting on or after June 30, 2026 for the tenant's second-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment(2).StartDate()]

 Displays the first period adjustment date of the CAM expense adjustment with the third-earliest date for the tenant's second-listed lease.

 [Tenant().Lease().CAMExpenseAdjustment(1).StartDate("","","","Amortization")]

 Displays the first period adjustment date of the amortization-type CAM expense adjustment with the second-earliest date for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().StartDate("","","","","20")]

 If CAM expense adjustment number 20 is on the tenant's second-listed lease, displays the first period adjustment date of the adjustment. If CAM expense adjustment 20 is part of a different lease for the tenant, this script is invalid.

 [Tenant().Lease().CAMExpenseAdjustment(2).StartDate("","","","","15")]

 If CAM expense adjustment number 15 is an amortization-type adjustment and is part of the tenant's first-listed lease, displays the date of the third period for the amortized adjustment. If CAM expense adjustment 15 is a one-time adjustment, this script is invalid.
