# Control User Defined Field (UDF) Access

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Users-Privileges-UDFs.htm

User-defined fields (UDFs) are custom fields used to track information that Rent Manager does not track by default. Each Rent Manager entity (e.g., tenant, prospect, property, unit, etc.) can have a unique set of UDFs. While each account of an entity type shares the same set of UDFs, the values are specific to the selected account.

 To view, edit, or use UDFs, users must have access permissions to view entities that correspond to a UDF Type . For example, to view the Tenant -type UDFs that can be applied to tenant accounts in Rent Manager , users must have View and Edit privileges for Tenants in the Tenants/Prospects privilege group. In addition, UDFs can use the Encrypted Text field type to protect sensitive data. To view or edit encrypted UDFs, in addition to the privileges required for viewing and editing UDFs of the relevant type, users also need the privilege to access encrypted UDFs for that type.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View, Edit

 Manage assigned users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To give users access to view and edit UDFs, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users and select a user from the list.
The user's details page displays.

 -
 On the Privileges tab, in the User Defined Fields group, users need these privileges to use UDFs of the corresponding UDF Type . The privileges needed to view and edit encrypted UDFs for each type are also listed.

 UDF Type
 Privileges

 Asset

 Related Privileges

 Group
 Privilege
 Column

 Asset Management
 Manage Assets
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text asset UDFs, in the User Defined Fields group, set Access Asset encrypted UDFs to Enabled .

 Commercial Lease

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text commercial lease UDFs, in the User Defined Fields group, set Access Commercial Lease encrypted UDFs to Enabled .

 Contact

 While contact information can be stored in many locations in Rent Manager , Contact -type UDFs can only be used on tenant, prospect, or vendor accounts. Users need the following privileges to view or edit UDF values for the corresponding account types.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 Prospects
 View, Edit

 Payables
 Vendors
 View, Edit

 View private vendors
 Enabled

 For more information, refer to Control User Access .

 To view and edit Encrypted Text contact UDFs, in the User Defined Fields group, set Access Contact encrypted UDFs to Enabled .

 Eviction

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text eviction UDFs, in the User Defined Fields group, set Access Eviction encrypted UDFs to Enabled .

 Inventory Item

 Related Privileges

 Group
 Privilege
 Column

 Sales/Invoicing
 Items
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text inventory item UDFs, in the User Defined Fields group, set Access Inventory encrypted UDFs to Enabled .

 Issue

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Issues
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text issue UDFs, in the User Defined Fields group, set Access Issue encrypted UDFs to Enabled .

 Job

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Jobs
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text job UDFs, in the User Defined Fields group, set Access Job encrypted UDFs to Enabled .

 Loans Receivable

 Related Privileges

 Group
 Privilege
 Column

 Loans Receivable
 Loans Receivable
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text loans receivable UDFs, in the User Defined Fields group, set Access Loan Receivable encrypted UDFs to Enabled .

 Noncommercial Lease

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text noncommercial lease UDFs, in the User Defined Fields group, set Access Noncommercial Lease encrypted UDFs to Enabled .

 Owner

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text owner UDFs, in the User Defined Fields group, set Access Owner encrypted UDFs to Enabled .

 Owner Prospect

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owner Prospects
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text owner prospect UDFs, in the User Defined Fields group, set Access Owner Prospect encrypted UDFs to Enabled .

 Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text property UDFs, in the User Defined Fields group, set Access Property encrypted UDFs to Enabled .

 Prospect

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Prospects
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text prospect UDFs, in the User Defined Fields group, set Access Prospect encrypted UDFs to Enabled .

 System

 System UDFs and values are stored on the System UDF Values page.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Edit System UDF Values
 Enabled

 User Defined Fields
 User defined fields
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text system UDFs, in the User Defined Fields group, set Access System encrypted UDFs to Enabled .

 Tenant

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text tenant UDFs, in the User Defined Fields group, set Access Tenant encrypted UDFs to Enabled .

 Unit

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Units
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text unit UDFs, in the User Defined Fields group, set Access Unit encrypted UDFs to Enabled .

 User

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View, Edit

 Manage assigned users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text user UDFs, in the User Defined Fields group, set Access User encrypted UDFs to Enabled .

 Vendor

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Vendors
 View, Edit

 For more information, refer to Control User Access .

 To view and edit Encrypted Text vendor UDFs, in the User Defined Fields group, set Access Vendor encrypted UDFs to Enabled .

 -
 Click Save .
Users can now view or edit UDF values for Rent Manager entities of the UDF Type that they have access to.
