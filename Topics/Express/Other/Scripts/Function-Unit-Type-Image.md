# Unit Type Image Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Unit-Type-Image.htm

This function displays the images for the unit type of the selected unit.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Unit Type

 [Unit().UnitType().UnitTypeImage()]

 Displays information found on the unit type's images section carousel.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [UnitTypeImage( "ImageIndex" , "Width" , "Height" , "IsInches" )]

 ImageIndex

 Enter the index value of the image type to display. The first image of a particular image type has an index value of 0 , the second has an index value of 1 , and so on.

 [UnitTypeImage("1")]

 Displays the first additional image on the unit type.

 Width

 Specify the width of the image. If a height parameter value is not specified after the width, the image is scaled proportionately.

 [UnitTypeImage("0","100")]

 Displays the graphic scaled to 100 pixels wide with height proportional.

 Height

 Specify the height of the image. If a width parameter value is not specified before the height, the image is scaled proportionally.

 [UnitTypeImage("0","","50")]

 Displays the graphic scaled to 50 pixels high with width proportional.

 IsInches

 Enter the value False if the width and height are in pixels and True if they are in inches. If no parameter value is specified, the function defaults to False .

 More Information

 In addition to True and False , this parameter also accepts the following alternate input options: T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 [UnitTypeImage("0","3","","True")]

 Displays the graphic scaled to 3 inches wide and proportional height.

 [UnitTypeImage("0","","5","Y")]

 Displays the graphic scaled to 5 inches high and proportional width.

 Script Examples

 The following scripts show various ways the function can be used:

 [Unit().UnitType().UnitTypeImage()]

 Displays the image for the unit type of the selected unit at its existing size.

 [Unit().UnitType().UnitTypeImage("1","5","","True")]

 Displays the first additional image for the unit type of the selected unit scaled to 5 inches wide and proportional height.

 [Tenant().Lease().Unit().UnitType().UnitTypeImage()]

 Displays the image for the unit type of the first unit of the first least of the selected tenant at its existing size.
