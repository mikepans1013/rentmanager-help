# Property Application Settings (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Property-Application-Settings.htm

Property application settings allow you to specify fees, disclaimers, and what units are included as available when prospects submit an application—through Apply Now or through a custom application setup—for the property. These property-level settings override the settings specified in system web preferences.

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 Add, View

 For more information, refer to Control User Access .

 To view the property application settings, go to arrow_forward Rental Info arrow_forward Properties and select a property. On the property's details page click arrow_forward Application Settings .

 Related Preferences

 The Application Settings option displays only if one of the following are enabled in system web preferences:

 - In the Apply Now group, under the General section, the Enable Apply Now option.

 - In the Licensing group, under the Custom Applications section, the associated database location must be checked.

 For more information, refer to Tenant Web Access Apply Now General (System Web Preferences) and Licensing (System Web Preferences) .

 Set Disclaimers

 The Disclaimers section allows you to define the text that displays as disclaimers when submitting an application for the property.

 To manage the disclaimers in this section, check Override System Web Preferences and enter information into the following fields:

 Option
 Description

 Extended Disclaimer Text

 Any disclaimer messages for your business that need to be communicated to prospects when they submit applications. This message displays at the beginning of the application.

 Consent to Screening Text

 A message that applicants must check to consent to having a screening the property management company conduct a background screening on them. This message displays at the end of the application.

 Information Accuracy Certification Text

 A message that applicants must check to confirm that the application contains accurate information. This message displays at the end of the application.

 Additionally, check Require signature on application prior to completing to require that prospects electronically sign their applications to confirm that they are providing accurate information prior to submitting.

 Set Included Units

 The Included Units section allows you to determine which units or unit types are available for prospects to select when completing their Apply Now applications.

 To determine how units or unit types display for the property's applications, check Override System Web Preferences and configure the following options:

 Option
 Description

 By Property Type

 Use the Property Type set on the property's details page to determine whether prospects select units or unit types on the application.

 When applying, prospects select from a list of unit types for properties with a type of Apartment , Duplex , Multi Family , or Storage . For all other property types, prospects select from a list of units.

 Display Units

 Define which units display in the drop-down lists using one of the options below. This option always displays a unit selection drop-down list for units associated with the property.

 All

 All units at the property display.

 By User Defined Field

 Determines what units display based on the selected unit-level user defined field with a type of Yes/No . All units that have the selected user defined field value set to Yes display in the drop-down list.

 By Unit Availability Profile

 Units which meet the availability criteria as determined in the selected unit availability profile in system web preferences display. For more information, refer to Availability Profile (System Web Preferences) .

 Display Unit Types

 Define which units display in the drop-down lists using one of the options below. This option always display a unit type selection drop-down list for unit types associated with the property.

 Additionally, check Use Unit Type Description to display the text entered in the Description field of selected unit type's details page. If no Description is available, the Unit Type name is used.

 All

 All unit types at the selected property display.

 By Selection

 Determines what units display based on the selected unit-level user defined field with a type of Yes/No . All units that have the selected user defined field value set to Yes display in the drop-down list.

 By Unit Availability Profile

 Unit types which meet the availability criteria as determined in the selected unit availability profile in system web preferences display. For more information, refer to Availability Profile (System Web Preferences) .

 Do not display a unit or a unit type dropdown

 Directs the prospect to the application selection page without allowing them to select a unit or unit type.

 Configure Fee Settings

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Access ePay Settings
 Enable

 For more information, refer to Control User Access .

 The Fee Settings section allows you to set parameters that allow applicants to use Zego ePay to pay any fees charged for submitting an online application. To manage these settings, check Enable Online Application ePay to enable applicants to pay their application fees online using ePay . Otherwise, uncheck this option. If checked, applicants see a Payments page before they submit the online application.

 To configure fees for the property's applications, check Override System Web Preferences and configure the following options:

 Option
 Description

 Application Fee Amount

 The amount to charge as an application fee for applications completed online.

 Application Fee Charge Type

 The charge type to be associated with application fees.

 Platform Fee Charge Type

 The charge type to be associated with platform fees.

 Have Zego Manage Platform Fees

 Allows Zego to automatically collect its platform fees for online processing directly from applications.

 Related Preferences

 This option is available only if the system preference to Have Zego manage platform fees is enabled. For more information refer to General ePay (System Preferences) .

 CC Platform Fee Amount

 The platform fee amount to charge for using a credit card to pay the application fee online. To charge a percentage of the amount collected instead of a flat fee, check Percentage and enter the value.

 ACH Platform Fee Amount

 The platform fee amount to charge for processing an ACH payment to pay the application fee online.
To charge a percentage of the amount collected instead of a flat fee, check Percentage and enter the value.

 Additional Application Fees

 Any additional fees to be charged when the application is submitted. For each additional application fee, enter a Description , the Charge Type for the fee, and the Fee Amount .

 Account Types

 The available payment options for prospects to use when paying application fees for this property.

 Related Preferences

 Account types can be used for property-specific applications even if they are not selected in system preferences. For more information, refer to Advanced ePay (System Preferences) .

 Require a disclaimer for ePay transactions

 Allows you to enter a disclaimer for ePay transactions associated with the application process.
 Applicants are required to check the box next to the disclaimer to verify they read the message before submitting the application fee payment.
