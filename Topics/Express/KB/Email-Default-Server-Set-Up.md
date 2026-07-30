# Set Up Email Using Rent Manager's Default Mail Server

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Email-Default-Server-Set-Up.htm

Rent Manager offers powerful tools for managing email correspondence that you control through your settings. If you set up the Rent Manager -provided email server to send emails, emails send from email@rentmanager.com . This option works well for sending correspondence like localized maintenance notices or community newsletters that do not require a response.

 If you want emails from Rent Manager to display your email address or receive replies, you can mask email@rentmanager.com with your email address so replies are rerouted to that same email address. Alternatively, you can use an external email server to send and receive emails in Rent Manager . For more information about using an external email server, refer to Set Up Email and Email Reply Tracking .

 To use the Rent Manager -provided email server, other email setups must be disconnected. The steps to set up your system preferences, how this affects your email correspondence, and alternative options are detailed below.

 Set Up the Default Mail Server

 The Rent Manager -provided email server, mail.rentmanager.com, is the default server selected for any new databases or locations. Rent Manager manages this email account and server, so an external email account is not required.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set up the default email server, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Email Settings .

 -
 If you are connected to an external email provider, click Disconnect .

 -
 Optionally, select Send emails as .html by default to format emails as HTML instead of basic text. HTML adds the ability to include images, styles, and colors in emails, whereas plain text emails contain no media or formatting.

 -
 Optionally, in the Default From Email field, enter the email address you want to display on all emails sent from Rent Manager .

 More Information

 Changing the displayed email address is referred to as masking the email. Masked emails still send from the email account email@rentmanager.com but display the entered email address to recipients and reroute replies to that email. On open emails, the email@rentmanager.com email address is visible after the masking address.

 Alternatively, you can mask emails per user through personal preferences or on each individual email. If you use either of the alternatives, the masking email you enter is used instead of the Default From Email field.

 Mask emails per
 Description

 User

 In personal preferences, under Email Settings , locate the Default From Email field. For more information, refer to Set Up User Email .

 Email

 Each email contains its own From Address field at the top to enter or change the email address as necessary. For more information, refer to Send an Email .

 -
 Click Save .
 Rent Manager is set up to use the default mail server for sending emails.

 Next Steps

 At this point, you can send emails directly from Rent Manager . To start sending emails, go to arrow_forward Communication arrow_forward Email arrow_forward Email Center to view received emails or send additional correspondence. For more information, refer to Email Center (Page) .

 If you or other Rent Manager users want to set up individual email accounts in Rent Manager , you can enter your email information in personal preferences. For more information, refer to Set Up User Email .
