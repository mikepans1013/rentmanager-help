# Image Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Image.htm

This function embeds the specified image file using a file path or field in Rent Manager .

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Contact

[ Class(). Contact().Image(Contact.ImagePath)]

 Displays information from the entity's View Contacts pop-up.

 Financial Property

 [ Class(). FinancialProperty.Image(Property.LogoPath)]

 Displays information from the Property Logo tile of the financial property for the selected asset.

 Pet

[Tenant().Pet().Image()]

 Displays information from the Pets tile on the tenant's details page.

 Property

 [Property().Image(Property.LogoPath)]

 Displays information from the property's Property Logo tile.

 System

 [System.Image()]

 Displays information from the specified file path.

 Violation

[Violation().Image()]

 Displays information from the violation's Violation Image tile.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 Warning

 The parameters listed below apply only when using this function with the specified classes. Using these parameters with other classes returns no data.

 Parameters for Violation, Pet, and System Classes

 [System.Image( "Path" , "Width" , "Height" , "IsInches") ]

 Image( "Width" , "Height" , "IsInches" )

 Path

 Specify the file path where the image is located in your system. This parameter applies only when using this function with the System class.

 [Image("\\tsclient\C\myImage.jpg")]

 Displays the image named myImage.jpg located in this system path.

 Width

 Specify the width of the image. If a height parameter value is not specified after the width, the image is scaled proportionately.

 [Image("100")]

 Displays the image of the specified entity scaled to 100 pixels wide and a proportional height.

 Height

 Specify the height of the image. If a width parameter value is not specified before the height, the image is scaled proportionally.

 [Image("","150")]

 Displays the image of the specified entity scaled to 150 pixels high and a proportional width.

 IsInches

 Enter the value False if the width and height are in pixels and True if they are in inches. If no parameter value is specified, the function defaults to False .

 More Information

 In addition to True and False , this parameter also accepts the following alternate input options: T and F , Yes and No , and Y and N . The options T , Yes , and Y all behave the same as True , while F , No , and N all behave the same as False .

 [Image("3","","True")]

 Displays the image of the specified entity scaled to 3 inches wide and a proportional height.

 [Image("","5","Yes")]

 Displays the image of the specified entity scaled to 5 inches tall and a proportional width.

 Parameters for the Contact Class

 Image( Contact.ImagePath )

 Contact.ImagePath

 The Contact.ImagePath script entered as a parameter directs Rent Manager to the location of the image.

 [Tenant().Contact().Image(Contact.ImagePath)]

 Displays the image on the View Contacts pop-up of the specified tenant contact.

 Parameters for the Property and Financial Property Classes

 Image( Property.LogoPath )

 Property.LogoPath

 The Property.LogoPath script entered as a parameter directs Rent Manager to the location of the image.

 [Property().Image(Property.LogoPath)]

 Displays the image on the Property Logo tile of the selected property.

 [Asset().FinancialProperty.Image(Property.LogoPath)]

 Displays the image on the Property Logo tile of the specified asset's financial property.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.Image("\\tsclient\C\myImage.jpg","500")]

 Displays the image named myImage.jpg located in this system path, scaled to 500 pixels wide and a proportional height.

 [Violation().Image("4","","True")]

 Displays the image of the specified violation, scaled to 4 inches wide and a proportional height.

 [Property().Image(Property.LogoPath)]

 Displays the image on the Property Logo tile of the selected property, at its original size.

 [Tenant().Contact().Image(Contact.ImagePath)]

 Displays the image on the View Contacts pop-up of the specified tenant contact, at its original size.
