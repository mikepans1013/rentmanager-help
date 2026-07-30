# Property Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Property-Recurring-Charges.htm

This function displays the total value of property-level recurring charges in effect on the specified date for the selected property.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.PropertyRecurringCharges()]

 Displays information found on the Recurring Charges tile of the asset's financial property.

 Property

 [Property().PropertyRecurringCharges()]

 Displays information found on the Recurring Charges tile of the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PropertyRecurringCharges( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the total value of recurring charges. If no date is specified, today's date is used by default.

 [PropertyRecurringCharges("10/31/ 2026 ")]

 Displays the total value of property-level recurring charges as of October 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Property().PropertyRecurringCharges()]

 Displays the total value of all property-level recurring charges in effect at the selected tenant's property as of today.

 [Property().PropertyRecurringCharges("3/1/ 2026 ")]

 Displays the total value of all property-level recurring charges in effect at the selected property on March 1, 2026 .

 [Asset().FinancialProperty.PropertyRecurringCharges("3/1/ 2026 ")]

 Displays the total value of all property-level recurring charges in effect at the selected asset's financial property on March 1, 2026 .
