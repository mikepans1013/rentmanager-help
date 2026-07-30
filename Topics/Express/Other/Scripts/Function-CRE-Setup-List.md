# CRE Setup List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Setup-List.htm

This function displays information found on the Charge Type Setup tab of a tenant's commercial lease as a list.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupList()]

 Displays information found on the Charge Type Setup tab of the commercial tenant's most recent lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CRESetupList( "CREAccount" , "Format" )]

 CREAccount

 Enter the name of the CRE account to examine as it displays in the CRE Account column on the CRE Setup tab of the current tenant's most recent commercial lease.

 [CRESetupList("5503")]

 Displays the CRE setup information for the 5503 CAM - Insurance CRE account.

 Format

 List details of the CRE setup using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the CRE accounts, pro rata shares, and administrative fees, separated by tabs:

 "$_CREAccount\t$_ProRataShare\t$_AdministrativeFee\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_AdministrativeFee

 Displays the Administrative Fee % entered on the commercial lease's Charge Type Setup tab.

 $_CREAccount

 Displays the CRE Account on the commercial lease's Charge Type Setup tab.

 $_ProRataShare

 Displays the Pro Rata Share % entered on the commercial lease's Charge Type Setup tab.

 CRESetupList("","\t$_AdministrativeFee\t$_ProRataShare\n")

 Displays a new line with a customized list of the Administrative Fee % and Pro Rata Share % for the CRE setup on the commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupList()]

 Displays the information on the Charge Type Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CRESetupList()]

 Displays the information on the Charge Type Setup tab of the tenant's oldest commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupList("5502")]

 Displays the information for the 5502 Cam - Property Tax CRE account on the Charge Type Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CRESetupList("","\n$_ProRataShare\t$_CREAccount")]

 Displays a new line with a customized list of the Pro Rata Share % and CRE Account on the Charge Type Setup tab of the tenant's most recent commercial lease.

 The output displays as shown below:
