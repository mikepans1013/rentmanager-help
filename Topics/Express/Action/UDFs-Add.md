# Add a User Defined Field

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/UDFs-Add.htm

User defined fields (UDFs) can be created to track information that Rent Manager does not track by default, such as tenant insurance expiration dates, vendor contract start/end dates, and whether pets are allowed in specific units. You can create UDFs for many Rent Manager entities (e.g., prospects, assets, service issues, loans, etc.), with each entity having its own unique set of UDFs. While accounts within an entity share the same set of UDFs, the values are unique to each account.

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 To create a new UDF, do the following:

 -
 Go to arrow_forward Administration , then go to Customization arrow_forward User Defined Fields .
The User Defined Fields page displays.

 -
 Click Add UDF .

 -
 Enter the Field Name for the UDF to display for the entity type.

 -
 From the Type drop-down list, select the entity type for the UDF you wish to create. This determines where the UDF displays in Rent Manager .

 -
 If applicable, check Required if the value must be entered for this UDF when adding new accounts of the entity type. Required UDFs display in Rent Manager with an asterisk (*).

 -
 In the Field Type drop-down, select the format of the value(s) that can be entered or selected for this UDF. The available field types and their settings are described below.

 Field Type
 Description

 Text

 Users can enter a string of text or any other alphanumeric value for this UDF.

 Optionally, in the Default Value field, enter text, numbers, spaces, and/or special characters to be automatically populated when accounts of the selected entity type are created after the UDF is saved.

 Encrypted Text

 Users can enter a string of text or any other alphanumeric value for this UDF. Text entered in this UDF displays only to users with access to view encrypted UDFs. For more information, refer to Add an Encrypted User Defined Field .

 Dropdown List/Selection List

 Users can select from a list of values. Dropdown allows only a single selection to be made. Selection allows multiple selections to be made. For more information, refer to Add a List User Defined Field .

 Yes/No

 Users can select a Yes or No value for this UDF.

 Optionally, in the Default Value field, select Yes or No to be automatically populated when accounts of the selected entity type are created after the UDF is saved.

 Date

 Users can enter or select a date value for this UDF.

 Optionally, in the Default Value field, enter a date or click to select a date from the calendar to be automatically populated when accounts of the selected entity type are created after the UDF is saved.

 Numeric

 Users can enter a string of numbers for this UDF. For more information, refer to Add a Numeric User Defined Field .

 File/Image

 Users can use these UDF types to attach a file or image file from their computer. For more information, refer to Add a File/Image User Defined Field .

 More Information

 The UDF Types Unit and Property do not support the Image field.

 Hyperlink

 Users can enter a web address for this UDF. The link that displays in the UDF can then be clicked and opens in your browser.

 Optionally, in the Default Value field, enter a web address to be automatically populated when accounts of the selected entity type are created after the UDF is saved.

 -
 Establish any additional settings for the UDF in the fields below Field Type . The fields available vary depending on your selections in the Type and Field Type drop-downs.

 -
 If you selected a UDF type of Prospect or Owner Prospects , make the following selections to sync data between prospects/tenants and owner prospects/owners:

 Option
 Description

 Link to Field

 When a prospect or owner prospect is converted to a tenant or owner, the UDF value carries over to the tenant- or owner-type UDF selected. When this option is enabled, it removes the ability to select a Field Type or Default Value , and the UDF inherits those settings from the linked UDF.

 Keep Synchronized

 If the UDF value is changed, the value is automatically updated for both entities. For example, if you update the information for this UDF on a converted tenant's account, the information is also updated on the original prospect account.

 -
 To finish, click Save & Close , or to create additional UDFs, click Save & New .

 -
 If you entered a default value, you are prompted to populate existing accounts of the selected entity type with the default value. Select one of the following options:

 Option
 Description

 Yes

 Automatically applies the default value to all existing and new accounts of the selected type.

 No

 The UDF value remains blank for existing accounts of the selected entity type. Only new accounts populate with the default value.

 The UDF is added to the list and all accounts of the selected entity type.
