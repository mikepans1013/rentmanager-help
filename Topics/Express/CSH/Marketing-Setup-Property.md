# Property Marketing Setup (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Marketing-Setup-Property.htm

The internet listing service (ILS) marketing integration allows you to create online listings for the available properties in your Rent Manager database. Listings can be pushed to ILS providers such as Zillow, Trulia, and HotPads. From the property Marketing Setup pop-up, you can customize marketing settings to advertise your property online.

 More Information

 If the property has a Property Type of RV/Campground , the Marketing Setup pop-up includes fields specific to short-term rentals. For more information, refer to STR Property Marketing Setup (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To view marketing information for a property, go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list. Then, on the action bar to the right, click arrow_forward   Marketing Setup .

 More Information

 If you have not created a property-level marketing configuration, the Marketing Setup pop-up displays a message prompting you to create one with the Property Marketing Configuration Wizard . For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 The tiles on the Marketing Setup pop-up contain information about the property's ILS marketing settings, which control what displays in your ILS listings.

 Include/Exclude

 The options below determine if this property is included in your ILS feeds.

 Option
 Description

 Use System Preference

 Use the system preference for determining if this property is included in the marketing feed. For more information, refer to Online Listings Availability Filters (System Preferences) .

 Always Include

 This property is always included in the marketing feed.

 Always Exclude

 This property is never included in the marketing feed.

 Contact Information

 This tile displays the email, phone number, and website address used in ILS marketing feeds for this property. Manually type in custom entries, or use the drop-downs to select information from existing fields found elsewhere in Rent Manager .

 Field
 Description

 Company Info

 The information that displays as the company name in your ILS feeds. To change what displays in this field, click to open the Company Information pop-up. Each option is described below.

 Custom Entry

 In the Company Name field, enter the name to display on the online listing. In the Company Address section, enter the Street , City , State , and Postal Code to use for the company on your ILS feed.

 Property Management Company Info

 Use the name and default address of the property designated as the management company in system preferences. For more information, refer to Management Company (System Preferences) .

 Property Info

 Use the name and default address of the property as entered on the Property details page.

 Contact Email

 The email address through which prospects can contact you for more information.

 Contact Phone

 The phone number prospects can use to contact the company that is managing the property.

 Company Website

 The website address (URL) of the company managing the property.

 Marketing Description

 In this tile, you can write a custom description to be included in your online listing. Alternatively, click Add from UDF to choose a user defined field that contains the description you want to use for the listing. Descriptions have a 1,000-character limit.

 More Information

 The Orion Writing Assistant is a versatile tool which can assist with altering your email and letter templates to fit unique individual situations, or to efficiently create persuasive marketing descriptions with slight variations between properties. In areas of Rent Manager where the feature is available, click the icon to open the Orion Writing Assistant and start working with Orion AI . For more information, refer to Writing Assistant Powered by Orion AI .

 Listing Details

 This tile displays the images, availability status, and lease terms for rentals at this property.

 Field
 Description

 Exclude Unit-specific information

 Excludes unit details from the listing feed and use only information provided from the property and floor plans. When unchecked, information about the individual units at the property, such as number of bedrooms, is also included in the listing feed. When unchecked, you are able to select unit-type user defined fields and unit image types in applicable fields on the property Marketing Setup pop-up.

 Unchecking this box does not enable unit-level marketing.

 Price

 The location in your Rent Manager database where the listing price for the property is set. Use the drop-downs to select an existing Rent Manager field or manually enter a value. To use a custom entry, click .

 More Information

 When the property's feed type is set to Multi-Family , the price field cannot be changed. The price displayed in the listing is pulled from the Floor Plans section in the Price field for each floor plan listed.

 Deposit Fee(s)

 The total dollar amount for deposits for the property. Use the drop-downs to select an existing Rent Manager field.

 Lease Terms

 The available lease terms for the property. To change what displays in this field, click the drop-down and select or deselect one or more lease terms. Alternatively, choose Contact For Details if lease terms at the selected property are not determined.

 Property Images

 The property image type(s) that display in your ILS feed. Select one or more image types from the drop-down menu. To see the images that display on the listing based on the chosen types, click Preview .

 More Information

 For images to be included in the ILS feed, you must have a valid Path and Caption for your images. You can enter this information when you add new images or by adding them to existing images on the property's details page.

 Unit Images

 The unit image type for the associated unit(s) to display in the listing. All images of the selected image type(s) on the Images tile of all the property's units are included in your ILS feed. This field displays only if Exclude Unit-specific information is unchecked.

 Availability Date

 The date on which the property is listed as available. If this field is blank, the property lists as available by default.

 Features

 This tile shows which amenities the property offers and features with preselected fields taken from ILS sites, such as the types of pets that are allowed.

 Field
 Description

 Property Amenities

 The amenities available at the property that display in the online listing. These amenities can be changed from the property details page in the Other Information tile by selecting from the Property Amenities drop-down.

 Laundry

 The laundry options available at the property.

 Pets

 The types of pets allowed at the property.

 Included Utilities

 The utilities that are included in the rent payments for the property.

 Floor Plans

 This tile lists information about the unit types available at the property. To create a new floor plan, click   Add Item .

 The following columns display in the Floor Plans section:

 Column
 Description

 Name

 The name of the floor plan, set when you add a new floor plan.

 Unit Type

 The unit type(s) at the property assigned to the floor plan. Only those unit types that are enabled for this property can be selected.

 Unit Count

 The number of units at the property of the selected unit type(s) in the floor plan.

 Beds

 The number of bedrooms in the units assigned to the floor plan, found on the unit type details page for the unit type assigned to this floor plan. You can also set the number of beds with a manual text entry when adding or editing a floor plan.

 Baths

 The number of bathrooms in the units assigned to the floor plan, found on the unit type details page for the unit type assigned to this floor plan. You can also set the number of baths with a manual text entry when adding or editing a floor plan.

 Price

 The price or price range of the units assigned to the floor plan. The field populates with the market rent set on each unit's details page. If the units cover a range of prices, the field displays the range from the lowest to highest. You can also enter a price manually when adding or editing a floor plan.

 Images

 The number of images attached in the floor plan's Images section.
