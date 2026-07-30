# Create Custom TWA URLs for Rent Manager Locations

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/TWA-Location-URL-Create.htm

If you have more than one database location and the system web preference to Require Locations to be passed in website address (URL) is not enabled, the Tenant Web Access (TWA)  login page displays all of your locations for tenants to select from. To control which locations your tenants see on the TWA login page, you can activate this system web preference and create custom URLs to send to tenants. For example, if you use separate locations to manage different types of properties, such as one for commercial, one for residential, and one for residential with associations, you can use custom URLs to choose which locations tenants see on the TWA login page.

 More Information

 Locations is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Related Preferences

 To create custom URLs, you must enable the system web preference to Require Locations to be passed in website address (URL) . For more information, refer to Licensing (System Web Preferences) .

 Information You Need

 To create a custom TWA URL, you need the following information:

 URL Component
 Description

 Company Code

 Your company code is a unique identifier for your Rent Manager database.

 To find your company code, click the Settings/Logout button in the top-right and select Software and Licensing Info . The Company Code is listed on the General tab.

 Location Name

 Related Privileges

 Group
 Privilege
 Column

 Locations
 Locations
 View

 For more information, refer to Control User Access .

 The name of the database location.

 To find your location names, go to Administration arrow_forward Locations arrow_forward Manage Locations .

 TWA URL Customization Options

 When you know the company code and location name, use the following URL template to create your custom TWA URL, replacing the red text with your own company code and location name:

 https:// CompanyCode .twa.rentmanager.com?Locations= LocationName

 More Information

 If your location name includes spaces, you must replace the spaces with %20 in the LocationName portion of the URL. For example, a company code of RPM-123 and a location name of Riverview Management Residential would be entered in the URL as follows:

 https://RPM-123.twa.rentmanager.com?Locations=Riverview%20Management%20Residential

 You can further customize the URL to meet various business needs.

 Use One URL for Multiple Locations

 You can include multiple locations in one URL by listing each location you want to display. For example, if you have three locations but you only want tenants to be able to select from two on TWA, you can use this custom URL to display only the two locations.

 To use one URL for multiple locations, use the following template:

 https:// CompanyCode .twa.rentmanager.com?Locations= LocationName , LocationName

 More Information

 Separate each location name with a comma (,).

 Set the Location That Displays on the TWA Login Screen by Default

 If you want to use one URL for multiple locations, you can also choose which location is selected by default on the login screen. Other locations listed in the URL can still be selected from the drop-down. For example, if most of your tenants use one location but a few use another, you can make the more populated location the default to make it easier for most tenants to log in.

 To set the location displayed by default, use the following template, replacing the last LocationName with the name of the location that you want to display first:

 https:// CompanyCode .twa.rentmanager.com?Locations= LocationName , LocationName &LocationID= LocationName

 More Information

 Separate each parameter with an ampersand (&).

 Customize the TWA Portal Name

 The name you set in this parameter replaces the word tenant in the Tenant Web Access login header. For example, if you refer to your residential renters as residents , you can use this parameter to change the portal login header to Resident Web Access .

 To change the TWA portal name using a custom URL, use the following template, replacing TitleText with the word or phrase you want to use instead of tenant :

 https:// CompanyCode .twa.rentmanager.com?Locations= LocationName &Title= TitleText

 More Information

 Changing the TWA landing page header with a custom URL only sets the header on the login page. For more information on how to apply this change to all of TWA, refer to Tenant Web Access Site Header (System Web Preferences) .
