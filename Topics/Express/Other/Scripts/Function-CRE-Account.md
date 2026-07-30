# CRE Account Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Account.htm

This function displays commercial recoverable expense (CRE) accounts assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccount()]

 Displays information found on the CRE Setup tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREAccount( "Index" )]

 Index

 Enter the index value of the CRE account to display. The first account has an index value of 0 , the second account has an index value of 1 , and so on.

 [CREAccount("1")]

 Displays the first additional account on the CRE Setup tab of the current tenant's most recent lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccount()]

 Displays the first account on the CRE Setup tab of the current tenant's most recent lease.

 [Tenant().Lease().Renewal().CREAccount()]

 Displays the first account on the CRE Setup tab of the current tenant's oldest lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccount("1")]

 Displays the first additional account on the CRE Setup tab of the current tenant's most recent lease.
