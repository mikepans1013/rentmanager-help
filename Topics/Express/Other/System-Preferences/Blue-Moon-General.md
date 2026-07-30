# Blue Moon General (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Blue-Moon-General.htm

Blue Moon software, which provides industry-standard leasing documents compliant with your state and/or industry association (e.g., NAA, TAA, GAA, AANC), can be integrated with Rent Manager to export your tenant and prospect information directly into Blue Moon leasing document(s). These system preferences allow you to enter your Blue Moon account information and assign the user-defined fields (UDFs) to use for identifying leasing documents to use at each property.

 More Information

 In order to use Blue Moon to generate leasing documents and create leases, you must first purchase a license(s) from the NAA , then enable and configure your Blue Moon integration. For more information, refer to Set Up Blue Moon .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Blue Moon arrow_forward General .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding section below.

 General

 This section allows you to enter the information for your Blue Moon account to enable the integration. Once you've entered the information, click Test Connection to verify the integration is working.

 More Information

 It is recommended that you use an account with administrative access for your Rent Manager integration, or whichever Blue Moon account has the most access to properties.

 The credentials entered in system preferences will grant you access only to properties included on that Blue Moon account. For any properties that use a different account, you must enter the Username and Password for that property's Blue Moon account on the property level. From the property's details page, click arrow_forward Blue Moon Credentials . For more information, refer to Property Details (Page) .

 Field
 Description

 Default Serial Number

 The serial number of your primary administrative Blue Moon account. In your Blue Moon portal on the Settings tab, this is labeled as the Account ID .

 Password

 The password for your Blue Moon account provided by Blue Moon .

 PropertyID

 The UDF to use to store each property's Blue Moon property ID (or Property Number as it is called in Blue Moon ).

 Per your contract with Blue Moon , the property ID value identifies leasing documents specific to the property that are generated with Rent Manager data.

 Serial Number UDF

 The UDF to use to store a property's Blue Moon serial number (or Account ID as it is called in Blue Moon ).

 Per your contract with Blue Moon , the serial number value identifies the leasing documents that are required for a state and/or industry association.

 Username

 Your Blue Moon account username provided by Blue Moon .

 Specify Residents and Occupants for Blue Moon

 Blue Moon leasing documents distinguish between residents (lease signees) and occupants (people in the rental unit but not on the lease). A maximum of six residents and six occupants can be exported per lease.

 By default, tenants and prospects who are the primary account holders (the Primary option is checked on their View Contacts pop-up) are considered to be residents for Blue Moon export purposes. This section lists all contact types in your Rent Manager database and allows you to designate which contact types can be classified as residents and which can be classified as occupants. If a contact type is assigned as both, you can determine which role a contact of that type fits per lease. If a contact type is assigned as neither, a contact of that type cannot be added to Blue Moon leases.

 More Information

 Only data from tenants and prospects with a contact type of resident or occupant assigned can be exported to Blue Moon . Be sure you have already created contact types and assigned them to your tenants and prospects before setting these system preferences. For more information, refer to Contact Types (Page) .

 Option
 Description

 Include people marked as 'Show on Statement' as other residents on the lease

 If checked, any tenant or prospect contacts with the option Show On Statement/Labels checked on their account's View Contacts pop-up are classified as residents on Blue Moon leases.

 Occupant Contact Type

 If checked, tenant/prospect contacts assigned to this contact type can be selected as an Occupant on Blue Moon leases.

 Resident Contact Type

 If checked, tenant/prospect contacts assigned to this contact type can be selected as a Resident on Blue Moon leases.

 Settings

 This section controls what Blue Moon industry forms and fields are available.

 Option
 Description

 Allow Other Lease Forms

 If checked, all industry standard forms available from your Blue Moon license can be generated for your tenants and prospects.

 Hide fields that are locked in Blue Moon

 If checked, any fields that are locked in your Blue Moon portal are hidden in Rent Manager when exporting Blue Moon leases.

 If unchecked, the fields display in Rent Manager with (Locked) appended after the field name.
