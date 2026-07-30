# Add a Sub-Application Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Application-Subapplication-Add.htm

Apply Now allows prospective tenants to submit an online application and automates the process of receiving rental applications, collecting application fees, and screening prospects. To ensure that these applications are sent to the appropriate property and provide the necessary information to make a decision, you need to create application templates.

 Subapplication templates are used for any associated coapplicants, such as roommates and guarantors. Applicants send subapplications to any necessary contacts to ensure that all of the information is consolidated in one place.

 Application templates consist of major sections, minor sections, and fields. A major section covers a broad spectrum of information, such as an applicant's rental history. A minor section separates that major section into smaller portions, such as splitting the requested rental history into Current Residence and Previous Residence . Fields are added to minor sections to prompt the user for specific information, such as the rent amount they pay at their current residence and their reason for moving out.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Step 1: Create a Sub-Application Application Template

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Application Templates
 Add, View

 For more information, refer to Control User Access .

 There are two ways to create a subapplication template: build a new template from scratch or copy any existing Primary - or Sub-Application -type template to use as a basis. Each option is described below.

 Option 1: Manually Add a Template

 To manually create a new subapplication template, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Application Templates .
The Application Templates page displays.

 -
 Click Add Template .
The Add Application Template pop-up displays.

 -
 In the Template Type drop-down list, select Sub-Application .

 -
 Click OK .

 Option 2: Copy an Existing Template

 To copy an existing application template, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Application Templates .
The Application Templates page displays.

 -
 On the template you wish to copy, select arrow_forward Copy .
