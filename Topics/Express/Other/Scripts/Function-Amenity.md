# Amenity Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Amenity.htm

This function displays information about an amenity preferred by a tenant. Amenities are unit features or conveniences such as fireplaces, patios, pools, and so on.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Prospect

 [Prospect().Amenity()]

 Displays information found on the prospect Preferences tile of a prospect whose Status has changed to Tenant .

 Unit

 [Tenant().Lease().Unit().Amenity()]

 Displays information about the amenities on the unit's Amenities tile, as listed from top to bottom.

 Property

 [Property().Amenity()]

 Displays information found in the Property Amenities pop-up on the property's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Amenity( "Index" , "Field" )]

 Index

 Select the sequential checked amenity to examine. The first amenity has an index value of 0 , the second amenity has an index value of 1 , and so on. If no parameter is specified, the index defaults to 0 .

 [Amenity("1")]

 Displays the first additional checked amenity listed.

 Field

 Specify which of the amenity fields to examine:

 Field
 Description

 Comment

 [Amenity("","Comment")]

 Displays the information in the Comment field of the amenity.

 Name

 [Amenity("","Name")]

 Displays the information in the Name field of the amenity.

 Price

 [Amenity("","Price")]

 Displays the information in the Price field of the amenity.

 More Information

 Property-level amenities do not have a Price field. Adding the Price function does not return any results for property-level amenities.

 [Amenity("1","Comment")]

 Displays the text from the Comment field of the first additional checked amenity.

 Script Examples

 The following scripts show various ways the function can be used:

 [Prospect().Amenity()]

 Displays the name of the preferred amenity specified for the prospect who is now the selected tenant.

 [Tenant().Lease().Unit().Amenity()]

 Displays the first checked amenity for the unit of the first-lease listed for the selected tenant.

 [Tenant().Lease().Unit().Amenity("2","Name")]

 Displays the Name of the third checked amenity for the unit of the first-lease listed for the selected tenant.

 [Tenant().Lease().Unit().Amenity("","Price")]

 Displays the price of the first checked amenity for the unit of the first lease listed for the selected tenant.

 [Property().Amenity()]

 Displays the name of the first checked amenity available at the property.

 [Property().Amenity("1","Name")]

 Displays the name of the first additional checked amenity for the property listed in the amenities field.
