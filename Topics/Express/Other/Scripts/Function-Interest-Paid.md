# Interest Paid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Interest-Paid.htm

This function displays the interest paid for the selected tenant's owner-financed loan based on actual payments received. A parent class of Tenant must precede the Loan class to return results.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).InterestPaid()]

 Displays information found on the loan's details page.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [InterestPaid( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine interest paid. If no date is specified, the function uses the beginning of time.

 [InterestPaid("5/10/ 2026 ")]

 Displays the amount of interest paid on or after May 10, 2026 .

 ToDate

 Specify the date on or before which to examine interest paid. If no date is specified, the function uses the end of time.

 [InterestPaid("","7/15/ 2026 ")]

 Displays the amount of interest paid on or before July 15, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().InterestPaid()]

 Displays the interest paid as of today for the tenant's oldest loan.

 [Tenant().Loan().InterestPaid("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the interest paid in the year 2026 for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).InterestPaid("","8/15/ 2026 ")]

 Displays the interest paid on or before August 15, 2026 for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).InterestPaid("6/1/ 2026 ")]

 Displays the interest paid on or after June 6, 2026 for the tenant's most recent loan.
