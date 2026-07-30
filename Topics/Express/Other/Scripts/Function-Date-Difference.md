# Date Difference Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Date-Difference.htm

This function calculates the difference between two dates as measured in the specified period and displays the number of periods that Date2 is greater than or less than Date1.

 The return value is rounded down to the nearest whole number, so fractional differences are not represented.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.DateDifference()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [DateDifference( "Period" , "Date1" , "Date2" )]

 Period

 Specify the interval the function uses when calculating the difference between the following two dates.

 Parameter Value
 Description

 y or yyyy

 [DateDifference("y","1/1/2016","10/3/ 2026 ")]

 Displays the number of years between January 1, 2016 and October 3, 2026 .

 q

 [DateDifference("q","3/1/2020","1/3/ 2026 ")]

 Displays the number of quarters between March 1, 2020 and January 3, 2026 .

 m

 [DateDifference("m","1/1/ 2026 ","8/31/ 2026 ")]

 Displays the number of months between January 1 and August 31 in the year 2026 .

 d

 [DateDifference("d","1/1/ 2026 ","1/3/ 2026 ")]

 Displays the number of days between January 1 and January 3 in the year 2026 .

 w

 [DateDifference("w","1/1/ 2026 ","2/23/ 2026 ")]

 Displays the number of weekdays between January 1 and February 23 in the year 2026 .

 ww

 [DateDifference("ww","4/1/ 2026 ","7/8/ 2026 ")]

 Displays the number of weeks between April 1 and July 8 in the year 2026 .

 h

 [DateDifference("h","11/1/ 2026 ","11/3/ 2026 ")]

 Displays the number of hours between November 1 and November 3 in the year 2026 .

 n

 [DateDifference("n","1/1/ 2026 ","1/2/ 2026 ")]

 Displays the number of minutes between January 1 and January 2 in the year 2026 .

 s

 [DateDifference("s","12/11/ 2026 ","12/13/ 2026 ")]

 Displays the number of seconds between December 11 and December 13 in the year 2026 .

 Date1

 Specify the starting date (or script function that produces a date).

 [DateDifference("d","4/1/ 2026 ","4/30/ 2026 ")]

 Displays the number of days between April 1 and April 30 in the year 2026 .

 Date2

 Specify the date (or script function that produces a date) that is compared to Date1.

 If Date2 is greater than (comes after) Date1, the difference is a positive number. If Date2 is less than (comes before) Date1, the difference is a negative number.

 [DateDifference("d","3/1/ 2026 ","3/30/ 2026 ")]

 Displays the number of days between March 1 and March 30 in the year 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [System.DateDifference("d","1/1/ 2026 ","1/3/ 2026 ")]

 Displays a value of 2 .

 [System.DateDifference("m","1/5/ 2026 ","2/1/ 2026 ")]

 Displays a value of 0 since the difference is less than one month, and the fraction is rounded down.

 [System.DateDifference("d",System.Date,Tenant.Lease.LeaseEndDate)]

 Displays the number of days between today's date and the lease-end date of the current tenant's default lease.

 [System.DateDifference("d",Tenant.Lease.LeaseStartDate,Tenant.Lease.LeaseEndDate)]

 Displays the number of days between the lease-start date and lease-end date of the current tenant's default lease.
