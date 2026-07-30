# Pay Off Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Pay-Off-Amount.htm

This function displays the total payoff amount based on actual payments received as of a specified date for the selected owner-financed loan. Note that the payoff amount considers only payments received and not the payments projected on the amortization schedule. A parent class of Tenant must precede the Loan class to return results.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PayOffAmount()]
 Displays information found on the loan's Loan Payoff pop-up.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PayOffAmount( "AsOfDate" )]

 AsOfDate

 Specify the date for which to begin examining the loan payoff amounts.

 [PayOffAmount("8/31/ 2026 ")]

 Displays the total payoff amount based on actual payments received on or prior to August 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().PayOffAmount()]

 Displays the total payoff amount based on actual payments received for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).PayOffAmount("01/01/ 2026 ")]

 Displays the total payoff amount based on actual payments received as of January 1, 2026 for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).PayOffAmount()]

 Displays the total payoff amount based on actual payments received for the tenant's most recent loan.
