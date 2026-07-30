# Property All Recurring Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Property-All-Recurring-Charges.htm

This function displays the total value of all recurring charges in effect for all current tenants of the selected property on the specified date.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.PropertyAllRecurringCharges()]

 Displays information found on the Recurring Charges tile of each tenant at the financial property of a selected asset.

 Property

 [Property().PropertyAllRecurringCharges()]

 Displays information found on the Recurring Charges tile of each tenant at the property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [PropertyAllRecurringCharges( "AsOfDate" )]

 AsOfDate

 Specify the date for which to retrieve the total value of recurring charges.

 If no date is specified, today's date is used by default.

 [PropertyAllRecurringCharges("10/31/ 2026 ")]

 Displays the total value of recurring charges for all tenants at the property as of October 31, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().PropertyAllRecurringCharges()]

 Displays the total value of all recurring charges in effect for all current tenants of the selected property as of today.

 [Property().PropertyAllRecurringCharges("3/1/ 2026 ")]

 Displays the total value of all recurring charges in effect for all current tenants of the selected property as of March 1, 2026 .

 [Asset().FinancialProperty.PropertyAllRecurringCharges("3/1/ 2026 ")]

 Displays the total value of all recurring charges in effect for all current tenants of the financial property of the selected asset as ofMarch 1, 2026 .
