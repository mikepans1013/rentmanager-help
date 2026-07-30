# Calc 1099 Checks Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Calc-1099-Checks.htm

This function displays the total amount of a vendor's checks with expense items marked as 1099 within a specified date range.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Vendor

 [Vendor().Calc1099Checks()]

 Displays information found on the Vendor Transactions page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Calc1099Checks( "FromDate" , "ToDate" , "PropertyShortName" )]

 FromDate

 Specify the date on or after which to examine vendor 1099 checks. If no date is specified, the function uses the beginning of the current year.

 [Calc1099Checks("7/15/ 2026 ")]

 Displays the total amount of the vendor's 1099 checks from July 15, 2026 to December 1 of the current year.

 ToDate

 Specify the date on or before which to examine 1099 vendor checks. If no date is specified, the function uses December 1 of the current year.

 [Calc1099Checks("","11/30/ 2026 ")]

 Displays the total amount of the vendor's 1099 checks from January 1 of the current year to November 30, 2026 .

 PropertyShortName

 Enter the short name of the property for which to examine vendor 1099 checks .

 More Information

 If this parameter is specified, the FromDate parameter defaults to the beginning of time and the ToDate parameter defaults to the end of time if left unspecified.

 [Calc1099Checks("","","RIVER")]

 Displays information from the vendor's 1099 checks linked to the property with the property short name RIVER .

 Script Examples

 The following scripts show various ways the function can be used:

 [Vendor().Calc1099Checks()]

 Displays the total amount of the vendor's 1099 checks from January 1 of the current year to December 1 of the current year.

 [Vendor().Calc1099Checks("4/1/ 2026 ")]

 Displays the total amount of the vendor's 1099 checks from April 1, 2026 to December 1 of the current year.

 [Vendor().Calc1099Checks("6/1/ 2026 ","6/30/ 2026 ")]

 Displays the total amount of the vendor's 1099 checks from June 1, 2026 to June 30, 2026 .

 [Vendor().Calc1099Checks("","3/15/ 2026 ","FHMP")]

 Displays the total amount of all the vendor's 1099 checks for the property with the short name FHMP from January 1 of the current year through March 15, 2026 .
