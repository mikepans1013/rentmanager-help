# Interest Rate Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Interest-Rate.htm

This function displays the interest rate of the selected owner-financed loan of the selected tenant account.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).InterestRate()]

 Displays information found on the loan's details page.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [InterestRate( "PaymentNumber" )]

 PaymentNumber

 Specify the payment number for which to display the payment's interest rate . If no payment number is specified, it defaults to the first payment.

 [InterestRate("5")]

 Displays the interest rate for the loan's fifth payment.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan(Tenant.TenantLoanCount - 1).InterestRate()]

 Displays the interest rate for the first payment of the tenant's most recent loan.

 [Tenant().Loan().InterestRate("10")]

 Displays the interest rate for the tenth payment of tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).InterestRate("4")]

 Displays the interest rate for the fourth payment of the tenant's most recent loan.
