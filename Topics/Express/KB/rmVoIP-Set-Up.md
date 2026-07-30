# Set Up rmVoIP for Rent Manager

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/rmVoIP-Set-Up.htm

rmVoIP is a business class phone system that fully integrates with Rent Manager , allowing you to make and receive Net Dial Tone (NDT) calls directly through the Rent Manager . Once the integration is set up, it provides you with relevant caller information to support your calls in real time, and Rent Manager maintains those details in call records.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 To make use of the rmVoIP integration, it first needs to be enabled in Rent Manager and then users need to be provided access and set up with their rmVoIP extension.

 Step 1: Set Up rmVoIP Users

 Each company representative that needs rmVoIP access must have a Rent Manager user account, extension, and applicable privileges enabled.

 Add an rmVoIP Extension

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To set up rmVoIP for individual users, do the following:

 -
 Go to   arrow_forward   Administration , then go to Users arrow_forward Users and select a user account.
The user's details page displays.

 -
 On the Contact Information tile in the rmVoIP Extension field, add the user's extension number.

 More Information

 The Phone field is for personal numbers and is not tied to the rmVoIP system.

 -
 Click Save .
The user's rmVoIP extension is saved.

 Set User Privileges

 After establishing the user's extension, you can give the user the ability to place phone calls, view other user's missed calls, and access other tools related to rmVoIP . To set up user privileges, do the following:

 -
 From the user's details page, select the Privileges tab.

 -
 Expand the Phone System privilege group.

 -
 Select any privileges you need for the user.

 Privilege
 Description

 Allow user to edit their own rmVoIP settings

 Allows a user to control their rmVoIP personal preferences. The user may choose whether to show incoming calls, hunt group calls, and users' extensions in the Presence list in Rent Manager 12 .

 Listen to recorded calls

 Allows a user to access phone conversations and voicemail messages through the History/Notes tab of the associated accounts.

 More Information

 All saved audio recordings are stored as WAV files on the LCS servers. At any time, you may retrieve recorded calls and voicemails through Rent Manager by having Rent Manager send you an email that includes an attached copy of the recorded call.

 Place Calls

 Allows a user to place calls to other rmVoIP phone extensions or to phone numbers entered into Rent Manager .

 View rmVoIP  Dashboard Tiles

 Allows a user to view the rmVoIP Current Caller List and rmVoIP Extension Statistics tiles on their dashboard.

 View/Link other users' missed calls

 Allows a user to view, link, or delete calls in the rmVoIP Missed/Unlinked Calls page associated with other user accounts/extensions. Without this permission, users may only view, link, or delete calls associated with their personal rmVoIP extension.

 -
 Click Save .
The user's privileges are saved.

 Provide Access to rmVoIP Reports

 After you set up user privileges, you can give the user access to rmVoIP reports.

 To provide access to rmVoIP reports, do the following:

 -
 Select the Reports tab.

 -
 Expand the rmVoIP Reports group.

 -
 Select the reports you want the user to have access to.

 -
 Click Save .
The user's report access is saved.

 Related Privileges

 In addition to the specific report access, users still require the privilege to run reports.

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 For more information, refer to Control User Access .

 Step 2: Enable rmVoIP

 Before users can use rmVoIP in Rent Manager , it first needs to be enabled in system preferences.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To enable the rmVoIP integration, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward rmVoIP .

 -
 In the rmVoIP Connection Setup section, enter the Username and Password for your rmVoIP account.

 -
 Click Test Settings to test the connection to your rmVoIP account.
The rmVoIP Connection Test pop-up displays.

 -
 Click OK to close the pop-up.

 -
 Check Enabled .

 -
 If you have purchased additional locations that use their own set of credentials to access rmVoIP , check Use different credentials in other locations .

 -
 In the Default User Settings section, select the options you want to enable for your users.

 Option
 Description

 Show incoming Calls

 An rmVoIP incoming call notification displays when receiving calls in Rent Manager .

 Show extensions in presence listing

 Includes each user's extension number when viewing phone presence in Rent Manager 12 .

 -
 Click Save .
The Connection Status is updated to Connected and rmVoIP is enabled.

 Next Steps

 At this point you can start calls from Rent Manager and can run reports to help track calls. Users can also change their rmVoIP default settings through personal preferences. For more information, refer to the steps in the table below.

 Step
 Description

 Set Up Personal rmVoIP Settings

 Your personal rmVoIP settings allow you to customize how calls are handled while you're logged in to Rent Manager . For more information, refer to rmVoIP Preferences (Personal Preferences) .

 Set Up rmVoIP for rmAppSuite Pro

 rmVoIP integrates seamlessly into rmAppSuite Pro , the mobile app that allows you to take Rent Manager in the field. For more information, refer to Set Up rmVoIP for rmAppSuite Pro .

 Start a Call from Rent Manager

 Users can quickly make calls in Rent Manager from many places, including directly from an entity's details page. You can start a call by navigating to the entity you wish to contact, then click . Depending on your phone configuration, the hard or soft phone prompts you to pick up, at which point the call dials out.

 When the call ends, Rent Manager automatically creates a history/note item on that entity with the type rmVoIP . If you have purchased the call recording feature, a recorded audio file is attached to the history/note item. If you send the item as an email, the audio file is included as an attachment on the email.
