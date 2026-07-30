# Homeowner Status Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Homeowner-Status.htm

The HomeownerStatus function displays a home-type asset's homeowner status as of a specified date.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Home

 [Tenant.Home().HomeownerStatus()]

 Displays information found on the asset's General tile in the Homeowner Status field.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [HomeownerStatus( "StageIndex" , "AsOfDate" , "Format" )]

 StageIndex

 Specify the homeowner status to display. By default, the current status in the Homeowner Status field displays.

 When specifying a StageIndex , Rent Manager examines homeowner statuses based on their system-generated create date. The statuses are indexed from oldest create date to newest.

 [HomeownerStatus("1")]

 Displays the homeowner status with the second-oldest create date associated with the home-type asset.

 AsOfDate

 Specify the date for which to retrieve the homeowner status. If no date is specified, today's date is used by default.

 [HomeownerStatus("","12/31/ 2026 ")]

 Displays the homeowner status as of December 31, 2026 .

 Format

 List details of each homeowner status using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the homeowner status:

 "\t$_Name"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date and time that the homeowner status was assigned.

 $_CreateUser

 Displays the username of the user who assigned the homeowner status.

 $_Duration

 Displays the number of days the asset spent in the homeowner status.

 $_EndDate

 Displays the End Date of the homeowner status.

 $_Name

 Displays the name of the homeowner status.

 $_StartDate

 Displays the Start Date of the homeowner status.

 $_UpdateDate

 Displays the date the homeowner status was last updated.

 $_UpdateUser

 Displays the username of the user who last updated the homeowner status.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant.Home.HomeownerStatus("0","","$_CreateDate")]

 Displays the date on which the asset’s first homeowner status was created in Rent Manager , as of the current date.

 [Tenant.Home.HomeownerStatus("","","\t$_Name\t$_StartDate\n")]

 Displays a line with the name of the current homeowner status and that status' Start Date , separated by a tab.
