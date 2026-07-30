# Date Add Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Date-Add.htm

This function adjusts a date by adding or subtracting a specified interval of time.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.DateAdd()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [DateAdd( "Period" , "Count" , "Date" )]

 Period

 This is the interval of time to add or subtract from a date value.

 Parameter Value
 Description

 y or yyyy

 [DateAdd("y","2")]

 Displays the date two years after today's date.

 q

 [DateAdd("q","3")]

 Displays the date three quarters after today's date.

 m

 [DateAdd("m","7")]

 Displays the date seven months after today's date.

 d

 [DateAdd("d","3")]

 Displays the date three days after today's date.

 w

 [DateAdd("w","10")]

 Displays the date ten weekdays after today's date.

 ww

 [DateAdd("ww","12")]

 Displays the date twelve weeks after today's date.

 h

 [DateAdd("h","72")]

 Displays the date seventy-two hours after today's date.

 n

 [DateAdd("n","525600")]

 Displays the date 525,600 minutes after today's date.

 s

 [DateAdd("s","500")]

 Displays the date 500 seconds after today's date.

 Count

 This is the numeric value to add or subtract from the date value using the selected period.

 [DateAdd("ww","3")]

 This displays the date three weeks after today's date.

 Date

 Specify the date to adjust. By default, the function uses today's date if no date is added.

 [DateAdd("d","5","6/20/ 2026 ")]

 Displays the date five days after June 20, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.DateAdd("m","7")]

 Displays the date seven months after today’s date.

 [System.DateAdd("d","-30")]

 Displays the date thirty days before today’s date.

 [System.DateAdd("m","1",Lease.MoveInDate)]

 Displays the date one month after the tenant's Move In Date .

 [System.DateAdd("d","5","01/09/ 2026 ")]

 Displays the date five days after January 9, 2026 .

 [$Date=DateAdd("d","3",System.Date);
If(Format($Date, "ddd")=="Sun",$Date=DateAdd("d","1",$Date),
If(Format($Date, "ddd")=="Sat", $Date=DateAdd("d","2",$Date),""));
$Date]

 Displays the date three work days from today's date. For example, running this script on a Friday displays the date for the following Wednesday. For more information on If statements, refer to If Function (Script) .
