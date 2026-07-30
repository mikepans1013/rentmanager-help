# Set Adjustment Filter Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Set-Adjustment-Filter.htm

This function filters CAM expense adjustment items associated with the selected entity based on the assigned parameter values. The CAMExpenseAdjustment functions that are used after this script retrieve values based on the parameter filters set in the SetAdjustmentFilter function and determine what output to display based on that information.

 If this function is run again with different parameters, any following CAMExpenseAdjustment functions are run again based on the new parameter filters. If this function is run again with no parameters, all filters are removed for examining any adjustment item scripts that follow.

 This function is useful for establishing filter parameters in one location that are then applied to multiple CAMExpenseAdjustment scripts that follow so that you don't have to establish the same parameters for every single CAMExpenseAdjustment function.

 More Information

 This function is used in conjunction with any functions that follow the CAMExpenseAdjustment class. This function must be run first in your scripting to compile the data set as defined by your parameters, but does not directly display any output. For a list of all CAMExpenseAdjustment functions, refer to CAM Expense Adjustment Class (Script) .

 Any Lease class or CAMExpenseAdjustment class indexes must be established on the functions that follow, as the SetAdjustmentFilter class filters only by the function's parameters.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 CAM Expense Adjustment

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter()]

 Examines information found on the CAM expense adjustment's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SetAdjustmentFilter( "FromDate" , "ToDate" , "GLAccount" , "AdjustmentType" , "Reference" )]

 FromDate

 Specify the date on or after which to examine CAM adjustments. If no date is specified, the function defaults to the beginning of time.

 [SetAdjustmentFilter("12/31/ 2026 ")]

 All following CAMExpenseAdjustment function scripts display information from the expense adjustment with the earliest date, starting on or after December 31, 2026 .

 ToDate

 Specify the date on or before which to examine CAM adjustments. If no date is specified, the function defaults to the end of time.

 [SetAdjustmentFilter("","12/31/ 2026 ")]

 All following CAMExpenseAdjustment function scripts display information from the expense adjustment with the earliest date, starting on or before December 31, 2026 .

 GLAccount

 Enter the number of the general ledger (GL) account for which to examine CAM adjustments.

 [SetAdjustmentFilter("","","5101")]

 All following CAMExpenseAdjustment function scripts display information from the expense adjustment with the earliest date that expenses GL account number 5101 (e.g., 5101 - Landscaping ).

 AdjustmentType

 Specify if you want to examine Amortization or One-Time CAM expense adjustments.

 [SetAdjustmentFilter("","","","One-Time")]

 All following CAMExpenseAdjustment function scripts display information from the one-time expense adjustment with the earliest date.

 [SetAdjustmentFilter("","","","Amortization")]

 All following CAMExpenseAdjustment function scripts display information from the amortization expense adjustment with the earliest date.

 Reference

 Enter the system-generated reference number of the CAM adjustment you wish to examine, as displayed in the Ref# column of the CAM Expense Adjustments page.

 [SetAdjustmentFilter("","","","","14")]

 If it is a one-time adjustment, all following CAMExpenseAdjustment function scripts display information from expense adjustment number 14 .

 If it is an amortization adjustment, all following CAMExpenseAdjustment function scripts display information from the first period of expense adjustment number 14 .

 Script Examples

 The following scripts show various ways the function can be used. These examples do not generate output, but collect data for the CAMExpenseAdjustment functions that follow them.

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter()]

 Removes any filters to the adjustment function scripts that follow.

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter("01/01/ 2026 ", "12/31/ 2026 ", "", "One-Time")]

 Filters following adjustment scripts to display information from the one-time CAM expense adjustment with the earliest date in the year 2026 .

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter("","","","Amortization")]

 Filters following adjustment scripts to display information from the amortization-type CAM expense adjustment with the earliest date.

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter("","","","","20")]

 Filters following adjustment scripts to display information from CAM expense adjustment number 20.
