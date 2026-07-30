# Recurring Charge List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Recurring-Charge-List.htm

This function displays a list of a tenant's active recurring charges.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 This function can be utilized by the following classes:

 Class
 Syntax

 Tenant

 [Tenant().RecurringChargeList()]

 Displays information found on a tenant's Recurring Charges page.

 Lease

 [Tenant().Lease().RecurringChargeList()]

 Displays information found on a tenant's Recurring Charges page for the specified lease.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [RecurringChargeList( "AsOfDate" , "IncludeChargeTypes" , "ExcludeChargeTypes" , "Format" )]

 AsOfDate

 Specify the date for which to retrieve active recurring charges. If no date is specified, today's date is used by default.

 [RecurringChargeList("2/1/ 2026 ")]

 Displays active charges as of February 1, 2026 .

 IncludeChargeTypes

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines all charge types.

 [RecurringChargeList("","PETFEE")]

 Displays active charges exclusively for the Pet Fee (PETFEE) charge type.

 ExcludeChargeTypes

 Specify the short name code of the charge type(s) to exclude; each charge type should be separated by a comma. If no parameter is specified, the function examines all charge types.

 [RecurringChargeList("","","CAM")]

 Displays active charges excluding the Common Area Maintenance (CAM) charge type.

 Format

 List details of each recurring charge using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays a list of the charge type names, dates, and amounts of the recurring charges, separated by tabs:

 "\n$_ChargeTypeName\t$_FromDate\t$_ToDate\t$_Amount\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the recurring charge.

 $_ChargeTypeName

 Displays the name of the recurring charge's charge type.

 $_ChargeTypeDescription

 Displays the description of the recurring charge's charge type.

 $_Comment

 Displays the Comment entered on the recurring charge.

 $_Frequency

 Displays the frequency of the recurring charge.

 $_FromDate

 Displays the start date on which the recurring charge becomes active.

 $_Level

 Displays the level of the recurring charge (e.g., Property)

 $_Property

 Displays the property associated with the recurring charge.

 $_ToDate

 Displays the end date on which the recurring charge ends.

 $_Unit

 Displays the unit associated with the recurring charge.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().RecurringChargeList()]

 Displays all of the tenant's active recurring charges in the default format.

 [Tenant().RecurringChargeList("2/10/ 2026 ","","LC,APP")]

 Displays all of the tenant's active recurring charges excluding Late Charge (LC) and Application Fee (APP) charge types as of February 10, 2026 .

 [Tenant().Lease().RecurringChargeList("8/1/ 2026 ", "", "", "$_Level\t$_ChargeTypeDescription\t$_Amount\n")]

 Displays only the level, charge type description, and amount—separated by tabs—of the recurring charges established in the tenant's first lease. A line break is also added after each recurring charge and amount combination.

 The output displays as shown below:
