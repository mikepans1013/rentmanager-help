# Set Up Marketing for ILS Sites

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Marketing-ILS-Set-Up.htm

The internet listing service (ILS) marketing integration allows you to create online listings for the available properties and units in Rent Manager and push those listings to ILS providers such as the Zillow Group (Zillow, Trulia, and HotPads) and the Apartments.com Network. You can enter all marketing information for your properties and units, determine which to include in the ILS website feeds, as well as override system preferences on a property-by-property basis.

 Warning

 Rent Manager 's ILS postings are generated using the MITS file format, which is the industry standard for syndicating available units and properties. As many ILS sites no longer accept marketing data for individual units, it is strongly recommended that you utilize property-level marketing and convert any existing unit-level marketing data.

 If you have not converted your unit configuration to a property configuration, the Marketing Setup pop-up displays a message prompting you to use the Property Marketing Configuration Wizard . Once you convert to a property configuration, it cannot be reversed. For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 Step 1: Establish Property Marketing Advanced Settings

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 These settings allow you to more specifically describe your property, as well as override system preferences on a property-by-property basis. Advanced settings determine the type of property you are marketing, which determines the other fields available on the property's marketing setup.

 To edit the property's advanced marketing settings, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property.
The property's details page displays.

 -
 On the action bar to the right, click arrow_forward Marketing Setup .
The Marketing Setup pop-up displays.

 -
 At the bottom of the pop-up, click Advanced .
The Advanced Settings pop-up displays.

 -
 In the Feed Information section, enter or select the following information:

 Field
 Description

 Feed Type

 Indicate if the property contains Multi Family or Single Family listings to categorize the ILS sites to which this property is marketed. This field automatically populates based on the property type set on the property's details page. For more information, refer to ILS Marketing Feed Types .

 Warning

 This field is required by ILS sites. If left blank, your listing is rejected.

 Property Type

 The property category that best describes the type of property you are marketing. If you do not specify a category, this field automatically populates with the property type set on the property's details page.

 Rental Type

 The category of tenants that would rent at this property. For example, if you select Student , providers know to post to the listing as a student housing option on student housing sites. The rental category determines if ILS providers post the property on multiple sites.

 Marketing Name

 The name used on ILS sites to promote your property.

 Listing URL

 The URL of the website on which the property is listed (for example, your property management company's website). This URL displays on ILS sites to provide more exposure to your website.

 Virtual Tour URL

 The URL on which a virtual tour is available so that prospects can see the property from an ILS site.

 Latitude

 The latitude coordinates of your property to specify the exact location of your listing and make GPS directions easier to obtain.

 Longitude

 The longitude coordinates of your property to specify the exact location of your listing and make GPS directions easier to obtain.

 Rental Classification

 A more specific category for the type of rental that describes the type of housing. For example, you can distinguish different kinds of student housing by selecting Apartment , Campus , House for Rent , and so on. This information is used by some ILS providers to match properties with specific rental categories as closely as possible. If you do not specify a classification, one is automatically assigned based on the property type set on the property's details page.

 -
 In the Agent Information section, enter the name and contact information for your primary leasing agent for the property so prospective tenants can contact them with inquiries. You can manually enter a value or select existing Rent Manager fields to import that information from a user account.

 Warning

 To include agent information, the First Name , Last Name , and Email Address fields are required by ILS sites. If left blank, agent information does not display on the ILS site.

 -
 On the Provider Settings tile, check or uncheck the following options:

 Option
 Description

 Override System Preferences

 If unchecked, this property follows the online listing settings established in system preferences. For more information, refer to Online Listings General (System Preferences) .

 If checked, this property ignores the system preference setting and you are prompted to submit your Name , Email , and Phone Number . This information is supplied to different ILS providers in case they need to contact you about your paid listings.

 More Information

 Setting up these provider settings will be covered later in this topic and will establish the system-wide ILS provider settings. The system preference settings apply to all properties and also enable online listings for all properties in your database. If this property has its own unique ILS provider settings, check this option. Otherwise, leave this option unchecked.

 Enable Online Listings

 This option is available only if Override System Preferences is checked.

 Check any ILS providers that you use to market this property specifically. Only providers that are checked can access and post your listings at this property to their sites. Future listings posted from this property follow these settings instead of system preferences.

 -
 Click Save .
The pop-up closes and the advanced marketing settings are updated for this property.

 Step 2: Establish Property Marketing Setups

 After the Advanced Settings pop-up closes, you can enter the property's detailed marketing information. Each of your properties likely has different marketing information, so next, you can customize the marketing settings and data for each property you wish to advertise online.

 Warning

 If you do not see fields for marketing information on the Marketing Setup pop-up, this means the property is still set up for unit-level marketing. To convert to property-level marketing, click Property Marketing Configuration Wizard on the pop-up. For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 If you continue to use unit-level marketing, refer to Unit Marketing Setup (Pop-Up) .

 More Information

 If the property has a Property Type of RV/Campground , the Marketing Setup pop-up includes fields specific to short-term rentals. For more information, refer to STR Property Marketing Setup (Pop-Up) .

 To enter ILS marketing information for each property, do the following:

 -
 On the Marketing Setup pop-up in the Include/Exclude field, determine whether or not to include this property in your ILS feeds. Each option is described below.

 Option
 Description

 Use System Preference

 Your selected system preferences determines whether or not this property is included in your ILS website marketing feeds.

 Related Preferences

 All properties default to the Use System Preference option, which follows your settings in your system preferences for online listings. These system preferences will be enabled at the end of this topic after establishing all property marketing setups. For more information, refer to Online Listings Availability Filters (System Preferences) .

 Always Include

 Include this property in your ILS website marketing feeds, regardless of system preference settings.

 Always Exclude

 Do not include this property in your ILS website marketing feeds. If selected, you do not need to enter marketing information at this time. If you choose to add marketing information for this property later or do not plan to market this property.

 -
 On the Contact Information tile, enter the following information:

 Field
 Description

 Company Info

 The information that displays as the company name in your ILS feeds. To change what displays in this field, click . Each option is described below.

 Custom Entry

 In the Company Name field, enter the name to display on the online listing. In the Company Address section, enter the Street , City , State , and Postal Code to use for the company on your ILS feed.

 Property Management Company Info

 Use the name and default address of the property designated as the management company in system preferences. For more information, refer to Management Company (System Preferences) .

 Property Info

 Use the name and default address of the property as entered on the property's details page.

 Contact Email

 The email address through which prospects can contact you for more information.

 Contact Phone

 The phone number prospects can use to contact the company that is managing the property.

 Company Website

 The website address (URL) of the company managing the property.

 -
 On the Marketing Description tile, write a custom description to be included in your online listing. Alternatively, click to choose a user defined field that contains the description you want to use for the listing. Descriptions have a 1,000-character limit.

 -
 On the Listing Details tile, enter the following information:

 Field
 Description

 Exclude Unit-specific information

 If checked, excludes unit details from the listing feed and use only information provided from the property and floor plans.

 If unchecked, information about the individual units at the property (such as number of bedrooms) is also included in the listing feed and fields for unit-type user defined fields and unit image types in applicable fields are made available

 Unchecking this box does not enable unit-level marketing.

 Price

 The rent amount for the property. Manually enter a value or select a field to pull the information from.

 If the Feed Type is set to Multi Family , the price field cannot be changed and is automatically pulled from the unit floor plans (covered later in these steps).

 Deposit Fee(s)

 The total dollar amount for deposits for the property. Manually enter a value or select a field to pull the information from.

 Lease Terms

 The lease terms that are available at this property. Alternatively, choose Contact For Details if lease terms at the selected property are not determined or must be discussed.

 Property Images

 The property-type images from the property's details page to display in your ILS feed. Click Preview to view the images that will display on the listing based on your selections.

 More Information

 For images to be included in the ILS feed, images must have a valid Image Type and Caption . You can enter this information when you add new images or by adding them to existing images on the property's details page. For more information, refer to Add and Assign an Image Type .

 Unit Images

 The unit-type images from the associated units' details pages to display in your ILS feed.

 This field displays only if the Exclude Unit-specific information option is unchecked or the Feed Type is set to Single Family .

 Availability Date

 The date on which the property is listed as available. If this field is blank, the property lists as available now by default.

 -
 On the Features tile, enter or select the amenities and features the property offers. Each field is described below.

 Field
 Description

 Property Amenities

 The amenities currently assigned to the property in Rent Manager . For more information, refer to Assign Amenities .

 Laundry

 The laundry options available at the property. This list is predefined based on ILS provider options.

 Pets

 The types of pets allowed at the property. This list is predefined based on ILS provider options.

 Included Utilities

 The utilities that are included in the rent payments for the property. This list is predefined based on ILS provider options.

 -
 If the Feed Type is set to Multi Family , on the Floor Plans tile, review the prepopulated floor plans. If any changes are needed, click arrow_forward Details for that floor plan.

 More Information

 By default, a floor plan for each unit type at the property displays. To create additional floor plans for the property, click   Add Item . For more information, refer to Create a Floor Plan .

 The following columns display:

 Column
 Description

 Name

 The name of the floor plan as it displays on the ILS feeds.

 Unit Type

 The unit type(s) at the property assigned to the floor plan. Only unit types that are enabled for this property can be selected.

 Unit Count

 The number of units at the property of the selected unit type(s) in the floor plan.

 Beds

 The number of bedrooms in the units assigned to the floor plan.

 Baths

 The number of bathrooms in the units assigned to the floor plan.

 Price

 The price or price range of the units assigned to the floor plan.

 Images

 The number of images added on the floor plan's details on the Images tile.

 -
 Click Save .
The property's marketing information is updated.

 -
 Repeat for every property in Rent Manager . Properties that you do not plan to market do not need to have all fields filled out and only need the Include/Exclude field set to Always Exclude .

 Step 3: Create Availability Filters

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Availability filters establish the criteria that Rent Manager uses to determine if a unit should be considered available to rent on your ILS feed(s). These system preferences allow you to configure these filters.

 To set these system preferences, do the following:

 -
 Go to arrow_forward    Administration , then go to Preferences arrow_forward System Preferences arrow_forward Online Listings arrow_forward Availability Filters .
The System Preferences: Online Listings - Availability Filters page displays.

 -
 In the Unit Filter Criteria section, enter or select the settings that determine when individual units are considered available and therefore included in ILS feeds.

 Option
 Description

 Vacancy and Unit Status

 Set which date a unit becomes vacant, how many days after that date it is considered available for rent, when they display in the search for ILS feeds, and whether or not units with future leases are excluded. For more information, refer to Online Listings Availability Filters (System Preferences) .

 User Defined Field

 Unit availability is based on a unit-type user defined field (UDF) that is set to a type of Yes/No for the value. Any units with a value of Yes for the selected UDF are included in the ILS feed.

 Follow unit availability profile

 If you use availability profiles for a custom website or Web Template Suite , you can opt to use the filter criteria established in one of those profiles. Units that meet the availability criteria established in the selected unit availability profile in system web preferences are included in the ILS feed. For more information, refer to Availability Profile (System Web Preferences) .

 Warning

 Unit availability profile templates can be used only if they meet the following conditions:

 -
 The Show any available within date range option is not checked.

 -
 The Follow online listings feed option is not selected.

 -
 In the Property Filter Criteria section, enter or select the settings that determine which properties to include in the ILS feed.

 Option
 Description

 Show all properties

 All properties are included in the ILS feed.

 User Defined Field

 Unit availability is based on a property-type user defined field (UDF) that is set to a type of Yes/No for the value. All units at a property with a value of Yes for the selected UDF are included in the ILS feed.

 Follow unit filter criteria

 Properties that have at least one unit that satisfies the Unit Filter Criteria chosen in the previous section are included in the ILS feed.

 -
 Click Save .
The availability filter settings are updated.

 More Information

 If property-level marketing is enabled, Rent Manager first looks at the Property Filter Criteria to determine what properties are available. On the property Marketing Setup pop-up, if the option Exclude Unit-specific information is unchecked, Rent Manager looks at the Unit Filter Criteria to determine available units. If unit-level marketing is enabled, Rent Manager considers only the Unit Filter Criteria .

 Step 4: Enable ILS Marketing

 After all of your properties have their marketing setups established, you can enable Rent Manager for ILS marketing in your system preferences to publish your ILS feeds. To enable ILS Marketing, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Online Listings arrow_forward General .
The System Preferences: Online Listings - General page displays.

 -
 In the Provider Settings section, check the Enable Online Listings field.

 -
 In the Provider Settings field, select each provider to publish your ILS feeds to.

 -
 Click Save .
The Online Listing Disclaimer pop-up displays.

 -
 Read through the disclaimer and enter the name, email address, and phone number of your company's primary contact for property marketing. Then, check I agree to move forward with enabling Online Listings .

 -
 Click OK .
ILS marketing is now enabled in  Rent Manager .

 Next Steps

 You can use the Listings page to review the posting status for any marketing data that was pushed to your ILS providers. The data sync between Rent Manager and ILS sites occurs on a set schedule and therefore, the Listings page may not reflect your most recent changes. To view the status of your online listings, go to   arrow_forward Services arrow_forward Online Listings  arrow_forward Listings . You can click Update Listings Feed at any time to refresh the data. For more information, refer to Marketing Online Listings (Page) .
