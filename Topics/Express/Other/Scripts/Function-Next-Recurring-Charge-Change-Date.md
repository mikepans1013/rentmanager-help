# Next Recurring Charge Change Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Next-Recurring-Charge-Change-Date.htm

This function displays the date of the next scheduled change to the recurring charge on the View Recurring Charges page of the selected tenant as of the specified date.

 Based on the value of the parameters, Rent Manager determines which iteration of the recurring charge to examine. The next recurring charge change date is one day after that recurring charge's To Date column. For example, if a tenant had the following charges and today was 12/5/2021, Tenant.NextRecurringChargeChangeDate with default parameters would examine the Rent Charge (RC) charge types in effect 01/01/2021 through 12/31/2021 and return 01/01/2022 (one day after the To Date ) as the next change date.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Lease

 [Tenant().Lease().NextRecurringChargeChangeDate()]

 Displays information found on the tenant's View Recurring Charges page for the specified lease.

 Tenant

 [Tenant().NextRecurringChargeChangeDate()]

 Displays information found on the tenant's View Recurring Charges page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 Warning

 The UnitID parameter listed below applies to the function only when it is used with the Tenant class. If using this function with the Lease class, this parameter is not available.

 [NextRecurringChargeChangeDate( "ChargeType" , "AsOfDate" , "Level" , "UnitID" )]

 ChargeType

 Specify the short name code of the charge type to examine. If no parameter is specified, the function examines the Rent Charge (RC) charge type.

 [NextRecurringChargeChangeDate("PETFEE")]

 Displays the next change date for the Pet Fee (PETFEE) charge type.

 AsOfDate

 Specify the date for which to retrieve the recurring charge. If no date is specified, today's date is used by default.

 [NextRecurringChargeChangeDate("","12/31/ 2026 ")]

 Displays the next change date that occurs after December 31, 2026 .

 Level

 Examine only the recurring charges of the specified level ( Cust for tenant-level, Unit for unit-level, Type for unit type–level, Prop for property-level, or Util for utility-level) associated with the selected tenant. If no parameter is specified, the function examines all levels.

 [NextRecurringChargeChangeDate("","","Type")]

 Displays the next change date for unit type-level recurring charges only.

 More Information

 Only one level may be specified if you are not using the default of all levels.

 UnitID

 Specify the system-generated unit ID number to examine. This number does not display on any window. To learn the ID number of a selected unit, the script [Unit().UnitID] can be used. If no unit ID is specified, it defaults to the tenant's primary leased unit. Only units associated with the tenant's leases display data. Units not associated with the tenant's leases display 0 .

 [NextRecurringChargeChangeDate("","","","535")]

 Displays next change date for the unit with the system-generated account ID number 535.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().NextRecurringChargeChangeDate()]

 Displays the date of the next change after today for the Rent Charge (RC) charge type of the current tenant.

 [Tenant().Lease(1).NextRecurringChargeChangeDate()]

 Displays the date of the next change after today for the RC charge type of the tenant's first additional lease.

 [Tenant().NextRecurringChargeChangeDate("PETFEE")]

 Displays the date of the next change after today for the Pet Fee (PETFEE) charge type of the current tenant.

 [Tenant().Lease().NextRecurringChargeChangeDate("","7/1/ 2026 ")]

 Displays the date of the next change after July 1, 2026 , for the Rent Charge (RC) charge type of the tenant's first lease listed.

 [Tenant().NextRecurringChargeChangeDate("","7/1/ 2026 ","prop")]

 Displays the date of the next change after July 1, 2026 , for the property-level Rent Charge (RC) charge type of the current tenant.

 [Tenant().NextRecurringChargeChangeDate("","7/1/ 2026 ","","479")]

 Displays the date of the next change after July 1, 2026 , for the Rent Charge (RC) charge type of the unit with system-generated account ID number 479, if the unit is associated with the current tenant.
