# Unit Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Recurring-Charges.htm

This function displays the total value of recurring charges in effect for the unit on the specified date.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().UnitRecurringCharges()]

 Displays information found on the unit's Recurring Charges tile for the selected unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitRecurringCharges( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the total value of recurring charges.

 If no date is specified, today's date is used by default.

 [UnitRecurringCharges("10/31/ 2026 ")]

 Displays the total value of recurring charges as of October 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().UnitRecurringCharges()]

 Displays the total value of recurring charges for the unit.

 [Tenant().Lease(1).Unit().UnitRecurringCharges()]

 Displays the total value of recurring charges for the unit associated with the tenant's second lease.

 [Tenant().Unit().UnitRecurringCharges("04/23/ 2026 ")]

 Displays the total value of recurring charges as of April 23, 2026 for the unit to which the tenant is currently linked on the tenant's Recurring Charges tile.
