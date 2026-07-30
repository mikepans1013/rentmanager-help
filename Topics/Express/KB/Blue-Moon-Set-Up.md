# Set Up Blue Moon

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Blue-Moon-Set-Up.htm

Blue Moon is a software that provides industry-standard leasing documents that are compliant with your state and/or industry association (e.g., NAA, TAA, GAA, AANC). Blue Moon can be integrated with Rent Manager to export your tenant and prospect information directly into Blue Moon leasing documents. Your contract with Blue Moon determines which leasing documents are available for you to generate. You can then send these leases electronically for tenants or prospects to sign.

 More Information

 This integration requires you to have a membership with the National Apartment Association (NAA), which must be purchased separately from the NAA. For more information, visit their website at naahq.org .

 Warning

 Blue Moon leasing forms are intended to be used only by multi-family housing. Other types of housing such as single-family homes or commercial complexes may not be compatible.

 Step 1: Create a Blue Moon Account

 In order to use Blue Moon , you must obtain a license from the National Apartment Association (NAA). When you join NAA and obtain the necessary license(s), you then have access to Blue Moon , and they provide you with the necessary information you need to set up your Blue Moon integration in Rent Manager . This information includes your login credentials, the property IDs, and serial numbers for each property.

 The headings below provide more information about what you need from Blue Moon .

 Account Information

 Your Blue Moon account information includes your login credentials for your account. The following account information from Blue Moon is required for Rent Manager integration:

 Information
 Description

 Default Serial Number

 The serial number of your primary administrative Blue Moon account. In your Blue Moon portal on the Settings tab, this is labeled as the Account ID .

 Password

 The password for your primary administrative Blue Moon account provided by Blue Moon .

 Username

 Your primary administrative Blue Moon account's username provided by Blue Moon .

 Property ID

 The identification number provided by Blue Moon for each of your properties. This may be listed as the Property Number in your Blue Moon portal.

 Per your contract with Blue Moon , this value identifies the leasing documents specific to the property for generating lease documents with Rent Manager data. This property ID number is stored in a property-type user-defined field (UDF) that you create.

 Serial Number

 The license provided by Blue Moon for each of your properties. Multiple properties can share a single license from the NAA if the properties have 49 or fewer units. Any property with 50 or more units must have its own license (which is labeled as the Account ID in the Blue Moon portal's Settings tab).

 Per your contract with Blue Moon , this value identifies that leasing documents that are required for your state and/or industry association. This serial number is stored in a property-type user-defined field (UDF) that you create.

 Step 2: Create Contact Types

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Contact Types
 Add, View

 For more information, refer to Control User Access .

 Contact types in Rent Manager allow you to create your own categories for organizing your tenant and prospect contacts (e.g., roommate, spouse, co-signer, and so on). Blue Moon leasing documents distinguish between residents (lease signees) and occupants (people in the rental unit but not on the lease). As part of your setup for Blue Moon , you must identify which of your contact types can be designated as residents and which can be designated as occupants.

 For example, you can create a contact type called BM Occupant which you can then assign to tenants or prospects who are living in the unit but do not sign off on the Blue Moon lease.

 To create a new contact type, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Tenants/Prospects arrow_forward Contact Types .
The Contact Types page displays.

 -
 Click Add Contact Type .
The Contact Type Add pop-up displays.

 -
 Enter or select the following information:

 Field
 Description

 Description

 Additional notes or context regarding the use of this contact type, such as Tenant contacts who are living in a unit but are not on the lease (to be used for Blue Moon ) .

 Name

 A unique name to identify this category of contact in Rent Manager (e.g., BM Occupant , BM Resident ).

 Type

 The option Tenant/Prospect must be selected to use this contact type for Blue Moon leases.

 -
 Click Save .
The contact type is created.

 Step 3: Create Property User-Defined Fields

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 The property ID and serial number are values in Blue Moon that identify which leasing documents you can generate per your Blue Moon contract. The property ID determines which leasing documents are available per property, while the serial number determines which leasing documents are required for your state and/or industry. Both of these values are stored in user-defined fields (UDFs) in Rent Manager that you create.

 To create your property UDFs for Blue Moon , do the following:

 -
 Go to arrow_forward Administration , then go to Customization arrow_forward User Defined Fields .
The User Defined Fields page displays.

 -
 Click Add UDF .
The Add User Defined Field pop-up displays.

 -
 Enter information into the available fields:

 Field
 Description

 Default Value

 You do not need to establish a default value on the UDF level, as these defaults will be set up in system preferences in the next step.

 Field Name

 A unique name to identify the purpose of this UDF, such as Blue Moon Property ID or Blue Moon Serial Number .

 Field Type

 It is recommended that the option Text is selected.

 Required

 If checked, a value must be entered for this UDF when creating a new property.

 Type

 The option Property must be selected.

 -
 Click Save & New to create the UDF and leave the pop-up open.

 -
 Repeat these steps to create the second UDF for Blue Moon , ensuring you have a property-level UDF for the Blue Moon serial number and a separate property-level UDF for the Blue Moon property ID. Then click Save & Close .
The Blue Moon property UDFs are created.

 Step 4: Establish General System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 In order to activate Blue Moon in Rent Manager , you first need to set up your system preferences to enable and configure the integration. This includes entering your Blue Moon account information and determining Blue Moon residents and occupants. For more information, refer to Blue Moon General (System Preferences) .

 To enable Blue Moon and configure residents and occupants, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Blue Moon arrow_forward General .

 -
 In the General tile, enter the following information:

 Field
 Description

 Default Serial Number

 The Blue Moon serial number (or Account ID as it is called in Blue Moon ) of your primary administrative Blue Moon account.

 Password

 The password for your Blue Moon account provided by Blue Moon .

 PropertyID

 The UDF to use to store each property's Blue Moon property ID (or Property Number as it is called in Blue Moon ).

 Serial Number UDF

 The UDF to use to store a property's Blue Moon serial number (or Account ID as it is called in Blue Moon ).

 Username

 Your Blue Moon account username provided by Blue Moon .

 More Information

 It is recommended that you use an account with administrative access for your Rent Manager integration, or whichever Blue Moon account has the most access to properties.

 The credentials entered in system preferences grant you access only to properties included on that Blue Moon account. For any properties that use a different account, you must enter the Username and Password for that property's Blue Moon account on the property level. From the property's details page, click arrow_forward Blue Moon Credentials . For more information, refer to Property Details (Page) .

 -
 Click Test Connection to ensure that your credentials and account are working correctly.

 -
 In the Specify Residents and Occupants for Blue Moon tile, assign any contact types you wish to use for Blue Moon leases as an Occupant Contact Type and/or a Resident Contact Type by checking the box in the according column.

 More Information

 Tenant and prospect data can be exported to Blue Moon only if the tenant/prospect contacts are assigned a contact type assigned as resident or occupant in this tile. If a contact type is assigned as both, you can determine which role a contact of that type fits per lease. If a contact type is assigned as neither, a contact of that type cannot be added to Blue Moon leases.

 -
 To set contacts with Show on Statement checked as residents on a Blue Moon lease, check Include people marked as 'Show on Statement as other residents on the lease .

 -
 In the Settings tile, you can choose to enable or disable the following options:

 Option
 Description

 Allow Other Lease Forms

 If checked, all industry standard forms available from your Blue Moon license can be generated for your tenants and prospects.

 Hide fields that are locked in Blue Moon

 If checked, any fields that are locked in your Blue Moon portal are hidden in Rent Manager when exporting Blue Moon leases.

 If unchecked, the fields display in Rent Manager with (Locked) appended after the field name.

 -
 Click Save .
 Blue Moon is enabled and the contact types are configured as residents or occupants.

 Step 5: Assign Property IDs and Serial Numbers

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To finish setting up your properties for Blue Moon , you must assign your properties to their according serial numbers and property IDs. To assign this information, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property.
The property's details page displays.

 -
 In the UDFs tile header, click .
The User Defined Fields pop-up displays.

 -
 For the UDFs you created for Blue Moon , enter the following information:

 Field
 Description

 Property ID

 In the UDF you created to hold the property ID, enter the Property Number assigned in Blue Moon for this property.

 Serial Number

 In the UDF you created to hold the serial number, enter the serial number (also known as the Blue Moon Account ID ) of the Blue Moon account associated with this property.

 - Click Save .
The property's UDF values are updated for Blue Moon .

 - Repeat for all properties necessary.

 Step 6: Map Data to Blue Moon Document Fields

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Blue Moon allows you to set default values for your Blue Moon data fields that remain consistent for all tenants. Any default values established in Blue Moon automatically pull into Rent Manager . For each Blue Moon field that may vary per tenant, you need to ensure there is a user-defined field in Rent Manager for that information. Before generating Blue Moon leasing documents, you must map all Blue Moon data fields to a Rent Manager field, charge type, or user-defined field (UDF).

 To map your Blue Moon data fields, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Blue Moon arrow_forward Form & Field Setup .

 -
 In the Lease Forms section, locate the form you wish to map fields for and click Map Form Fields .
The Map Form Fields pop-up displays with the form you selected opened by default.

 -
 In the list on the left, select the Blue Moon data field you wish to map.

 -
 In the Prospect Mapping and Tenant Mapping sections, select what type of data this Blue Moon data field should pull values from for both prospects and tenants respectively.

 Option
 Description

 Rent Manager Field

 A standard field provided by default in Rent Manager .

 User Defined Field

 A custom, user-created field used to track information that Rent Manager does not track by default.

 Charge Type

 Charge types that track transactions in Rent Manager , such as rent, late fees, repairs, and so on. This option displays only if the Blue Moon field type is for currency or text.

 -
 In the Prospect Mapping and Tenant Mapping sections, enter or select information in the available fields to determine where Blue Moon pulls data from  Rent Manager for prospects and tenants respectively.

 Option
 Description

 Source

 If Rent Manager Field is selected, choose the entity associated with the field you wish to map. Then in the associated Rent Manager Field drop-down, select the Rent Manager field to link to the selected Blue Moon data field.

 For example, if you are mapping to the Blue Moon field Date of Lease and select Tenant as a source and the Rent Manager field Start Date , then the date in the tenant's lease Start Date field populates in the Date of Lease field on the Blue Moon document.

 If you select Contact as the source, the Handling field displays and you must designate which Blue Moon resident or occupant on the lease this information pulls from.

 UDF Source

 If User Defined Field is selected, choose the entity associated with the UDF you wish to map. Then in the associated UDF field, select the user-defined field to link to the selected Blue Moon data field.

 For example, if you are mapping to the Blue Moon field Special Stipulations and select Property as a source and a property-level UDF named Special Considerations , then the value in that UDF for the tenant's property populates in the Special Stipulations field on the Blue Moon document.

 If you select Contact as the source, the Handling field displays and you must designate which Blue Moon resident or occupant on the lease this information pulls from.

 More Information

 If there is not an existing UDF that meets your needs for the Blue Moon data field, click Add User Defined Field in the drop-down to create the UDF without leaving the page. When creating UDFs for Blue Moon data, it is recommended that you always use the Field Type of Text , as this type works consistently with all Blue Moon lease fields.

 Additionally, if you need to create a prospect-type UDF, you must first create it as a tenant-type UDF. Then create the UDF again as a prospect-type UDF, check the Link to Tenant Field option, and select the matching tenant-type version of the UDF. Then check Keep Synchronized . This allows your Blue Moon data fields to automatically update when prospects are converted to tenants. For more information, refer to Add a User Defined Field .

 Charge Type

 If Charge Type is selected, include each charge type to calculate the total dollar amount of all the tenant's or prospect's recurring charges of the selected charge types. This includes any recurring charges on the property, unit, or unit type that are inherited by the tenant/prospect. Only recurring charges that are active as of the lease's start date are included in the total. The Blue Moon field will populate the total of those recurring charges.

 For example, say you have a tenant whose lease starts on 2/1/ 26 . They have a tenant-level recurring charge for $1200 with charge type RC for rent, and their associated unit has a unit-level recurring charge of $50 with the charge type GARAGE for the garage. If you map to the Blue Moon field Rent Concession Addendum Total Amount and select the charge types GARAGE and RC , if both these recurring charges begin on or before 2/1/ 26 , then $1,250.00 populates in that field on the Blue Moon document.

 More Information

 If you map a Rent Manager field or UDF with a source from Property , Contact , Unit , or Pet , you can quickly copy that information from the tenant mapping to the prospect mapping or vice versa. For example, if in the Prospect Mapping section you map the field to a property's full address and the tenant's mapping should be identical, you can click   Copy from Prospect Mapping to quickly pull that mapping to the Tenant Mapping section.

 -
 Click Save .
The field mapping is updated for this field across all Blue Moon forms.

 -
 Repeat these steps for all the Blue Moon fields you need to map on all forms that you use.
To quickly locate and map fields that are frequently used in most Blue Moon forms, check Show commonly used fields . To quickly locate and map fields that have not yet been mapped, check Hide mapped fields .

 More Information

 By default, the Blue Moon field for Rent is mapped to the unit's market rent, while the Security Deposit field is mapped to the tenant's or prospect's held security deposit. If you wish to change the mapping for either of these fields to other Rent Manager data, you can do so by clicking Edit Calculated Fields . For more information, refer to Blue Moon Form & Fields Setup (System Preferences) .

 -
 After you have mapped all your needed fields, click Save & Close to save your changes and close the pop-up.

 Next Steps

 Now that you have set up Blue Moon , you can configure your tenants and prospects and send them leasing documents.

 Action
 Description

 Assign Contact Types

 For your tenant and prospect accounts, you can now assign them to the contact types you configured to be compatible with Blue Moon . This determines if those contacts can be added as a resident or occupant when generating a Blue Moon leasing document. For more information, refer to Prospect Contacts (Pop-Up) and Tenant Contacts (Pop-Up) .

 Generate Blue Moon Lease Documents

 You can now create a Blue Moon lease or generate other Blue Moon leasing documents directly from Rent Manager for your tenants and prospects. For more information, refer to Publish a Blue Moon Lease and Publish Other Blue Moon Lease Forms .

 Track Blue Moon eSignatures

 You can track the progress of your Blue Moon lease forms that have requested an eSignature. From the Blue Moon eSignatures page you can also view, resend, or delete existing Blue Moon lease documents with pending eSignature requests. For more information, refer to Blue Moon eSignatures (Page) .
