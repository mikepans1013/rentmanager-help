# Create and Customize Apply Now Links

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Apply-Now-Links.htm

The Apply Now feature allows prospective tenants to submit an online application and automates the process of receiving rental applications, collecting application fees, and screening prospects. This feature greatly reduces the time it takes to convert viable prospects into rent-paying tenants. Apply Now is part of the Web Portal Suite .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Once you create your application templates for Apply Now , prospects must be directed to the application via a link, which can be posted on your website, emailed, or included with marketing materials. You can use a general link which does not specify a property or unit, or create an advanced link that specifies the property, unit, unit type, and/or database location. Creating advanced links is done by changing certain aspects of the URL, based upon which type of link you wish to create. This topic guides you through the various ways you can customize advanced Apply Now links to suit your needs.

 Link to Apply Now

 A general Apply Now link takes the prospect to the Apply Now page, and requires that the prospect select the location, property, unit, and so on. An advanced Apply Now link allows you to customize what is preselected for the prospect, such as property, unit, or location so they do not have to select it.

 The link formats are displayed in the table below with the Required (red) and Optional (green) link components.

 Link Type
 Link URL

 General

 https:// CompanyCode .twa.rentmanager.com/applynow

 Advanced

 https:// CompanyCode .twa.rentmanager.com/applynow? Field = FieldAnswer

 Apply Now links have three components that you must edit: The CompanyCode , the Field , and FieldAnswer .

 Company Code

 The CompanyCode component of the link must be replaced with your Rent Manager Company Code , located at the top of your Rent Manager Express page. This ensures that when prospects access the Apply Now link, it directs them to your company.

 For example, if your Company Code is abc-123 , your Apply Now link would display as shown below.

 https://abc-123.twa.rentmanager.com/applynow

 Field

 The Field component of the link—paired with FieldAnswer —allows you to automatically direct the prospect to a specific property, unit, unit type, or database location. In the Field component, enter the Link Field version of that Rent Manager field.

 For example, if the field you are specifying is the Property ID , the link would display as shown below.

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyID= FieldAnswer

 The Rent Manager fields that can be specified in the link are provided in the table below.

 Rent Manager Field
 Link Field

 Locations

 locations

 Location ID

 locationID

 Property Name

 propertyname

 Property Short Name

 propertyshortname

 Property ID

 propertyID

 Unit Name

 unitname

 Unit ID

 unitID

 Unit Type Name

 unittypename

 Unit Type ID

 unittypeID

 Warning

 Because unit types are frequently used among multiple properties, the Unit Type Name and Unit Type ID fields must be used in tandem with a field that specifies the property ( Property Name , Property Short Name , or Property ID ). For more information, refer to Add Multiple Link Fields .

 More information on the customization for each of these fields is provided in the headings below.

 Field Answer

 The FieldAnswer component of the link—paired with Field —allows you to automatically direct the prospect to a specific property, unit, unit type, or database location. The FieldAnswer component specifies the entity for the associated Field .

 For example, if the Field is Property Short Name , the FieldAnswer component must be replaced with the exact Short Name of the property specified on the property's details page in Rent Manager . If the Short Name of the property is RIVER , the link for this example would display as shown below:

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyshortname=RIVER

 More Information

 If the field answer contains a space in Rent Manager , you need to replace the space with %20 for Apply Now to recognize it. For example, a Property Name of Riverview Apartments needs to display as Riverview%20Apartments . The link for this example would display as follows:

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyname=Riverview%20Apartments

 Link Field Descriptions

 The field(s) you specify in the Apply Now link automatically make that selection for the prospect when they click on it. This helps prevent confusion or mistakes when the prospect goes to submit their application.

 For instance, if your Rent Manager database has multiple properties and you provide a prospect with the general Apply Now link, the prospect must select the correct property from the drop-down list. By providing them with an advanced link that specifies the property for them, the prospect does not have to select a property, since the link has done this for them.

 Each of the available link field customizations is described in the headings below.

 More Information

 If no location is specified in the URL via the Locations or Location ID fields, the Apply Now page displays the Location field drop-down with the default location automatically selected. For more information, refer to Manage Locations (Pop-Up) .

 Location ID

 For linking to a specific Rent Manager database location, use the Location ID field. The Location drop-down field displays with the specified location selected by default.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? locationID = NameOfLocation

 Field

 The locationID field pulls the name of the location, as specified on the Manage Locations pop-up in the Name column.

 Field Answer

 Replace the component NameOfLocation with the exact name entered in the location's Name column. If the name contains a space, the space must be replaced with %20 for Apply Now to recognize the space in the URL.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?locationID=Silvers%20Mgmt

 Locations

 For linking to multiple specific Rent Manager database locations, use the Locations field. The Location drop-down field on the Apply Now page displays only the specified locations for the prospect to choose from. For example, if your Rent Manager database has four locations, but you only want the prospect to be able to select between two of them, you can list those two locations with this field.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? locations = NameOfLocation1 , NameOfLocation2 , NameOfLocation3

 Field

 The locations field pulls the names of the locations, as specified on the Manage Locations pop-up in the Name column.

 Field Answer

 Replace the component NameOfLocation1 with the exact name entered in the location's Name column for the first location to include. Each additional location should separated by a comma (no spaces) after.

 If the name contains a space, the space must be replaced with %20 for Apply Now to recognize the space in the URL.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?locations=PMC,Silvers%20Mgmt,White%20Oak

 More Information

 Alternatively, you can use the Locations field with only a single location to suppress the Location field from displaying on the Apply Now page. This preselects the location for the prospect when they click the link and they cannot change the location. For example, the link below would send the prospect directly to an application for properties only on the Silvers Mgmt location.

 https:// CompanyCode .twa.rentmanager.com/applynow?locations=Silvers%20Mgmt

 Property Name

 For linking to a specific property's application using the full name of the property, use the Property Name field. The Property drop-down field on the Apply Now page automatically selects the specified property.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? propertyname = FullNameOfProperty

 Field

 The propertyname field pulls the full name of the property, as specified on the property's details page in the Full Name field.

 Field Answer

 Replace the component FullNameOfProperty with the exact name entered in the property's Full Name field. If the full name contains a space, the space must be replaced with %20 for Apply Now to recognize the space in the URL.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyname=Riverview%20Apartments

 Property Short Name

 For linking to a specific property's application using the abbreviated name of the property, use the Property Short Name field. The Property drop-down field on the Apply Now page automatically selects the specified property.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? propertyshortname = ShortNameOfProperty

 Field

 The propertyshortname field pulls the abbreviated name of the property, as specified on the property's details page in the Short Name field.

 Field Answer

 Replace the component ShortNameOfProperty with the exact name entered in the property's Short Name field.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyshortname=RIVER

 Property ID

 For linking to a specific property's application using the system-generated ID of the property, use the Property ID field. The Property drop-down field on the Apply Now page automatically selects the specified property.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? propertyID = ID#OfProperty

 Field

 The propertyID field pulls the system-generated ID number of the property. To obtain a property's ID number, you can open a letter template and run the following script:

 [Property().PropertyID]

 For more information, refer to Property Class (Script) .

 Field Answer

 Replace the component ID#OfProperty with the exact number provided by the [Property().PropertyID] script.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?propertyID=12

 Unit Name

 For linking to a specific unit's application using the name of the unit, use the Unit Name field. If this is the only unit in the selected location with this exact name, the Property and Unit Type drop-down fields do not display on the prospect's application because the unit was already preselected for them in the URL link.

 More Information

 If there are units of the same name at multiple properties, it is recommended that you also specify the property in the link, or use the Unit ID field instead to ensure that the prospect is applying to the unit at the correct property.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? unitname = NameOfUnit

 Field

 The unitname field pulls the name of the unit, as specified on the unit's details page in the Name field.

 Field Answer

 Replace the component NameOfUnit with the exact name entered in the unit's Name field. If the name contains a space, the space must be replaced with %20 for Apply Now to recognize the space in the URL.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?unitname=10A

 Unit ID

 For linking to a specific unit's application using the system-generated ID of the unit, use the Unit ID field. The Property and Unit Type drop-down fields do not display on the prospect's application because the unit was already preselected for them in the URL link.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? unitID = ID#OfUnit

 Field

 The unitID field pulls the system-generated ID number of the unit. To obtain a unit's ID number, you can open a letter template and run the following script:

 [Unit().UnitID]

 For more information, refer to Unit Class (Script) .

 Field Answer

 Replace the component ID#OfUnit with the exact number provided by the [Unit().UnitID] script.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?unitID=452

 Add Multiple Link Fields

 There may be situations where you need to specify multiple fields in an Apply Now link. To specify multiple fields in the link URL, use the following format:

 https:// CompanyCode .twa.rentmanager.com/applynow? Field = FieldAnswer & Field = FieldAnswer

 The first field must be preceded by a question mark ( ? ). You can add further additional fields as needed by adding a preceding ampersand ( & ) at the start of each Field .

 This is useful for situations such as sending the Apply Now link to a prospect to apply to a specific unit at a property. You can customize the link to contain a field for the property and a field for the unit. This is particularly useful for situations where you have multiple units of the same name at various properties.

 For example, you need to send an Apply Now link to a prospect that specifies both the location and unit by using the Property Short Name and Unit Name link fields for the Rent Manager location named Silvers Mgmt . If the Rent Manager Company Code is abc-123 , the property's Short Name is RIVER and the unit's Name is 101 , the link URL displays as shown below.

 https://abc-123.twa.rentmanager.com/applynow?locations=Silvers%20Mgmt&propertyshortname=RIVER&unitname=101

 Additionally, there are some link fields ( Unit Type Name and Unit Type ID ) that must be used in tandem with other specifying fields, such as Property Name , Property Short Name, or Property ID .

 Unit Type Name

 For linking to an application for a specific unit type at a specific property using the name of the unit type, use the Unit Type Name field and either the Property Name , Property Short Name, or Property ID field. The Property and Unit Type drop-down fields do not display on the prospect's application because the they were already preselected for them in the URL link.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? unittypename = NameOfUnitType & PropertyField = PropertyFieldAnswer

 Field

 The unittypename field pulls the name of the unit type, as specified on the unit type's details page in the Unit Type field.

 Field Answer

 Replace the component NameOfUnitType with the exact name entered in the unit type's Unit Type field. If the name contains a space, the space must be replaced with %20 for Apply Now to recognize the space in the URL.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?unittypename=2%20Bed/1%20Bath&propertyID=10

 Unit Type ID

 For linking to an application for a specific unit type at a specific property using the system-generated ID of the unit type, use the Unit Type ID field and either the Property Name , Property Short Name, or Property ID field. The Property and Unit Type drop-down fields do not display on the prospect's application because the they were already preselected for them in the URL link.

 The URL, the Rent Manager field it pulls from, and an example are shown below.

 Link Information
 Description

 URL Formula

 https:// CompanyCode .twa.rentmanager.com/applynow? unittypeID = ID#OfUnitType & PropertyField = PropertyFieldAnswer

 Field

 The unittypeID field pulls the system-generated ID number of the unit type. To obtain a unit type's ID number, you can open a letter template and run the following script:

 [Unit().UnitType.UnitTypeID]

 For more information, refer to Unit Type Class (Script) .

 Field Answer

 Replace the component ID#OfUnitType with the exact number provided by the [Unit().UnitType.UnitTypeID] script.

 Example

 https:// CompanyCode .twa.rentmanager.com/applynow?unittypeID=5&propertyshortname=RIVER
