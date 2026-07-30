# Current Balance Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Current-Balance.htm

This function displays the principal balance of a tenant's owner-financed loan.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount - 1).CurrentBalance()]

 Displays loan information on a tenant's View Recurring Charges pop-up.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CurrentBalance( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the principal balance.

 If no date is specified, today's date is used by default.

 [CurrentBalance("1/1/ 2026 ")]

 Displays the principal balance as of January 1, 2026 .

 Script Examples

 The following are examples of this function in scripts:

 [Tenant().Loan().CurrentBalance()]

 Displays the loan balance as of today for the oldest loan of the current tenant.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).CurrentBalance()]

 Displays the loan balance as of today for the most recent loan of the current tenant.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).CurrentBalance("1/1/ 2026 ")]

 Displays the loan balance as of January 1, 2026 , for the most recent loan of the current tenant.

 [System.If(LoanCount>0,Tenant.Loan(Tenant.TenantLoanCount - 1).CurrentBalance, "Tenant has had no loans.")]

 Checks to see if the current tenant has had at least one loan. If they have, it displays the loan balance of the most recent loan. If they have not, it displays Tenant has had no loans.
