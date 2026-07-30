# Aggregate Budget Value Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Aggregate-Budget-Value.htm

This function displays property or job-level financial data related to the budget of the selected property or job for a specified field.

 More Information

 This function must be used in conjunction with the FillBudget Function. The FillBudget function must be run first in your scripting to generate the collection of budgeted financial data as defined by your parameters (e.g., month and year start and end dates). Then, the AggregateBudgetValue function is used to retrieve a selected value from that data.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job Class (Script)

 [Job().AggregateBudgetValue()]

 Displays information found on the Budget tile of the selected job.

 Property

 [Property().AggregateBudgetValue()]

 Displays property-level financial data related to the budget of the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AggregateBudgetValue( "FieldName" )]

 Fields

 Fields are listed in the Insertable Fields list and automatically populate in the letter template along with the associated function. This function has the following available fields:

 Field Name
 Description

 Controllable NOI (Net Operating Income)

 [AggregateBudgetValue("ControllableNetOperatingIncome")]

 Displays the net operating income of controllable accounts, calculated as follows:

 ControllableNetOperatingIncome = Income - CostOfGoodsSold + OtherIncomeExpense - Expense

 More Information

 Controllable accounts represent income and expenses that typically can be controlled, adjusted, or influenced. For example, landscaping costs can be controlled based on how often the property pays someone to mow the lawn, plant flowers, etc. Controllable accounts are determined by your company.

 Cost Of Goods Sold

 [AggregateBudgetValue("CostOfGoodsSold")]

 Displays the sum of all cost of goods sold-type GL account balances.

 Expense

 [AggregateBudgetValue("Expense")]

 Displays the sum of all expense-type GL account balances.

 Gross Profit

 [AggregateBudgetValue("GrossProfit")]

 Displays the remaining income after paying for the goods you sold or produced, calculated as follows:

 GrossProfit = Income - CostOfGoodsSold

 Income

 [AggregateBudgetValue("Income")]

 Displays the sum of all income-type GL account balances.

 Net Income

 [AggregateBudgetValue("NetIncome")]

 Displays the total income minus total expenses, calculated as follows:

 NetIncome = Income + OtherIncomeExpense - Expense - CostOfGoodsSold + NetNonControllableIncome + NonOperatingIncome - NonOperatingExpense

 Net Non Controllable Income

 [AggregateBudgetValue("NetNonControllableIncome")]

 Displays the net income of all non-controllable Income and non-controllable expense-type accounts, calculated as follows:

 NetNonControllableIncome = NonControllableIncome - NonControllableExpense

 More Information

 Non-controllable accounts represent income and expenses that typically cannot be controlled or changed (e.g., the mortgage cannot be lowered by the property manager). Controllable accounts are determined by your company.

 Net Operating Income

 [AggregateBudgetValue("NetOperatingIncome")]

 Displays income minus non-controllable expenses related to your normal business activities, calculated as follows:

 NetOperatingIncome = Income - CostOfGoodsSold + OtherIncomeExpense - Expense + NonControllableIncome - NonControllableExpense

 More Information

 Operating accounts represent income and expenses related to typical activities of the business (e.g., rent income is common for properties). Operating accounts are determined by your company.

 Non Controllable Expense

 [AggregateBudgetValue("NonControllableExpense")]

 Displays the sum of all non-controllable expense-type GL account balances.

 Non Controllable Income

 [AggregateBudgetValue("NonControllableIncome")]

 Displays the sum of all non-controllable Income-type GL account balances.

 Non Operating Expense

 [AggregateBudgetValue("NonOperatingExpense")]

 Displays the sum of all non-operating expense-type GL account balances not directly related to daily business (e.g., office supplies, coffee, maintenance on company vehicles).

 Non Operating Income

 [AggregateBudgetValue("NonOperatingIncome")]

 Displays the sum of all non-operating income-type GL account balances not related to daily business (e.g., vending machines, laundry machines).

 Other Expense

 [AggregateBudgetValue("OtherExpense")]

 Displays the sum of all other expense-type GL account balances.

 Other Income

 [AggregateBudgetValue("OtherIncome")]

 Displays the sum of all other income-type GL account balances.

 Other Income & Expense

 [AggregateBudgetValue("OtherIncomeExpense")]

 Displays the difference between other income-type GL accounts and other expense-type GL accounts, calculated as follows:

 OtherIncomeExpense = OtherIncome - OtherExpense

 Script Examples

 The following scripts show various ways the function can be used. These examples assume FillBudget is run prior to these AggregateBudgetValue scripts to generate a collection of financial data.

 [Property().AggregateBudgetValue("NetIncome")]

 Displays the budgeted net income total for the property.

 [Job().AggregateBudgetValue("Expense")]

 Displays the budgeted sum of the balances of all expense-type GL accounts for the job.
