# Asset Image Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Asset-Image.htm

The AssetImage function displays the specified image associated with the selected asset based on the image type.

 The classes that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [ Class(). Asset().AssetImage()]

 Displays information from the asset's Images tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [AssetImage( "ImageType" , "ImageIndex" , "Width" , "Height" , "IsInches" )]

 ImageType

 Enter the name of the image type as it displays on the image header.

 [AssetImage("Exterior")]

 Displays the first image of the Exterior image type, based on the order established in the asset's Images tile.

 ImageIndex

 Enter the index value of the image type to display. The first image of a particular image type has an index value of 0 , the second has an index value of 1 , and so on.

 [AssetImage("Exterior","1")]

 Displays the second image of the Exterior image type, based on the order established in the asset's Images tile.

 Width

 Specify the width of the image. If a height parameter value is not specified after the width, the image is scaled proportionately.

 [AssetImage("Furnace","","100")]

 Displays the first image of the Furnace image type, based on the order established in the asset's Images tile, scaled to 100 pixels wide and a proportional height.

 Height

 Specify the height of the image. If a width parameter value is not specified before the height, the image is scaled proportionally.

 [AssetImage("Furnace","1","","50")]

 Displays the second image of the Furnace image type, based on the order established in the asset's Images tile, scaled to 50 pixels high and a proportional width.

 IsInches

 Enter the value False if the width and height are in pixels and True if they are in inches. If no parameter value is specified, the function defaults to False .

 More Information

 In addition to True and False , this parameter also accepts the following alternate input options: T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 [AssetImage("Furnace","","3","","True")]

 Displays the first image of the Furnace image type, based on the order established in the asset's Images tile, scaled to three inches wide and a proportional height.

 [AssetImage("Furnace","","","5","Y")]

 Displays the first image of the Furnace image type, based on the order established in the asset's Images tile, scaled to five inches high and a proportional width.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Asset().AssetImage("Exterior")]

 Displays the first image of the image type Exterior for the selected asset, based on the order established in the asset's Images tile.

 [Tenant().Asset().AssetImage("Furnace","1")]

 Displays the second image of the image type Furnace for the selected asset, based on the order established in the asset's Images tile.

 [Tenant().Asset().AssetImage("Shed","","5","","Yes")]

 Displays the first image of the image type Shed , based on the order established in the asset's Images tile, scaled to five inches wide and a proportional height for the selected asset.
