# Unit Rent Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Rent-Recurring-Charges.htm

This function displays the total value of rent recurring charges in effect on the specified date for the selected unit. Charge types that are designated as rent type charges are specified on each property's Other Information tile in the Rent Charge Type field.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().UnitRentRecurringCharges()]

 Displays information found on the unit's Recurring Charges tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitRentRecurringCharges( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the recurring charges. If no date is specified, today's date is used by default.

 [UnitRentRecurringCharges("1/1/ 2026 ")]

 Displays recurring charges as of January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().UnitRentRecurringCharges()]

 Displays the total value of rent recurring charges in effect today for the selected unit.

 [Unit().UnitRentRecurringCharges("3/14/ 2026 ")]

 Displays the total value of rent recurring charges in effect on March 14, 2026 for the selected unit.
