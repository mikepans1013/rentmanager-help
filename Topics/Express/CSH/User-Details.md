# User Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/User-Details.htm

Once a Rent Manager user account is created, you can view and manage additional information regarding the user's account, such as contact information, from the General tab. Certain privileges, such as for property and bank access, can also be managed directly from the General tab. However, more specific privileges are managed from the Privileges tab.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To view and manage a user's account, go to arrow_forward Administration , then go to Users arrow_forward Users and select a user account.

 Personal Information

 This tile displays basic information about this user and their active status.

 The following fields are available on the tile:

 Field
 Description

 Active

 By default, this is checked as it allows the user to log into Rent Manager . Once an account is no longer being used, uncheck to make this user inactive. An inactive user's past actions are retained for historical purposes, but no one is able to log in using this username while it is inactive.

 First Name

 The user's first name.

 Last Name

 The user's last name.

 Username

 The username used to log in and track the employee's activity throughout Rent Manager .

 Password

 The password used to log into Rent Manager .

 More Information

 When creating a password, some restrictions may apply, and Rent Manager provides recommendations for a strong password. If a user forgets their Password , you can change it here to provide them access to Rent Manager .

 Supervisor

 The user's supervisor or manager. The supervisor controls the access of a limited list of other users for which they are selected as supervisor.

 A supervisor who indirectly supervises another user still has the ability to make changes to that user's account. For example, user A supervises user B, and user B supervises user C. User A can view and edit privileges for both users B and C.

 Related Privileges

 Users display in this list only if they have at least one the following privileges:

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 Add, View, Edit

 For more information, refer to Control User Access .

 Depending on the privileges provided, supervisors may also do the following:

 -
 Edit or add new user accounts with privileges only up to the level of their own privileges (i.e., supervisors are not able to grant any privileges that they do not have themselves).

 -
 Assign any user roles they are assigned to supervised users.

 -
 Control the Active status and assignments in the Options tile of the users they supervise.

 Default Location

 The default Rent Manager database location that loads when a user logs in. This field displays only if more than one location exists in your Rent Manager database.

 Contact Information

 This tile displays this user's primary phone number, fax number, email address, and rmVoIP extension.

 The following fields are available on the tile:

 Field
 Description

 rmVoIP Extension

 The user's rmVoIP extension that gives the user access to the integrated rmVoIP phone features in Rent Manager .

 Email

 The user's primary email address. The email subscription status displays as (active), (partially unsubscribed), or (unsubscribed).

 To view and configure the subscription status for emails associated with the user's account, click Manage Subscriptions . For more information, refer to Unsubscribe From Emails .

 If you use per unit Rent Manager licensing, an email address for each user is required. Setup instructions are sent to this email address.

 Fax

 The user's fax number.

 Image

 A display picture of the user. When added, this image displays in the top right when the user is logged in and in history/note items where the user is tagged.

 Phone

 The user's primary phone number.

 SMS/Text Ready

 If checked, the phone number is able to receive text messages.

 Title

 The formal name of the user's position.

 Options

 This tile displays additional assignments which can be applied to the user's account.

 The following fields are available on the tile:

 Field
 Description

 Read-Only

 Restricts a user to view-only access for all their granted privileges, regardless of whether or not Add , Edit , and/or Delete are checked. This allows the user to view information in Rent Manager without making any edits or updates to any of the data.

 Users with the Read-Only option checked can do the following:

 -
 View information for areas to which they have access on their user Privileges tab.

 -
 Generate letters and reports to which they have access on their user Letters and Reports tabs and either print or download/export a local copy to their computer.

 -
 View system preferences or personal preferences, but not make edits.

 Users with the Read-Only option checked can not do the following:

 -
 Edit any data anywhere in Rent Manager (moving, adding, updating, or deleting).

 -
 Publish reports or letters to Owner Web Access (OWA) or Tenant Web Access (TWA) .

 -
 Send any type of communications (including letters or reports) via email, text, or Virtual Post Office (VPO) .

 -
 Access system web preferences.

 For example, if a user has access to add, view, edit, and delete tenants on their Privileges tab, but this Read-Only option is also selected for the user, that user is able to view tenant information, but cannot make any changes to existing tenants, delete existing tenants, nor create new tenants. If the user does not have View access on the Privileges , they cannot view that information even if the Read-Only option is selected.

 Administrator

 Enables the user as an administrator account.

 Administrators are automatically granted new privileges when privileges are added to Rent Manager in future updates. An administrator is not automatically granted all privileges. Privileges must still be specified for each administrator.

 Sales Rep/
Leasing Agent

 Enable the user to create sales estimates (for projects and/or products and services) and identify requirements (parts and labor) to complete a project, itemize the costs, and provide an extended total amount due based on any additional markups and/or taxable items.

 This option also allows the user to be selected as the Leasing Agent for a prospect, which can be tracked in reports such as the Box Score report.

 Inspector

 Provides this user access to the Inspection feature in rmAppSuite Pro app. This is a licensed feature that allows the user to perform field inspections on a smartphone or tablet.

 rmService User

 This option is automatically checked when a user is created as a maintenance tech. While the option cannot be edited in Rent Manager Express , unchecking the box in Rent Manager 12 displays the box as unchecked in Rent Manager Express and removes the user from the list of maintenance techs. Additionally, if this option is selected in Rent Manager 12 , this box displays as checked and the user is added to the list of maintenance techs. For more information, refer to Maintenance Techs (Page) .

 API Access

 Provides this user access to the open Application Programming Interface ( API ). This is a licensed feature that allows developers to write programs for you that communicate directly with your database.

 Owner Sales Rep

 Enables the user to be selected as the Sales Representative for an owner prospect, which can be tracked in reports such as the Owner Prospect Box Score report.

 Properties

 This tile displays the properties this user can access. Lists of properties displayed throughout Rent Manager are limited to the properties selected here or in the Property Group tile. If *** All Properties is selected, the user has access to all properties that currently exist in the system, and is automatically granted access to any future properties added to the system in the future.

 If any options are selected in the Property Group tile, this tile updates to enable all properties included in the selected property group(s) and the *** All Properties option is disabled. Access to properties in the selected property group(s) cannot be removed, but additional properties can be enabled in this tile.

 Property Group

 This tile displays the property group(s) this user can access. If users have privileges to a property group and the properties that make up that group are later changed, then the properties to which that user has access updates to match that change. If a property group is deleted, users lose access to all properties that were in the group.

 Banks and Credit Cards

 This tile displays banks and credit cards this user can access. Lists of banks and credit cards displayed throughout Rent Manager are limited to the items selected here. If *** All Banks/Credit Cards is checked, the user has access to all accounts that currently exist in the system, and is automatically granted access to any future accounts added to the system in the future.

 Roles

 This tile displays the user roles assigned for this user. A user role is a defined set of user privileges, display defaults, reports, and letters that can be assigned to one or more users.

 User Defined Fields

 This tile displays any user-type user defined fields (UDFs) for which a value is specified for this user. UDFs are custom fields used to track information that Rent Manager does not track by default.

 Locations

 This tile displays the database locations the user can access. Lists of locations displayed throughout Rent Manager are limited to the locations selected here. If *** All Locations  is checked, the user has access to all current locations and is automatically granted access to any future locations added to the system in the future.
