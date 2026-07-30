# Licensing (System Web Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Web-Preferences/Licensing.htm

The Licensing preference group is part of system web preferences which shows license information and usage for the various components of the Web Portal Suite .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system web preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Licensing .

 -
 Select the desired section to edit under the Licensing drop-down. Each section is described below.

 -
 Edit the settings in the section(s) as desired.

 -
 Click Save to accept your changes.

 Preference Descriptions

 This preference group is divided into multiple sections. Each setting is described within the corresponding section below.

 Tenant Web Access Licensing

 The TWA section manages the licensing details of your Tenant Web Access (TWA) portal(s). The following options are available in this section:

 Option
 Description

 Tenant Web Access Usage

 Check each location which should have access to Tenant Web Access (TWA) .

 Location Name

 The database locations available in your database.

 Users

 The number of unique accounts associated with TWA for the corresponding location.

 Require Locations to be passed in website address (URL)

 Check to require your TWA URL to include a location parameter and remove the Location drop-down from the login page.

 When selected, you must include the location in your URL:

 https:// CompanyCode .twa.rentmanager.com?Locations= LocationName

 Replace the red text with your data, as described below:

 Company Code

 The Company Code is the unique identifier for your organization assigned to you by LCS . The Company Code can be found in various places in Rent Manager , including the top right of the menu ribbon in Rent Manager Express .

 Replace CompanyCode in the URL with the Company Code for your organization.

 Location Name

 The name of the database location that you want selected automatically on the login page when using this URL.

 Replace LocationName in the URL with the name of the desired database location. Location names are listed in the Tenant Web Access Usage section above.

 More Information

 If the location name contains a space, you need to replace the space with %20 . For example, a location name of Riverview Apartments would need to appear as Riverview%20Apartments in the URL, as follows:

 https:// CompanyCode .twa.rentmanager.com/?Locations= Riverview %20 Apartments

 Owner Web Access Licensing

 The OWA section manages the licensing details of your Owner Web Access (OWA) portal(s). The following options are available in this section:

 Option
 Description

 Owner Web Access Usage

 Check each location which should have access to Owner Web Access (OWA) .

 Location Name

 The database locations available in your database.

 Users

 The number of unique accounts associated with OWA for the corresponding location.

 Require Locations to be passed in website address (URL)

 Check to require your OWA URL to include a location parameter and remove the Location drop-down from the login page.

 When selected, you must include the location in your URL:

 https:// CompanyCode .owa.rentmanager.com?Locations= LocationName

 Replace the red text with your data, as described below:

 Company Code

 The Company Code is the unique identifier for your organization assigned to you by LCS . The Company Code can be found in various places in Rent Manager , including the top right of the menu ribbon in Rent Manager Express .

 Replace CompanyCode in the URL with the Company Code for your organization.

 Location Name

 The name of the database location that you want selected automatically on the login page when using this URL.

 Replace LocationName in the URL with the name of the desired database location. Location names are listed in the Owner Web Access Usage section above.

 More Information

 If the location name contains a space, you need to replace the space with %20 . For example, a location name of Riverview Apartments would need to appear as Riverview%20Apartments in the URL, as follows:

 https:// CompanyCode .owa.rentmanager.com/?Locations= Riverview %20 Apartments

 Availability Licensing

 The Availability section manages the licensing options for your unit availability. Check Enable Availability Web Access to enable the unit availability profile feature for your account. For more information, refer to Availability Profile (System Web Preferences) .

 Custom Applications Licensing

 The Custom Applications section manages the licensing options for your custom applications. Check the associated Location Name for each location you wish to allow access to your custom applications.

 Related Preferences

 Your Apply Now applications can be customized in system web preferences. For more information, refer to Custom Applications General (System Web Preferences) and Custom Applications ePay (System Web Preferences) .

 STR Online Booking

 This section displays a list of your active Rent Manager locations. You can enable these locations to activate a URL that is ready for guests to use for booking online.

 More Information

 When enabling STR Online Booking in Rent Manager , you need to configure additional settings to complete the setup. For more information, refer to STR Online Booking (Pop-Up) , STR Property Marketing Setup (Pop-Up) Short Term Rental (STR) Reservations (System Preferences) , and RV/Campground Online Booking General (System Web Preferences) .

 Check the associated Location Name for each location you wish to allow access to the STR Online Booking portal.
