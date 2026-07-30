# Chart Value Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Chart-Value.htm

This function displays property- or unit-level general ledger (GL) account data related to the selected property or unit based on the specified GL account number and its field.

 More Information

 This function must be used in conjunction with the FillChart Function. The FillChart function must be run first in your scripting to generate the collection of financial data as defined by your parameters (e.g., date range and accounting basis). Then, the ChartValue function is used to retrieve a selected value from that data.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Job

 [Job().ChartValue()]

 Displays information from the Job General Ledger report.

 Asset

 [Asset().ChartValue()]

 Displays information from the Unit General Ledger report for the asset.

 Property

 [Property().ChartValue()]

 Displays information from the General Ledger report for the property.

 Unit

 [Unit().ChartValue()]

 Displays information from the Unit General Ledger report for the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ChartValue( "AccountNumber","FieldName" )]

 AccountNumber

 Examine the chart account with this general ledger (GL) account number.

 [ChartValue("1001","Description")]

 Selects the chart account with GL account number 1001 and displays data from the field specified in the second parameter.

 Fields

 Fields are listed in the Insertable Fields list and automatically populate in the letter template along with the associated function. This function has the following available fields:

 "AccountNumber", represents the GL account number that must be specified before a field.

 Field
 Description

 Account Number Name

 [ChartValue( "AccountNumber", "AccountNumberName")]

 Returns the GL Account No followed by the Name as displayed in the chart of accounts.

 Amount

 [ChartValue( "AccountNumber", "Amount")]

 Returns the balance of the account at the end of the date range selected in the FillChart function.

 Amount In

 [ChartValue( "AccountNumber", "AmountIn")]

 Returns the total credits or total debits that move into the account for the given date range based on the GL account type.

 Total credits are returned for the following GL account types: Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income.

 Total debits are returned for the following GL account types: Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Expense, Other Expense, Non Operating Expense, Non Controllable Expense, Cost Of Goods Sold.

 Amount Out

 [ChartValue( "AccountNumber", "AmountOut")]

 Returns the total credits or total debits that move out of the account for the given date range based on the GL account type.

 Total credits are returned for the following GL account types: Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Expense, Other Expense, Non Operating Expense, Non Controllable Expense, Cost Of Goods Sold.

 Total debits are returned for the following GL account types: Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income.

 Credit Amount

 [ChartValue( "AccountNumber", "CreditAmount")]

 Returns a number for CreditAmount if there are more credits than debits in that account for the given date range. Otherwise, this returns a blank.

 CreditAmount = Total Credits - Total Debits

 Debit Amount

 [ChartValue( "AccountNumber", "DebitAmount")]

 Returns a number for DebitAmount if there are more debits than credits in that account for the given date range. Otherwise, this returns a blank.

 DebitAmount = Total Debits - Total Credits

 Description

 [ChartValue( "AccountNumber", "Description")]

 Returns a description of the GL account as shown in the Description field in the chart of accounts.

 Invoice Multiplier

 [ChartValue( "AccountNumber", "InvoiceMultiplier")]

 This is an invoice multiplier used in a calculation to achieve the desired positive or negative result for the selected account. The strategy for using this option is similar to that of Multiplier .

 This multiplies by 1 or -1 based on the following account types:

 Account types of Bank, Accounts Receivable, Other Current Asset, Fixed Asset, Other Asset, Accounts Payable, Credit Card, Other Current Liability, Long Term Liability, Equity, Income, Other Income, Non Operating Income, Non Controllable Income are multiplied by 1 .

 Account types of Cost Of Goods Sold, Expense, Other Expense, Non Operating Expense, Non Controllable Expense are multiplied by -1 .

 Multiplier

 [ChartValue( "AccountNumber", "Multiplier")]

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

 [ChartValue( "AccountNumber", "Name")]

 Returns the name of the GL account as shown in the Name field in the chart of accounts.

 Script Examples

 The following scripts show various ways the function can be used. These examples assume FillChart is run prior to these ChartValue scripts to generate a collection of financial data.

 [Property().ChartValue("1001","Name")]

 Displays the name of the GL account with account number 1001 for the selected property.

 [Unit().ChartValue("1001","AmountIn")]

 Displays the total credits or total debits (based on GL account type) that moved into the GL account with account number 1001 for the selected unit. Since GL accounts numbered in the low 1000s are typically banks, the AmountIn here would represent the total debits, as defined in the table of descriptions above.

 [Owner().Ownership().Property().ChartValue("1001","Description")]

 Displays the description of the GL account with account number 1001 for the property of the first ownership alphabetically of the selected owner account.
