# CRE Account Pro Rata Share Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Account-Pro-Rata-Share.htm

This function displays the Pro Rata Share % of the commercial recoverable expense (CRE) account assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountProRataShare()]

 Displays information found on the CRE Setup tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREAccountProRataShare( "Index" , "CREAccount" )]

 Index

 Enter the index value of the CRE account to display. The first account has an index value of 0 , the second account has an index value of 1 , and so on.

 More Information

 If no Index parameter is specified, the Index defaults to 0 and examines the first CRE account's pro rata share percentage unless the CREAccount parameter is specified, in which case the function examines that account's pro rata share percentage.

 [CREAccountProRataShare("1")]

 Displays the Pro Rata Share % of the second CRE account on the CRE Setup tab of the tenant's most recent commercial lease.

 CREAccount

 Enter the name of the CRE account to examine as it displays in the CRE Account column on the CRE Setup tab of the tenant's commercial lease.

 More Information

 The CREAccount parameter should be used with no Index parameter specified. If an Index parameter is specified, the script returns an error.

 [CREAccountProRataShare("","5503 CAM - Insurance")]

 Displays the Pro Rata Share % specified for the 5503 CAM - Insurance CRE account.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountProRataShare()]

 Displays the Pro Rata Share % of the first CRE account on the CRE Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREAccountProRataShare()]

 Displays the Pro Rata Share % of the first CRE account on the CRE Setup tab of the tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountProRataShare("2")]

 Displays the Pro Rata Share % of the third CRE account on the CRE Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREAccountProRataShare("","5501 CAM - Repairs & Maintenance")]

 Displays the Pro Rata Share % specified for the 5501 CAM - Repairs & Maintenance CRE account on the CRE Setup tab of the tenant's most recent commercial lease.
