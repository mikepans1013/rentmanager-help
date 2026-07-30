# Set Up User Email

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Email-User-Set-Up.htm

If you send emails from Rent Manager using the email setup in system preferences, you can override those settings to display your own email address in personal preferences. You can either set your email address as a mask that displays ahead of the system email address (email@rentmanager.com) or, when using an external server, connect to your email account to use it in place of the system email account. Both options display your correspondence as coming from you and forward replies to your email address.

 The email setup in system preferences determines the email server users must use when adding an email account to personal preferences. For example, if your business's email account uses Gmail, the email account you add in personal preferences must also be through Gmail. In addition, system preferences determine whether features like email reply tracking are used with your emails. Email reply tracking affects if replies to your emails go back to your email account or pull into Rent Manager .

 If your email provider is connected in system preferences using Modern Authentication, you can connect to your individual email account using that provider's connection method and entering your normal username and password for the account. Email providers that are connected through SMTP settings require more information and an app password to connect your individual email account.

 More Information

 The Override system default credentials option that allows users to set up their individual email accounts is available only if, in system preferences, Allow users to enter their credentials in Personal Preferences is checked.

 Likewise, system account details that display are entered in system preferences under Email Settings and can be edited only in system preferences. For more information, refer to Set Up Email and Email Reply Tracking .

 Email Providers Connected Using Modern Authentication

 If you are connected to your email provider using Modern Authentication, you can go to your personal preferences, and, in the email settings, click the provider to follow their steps for connecting your account in Rent Manager .

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward Personal Preferences arrow_forward Email Settings .

 -
 In the Connect to an Email Account section, click on the provider to open a pop-up window that walks you through their authentication process.

 -
 Once you are done with the email provider's authentication process, click Save .
You can now send emails from Rent Manager using your email account.

 Email Providers Connected Using SMTP

 To set up your email account in your personal preferences through SMTP, you must generate an app password in your email client for Rent Manager . Then, enter your email account login using the app password in your personal preferences. The steps below explain the process for obtaining an app password and where to enter your email account information.

 Warning

 To make changes in Rent Manager under system preferences, obtain an app password for your email account, or to troubleshoot issues related to your email account, you may need assistance from your IT representative or administrator.

 Step 1: Generate an App Password from Your Email Client

 To allow Rent Manager to communicate with your email client, you must generate an app password for Rent Manager . An app password is a unique account password that provides a secure way to give outbound email access without requiring a personal password.

 The steps to generate an app password vary depending on your email provider and, in some cases, your account type. Below are popular email clients with links to provider-created articles for generating app passwords.

 Email Client
 Resource

 Gmail

 https://support.google.com/accounts/answer/185833

 GoDaddy

 https://pk.godaddy.com/help/create-app-passwords-40980

 Outlook 365

 https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944

 Yahoo Mail

 https://help.yahoo.com/kb/new-mail-for-desktop/generate-manage-third-party-passwords-sln15241.html

 Step 2: Update Personal Email Settings in Rent Manager

 In your personal preferences, you can enter your email account information to use your email address when you send emails. An app password and your email account credentials are required to complete this step. These settings also determine what information you want to display on your emails.

 To set up or update your personal email settings, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward Personal Preferences arrow_forward Email Settings .

 -
 In the Email Credentials section, and in the Connected to system account field, confirm the correct provider SMTP server displays.

 -
 Check Override system default credentials .

 -
 In the Username field, enter the username for the email account. This is typically the email address.

 -
 In the Password field, enter the app password generated by your email client. The app password must be for the same email account as the Username field.

 -
 In the Email Options section, enter the Default From Name you want displayed on your emails.

 -
 In the Default From Email field, enter the email address you want displayed on your emails.

 More Information

 The Default From Name and Default From Email fields display on your emails, like in the example below. The email address displayed may differ based on your setup in system preferences for email settings, but it still directs replies to your email address.

 -
 Click Save .
You can now send emails from Rent Manager using your email account.

 Next Steps

 At this point, you can start sending emails using your email account in Rent Manager . Go to arrow_forward Communication arrow_forward Email arrow_forward Email Center to view received emails or send additional correspondence.
