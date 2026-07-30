# Format Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Format.htm

This function adjusts the formatting of a date, time, or numeric value and displays it in a way that better fits its content. You can make changes such as converting the day or month in a date to be spelled out rather than numerical or including symbols to represent a number as a currency or percent.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Format()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Format( "Value" , "Format" )]

 Value

 Enter the data that should be formatted by this function.

This can be a literal value, a script variable with a stored value, or another function.

 [Format("Ohio",">")]

 The value is Ohio , and the format > tells the output to display in all caps: OHIO.

 Format

 Enter one of these options to adjust the format of the parameter value accordingly:

 Parameter Value
 Result

 General Date

 Display the date and time as defined by the system, which includes a numeric date and time stamp (e.g., 6/23/ 2026 12:00:00 AM ).

 Long Date

 Display the date according to system's long format, which includes the full day of the week, full month, and numeric day and year (e.g., Wednesday, June 23, 2026 ).

 Medium Date

 Display the date according to system's medium format, which includes an abbreviated month and numeric day and year (e.g., 23-Jun- 26 ).

 Short Date

 Display the date according to system's short format, which includes a numeric date (e.g., 6/23/ 2026 ).

 Long Time

 Display the time according to system's long format, which includes numeric hours, minutes, and seconds (e.g., 12:00:00 AM ).

 Medium Time

 Display the time according to system's medium format, which includes numeric hours and minutes with leading zeros (e.g., 01:00 AM ).

 Short Time

 Display the time according to system's short format, which includes numeric hours and minutes without leading zeros (e.g., 1:00 AM ).

 General Number

 Display the number with no thousands separator (e.g., 2000.00 ).

 Currency

 Display the number with currency sign and thousands separator (comma) and two digits to the right of the decimal (e.g., $2000.00 ).

 Fixed

 Display the number with at least one digit to the left of the decimal and two to the right. This format has no comma separators, and it rounds decimals with more than two digits (e.g., 0.20 ).

 Standard

 Display the number with thousands separator (comma) and at least one digit to the left of the decimal and two to the right (e.g., 2,000.00 ).

 Percent

 Display the number multiplied by 100 with a % sign appended two digits to the right of the decimal (e.g., 20.00% ).

 >

 Display the value in all caps (e.g., OHIO ).

 <

 Display the value in all lowercase (e.g., ohio ).

 Optionally, these parameter values can be combined or used with the following literal (static) characters:

 -
 forward slash	/

 -
 hyphen –

 -
 comma ,

 -
 period .

 Parameter Value
 Description

 d

 Day, numeric, no leading zero (e.g., 9 )

 dd

 Day, numeric, with leading zero (e.g., 09 )

 ddd

 Day of the week, three-character abbreviation (e.g., Wed )

 dddd

 Day of the week, full name (e.g., Wednesday )

 m

 Month, numeric, no leading zero (e.g., 3 )

 mm

 Month, numeric, with leading zero (e.g., 03 )

 mmm

 Month, three-character abbreviation (e.g., Feb )

 mmmm

 Month, full name (e.g., February )

 yy

 Year, two-digit number (e.g., 26 )

 yyyy

 Year, four-digit number (e.g., 2026 )

 [Format("Ohio","<")]

 The value is Ohio , and the format < tells the output to display in lowercase: ohio.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Format(" 7/21/2026 ","General Date")]

 Displays the specified date along with the current time stamp (which may r may not include seconds): 7/21/2026 12:00:00 AM.

 [System.Format(" 7/21/2026 ","Long Date")]

 Displays Tuesday, July 21, 2026 .

 [System.Format(" 7/21/2026 ","Short Date")]

 Displays 7/21/2026 .

 [System.Format(Date,"Long Time")]

 Displays the current time stamp (including seconds): 11:03:45 PM.

 [System.Format("4500","Currency")]

 Displays $4,500.00.

 [System.Format(".45","Percent")]

 Displays 45.00%.
