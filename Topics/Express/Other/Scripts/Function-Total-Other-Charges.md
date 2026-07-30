# Total Other Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Total-Other-Charges.htm

This function displays the total amount of all charges that are associated with an owner-financed loan and posted when the loan is posted.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).TotalOtherCharges()]

 Displays information found in the Other Charges section on the loan.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TotalOtherCharges( "ChargeType" )]

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma.

 [TotalOtherCharges("ESC,PMI")]

 Displays the charges for the Escrow (ESC) and Private Mortgage Insurance (PMI) charge types listed in Other Charges .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().TotalOtherCharges()]

 Displays the total dollar value of all charges of the tenant's oldest loan.

 [Tenant().Loan().TotalOtherCharges("PMI")]

 Displays the total dollar value of all charges with the Private Mortgage Insurance (PMI) charge type for the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).TotalOtherCharges()]

 Displays the total dollar value of all charges of the tenant's most recent loan.

 [Tenant().Loan(Tenant.TenantLoanCount()-1).TotalOtherCharges("ESC")]

 Displays the total dollar value of all charges with the Escrow (ESC) charge type for the tenant's most recent loan.
