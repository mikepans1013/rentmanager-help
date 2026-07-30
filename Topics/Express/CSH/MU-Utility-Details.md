# Utility Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-Utility-Details.htm

Using utilities allows you to manage utility information for tenants and units using Metered Utilities (MU) . It also allows you to have different utilities such as gas, electric, water, and sewer used to bill tenants based on their consumption (usage) of that utility. On the Utility Detail page, you can view and edit information related to a utility, such as the name, contact information, and associated charge type.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 Utility information
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a utility, go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Utilities and select a utility from the list.

 Utility Information

 This tile displays basic information about the utility and its associated charge type, property, and source.

 Field
 Description

 Charge Type

 The charge type used to record transactions related this utility.

 Properties

 The properties at which this utility is available.

 Warning

 Once a property is linked to a utility, it cannot be unlinked. This preserves the utility's historical records for legal purposes.

 Source Utility for Readings

 If this utility uses the same meter as an existing utility, this is that utility. For example, water and sewer are often read from the same meter even though they have separate calculations. If you create a sewer utility and select Water as the Source Utility for Readings , tenant readings from the water meter are duplicated in the sewer meter readings.

 Utility Name

 The name of the utility based on what the utility is measuring (e.g., Water , Sewer , Duke Electric , and so on).

 Contact Information

 This tile displays information about the utility company's representative.

 Field
 Description

 Email

 The primary email address used for correspondence with the utility company contact.

 Name

 The name of the primary contact at the utility company.

 Master Meters

 This section displays master meters the utility is associated with. Master meters record utility usage for an entire property (e.g., the water meter for an apartment building). If no master meter is added, the Add Master Meters button displays.

 The Default Vendor is the vendor to which bills for the master meter are usually paid. When a master meter's Default Vendor is selected in a bill, Rent Manager converts the bill to a master meter bill. The Default Expense Account is the GL account which usually records expenses on bills for the master meter's. Unless specified otherwise, the Default Expense Account automatically display for line items in the master meter bill's expense grid. The Default RUBS Template is the ratio utility billing system (RUBS) template used to divide charges among tenants for properties that do not utilize submeters. For more information, refer to Add a Master Meter Bill .

 Column
 Description

 Expense Account

 The GL account that records utility expenses at the property associated with the master meter. Unless another expense account is specified, < Use Default > displays.

 Meter Number

 The master meter's unique meter number at the associated property. This may be a serial number or other identification number.

 Property

 The short name of the property linked to the master meter.

 RUBS Template

 The ratio utility billing system (RUBS) template associated with the master meter. This column displays only if at least one master meter has the RUBS Enabled option toggled on. For more information, refer to RUBS Templates (Page) .

 Vendor

 The vendor that bills the property for utility charges associated with the master meter. Unless another vendor is specified, < Use Default > displays.

 Addresses

 This section displays the addresses associated with the utility provider, including any custom address types.

 Comment

 This tile displays additional information about the utility, such as the name of the utility provider.

 Phone Numbers

 This tile tracks the contact numbers for the utility provider organized by phone number types. The number used as the primary contact for this account is marked as Default . Additionally, if a phone number can be used for text messaging, it is marked in the T column.
