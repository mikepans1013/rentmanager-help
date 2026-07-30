# CRE Escalation Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Escalation-Amount.htm

This function displays the Amount of a single commercial recoverable expense (CRE) escalation assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationAmount()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent renewed lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREEscalationAmount( "Index" , "ChargeType" )]

 Index

 Enter the index value of the CRE escalation to display. The first escalation has an index value of 0 , the second escalation has an index value of 1 , and so on.

 [CREEscalationAmount("1")]

 Displays the Amount of the second escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 ChargeType

 Specify the short name code of the escalation to examine. If no parameter is specified, the function examines the escalation defined by the Index parameter.

 [CREEscalationAmount("","CAM")]

 Displays the Amount of the first Common Area Maintenance (CAM) escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationAmount()]

 Displays the Amount of the first escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREEscalationAmount()]

 Displays the Amount of the first escalation on the Charge Escalations tab of the current tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationAmount("2")]

 Displays the Amount of the third escalation listed on the Charge Escalations tab of the current tenant's most recent commercial lease, regardless of charge type.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationAmount("1","CAM")]

 Displays the Amount of the second escalation for the CAM charge type on the Charge Escalations tab of the current tenant's most recent commercial lease.
