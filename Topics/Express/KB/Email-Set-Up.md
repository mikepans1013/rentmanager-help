# Set Up Email and Email Reply Tracking

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Email-Set-Up.htm

Rent Manager offers powerful tools for managing email communications, such as using your business email to send correspondence and email reply tracking. Email reply tracking affects if replies to your emails go back to your email account or pull into Rent Manager . These tools require Rent Manager to communicate with the external server that your email client (e.g., Gmail, Outlook) uses to send and receive emails for your email account. Some email providers, like Microsoft or Google, can be connected through Modern Authentication, which follows the provider's authentication process to connect your account to Rent Manager .

 Alternatively, you can connect to other external email providers through Simple Mail Transfer Protocol (SMTP) settings, which require more information and an app password if you want to connect an email account as the system default.

 Option 1: Connect Using Modern Authentication

 To connect to your email provider using Modern Authentication, you can go to your system preferences, and, in the email settings, click the provider to follow their steps for connecting a default account and email server in Rent Manager .

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Email Settings .

 -
 In the System Email Account section, click either the Microsoft or Google provider.
An authentication pop-up displays.

 -
 Complete the email provider's authentication process in the pop-up.

 -
 After the authentication pop-up closes, in the Other Email Options section, the following settings are available:

 Setting

 Description

 Allow users to add an email account in Personal Preferences

 Check to allow users to set up their own from name and email address, username, and password. This option is available only when using any email provider other than the Rent Manager default email provider.

 Related Preferences

 With this option checked in personal preferences, users can override the email settings established in system preferences. This includes personalizing email signature and subject lines and connecting a personal email account, which displays during correspondence and redirects replies to that account. For more information, refer to Email Settings (Personal Preferences) .

 Enable email reply tracking

 Check to allow tracking of email replies sent by Rent Manager entities such as prospects, tenants, and owners. These emails and replies are stored in Rent Manager . This option is available only when using any email provider other than the Rent Manager default email provider.

 -
 Click Save .
You can now send emails from Rent Manager through your email server and receive direct replies to those emails in Rent Manager .

 Option 2: Connect Using SMTP

 To set up communication with external email providers using SMTP, you need to obtain your provider's specific SMTP settings. Additionally, if you want to set up a default email account for Rent Manager , you must generate an app password in your email client specifically for Rent Manager . Entering this information allows Rent Manager to send emails through your email client and import any replies to those emails into Rent Manager . The steps below explain the process for obtaining an app password and where to enter your email account information.

 Warning

 To obtain an app password for your email account or to troubleshoot issues related to your email account, you may need assistance from your IT representative or administrator.

 Step 1: Generate an App Password from Your Email Client

 To allow Rent Manager to communicate with your email client, you must generate an app password. An app password is a unique account password that provides a secure way to give outbound email access without requiring a personal password.

 The steps to generate an app password vary depending on your email provider and, in some cases, your account type. Below are popular email clients with links to provider-created articles for generating app passwords.

 Email Client
 Resource

 GoDaddy

 Create app passwords

 Yahoo Mail

 Generate and manage 3rd-party app passwords

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
The System Preferences: Email Settings page displays.

 -
 In the System Email Account section, click Connect to SMTP Provider .
The SMTP Information pop-up displays.

 -
 In the Mail Server (SMTP) field, enter the mail server address for your email provider.

 More Information

 Your email provider may be different from your email client. For example, you may use GoDaddy as your email provider, but use Outlook for your email client.

 Email Provider
 Mail Server (SMTP)

 GoDaddy

 smtpout.secureserver.net

 Yahoo

 smtp.mail.yahoo.com

 -
 In the Mail Port (SMTP) field, enter the mail port number for your email provider. The standard mail port for SMTP is 587 . The port defines a direction for the data being transferred.

 More Information

 In the rare occurrence that port 587 does not work, try using mail port 2525 . You may need assistance from your IT representative or administrator to test your port connection using the telnet command in the Windows or Mac operating systems.

 -
 To allow Rent Manager to confirm support for data encryption when sending emails, check Enable encryption (via STARTTLS) . This uses a security protocol when transferring emails to help protect your email's contents during transit. Most email providers require security protocol support when sending or receiving emails.

 -
 To enter an email account as your system default for emails from Rent Manager , check Enable SMTP Authentication . Then enter the credentials below.

 Field
 Description

 Username

 The username for the email account. This is typically the email address.

 Password

 The app password generated by your email client. The app password must be generated for the same email account used in the Username field.

 -
 Test your SMTP connection by entering a recipient email address in the Test Connection Email field. Then, click Test Connection . If successful, the test email is sent to the inbox of the email address entered in this field.

 -
 For email accounts or servers that require third-party connections to be passed through a proxy server instead of connecting to them directly, check Use Proxy from internet access in Rent Manager . Then, enter the Proxy Server and Proxy Port number provided by your IT representative or administrator. For more information, refer to Email Settings (System Preferences) .

 -
 Click Save .
The SMTP Information pop-up closes.

 -
 In the Other Email Options section, the following settings are available:

 Setting

 Description

 Allow users to add an email account in Personal Preferences

 Check to allow users to set up their own from name and email address, username, and password. This option is available only when using any email provider other than the Rent Manager default email provider.

 Related Preferences

 With this option checked in personal preferences, users can override the email settings established in system preferences. This includes personalizing email signature and subject lines and connecting a personal email account, which displays during correspondence and redirects replies to that account. For more information, refer to Email Settings (Personal Preferences) .

 Enable email reply tracking

 Check to allow tracking of email replies sent by Rent Manager entities such as prospects, tenants, and owners. These emails and replies are stored in Rent Manager . This option is available only when using any email provider other than the Rent Manager default email provider.

 -
 Click Save .
You can now send emails from Rent Manager through your email server and receive direct replies to those emails in Rent Manager .

 Next Steps

 At this point your external email account is set up in Rent Manager , email reply tracking is enabled for outbound emails, and you can receive responses to those emails. Go to arrow_forward Communication arrow_forward Email arrow_forward Email Center to view received emails or send additional correspondence.

 Helpful Resources for Troubleshooting

 Depending on your email account settings, additional setup or information outside of Rent Manager may be required. Most commonly, issues arise with SMTP settings (the details from your email client in system preferences) and the SPF record (the mail servers and domains that are allowed to send emails on your behalf). Below are links for troubleshooting these issues for different email providers.

 Email Provider
 Resource

 GoDaddy

 SMTP Settings

 SPF Record

 Yahoo

 SMTP Settings

 SPF Record
