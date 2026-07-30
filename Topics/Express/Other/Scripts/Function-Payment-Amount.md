# Payment Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Payment-Amount.htm

This function displays the total payment amount for the specified owner-financed loan's payment number. This is the same value shown in the Payment Due column entry for the selected payment on the Loan Amortization Schedule pop-up.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).PaymentAmount()]
 Displays information found on the loan's details page.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PaymentAmount( "PaymentNumber" )]

 PaymentNumber

 Specify the payment number for which to display the payment's amount .

 [PaymentAmount("5")]

 Displays the payment amount for the fifth payment.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().PaymentAmount()]

 Displays the total payment amount for the first payment of the selected tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).PaymentAmount("6")]

 Displays the total payment amount for the sixth payment of the selected tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).PaymentAmount()]

 Displays the total payment amount for the first payment of the selected tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount - 1).PaymentAmount("9")]

 Displays the total payment amount for the ninth payment of the selected tenant's most recent loan.
