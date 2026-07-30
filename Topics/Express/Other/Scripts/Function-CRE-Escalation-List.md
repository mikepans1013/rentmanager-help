# CRE Escalation List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Escalation-List.htm

This function displays the list of commercial recoverable expense (CRE) escalations on the Charge Escalations tab on a tenant's commercial lease.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationList()]

 Displays information found on the Charge Escalations tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREEscalationList( "ChargeTypes" , "AsOfDate" , "Format" )]

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all allocated charge types display. Each charge type should be separated by a comma.

 [CREEscalationList("CAM,CAMTAX")]

 Displays the CRE escalations for Common Area Maintenance (CAM) and CAM - Tax (CAMTAX) charge types.

 AsOfDate

 Specify the date for which to retrieve the list of CRE escalations. If no date is specified, the parameter defaults to the end of time.

 [CREEscalationList("","12/31/ 2026 ")]

 Displays a list of the CRE escalations as of December 31, 2026 .

 Format

 List details of each escalation using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the charge types, overall amount and amount per square foot, and date of the CRE escalations, separated by tabs:

 "$_ChargeType\t$_PSFAmount\t$_Amount\t$_Date\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Amount

 Displays the Amount entered on the commercial lease's Charge Escalations tab.

 $_ChargeType

 Displays the charge type on the commercial lease's Charge Escalations tab.

 $_Date

 Displays the Escalation Date entered on the commercial lease's Charge Escalations tab.

 $_PSFAmount

 Displays the Amount / Sq. Foot entered on the commercial lease's Charge Escalations tab.

 CREEscalationList("","","\t$_ChargeType\t$_Amount\n")

 Displays a new line with a customized list of the charge type and amount for the escalations on the commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationList()]

 Displays all escalations on the Charge Escalations tab of the current tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREEscalationList("","1/1/ 2026 ")]

 Displays all escalations on the Charge Escalations tab of the current tenant's most recent commercial lease as of January 1, 2026 .

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationList("CAM")]

 Displays the information for the Common Area Maintenance (CAM) charge type on the Charge Escalations tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREEscalationList("","","\n$_ChargeType\t$_Amount\t$_PSFAmount")]

 Displays a new line with a customized list of the Charge Type , Amount , and Amount / Sq. Foot for each escalation on the Charge Escalations tab for the tenant's most recent commercial lease.

 The output displays as shown below:
