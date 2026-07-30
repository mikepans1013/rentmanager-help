# ILS Marketing Required Fields

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Marketing-ILS-Required-Fields.htm

Internet listing services (ILS) marketing allows you to market the units and properties in your database to ILS sites such as Zillow. There are several fields that are required by the industry standard MITS format to successfully market your vacancies. Additionally, properties with a feed type of Multi Family or Not Set (displayed on the Marketing Setup pop-up), require some additional information.

 Rent Manager 's ILS marketing uses the MITS format for generating property and unit marketing feeds, as this is the format accepted by most ILS providers. There are specific fields required by the MITS format, which are provided and explained below. However, different ILS providers may also require other fields in addition to the fields required by the MITS format. If an ILS provider requires any field(s) not covered in this topic, an error displays in the Listings page specifying which fields need to be filled out.

 Warning

 Rent Manager 's ILS postings are generated using the MITS file format, which is the industry standard for syndicating available units and properties. As many ILS sites no longer accept marketing data for individual units, it is strongly recommended that you utilize property-level marketing and convert any existing unit-level marketing data.

 If you have not converted your unit configuration to a property configuration, the Marketing Setup pop-up displays a message prompting you to use the Property Marketing Configuration Wizard . Once you convert to a property configuration, it cannot be reversed. For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 Fields Always Required

 The following fields are always required by ILS provider sites for marketing your properties:

 Field
 Description

 Bathrooms

 The number of bathrooms entered on the unit (for Single Family feed type properties) or the floor plan (for Multi Family feed type properties). For more information, refer to Unit Details (Page) or Create a Floor Plan .

 More Information

 Regardless of the feed type, some ILS providers may reject a listing if the information in the floor plan does not match the information entered on the associated units' details page.

 Bedrooms

 The number of bedrooms entered on the unit (for Single Family feed type properties) or the floor plan (for Multi Family feed type properties). For more information, refer to Unit Details (Page) or Create a Floor Plan .

 More Information

 Regardless of the feed type, some ILS providers may reject a listing if the information in the floor plan does not match the information entered on the associated units' details page.

 Marketing Name

 The name, such as the name of the property, to display on ILS sites. By default, this field is left blank until you enter a desired name or select a field or UDF from the list. For more information, refer to Property Marketing Advanced Settings (Pop-Up) .

 Price

 The market rent as entered on the unit's Market Rent tile (for Single Family feed type properties) or the floor plan (for Multi Family feed type properties). For more information, refer to Property Marketing Setup (Pop-Up) or Create a Floor Plan .

 Property Type

 The type of property that is available to rent (e.g., Apartment ). By default, this field is populated with the Property Type selected on the property's details page. For more information, refer to Property Marketing Advanced Settings (Pop-Up) .

 More Information

 If the Property Type is changed on the property's details page, the change is not reflected in the Advanced Settings pop-up, unless the Property Type field in the pop-up is set to Field: Property Type .

 Rental Type

 The category for the style of living at the property. For example, if a university lists their vacant housing on an ILS site, their rental type would be Student . By default, this field is left blank until you select the desired rental type from the list. For more information, refer to Property Marketing Advanced Settings (Pop-Up) .

 Square Footage

 The total square footage of each associated unit (for Single Family feed type properties) or of the units associated with the floor plan (for Multi Family feed type properties). For more information, refer to Unit Details (Page) .

 Required Fields for Multi Family Feed Types

 On the Marketing Setup pop-up, if the Feed Type is set to Multi Family or Not Set , you also need to establish your floor plan settings in addition to the fields that are always required. There are also other additional fields that are required by most ILS sites if you are including unit-specific information or images.

 Floor Plan Fields

 For all properties with a Feed Type is set to Multi Family or Not Set , you need to include the following information:

 Field
 Description

 Floor Plan Name

 Each floor plan must have a unique name. Giving your floor plans distinct names helps potential prospects determine which rental is right for them. For more information, refer to Create a Floor Plan .

 Unit-Specific Information

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View, Edit

 For more information, refer to Control User Access .

 For all properties with a Feed Type of Multi Family or Not Set and the option to Exclude unit-specific information is unchecked, Rent Manager includes information from the associated units in your listing. This requires you to enter information for the following:

 Action
 Description

 Set Availability Filters

 Availability filters allow you to specify how Rent Manager determines which units or properties should be listed as available on your ILS provider's feed. For more information, refer to Online Listings Availability Filters (System Preferences) .

 Set Unit Amenities

 When including information about your units, the amenities selected on the associated units are included in your listing. For more information, refer to Unit Amenities (Pop-Up) .

 Confirm Occupancy Information

 When including information about your units, you must verify the Max Occupancy (on the unit's Miscellaneous tile) and the last Move Out Date (on the unit's Occupancy tile) are correct so the information can be included in your listing.

 Enter Unit and Property Names

 For the associated units, the Name (on the unit's details page) displays in the listing. For more information, refer to Unit Marketing Advanced Settings (Pop-Up) .

 Required Fields for Images

 When you add an image to a unit, property, or floor plan, the following fields are required on the Upload Image pop-up:

 Field
 Description

 Caption

 A brief description of the image, such as the name of the property that displays in the image.

 Location

 The file path as to where the uploaded image is located. This field populates automatically when an image is uploaded.

 Add Images

 Use the following sources to add images to your listing:

 Source
 Description

 Property Images

 The image selected on the property's details page. The selected Image Type must correspond with the Property Images field on the property's Marketing Setup pop-up. For more information, refer to Property Marketing Setup (Pop-Up) .

 Unit Images

 This option is available only for properties where the Feed Type is set to Multi Family or Not Set and the option to Exclude unit-specific information is unchecked on the Marketing Setup pop-up. For more information, refer to Property Marketing Setup (Pop-Up) .

 Floor Plan Images

 On the Marketing Setup pop-up, if the Feed Type is set to Multi Family or Not Set , you can include images related to your floor plans. For more information, refer to Create a Floor Plan .

 Agent Information Fields

 Regardless of the feed type, if you want to include information about agents for your listings, the following fields are required:

 -
 First Name

 -
 Last Name

 -
 Email Address

 For more information, refer to Property Marketing Advanced Settings (Pop-Up) .
