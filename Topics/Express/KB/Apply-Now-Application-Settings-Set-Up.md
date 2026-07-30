# Set Up Apply Now Application Settings

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Apply-Now-Application-Settings-Set-Up.htm

Apply Now allows prospective tenants to submit an online application and automates the process of receiving rental applications, collecting application fees, and screening prospects. To ensure that these applications are sent to the appropriate property and provide the necessary information to make a decision, you need to create application templates.

 Before sending out your Apply Now applications to prospective tenants, it is recommended that you establish all system web preferences, application settings, and fees to meet your needs.

 More Information

 You can customize system web preferences, application settings, and fees after the application templates are created. For more information, refer to Add a Primary Application Template and Add a Sub-Application Template .

 Customize Apply Now System Web Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 Apply Now system web preferences determine the default settings for your applications. These settings apply to all applications system wide unless they are overridden at the application or property level, which is covered later in this topic.

 To set system web preferences, go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Apply Now and select each heading listed below.

 General

 These preferences allow you to set up default options for processing applications, such the property association, automatic screenings, signature requirements, and verifications emails. For more information, refer to Tenant Web Access Apply Now General (System Web Preferences) .

 To set up the key Apply Now settings, do the following:

 -
 At the top, check Enable Apply Now .

 -
 In the General section, select the following options:

 Option
 Description

 Apply Now Page Message

 The message to display to prospects in the Apply Now portal, up to 223 characters long. A default message populates that can be edited, but the field cannot be left blank.

 Always use Default Property for prospect creation

 Uses the  Default Property for prospects created with Apply Now instead of the property associated with the unit for which the prospect is applying.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Applications allowed to be submitted within 5 minutes (1-200)

 The maximum number of applications that can be submitted within 5 minutes from a single IP address. The maximum that you can enter is 200; the default is 10. This option is meant to protect your site from spam and denial of service attacks.

 Default Application Template

 The application selected in Rent Manager by default for properties unless specified on the property level.

 Default Property

 The system-default property to assign new application-generated prospects, such as your property management company.

 Display warning if an application is submitted without additional applicants

 If checked, if an application with a section for additional applicants is submitted but no information for additional applications was entered, a pop-up message displays reminding the applicant to add this information if needed. In the text box below, a default message populates that can be edited, but the field cannot be left blank.

 Link submitted applications to existing prospects

 If checked, Rent Manager searches for existing prospect accounts that match the property and phone number or email address entered on the submitted application. If the matching account has no associated application, the new application is attached to that account. If the matching account has an application already, a new account is created with the new application.

 Require income verification with online applications

 If checked, prospects submitting applications in Apply Now are prompted to complete income verification with AmRent . The following fields are available when this setting is enabled:

 Related Preferences

 This field and its dependent fields display only if, in system preferences, you have entered valid AmRent income verification credentials. For more information, refer to Screening Products Credentials (System Preferences) .

 Allow applicant to refresh the expired verification link X times

 If checked, prospects can request a new income verification link when their previous session expires, up to the number of times specified. You can specify a number between 1 and 20 .

 Income Verification Page Message

 The message to display on the income verification section of the prospect's application.

 Require signature on application prior to completing

 If checked, requires the applicant enter their name in the signature block before submitting the application.

 Reserve unit upon prospect application completion

 If checked, the unit is automatically reserved when an application is received to prevent other applicants from reserving the same unit.

 If the system web preferences option of Enable ePay is selected below, the unit is reserved only if a payment is submitted with the application.

 Run screenings for online applications

 If checked, automatically run an AmRent screening once a prospect completes an Apply Now application. In the Screening report type field, select the type of screening to be used for Apply Now applicants. For more information, refer to Types of Screening Reports .

 More Information

 Automated screenings can only be completed if ePay is enabled for the property. For more information, refer to Property ePay Settings (Pop-Up) .

 -
 In the Apply Now Verification Email section, click Customize Apply Now Verification Email to open a pop-up where you can design the email applicants receive upon signing up for an Apply Now account. Once customized, click OK .

 -
 Click Save .
