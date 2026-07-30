# Budget (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Budget.htm

The budget tool allows you to establish financial goals for your business on a fiscal-year basis. These system preferences allow you to configure default settings for this tool.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Budget .
The System Preferences: Budget page displays.

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 Auto Fill

 This section provides options regarding input to the budget.

 Option
 Description

 Allow editing of Balance Sheet final column

 Check to allow a fiscal year amount to be entered in the Final column of the budgeted GL account, which is then distributed across the year.

 For budgets of the Balance Sheet type, select how input to the budget's Final column is distributed across the fiscal year:

 Copy final amount to all months

 The amount entered in the Final column is set as the budget for all months in the fiscal year. For example, if 1200 is entered in the Final column, then 1200 is automatically entered into each month.

 Prompt for copy method

 Each time an amount is entered in the Final column, a pop-up asks the user to select from the Copy final amount to all months , Straight line increase from previous ending budget , or Straight line increase with starting amount options.

 Straight line increase from previous ending budget

 The amount entered in the Final column is set as the budget for the last month in the current year. With the starting point of the amount in the last cell of the previous year's budget, the budget for each month in the current year increases by a set amount until it reaches the Final amount. The monthly increase is calculated by subtracting the amount in the last cell of the previous year's budget from the current year's Final amount, then dividing the result by 12.

 Monthly increase = ((current year Final amount – previous year ending amount) / 12)

 For example, if you entered $180,000 in the Final column, and the previous year's ending budget was $120,000, each month in the current year sees an increase of $5,000. Your first month is $125,000, your second is $130,000, and so on.

 If there is no previous year budget and you enter $120,000 in the Final column, each month in the current year sees an increase of $10,000.

 Allow editing of P&L total column

 Check to allow a fiscal year amount to be entered in the Total column of the budgeted general ledger (GL) account, which is then distributed across the year.

 For budgets of the Profit and Loss (P&L) type, select how input to the budget's Total column is distributed across the fiscal year:

 Divide total based on previous budget's monthly ratios

 The amount entered in the Total column is allocated according to the distributions specified in the previous fiscal year's budget. Each month's budget is copied over from the prior year, then the difference in total is added to each month at the same rate of escalation.

 For example, if $390 was budgeted for the prior year with $5 in January, $10 in February, and so on, but $500 is budgeted for 2026 , Rent Manager distributes $6.42 in January, $12.83 in February, and so on.

 If the previous year did not have a budgeted amount for that GL account, the amount is divided evenly.

 Divide total evenly across all months

 The amount entered in the Total column is divided equally among all months in the fiscal year.

 Prompt for division method

 Each time an amount is entered in the Total column, a pop-up asks the user to select from the Divide total evenly across all months or the Divide total based on previous budget's monthly ratios options.

 Over Budget

 This section determines how notifications regarding transactions that approach or exceed budget limits are handled, at what point those notifications begin, and how the budget is calculated.

 More Information

 These budget exceeded warnings may be triggered by a single transaction or by the cumulative totals of all transactions within a budgeted general ledger account during the calculated period.

 Option
 Description

 Basis to validate

 Select the accounting method used to calculate overages to the budget:

 Cash

 Calculate transactions within budgeted GL accounts when payment has been made or received.

 Accrual

 Calculate transactions within budgeted GL accounts as they are posted in Rent Manager , regardless of payment status.

 Calculation method

 Determines when to warn the user about the budget overage. Select from one of the following options:

 Monthly

 If transactions approach or exceed the amount budgeted for the month.

 Quarterly

 If transactions approach or exceed the amount budgeted for the quarter. The quarter is determined by either the fiscal start date on the property level, if set, or the fiscal year established in your system preferences.

 Annual

 If transactions approach or exceed the amount budgeted for the fiscal year. The fiscal year is determined by either the fiscal start date on the property level, if set, or the fiscal year established in your system preferences.

 Consider approved purchase orders in calculations

 If checked, approved purchase orders with transactions that affect the budget are included in the overage calculations.

 Enable restriction of purchase order approval when over budget

 If checked, purchase orders that exceed the budgeted amount for a GL account can only be approved by a user with the following privilege:

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Override budget restriction when approving POs
 Enabled

 For more information, refer to Control User Access .

 More Information

 The Override budget restriction when approving POs privilege is available only after checking this option and clicking Save .

 Percentage to begin budget warnings

 Enter a percent value of budget funds that, when exceeded, triggers a warning to users.

 For example, a value of 90 indicates that when 90 percent of the funds allocated to a budgeted GL account have been spent, or if a transaction would cause you to exceed the 90 percent threshold, Rent Manager begins warning users during transactions involving that GL account.

 To only be notified when amounts exceed the budgeted amount, enter 100 .

 Transactions that exceed the percentage but are below the budgeted amount display warnings in yellow, and amounts beyond the budgeted amount display in red.

 This setting applies only to the transaction types specified in the Transactions to consider budget percentage warnings option.

 Transactions to consider budget percentage warnings

 Select which of the following transaction types display warnings for regarding budget overages.

 Checks

 Checks not linked to a bill if a line item approaches or exceeds the budgeted amount for the selected GL account.

 Credit card transactions

 Credit card transactions that approach or exceed budget limits.

 Pending purchase orders

 Purchase orders that are not yet approved if they approach or exceed budget limits.

 Unapproved/Unpaid bills

 Bills that approach or exceed budget limits based on the bill's entered Post Date .

 Bills that require approval display a warning before approval is granted. Bills that do not require approval and bills not yet approved display a warning. The warning is removed from the bill's details page after it is paid or approved.
