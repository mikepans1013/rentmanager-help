# CRE Previous Escalation Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Previous-Escalation-Date.htm

This function displays the Escalation Date of the prior escalation (based on the date) on commercial recoverable expense (CRE) charge types assigned to the lease of the commercial tenant.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationDate()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent renewed lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREPreviousEscalationDate( "Index" , "ChargeType" )]

 Index

 Enter the index value of the CRE escalation to display. The most recent escalation has an index value of 1 , the second most recent escalation has an index value of 2 , and so on.

 More Information

 This parameter starts with an index of 1 , which differs from most Rent Manager parameters that use an index of 0 .

 [CREPreviousEscalationDate("1")]

 Displays the Escalation Date of the escalation before the most recent one on the Charge Escalations tab of the current tenant's most recent commercial lease.

 ChargeType

 Specify the short name code of the escalation to examine. If no parameter is specified, the function examines the escalation defined by the Index parameter.

 [CREPreviousEscalationDate("","CAM")]

 Displays the Escalation Date of the most recent Common Area Maintenance (CAM) escalation on the Charge Escalations tab of the current tenant's most recent commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationDate("1")]

 Displays the Escalation Date of the escalation before the most recent one on the Charge Escalations tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationDate("2")]

 Displays the Escalation Date of the second escalation before the most recent one on the Charge Escalations tab of the current tenant's most recent commercial lease, regardless of charge type.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREPreviousEscalationDate("1","CAM")]

 Displays the Escalation Date of the first escalation before the most recent one for theCAM charge type on the Charge Escalations tab of the current tenant's most recent commercial lease.
