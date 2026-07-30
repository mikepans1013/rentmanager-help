# User Privilege Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/User-Privilege-Listing.htm

The User Privilege Listing report displays the privileges that have been assigned to a user, or that the user has inherited from a role. In addition, the reports selected on the user's details page, letter templates, bird's eye view maps, banks, and properties that have been assigned to the user also display. The report helps you track whether specific privileges have been granted to users and/or user roles you can monitor and maintain your Rent Manager database security.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to User Privilege Listing .

 For more information, refer to Control User Access .

 To view the User Privilege Listing report, do the following:

 -
 Go to  arrow_forward System arrow_forward Users arrow_forward User Privilege Listing .
The Reports: User Privilege Listing page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Detail or Summary

 This option determines how much information is displayed in the report.

 Option
 Description

 Detail

 All privileges, including unassigned and those are inherited by the users from one or more user roles, display.

 Summary

 Condensed information about the privileges assigned to or inherited by the users display.

 Users to Include

 Select each user to display the privileges assigned to or inherited by the user. Optionally, check Include Inactive Users to include user accounts no longer marked as active.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Add

 A Check displays if the user has been granted the ability to add items related to the privilege.

 Delete

 A Check displays if the user has been granted the ability to delete items related to the privilege.

 Edit

 A Check displays if the user has been granted the ability to edit items related to the privilege.

 Enabled

 A Check displays if the user has been granted a privilege that can be enabled.

 Name

 The user's Last Name followed by their First Name as it is entered on the user's General tab.

 Privilege

 The name of each privilege in the order they appear on the user Privileges tab.

 Role

 The name of the user role that resulted in the user inheriting a privilege. Privileges that were inherited through roles display multiple lines detailing which role gives the privilege(s) to the user.

 If you selected the Summary report option, this column displays as blank.

 Username

 The Username as it is entered on the user's General tab.

 View

 A Check displays if the user has been granted the ability to view items related to the privilege.

 Privileges Subreport

 For the selected users, the Privileges subreport displays each user's assigned privileges in the order they appear in user privileges. For each assigned privilege, a Check displays in the appropriate columns which define how a user can interact with items related to the privilege.

 Reports Subreport

 For the selected users, the subreport displays the reports that each user can generate listed in the order they appear on the user Reports tab.

 Report Writer Subreport

 For the selected users, the subreport displays the Report Writer reports that each user can generate listed in the order they were assigned to a user. The report's name is prefaced by the report's type (tenant, owner, financial, etc.).

 Letter Templates Subreport

 For the selected users, the subreport displays the letter templates to which each user has access listed in the order they were assigned to a user. The template's name is prefaced by the template's type (tenant, owner, vendor, etc.).

 Bird's Eye View Subreport

 For the selected users, the subreport displays the bird's eye view (BEV) maps to which each user has access listed in alphabetical order.

 Properties Subreport

 For the selected users, the subreport displays the properties to which each user has access listed in alphabetical order. If a user has access to all properties, Access to all properties displays.

 Banks Subreport

 For the selected users, the subreport displays the banks to which each user has access listed in alphabetical order. If the user has access to all banks, Access to all banks displays.
