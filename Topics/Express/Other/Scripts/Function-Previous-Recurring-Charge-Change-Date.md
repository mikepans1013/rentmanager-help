# Previous Recurring Charge Change Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Previous-Recurring-Charge-Change-Date.htm

This function displays the date of the previous change to the selected recurring charge on the View Recurring Charges page of the selected tenant as of the specified date.

 Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The previous recurring charge change date is the date displayed in that recurring charge's From Date column. For example, if a tenant had the following Rent Charge (RC) charges and today was 11/4/2021, Tenant.Lease.PreviousRecurringChargeChangeDate with default parameters would examine the Rent Charge in effect 01/01/2021 through 12/31/2021 and display From Date 01/01/2021 as the previous change date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().PreviousRecurringChargeChangeDate()]

 Displays information found on the tenant's View Recurring Charges page for the specified lease.

 Tenant

 [Tenant().PreviousRecurringChargeChangeDate()]

 Displays information found on the tenant's View Recurring Charges page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PreviousRecurringChargeChangeDate( "ChargeType" , "AsOfDate" , "Level" )]

 ChargeType

 Specify the short name code of the charge type(s) to examine; each charge type should be separated by a comma. If no parameter is specified, the function examines the Rent Charge (RC) charge type.

 [PreviousRecurringChargeChangeDate("PETFEE")]

 Displays the latest change date for the Pet Fee (PETFEE) charge type.

 AsOfDate

 Specify the date for which to retrieve the recurring charge. If no date is specified, today's date is used by default.

 [PreviousRecurringChargeChangeDate("","12/31/ 2026 ")]

 Displays the latest change date that occurs before December 31, 2026 .

 Level

 Examine only the recurring charges of the specified level ( Cust for tenant-level, Unit for unit-level, Type for unit type-level, Prop for property-level, or Util for utility) associated with the selected tenant. If no parameter is specified, the function examines all levels.

 [PreviousRecurringChargeChangeDate("","","Type")]

 Displays only latest change date for unit type-level recurring charges.

 More Information

 Only one level may be specified if you are not using the default of all levels.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().PreviousRecurringChargeChangeDate()]

 Displays the date of the previous change as of today to the Rent Charge (RC) charge type of the current tenant.

 [Tenant().Lease(1).PreviousRecurringChargeChangeDate()]

 Displays the date of the previous change as of today to the Rent Charge (RC) charge type associated with the tenant's first additional lease listed.

 [Tenant().PreviousRecurringChargeChangeDate("PETFEE")]

 Displays the date of the previous change as of today to the Pet Fee (PETFEE) charge type of the current tenant.

 [Tenant().Lease().PreviousRecurringChargeChangeDate("","7/1/ 2026 ")]

 Displays the date of the previous change as of July 1, 2026 to the Rent Charge (RC) charge type associated with the tenant's first lease listed.

 [Tenant().PreviousRecurringChargeChangeDate("","7/1/ 2026 ","Prop")]

 Displays the date of the previous change as of July 1, 2026 to the property-level Rent Charge (RC) charge type of the current tenant.
