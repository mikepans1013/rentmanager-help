# Create a Signable Document Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Signable-Templates-Add.htm

Signable documents are personalized forms delivered electronically to tenants, prospects, or owners for their signature. These documents are created as letter templates or PDFs with signature and initial fields, along with optional checkboxes and drop-down menus that can be linked to specific Rent Manager data. You can send rental agreements, lease addenda, and other important documentation to tenants and prospects via Tenant Web Access (TWA) , or provide management agreements and tax form verifications to be signed by owners via Owner Web Access (OWA) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View

 Entity templates/packets
 Add, View

 Specific Entity templates/packets privileges must be enabled for each entity type for which you wish to create a signable template (e.g., Owner templates/packets ).

 For more information, refer to Control Letter / Email Template Access .

 Step 1: Create the Signable Template

 All signable document templates are created from letter templates or PDFs. Before you can create a signable template, you must first create or import the letter template into Rent Manager , or create a PDF outside Rent Manager and then import it.

 Letter Template

 Letter templates are customized letters that combine static text and graphics with dynamic scripting commands. These commands allow you to generate customized content for each letter recipient. Letter templates are meant to save you time in the creation and delivery of letters.

 More Information

 If you do not want to write up a new letter from scratch in Rent Manager , you can instead import a document from your computer or the Online Template Library. From the Letter/Email Templates page, click the drop-down arrow next to Import . For more information, refer to Online Template Library (Page) .

 To create a signable document from a letter template, do the following:

 -
 Go to arrow_forward Communication arrow_forward  Letters arrow_forward Letter Templates .
The Letter/Email Templates page displays.

 -
 Do one of the following:

 Option
 Description

 Create a new letter template

 Click Add . Then in the Type field, select the entity type for which to create a signable document and click OK .

 Use an existing letter template

 In the Letter Template Type section, select an entity type. Then select a letter template from the list.

 More Information

 Signable documents can be made only from letter templates of the following entity types: Owner , Owner Prospect , Tenant , or Prospect . You must select one of these entities for a new letter type, or select an existing letter type from one of these entities.

 The letter template's details page displays.

 -
 If you are creating a new letter, enter the text, scripting, and images that you wish to include in the signable document. For more information, refer to Scripting .

 -
 On the left at the bottom of the Insertable Fields section, check Signable Document .

 -
 At the top, click File arrow_forward Save . If you are creating a new letter, in the Template Name field, enter a unique name for the document and click Save .

 PDF

 A PDF is a standardized file format that includes formatted text and images. This file format allows a document to display the same across all computers, regardless of application software, hardware, or operating system. Documents must be in PDF format to be imported as signable templates.

 To create a signable document from a PDF, do the following:

 -
 Go to arrow_forward Communication arrow_forward  Signable Documents arrow_forward Signable Templates .
The Signable Templates page displays.

 -
 Click Import .
The Signable PDF Import pop-up displays.

 -
 Enter or select information in the available fields. Each field is described below.

 Field
 Description

 Name

 A unique name to identify the signable template, such as Rental Agreement - 2 Signers .

 Template Type

 The entity type this signable template is used for: Owner , Owner Prospect , Tenant , or Prospect .

 Import File

 Click to select a PDF document from your computer or network. This document becomes the signable template.

 Description

 Additional text summary that provides more information about the signable template, such as when to use it and the signature options available in the template.

 Users

 The users that have access to send this signable template. By default, All Users is selected. To limit the users who can access this template, uncheck All Users and select the users or user roles from the drop-down to grant them access to the template.

 -
 Click Save .
