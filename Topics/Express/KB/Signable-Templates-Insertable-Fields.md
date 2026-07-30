# Insertable Fields for Signable Document Templates

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Signable-Templates-Insertable-Fields.htm

There are various insertable fields that can be added to signable templates. In order for a signable template to be published as a signable document, the template must have at least one Signature block or Initials block for the recipient(s) to fill out on the document. There are also Preparer Fields you can add that prompt the user publishing the document to enter information. Additionally, you can add Signer Fields that the recipient(s) fills out to provide additional information or make selections from a list of options. For more information on signable templates, refer to Create a Signable Document Template .

 Each available signable template insertable field is described in the headings below.

 Signature Blocks

 Signature blocks are fields for recording electronic signatures from recipient(s) and Rent Manager users. At least one Signature or Initials block field must be added to a template before it can be published as a signable document, but templates can have as many signature blocks as needed for each recipient.

 There are four signature-type fields that can be added from the Signature Blocks section: Signature , Initials , Landlord Signature , and Company Representative .

 If your document needs multiple recipients to sign, you must add multiple signature-type fields to the same group. For example, you have a template that is two pages long: the first page must be initialed by two recipients, and the second page must be signed by both recipients and the landlord. On the first page, add two Initials fields and assign them to the first signature group (e.g., InitialsGroup1 ). Then on the second page, add two Signature fields and a Landlord Signature field, and assign the two Signature fields to a second signature group (e.g., SignatureGroup1 ).

 Signature

 The Signature insertable field requires the recipient(s) to type their full name as a digital signature when completing the document.

 The following options are available:

 Field
 Descriptions

 Signature Group Names

 The group of signatures with which this Signature field is associated. To assign the field to a new signature group, click .

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signature block is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signature block is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signature block.

 Size

 The size of the signature field as it displays on the document: Small , Medium , or Large .

 Initials

 The Initials insertable field requires the recipient(s) to enter their first and last initial as a digital signature when completing the document.

 The following options are available:

 Field
 Descriptions

 Signature Group Names

 The group of signatures with which this Initials field is associated. To assign the field to a new signature group, click .

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The initial block is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The initial block is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the initial block.

 Size

 The size of the initial field as it displays on the document:  Small or Large .

 Landlord Signature/Company Representative

 For tenant- or prospect-type signable templates, this field displays as Landlord Signature . For owner- or owner prospect–type signable templates, this field displays as Company Representative . These insertable fields require a Rent Manager user to sign the document, either when the document is published or after it is completed by the recipient(s).

 The following options are available:

 Field
 Descriptions

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signature block is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signature block is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signature block.

 Size

 The size of the signature field as it displays on the document:  Small , Medium , or Large .

 Preparer Fields

 Preparer fields are interactive fields that are completed by the user when publishing the template as a signable document. These fields allow the user to enter values before the document is sent to the recipient(s), such as the proposed rent amount for a lease renewal or a script that runs when the document is generated.

 There are two preparer-type fields that can be added from the Preparer Fields section: Ask and Script . These fields are available only for signable templates created from imported PDF documents.

 Ask

 The Ask insertable field generates a question for the user to answer before publishing the template as a signable document, such as the rent renewal amount.

 The following options are available:

 Field
 Description

 Question

 The text prompt that displays in the insertable field block. To customize the font that displays in this field, click .

 Width

 The width of the box on the document, measured in pixels. This number cannot exceed 750.

 Height

 The height of the box on the document, measured in pixels. This number cannot exceed 700.

 Required

 If checked, the user who publishes the document must enter or select a value in this field to generate the document.

 Transparent

 If checked, the value entered by the user for this insertable field does not display on the generated document and cannot be seen by the recipient(s). If unchecked, the value entered by the user is displayed on the generated document.

 Multiline

 If checked, allows line breaks and text wrapping for the value entered by the user. This option is available only if the Field Type is set to Text .

 Field Type

 The type of value(s) that can be entered or selected for this field. Each field type can have a Default Value entered that is selected by default when the prompt displays. The user can change the selection as needed when generating the document.

 The available options are described below.

 Text

 The user can enter an alphanumeric string of text for this field.

 Dropdown List

 The user selects an option from a preset list of options you set up. To add options to the list, click Add Choice .

 Yes/No

 The user can select only Yes or No as a response to the field.

 Date

 The user can enter a date value in MM/DD/YYYY format.

 Numeric

 The user can enter a numeric value. In the # of digits after decimal field, enter how many digits display in the output of the field after the decimal point. For example, for currency you would enter 2 to add two decimal places (e.g., 1.00 ). To allow users to enter only whole numbers, enter 0 .

 Default Value

 The value that is automatically populated or selected in this field. If there should be no default value, leave this blank.

 Script

 The Script insertable field allows you to enter custom scripting to automatically populate a value when the document is published, such as the signer's name or address.

 More Information

 The scripts you enter follow the parent class of the signable template's entity type. For example, if the signable template is a tenant-type template, then all scripts entered must be Tenant class scripts. For more information, refer to Scripting .

 The following options are available:

 Field
 Description

 Script

 The script that runs when the document is published. To open the Script Builder pop-up and add insertable fields, click . To customize the font that displays in this field, click .

 Width

 The width of the box on the document, measured in pixels. This number cannot exceed 750.

 Height

 The height of the box on the document, measured in pixels. This number cannot exceed 700. This field is editable only if Multiline is checked.

 Required

 If checked, the user who publishes the document must enter or select a value in this field to generate the document.

 Multiline

 If checked, allows line breaks and text wrapping for the value entered by the user.

 Signer Fields

 Signer fields are insertable fields that can prompt the recipient(s) to provide additional information by entering text or making selections while they are signing the document. All recipient responses to signer fields display in the Fields section of the signable document's details page.

 There are five fields that can be added from the Signer Fields section: Checkbox , Combobox , Date Picker , Textbox , and Label .

 Checkbox

 The Checkbox insertable field allows the recipient(s) to select Yes or No in response to a specific prompt (such as whether or not they accept the lease renewal) when completing the document.

 The following options are available:

 Field
 Description

 Field Name

 The description for the field used for internal reference. The Field Name displays to users during the publishing process for a signable document, but does not display to the recipient(s) on the published document itself.

 Description

 The text that displays as a question or prompt to the recipient(s) when the checkbox is clicked, such as Do you have pets?

 Default Value

 If selected, the value that automatically populates in the checkbox when the document is published. This value can be changed by the recipient(s).

 Allow default value to be changed when published

 If checked, the user publishing the document can change the option selected for the Default Value before publishing the document to the recipient(s).

 Required

 If checked, the recipient(s) must enter or select a value in this field to complete the document.

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signer field is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signer field is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signer field.

 Match To

 Imports the selection made by the recipient(s) to a specified user defined field (UDF).

 Handling

 The specific UDF to which the value of the selection is imported.

 Combobox

 The Combobox insertable field allows the recipient(s) to select one option from a preset drop-down list in response to a specific prompt (such as the preferred length of a lease renewal) when completing the document.

 The following options are available:

 Field
 Description

 Field Name

 The description for the field used for internal reference. The Field Name displays to users during the publishing process for a signable document, but does not display on the published document itself.

 Description

 The text that displays as a question to the recipient(s) when the checkbox is clicked, such as How long do you wish your lease to be?

 Width

 The width of the box on the document, measured in pixels. This number cannot exceed 750.

 Height

 The height of the box on the document, measured in pixels. This number cannot exceed 700.

 Required

 If checked, the recipient(s) must enter or select a value in this field to complete the document.

 Dropdown Choices

 The options that the recipient(s) can select from the drop-down list. To add additional options, click Add Choice . If applicable, check Set Default next to the value that should automatically populate. This option can be changed by the recipient(s).

 Allow default value to be changed when published

 If checked, the user publishing the document can change the option selected for the Default Value before publishing the document to the recipient(s).

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signer field is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signer field is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signer field.

 Match To

 Imports the selection made by the recipient(s) to a Rent Manager field or user defined field (UDF).

 Handling

 The specific Rent Manager field or UDF to which the selection is imported. This option is available only if, in the Match To field, you selected Street , Street2 , City , State , Postal Code , Phone Number , or User Defined Field .

 Date Picker

 The Date Picker insertable field allows the recipient(s) to select a date in response to a specific prompt (such as when they intend to move in) when completing the document.

 The following options are available:

 Field
 Description

 Field Name

 The description for the field used for internal reference. The Field Name displays to users during the publishing process for a signable document, but does not display on the published document itself.

 Description

 The text that displays as a question or prompt to the recipient(s) when the date picker is clicked, such as When would you like to move into the unit? .

 Width

 The width of the box on the document, measured in pixels. This number cannot exceed 750.

 Height

 The height of the box on the document, measured in pixels. This number cannot exceed 700.

 Required

 If checked, the recipient(s) must enter or select a value in this field to complete the document.

 Default Value

 The date that automatically populates in the field when the document is published. This date can be changed by the recipient(s).

 Allow default value to be changed when published

 If checked, the user publishing the document can change the option selected for the Default Value before publishing the document to the recipient(s).

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signer field is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signer field is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signer field.

 Match To

 Imports the date selected by the recipient(s) to a Rent Manager field or user defined field (UDF).

 Handling

 The specific UDF to which the date is imported. This option is available only if, in the Match To field, you selected User Defined Field .

 Textbox

 The Textbox insertable field allows the recipient(s) to enter alphanumeric text in response to a specific prompt (such as their vehicle information) when completing the document.

 The following options are available:

 Field
 Description

 Field Name

 The description for the field used for internal reference. The Field Name displays to users during the publishing process for a signable document, but does not display on the published document itself.

 Description

 The text that displays as a question or prompt to the recipient(s) when the textbox is clicked, such as Enter your license plate number .

 Width

 The width of the box on the document, measured in pixels. This number cannot exceed 750.

 Height

 The height of the box on the document, measured in pixels. This number cannot exceed 700.

 Required

 If checked, the recipient(s) must enter or select a value in this field to complete the document.

 Default Value

 The text that automatically populates in the field when the document is published. This value can be changed by the recipient(s).

 Allow default value to be changed when published

 If checked, the user publishing the document can change the option selected for the Default Value before publishing the document to the recipient(s).

 Insertion Mode

 How the field is inserted into the text on the signable letter template. This option displays only for signable templates created from letter templates.

 The available options are described below.

 Above Text

 The signer field is added on top of the letter's content. If added on top of text, it covers and blocks the text.

 As Character

 The signer field is added in between, before, or after the text as an inline character.

 Displace Text

 All text is moved aside to make room for the signer field.

 Match To

 Imports the value entered by the recipient(s) to a Rent Manager field or user defined field (UDF).

 Handling

 The specific UDF to which the value is imported. This option is available only if, in the Match To field, you selected Street , Street2 , City , State , Postal Code , Phone Number , or User Defined Field .

 Label

 The Label insertable field allows you to enter additional information for the recipients to view on the document as a block of text. Because signable PDF templates cannot have their text altered in Rent Manager , this block can be used to add additional text or instructions to your document. This field is available only for signable templates created from imported PDF documents and does not allow input from the recipient.

 The following options are available:

 Field
 Description

 Label

 The text that displays on the document. To customize the font that displays in this field, click .

 Word-wrap

 If checked, allows the text to wrap into multiple lines on the document output if the horizontal space is not sufficient for the data to fully display.

 Multiline

 If checked, allows the user to enter line breaks and text wrapping for the value.

 Transparent

 If checked, the text in the Label field for this insertable field does not display on the generated document and cannot be seen by the recipient(s). This is useful for internal notes for users viewing the document's details. If unchecked, the text in the Label field is displayed on the generated document.
