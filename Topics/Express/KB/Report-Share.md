# Share Reports

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Share.htm

Reports provide easy-to-reference data that you can easily share with others. You can print, download, email, and more when you want to share a generated report. For example, you can provide detailed breakdowns to owners for their property finances or gather prospecting metrics that you can send internally to the appropriate recipients. After running a report, you can use one of the options detailed here to share it.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to the report you need to share.

 For more information, refer to Control User Access .

 Option 1: Download to Your Computer

 In some cases, you may need to keep a copy of the report for later reference or make it available on a network drive for other users to access. Downloading a copy of the report gives you access to a file that you can save to your local computer. Clicking opens a pop-up from your local computer that allows you to choose where to save the file and rename it if desired. For report batches and reports separated by entity, select arrow_forward Download to download the entire report batch as one file. If you generated the report(s) as a PDF, you can drill down on details in the file by clicking them. This makes it easy for anyone with a login for your Rent Manager database and the necessary privileges to view additional details.

 If you run the report as any file type other than PDF, the file is automatically downloaded to your browser's default location for downloaded files.

 Option 2: Print a Copy

 If a physical copy of the report needs to be provided, then you can use the print option. Clicking opens a pop-up with the print options from your web browser, where you can select the printer and settings to use for printing the report. To help track when the data was originally run on the report, the time and date are included at the bottom of the report.

 Option 3: Send via Email

 Reports can also be sent via email to one or more recipients. This can be useful when the people who you want to share the report results with do not have access to your Rent Manager database or simply prefer to get this information via email.

 The options available when you email a report vary based on if a single report or multiple individual reports are generated. A single report can be sent to a manually entered list of recipients. When generating a report that creates multiple individual reports, they can each be sent to the entity they are associated with as part of a batch email.

 If you generated the report(s) as a PDF, the file retains the ability to drill down on details in the file by clicking them. This makes it easy for anyone with a login for your Rent Manager database and the necessary privileges to view additional details.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 System
 Compose Email
 Enabled

 Additionally, on the Reports tab, you must have access to the report you need to generate.

 For more information, refer to Control User Access .

 Send a Single Report via Email

 After generating a single report, you have the option to email the report to the recipients of your choice.

 To send the report to recipients via email, do the following:

 -
 After generating a single report, on the action bar, click .
The Compose Email pop-up displays.

 -
 Enter the information in the fields below.

 Field
 Description

 Attachments

 The generated report is already attached, and displays in this field.

 To add any additional attachments, click to browse your computer for a file to attach to the email.

 From Address

 The email address entered here displays as the sender’s address.

 From Name

 The name entered in this field allows the recipient to identify the sender.

 Send Individually

 The message is sent as a separate email to each recipient in the To... field, with only their individual email address. This prevents recipients from seeing the email addresses of any other recipients included on the email.

 Subject

 Enter the topic of the email that the recipients see at the top of the email.

 To...

 Enter the email address for each recipient. Multiple email addresses must be separated by a comma or semicolon.

 -
 In the word processor below, enter the desired email contents.

 -
 Click Send .
The email is sent to the specified recipient(s).

 Send a Batch Email

 If running the report generates multiple individual reports, they can be sent out in a batch email. The email options available vary depending on the entity type the report results contain.

 To send the report to recipients via batch email, do the following:

 -
 Check the reports in the list you want to send.

 -
 Click Email and select one of the options listed.

 Option
 Description

 Batch

 Each individual report is emailed to the corresponding entity email address. For example, if the report's results are separated by property, each selected report is emailed to the email address established on the associated property's details page. This ensures each property only receives the report relevant to that property.

 Owners

 Each individual report is emailed to the corresponding owner email address.

 Single Recipient

 All the individual reports are emailed to one specified email address.

 Tenants

 Each individual report is emailed to the corresponding tenant email address.

 The Batch Email pop-up displays.

 -
 At the top of the pop-up, enter the following information:

 Field
 Description

 From Name

 The name entered in this field allows the recipient to identify the sender.

 From Address

 The email address entered here displays as the sender's email address.

 Warning

 While you can enter any email address into this field, you should ensure the domain is typed correctly. Most email clients automatically move emails from unrecognized domains to the spam folder.

 Subject

 Enter the topic of the email that the recipients see at the top of the email.

 Attach As

 Enter a custom name for the attached report file. If no text is entered, the file name defaults to Report .

 More Information

 The file type (PDF, CSV, and so on) of the report is determined by the selection in the report options before generating the report.

 -
 Optionally, in the Settings/Options section, check or uncheck any of the available options. The options that display vary depending on the type of batch email you are sending.

 Option
 Description

 Combine Documents

 Check to combine all reports into a single file attachment. This is recommended if you are sending a large number of reports to a single recipient, as many email domains have a file size limitation.

 This option displays only if you selected a batch email type of Single Recipient .

 Add to History

 Check to add a history/note item, with the report attached, to each account that received this email.

 This option displays only if you selected a batch email type of Batch , Tenants , or Owners .

 All Occupants

 Check to include any additional accounts defined in the contacts section of each selected tenant. The Addressee List section updates to reflect your selection(s).

 This option displays only if you selected a batch email type of Tenants .

 Contact Type

 Select the contact types you want to send the email to. This is helpful when you want to send something to only specific contacts on each entity's account. For example, you may want to send a statement to the tenant but not have a copy sent to the contact labeled as their co-signer.

 This option displays only for reports with the report option Run Tenants separately selected.

 -
 In the Addressee List section, check each recipient you wish to send the email to.

 More Information

 The Email Address column populates with the recipient's email address listed on their details page in the Email field. If there is no email entered for a recipient, the column displays blank for that account. If you selected the batch type Single Recipient , the only recipient that displays in the list is Send To and must be checked.

 -
 If you selected the batch type Single Recipient , in the Email Address column, enter the desired recipient email address. For any other batch types, verify that any selected recipients have a valid email address entered in the column.

 -
 In the Message section, enter an additional message to display in the body of the email.

 -
 Optionally, in the Attachments section, you can click Upload Files to browse your computer for any files to attach to the email in addition to the report(s).

 -
 Click Send .