The PDF document is added to the list of signable templates.

 Step 2: Add Signable Fields

 Once you have created your signable template from a PDF or letter template, you can add the signature fields to the template. You can also add other interactive options for the signer(s) such as checkboxes or date selections. In order for a signable template to be published as a signable document, the template must have at least one Signature block or Initials block for the recipient(s) to fill out on the document.

 If your document needs multiple recipients to sign, you must add multiple signature-type fields to the same group. For example, your template is two pages long: The first page must be initialed by two recipients, and the second page must be signed by both recipients and the landlord. On the first page, add two Initials fields and assign them to the first signature group (e.g., InitialsGroup1 ). Then on the second page, add two Signature fields and a Landlord Signature field, and assign the two Signature fields to a second signature group (e.g., SignatureGroup1 ).

 To add signer fields to a signable template, do the following:

 -
 Go to arrow_forward Communication arrow_forward  Signable Documents arrow_forward Signable Templates .
The Signable Templates page displays.

 -
 In the Template Type field, select either Letter to display templates created from letter templates or PDF to display templates created from imported PDF documents.

 -
 For the signable template you wish to add signer fields to, click arrow_forward Details .
The signable template's details page displays.

 -
 In the Insertable Fields section under Signature Blocks , click and drag at least one of the following insertable fields onto the template:

 Option
 Description

 Signature

 Requires the recipient(s) to type their full name as a digital signature when completing the document.

 Initials

 Requires the recipient(s) to enter their first and last initial as a digital signature when completing the document.

 For more information about adding signature blocks and other signable document fields, refer to Insertable Fields for Signable Document Templates .

 -
 Add any additional insertable fields for signatures, preparer input, or signer input as needed. Click and drag each field block to reposition it on the template. To edit the settings of an insertable field on a letter template, right click the field block. To edit the settings of an insertable field on a PDF, select the field block and click   arrow_forward   Edit .

 -
 For a letter template, click File arrow_forward Save at the top. For a PDF template, click Save at the bottom.

 Step 3: Establish Settings and Assign Users

 Each signable document has its own settings and permissions. The settings vary depending on whether the signable template is letter template or PDF.

 To edit the settings of a signable template, do the following:

 -
 Go to   arrow_forward Communication arrow_forward  Signable Documents arrow_forward Signable Templates .
The Signable Templates page displays.

 -
 In the Template Type field, select either Letter to display templates created from letter templates or PDF to display templates created from imported PDF documents.

 -
 For the template you wish to manage, click   arrow_forward   Settings .
The settings for the associated type of signable template display.

 -
 Edit the template settings as described in the headings below.

 -
 Click Save .
The signable template's settings are updated.

 Signable Letter Templates

 The following fields display on the Edit Letter Template Settings pop-up:

 Field
 Description

 Template Name

 The unique name of the signable letter template that displays internally in Rent Manager and to the recipients in Tenant Web Access and Owner Web Access .

 Folder

 The folder where the letter template is stored on the Letter/Email Templates page.

 Users

 The users that have access this signable letter template.

 By default, All Users is selected and grants all current and future users access to the template. To limit access to this template, uncheck All Users and select each user or user role in the list that can publish this template.

 Menus

 To publish the letter template as a signable document, Letter Menu must be checked.

 Description

 A brief summary or explanation about the letter template's content and/or when to use the letter template. This is for internal reference and does not display to recipients.

 To establish additional settings for the letter template, such as printing options, filtering options, or scripts to run when generating the letter template, click Advanced . For more information on letter template settings and advanced settings, refer to Letter/Email Template Settings (Pop-Up) .

 PDF Signable Templates

 The following fields display on the Edit Signable PDF Template Settings pop-up:

 Field
 Description

 Name

 The unique name of the signable PDF template that displays internally in Rent Manager and to the recipients in Tenant Web Access and Owner Web Access .

 Template Type

 The entity type to which this template can be sent as a signable document. This entity is selected during the creation of the signable template and cannot be edited.

 Active

 If checked, the PDF template can be published to recipients as a signable document. If unchecked, the template is disabled and cannot be published but can be reactivated at any time.

 Description

 A brief summary or explanation about the PDF template's content and/or when to use the template. This is for internal reference and does not display to recipients.

 Users

 The users that have access this publish this template as a signable document.

 By default, All Users is selected and grants all current and future users access to the template. To limit access to this template, uncheck All Users and select each user or user role in the list that can publish this template.
