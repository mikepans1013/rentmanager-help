# Set Up Email and Email Reply Tracking

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Email-Set-Up.htm

Rent Manager offers powerful tools for managing email correspondence, such as using your business email to send correspondence and email reply tracking. Email reply tracking affects if replies to your emails go back to your email account or pull into Rent Manager .

 These tools require Rent Manager to communicate with the external server that your email client—the program or website you send and receive emails through, like Gmail or Outlook—uses to send and receive emails for your email account (i.e., your email login). Some email providers, like Microsoft, can be connected through Modern Authentication, which follows the provider's authentication process to connect your account to Rent Manager .

 You can connect to some providers using Modern Authentication, which uses that provider's connection method and allows you to enter your normal username and password for the account. Alternatively, you can connect to other external email providers through SMTP settings, which require more information and an app password if you want to connect an email account as the system default.

 Connect Using Modern Authentication

 To connect to your email provider using Modern Authentication, you can go to your system preferences, and, in the email settings, click the provider to follow their steps for connecting a default account and email server in Rent Manager .

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Email Settings .

 -
 In the Connect to an Email Account section, click on the provider to open a pop-up window that walks you through their authentication process.

 -
 Once you are done with the email provider's authentication process, select any Email Options you want to use.

 Setting

 Description

 Allow users to enter their credentials in Personal Preferences

 Check to allow users to set up their own From name and email address, username, and password. This option is available only when using any email provider other than the Rent Manager default email provider.

 Related Preferences

 With this option checked in personal preferences, users can override the email settings established in system preferences. This includes personalizing email signature and subject lines and connecting a personal email account, which displays during correspondence and redirects replies to that account. For more information, refer to Email Settings (Personal Preferences) .

 Enable email reply tracking

 Check to allow tracking of email replies sent by Rent Manager entities such as prospects, tenants, and owners. These emails and replies are stored in Rent Manager . This option is available only when using any email provider other than the Rent Manager default email provider.

 Send emails as .html by default

 Formats emails as HTML instead of basic text. HTML adds the ability to include images, styles, and colors in emails, whereas plain text emails contain no media or formatting.

 -
 Click Save .
You can now send emails from Rent Manager through your email server and receive direct replies to those emails in Rent Manager .

 Connect Using SMTP

 To set up communication with external email providers using SMTP, you need to obtain your provider's specific SMTP settings. Additionally, if you want to set up a default email account for Rent Manager , you must generate an app password in your email client specifically for Rent Manager . Entering this information allows Rent Manager to send emails through your email client and import any replies to those emails into Rent Manager . The steps below explain the process for obtaining an app password and where to enter your email account information.

 Warning

 To obtain an app password for your email account or to troubleshoot issues related to your email account, you may need assistance from your IT representative or administrator.

 Step 1: Generate an App Password from your Email Client

 To allow Rent Manager to communicate with your email client, you must generate an app password. An app password is a unique account password that provides a secure way to give outbound email access without requiring a personal password.

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

 Step 2: Update Email Settings in Rent Manager

 Once you have an app password for the email account you want to use in Rent Manager , follow the steps below to add the account and enable email reply tracking.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Email Settings .

 -
 In the Connect to An Email Account section, click Connect to SMTP Provider .

 -
 In the SMTP Provider Information section, enter the Mail Server (SMTP) for your email provider.

 More Information

 Your email provider may be different from your email client. For example, you may use GoDaddy as your email provider, but use Outlook for your email client.

 Email Provider
 Mail Server (SMTP)

 GoDaddy

 smtpout.secureserver.net

 Google

 smtp.gmail.com

 Microsoft

 smtp.office365.com

 More Information

 The above mail server works for most of the Microsoft-owned email provider services (i.e., Microsoft 365, Outlook, Hotmail, and Live.com). However, if your account is with MSN, then you must use the following mail server: smtp-mail.outlook.com

 Yahoo

 smtp.mail.yahoo.com

 -
 Enter the Mail Port (SMTP) for your email provider. The standard mail port for SMTP is 587 . The port defines a direction for the data being transferred.

 More Information

 In the rare occurrence that port 587 does not work, try using mail port 2525 . You may need assistance from your IT representative or administrator to test your port connection using the telnet command in the Windows or Mac operating systems.

 -
 Check Enable Encryption (via STARTTLS) to allow Rent Manager to confirm support for data encryption when sending emails. This uses a security protocol when transferring emails to help protect your email's contents during transit. Most email providers require security protocol support when sending or receiving emails.

 -
 Check Enable SMTP Authentication to enter an email account as your system default for emails from Rent Manager .

 -
 In the Username field, enter the username for the email account. This is typically the email address.

 -
 In the Password field, enter the app password generated by your email client. The app password must be generated for the same email account used in the Username field.

 -
 Optionally, check Allows user to enter their credentials in Personal Preferences if you plan on other users setting up their own email accounts.

 Related Preferences

 With this option checked in personal preferences, users can override the email settings established in system preferences. This includes personalizing email signature and subject lines and connecting a personal email account, which displays during correspondence and redirects replies to that account. For more information, refer to Email Settings (Personal Preferences) .

 -
 Check Enable email reply tracking .
You can now send emails from Rent Manager through your email server and receive direct replies to those emails in Rent Manager .

 Next Steps

 At this point your external email account is set up in Rent Manager , email reply tracking is enabled for outbound emails, and you can receive responses to those emails. Go to arrow_forward Communication arrow_forward Email arrow_forward Email Center to view received emails or send additional correspondence.

 Helpful Resources for Troubleshooting

 Depending on your email account settings, additional setup or information outside of Rent Manager may be required. Most commonly, issues arise with SMTP settings (the details from your email client in system preferences) and the SPF record (the mail servers and domains that are allowed to send emails on your behalf). Below are links for troubleshooting these issues for different email providers.

 Email Provider
 Resource

 GoDaddy

 SMTP Settings:
 https://www.godaddy.com/en-ph/help/set-up-third-party-plugins-or-websites-using-smtp-settings-42788

 SPF Record:
 https://www.godaddy.com/help/use-spf-records-to-prevent-spoofing-and-ensure-mail-delivery-40499

 Google

 SMTP Settings:
 https://support.google.com/mail/answer/7126229

 SPF Record:
 https://support.google.com/a/answer/10685031#more-senders

 Microsoft 365

 SMTP Settings:
 https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-8361e398-8af4-4e97-b147-6c6c4ac95353

 SPF Record:
 https://learn.microsoft.com/en-us/microsoft-365/security/office-365-security/email-authentication-spf-configure?view=o365-worldwide

 Yahoo

 SMTP Settings:
 https://help.yahoo.com/kb/new-mail-for-desktop/imap-server-settings-yahoo-mail-sln4075.html

 SPF Record:
 https://senders.yahooinc.com/faqs
