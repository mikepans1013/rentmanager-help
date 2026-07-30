# Site Classification Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Site-Classification-Count.htm

The SiteClassificationCount function displays the total number of Rent Manager -generated site classifications that have been assigned to a unit.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit

 [Unit().SiteClassificationCount()]

 Displays the number of site classifications associated with the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SiteClassificationCount( "FromDate" , "ToDate" )]

 FromDate

 Specify the date on or after which to examine the unit's site classification count. If no date is specified, the function uses the beginning of time.

 [SiteClassificationCount("5/29/ 2026 ")]

 Displays the number of site classifications assigned to the unit on or after May 29, 2026 .

 ToDate

 Specify the date on or before which to examine the unit's site classification count. If no date is specified, the function uses the end of time.

 [SiteClassificationCount("","11/21/ 2026 ")]

 Displays the number of site classifications assigned to the unit on or before November 21, 2026 .

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().SiteClassificationCount("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the number of site classifications assigned to the unit for the 2026 calendar year.

 [Unit().SiteClassificationCount("",System.Date)]

 Displays the number of site classifications assigned to the unit from the beginning of time until the current date.
