# User Roles (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/User-Roles.htm

The User Role page allows you to view and manage user, report, and letter privileges that can be assigned to one or more users. Creating user roles is a convenient way to group privileges for activities common to people in the same or similar jobs. For example, you can create a role for your accountants and select a set of privileges that reflect the needs of your accountants. Changing the privileges associated with a user role automatically updates the privileges of each user assigned to that role.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View

 For more information, refer to Control User Access .

 To open the User Role page and view, edit, or add roles, go to arrow_forward Administration , then go to Users arrow_forward User Roles . A list of existing user roles display on the left. You can click each role to view and edit options in each of the five tabs along the top.

 More Information

 The privileges assigned to a user via user roles are denoted by a on the Privileges tab for the User details page and User Role page. When a user is assigned a role, you cannot remove any privileges that make up that role from the Privileges tab. However, you can add or remove privileges not associated with the role for individual users on their details page.

 General Tab

 This tab displays the Role Name used to identify the user role and the Username of each user who is assigned the role.

 More Information

 If your Rent Manager database has multiple locations, you are able to push a user role to another location with the Push option. To do so, on the right of the Role Name field, click Push .

 Privileges Tab

 The Privileges tab displays privilege groups and lets you specify which privileges to grant to the selected user role. For example, if a user with this role needs to add a charge to a tenant account, in the Tenants/Prospects privilege group, the user role requires the Tenants privilege to View . Additionally, in the Receivables privilege group, the user role also requires the Tenant transactions privilege to Add .

 By default, the Privileges tab opens with each privilege group collapsed into a summary row. The boxes in the row indicate the status of each permission type for the group:

 Box
 Status

 The empty box indicates that the user role has been granted access to no privileges of this type in this group.

 The blue box with a white dash indicates that the user role has been granted access to some but not all privileges of this type in this group.

 The checked box indicates that the user role has been granted access to all privileges of this type in this group.

 Reports Tab

 The Reports tab is where access to system reports and custom Report Writer reports can be assigned to the user role. Reports display in groups, and you can assign an entire group of reports or specific reports from a group to a user. For example, if a user needs to access the Lease Expiration report, in the Occupancy section, the Lease Expiration report must be enabled.

 The Reports tab displays report groups and the individual reports in each group.

 More Information

 An asterisk (*) that may display next to individual Report Writer reports. An asterisk indicates that the report has been assigned to all users and roles, and users are able to access the report even if the permission is unchecked on this tab.

 To restrict access to a report marked with an asterisk, first unassign it from all users and roles in Report Writer Manager . For more information, refer to Control Custom Report Access .

 By default, the Reports tab opens with each report group collapsed and displays a box that summarizes access to the group’s reports:

 Box
 Status

 The empty box indicates that the user role has been granted access to no reports of this type in this group.

 The blue box with a white dash indicates that the user role has been granted access to some but not all reports of this type in this group.

 The checked box indicates that the user role has been granted access to all reports of this type in this group.

 Communication Tab

 The Communication tab displays the letter and email templates, texting templates, and document packets that can be assigned to the user role. Templates and packets are grouped by entity type (e.g., Tenant , Owner , Vendor , etc.), and you can assign an entire group of letters or specific letters from a group to the user role.

 More Information

 An asterisk (*) may display next to individual templates or a packets. An asterisk indicates that the letter or packet has been assigned to all users and roles, and users are able to access the template or packet even if the permission is unchecked on this tab.

 To restrict access to a template or packet marked with an asterisk, first unassign it from all users and roles on the Letter/Email Templates page. For packets, access settings are located on the Document Packets page. For more information, refer to Control Letter / Email Template Access .

 By default, the Communication tab opens with each entity group collapsed and displays a box that summarizes access to the group's templates and packets:

 Box
 Status

 The empty box indicates that the user role has been granted access to no template or packet of this type in this group.

 The blue box with a white dash indicates that the user role has been granted access to some but not all templates or packets of this type in this group.

 The checked box indicates that the user role has been granted access to all templates or packets of this type in this group.

 Filters Tab

 The Filters tab displays the system filters that can be assigned to the user role. System filters are grouped by the entity types in which the filters are applied ( Property , Tenant , Prospect , etc). You are able to assign an entire group of system filters to a user role.

 By default, the Filters tab opens with each entity group collapsed and displays a box that summarizes access to the group's system filters:

 Box
 Status

 The empty box indicates that the user role has been granted access to no system filter in this group.

 The blue box with a white dash indicates that the user role has been granted access to some but not all system filters in this group.

 The checked box indicates that the user role has been granted access to all system filters in this group.
