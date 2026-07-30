# Adjustment List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Adjustment-List.htm

This function displays the list of a common area maintenance (CAM) expense adjustments (separated by commas) for a tenant's specified lease.

 The output of the function displays the adjustment's Ref # , GL Account , Adj. Date , Adj. Amount , and Internal Note , separated by commas.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment Class (Script)

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentList()]

 Displays a list of the adjustments found on the CAM Expense Adjustments page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AdjustmentList( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine the CAM adjustments. If no date is specified, the function defaults to the beginning of time.

 [AdjustmentList("12/31/ 2026 ")]

 Displays the list of all expense adjustments dated on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine the CAM adjustments. If no date is specified, the function defaults to the end of time.

 [AdjustmentList("","12/31/ 2026 ")]

 Displays the list of all expense adjustments dated on or before December 31, 2026 .

 GLAccount

 Enter the number of the general ledger (GL) account for which to examine the CAM adjustment list.

 [AdjustmentList("","","5101")]

 Displays the list of all expense adjustments that expense GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-time CAM expense adjustments.

 [AdjustmentList("","","","One-time")]

 Displays the list of all one-time expense adjustments.

 [AdjustmentList("","","","Amortization")]

 Displays the list of all amortization expense adjustments.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments  page.

 [AdjustmentList("","","","","14")]

 If it is a one-time adjustment, displays information only for expense adjustment number 14 .

 If it is an amortization adjustment, displays the list of all periods of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentList("01/01/ 2026 ", "12/31/ 2026 ", "", "One-time")]

 Displays the list of one-time CAM expense adjustments dated in the year 2026 for the tenant's first-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().AdjustmentList("06/30/ 2026 ")]

 Displays the list of CAM expense adjustments dated on or after June 30, 2026 for the tenant's second-listed lease.

 [Tenant().Lease(1).CAMExpenseAdjustment().AdjustmentList("","","","Amortization","20")]

 If CAM expense adjustment number 20 is on the tenant's second-listed lease and is an amortization-type expense, displays the list of all periods in the adjustment. If CAM expense adjustment 20 is part of a different lease for the tenant, this script is invalid.
