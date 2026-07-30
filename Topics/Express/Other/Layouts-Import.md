# Import a Custom Layout

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Layouts-Import.htm

Layouts allow you to customize how the details page displays in select areas of Rent Manager . If you consult with other Rent Manager users that have custom layouts that they share with you, you can import those layouts into Rent Manager to remove the need to re-create them manually.

 More Information

 You can also import custom layouts created by LCS employees and other Rent Manager customers from the online template library (OTL). For more information, refer to Online Template Library (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit Own Layouts
 Enabled

 Design Layouts
 Enabled

 Manage System Layouts
 Enabled

 For more information, refer to Control User Access .

 To import a custom layout, do the following:

 -
 Navigate to one of the following pages:

 Page
 Navigation

 Personal Layouts

 Go to arrow_forward Administration , then go to Customization arrow_forward My Layouts .

 System Layouts

 Go to arrow_forward Administration , then go to Customization arrow_forward System Layouts .

 The My Layouts or System Layouts page displays.

 -
 In the Layout Type section, select the entity type for the custom layout (e.g., Tenant ).

 -
 Click Import .
The computer's file manager application (e.g., File Explorer , Finder ) displays.

 -
 Select an RMXL file for a custom layout.

 -
 If the imported layout has a field associated with a phone number type and/or user-defined field (UDF) that does not exist in the database, a pop-up displays prompting you to create, rename, or map that information in Rent Manager .

 If you wish to create a new phone number type or UDF from this layout, at least one of the following privileges are required:

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Phone Number Types
 Add

 User Defined Fields
 User defined fields
 Add

 If you do not have the necessary privilege, you can only map a phone number type or UDF to an existing phone number type or UDF.

 For more information, refer to Control User Access .

 The following columns are available:

 Column
 Description

 Include

 If selected, the field associated with a phone number type or UDF is included in the layout import, and related information is added to Rent Manager based on your other selections.

 Map to Existing

 The existing phone number type or UDF to associate the imported information with. For example, if the layout has a field for a Renter's Insurance Expiration UDF and your company uses a Renter's Ins. Exp. UDF, you would select Renter's Ins. Exp. from the drop-down list.

 Name (from Layout)

 The name of the Phone Number Type or UDF Type that is in the layout but does not exist in your Rent Manager database.

 Rename

 The new name to use when importing the phone number type or UDF to Rent Manager .

 - Once you have made your selections, click Next to enter information for additional types, or click Import to finish adding the layout.
The layout is imported to Rent Manager .
