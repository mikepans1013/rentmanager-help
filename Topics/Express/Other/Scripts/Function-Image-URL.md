# Image URL Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Image-URL.htm

This function displays the web address of the selected image of the entity, as shown on the details page.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().ImageURL()]

 Displays information from the details page of the asset.

 Financial Property

 [ Class(). FinancialProperty.ImageURL()]

 Displays information from the details page of the asset's financial property.

 Home

 [ Class(). Marketing.ImageURL()]

 Displays information from the details page of the home-type asset.

 Marketing

 [ Class(). Marketing.ImageURL()]

 Displays information from the details page of the property or unit.

 Property

 [Property().ImageURL()]

 Displays information from the details page of the property.

 Unit

 [Unit().ImageURL()]

 Displays information from the details page of the unit.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ImageURL( "ImageType" , "ImageIndex" )]

 ImageType

 Enter the name of the image type as it appears on the image header on the entity's details page.

 [ImageURL("Street View")]

 Displays the URL of the first image with the Street View image type.

 ImageIndex

 Enter the index value of the image type to display. The first image of a particular image type has an index value of 0 , the second has an index value of 1 , and so on.

 [ImageURL("Floor Plan","1")]

 Displays the URL of the first additional image with the Floor Plan image type.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().ImageURL()]

 Displays the URL to the first image file assigned to the first image type alphabetically on the property's details page.

 [Unit().ImageURL("Floor Plan","1")]

 Displays the URL of the first additional image of the Floor Plan image type on the unit's details page.

 [Tenant().Home().ImageURL("Lot","2")]

 Displays the URL of the second additional image of the Lot image type on the home-type asset's details page.

 [Property().Marketing.ImageURL("Street View")]

 Displays the URL of the first image file assigned to the Street View image type on the property's details page, only if Street View is selected on the property Marketing Setup pop-up. Otherwise, it displays blank.
