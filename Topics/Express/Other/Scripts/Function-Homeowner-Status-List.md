# Homeowner Status List (Function)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Homeowner-Status-List.htm

The HomeownerStatusList function displays the history of homeowner statuses for a rentable home-type asset being leased by a tenant.

 By default, the homeowner status name, start date, and end date aredisplayed separated by tabs on a separate line of information for each charge. Additional variables may be used in the Format parameter to customize how this information is displayed.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below:

 Class
 Syntax

 Home

 [Tenant().Home().HomeownerStatusList()]

 Displays a list of homeowner statuses for an asset.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [HomeownerStatusList( "FromDate" , "ToDate" , "Format" )]

 FromDate

 Specify the date on or after which to examine the homeowner status history for a tenant's home-type asset. If no date is specified, the function uses the beginning of time.

 [HomeownerStatusList("5/29/ 2026 ")]

 Displays the homeowner status(es) assigned to the home-type asset from May 29, 2026 or after.

 ToDate

 Specify the date on or before which to examine the homeowner status history for a tenant's home-type asset. If no date is specified, the function uses the end of time.

 [HomeownerStatusList("","9/6/ 2026 ")]

 Displays the homeowner status(es) assigned to the home-type asset from September 6, 2026 or before.

 Format

 List details of each homeowner status history item using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the homeowner status, start date, and end date variables, separated by tabs:

 "\t$_Name\$_StartDate\t$_EndDate\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_CreateDate

 Displays the date on which this homeowner status was entered and first saved in Rent Manager .

 $_CreateUser

 Displays the user who entered and first saved this homeowner status in Rent Manager .

 $_Duration

 Displays the number of days since the asset was assigned this homeowner status, or the total number of total number of days a previous status was assigned.

 $_EndDate

 Displays the final date the homeowner status was assigned.

 $_Name

 Displays the name of the homeowner status.

 $_StartDate

 Displays the first date the homeowner status was assigned.

 $_UpdateDate

 Displays the date on which this homeowner status was last updated and saved in Rent Manager .

 $_UpdateUser

 Displays the user who last updated and saved this homeowner status in Rent Manager .

 HomeownerStatusList("","","\t$_Name\t$_Duration\t$_StartDate\t$_EndDate\t$_CreateUser\n")

 Displays a new line with a customized list of the homeowner status name, number of days the status was or has been assigned, the date the status began, the date the status ended, and the user who added the status, separated by tabs for each status.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().HomeownerStatusList("1/1/ 2026 ","12/31/ 2026 ")]

 Displays the homeowner status(es) assigned to the home-type asset for the 2026 calendar year.

 [Tenant().Home().HomeownerStatusList("",System.Date())]

 Displays the homeowner status(es) assigned to the home-type asset from the beginning of time until the current date.
