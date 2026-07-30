# Image Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Image-Count.htm

This function displays the number of images for the entity, as shown on the Images tile.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().ImageCount()]

 Displays information from the Images tile of the asset.

 Financial Property

 [ Class(). FinancialProperty.ImageCount()]

 Displays information from the Images tile of the asset's financial property.

 Home

 [ Class(). Home().ImageCount()]

 Displays information from the Images tile of the home-type asset.

 Marketing

 [ Class(). Marketing.ImageCount()]

 Displays information from the Images tile of the property.

 Property

 [Property().ImageCount()]

 Displays information from the Images tile of the property.

 Unit

 [Unit().ImageCount()]

 Displays information from the Images tile of the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ImageCount( "ImageType" )]

 ImageType

 Enter the name of the image type as it appears on the image header in the Images tile.

 [ImageCount("Interior")]

 Displays the number of images with the Interior image type.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().ImageCount()]

 Displays the number of images assigned to the first image type alphabetically on the property's Images tile.

 [Unit().ImageCount("Floor Plan")]

 Displays the number of images assigned to the Floor Plan image type on the unit's Images tile.

 [Tenant().Home().ImageCount("Lot")]

 Displays the number of images assigned to the Lot image type on the home-type asset's Images tile.

 [Property().Marketing.ImageCount("Street View")]

 Displays number of images assigned to the Street View image type on the property's Images tile, only if Street View is selected on the property Marketing Setup pop-up. Otherwise, it displays blank.
