# Send Signable Documents

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Signable-Documents-Publish.htm

Signable documents are personalized forms delivered electronically to tenants, prospects, owners, or owner prospects for their signature. They are generated from signable templates, which are imported PDF documents or letter templates that include signable fields.

 When you publish (i.e., send) a signable document or a document packet, the recipient(s) receive an email asking them to electronically view and sign the document(s) through either the Tenant Web Access (TWA) or Owner Web Access (OWA) portal. They also receive a notification on their TWA or OWA portal letting them know that a document is available to sign.

 When publishing a signable document, you select a specific document or document packet, determine which of the contacts associated with the account should sign the document(s), and preview and verify the information in the document(s) before sending to the recipients. For example, you can publish a tenant-type lease renewal request document for a specific tenant account with signature fields for each contact associated with the tenant.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Publish document packets
 Enabled

 Letter/Email templates/packets
 View

 Signable templates
 View

 For more information, refer to Control User Access .

 Step 1: Document Selection

 The first step in publishing signable documents is to select the type of document (tenant, owner, and so on), the account associated with the recipient, and the applicable document, packet, or letter template.

 To select a signable document or document packet, do the following:

 -
 Go to arrow_forward Communication arrow_forward  Signable Documents arrow_forward Signable Documents .
The Signable Documents page displays.

 -
 Click Publish New Document .
The Publish Signable Document pop-up displays.

 -
 In the Select Document section, select from the following options:

 Option
 Description

 Document

 Depending on the selection in the Type field, the following sections display with all applicable letter templates, signable PDF templates, and document packets that you can select from.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View, Edit

 Entity templates/packets
 View, Edit

 Publish document packets
 Enabled

 Specific Entity templates/packets privileges must be enabled for each entity-type for which you wish to view signable templates (e.g., Owner templates/packets ).

 For more information, refer to Control User Access .

 Document Packets

 The bundled letter templates and signable PDF templates of the type selected display. In the Documents To Include section that displays, check each document within that packet to be sent.

 More Information

 In order for a document packet to populate in the list, the following is required:

 -
 On the Document Packet details page, you must be assigned as a user. Alternatively, on the User details page's Letters tab, you must have access to the document packet.

 -
 On the Document Packet details page, the Properties associated with the entity account must be selected.

 -
 On the User details page, you must have access to the entity's Properties .

 Signable Letter Templates

 The letter templates with signable fields of the type selected display.

 More Information

 In order for a letter to populate in the list, you must be assigned as a user on the Edit Letter Template Settings pop-up. Alternatively, on the User details page's Letters tab, you must have access to the letter. For more information, refer to Control Letter / Email Template Access .

 Signable PDF Templates

 The signable and interactive PDF templates of the type selected display.

 More Information

 In order for a signable PDF template to populate in the list, you must be assigned as a user on the Edit Signable PDF Template Settings pop-up. Alternatively, on the User details page's Letters tab, you must have access to the signable PDF.

 Select Account (Owner, Owner Prospect, Prospect, Tenant)

 The name of the recipient to whom the signable document is sent.

 Type

 The letter type that determines what generates in the Select Account and Document fields.

 -
 Click Next .

 Step 2: Set Up Signatures

 The next step is to determine which of the contacts associated with the account should sign the document(s).

 To add the signers, do the following:

 -
 Select each contact on the recipient's account who should sign the document(s). By default, all contacts are selected. There cannot be more signers than there are signature blocks in the document.

 -
 Optionally, to add an additional recipient, click Add Signer , check the box and enter the recipient's Email address. To add an additional recipient to all documents, click Add Signer to All and enter the recipient's Email address in the pop-up.

 -
 If sending a document packet, repeat these steps for each document in the packet.

 -
 Click Next .

 More Information

 If your selected document(s) contain an Ask function, the Document Scripting pop-up displays. For each prompt, enter the information specific to that recipient, and your answers populate in the according locations in the document.

 For each answer you enter, click Submit . Once all questions have been answered, the pop-up closes.

 Step 3: Preview and Publish Document

 After selecting the document's signers, you need to review and verify the information in the document(s).

 To review the document(s) and send to the recipient(s), do the following:

 -
 In the Preview and Publish section, review the document. If you are publishing a document packet, use the Select Document to Preview drop-down list to view other documents in the packet.

 -
 Optionally, enter or select the following fields:

 Field
 Description

 Document Expiration

 If applicable, a date to ensure the document is valid only until the date entered. The day after the date, the document is voided for all signers and no longer available to sign unless the document is published again to the recipient(s).

 Landlord Signature

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Sign document packets
 Enabled

 For more information, refer to Control User Access .

 Check Landlord Signature (Sign by manager before publishing) to sign the document before sending it. The signature populates with the First Name and Last Name entered on your Rent Manager user account.

 Warning

 It is recommended to leave this option unchecked until the document has been signed by the recipient(s), as it becomes legally binding with both the landlord and recipient(s) signatures.

 Recipient Message

 A comment that the recipient can view in Tenant Web Access (TWA) or Owner Web Access (OWA) when accessing the document.

 -
 Click Publish .

 The document is published, and an email is sent to the recipient(s) informing them they have a new document to sign. The published document displays on the Signable Documents page, where you can view the recipient's progress in signing the document.
