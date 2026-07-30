# Generate and Distribute Letters from Templates

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Letters-Generate-Distribute-Templates.htm

Letter templates can be used to generate account-specific letters for any entity (e.g., tenants, issues, vendors). After those letters are generated, you can distribute them to their recipients using a variety of methods, such as email and physically printing the letters. These letters can also be retained in the history/notes of each entity's account and saved to your computer. For more information, refer to Letter/Email Templates (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View

 Entity templates/packets
 View

 Entity -specific templates/packets privileges must be enabled for each letter template type you wish to generate (e.g., Owner templates/packets ).

 For more information, refer to Control Letter / Email Template Access .

 Step 1: Generate Letters

 You can generate letters from letter templates by going to a specific entity-type page (e.g., Tenants , Properties , Vendors , etc.) that lists all entities of that type. This allows you to generate and send letters to multiple recipients at the same time. If you are generating a letter for a single entity, you can create a letter for just that entity from the entity-type page or by opening its details page.

 Each option is described below.

 Option 1: Entity-Type Page

 To generate letters from an entity-type page, do the following:

 -
 Go to the desired entity-type page. Letter templates can be generated from the following pages:

 Page
 Navigation Path

 Assets

 arrow_forward Rental Info arrow_forward General arrow_forward Assets

 Issues

 arrow_forward Services arrow_forward Service Manager arrow_forward Issues

 Jobs

 arrow_forward Accounting arrow_forward General arrow_forward Jobs

 Related Preferences

 In order to generate letters for jobs in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Owners

 arrow_forward Owners arrow_forward General arrow_forward Owners

 Owner Prospects

 arrow_forward Owners arrow_forward General arrow_forward Owner Prospects

 Properties

 arrow_forward Rental Info arrow_forward General arrow_forward Properties

 Prospects

 arrow_forward Rental Info arrow_forward General arrow_forward Prospects

 Tenants

 arrow_forward Rental Info arrow_forward General arrow_forward Tenants

 Unit

 arrow_forward Rental Info arrow_forward General arrow_forward Units

 Vendors

 arrow_forward Rental Info arrow_forward General arrow_forward Units

 Violations

 arrow_forward Rental Info arrow_forward General arrow_forward Violations

 -
 On the entity for which you are generating the letter, click arrow_forward Write Letters .
The Write Letters pop-up displays.

 -
 From the drop-down list, select a letter template.

 -
 Click Continue .
The letter is generated and displays on a new page.

 -
 To select multiple entities, click Bulk Actions arrow_forward Write Letters , select a template, and check the box next to each entity. When finished, select a format from the drop-down list and click Write Letter .
The letter is generated and displays on a new page.

 More Information

 It is not possible to generate letters in bulk from the Jobs page.

 Option 2: Entity Details Page

 To generate a letter from a single entity's details page, do the following:

 -
 Go to the desired entity-type page. Letter templates can be generated from the following entity details pages:

 Page
 Navigation Path

 Assets

 arrow_forward Rental Info arrow_forward General arrow_forward Assets

 Issues

 arrow_forward Services arrow_forward Service Manager arrow_forward Issues

 Jobs

 arrow_forward Accounting arrow_forward General arrow_forward Jobs

 Related Preferences

 In order to generate letters for jobs in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Owners

 arrow_forward Owners arrow_forward General arrow_forward Owners

 Owner Prospects

 arrow_forward Owners arrow_forward General arrow_forward Owner Prospects

 Properties

 arrow_forward Rental Info arrow_forward General arrow_forward Properties

 Prospects

 arrow_forward Rental Info arrow_forward General arrow_forward Prospects

 Tenants

 arrow_forward Rental Info arrow_forward General arrow_forward Tenants

 Unit

 arrow_forward Rental Info arrow_forward General arrow_forward Units

 Vendors

 arrow_forward Rental Info arrow_forward General arrow_forward Units

 Violations

 arrow_forward Rental Info arrow_forward General arrow_forward Violations

 -
 Click the entity for which you are generating the letter.
The entity's details page displays.

 -
 Click and select the desired letter template from the list.
The letter is generated and displays in the Compose Letter pop-up.

 Step 2: Distribute Letters

 After generating the letter(s), you need to choose the method of distribution. This process differs based on whether you generated a letter from an entity-type page or an entity's details page. When a single letter is generated, it displays in an editor instead of a PDF.

 Option 1: Entity-Type Page

 At the bottom left of the page, select one of the available options.

 Option
 Description

 Print

 To print a physical copy of the letters, click Print then select one of the available options for adding a history/note item and click Save . Each option is described below.

 Don't add to history

 A history/note item is not created for the document.

 Add note to history

 A history/note item is created to indicate that the document was sent.

 When this option is selected, the pop-up expands. In the History Category drop-down list, choose a history category to associate with this note. In the Note field, enter an optional description of this note.

 Add note and attach document to history

 A history/note item is created with the document attached in the selected Format .

 When this option is selected, the pop-up expands. In the History Category drop-down list, choose a history category to associate with this note. In the Note field, enter an optional description of this note.

 Email

 Related Privileges

 Group
 Privilege
 Column

 System
 Compose Email
 Enabled

 For more information, refer to Control User Access .

 To email the letter to the recipients, do the following:

 -
 Click Email .

 -
 From the menu, select the desired entity to receive the email (e.g., Tenants or Owners ). Alternatively, click Single Recipient to send the letter to an external email address.
