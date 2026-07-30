# CAM Monthly Expense Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/CAM-Monthly-Expense-Breakdown.htm

The CAM Monthly Expense Breakdown report displays the total commercial expenses for a single property by month, the selected commercial tenant’s share of the expense (less any capped amount), the total charged against the common area maintenance (CAM) expense, and the reconciliation amount over the specified Cap Term of the report.

 To get the most meaningful results, it is recommended that you generate this report for a commercial tenant who is charged CAM fees based on square footage of the unit they are leasing.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to CAM Monthly Expense Breakdown .

 For more information, refer to Control User Access .

 To view the CAM Monthly Expense Breakdown report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Commercial arrow_forward CAM Monthly Expense Breakdown .
The Reports: CAM Monthly Expense Breakdown page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Tenant and Lease

 Select a Tenant name and, in the Lease field, select the unit name for the corresponding lease to display the related CAM expenses.

 CAM Charge Type

 Select the desired reconcile charge type to be examined in the report. Any general ledger accounts that are linked to the selected reconcile charge type display in the report.

 For example, if the user chooses CAM – Common Area Maintenance and that charge type is the Reconcile Type listed in the chart of accounts for CAM expense accounts 5501 CAM – Repairs and Maintenance and 5503 CAM – Landscaping , both of these expense accounts display in the report.
For more information, refer to Set Up a CRE Charge Type .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Month

 The name of each CAM expense account that is being reconciled against the CAM charge type selected in the report options. The month and year for each CAM expense account entry also displays below the expense account name.

 Property Expense

 The total amount of CAM expenses that the selected CAM charge recovers for the property during the selected Cap Term .

 Property Expense Less Base

 The total amount of CAM expense for the property minus any base amount specified on the lease's Charge Type Setup tab.

 For example, if the base amount is set to $1000.00 for the specified charge type and the Cap Term is monthly with monthly CAM reconciliations, the system multiplies the base amount by 12 (months) and the monthly base amount is deducted from the property expense.

 Sq. Ft. %

 The tenant’s percentage of the total square feet of the property.

 Occupancy %

 The percentage of the date range during which the selected tenant is leasing this unit. The number of days the tenant leased is calculated using the move out date entered on leases. The duration of the Cap Term is entered on the lease's Charge Type Setup tab and the selected report date further defines the date range.

 Tenant Share

 The tenant’s share of CAM expense for the property based on their unit square footage. This is calculated by using the following formula:

 Property Expense Less Base * Square foot % = Tenant Share

 Summary Subreport

 A subreport detailing the tenant’s share of the property’s expense, the total amount that can be charged, the amount charged to the selected commercial tenant, and any additional unpaid expense that still needs to be reconciled.

 The following rows appear in the subreport:

 Row
 Description

 Total Expenses

 The total of all Property Expense entries in the report.

 Total Tenant's Share

 The selected tenant’s total share of all the expense accounts displayed in the report results.

 A tenant’s share is calculated each month using the following formula:

 Property Expense Less Base * Square foot % = Tenant Share

 Cap Amount

 The selected tenant’s Cap Amount as entered on the lease's Charge Type Setup tab.

 Total Chargeable

 If the Cap Amount is greater than the Total Tenant’s Share , the Total Tenant’s Share value displays in the Total Chargeable row. If the Cap Amount is less than the Total Tenant’s Share , the Cap Amount value displays in the Total Chargeable row instead.

 Amount Charged

 The actual amount charged to the tenant during the report’s date range.

 Reconciliation Amount

 The difference between the Total Chargeable and Amount Charged . The amount displayed is either what the tenant still owes you, or what you owe the tenant if the value is negative.

 For example, if the Total Chargeable amount is $250.00 and the amount charged was $200.00 for the term, the Reconciliation Amount would be $50.00 indicating that the tenant would owe $50.00 to the landlord for the term.
