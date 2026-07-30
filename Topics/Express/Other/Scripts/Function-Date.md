# Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Date.htm

This function displays date information for the system or selected violation in the specified format.

 Classes that utilize this function and the location from which the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 System

 [System.Date()]

 Stage

 [Violation().Stage().Date]

 Displays information found in the Violation Details tile of a violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Date( "Format" )]

 Warning

 The parameter listed below applies to this function only when used with the System class. If using this function with the Stage class, there are no available parameters.

 Format

 Enter combinations of these options to specify the format of the Date. You may also include the following literal (static) characters:

 -
 forward slash	/

 -
 hyphen –

 -
 comma ,

 -
 period .

 By default, the system date formats as m/d/yyyy.

 Parameter Value
 Description

 d

 Day, numeric, no leading zero

 dd

 Day, numeric, with leading zero

 ddd

 Day of the week, three-character abbreviation

 dddd

 Day of the week, full name

 m

 Month, numeric, no leading zero

 mm

 Month, numeric, with leading zero

 mmm

 Month, three-character abbreviation

 mmmm

 Month, full name

 yy

 Year, two-digit number

 yyyy

 Year, four-digit number

 [Date("mmmm d, yyyy")]

 This displays the date as July 21, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Violation().Stage().Date]

 Displays the Violation Date of the selected violation.

 [System.Date()]

 Displays the date in system default m/d/yyyy format: 7/21/2026 .

 [System.Date("mm-dd-yy")]

 Displays the date as 07-21-26 .

 [System.Date("mmmm d, yyyy")]

 Displays the date as July 21, 2026 .

 [System.Date("mmm. d, yyyy")]

 Displays the date as Jul. 21, 2026 .

 [System.Date("ddd., m/d/yyyy")]

 Displays the date as Tue., 7/21/2026 .

 [System.Date("dddd, mmmm d, yyyy")]

 Displays the date as Tuesday, July 21, 2026 .

 [$Day=System.Date("d");
$Suf=System.NumberSuffix($Day);
$MY=System.Date("mmmm, yyyy");
System.Echo("the "&$Day&$Suf&" of "&$MY]

 Displays the date in legal language format. For example, the 12th of July, 2024 .
