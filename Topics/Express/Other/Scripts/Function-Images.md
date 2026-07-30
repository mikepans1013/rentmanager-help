# Images Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Images.htm

This function displays the selected image of the selected property or unit. Only images of the image types specified on the selected property or unit Marketing Setup pop-up are examined.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Marketing

 [ Class() .Marketing.Images()]

 Displays information found on the Images tile of the selected property or unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values as specified below.

 [Images( "ImageType" , "Imageindex" , "Width" , "Height" , "IsInches" )]

 ImageType

 Enter the name of the image type as it displays on the image header.

 [Images("Street View")]

 Displays the first image of the Street View image type.

 ImageIndex

 Enter the index value of the image type to display. The first image of a particular image type has an index value of 0 , the second has an index value of 1 , and so on.

 [Images("Floor Plan","1")]

 Displays the first additional image of the Floor Plan image type.

 Width

 Specify the width of the image. If a height parameter value is not specified after the width, the image is scaled proportionately.

 [Images("Floor Plan","","100")]

 Displays the first image of the Floor Plan image type scaled to 100 pixels wide and a proportional height.

 Height

 Specify the height of the image. If a width parameter value is not specified before the height, the image is scaled proportionally.

 [Images("Floor Plan","1","","50")]

 Displays the first additional image of the Floor Plan image type scaled to 50 pixels high and a proportional width.

 IsInches

 Enter the value False if the width and height are in pixels and True if they are in inches. If no parameter value is specified, the function defaults to False .

 More Information

 In addition to True and False , this parameter also accepts the following alternate input options: T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 [Images("Floor Plan","","3","","True")]

 Displays the first image of the Floor Plan image type scaled to 3 inches wide and a proportional height.

 [Images("Street View","","","5","Y")]

 Displays the first image of the Street View image type scaled to 5 inches high and a proportional width.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().Marketing.Images("Exterior")]

 Displays the first image of the image type Exterior for the selected property.

 [Unit().Marketing.Images("Living Room","1")]

 Displays the first additional image of the image type Living Room for the selected unit.

 [Property().Marketing.Images("Fitness Center","2","3","5","True")]

 Displays the third image of the image type Fitness Center scaled to 3 by 5 inches for the selected property.
