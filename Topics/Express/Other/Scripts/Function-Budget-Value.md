# Budget Value Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Budget-Value.htm

This function displays property-level general ledger (GL) account data related to the budget of the selected property or the property of an ownership of the selected owner based on the specified GL account number and field.

 More Information

 This function must be used in conjunction with the Fill Budget Function . The FillBudget function must be run first in your scripting to generate the collection of budgeted financial data as defined by your parameters (e.g., month and year start and end dates). Then, the BudgetValue function is used to retrieve a selected value from that data.

 To display values for multiple Chart Accounts from the same date range, you need to run the FillBudget function only once to generate data. You can then run the BudgetValue function multiple times with different chart account numbers.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job

 [Job().BudgetValue()]

 Displays information found on the job's Budget tile.

 Property

 [Property().BudgetValue()]

 Displays information found on the Budget  pop-up for the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [BudgetValue( "AccountNumber","FieldName" )]

 AccountNumber

 Examine the chart account with this general ledger (GL) account number.

 [BudgetValue("1001","Description")]

 Selects the chart account with the GL account number 1001 and displays budget data from the field specified in the second parameter.

 FieldName

 Fields are listed in the Insertable Fields list and automatically populate in the letter template along with the associated function. This function has the following available fields:

 "AccountNumber", represents the GL account number that must be specified before a field.

 Field
 Description

 Account Number Name

 Returns the GL Account No followed by the Name as displayed in the chart of accounts.

 Amount

 [BudgetValue( "AccountNumber", "Amount")]

 Returns the balance of the account at the end of the date range selected in the FillBudget function.

 Amount In

 Returns the total credits or total debits that move into the account for the given date range based on the GL account type.

 Total credits are returned for the following GL account types: Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income.

 Total debits are returned for the following GL account types: Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Expense, Other Expense, Non Operating Expense, Non Controllable Expense, Cost Of Goods Sold.

 Amount Out

 Returns the total credits or total debits that move out of the account for the given date range based on the GL account type.

 Total credits are returned for the following GL account types: Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Expense, Other Expense, Non Operating Expense, Non Controllable Expense, Cost Of Goods Sold.

Total debits are returned for the following GL account types: Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income.

 Credit Amount

 Returns a number for CreditAmount if there are more credits than debits in that account for the given date range. Otherwise, this returns a blank.

 CreditAmount = Total Credits - Total Debits

 Debit Amount

 Returns a number for DebitAmount if there are more debits than credits in that account for the given date range. Otherwise, this returns a blank.

 DebitAmount = Total Debits - Total Credits

 Description

 Returns a description of the GL account as shown in the Description field in the chart of accounts.

 Invoice Multiplier

 This is an invoice multiplier used in a calculation to achieve the desired positive or negative result for the selected account. The strategy for using this option is similar to that of Multiplier .

 This multiplies by 1 or -1 based on the following account types:

 Account types of Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income are multiplied by 1 .

 Account types of Cost Of Goods Sold, Expense, Other Expense, Non Operating Expense, Non Controllable Expense are multiplied by -1 .

 Multiplier

 This is a multiplier used in a calculation to achieve the desired positive or negative result for the selected account.

 This multiplies by a 1 or -1 based on the following account types:

Account types of Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset are multiplied by 1 .

 Account types of Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income, Cost Of Goods Sold, Expense, Other Expense, Non Operating Expense, Non Controllable Expense are multiplied by -1 .

 More Information

 As an example, suppose your company rents a space for $750. To record this, you increase the company's asset (Cash) with a $750 debit to the Cash account, which, because it is an asset type account, typically has a debit (positive) balance.

 To balance your entry, a $750 credit is recorded to the Rental Income account, which, because it is an income type account, typically has a credit (negative) balance.

 Your entries can be used to display as:

 For reporting purposes, you would not want to see Rental Income earned as a credit (negative) balance.

 In this case, if you select Multiplier for the Value field, the multiplier can be applied to allow Rental Income to show with a positive balance (a negative entry multiplied by -1 results in a positive).

 Name

 Returns the name of the GL account as shown in the Name field in the chart of accounts.

 Script Examples

 The following scripts show various ways the function can be used. These examples assume FillBudget is run prior to these BudgetValue scripts to generate a collection of financial data.

 [Property().BudgetValue("1001","Name")]

 Displays the name of the general ledger (GL) account with the account number 1001 for the current property.

 [Job().BudgetValue("6401","AccountNumberName")]

 Displays the general ledger (GL) account number and name of account number 6401 for the selected job.

 [Owner().Ownership().Property().BudgetValue("1001","AmountIn")]

 Displays the total credits or total debits (based on GL account type) that moved into the GL account with the account number 1001 for the property of the first ownership listed alphabetically for the current owner account. Since GL accounts numbered in the low 1000s are typically banks, the AmountIn here would represent the total debits, as defined in the table of descriptions above.
