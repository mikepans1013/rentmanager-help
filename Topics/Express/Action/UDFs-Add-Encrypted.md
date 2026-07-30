# Add an Encrypted User Defined Field

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/UDFs-Add-Encrypted.htm

User defined fields (UDFs) can be created to track information that Rent Manager does not track by default, and sometimes that information is sensitive and should not be accessible by all users. For example, you may need to input codes for key lock boxes or ACH banking information. In cases like these, you can control who is permitted to view those UDF values by creating encrypted text UDFs and setting user privileges. You can create UDFs for many Rent Manager entities (e.g., prospects, assets, service issues, loans, etc.), with each entity having its own unique set of UDFs. While accounts within an entity share the same set of UDFs, the values are unique to each account.

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 Access encrypted UDFs
 Enabled

 Specific privileges must be enabled for each entity type for which you wish to create an encrypted UDF (e.g., Access Tenant encrypted UDFs ).

 For more information, refer to Control User Access .

 To create a new encrypted UDF, do the following:

 -
 Go to arrow_forward Administration , then go to Customization arrow_forward User Defined Fields .
The User Defined Fields page displays.

 -
 Click Add UDF .
The Add User Defined Field pop-up displays.

 -
 Enter the following information:

 Field
 Description

 Field Name

 A brief description of the data that is tracked by the UDF (e.g., Preferred Contact Method ).

 Type

 The entity type for the UDF you wish to create (e.g., Tenant ). This determines where the UDF displays in Rent Manager .

 If Prospect or Owner Prospects are selected in this field, the following options are made available to sync data between prospects/tenants and owner prospects/owners:

 Link to Field

 When a prospect or owner prospect is converted to a tenant or owner, the UDF value carries over to the tenant- or owner-type UDF selected. When this option is enabled, it removes the ability to select a Field Type or Default Value , and the UDF inherits those settings from the linked UDF.

 Keep Synchronized

 If the UDF value is changed, the value is automatically updated for both entities. For example, if you update the information for this UDF on a converted tenant's account, the information is also updated on the original prospect account.

 Required

 Require users to enter a value for this UDF when adding new accounts of the selected Type . Required UDFs display in Rent Manager with an asterisk (*).

 Field Type

 Select Encrypted Text from the drop-down list.

 More Information

 For more information on the other options in the Field Type drop-down list, refer to Add a User Defined Field , Add a Numeric User Defined Field , and Add a File/Image User Defined Field .

 -
 To finish, click Save & Close , or to create additional UDFs, click Save & New .
The encrypted UDF is added to the list and all accounts of the selected entity type.
