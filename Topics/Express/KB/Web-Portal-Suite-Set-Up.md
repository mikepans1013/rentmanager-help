# Set Up Web Portal Suite

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Web-Portal-Suite-Set-Up.htm

The Web Portal Suite is a licensed feature that includes Tenant Web Access (TWA) , Owner Web Access (OWA) , and Apply Now . With these features, you have access to an integrated system of web tools that let you work with Rent Manager anywhere, at any time—while also giving your prospects, tenants, and owners access to their accounts online.

 To get the most value out of Web Portal Suite , you need to enable TWA, OWA, and Apply Now .

 Set Up Tenant Web Access

 Tenant Web Access allows tenants to view details of their account, make online payments, submit service tickets, and provide an account on file for ePay payments. Additionally, tenants and prospects can use TWA to sign electronic lease documents.

 To give your tenants and prospects access to important information, you need to enable Tenant Web Access in system web preferences.

 Step 1: Enable Tenant Web Access

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 To enable Tenant Web Access in Rent Manager , do the following:

 -
 Go to   arrow_forward   Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Licensing arrow_forward TWA .

 -
 For each database location that you want to activate TWA, verify, in the Tenant Web Access Usage section, the location is checked.

 -
 After checking the applicable locations, click Save .
Tenants and prospects are now able to access TWA through the following company-specific URL:
 https:// YourCompanyCode .twa.rentmanager.com

 Step 2: Create TWA Accounts

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 Now that Tenant Web Access is enabled, tenants and prospects can create TWA accounts. You can manually create accounts from Rent Manager , or tenants and prospects can create their own accounts in TWA. For more information, refer to Tenant Web Access Accounts (System Web Preferences) .

 More Information

 To make it easier for tenants and prospects to access TWA, you can create a link on your company or property website that allows them to access the portal. Use the following code to embed the link on your website:

 <a href='' YourCompanyCode .twa.rentmanager.com''>Resident Login</a>

 To manually create TWA accounts from Rent Manager , do the following:

 -
 Go to   arrow_forward  Rental Info arrow_forward  General arrow_forward  Tenants or   arrow_forward  Rental Info arrow_forward  General arrow_forward  Prospects and select a tenant or prospect from the list.
The Tenant or Prospect details page displays.

 -
 On the action bar to the right, click arrow_forward TWA Settings .
The Web Access Settings pop-up displays.

 -
 In the Web Users section, click Add Web User .
The Add/Update Web User pop-up displays.

 -
 Enter the tenant's email address in the Email Address field.

 -
 Click Save . Add additional web users as needed.

 -
 On the Web Access Settings pop-up, click Save .
A confirmation email is sent prompting the recipient to create a password for the TWA account.

 Set Up Owner Web Access

 Owner Web Access allows owners to view details of their ownerships, run reports, make contributions, change their OWA password, and set a password recovery email address.

 Related Preferences

 For an owner to use OWA, they must have an active ownership.. If the owner's contract has expired but you want to allow access to OWA after their contract end date, enter the number of Days Active After Contract End in system web preferences. For more information, refer to Owner Web Access General (System Web Preferences) .

 To give your owners access to important information, you need to enable OWA in system web preferences.

 Step 1: Enable Owner Web Access

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To enable Owner Web Access in Rent Manager , do the following:

 -
 Go to   arrow_forward   Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Licensing arrow_forward OWA .

 -
 For each database location that you want to activate OWA, verify that, in the Owner Web Access Usage section, the location is checked.

 -
 After selecting the applicable locations, click Save .
Owners are now able to access OWA through the following company-specific URL: https:// YourCompanyCode .owa.rentmanager.com

 Step 2: Create OWA Accounts

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Owners
 View, Edit

 For more information, refer to Control User Access .

 Now that Owner Web Access is enabled, owners can create OWA accounts. You can manually create accounts from Rent Manager , or owners can create their own accounts in OWA. For more information, refer to Owner Web Access Accounts (System Web Preferences) .

 More Information

 To make it easier for owners to access Owner Web Access , you can create a link on your company or property website that allows them to access the portal. Use the following code to embed the link on your website:

 <a href='' YourCompanyCode .owa.rentmanager.com''>Owner Login</a>

 To manually create Tenant Web Access accounts from Rent Manager , do the following:

 -
 Go to   arrow_forward  Owners arrow_forward  General arrow_forward  Owners and select an owner from the list.
The Owner details page displays.

 -
 On the action bar to the right, go to arrow_forward OWA Settings .
The Web Access Settings pop-up displays.

 -
 In the Web Users section, click Add Web User .
The Add/Update Web User pop-up displays.

 -
 Enter the owner's email address in the Email Address field.

 -
 Click Save .

 -
 If applicable, on the Web Access Settings pop-up, check Override System Defaults to customize what each of your owners can access when they log in to Owner Web Access .

 -
 On the Web Access Settings pop-up, click Save .
A confirmation email is sent prompting the recipient to create a password for the TWA account.

 Set Up Apply Now

 Apply Now automates the process of receiving rental applications, collecting application fees, and screening applicants.

 To begin using Apply Now applications, you need to enable access in system web preferences.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 To enable Apply Now , do the following:

 -
 Go to   arrow_forward   Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Apply Now arrow_forward General .

 -
 Check Enable Apply Now .

 -
 If applicable, customize the settings and verification email for Apply Now applications.

 -
 Click Save .
Applicants are now able to access Apply Now through the following company-specific URL: https:// YourCompanyCode .twa.rentmanager.com/applynow

 Next Steps

 The following settings are not required to complete setup of your web portal suite products, but they may be helpful as you continue to customize your web portal suite tools.

 Setting
 Description

 TWA Page Setup

 Customize which dashboard tiles and messages users see when they log in to their portal. For more information, refer to Tenant Web Access General (System Web Preferences) .

 Issues

 Enable tenants to create issues directly from their Tenant Web Access portal. For more information on how to fully customize issues, refer to Tenant Web Access Service Issues (System Web Preferences) .

 You can also give owners access to view issues from their Owner Web Access portal. For more information, refer to Owner Web Access Service Issues (System Web Preferences) .

 Owner Web Access Privileges

 Give your owners access to reports, ownership information (such as reserves), and finances (such as checks or bills). For more information, refer to Owner Web Access Privileges (System Web Preferences) .

 Application Templates

 Rent Manager has a default application template applicants can fill out through Apply Now . However, you can also create new application templates to fit your business needs.