The Apply Now general settings are saved.

 Disclaimers

 These preferences allow you to customize the text that displays in disclaimers for applications, which applicants must acknowledge and agree to before their application can be submitted. For more information, refer to Tenant Web Access Apply Now Disclaimers (System Web Preferences) .

 Enter or adjust the desired text, hyperlinks, and formatting for the disclaimer messages described below, then click Save . The default messages display in the text boxes.

 Option
 Description

 Extended Disclaimer Text

 No message is set by default, but you can write a custom additional disclaimer for any other information you wish for the applicant to acknowledge that is not included in the Consent to Screening Text and Information Accuracy Certification Text disclaimers. If no text is entered, this disclaimer does not display on the Apply Now application.

 Consent to Screening Text

 The default message and dialog box that applicants must check to consent to having a screening report run on their behalf.

 Information Accuracy Certification Text

 The default message and dialog box that applicants must check to acknowledge that the information entered on the application is correct.

 Included Units

 These preferences determine which properties, units, and/or unit types available for applicants to apply to. For more information, refer to Tenant Web Access Apply Now Included Units (System Web Preferences) .

 Related Preferences

 Some options refer to using availability profiles to filter properties, units, or unit types by custom criteria. Availability profiles can be created in system web preferences. For more information, refer to Availability Profile (System Web Preferences) .

 To set the included units settings, do the following:

 -
 In the Properties to Include section, select an option below to determine which properties can receive Apply Now applications.

 Option
 Description

 By Property

 Include the properties selected in the associated drop-down.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 By User Defined Field

 Include properties with a value of Yes set for a selected property-level user-defined field (UDF). Only UDFs with a Data Type of Yes/No can be selected.

 By Property Availability Profile

 Include properties that meet the availability criteria as determined in the selected property availability profile.

 -
 In the Units/Unit Types to Include section, select an option below to determine which unit or unit types show as available to the applicant, based upon their property selection.

 Option
 Description

 By Property Type

 The Property Type of the selected property determines if the applicant can select a unit or unit type. Applicants apply for specific units at properties with a with a type of Commercial , Manufactured Housing , Single Family , or no selection. For all other property types, the applicants apply by unit type.

 Display Units

 Always display only a list of units at the selected properties. You can opt to display all units, units with a value of Yes on a specified unit UDF, or specific units based on filter criteria in an availability profile.

 Display Unit Types

 Always display only a list of unit types at the selected properties. You can opt to display all unit types, selected unit types, or specific unit types based on filter criteria in an availability profile.

 By default, the name of the unit type displays in the list. To instead display the text in the unit type's Description field, check Use Unit Type Description .

 Do not display a Unit or Unit Type dropdown

 Do not allow applicants to select a unit or unit type when applying. Applicants are instead directed to select a property and then select an application.

 -
 Click Save .
The included unit settings are saved.

 ePay

 These preferences establish any associated fees for submitting applications. Many of these fee settings can be overridden at the application template level which is covered later in this topic. For more information, refer to Tenant Web Access Apply Now ePay (System Web Preferences) .

 To set the default ePay preferences for Apply Now , do the following:

 -
 At the top, check Enable ePay .

 -
 Select the following information in the available fields:

 Option
 Description

 Application fee amount

 The amount to charge the applicant for submitting an online application.

 Application fee charge type

 The charge type associated with application fee charge.

 Have Zego manage platform fees

 If checked, Zego automatically collects its platform fees for online processing directly from applications. If checked, you do not need to set up platform fees for applications and the associated fields are disabled.

 Related Preferences

 This option is available only if the option to Have Zego manage platform fees is also enabled in the general ePay system preferences. For more information, refer to General ePay (System Preferences) .

 CC platform fee amount

 The amount to charge applicants if they use a credit card to pay their application fee online. You can add a flat amount or percentage of the application fee.

 ACH platform fee amount

 The amount to charge applicants if they use an automated clearing house (ACH) payment for their application fee online. You can add a flat amount or percentage of the application fee.

 Platform fee charge type

 The charge type associated with platform fee charge.

 Additional application fees

 To add additional application fees, click Add Item and set the Charge Type , Fee Amount , and Description for that fee in the available columns.

 Financial property

 The property that receives Apply Now application fees by default, such as the management company.

 Do not require payment for application to be submitted

 If checked, applicants can submit their Apply Now application without paying the above application fees. They receive a pop-up that informs them they must pay the fees later. In the Pay Later Message field, you can customize this pop-up's text.

 More Information

 Applicants who do not pay when submitting their application are not automatically screened. When payment is eventually received, you must manually initiate a screening of the applicant(s).

 Override system preferences for default payment types

 If checked, further restrict which forms of payment are accepted for Apply Now applications. Then below, check or uncheck each payment type to allow.

 Related Preferences

 Payment methods that are not enabled in system preferences cannot be enabled for Apply Now application fees. For more information, refer to Advanced ePay (System Preferences) .

 Require a disclaimer for ePay transactions

 If checked, applicants are required to check an acknowledgment box for the ePay transactions disclaimer to submit the application. In the text box below, you can customize the disclaimer message that displays to the applicants.

 -
 Click Save .
