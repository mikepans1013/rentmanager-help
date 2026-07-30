# CRE Escalation List Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Escalation-List-Count.htm

This function displays the total number of escalations on the Charge Escalations tab of a tenant's commercial lease.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationListCount()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREEscalationListCount( "ChargeTypes" , "AsOfDate" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [CREEscalationListCount("CAM,CAMTAX")]

 Displays the CRE escalations for Common Area Maintenance (CAM) and CAM - Tax (CAMTAX) charge types.

 AsOfDate

 Specify the date for which to retrieve the number of CRE escalations. If no date is specified, the parameter defaults to the end of time.

 [CREEscalationListCount("","12/31/ 2026 ")]

 Displays the number of CRE escalations as of December 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationListCount()]

 Displays the number of escalations on the Charge Escalations tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREEscalationListCount("","1/1/ 2026 ")]

 Displays the number of escalations on the Charge Escalations tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationListCount("CAM")]

 Displays the number of escalations for the Common Area Maintenance (CAM) charge type on the Charge Escalations tab of the tenant's most recent commercial lease.
