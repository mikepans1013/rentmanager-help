# Add a File/Image User Defined Field

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/UDFs-Add-File-Image.htm

User defined fields (UDFs) can be created to track information that Rent Manager does not track by default, such as copies of leases, vendor invoices, and receipts for inventory items. You can create UDFs for many Rent Manager entities (e.g., prospects, assets, service issues, loans, etc.), with each entity having its own unique set of UDFs. While accounts of the same entity share the same set of UDFs, the values are unique to each account.

 By creating file- and image-type UDFs, you can allow users to attach documentation or photos to an entity's records for easy access in the future. There are several UDF types that can be created. This topic focuses on the File and Image field types.

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

 -
 Enter the following information:

 Field
 Description

 Field Name

 A brief description of the data that is tracked by the UDF (e.g., Lease Copy ).

 Type

 The entity type for the UDF you wish to create (e.g., Tenant ). This determines where the UDF displays in Rent Manager .

 More Information

 The UDF Types Unit and Property do not support the Image field.

 If you selected a UDF Type of Prospect or Owner Prospects , make the following selections to sync prospect data with tenants and owner prospect data with owners:

 Link to Field

 When a prospect or owner prospect is converted to a tenant or owner, the UDF value carries over to the tenant- or owner-type UDF selected. When this option is enabled, it removes the ability to select a Field Type and upload a Default File or Default Image , and the UDF inherits those settings from the linked UDF.

 More Information

 To link a UDF in this field, you need to create a tenant- or owner-type UDF with the needed setup. You can then select that UDF when creating prospect- or owner prospect-type UDFs.

 It is recommended that you create the UDF as a tenant- or owner-type first with the needed setup. You can then select that UDF when creating the prospect- or owner prospect-type UDF and it saves you time by automatically pulling the same setup.

 Keep Synchronized

 If the UDF value is changed, the value is automatically updated for both entities. For example, if you update the information for this UDF on a converted tenant's account, the information is also updated on the original prospect account.

 Required

 Require users to enter a value for this UDF when adding new accounts of the selected entity Type . Required UDFs display in Rent Manager with an asterisk (*).

 Field Type

 Select either File or Image from the drop-down list. Each option is described below.

 File

 Users can attach a file for this UDF. This option allows users to upload files with various filename extensions, including images and PDFs.

 Image

 Users can attach an image file for this UDF. This option allows users to upload files only with image-type filename extensions, such as .jpg or .png.

 Default File/Image

 Select a file or image from your computer to be automatically populated when accounts of the selected entity type are created after the UDF is saved.

 -
 To finish, click Save & Close , or to create additional UDFs, click Save & New .

 -
 If you uploaded a default file or image, you are prompted to populate existing accounts of the selected entity type with the default file or image. Select one of the following options:

 Option
 Description

 Yes

 Automatically applies the default file or image to all existing and future accounts of the selected type.

 No

 The UDF remains blank for existing accounts of the selected entity type. Only future accounts populate with the default file or image.

 The UDF is added to the list and all accounts of the selected entity type.
