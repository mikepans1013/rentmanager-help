# Location History Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Location-History-Count.htm

This function displays the number of locations to which the asset has been linked.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().LocationHistoryCount()]

 Displays information from the Asset Location page.

 Home

 [ Class(). Home().LocationHistoryCount()]

 Displays information from the Asset Location page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [LocationHistoryCount( "AssetID" )]

 AssetID

 Specify the system-generated asset ID number you wish to examine. If no asset ID is specified, Rent Manager defaults to using the ID of the asset selected before running the script.

 [LocationHistoryCount("710")]

 Displays the number of location history items for the asset with ID number 710.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().LocationHistoryCount()]

 Displays the number of locations to which the tenant's first-listed home-type asset has been linked.

 [Asset().LocationHistoryCount("310")]

 Displays the number of locations to which the asset with the system-generated ID number 310 has been linked.
