# Location History Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Location-History.htm

This function displays the history of the selected asset's locations based on the parameters specified.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().LocationHistory()]

 Displays information from the Asset Location tile for the asset.

 Home

 [ Class(). Home().LocationHistory()]

 Displays information from the Home Location tile for the home-type asset.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LocationHistory( "AssetID" , "LocationIndex" , "FromDate" ," ToDate" , "Format" )]

 AssetID

 Specify the system-generated asset ID number you wish to examine. If no asset ID is specified, Rent Manager defaults to using the ID of the asset selected before running the script.

 [LocationHistory("710")]

 Displays location history items for the asset with ID number 710.

 LocationIndex

 Displays a specific line item in the location history. The first item in the location history has an index value of 0 , the second item has an index value of 1 , and so on.

 [LocationHistory("","1")]

 Displays the first additional location history line item for the selected asset.

 FromDate

 Specify the date on or after which to examine location history items. If no date is specified, the function uses the beginning of time.

 [LocationHistory("","","5/4/ 2026 ")]

 Displays the location history items for the asset from May 4, 2026 or after.

 ToDate

 Specify the date on or before which to examine location history items. If no date is specified, the function uses the end of time.

 [LocationHistory("","","","12/6/ 2026 ")]

 Displays the location history items for the asset from December 6, 2026 or before.

 Format

 List details of each location history item using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the property, unit, from date, and to date variables, separated by tabs:

 "\t$_EntityName\t$_UnitName\t$_FromDate\t$_ToDate\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_CreateDate

 Displays the date on which this location history item was entered and first saved in Rent Manager .

 $_CreateUser

 Displays the user who entered and first saved this location history item in Rent Manager .

 $_EntityName

 Displays the name of the Property for the location history item.

 $_FromDate

 Displays the From date for the location history item.

 $_ToDate

 Displays the To date for the location history item.

 $_UnitName

 Displays the name of the Unit for the location history item.

 $_UpdateDate

 Displays the date on which this location history item was last updated and saved in Rent Manager .

 $_UpdateUser

 Displays the user who last updated and saved this location history item in Rent Manager .

 LocationHistory("","","","","\t$_EntityName\t$_UpdateDate\t$_UpdateUser\n")

 Displays a new line with a customized list of the property name, date on which the item was most recently updated, and the user who performed the last update, separated by tabs for each location history item.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().LocationHistory()]

 Displays all location history items for the tenant's first listed home-type asset.

 [Asset().LocationHistory("310")]

 Displays all location history items for the asset with the system-generated ID number 310.

 [Asset().LocationHistory("310","1")]

 Displays the second location history item for the asset with the system-generated ID number 310.

 [Tenant().Asset().LocationHistory("","","1/1/ 2026 ","12/31/ 2026 ")]

 Displays location history items dated from January 1, 2026 through December 31, 2026 for the selected tenant's first listed asset.

 [Asset().LocationHistory("","","","","\t$_UnitName\t$_CreateDate\t$_CreateUser\n")]

 Displays a new line with a customized list of the unit name, create date, and create user for each location history item for the selected asset.

 The output displays as shown below:
