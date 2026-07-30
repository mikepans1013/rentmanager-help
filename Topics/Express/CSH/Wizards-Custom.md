# Custom Wizards (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Wizards-Custom.htm

The Custom Wizards page displays all wizards available in Rent Manager , including the default system templates and any customized wizards created and edited in the wizard designer. There are various types of custom wizards you can create, such as move-in and move-out wizards, as well as add wizards for various Rent Manager entities like tenants, properties, and assets.

 Wizards marked with are system templates that cannot be edited or deleted, but you can create copies of the system templates to modify the copies as needed. You can then select which wizard to use as the default for each entity type.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 View

 For more information, refer to Control User Access .

 To access the Custom Wizards page, go to arrow_forward Administration , then go to Customization arrow_forward Custom Add Wizards .

 Filter Options

 The following filter options are available on this page.

 Filter
 Option

 Search

 Enter the desired search criteria to display results with a Name that matches the search criteria.

 Show Inactive

 If checked, the list includes any wizards that have the Active option unchecked.

 Wizard Type

 On the left panel, select which entity type (e.g., Tenant , Unit , Move In , etc.) for which to view custom wizards.

 Column Descriptions

 The following columns display on this page.

 Column
 Description

 Active

 A displaysif this wizard is active and available to be used in Rent Manager .

 Assignment Type

 Indicates whether the wizard is assigned to specific properties or by property type.

 For Property wizards, this column always displays Property Type . For Asset wizards, this column always displays Asset Type .

 Default

 A displays if this is the wizard that initiates for any property, property type, or asset type that is not assigned to another wizard.

 Name

 The unique label to identify the wizard's use case. Wizards with after the name are system wizards and cannot be edited or deleted.

 Properties/Property Types

 Lists the properties or property types assigned to this wizard. For Asset wizards, this column always displays which asset types are assigned to the wizard.

 For Property wizards, this column is named Property Type . For Asset wizards, this column is named Asset Type .

 Row Actions

 The following actions are available by clicking  next to each custom wizard.

 Option
 Description

 Assign Wizard

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 View, Edit

 For more information, refer to Control User Access .

 Allows you to assign the wizard to specific properties or property types.

 For Property wizards, only property types can be assigned. For Asset wizards, only asset types can be assigned.

 This option does not display for wizards marked as Default .

 Copy

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 Add, View

 For more information, refer to Control User Access .

 Creates a duplicate of the wizard. If you want to make edits to the system wizard, you must create a copy and edit the copy.

 Delete

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 View, Delete

 For more information, refer to Control User Access .

 Permanently deletes the wizard from Rent Manager . This action cannot be undone and is not available for system wizards.

 Edit

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 View, Edit

 For more information, refer to Control User Access .

 Opens the wizard designer so you customize the wizard as needed. This option is not available for system wizards.

 Make Default

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Add Wizards
 View, Edit

 For more information, refer to Control User Access .

 Set as the default wizard to use whenever the wizard is initiated for a property, property type, or asset type that does not have another wizard assigned.

 This option does not display for wizards already marked as Default .