The ePay settings for Apply Now are saved.

 Establish Property-Specific Settings

 If there are specific properties that need different settings than what is set in system web preferences, you can override those settings at the property-level. Property-level settings apply only to application templates associated with the selected property. For more information, refer to Property Application Settings (Pop-Up) .

 To override Apply Now settings at the property level, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select the property.
The property's details page displays.

 -
 On the action bar to the right, click arrow_forward Application Settings .
The Property Application Settings pop-up displays.

 -
 To set property-specific disclaimers, in the Disclaimers tile, check Override System Web Preferences . Then select or modify the options described below.

 Field
 Description

 Extended Disclaimer Text

 No message is set by default, but you can write a custom additional disclaimer for any other information you wish for the applicant to acknowledge that is not included in the Consent to Screening Text and Information Accuracy Certification Text disclaimers. If no text is entered, this disclaimer does not display on the Apply Now application.

 Consent to Screening Text

 The default message and dialog box that applicants must check to consent to having a screening report run on their behalf.

 Information Accuracy Certification Text

 The default message and dialog box that applicants must check to acknowledge that the information entered on the application is correct.

 Require signature on application prior to completing

 If checked, requires the applicant enter their name in the signature block when checking the disclaimer acknowledgment.

 -
 To establish which units can be applied for at the property, in the Included Units tile, check Override System Web Preferences . Then select or modify the options described below.

 Option
 Description

 By Property Type

 The Property Type of the property determines if the applicant can select a unit or unit type. Applicants apply for specific units at properties with a with a type of Commercial , Manufactured Housing , Single Family , or no selection. For all other property types, the applicants apply by unit type.

 Display Units

 Always display only a list of units at the property. You can opt to display all units, units with a value of Yes on a specified UDF, or specific units based on filter criteria in an availability profile.

 Display Unit Types

 Always display only a list of unit types at the property. You can opt to display all unit types, selected unit types, or specific unit types based on filter criteria in an availability profile.

 By default, the name of the unit type displays in the list. To instead display the text in the unit type's Description field, check Use Unit Type Description .

 Do not display a Unit or Unit Type dropdown

 Do not allow applicants to select a unit or unit type when applying. Applicants are instead directed to select an application.

 -
 To customize the fees at the property, in the Fee Settings tile, check Override System Web Preferences . Then select or modify the options described below.

 Option
 Description

 Enable Online Application ePay

 Check or uncheck to determine if this property accepts ePay payments for fees association with Apply Now applications.

 Application Fee Charge Type

 The charge type associated with application fee charge.

 Application Fee Amount

 The amount to charge the applicant for submitting an online application.

 Platform Fee Charge Type

 The charge type associated with platform fee charge.

 Have Zego manage platform fees

 If checked, Zego to automatically collects its platform fees for online processing directly from applications. If checked, you do not need to set up platform fees for applications and the associated fields are disabled.

 Related Preferences

 This option is available only if the option to Have Zego manage platform fees is also enabled in the general ePay system preferences. For more information, refer to General ePay (System Preferences) .

 CC Platform Fee Amount

 The amount to charge applicants if they use a credit card to pay their application fee online. You can add a flat amount or percentage of the application fee.

 ACH Platform Fee Amount

 The amount to charge applicants if they use an automated clearing house (ACH) payment for their application fee online. You can add a flat amount or percentage of the application fee.

 Additional Application Fees

 To add additional application fees, click Add Item and set the Charge Type , Fee Amount , and Description for that fee in the available columns.

 Account Types

 Check or uncheck which forms of payment are accepted for Apply Now applications at this property.

 Related Preferences

 Payment methods that are not enabled in system preferences cannot be enabled for Apply Now application fees. For more information, refer to Advanced ePay (System Preferences) .

 Require a disclaimer for ePay Transactions

 If checked, applicants are required to check an acknowledgment box for the ePay transactions disclaimer to submit the application. In the text box below, you can customize the disclaimer message that displays to the applicants.

 -
 Click Save .
