# Principal Paid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Principal-Paid.htm

This function displays the total amount of the principal that has been paid for the selected tenant's owner-financed loan based on actual payments received.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PrincipalPaid()]

 Displays information found on the loan's Loan Amortization Schedule pop-up.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PrincipalPaid( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine the amount of loan principal paid. If no date is specified, the function uses the beginning of time.

 [PrincipalPaid("7/15/ 2026 ")]

 Displays the amount of the loan principal paid on or before July 15, 2026 .

 ToDate

 Specify the date on or before which to examine the amount of loan principal paid. If no date is specified, the function uses the end of time.

 [PrincipalPaid("","7/15/ 2026 ")]

 Displays the amount of the loan principal paid on or before July 15, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().PrincipalPaid()]

 Displays the total amount of the principal paid for the tenant's oldest loan.

 [Tenant().Loan().PrincipalPaid("1/1/ 2026 ")]

 Displays the total amount of the principal paid on or after January 1, 2026 for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PrincipalPaid()]

 Displays the total amount of the principal paid for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PrincipalPaid("1/1/ 2026 ")]

 Displays the total amount of the principal paid on or after January 1, 2026 for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PrincipalPaid("","8/15/ 2026 ")]

 Displays the total amount of the principal paid on or before August 15, 2026 for the tenant's most recent loan.
