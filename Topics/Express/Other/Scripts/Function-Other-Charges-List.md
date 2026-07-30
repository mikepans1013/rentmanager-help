# Other Charges List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Other-Charges-List.htm

This function displays a list of information related to other charges that can be associated with a loan and posted when the loan is posted, such as Escrow and PMI . A parent class of Tenant must precede the Loan class to return results.

 By default, the charge's description and amount are displayed separated by tabs on a separate line of information for each charge. Additional variables may be used in the Format parameter to customize how this information is displayed.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Loan

 [Tenant().Loan(Tenant.TenantLoanCount() -1 ).OtherChargesList()]

 Displays charges shown in the Other Charges section on the General tab in Rent Manager 12 of the selected owner-financed loan.

 More Information

 If you insert a function from the Insertable Fields list in a letter template, the index automatically populates with a scripted formula: (Tenant.TenantLoanCount() - 1) . This allows you to return data for the most recent loan created for the tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OtherChargesList( "ChargeType" , "Format" )]

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma.

 [OtherChargesList("RC,LC")]

 Displays the charges for the Rent Charge (RC) and Late Charge (LC) charge types.

 Format

 List details of each charge in Other Charges using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the descriptions and amounts of the charges, separated by tabs:

 "\t$_Description\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter. These return data from the Other Charges section in Rent Manager 12 of the selected loan.

 Variable
 Description

 $_Amount

 Displays the amount of the charge.

 $_ChargeType

 Displays the shortened name of the charge type.

 $_ChargeTypeDescription

 Displays the charge type Description .

 $_Comment

 Displays the optional comment entered for the charge type.

 OtherChargesList("","\t$_ChargeType\t$_Amount\n")

 Displays a new line with a customized list of the charge type and amount for each charge.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Loan().OtherChargesList()]

 Displays a new line with the default formatted text string for each charge in the Other Charges section in Rent Manager 12 of the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).OtherChargesList()]

 Displays a new line with the default formatted text string for each charge in the Other Charges section in Rent Manager 12 of the tenant's most recent loan.

 [Tenant().Loan().OtherChargesList("Dues")]

 Displays a new line with the default formatted text string for each charge of charge type Dues in the Other Charges section in Rent Manager 12 of the tenant's oldest loan.

 [Tenant().Loan(Tenant.TenantLoanCount() - 1).OtherChargesList("", "\t$_ChargeType\t$_ChargeTypeDescription\t$_Comment\t$_Amount\n")]

 Displays a new line with a customized list of the charge type, charge type description, comment, and amount for each charge in the Other Charges section in Rent Manager 12 of the tenant's most recent loan.

 The output displays as shown below:
