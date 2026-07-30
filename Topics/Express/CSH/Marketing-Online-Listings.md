# Marketing Online Listings (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Marketing-Online-Listings.htm

You can use the Listings page to review the posting status for any marketing data that was pushed to your internet listing services (ILS) providers. The data sync between Rent Manager and ILS sites occurs on a set schedule and therefore, the Listings page may not reflect your most recent changes. You can click Update Listings Feed at any time to refresh the data.

 Warning

 Unit marketing configurations are a legacy way of marketing to ILS sites. Now, most ILS sites don't accept marketing data for individual units and instead prefer a property marketing configuration. To easily convert from a unit configuration to a property configuration, you can use the Property Marketing Configuration Wizard . Once you convert to a property configuration, it cannot be reversed. For more information, refer to Marketing Configuration Wizard (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View

 Properties
 View

 For more information, refer to Control User Access .

 To view the status of your online listings, go to arrow_forward Services arrow_forward Online Listings arrow_forward Listings .

 Warning

 The ILS marketing integration is available in Rent Manager at no charge, but some ILS providers may require a paid account before your listings can be posted.

 Filter Options

 The following filtering options are available on this page:

 Option
 Descriptions

 Search

 You can type in the Search field to narrow the list to match your search criteria.

 Property

 Select each property for which to display listings. Alternatively, select <All Properties> to display all listings.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Hide Listings Without Errors

 Check to display only listings with a in the Error column. Otherwise, the page displays all listings regardless of error status.

 Review Online Listings

 The following columns are available to review the status of your listings. Optional columns can be added to the page by clicking .

 Default Column
 Description

 Property

 The name of the property associated with the listing.

 Unit/