The Bulk Email Letters pop-up displays.

 -
 At the top of the pop-up, enter the following information:

 Field
 Description

 From Name

 The sender's name that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences. For more information, refer to Email Settings (System Preferences) and Email Settings (Personal Preferences) .

 From Address

 The email address from which the message is sent that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences.

 More Information

 In system preferences, if the Default (mail.rentmanager.com) mail server is selected, all emails send from email@rentmanager.com . When the email is sent, it displays the entered From Address to recipient(s) and reroutes replies to that email address.

 If you have established settings for an External Server in system preferences, emails send from the address entered in this field. For more information, refer to Email Settings (System Preferences) .

 -
 In the Settings/Options section, to create a history/note item for each recipient that you send the email to, select Add to History .

 More Information

 In order to add a history/note item to an entity, your user account must have the Add privilege enabled for the relevant entity type (e.g., Owner History/Notes ) in the History privilege group. For more information, refer to History Privilege Group .

 -
 In the Addressee List section, select the Contacts to Include . Select Primary to only include primary accounts, or select Contact Types to choose relevant contact types to include.

 -
 In the Message section, enter the following information:

 Field
 Description

 Subject

 The subject line that displays for the recipient.

 Attached File Name

 The name of the file containing your generated letter that is attached to the email.

 Attachments

 To attach any additional files or documents in this email, click Upload Files

 Body

 The text to display in the body of the email. Alternatively, click Insert Email Template and select a template to use as the body.

 -
 Click Next .
The Bulk Email Letters - Preview page displays the emails for each recipient, including any scripting.

 -
 Make any necessary edits to the individual letters.

 -
 Click Send All .
The letter is sent to the selected recipient(s).

 Download

 To download the letter as a document, click arrow_forward Download . The file saves to your device's default downloads folder.

 Attach to History

 To create a history/note item with the document attached, do the following:

 -
 Click arrow_forward Attach to History .
The Add to History pop-up displays.

 -
 Select a History Category from the drop-down list.

 -
 Enter an optional Note to provide additional information about this history/note item.

 -
 Click Save .
A history/note item with the document attached is created for the selected entities.

 VPO

 To distribute the letter via Virtual Post Office (VPO) , click arrow_forward VPO . Letters distributed with Virtual Post Office do not need an address.

 Option 2: Entity Details Page

 At the top left of the Compose Letter pop-up, click File to open a drop-down list of options.

 Option
 Description

 Save As...

 You can use the Save As... option to download the letter as a document. This allows you to access and send the letter outside of Rent Manager . To download the letter as a document, do the following:

 -
 Click Save As...
The Download Document pop-up displays.

 -
 Enter the File Name .

 -
 Select a File Format from the drop-down list.

 -
 Click Save .
The file saves to your device's default downloads folder.

 Print

 If you need to send the letter via post office or you need to provide the entity with a physical copy, click Print to send the generated letter to your local printer. This option opens the print controls set in your web browser that you are using to access Rent Manager .

 Email

 Related Privileges

 Group
 Privilege
 Column

 System
 Compose Email
 Enabled

 For more information, refer to Control User Access .

 To email the letter to a recipient, do the following:

 -
 Click Email .
The Attach to Email pop-up displays.

 -
 Enter the File Name for the letter being attached to the email.

 -
 Select the File Format for how the attachment displays to the recipient when downloaded.

 -
 Click Save .
The Send Email page displays.

 -
 At the top of the page, enter the following information:

 Field
 Description

 From Name

 The sender's name that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences. For more information, refer to Email Settings (System Preferences) and Email Settings (Personal Preferences) .

 From Address

 The email address that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences.

 More Information

 In system preferences, if the Default (mail.rentmanager.com) mail server is selected, all emails send from email@rentmanager.com . When the email is sent, it displays the entered From Address to the recipient(s) and reroutes replies to that email address.

 If you have established settings for an External Server in system preferences, emails send from the address entered in this field. For more information, refer to Email Settings (System Preferences) .

 To...

 The email address of the recipient.

 Subject

 The subject line that displays on the email.

 Attachments

 To attach any additional files or documents in this email, click Upload Files

 -
 Enter the contents of the message in to the body of the email. Alternatively, click Insert Email Template and select a template to use as the body.

 -
 Click Send .
The letter is sent to the selected recipient(s).

 Attach

 More Information

 In order to add a history/note item to an entity, your user account must have the Add privilege enabled for the relevant entity type (e.g., Owner History/Notes ) in the History privilege group. For more information, refer to History Privilege Group .

 To create a history/note item with the document attached, do the following:

 -
 Click Attach .
The Add to History pop-up displays.

 -
 Select a History Category from the drop-down list.

 -
 Enter an optional Note to provide additional information about this history/note item.

 -
 Click Save .
A history/note item with the document attached is created for the selected entities.
