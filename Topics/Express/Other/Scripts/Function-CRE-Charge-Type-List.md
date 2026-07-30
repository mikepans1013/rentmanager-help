# CRE Charge Type List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-CRE-Charge-Type-List.htm

This function displays CRE charge type(s) with values entered on the Charge Type Setup tab of a tenant's commercial lease.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Renewal

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeList()]

 Displays information found on the Charge Type Setup tab of the commercial tenant's most recent renewed lease.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Lease.LeaseRenewalCount() - 1) . This allows you to return data for the most recent lease renewal created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [CREChargeTypeList( "ChargeType" , "Format" )]

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines all charge types.

 [CREChargeTypeList("CAM")]

 Displays the information for charge type Common Area Maintenance (CAM) on the Charge Type Setup tab of the current tenant's most recent commercial lease.

 Format

 List details of each charge type using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the list of CRE charge types as well as their start year, terms, amounts, and increase amount, separated by tabs:

 "$_ChargeType \t$_BaseYearStart \t$_BaseTerm \t$_BaseAmount \t$_CapTerm \t$_CapAmount \t$_CapIncrease \n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_BaseAmount

 Displays the Base Amount entered on the commercial lease's Charge Type Setup tab.

 $_BaseTerm

 Displays the Base Term entered on the commercial lease's Charge Type Setup tab.

 $_BaseYearStart

 Displays the Base Year Start entered on the commercial lease's Charge Type Setup tab.

 $_CapAmount

 Displays the Cap Amount entered on the commercial lease's Charge Type Setup tab.

 $_CapIncrease

 Displays the % Cap Increase entered on the commercial lease's Charge Type Setup tab.

 $_CapTerm

 Displays the Cap Term entered on the commercial lease's Charge Type Setup tab.

 $_ChargeType

 Displays the shortened charge type name.

 CREChargeTypeList("","\t$_CapAmount\t$_CapIncrease\n")

 Displays a new line with a customized list of the Cap Amount and % Cap Increase for the charge type with values entered on the commercial lease.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeList()]

 Displays all charge types with values entered on the Charge Type Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal().CREChargeTypeList()]

 Displays all charge types with values entered on the Charge Type Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeList("CAM")]

 Displays the information for the CAM charge type with values entered on the Charge Type Setup tab of the tenant's most recent commercial lease.

 [Tenant().Lease().Renewal(Lease.LeaseRenewalCount() - 1).CREChargeTypeList("","\n$_ChargeType\t$_BaseTerm\t$_BaseAmount")]

 Displays a new line with a customized list of the Charge Type , Base Term , and Base Amount for each charge type with values entered on the Charge Type Setup tab for the tenant's most recent commercial lease.

 The output displays as shown below:
