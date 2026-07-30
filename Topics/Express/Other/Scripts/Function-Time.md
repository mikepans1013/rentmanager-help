# Time Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Time.htm

This function displays the current system time in the specified format.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.Time()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Time( "Format" )]

 Format

 Enter combinations of these options to specify how the time is formatted. You may also include a colon as a literal (static) character.

 By default, the system time formats as Hh:Nn am/pm.

 Parameter Value
 Description

 H

 Hour, twelve-hour format, no leading zero

 Hh

 Hour, twelve-hour format, with leading zero

 h

 Hour, twenty-four-hour format, no leading zero

 hh

 Hour, twenty-four-hour format, with leading zero

 N

 Minute, no leading zero

 Nn

 Minute, with leading zero

 s

 Seconds, no leading zero

 ss

 Seconds, with leading zero

 AM/PM

 AM/PM in upper case

 am/pm

 am/pm in lower case

 a.m./p.m.

 a.m./p.m. in lower case

 A/P

 A/P in upper case

 a/p

 a/p in lower case

 AMPM

 Use system to determine am/pm

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Time()]

 Displays the current time in the system default format of Hh:Nn am/pm: 04:05pm .

 [System.Time("H:Nn am/pm")]

 Displays 4:05 pm .

 [System.Time("hh:Nn")]

 Displays 16:05 .
