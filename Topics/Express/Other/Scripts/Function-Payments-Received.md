# Payments Received Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Payments-Received.htm

This function displays the total of loan payments received as of a specified date range for the selected owner-financed loan of the selected tenant account. Payments received during the preexisting period of the loan prior to setup in Rent Manager are not included in this total.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PaymentsReceived()]

 Displays information found on the loan's Loan Amortization Schedule pop-up.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PaymentsReceived( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine loan payments. If no date is specified, the function uses the beginning of time.

 [PaymentsReceived("3/20/ 2026 ")]

 Displays the loan payments received on or after March 20, 2026 .

 ToDate

 Specify the date on or before which to examine loan payments. If no date is specified, the function uses the end of time.

 [PaymentsReceived("","3/20/ 2026 ")]

 Displays the loan payments received on or before March 20, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().PaymentsReceived("1/1/ 2026 ")]

 Displays the total of loan payments received on or after January 1, 2026 for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount-1).PaymentsReceived()]

 Displays the total of loan payments received for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount-1).PaymentsReceived("1/1/ 2026 ")]

 Displays the total of loan payments received on or after January 1, 2026 for the tenant's most recent loan.
