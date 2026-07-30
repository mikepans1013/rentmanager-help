# System Privilege Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Privileges/System.htm

System privileges provide access to system-level features such as email, user management, administration settings, Rent Manager updates, database maintenance and upgrades, and custom colors.

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

 To manage these privileges, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users and select a user.
The user's details page displays.

 -
 Click the Privileges tab.

 -
 Next to the System privilege group, click to expand the privilege list.

 -
 To enable a privilege, check the box. Each privilege is described below.

 -
 Click Save .

 Privilege Descriptions

 Each privilege is described below.

 Privilege
 Description

 Compose Email

 Allows users to compose emails in Rent Manager , as well as send reports and letters to recipients via email. For more information, refer to Send an Email .

 Manage all users and privileges

 Add, view, and/or edit all user accounts, such as their username and passwords, privileges, and access to properties, banks, reports, and so on. For more information, refer to Control User Access .

 Warning

 Assignment of this privilege should be very limited . A user with this privilege has the potential to change any user in the system as well as create new users (including a new one for themselves) with all privileges and access to all reports.

 Manage assigned users and privileges

 Add, view, and/or edit only the user accounts for which the user is designated as the Supervisor . Supervisors may edit or add new subordinate user accounts with privileges only up to the level of their own privileges (i.e., supervisors are not able to grant any permission to a subordinate that they do not have themselves). They may also edit a subordinate user's Active status and Options on the user's General tab.

 Supervisors are assigned to users in the Personal Information section of each user account. Each user must have a Supervisor selected and the user set as the Supervisor must have this privilege.

 System Preferences

 View and edit settings that affect your entire database in system preferences.

 System Web Preferences

 Allows the user to view and edit web-related settings that affect your entire database in system web preferences.

 Posting Rollback

 Allows the user to reverse or undo certain posting actions in Rent Manager , such as recurring charges, management fees, or account reconciliations. For more information, refer to Roll Back a Posting .

 Manage Location Unit Licensing Limits

 Allows the user to configure limits for the number of unit licenses allowed in each location in your database. For more information, refer to Manage Location Unit Licensing Limits (Page) .

 Related Preferences

 This privilege displays only in the default Rent Manager location where per-unit licensing is enabled and the Manage Unit license by location system preference is checked. For more information, refer to General Options (System Preferences) .

 Assign unit licenses

 Allows the user to view and edit their unit licenses. For more information, refer to Assign Unit Licenses .

 More Information

 This option displays only for databases that use per-unit licensing. For more information, refer to Rent Manager Online Licensing .

 Run live update

 Access the Live Update tool to obtain the most recent updates to Rent Manager Standalone . This action is not required for Express because it receives all updates automatically.

 Clear databases

 Allow the user to clear all database records, including sample data. This action can be done only in Rent Manager 12 .

 Warning

 Assignment of this privilege should be very limited . A user with this privilege is able to delete all the information in your database, including all user names, account names, information about properties, tenants, units, vendors, etc.

 View other users’ emails sent to external recipients

 Allows the user to view emails that are not associated with a Rent Manager entity in the email center. For more information, refer to Email Center (Page) .

 Delete Emails

 Allows the user to delete sent emails from the email center or from the history/notes of a Rent Manager entity.

 Allow user to unlock other users

 Allows the user to unlock another user's account if their account has been locked out due to ten failed login attempts to Rent Manager . For more information, refer to Unlock a User Account .

 Colors

 Add, view, edit, and/or delete custom colors used to identify entity account such as tenants, properties, owners, etc. For more information, refer to Colors (Page) .

 Automated Notifications

 Allows the user to add, view, and edit automated notifications that alert recipients when certain actions are performed or conditions occur, such as a service issue being created via TWA or a tenant's move-in date is scheduled. For more information, refer to Automated Notifications (Page) .

 Rollback task automation bills

 Allows the user to roll back a recurring bill posting that was performed automatically by the task automation for posting recurring bills. For more information, refer to Recurring Bills (Page) .

 Manage Integrations

 Allows the user to view all the integrations currently activated for the Rent Manager database at arrow_forward Administration arrow_forward Integrations arrow_forward My Integrations .

 View Available Integrations

 Allows the user to view all the integrations available to be implemented in Rent Manager at arrow_forward Administration arrow_forward Integrations arrow_forward Available Integrations .

 Change RMO account password

 Allows the user to change their Rent Manager Online server password used to log into their remote desktop for Rent Manager 12 . This action can be done only in Rent Manager 12 and is not applicable to Rent Manager Express .

 Manage Rent Manager Sessions

 Allows the user to view active logins, log off users (if needed), and adjust the available sessions available for users to log into Rent Manager . For more information, refer to Rent Manager Sessions (Page) .

 Manage Webhooks

 Allows the user to view and edit webhook, which allow you to push Rent Manager data to an external web address. For more information, refer to Manage Webhooks (Page) .

 Access Rent Manager 12

 Allows the user to access Rent Manager 12 . This action applies only to Rent Manager 12 and does not affect the user's ability to access Rent Manager Express .

 Orion Writing Assistant

 Allows the user to use the Orion Writing Assistant to generate or refine letters, emails, and property marketing descriptions using Orion AI . For more information, refer to Writing Assistant Powered by Orion AI .