The application settings are saved for the property.

 Establish Application-Specific Settings

 If there are specific application templates that need different settings than what is set in system web preferences or on the property-level application settings, you can override those settings at the application template level. Application-level settings apply only to the selected application template.

 To override Apply Now settings at the application template level, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Application Templates and select a template.
The application template's details page displays.

 -
 On the action bar to the right, click .
The Application Template Settings pop-up displays.

 -
 To override application settings, check Override System Web Preferences . Then select or modify the options described below.

 Option
 Description

 Do not require payment for application to be submitted

 If checked, applicants can submit their Apply Now application without paying the associated application fees. They receive a pop-up that informs them they must pay the fees later. In the Pay Later Message field, you can customize this pop-up's text.

 More Information

 Applicants who do not pay when submitting their application are not automatically screened. When payment is eventually received, you must manually initiate a screening of the applicant(s).

 Reserve unit upon prospect application completion

 If checked, the unit is automatically reserved when an application is received to prevent other applicants from reserving the same unit.

 If the option of Enable Online Application ePay is selected on the Application Template Settings pop-up, the unit is reserved only if a payment is submitted with the application.

 Require income verification with online applications

 If checked, prospects submitting applications in Apply Now are prompted to complete income verification with AmRent . The following fields are available when this setting is enabled:

 Related Preferences

 This field and its dependent fields display only if, in system preferences, you have entered valid AmRent income verification credentials. For more information, refer to Screening Products Credentials (System Preferences) .

 Allow applicant to refresh the expired verification link X times

 If checked, prospects can request a new income verification link when their previous session expires, up to the number of times specified. You can specify a number between 1 and 20 .

 Income Verification Page Message

 The message to display on the income verification section of the prospect's application.

 Run screenings for online applications

 If checked, automatically run an AmRent screening once a prospect completes an Apply Now application. In the Screening report type field, select the type of screening to be used for Apply Now applicants.

 More Information

 Automated screenings can only be completed if ePay is enabled for the submitted application's associated property. For more information, refer to Property ePay Settings (Pop-Up) .

 -
 To override application fee settings, check Override Property Settings and Enable Online Application ePay . Then select or modify the options described below.

 Option
 Description

 Application Fee Amount

 The amount to charge the applicant for submitting an online application.

 Fee Charge Type

 The charge type associated with application fee charge.

 Additional Application Fees

 To add additional application fees, click Add Item and set the Charge Type , Fee Amount , and Description for that fee in the available columns.

 Allow Primary Applicant to pay fees for all applicants at time of submission

 If checked, the primary applicant can opt to pay the application fees of all subapplicants added to the primary application. If they do not, all additional applicants must pay their own application fees upon submitting their subapplication.

 -
 Click Save .
The application settings are saved.

 Set Additional Applicant Fees

 On each application, you can also specify general application and fee settings specific to the subapplicants added to an application. The sub-application retains its settings for other applications, but these settings override them when submitted with the current application template. Additionally, you can establish separate settings for each type of additional applicant. For example, a roommate may need to pay an additional application fee but a guarantor may not.

 To set application fees for additional applicants, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Leasing arrow_forward Application Templates and select a template.
The application template's details page displays.

 -
 In the template designer's section for additional applicants, click arrow_forward Edit next to the subapplicant type you wish to edit settings for.

The Edit Setup pop-up displays.

 -
 In the Options tile, select the following options:

 Option
 Description

 Run screenings for online applications

 If checked, automatically run an AmRent screening once the subapplicant completes an Apply Now application. In the Screening report type field, select the type of screening to be used.

 More Information

 Automated screenings can only be completed if ePay is enabled for the submitted application's associated property. For more information, refer to Property ePay Settings (Pop-Up) .

 Override Property Defaults

 If checked, allows you to set application fees and other fees specific to this subapplicant type. The available fields are described below.

 Fee Amount

 The amount to charge the subapplicant for submitting an online application.

 Fee Charge Type

 The charge type associated with application fee charge.

 -
 In the Additional Fees tile, you can add additional fees by clicking Add Item , then set the Charge Type , Fee Amount , and Description for in the available columns. This tile is available only if Override Property Defaults is checked.

 -
 Click OK .
The settings are saved for the subapplicant.