Floor Plan

 For multi family feed type properties, the name of the floor plan associated with the listing displays. This is blank for Single Family feed type properties.

 If, in the property's Marketing Setup pop-up, Exclude unit-specific information is unchecked, the name of the unit associated with the listing displays instead.

 More Information

 If leaving Exclude unit-specific information unchecked shows fewer units from your listing than you expected to display, check you availability filters to see what units are included in listings.

 Unit Type

 For Multi Family feed type properties, the unit type associated with the floor plan of the listing.

 If, in the property's Marketing Setup pop-up, Exclude unit-specific information is unchecked, the name of the unit type associated with the listing displays instead.

 More Information

 If leaving Exclude unit-specific information unchecked shows fewer units from your listing than you expected to display, check you availability filters to see what units are included in listings.

 Price

 The total dollar amount of the listing's rent as entered in the property Marketing Setup pop-up in the Listing Details section.

 More Information

 For properties that have a Multi Family feed type, you can set the Price field to Unit Field: Market Rent , which uses the Market Rent value entered in the property's Marketing Setup pop-up in the Floor Plans section. If the units associated with that floor plan have different prices established on their Unit details pages in the Current Market Rent section, the Price column displays a price range from lowest to highest.

 For example, if the floor plan includes units with market rents of $950 , $1160 , and $1250 , the price displays as 950.00 - 1250.00 .

 For more information, refer to Create a Floor Plan .

 Errors

 Displays if posting errors occurred while Rent Manager attempted to generate the daily feed listings. Click to display the entire list of errors in a pop-up.

 Available Column
 Description

 Contact Email

 The primary contact's email address for the listing, as entered in the property or unit Marketing Setup pop-up in the Contact Information section.

 Contact Phone

 The primary contact's phone number for the listing, as entered in the property or unit Marketing Setup pop-up in the Contact Information section.

 Listing Type

 Displays either Single Family or Multi Family based on what is selected in the property's Marketing Setup pop-up in the Advanced pop-up for Feed Type .

 Property Address

 The full address checked as Default on the associated property's details page in the Primary Address section.

 Property Short Name

 The property's Short Name as entered on the associated property's details page.

 Unit Address

 The full address checked as Default on the associated unit's details page in the Primary Address section.

 Values display in this column only if unit marketing is still enabled for the property, or if, in the property's Marketing Setup pop-up, Exclude unit-specific information is unchecked.

 Review Listing Errors

 To understand why your listing did not post correctly, click in the Errors column. The Listing Errors pop-up is divided into two sections: Rent Manager Errors and Trulia/Zillow Errors . Click to expand each section and view what errors are preventing the property or unit listing from posting.

 Currently, the only ILS provider error messages that generate in the Listings Errors pop-up are for Trulia/Zilllow. If you are posting your feed to other ILS providers and receive an error, contact the provider directly for answers to why the listing did not post. The following sections describe the Rent Manager errors and Trulia/Zillow errors that can be reviewed.

 Rent Manager Errors

 Errors in this section display when there is information missing or entered incorrectly in Rent Manager . The following table describes errors that may affect the information entered in your database. All the fields are located in the property Marketing Setup pop-up unless otherwise specified.

 Error Name
 Solution

 Company Info is missing or blank

 In the Contact Information section, the Company Info field is required and cannot be blank.

 If using a mapped field, make sure the corresponding fields are filled out as listed below.

 -
 For Property Info , on the property's details page, the Full Name and Default address.

 -
 For Property Management Company Info , on the details page of the property established as the management company in the Management Company section of system preferences, the Full Name and Default address.

 Company Address is missing or blank

 In the Contact Information section, the address entered in Company Info field is required and cannot be blank.

 The error specifies what part of the address is missing. If the city is not entered in the address, the error message states it is the company city that is missing or blank.

 If using a mapped field, make sure the corresponding fields are filled out as listed below.

 -
 For Property Info , on the property's details page, the Default address.

 -
 For Property Management Company Info , on the details page of the property established as the management company in the Management Company section of system preferences, the Default address.

 Address format is invalid

 In the Contact Information section, a mapped field is selected in the Company Info field, but the associated property has an invalid address. To resolve this error, ensure all fields in the locations listed below are entered correctly for the associated property's Default address.

 -
 For Property Info , on the property's details page, click in the Addresses section.

 -
 For Property Management Company Info , on the details page for the property established as the management company in the Management Company section of system preferences, click in the Addresses section.

 Contact Phone must be a valid numeric phone number in the format: 555-555-5555

 In the Contact Information section, the phone number entered or selected in the Contact Phone field is not entered in the xxx-xxx-xxxx format. To resolve this error, you must update the phone number to the correct format. For example, if a phone number is entered as (800) 555-1234 or 8005551234 , you must change it to 800-555-1234 .

 If using a mapped field, make sure the corresponding fields are formatted correctly as listed below.

 -
 For Property Phone , on the property's details page, the Default phone number.

 -
 For Property Management Company Phone , on the details page of the property established as the management company in the Management Company section of system preferences, the Default phone number.

 -
 For any Property UDF , in the property's UDFS section, the selected UDF.

 Company Website does not contain a valid URL

 In the Contact Information section, the URL entered or selected in the Company Website field is not a valid web address. To resolve this error, you must update the URL to the correct, active website URL.

 If using a mapped field, make sure the URL is valid in the property's UDFS section.

 Marketing Description is missing or blank

 In the Marketing Description section, the text box cannot be blank.

 If using a mapped field, make sure the UDF has a value entered in the property's UDFS section.

 Price is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Single Family , in the Listing Details section, the Price field cannot be blank.

 If using a mapped field, make sure the corresponding fields are filled out:

 -
 For Market Rent , in each unit's Current Market Rent section, the Amount column.

 -
 For any Property UDF , in the property's UDFS section, the selected UDF.

 -
 For any Unit UDF , in each unit's UDFS section, the selected UDF.

 Price must be a number

 If the Feed Type on the Marketing Setup page is set to Single Family , in the Listing Details section, the Price field must be a numeric value. This issue can occur if the selected UDF has a Field Type that is not Numeric , and the field for the property/unit has a non-numeric entry.

 To resolve this error, you must update the field to a numeric entry. For example, if a price is entered as 1 thousand or $1,000 for the selected UDF, you must change it to 1000 . Update the selected UDF field in the according location as described below.

 -
 For any Property UDF , in the property's UDFS section, the selected UDF.

 -
 For any Unit UDF , in the unit's UDFS section, the selected UDF.

 Deposit Fee(s) must be a number

 In the Listing Details section, the Deposit Fees field must be a numeric value. This issue can occur if the selected UDF has a Field Type that is not Numeric , and the field for the property/unit has a non-numeric entry.

 To resolve this error, you must update the field a numeric entry. For example, if a price is entered as 2 hundred or $200 for the selected UDF, you must change it to 200 . Update the selected UDF field in the according location as described below.

 -
 For any Property UDF , in the property's UDFS section, the selected UDF.

 -
 For any Unit UDF , in the unit's UDFS section, the selected UDF.

 Property Images is missing or blank

 The Property Images field is required and cannot be blank. Use the drop-down to ensure at least one property image type is selected.

 Property Images: no images found for the assigned image types

 This error displays if the image types selected in the Property Images field do not have corresponding images in the property's Images section.

 Unit Images no images found for the assigned image types

 This error displays if the image types selected in the Unit Images field do not have corresponding images in a unit's Images section.

 This error is applicable only if unit-level marketing is still enabled for the property or if, on the property's Marketing Setup pop-up, the Exclude unit-specific information option is unchecked.

 Bedrooms is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Single Family , on the associated unit's details page, the Bedrooms field is required and cannot be blank.

 Bedrooms: Number of Bedrooms for this unit does not match # of Bedrooms for the Floorplan

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , this error displays if the Bedrooms field set within the Floor Plans section and the Bedrooms field set on the unit type details page do not match. They must be set to the same value for the listing to post.

 Bathrooms is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Single Family , on the associated unit details page, the Bathrooms field is required and cannot be blank.

 Bathrooms: Number of Bathrooms for this unit does not match # of Bedrooms for the Floorplan

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , this error displays if the Bathrooms field set within the Floor Plans section and the Bathrooms field set on the unit type details page do not match. They must be set to the same value for the listing to post.

 Property Address is missing or blank

 This error displays if, on the property's details page, no address is listed. A default address must be listed in the Address section for the listing to post. To fix this error, go to the property's details page and, in the Address section, click to update the format of the address.

 Address format is invalid

 This error displays if, on the property's details page, the address listed is invalid. To fix this error, go to the property's details page and, in the Address section, click to update the format of the address.

 Square Footage is missing or blank

 On each associated unit's details page, the Square Footage field is required and cannot be blank.

 Floor Plan Price is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , in the Floor Plans section, the Price column cannot be blank.

 If the floor plan is using the mapped entry Market Rent , an amount must be entered in the Current Market Rent section of each unit associated with the floor plan. To update the market rent for multiple units at once, you can use the Modify Market Rent tool. For more information, refer to Modify Market Rent .

 Floor Plan Price must be a number

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , this error displays if, in the Floor Plans section, the value entered in Price field is not a numerical value. If using a mapped field, for example, make sure the corresponding field is formatted correctly.

 Floor Plan Bedrooms is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , in the Floor Plans section, the Bedrooms field is required and cannot be blank. If using the mapped field Unit Type Field: Bedrooms , make sure the corresponding information is entered on the unit type's details page.

 Floor plan Bathrooms is missing or blank

 If the Feed Type in the Marketing Setup pop-up is set to Multi Family , in the Floor Plans section, the Bathrooms field is required and cannot be blank. If using the mapped field Unit Type Field: Bathrooms , make sure the corresponding information is entered on the unit type's details page.

 Feed Type is missing or blank

 The Feed Type field in the Advanced Settings pop-up is required and cannot be blank. To update this information, in the Marketing Setup pop-up, click Advanced and select the feed type for the property.

 Property Type is missing or blank

 The marketing Property Type field within the Advanced Settings pop-up is required and cannot be blank. To update this information, in the Marketing Setup pop-up, click Advanced .

 If using the mapped field Field: Property Type , on the property's details page, make sure a Property Type is selected.

 Listing URL does not contain a valid URL

 This error displays if the URL entered in the Listing URL field within the Advanced Settings pop-up is not a valid web address. To update this information, in the property's Marketing Setup pop-up, click Advanced and update the URL to the correct, active website URL for the online listing.

 If using a mapped entry, make sure the URL is valid in the property's UDFS section.

 Virtual Tour URL does not contain a valid URL

 This error displays if the URL entered in the Virtual Tour URL field within the Advanced Settings pop-up is not a valid web address. To update this information, in the property Marketing Setup pop-up, click Advanced and update the URL to the correct, active website URL for the virtual tour.

 If using a custom entry, manually enter the URL. If using a mapped entry, make sure the URL is valid in the property's UDFS section.

 Latitude Coordinate is missing or blank

 The Latitude field within the Advanced Settings pop-up is required and cannot be blank. To update this information, on the property Marketing Setup page, click Advanced .

 If using a mapped entry, make sure the URL is valid in the property's UDFS section.

 Longitude Coordinate is missing or blank

 The Longitude field within the Advanced Settings pop-up is required and cannot be blank. To update this information, on the property's Marketing Setup page, click Advanced .

 If using a mapped entry, make sure the value is valid in the property's UDFS section.

 Agent Phone Number must be a valid numeric phone number in the format: 555-555-5555

 This error displays if the agent's phone number entered in the Phone Number field within the Advanced Settings pop-up is not in the xxx-xxx-xxxx format. To resolve this error, on the property's Marketing Setup page, click Advanced and update the phone number to the correct format. For example, if a phone number is entered as (800) 555-1234 or 8005551234 , you must change it to 800-555-1234 .

 If using a mapped entry, make sure the format is updated in the property's UDFS section.

 Contact Email is missing or blank

 In the Contact Information section, the email address entered or selected in the Contact Email field is required and cannot be left blank. If using a mapped field, make sure the corresponding fields are formatted correctly as listed below.

 -
 For Property Email , on the property's details page, the Email Address .

 -
 For Property Management Company Phone , on the details page of the property established as the management company in the Management Company section of system preferences, the Email Address .

 -
 For any Property UDF , in the property's UDFS section, the selected UDF.

 Trulia/Zillow Errors

 Errors in this section display when there is information missing or entered incorrectly according to Zillow's formatting and requirements. For more information on what an error message from Zillow means, contact Zillow directly.