The batch email is sent out to all selected recipients in the list with a valid email address.

 More Information

 In the Addressee List section's Status column, each selected recipient displays a message stating either that the email was sent or that an error occurred. The error explains the reason for the failure to send, allowing you to resolve the issue so you can reattempt to send the email to that recipient.

 Option 4: Publish Directly to OWA

 If the report is primarily for owners and they use the Owner Web Access (OWA) portal, you can make the report accessible to those owners without the need to send emails. This makes it easy for all owners to log in to their Owner Web Access account and view their respective reports. Additionally, by directly providing the documents this way, issues like emails going missing are bypassed completely.

 To make a report available via Owner Web Access , do the following:

 -
 On the report results page, click . For report batches and reports separated by entity, select arrow_forward Publish to OWA .

 -
 Select the Report you want to publish.

 -
 Select the Owner you want to publish to.

 -
 Optionally, click Add Report to select an additional report and owner combination for publishing.

 -
 Optionally, enter a note to accompany the published report in Owner Web Access .

 -
 If you want to have multiple reports be accessible from the same attachment, check Combine Owner reports into a single attachment .

 -
 Click Publish .
The report is published to Owner Web Access for the owners selected.

 Option 5: Send via VPO

 Using Virtual Post Office (VPO) to share reports allows you to outsource the expensive and time-consuming process of printing, packaging, stamping, and mailing through the US postal system.

 To send a report via Virtual Post Office (VPO) you must first enable Virtual Post Office in your Rent Manager database. For more information, refer to Set Up Virtual Post Office (VPO) .

 Once Virtual Post Office (VPO) is enabled, do the following:

 -
 On the report results page, click VPO to share the report via Virtual Post Office . For report batches and reports separated by entity, select arrow_forward VPO .
The resulting pop-up depends on if the selected report is VPO-ready.

 -
 If the form is not VPO-enabled, enter the To Address (recipient address) for this Virtual Post Office (VPO) print job. You may optionally enter the From Address (return address) for this Virtual Post Office print job. Rent Manager adds a cover sheet for the addresses for forms that are not VPO-enabled.

 Related Preferences

 If the batch is VPO-ready and you are sending letters in individual envelopes, you do not have to enter a From or To address. You simply choose whether to combine all the letters going to the same recipient into a single envelope. For more information, refer to VPO Defaults (System Preferences) .

 -
 Check Combine all documents going to the same linked account to single envelope if you want to package reports linked to the same address in the same envelope.

 -
 Click Next .
The VPO Confirmation pop-displays.

 -
 Click Send to VPO .
The report is sent via Virtual Post Office (VPO) and displays on the VPO Register .

 Option 6: Add to the Property Files

 Using property files allows you to save a historical record of the report for internal purposes or to make it available to all tenants via Tenant Web Access (TWA) .

 To add a report to your property files, do the following:

 -
 Click to export the report to your property files.
The Add Property File pop-up displays with the report as a File Attachment .

 -
 Select the desired Property .

 -
 Optionally, enter a custom File Name and/or brief Description of the report.

 -
 Optionally, check Show In TWA to make the report available to all tenants who access Tenant Web Access at the selected property.

 -
 Optionally, check Board Only to make this file available only for tenants who are established as association board members at the property. This option is available if any of the selected properties has a Property Type of Association . For more information, refer to Association Board Members (Pop-Up) .

 -
 Click Save .
The report is saved to the property files.
