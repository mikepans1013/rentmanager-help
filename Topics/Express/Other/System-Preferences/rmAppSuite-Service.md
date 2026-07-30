# rmAppSuite Service (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/rmAppSuite-Service.htm

When the service feature is enabled in rmAppSuite Pro , issues created in Rent Manager  are pushed to rmAppSuite Pro . These system preferences control which issues display to users and if users can download issue lists to work offline.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward rmAppSuite arrow_forward Service .
The System Preferences: rmAppSuite - Service page displays.

 -
 Check Enabled .

 -
 Edit the settings as desired. Each setting is described in the headings below.

 -
 Click Save .
The system preference configuration is updated.

 General

 This section displays your database identifier and licensing information. Additionally, you can determine which issues display to users, if users can download issue lists to work offline, and whether or not service technicians can be tracked while on duty.

 Option
 Description

 Allow techs to be located while On Duty

 If enabled, the On Duty option displays in rmAppSuite Pro for techs to toggle on/off. This allows users to 'ping' their device with rmAppSuite Pro to grab their location. This also enables the Locate Techs tab on the Service Tech Map .

 Allow users to make lists available offline

 If enabled, you can work offline by downloading issue lists smaller than two hundred issues and the list's associated filters to the device running the application. This allows the user to work without a data connection and sync data when a data connection is detected.

 Company Code

 The unique database identifier provided by LCS to identify the database for logging in to rmAppSuite Pro .

 Custom name for On Duty option in rmAppSuite

 Changes the On Duty label in the service tech map in rmAppSuite Pro to instead display the value entered. This field has a character limit of 15.

 More Information

 This option changes how the On Duty field displays only in rmAppSuite Pro and does not affect the On Duty field in Rent Manager Express .

 Display issues assigned to other users

 If enabled, users can view service issues assigned to others in rmAppSuite Pro . This affects only users who have the following privilege:

 Related Privileges

 Group
 Privilege
 Column

 rmAppSuite
 View service issues assigned to other users
 Enabled

 For more information, refer to Control User Access .

 Licensed

 Displays Yes if user licenses have been purchased for the service feature in rmAppSuite Pro for this database.

 Linked Entity Information

 In this section, you can select the issue links you wish to display on issues in rmAppSuite Pro . This is useful for service technicians that need to see additional information, such as serial numbers of assets, the floor and unit types for units, or vendor email addresses. Only information that is available for each service issue per your selections displays. For more information, refer to Service Issue Links (System Preferences) .

 The section is organized into the following columns:

 Column
 Description

 Display Name

 The customizable name of the linked field as it displays on the issue in rmAppSuite Pro .

 Entity Type

 The category ( Asset , Owner , Property , Tenant , Unit , or Vendor ) from which the selected field pulls information to display on the issue in rmAppSuite Pro .

 Field

 The specific field associated with the Entity Type selected for display on the issue in rmAppSuite Pro .

 To add a linked entity to the list, do the following:

 -
 Click Add Item to add a new row.
The Add Entity Field pop-up displays.

 -
 Make the necessary selections in the fields provided.

 Field
 Description

 Level

 The entity type ( Asset , Owner , Property , Tenant , Unit , or Vendor ) for the field you wish to link.

 Field

 The field to link to the issue. The available fields correspond to the fields that display on the entity's details page.

 Display Name

 An optional, custom name for the field to display on the issue.

 -
 Click Add & Close to complete the linked entity process and close the pop-up. Alternatively, click Add & New to finish adding the linked entity and refresh the pop-up to create another linked entity.
