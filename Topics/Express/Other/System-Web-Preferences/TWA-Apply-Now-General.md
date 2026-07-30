# Tenant Web Access Apply Now General (System Web Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Web-Preferences/TWA-Apply-Now-General.htm

The Apply Now preference group is part of Tenant Web Access (TWA) system web preferences which sets general options regarding Apply Now applications.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 Related Preferences

 To access Tenant Web Access settings, at least one location must be enabled for TWA. For more information, refer to Licensing (System Web Preferences) .

 To set these system web preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Apply Now arrow_forward General .

 -
 Select the option to Enable Apply Now

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes and remain on the page.

 Preference Descriptions

 Each setting is described below:

 Option
 Description

 Applications allowed to be submitted within 5 minutes (1-200)

 Enter the maximum number of applications that you would like to be submitted within 5 minutes from a single IP address. The maximum that you can enter is 200; the default is 10. This option is meant to protect your site from spam and denial of service attacks.

 Default Application Template

 Select one of the application templates as the default template for your database.

 Default Property

 Select the property to assign new application-generated prospects. This property becomes a system default. It is used only if your application does not contain the property to which the applicant is applying.

 Always use Default Property for prospect creation

 Uses the  Default Property for prospects created with Apply Now instead of the property associated with the unit for which the prospect is applying.

 Reserve unit upon prospect application completion

 The unit can be automatically reserved when an application is received to prevent other applicants from reserving the same unit.

 In order to automatically populate a rent quote's Move In date from an Apply Now application to the prospect's Expected Lease Start field, the following conditions must be met:

 -
 The lease's Move In field is matched to a field on the application template.

 -
 The applicant entered a value in the application's field mapped to Move In .

 -
 The Create a rent quote with application using market rent option in the Prospect Rent Quotes section below is enabled.

 If a Move In date is not provided in the Apply Now link, the Expected Lease Start automatically populates with the rent quote's Move In date. If a Lease Term is provided, the rent quote's term automatically populates in the prospect's Lease Term field. If a Move In date and Lease Term are provided, the Expected Lease Start and the provided term are used to calculate and automatically populate the Expected Lease End field.

 Related Preferences

 If the system web preferences option of Enable ePay is selected, the unit is reserved only if a payment is submitted with the application. For more information, refer to Tenant Web Access Apply Now ePay (System Web Preferences) .

 Apply Now Page Message

 This field is populated with a default message which displays for prospects who have navigated to Apply Now . This text is editable, but cannot be left blank.

 More Information

 If you wish to edit the text in the Apply Now Page Message field, you cannot exceed 223 characters.

 Run screenings for online applications

 Check to run an AmRent screening once a prospect completes an Apply Now application.

 More Information

 In order to complete automatic screenings, ePay must be enabled for the property on the property's ePay settings page.

 Screening Report Type

 Select the type of screening to be used for Apply Now applicants. For more information, refer to Types of Screening Reports .

 Require income verification with online applications

 If checked, prospects submitting applications in Apply Now are prompted to complete income verification with AmRent .

 Related Preferences

 This field and its dependent fields display only if, in system preferences, you have entered valid AmRent income verification credentials. For more information, refer to Screening Products Credentials (System Preferences) .

 The following fields are available when this setting is enabled:

 Allow applicant to refresh the expired verification link X times

 If checked, prospects can request a new income verification link when their previous session expires, up to the number of times specified. You can specify a number between 1 and 20 .

 Income Verification Page Message

 The message to display on the income verification section of the prospect's application.

 Require signature on application prior to completing

 Select this option to require the applicant to check the disclaimer(s) on the application and enter their name in the signature block.

 Link submitted applications to existing prospects

 Enable to search your database for prospects whose phone number or email matches the applicant's. The applicant is then required to select the property they are interested in when signing up for Apply Now .

 If an existing prospect with the same email and/or phone number is found, Rent Manager then examines the property the applicant selected. If that property matches the Property selected on the prospect's details page, in the General tile, Rent Manager considers the prospects a match.

 When an applicant and an existing prospect are a match, Rent Manager does the following:

 -
 A matching prospect exists, but there is no application: The application is added to the existing prospect account.

 -
 A matching prospect exists, and they have submitted an application: A separate prospect account is created.

 More Information

 Only prospect accounts that have a Status of Prospect are included in the search.

 Display warning if an application is submitted without additional applicants

 Check to display a pop-up message when an application or sub-application that has an Additional Applicants section is submitted, and no information for additional applicants has been entered. By default, the following message displays in TWA:

 Optionally, enter a custom message in the text box below the option. The Submit Application and Add Additional Applicant buttons on the pop-up are not affected by this custom message.

 More Information

 If an applicant clicks Add Additional Applicant , they are returned to the in-progress application. If they click Submit Application , the applicant is submitted as-is.

 Apply Now Verification Email

 Click Customize Apply Now Verification Email to change the from name, reply email address, and default text of the email that is sent when an applicant signs up for an Apply Now account:

 On the Customize Apply Now Verification Email pop-up, change the sender name, reply email, and text in the following fields as desired.

 From Name

 Enter the sender name that displays on the email the tenant receives, such as the name of the property manager or management company.

 Reply To Email

 Enter the email address that displays as the sender of the email so that recipients can reply to the email notification. If you do not want recipients to reply to the email, leave this field blank.

 Email Subject

 Enter the title of the email that is sent to verify their email account.

 Email body text to display before the account finalization link

 Enter the text to display above the Finalize button inside the email, such as a reminder that they created a Tenant Web Access account.

 Email body text to display after the account finalization link

 Enter the text to display below the Finalize button inside the email, such as directions on what to do if they did not request a Tenant Web Access account.

 Prospect Rent Quotes

 Select Create a rent quote with application using market rent to automatically generate a rent quote when a primary applicant submits their application. In order for quotes to generate successfully, the following conditions must be met:

 -
 The application was submitted for a single unit. The application must have the ability to select a unit.

 -
 The prospect does not have an Active or Reserved quote for the unit they applied to.

 -
 The unit's details page must have an active market rent value in the Current Market Rent tile. If a move-in date is listed on the application, the market rent is used as of that date; otherwise, the market rent active as of the submission date is used.

 If Move In is a matched field on the application template and the applicant enters a value in this field, the prospect's Rent Quote tile automatically populates with this date.

 To set an expiration date for automatically created rent quotes, check Rent quotes expire in and enter the number of days before the quote expires. For example, if an application is submitted on 1/1/ 2026 , the generated rent quote would expire on 1/8/ 2026 .

 Related Preferences

 If the Reserve unit upon prospect application complete system web preference is enabled, all rent quotes created from applications are assigned the Reserved status. If the prospect already has an Active rent quote for the unit at which they applied, that quote's status is updated to Reserved when their application is submitted.
