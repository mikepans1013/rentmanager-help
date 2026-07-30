# Open Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Open-Charges.htm

This function displays the total amount of all open (unpaid) charges at the selected property.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Financial Property

 [ Class(). FinancialProperty.OpenCharges()]

 Displays information found on the scoreboard of the details page for the tenants at the selected asset's financial property.

 Property

 [Property().OpenCharges()]

 Displays information found on the scoreboard of the details page for the tenants at the selected property.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [OpenCharges( "AsOfDate" , "FromDate" , "ToDate" , "ChargeTypes" )]

 AsOfDate

 Specify the date for which to retrieve the unpaid amount of the open charges. If no date is specified, today's date is used by default.

 [OpenCharges("12/31/ 2026 ")]

 Displays the total value of all open charges as of December 31, 2026 .

 FromDate

 Specify the date on or after which to examine charges. If no date is specified, the function uses the beginning of time.

 ToDate

 Specify the date on or before which to examine charges. If no date is specified, the function uses the end of time.

 [OpenCharges("","1/1/ 2026 ","6/30/ 2026 ")]

 Displays the value of all open charges posted from January 1, 2026 through June 30, 2026 .

 ChargeTypes

 Specify the charge type(s) you wish to examine. If no charge types are specified, all charge types that have been allocated display. Each charge type should be separated by a comma.

 [OpenCharges("","","","RC,LC")]

 Displays the charge amount for Rent Charge (RC) plus Late Charge (LC) charge types.

 [OpenCharges("","1/1/ 2026 ")]

 Displays the value of all open charges posted on or after January 1, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().OpenCharges()]

 Displays the total value of all open charges for all tenants at the selected property as of today's date.

 [Tenant().Home().FinancialProperty.OpenCharges()]

 Displays the total value of all open charges for all tenants at the financial property of the selected home-type asset.

 [Property().OpenCharges("3/31/ 2026 ","1/1/ 2026 ","6/30/ 2026 ","")]

 Examines the total value of all open charges of all charge types for all tenants at the selected property posted from January 1, 2026 to June 30, 2026 and displays only the amount that was unpaid as of March 31, 2026 .
