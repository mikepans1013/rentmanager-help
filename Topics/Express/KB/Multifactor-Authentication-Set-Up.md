# Multifactor Authentication (MFA)

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Multifactor-Authentication-Set-Up.htm

Maintaining a secure environment for your data is one of Rent Manager 's top priorities. With multifactor authentication, you can make your database even more secure. Multifactor authentication requires users to verify their identity using a third-party authenticator application before they can log in. Users may choose any authenticator application of their choice, such as Google Authenticator or Microsoft Authenticator.

 Authenticator Apps

 In order to log in using multifactor authentication, you need an authenticator app to connect to your account and provide a numerical passcode that is entered when you log into Express . The passcode changes in the app at regular intervals to ensure that it is unique at the time of login. You can obtain an authenticator app, such as Google Authenticator or Microsoft Authenticator, on your mobile device's app store.

 Authenticator App
 Resource

 Google Authenticator

 https://support.google.com/accounts/answer/1066447

 Microsoft Authenticator

 https://support.microsoft.com/en-US/authenticator/about-microsoft-authenticator

 Enable Multifactor Authentication

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Multifactor authentication is not enabled by default and must be enabled before it can be used on your database. This option must be enabled from your database's default location and applies to all of your locations. For more information, refer to General Options (System Preferences) .

 Warning

 Once enabled, users across all your database locations are required to use an authenticator app to log in to Rent Manager . This change is effective immediately, so it is recommended that you speak to your team about this change before enabling the setting. For more information, refer to Manage Locations (Pop-Up) .

 To enable multifactor authentication, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward General .

 -
 In the General section, enable Require Multifactor Authentication (MFA) to log in .

 -
 Click Save .
Multifactor authentication is enabled for all of your database locations and is required to log in.

 Connect an Authenticator App

 Once multifactor authentication is enabled, the next time any user attempts to log in, the Enable Multifactor Authentication pop-up displays. To connect your user account to the authenticator app, you can open the authenticator app, select the option to add a new connection, and follow the on-screen prompts. You can either scan the QR code displayed or use the Click here link to display the code to be entered into the app manually if you do not have the option to scan.

 Log In with an Authenticator Code

 After you connect your authenticator app to your user account, and every time you log in after, the MFA Security Code pop-up displays requesting the code from your authenticator app. Once you enter the code, press OK to log in.
