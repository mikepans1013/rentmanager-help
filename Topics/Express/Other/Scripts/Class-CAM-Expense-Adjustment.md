# CAM Expense Adjustment Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-CAM-Expense-Adjustment.htm

This class examines active (non-canceled) CAM expense adjustments for a tenant's lease. After declaring the Lease class, a CAM expense adjustment–level scripting function can be specified.

 Most of the information retrieved by the scripting functions can be found on the adjustment's details pop-up for the CAM expense adjustment.

 Example

 [Tenant().Lease().CAMExpenseAdjustment(1).GLAccount()]

 Result

 Displays the general ledger account selected on the second-listed CAM expense adjustment for the tenant's first-listed lease.

 Class Parameter

 A single, optional parameter can be specified for this class: an index.

 Index

 An index allows you to return information about a specific CAM expense adjustment on a tenant account by using a number to identify each adjustment listed for the specified lease in your script. For example, if there are three expense adjustments associated with a lease, they are referenced from oldest to newest with indexes 0, 1, and 2. If no index is specified, Rent Manager defaults to an index of 0, which represents the first expense adjustment added to the original lease.

 More Information

 For amortized CAM expense adjustments, each individual entry on the CAM Expense Adjustments page counts as its own, singular expense adjustment in scripting. For more information, refer to CAM Expense Adjustment Indexing .

 [Tenant().Lease(1).CAMExpenseAdjustment().Reference()]

 Displays the Reference # for the first-listed CAM expense adjustment of the tenant's second-listed lease.

 [Tenant().Lease().CAMExpenseAdjustment(3).Type()]

 Displays the Type of CAM expense adjustment ( One-time or Amortization ) for the fourth-listed adjustment of the tenant's first-listed lease.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 The following examples reflect the syntax that displays when you double-click the functions in the Insertable Fields section.

 Function
 Description

 Adjustment Amount

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentAmount()]

 Displays the dollar amount in the Adj. Amount column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Adjustment Date

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentDate()]

 Displays the date in the Adj. Date column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Adjustment List

 [Tenant().Lease().CAMExpenseAdjustment().AdjustmentList()]

 Displays a detailed list of all CAM expense adjustments applied to the lease, including the reference number, type, GL account, date, amount, and notes.

 Count

 [Tenant().Lease().CAMExpenseAdjustment().Count()]

 Displays the number of CAM expense adjustments applied to the lease.

 Final Date

 [Tenant().Lease().CAMExpenseAdjustment().FinalDate()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. The data displayed varies depending on the adjustment's Type , as detailed below.

 For one-time adjustments, displays the date in the Adj. Date field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the date in the Adjustment Date column for the last Period listed on the Amortization Details pop-up.

 GL Account

 [Tenant().Lease().CAMExpenseAdjustment().GLAccount()]

 Displays the general ledger account in the GL Account column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Internal Note

 [Tenant().Lease().CAMExpenseAdjustment().InternalNote()]

 Displays the text in the Internal Note column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Periods

 [Tenant().Lease().CAMExpenseAdjustment().Periods()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. The data displayed varies depending on the adjustment's Type , as detailed below.

 For one-time adjustments, displays the output One-time .

 For amortized adjustments, displays the number entered in the Periods field, followed by Months or Years depending on the selection in the Amortization Details pop-up (e.g., 3 Years , 6 Months ).

 Reference

 [Tenant().Lease().CAMExpenseAdjustment().Reference()]

 Displays the reference number in the Ref# column of the lease's first-listed adjustment on the CAM Expense Adjustments page.

 Set Adjustment Filter

 [Tenant().Lease().CAMExpenseAdjustment().SetAdjustmentFilter()]

 Removes any filters applied to CAM expense adjustments associated with the lease. Parameters can be used to establish filters for CAM expense adjustments in scripting.

 Start Date

 [Tenant().Lease().CAMExpenseAdjustment().StartDate()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page.

 For one-time adjustments, displays the date in the Adj. Date field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the date in the Start Date field on the Amortization Details pop-up.

 Tenant Note

 [Tenant().Lease().CAMExpenseAdjustment().TenantNote()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page. Displays the text in the Tenant Note section in the details of the Note field on the Amortization Details pop-up.

 Total Amount

 [Tenant().Lease().CAMExpenseAdjustment().TotalAmount()]

 Examines the lease's first-listed adjustment on the CAM Expense Adjustments page.

 For one-time adjustments, displays the dollar amount in the Adj. Amount field on the One-time Adjustment Details pop-up.

 For amortized adjustments, displays the dollar amount in the Total Amount field on the Amortization Details pop-up.

 Type

 [Tenant().Lease().CAMExpenseAdjustment().Type()]

 Displays the type of adjustment ( Amortization or One-time ) in the Type column of the lease's first-listed adjustment on the CAM Expense Adjustments page.