The Copy pop-up displays.

 -
 If you copied a Sub-Application -type template, select As a new sub-application template . If you copied a Primary -type template, select Convert to a new sub-application template .

 -
 Click Ok .

 Step 2: Enter Template Information

 In the General tile, enter the unique Template Name of the subapplication template that displays internally for Rent Manager users.

 Once you have filled out this tile, click Save to create the subapplication template.

 Step 3: Add Major Sections

 Major sections group related minor sections together to organize related information on one tile in the application. For example, you can add a major section for pets, then add multiple minor sections to collect information for each pet (e.g., Pet 1 , Pet 2 ).

 To add a new major section, do the following:

 -
 Click Add Major Section .

 -
 Enter information in the following fields:

 Field
 Description

 Template

 A Rent Manager -created template that includes minor sections and/or fields relevant to the template name. For example, the Personal Information template includes fields to prompt the applicant for their current address, contact information, social security number, and income. All fields included in the major section template can be customized or removed.

 Title

 The title that displays on Apply Now for the major section.

 Help Text

 Additional contextual information that displays when the applicant hovers over . If this field is left blank, does not display.

 Text

 The text that displays under the section Title . For example, if you allow applicants to have pets, you can include the kinds of pets that are permitted and must have information provided.

 -
 When finished, click Add to add the section to the template, or click Save & Add More to create additional major sections.

 Step 4: Add Minor Sections

 Minor sections contain fields of related information to request from the applicant and must be part of a major section.

 To add a new minor section, do the following:

 -
 Under the major section you want to segment, click Add Minor Section .

 -
 Enter information in the following fields:

 Field
 Description

 Major Section

 The Title of the associated major section displays.

 Title

 The title that displays on Apply Now for the minor section.

 Wrap Alignment

 The alignment of fields in this section ( Left or Right ).

 Help Text

 Additional information that displays when the applicant hovers over . If this field is left blank, does not display.

 Text

 The text that displays under the section Title . For example, if you request information about an applicant's previous landlord, you can note that they do not need to provide those details if their landlord no longer works at their prior residence.

 -
 When finished, click Add to add the section to the template, or click Save & Add More to create additional minor sections.

 -
 At the bottom of the page, click Save .

 Step 5: Add Fields

 Each field added to the application requests a specific piece of information from the applicant, such as name, address, phone number, whether or not they have pets, or any other criteria you can think of.

 To add a field, do the following:

 -
 Under the minor section the field should be added to, click Add Field .

 -
 In the Information tile, enter information in the following fields:

 Field
 Description

 Major/Minor Section

 The Title of the associated major and minor sections display.

 Label

 The text that displays on Apply Now for the field.

 Help Text

 Additional information that displays when the applicant hovers over . If this field is left blank, does not display.

 Match To

 The prospect field in Rent Manager where the data is imported when the application is submitted. For example, if you select Move In , the date provided by the applicant for this field is automatically added to the Move In Date field on their prospect account's details page.

 If a selection is made in this field, the Data Type option is read-only and matches the selected field.

 One or more of the following options are available depending on the selection in this field:

 Handling

 Further specifies the Rent Manager field being matched. For example, if you selected User Defined Field , all prospect-type UDFs populate so you can specify which UDF value is updated by the application.

 More Information

 If you selected a user-defined field (UDF) to match to, you cannot select UDFs with the Data Type of File or Image .

 Contact

 The prospect's contact account to which the information is imported. For example, if you select Phone Number as the Match To field and have already created a guarantor contact for this prospect, you can select a guarantor contact type in this field to populate that contact's phone number. For more information, refer to Add a Tenant/Prospect Contact .

 Dependent Field

 All fields in any section of the application with a Data Type of Yes/No display. Selecting an option in this drop-down disables the field you are creating unless the applicant selects Yes for the selected Dependent Field .

 For example, you can create a Yes/No field that says Do you have any pets? . Then, you can add required fields for pet information (such as pet name and type) and select Do you have any pets? as the Dependent Field . This allows applicants without pets to select No and submit their application without filling out irrelevant information, while ensuring that applicants with pets select Yes and provide you the required pet information.

 Data Type

 The information format that most appropriately matches the application field. For example, an application field for Employment Start Date would use the Date type. For descriptions of each data type field and the available options for that field, refer to Application Field Data Types .

 If a Match To field is selected, this option is read-only and matches the selected field.

 -
 On the Options tile, the fields that display vary depending on the Data Type selected on the Information tile. For descriptions of each data type field and the available options for that field, refer to Application Field Data Types . The following fields display for all data types:

 Field
 Description

 Required

 If checked, the recipient must enter or select an answer for this field before they can submit the application.

 Vertical Alignment

 If a single-line field is placed next to a taller field (such as Multi Line Text ), you can choose to align the field along the Top , Center , or Bottom of the row in relation to the taller field.

 Column Span

 The width of this field, entered in number of columns. For example, if you enter 2 , then this field is two columns wide on the application.

 -
 When finished, click Add to add the section to the template, or click Save & Add More to create additional fields.

 -
 At the bottom of the page, click Save .

 Step 6 : Add Additional Applicant Section

 You can add an Additional Applicant section into the subapplication. This allows the applicant to distribute the necessary subapplications via email (such as a roommate's guarantor), which are then linked with the primary applicant's prospect account with subapplicants added as contacts. It also lets you establish default settings for any subapplications.

 More Information

 Subapplication templates cannot be sent individually and usually need to be added to a primary application template's Add Additional Applicant section before they can be distributed. However, if you are creating a subapplication template that will be sent only by co-applicants, you do not need to associate that subapplication template with a primary template.

 To allow applicants to send subapplications, do the following:

 -
 Click Add Additional Applicant Section .

 -
 In the Information tile, enter information into the following fields:

 Field
 Description

 Applicant Type

 The kind of applicant to be created when an associated subapplication is submitted (i.e., Co-Applicant , Guarantor , Occupant , Partner , or Spouse ). This option is populated in the contact account's Applicant Type field.

 Description

 A note that displays when the primary applicant is selecting an applicant type and filling out the subapplicant's contact information. For example, if you use different applicant types for adult occupants and minor occupants, you can explain which option the primary applicant should select.

 Friendly Name

 The name that displays to the primary applicant when selecting an applicant type for the subapplication. For example, if the subapplication is sent to a guarantor, you may prefer to have the Guarantor option display to the applicant as Party Financially Responsible .

 Help Text

 Additional information that displays when the applicant hovers over . If this field is left blank, does not display.

 Sub-Application Template

 The subapplication template to send to additional applicants of the selected Applicant Type .

 Text

 The text that displays under the section Title . For example, you can emphasize the maximum number of additional occupants for one application.

 Title

 The title that displays on Apply Now for the Additional Applicant major section.

 -
 If applicable, in the Screening Options tile, you can configure screening and income verification settings for this application template that override the settings established in system web preferences. The following options are available:

 Field
 Description

 Require income verification with online applications

 If checked, prospects submitting applications in Apply Now are prompted to complete an income verification with AmRent .

 Related Preferences

 This field and its dependent fields display only if, in system preferences, you have entered valid AmRent income verification credentials. For more information, refer to Screening Products Credentials (System Preferences) .

 The following fields are available when this setting is enabled:

 Allow applicant to refresh the expired verification link X times

 If checked, prospects can request a new income verification link when their previous session expires up to the number of times specified. You can specify a number between 1 and 20 .

 Income Verification Page Message

 The message to display on the income verification section of the prospect's application.

 Run screenings for online applications

 If checked, an AmRent screening is automatically run when the primary applicant and all subapplicants have paid their application fees. In the Screening Report Type field, select the report that should be run for applicants. For more information, refer to Types of Screening Reports .

 Related Preferences

 To have this application template always use the Screening report type options established in system web preferences, select <System Web Preferences Default> . If the system preference is changed, all applications submitted after the change will use the updated report type(s).

 If the option Do not require payment for application to be submitted is checked in system web preferences and any of the applicants choose to pay later, screenings are not initialized automatically and must be run manually by a Rent Manager user.

 For more information, refer to Tenant Web Access Apply Now General (System Web Preferences) .

 -
 If applicable, in the Property Defaults tile, select Override Property Defaults to configure application fee settings for this application template that override the settings established on a property's Property Application Settings pop-up. For more information, refer to Property Application Settings (Pop-Up) . The following options are available:

 Field
 Description

 Additional Application Fees

 Any additional fees to be charged when the application is submitted. To add additional fees, click Add Item . For each additional application fee, enter the following information:

 Charge Type

 The charge type associated with the additional fee.

 Description

 A brief explanation of the additional fee.

 Fee Amount

 The dollar amount of the additional fee.

 Application Fee Amount

 The dollar amount of the application fee charge.

 Fee Charge Type

 The charge type associated with the application fee.

 -
 Click Add .
The pop-up closes and the additional applicant major section is added to the application template.

 -
 If you need to add another subapplication option, next to the Title of the additional applicant section, select arrow_forward Add Applicant Type Setup and enter the information for that applicant type. Once finished, click Add .

 -
 If you want to change the labels that display or add Help Text for additional applicant information, next to the Title of the section, select arrow_forward Edit Applicant Fields and edit the Applicant Type , Full Name , and Email Address Label fields as desired. Once finished, click OK .

 -
 At the bottom of the page, click Save .

 Next Steps

 Now that you have created an application template, you are ready to start collecting applications from prospects and tenants. The recommended next steps are described in the table below.

 Option
 Description

 Customize application settings

 After you create your templates, you can customize settings for screenings, application fees, default templates and properties, and override system settings at the property or application template level. For more information, refer to Set Up Apply Now Application Settings .

 Directly send application to prospects

 Once you have created an application template and assigned it to at least one property, you can either email the prospect an application link directly from Rent Manager , or copy an application link tied to a specific property or unit that can be shared outside of Rent Manager .

 For more information, refer to Send an Online Application .

 Manage submitted applications

 Applications submitted by prospective tenants via Apply Now are automatically imported to Rent Manager . You may then decide to use that application to create a new (or update an existing) prospect or tenant record.

 For more information, refer to Applications (Page) .

 Automated Notifications

 With automated notifications, you can send alerts to a customized list of recipients when a certain set of conditions are met. For applications, you can customize notifications to alert you when applications are fully submitted via Apply Now , or when an application has been started, but is not yet finished and submitted.

 For more information, refer to Application Submitted (Automated Notification) and Application Started, Not Completed (Automated Notification) .

 Dashboard Tile

 The Recent Online Applications dashboard tile helps track rental applications submitted by prospects. You can customize the tile to include applications that are a set number of days old, associated with certain properties, and have specific application or screening statuses.

 For more information, refer to Recent Online Applications (Dashboard Tile) .
