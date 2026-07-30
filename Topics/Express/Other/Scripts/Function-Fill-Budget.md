# Fill Budget Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Fill-Budget.htm

This function internally generates a collection of property-specific general ledger (GL) data related to the selected property's budget.

 More Information

 This function is used in conjunction with the BudgetValue function. The FillBudget function must be run first in your scripting to generate the collection of budgeted financial data as defined by your parameters (e.g., month and year start and end dates). Then the BudgetValue script is used to retrieve selected values from that data.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job

 [Job().FillBudget()]

 Examines information found on the job's Budget tile.

 Property

 [Property().FillBudget()]

 Examines information found on the property's budget information.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [FillBudget( "FromMonth","FromYear","ToMonth","ToYear" , "CollapseParents" )]

 FromMonth

 Enter the numerical value (e.g., 1–12 ) for the beginning month for which the GL budget data is retrieved.

 [FillBudget("1"," 2026 ","12"," 2026 ")]

 Collects budgeted financial data from GL account transactions posted beginning in January of the specified year.

 FromYear

 Enter the two-digit or four-digit value for the beginning year for which the GL budget data is retrieved.

 [FillBudget("1"," 2026 ","12"," 2026 ")]

 Collects budgeted financial data from GL account transactions posted beginning in year 2026 .

 ToMonth

 Enter the numerical value (e.g., 1–12 ) for the ending month for which the GL budget data is retrieved.

 [FillBudget("1"," 2026 ","12"," 2026 ")]

 Collects budgeted financial data from GL account transactions posted ending in December of the specified year.

 ToYear

 Enter the two-digit or four-digit value for the ending year for which the GL budget data is retrieved.

 [FillBudget("1"," 2026 ","12"," 2026 ")]

 Collects budgeted financial data from GL account transactions posted ending in year 2026 .

 CollapseParents

 Specify if the parent GL accounts should be collapsed, which rolls the values of the subaccounts into the parent accounts and hides the subaccounts and their values. If no parameter is specified, the function defaults to False .

 True rolls subaccount values into the parent account and hides the subaccounts. False does not roll the subaccount values into the parent account.

 [FillBudget("1"," 2026 ","12"," 2026 ","True")]

 This includes the subaccount values with the parent account and hides the subaccounts for budgeted data collected during the specified dates.

 Script Examples

 The following scripts show various ways the function can be used. These examples do not generate output, but collect data for the BudgetValue function.

 [Property().FillBudget("1"," 2026 ","6"," 2026 ","")]

 Generates budgeted financial data from January of 2026 through June of 2026 for the selected property. GL subaccount values are not rolled up into parent accounts.

 [Property().FillBudget("1"," 2026 ","6"," 2026 ","True")]

 Generates budgeted financial data from January of 2026 through June of 2026 for the selected property. GL subaccount values are included with parent accounts.
