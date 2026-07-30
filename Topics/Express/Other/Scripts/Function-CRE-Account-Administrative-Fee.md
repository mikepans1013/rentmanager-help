# CRE Account Administrative Fee Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Account-Administrative-Fee.htm

This function displays commercial recoverable expense (CRE) account administrative fee percentages assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountAdministrativeFee()]

 Displays information found on the CRE Setup tab in of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalOfferCount() - 1) . This allows you to return data for the most recent lease renewal offer created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREAccountAdministrativeFee( "Index" , "CREAccount" )]

 Index

 Enter the index value of the CRE account to display. The first account has an index value of 0 , the second account has an index value of 1 , and so on.

 More Information

 If no Index parameter is specified, the Index defaults to 0 and examines the first CRE account's administrative fee percentage unless the CREAccount parameter is specified, in which case the function examines that account's administrative fee percentage.

 [CREAccountAdministrativeFee("1")]

 Displays the Administrative Fee % of the first additional CRE account on the CRE Setup tab of the current tenant's most recent commercial lease.

 CREAccount

 Enter the name of the CRE account to examine as it displays on the CRE Account column on the CRE Setup tab of the tenant's commercial lease.

 More Information

 The CRE Account parameter should be used with no Index parameter specified. If an Index parameter is also specified, the function displays an error.

 [CREAccountAdministrativeFee("","5503 CAM - Insurance")]

 Displays the Administrative Fee % specified for the 5503 CAM - Insurance CRE account.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountAdministrativeFee()]

 Displays the Administrative Fee % of the first CRE account on the CRE Setup tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREAccountAdministrativeFee()]

 Displays the Administrative Fee % of the first CRE account on the CRE Setup tab of the current tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountAdministrativeFee("1")]

 Displays the Administrative Fee % of the first additional CRE account on the CRE Setup tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountAdministrativeFee("","5501 CAM - Repairs & Maintenance")]

 Displays the Administrative Fee % specified for the 5501 CAM - Repairs & Maintenance CRE account on the CRE Setup tab of the current tenant's most recent commercial lease.
