# CRE Charge Type Cap Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Charge-Type-Cap-Amount.htm

This function displays the Cap Amount of the commercial recoverable expense (CRE) charge types assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapAmount()]

 Displays information found on the Charge Type Setup tab of the commercial tenant's most recent renewed lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREChargeTypeCapAmount( "Index" , "ChargeType" )]

 Index

 Enter the index value of the CRE charge type to display. The first charge type has an index value of 0 , the second charge type has an index value of 1 , and so on. Charge types must have values entered to be examined.

 More Information

 If no Index parameter is specified, the Index defaults to 0 unless a ChargeType parameter is specified, in which case the function examines that charge type.

 [CREChargeTypeCapAmount("1")]

 Displays the Cap Amount of the second charge with values entered on the renewed commercial lease's Charge Type Setup tab.

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines the charge type defined by the Index parameter.

 More Information

 The ChargeType parameter should be used with no Index parameter specified. If both an Index and ChargeType parameter are specified, the function displays information only if the ChargeType parameter matches the charge type of the specified index.

 [CREChargeTypeCapAmount("","CAM")]

 Displays the Cap Amount of the Common Area Maintenance (CAM) charge type on the renewed commercial lease's Charge Type Setup tab.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapAmount()]

 Displays the Cap Amount of the first charge type with values entered on the Charge Type Setup tab of the selected tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREChargeTypeCapAmount()]

 Displays the Cap Amount of the first charge type with values entered on the Charge Type Setup tab of the selected tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapAmount("1")]

 Displays the Cap Amount of the second charge type with values entered on the Charge Type Setup tab of the selected tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeCapAmount("","CAM")]

 Displays the Cap Amount of the CAM charge type on the Charge Type Setup tab of the selected tenant's most recent commercial lease.
