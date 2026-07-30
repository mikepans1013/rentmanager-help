# Control Letter / Email Template Access

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Users-Privileges-Letter-Templates.htm

Letter and email templates are customized documents that combine static text and graphics with dynamic scripting commands. These commands allow you to automatically generate customized content for each recipient, saving you time in document creation and delivery.

 When sending letters, emails, document packets, or signable documents from Rent Manager , you select the relevant templates from a list. However, there are specific privileges that determine what templates are available for you to select. This topic guides you through how to grant and customize the permissions for users so they can access the templates they need.

 There are a combination of privileges that are required to allow a user to generate or edit templates, since letter and email templates are separated by entity type (asset, tenant, owner, and so on). After determining the types of templates a user can manage and send on their Privileges tab, you can grant access to the specific templates they need on their Communication tab.

 Step 1: Give Privileges for Template Types

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 View, Edit

 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To determine the level of access users have to letter templates for each entity type, do the following:

 -
 Go to arrow_forward Administration arrow_forward Users and select the user from the list.
The user details page displays.

 -
 At the top, click the Privileges tab and expand the Letter/Email Templates/Reports/Packets group.

 -
 For the Letter/Email templates/packets privilege, check the View column.

 -
 For the templates/packets privileges, determine which entities the user can generate or manage letter and email templates for.

 For example, if the user should have access only to property-type and unit-type templates, they need only privileges for Property templates / packets and Unit templates / packets .

 -
 Check the desired boxes to determine the level of the user's access to templates for each desired entity type.

 Column
 Description

 Add

 Allows the user to create or import new templates of the corresponding entity type(s).

 View

 Allows the user to view and generate letters, emails, and document packets from templates of the corresponding entity type(s).

 Edit

 Allows the user to also edit and save changes to templates of the corresponding entity type(s).

 Delete

 Allows the user to permanently delete templates of the corresponding entity type(s) from Rent Manager . Once deleted, templates cannot be recovered.

 More Information

 These privileges determine which template types are available on the Communication tab of the user's account as well as the level of access to each template type by entity. From the Communication tab, in the Letter / Email section, you further specify which specific templates to which a user has access. This setup is covered in the next section of this topic.

 -
 Optionally, grant the user any of the following privileges as needed:

 Privilege
 Description

 Edit other users' templates / packets

 Allows the user to edit templates created by a user account other than themselves.

 Edit merged documents

 Allows the user to edit the text of a letter or email after it has been generated with personalized data populated in the template's insertable fields.

 -
 Click Save .
The templates of the selected entity type(s) are now available on the user's Communication tab.

 Step 2: Grant Access to Letter and Email Templates

 Once you determine which template types the user can access, you must select the specific templates the user should be allowed to generate or manage. Their level of access is determined by the templates/packets privileges granted for the associated entity type.

 For example, if a user has View and Edit privileges for Owner templates/packets and only View privileges for Vendor templates/packets , they can make changes to any owner-type templates to which they have access, as well as generate and send them to owners. They cannot edit vendor-type templates, but can still generate and send vendor-type templates to which they have access.

 There are two ways you can manage who has access to each template: at the user level and at the template level. Editing at the user level allows you to customize a specific user's access to all templates, while editing at the template level allows you to determine which users can access a specific template without manually going through each user account.

 Option One: User Level

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 View, Edit

 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To manage the templates a specific user can access, do the following:

 -
 Go to arrow_forward Administration arrow_forward Users and select the user from the list.
The user details page displays.

 -
 At the top, click the Communication tab.
In the Letter/Email section, a group for each entity to which the user has templates/packets access displays.

 -
 Expand each group and check the box next to each letter / email which the user can access.

 More Information

 Templates marked with an asterisk (*) have access granted to All Users on the template's Letter / Email Template Settings pop-up. Even if you uncheck the box here, the user still has access to the template. To remove their access, refer to the heading below at Option Two: Template Level .

 Templates with a gray checkmark are inherited from a user role with access to the template. Access to that template can be removed only if it is unchecked on the associated user role's Communication tab. For more information, refer to User Roles (Page) .

 -
 Click Save .
The user now has access to the selected templates.

 Option Two: Template Level

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Emplates/Reports/Packets
 Letter/Email templates/Packets
 View

 In addition, you must have the following related privileges

 -
 On the Privileges tab, in the Letter/Email Emplates/Reports/Packets group, the privileges to View and Edit the relevant entity type (e.g., Prospect templates/packets to manage templates of prospect type.

 - On the Communication tab, in the Letter/Email section, you must have access to the associated template.

 For more information, refer to Control User Access .

 To manage the users who can access a specific template, do the following:

 -
 Go to arrow_forward Communication arrow_forward Letters arrow_forward Letter Templates .
The Letter Templates page displays.

 -
 In the Type section at the top-left, select an entity to display templates of that entity type.

 -
 On the desired template, click   arrow_forward   Settings .

 -
 In the Users section, select the user(s) or user role(s) to have access to this template. Alternatively, check All Users to grant this privilege to all current and future users in the system.

 More Information

 Templates with All Users checked on the template's Letter/Email Template Settings cannot have access removed at the user level. To remove a user's access to the template, this option must first be unchecked.

 Templates with a user role selected cannot  have access removed at the user level. To remove access to the template for a user with that user role, the template must be unchecked on the user role's Communication tab or the user role must be unchecked on the template’s Letter/Email Template Settings . For more information, refer to User Roles (Page) .

 -
 Click Save .
The selected users and/or user roles have access to the template.
