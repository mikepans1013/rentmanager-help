# Status History Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Status-History-Count.htm

This function displays the number of current and past statuses for the specified entity based on the parameters selected.

 Classes that utilize this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().StatusHistoryCount()]

 Displays information found on the Asset Status History tile.

 Home

 [ Class(). Home().StatusHistoryCount()]

 Displays information found on the Asset Status History tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [StatusHistoryCount( "AssetID" )]

 AssetID

 Specify the system-generated asset ID number you wish to examine. If no asset ID is specified, Rent Manager defaults to using the ID of the asset selected before running the script.

 [StatusHistoryCount("710")]

 Displays the number of statuses for the asset with ID number 710.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().StatusHistoryCount()]

 Displays the number of current and past statuses for the tenant's first home-type asset.

 [Asset().StatusHistoryCount("310")]

 Displays the number of current and past statuses for the asset with the system-generated ID number 310.
