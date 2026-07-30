# CRE Charge Type Base Term Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Charge-Type-Base-Term.htm

This function displays the Base Term of the commercial recoverable expense (CRE) charge types assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseTerm()]

 Displays information found on the Charge Type Setup tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREChargeTypeBaseTerm( "Index" , "ChargeType" )]

 Index

 Enter the index value of the CRE charge type to display. The first charge type has an index value of 0 , the second charge type has an index value of 1 , and so on. Charge types must have values entered to be examined.

 More Information

 If no Index parameter is specified, the Index defaults to 0 unless a ChargeType parameter is specified, in which case the function examines that charge type.

 [CREChargeTypeBaseTerm("1")]

 Displays the Base Term of the second charge with values entered on the Charge Type Setup tab of the current tenant's most recent commercial lease.

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines the charge type defined by the Index parameter.

 More Information

 The ChargeType parameter should be used with no Index parameter specified. If both an Index and ChargeType parameter are specified, the function displays information only if the ChargeType parameter matches the charge type of the specified index.

 [CREChargeTypeBaseTerm("","CAM")]

 Displays the Base Term of the Common Area Maintenance (CAM) charge type on the Charge Type Setup tab of the current tenant's most recent commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseTerm()]

 Displays the Base Term of the first charge type with values entered on the Charge Type Setup tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREChargeTypeBaseTerm()]

 Displays the Base Term of the first charge type with values entered on the Charge Type Setup tab of the current tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseTerm("1")]

 Displays the Base Term of the second charge type with values entered on the Charge Type Setup tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeBaseTerm("","CAM")]

 Displays the Base Term of the CAM charge type on the Charge Type Setup tab of the current tenant's most recent commercial lease.
