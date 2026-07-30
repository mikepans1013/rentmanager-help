# Link to Tenant Web Access (TWA)

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/TWA-Send-Link.htm

If you use Tenant Web Access (TWA) , you provide your tenants and prospects with a website URL to access the TWA portal. You can use the system-default URL or create a customized URL to meet your business's unique needs.

 Create Default TWA Link

 The default link to TWA allows tenants and prospects to access their portal, make payments, submit service requests, and more. If you have multiple locations, the tenant must select the correct location from a drop-down list. To send a default link, use the following formula:

https:// YourCompanyCode .twa.rentmanager.com

 Replace the red text in the link with your company's Company Code . This is the unique identifier used to distinguish your database from other companies that use Rent Manager . You can find your Company Code at the top right of Rent Manager .

 Create Custom TWA Link

 More Information

 If you have enabled the system web preference Require Locations to be passed in website address (URL) , refer instead to Create Custom TWA URLs for Rent Manager Locations .

 Rent Manager allows you to add parameters to the URL to further determine how the TWA portal displays. If your company uses locations, you can add the name of the selected location to your TWA link. This enables you to direct tenants and prospects to the login page with the appropriate location selected.

 To specify a location in the URL, use the following formula:

 https:// YourCompanyCode .twa.rentmanager.com/?LocationID= LocationName

 Replace the red text with your data as described below:

 Text
 Description

 LocationName

 The name of the database location that you want selected automatically on the TWA login page when using this URL. For more information, refer to Manage Locations (Pop-Up) .

 More Information

 If your location name includes spaces, you must replace the spaces with %20 in the LocationName portion of the URL. For example, a company code of RPM-123 and a location name of Riverview Management Residential would be entered in the URL as follows:

 https://RPM-123.twa.rentmanager.com?Locations=Riverview%20Management%20Residential

 YourCompanyCode

 The database-specific code assigned to your company, located at the top of Rent Manager Express in the Company Code field.
