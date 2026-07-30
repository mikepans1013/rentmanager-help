# Sales Month Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Sales-Month.htm

This function displays the most recent month with retail sales immediately preceding the calculated date for the selected commercial lease of the selected tenant.

 Related Preferences

 To view sales information, the Track tenant retail sales option must be enabled in Commercial (System Preferences) .

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Lease

 [Tenant().Lease().SalesMonth()]

 Displays information found when you click Sales on the lease's details pop-up.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SalesMonth( "AsOfDate" , "Format" , "MonthsToOffset" )]

 AsOfDate

 Specify the date for which to examine the amount of sales. Rent Manager begins looking at the month immediately preceding this date and continues searching backward until it finds a month with sales.

 [SalesMonth("12/15/ 2026 ")]

 Displays the month preceding December 15, 2026 for which sales were entered for the first commercial lease listed for the current tenant.

 Format

 Select the format of the sales month.

 [SalesMonth("","M")]

 Displays the sales month as November 01 .

 The parameter values below display as follows:

 Parameter Value
 Description

 M

 The sales month displays as November 01 .

 MM

 The sales month displays as the two digit numeric value of the month, such as 11 .

 MMM

 The sales month displays as a three digit abbreviation of the month, such as Nov .

 MMMM

 The sales month displays as the full written name of the month, such as November .

 D

 The sales day displays as the full written date, such as Tuesday, November 01, 2026 .

 ddd

 The sales day displays as a three letter weekday abbreviation, such as Thu .

 dddd

 The sales Day displays as the full name of the weekday, such as Thursday .

 Y

 The sales year displays as the month and year, such as November, 2026 .

 yy

 The sales year displays as the two digit year, such as 26 .

 yyyy

 The sales year displays as the four digit year, such as 2026 .

 MonthsToOffset

 Specify the number of months before or after the AsOfDate for which to examine the amount of sales. Offset values may be positive (e.g., 3 ) or negative (e.g., -3 ).

 [SalesMonth("","-2")]

 Displays the most recent month with retail sales as of two months prior to today for the first commercial lease listed for the current tenant.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Lease().SalesMonth("11/12/ 2026 ")]

 Displays the most recent month with retail sales preceding November 12, 2026 for the first commercial lease listed for the current tenant.

 [Tenant().Lease().SalesMonth("","","-4")]

 Displays the most recent month with retail sales preceding four months ago for the first commercial lease listed for the current tenant.

 [Tenant().Lease().SalesMonth("11/15/ 2026 ","","-4")]

 Displays the most recent month with retail sales preceding four months before November 15, 2026 for the first commercial lease listed for the current tenant.
