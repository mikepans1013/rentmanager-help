# Write Letter Batch

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Letters-Write-Batch.htm

Letters in Rent Manager can be used to send important information and updates directly to your tenants, owners, and prospects without having to leave your database. In situations where you need to inform a large group of individuals with letters at once, you can use Rent Manager 's letter batch tool.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View

 For more information, refer to Control User Access .

 Additionally, you need privileges for each letter type for which you wish to access the settings.

 Step 1: Choose a Letter For The Batch

 To write a new letter batch, do the following:

 -
 Go to arrow_forward Communication arrow_forward Letters arrow_forward Write Letter Batch .

 -
 Make selections in the following fields:

 Field
 Description

 Letter Template Type

 The entity type (e.g., Tenant ) associated with the template.

 Letter Template

 The letter that can be generated and sent in a batch. Only letter templates associated with the entity selected in the Letter Template Type field display.

 -
 After making your selections, click Run Letter Batch .
The Write Letter Batch pop-up displays.

 Step 2: Select Letter Batch Settings

 After selecting the letter template type and associated letter template to include in your batch, you then need to select the settings required to run the batch.

 -
 In the Properties/Owners section, select the property you wish to generate the letter batch for. To run the letter for owners, click the Owners tab and select the owners you want to generate a letter batch for.

 -
 In the Tenant to Include section, select Current , Past , or Future tenants to run the letter batch for.

 -
 In the Export Type section, select the form your letter batch will generate in.

 -
 After making your selections, click Run Letter Batch .
Depending on the letter template you select, you may have to answer a scripted prompt on the Write Letters pop-up before the page with the finished letter batch displays.

 Step 3: Send Letter Batch

 Once you have selected the desired letter batch settings, you can now choose how the batch is to be sent to the recipients.

 Option 1: Print Letter Batch

 To print a physical copy of the letter batch, do the following:

 -
 Click   Print .
The Add History pop-up displays.

 -
 Select one of the available options for adding a history/note item. Each option is described below.

 Option
 Description

 Don't add to history

 A history/note item is not created for the document and does not display on the History/Notes tile for the tenant's details page.

 Add note to history

 A history/note item is created to indicate that the document was sent.

 When this option is selected, the pop-up expands. In the History Category drop-down list, choose a category to associate with this note. In the Note field, enter an optional description, such as the reason the letter was generated.

 Add note and attach document to history

 A history/note item is created with the document attached as a PDF.

 When this option is selected, the pop-up expands. In the History Category drop-down list, choose a category to associate with this note. In the Note field, enter an optional description, such as what kind of information is included in the letter attachment.

 -
 Click Save .
The print dialog box displays, where you can verify printer settings and print the letters.

 Option 2: Email Letter Batch

 Related Privileges

 Group
 Privilege
 Column

 System
 Compose Email
 Enabled

 For more information, refer to Control User Access .

 To email the letter batch, do the following:

 -
 Click   Email .

 -
 From the menu, select the desired entity to receive the email (e.g., Tenants or Owners ). Alternatively, click Single Recipient to send the letter to an external email address.
The Batch Email pop-up displays.

 -
 Enter information into the following available fields:

 Field
 Description

 From Name

 The sender's name that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences.

 From Address

 The email address from which the message is sent that displays for the recipient. A default value can be set for all users in system preferences or on an individual basis in personal preferences.

 More Information

 In system preferences, if the Default (mail.rentmanager.com) mail server is selected, all emails send from email@rentmanager.com . When the email is sent, it displays the entered From Address to recipient(s) and reroutes replies to that email address.

 If you have established settings for an External Server in system preferences, emails send from the address entered in this field. For more information, refer to Email Settings (System Preferences) .

 Subject

 The subject line that displays for the recipient.

 Attach As

 This field changes the name of the file containing your generated letter before attaching to the email. The report name is used as the file name by default.

 -
 In the Settings/Options section, enter the following information:

 Field
 Description

 Add to History

 Create a history/note item for each recipient that you sent the email to. The letter is attached to that history/note item.

 More Information

 In order to add a history/note item to an entity, your user account must have the Add privilege enabled for the relevant entity type (e.g., Owner History/Notes ) in the History privilege group. For more information, refer to Control User Access .

 All Occupants

 For any tenant or prospect account displayed in the Addressee List section, this option adds the contacts found on those accounts to the list. This option, available only when emailing letters to tenants or prospects, includes the additional accounts defined on the View Contacts pop-up for each selected tenant or prospect.

 Contact Type

 The contact type(s) to include in the Address List section. This option displays only when sending emails to tenants.

 Combine Documents

 Merge all letters into a single file attachment. This option displays only if Owners or Single Recipient is selected.

 -
 In the Addressee List section, check the box next to the recipient(s) and verify the Email Address for each selection.

 -
 In the Message section, enter the body of the email.

 -
 In the Attachments section, click Upload Files to include additional files or documents in this email.

 -
 Click Send .
The letter is sent to the selected recipient(s).

 Step 4: Utilize Additional Save Options

 Once a letter batch is generated, you can choose additional ways to save the record of the batch. To save the selected letter(s) in the batch to your computer, select arrow_forward Download . Additionally, select arrow_forward Attach to History to add a history note with a category, description, and a PDF copy of the generated letter to the entity’s History/Notes tile.
