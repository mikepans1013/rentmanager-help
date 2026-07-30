# CRE Next Escalation Amount Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Next-Escalation-Amount.htm

This function displays the Amount of the next upcoming escalation (based on the date) on commercial recoverable expense (CRE) charge types assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmount()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CRENextEscalationAmount( "Index" , "ChargeType" )]

 Index

 Enter the index value of the CRE escalation to display. The first upcoming escalation has an index value of 0 , the second upcoming escalation has an index value of 1 , and so on.

 [CRENextEscalationAmount("1")]

 Displays the Amount of the escalation following the next escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 ChargeType

 Specify the short name code of the escalation to examine. If no parameter is specified, the function examines the escalation defined by the Index parameter.

 [CRENextEscalationAmount("","CAM")]

 Displays the Amount of the upcoming Common Area Maintenance (CAM) escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmount()]

 Displays the Amount value of the next escalation of the first charge type on the Charge Escalations tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CRENextEscalationAmount()]

 Displays the Amount value of the second escalation of the first charge type on the Charge Escalations tab of the current tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmount("1")]

 Displays the Amount value of the escalation after the next escalation of the first charge type on the Charge Escalations tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRENextEscalationAmount("","CAM")]

 Displays the Amount value of the next escalation of the CAM charge type on the Charge Escalations tab of the current tenant's most recent commercial lease.
