# Last Charge Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Last-Charge-Date.htm

This function displays the date of the most recent charge posted for the selected tenant's owner-financed loan charges as of a specified date.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).LastChargeDate()]

 Displays information found on the loan's details page.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LastChargeDate( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the most recent charge posted for the tenant loan. If no date is specified, today's date is used by default.

 [LastChargeDate("6/1/ 2026 ")]

 Displays the loan's last charge date on or prior to June 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().LastChargeDate()]

 Displays the last charge date for the tenant's oldest loan.

 [Tenant().Loan().LastChargeDate("01/01/ 2026 ")]

 Displays the last charge date as of January 1, 2026 for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).LastChargeDate()]

 Displays the last charge date for the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).LastChargeDate("01/01/ 2026 ")]

 Displays the last charge date as of January 1, 2026 for the tenant's most recent loan.
