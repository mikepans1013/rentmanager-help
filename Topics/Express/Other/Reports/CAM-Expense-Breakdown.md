# CAM Expense Breakdown (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/CAM-Expense-Breakdown.htm

The CAM Expense Breakdown report displays the total property common area maintenance (CAM) expense, the selected commercial tenant's share of the expense minus any capped amount, the total charged against the selected CAM expense, and the reconciliation amount over the date range of the report.

 To get the most meaningful results, it is recommended that you generate this report for a single commercial tenant who is charged CAM fees based on the square footage of the unit they are leasing.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to CAM Expense Breakdown .

 For more information, refer to Control User Access .

 To view the CAM Expense Breakdown report, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Commercial arrow_forward CAM Expense Breakdown .
The Reports: CAM Expense Breakdown page displays.

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

 This option determines the date range for the statement based on the tenant’s Cap Term as defined in the Charge Type Setup tab on the lease. The report displays CAM expenses through the determined date range.

 The following cap terms may be used when generating this report:

 Option
 Description

 Calendar Year Annually

 If selected, the date range is the same calendar year as the selected As of Date .

 Base Year Annually

 If selected, the date range is set to the same base year annually as the selected As of Date . The base year is defined on the Charge Type Setup tab.

 For example, if the base year start date is 3/1/2021 and the user chooses 5/1/2022 for the As of Date , the term on the statement displays 3/1/2022 to 2/28/2023.

 Monthly

 If selected, the term is the same month as the selected As of Date .

 No Cap Term

 If an option is not selected, the report header displays No Valid Term Found .

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

 Chart Account

 The name of each CAM expense account that is being reconciled against the CAM charge type selected in the report options.

 Property Expense

 The total amount of CAM expenses that the selected CAM charge recovers for the property during the cap term as defined on the tenant's lease on the Charge Type Setup tab.

 Property Expense Less Base

 The total amount of CAM expense for the property minus any base amount entries on the tenant's Lease Details pop-up on the Charge Type Setup tab.

 For example, if the base amount is set to $1,000 for the specified charge type and the cap term is monthly, Rent Manager multiplies the base amount by 12 (months) and the monthly base amount is deducted from the property expense.

 Sq. Ft. %

 The tenant's percentage of the total square footage of the property.

 Occupancy %

 The percentage of the date range during which the selected tenant is leasing this unit. The number of days the tenant leased is calculated using the move out date entered on their lease. The duration of the cap term is entered on the tenant's Lease Details pop-up on the Charge Type Setup tab, and the selected report date further defines the date range.

 The percentage is calculated using the following formula:

 Occupancy % = Number of days the tenant leased the unit / the number of days in the date range

 Tenant Share

 The tenant’s share of CAM expense for the property based on their unit square footage. This is calculated by using the following formula:

 Tenant Share = Property Expense Less Base * Sq. Ft. %

 Summary Subreport

 At the bottom of the report, a subreport displays information about the tenant's CAM charges and cap amount.

 The following fields display in the Summary subreport:

 Row
 Description

 Total Expenses

 The total of all Property Expense entries in the report.

 Tenant's Share

 The selected tenant's total share of all the expense accounts displayed in the report results. A tenant’s share is calculated each month using the following formula:

 Property Expense Less Base * Sq. Ft. % = Tenant Share

 Cap Amount

 The selected tenant's Cap Amount as entered on the tenant's Lease Details pop-up on the Charge Type Setup tab.

 Total Chargeable

 If the Cap Amount is greater than the Total Tenant's Share , the Total Tenant's Share value displays in the Total Chargeable row. If the Cap Amount is less than the Total Tenant's Share , the Cap Amount value displays in the Total Chargeable row instead.

 Amount Charged

 The actual amount charged to the tenant during the report's date range.

 Reconciliation Amount

 The difference between the Total Chargeable and Amount Charged . The amount displayed is either what the tenant still owes you, or what you owe the tenant if the value is negative.

 For example, if the Total Chargeable amount is $250.00 and the amount charged was $200.00 for the term, the Reconciliation Amount would be $50.00 indicating that the tenant would owe $50.00 to the landlord for the term.
