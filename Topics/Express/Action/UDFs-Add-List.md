# Add a List User Defined Field

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/UDFs-Add-List.htm

User defined fields (UDFs) can be created to track information that Rent Manager does not track by default, such as preferred contact methods for tenants, the day of the week that landscaping is completed for a property, and what kind of pets are allowed in specific units. You can create UDFs for many Rent Manager entities (e.g., prospects, assets, service issues, loans, etc.), with each entity having its own unique set of UDFs. While accounts within an entity share the same set of UDFs, the values are unique to each account.

 By creating list-type UDFs, you can limit the options that are available for users to select and keep the options consistent. There are several UDF types that can be created. This topic focuses on the Dropdown List and Selection List field types.

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 To create a new list UDF, do the following:

 -
 Go to arrow_forward Administration , then go to Customization arrow_forward User Defined Fields .
The User Defined Fields page displays.

 -
 Click Add UDF .
The Add User Defined Field pop-up displays.

 -
 Enter the Field Name for the UDF to display for the entity type.

 -
 From the Type drop-down list, select the entity type for the UDF you wish to create. This determines where the UDF displays in Rent Manager .

 -
 If applicable, check Required if the value must be entered for this UDF when adding new accounts of the entity type. Required UDFs display in Rent Manager with an asterisk (*).

 -
 In the Field Type drop-down, select either Dropdown List or Selection List . Each option is described below.

 Field Type
 Description

 Dropdown List

 Users can select a single value from a list of preset options for this UDF. Enter the options that can be selected in the drop-down list. To add additional options, click Add Item .

 Check Allow users to enter another choice to allow users to enter a value other than what you defined.

 Selection List

 Users can select one or more values from a list of preset options for this UDF. Enter the options that can be selected in the selection list. To add additional options, click Add Item .

 More Information

 For more information on the other options in the Field Type drop-down list, refer to Add a User Defined Field , Add an Encrypted User Defined Field , Add a File/Image User Defined Field , and Add a Numeric User Defined Field .

 If applicable, check Set Default next to a value to automatically populate that value when accounts of the selected entity type are created.

 -
 If you selected a UDF type of Prospect or Owner Prospects , make the following selections to sync data between prospects/tenants and owner prospects/owners:

 Option
 Description

 Link to Field

 When a prospect or owner prospect is converted to a tenant or owner, the UDF value carries over to the tenant- or owner-type UDF selected. When this option is enabled, it removes the ability to select a Field Type or check Set Default , and the UDF inherits those settings from the linked UDF.

 Keep Synchronized

 If the UDF value is changed, the value is automatically updated for both entities. For example, if you update the information for this UDF on a converted tenant's account, the information is also updated on the original prospect account.

 -
 To finish, click Save & Close , or to create additional UDFs, click Save & New .

 -
 If you set a default value, you are prompted to populate existing accounts of the selected entity type with the default value. Select one of the following options:

 Option
 Description

 Yes

 Automatically applies the default value to all existing and new accounts of the selected type.

 No

 The UDF value remains blank for existing accounts of the selected entity type. Only new accounts populate with the default value.

 The UDF is added to the list and all accounts of the selected entity type.
