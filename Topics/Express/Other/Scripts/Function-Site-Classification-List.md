# Site Classification List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Site-Classification-List.htm

This function can be used with the Unit class to display a list of site classifications for a unit, or a list of site classifications in a date range. Site classifications are determined by the site's legal owner, whether the site can be rented, the occupancy status, and the type of asset(s) and/or resident-owned RV present at that site.

 This script returns data only from units associated with properties that have a Property Type of Manufactured Housing . The unit's site classification can be found on the unit's details page on the scoreboard.

 Class
 Syntax

 Unit

 [ Class() .Unit.SiteClassificationList()]

 Displays the list of site classifications assigned to the unit, as shown on the unit's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SiteClassificationList( "FromDate" , "ToDate" , "Format" )

 FromDate

 Specify the start date to use when examining site classifications. If no date is specified, the function uses the beginning of time.

 [SiteClassificationList("1/5/ 2026 ")]

 Displays the list of site classifications that applied to the unit from January 5, 2026 and on.

 ToDate

 Specify the ending date to use when examining site classifications. If no date is specified, the function uses the end of time.

 [SiteClassificationList("","1/5/ 2026 ")]

 Displays the list of site classifications that applied to the unit since the beginning of time until January 5, 2026 .

 Format

 List details of the site classification using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the site classification name, the date the classification first applied, and the date on which the classification ended.

 "$_Name\t$_FromDate\t$_ToDate"

 Variables

 The following variables can be used in the Format parameter:

 Variable
 Description

 $_Duration

 Displays the number of days the unit has spent in this site classification.

 $_FromDate

 Displays the date this unit was first associated with this site classification.

 $_Name

 Displays the name of the site classification, as shown on the unit's details page.

 If there is no homeowner status assigned to the unit to determine a site classification, <Unassigned Homeowner Status> displays.

 $_ToDate

 Displays the last date this unit was still associated with the site classification before it changed. If there are no future classifications, this output displays blank.

 [SiteClassificationList("","","$_Name\t$_Duration")]

 Displays a list with a customized output that shows the current site classification's name and how long it's been assigned to that classification.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit.SiteClassificationList("5/10/ 2026 ")]

 Displays a list of the unit's assigned site classifications since May 10, 2026 .

 [Unit.SiteClassificationList("2/12/ 2026 ","10/20/ 2026 ")]

 Displays a list of the unit's assigned site classifications from January 12, 2026 through October 20, 2026 .

 [Tenant().Lease(1).Unit.SiteClassificationList()]

 Displays a list of the site classifications for the unit associated with the tenant's first additional lease.

 [Unit.SiteClassificationList("","","$_Name\t$_FromDate\t$_Duration")]

 Displays a customized output that shows a list of the unit's site classifications, including the classification name, the day the current classification first applied, and how long the unit has been assigned to that classification.

 Community Owned - Occupied	7/11/ 2026 112
Community Owned - Vacant 10/31/ 2026 20
Abandoned - Community Owned - 11/20/ 2026 55
