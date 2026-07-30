# Set Up Guest Card Plug-in

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Guest-Card-Plugin.htm

The guest cards tool allows you to place a contact form on your website for prospects or owner prospects to quickly submit information requesting that you contact them. This topic covers adding a guest card plug-in to your WordPress website and other non-WordPress websites.

 More Information

 Before setting up the plug-in for a website, you must create a guest card template that defines which questions a prospect or owner prospect should be asked, and in which Rent Manager fields to store that information. You can create unique guest card templates for each property and/or unit to ensure that all of the relevant information is provided by the contact. For more information, refer to Add a Guest Card Template .

 Additionally, if you are using a non-WordPress website, you (or your website developer) also must enable JQuery on your website.

 To ensure that your web developer can access necessary information from Rent Manager , a user account must be created for them with the following privileges:

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View

 Units
 View

 Tenants/Prospects
 Guest Card Templates
 View

 For more information, refer to Control User Access .

 Add Plug-in to WordPress Website

 After creating a template, you (or your website developer) must configure the plug-in in your WordPress settings.

 Warning

 WordPress requires a paid membership to add third-party plug-ins to your site. For more information, refer to the WordPress Support Center .

 To add a plug-in to your WordPress website, do the following:

 -
 Download the plug-in file at Rent Manager Guest Card Plugin .
The file is automatically saved to your downloads folder.

 -
 In a web browser, log in to your WordPress site and navigate to Plugins .

 -
 In the top right, click Upload .
The Install plugin page displays.

 -
 Select the downloaded guest card plug-in zip file, and click Install Now .

 -
 In the Rent Manager Guest Card section, click Activate .
The RM Guest Card Settings display in the Settings section.

 -
 Click RM Guest Card Settings .

 -
 Enter information into the following fields:

 Field
 Description

 Use guest cards default stylesheet?

 When checked, the guest card form's appearance is supplied by Rent Manager .

 More Information

 Unless you are working with a developer who can add custom styling to the form, leave this option checked. If unchecked, the form pulls from existing styles from your WordPress theme, and most themes do not have styling in place for the guest card.

 The name of the database you wish to connect to

 The name of the database (also called a Company Code) which should receive the information collected from guests on your site. The Company Code can be found in various places in Rent Manager , including the top right of the menu ribbon in Rent Manager Express .

 External services URL

 An optional URL that is used to connect to external services. By default, this is a production URL, but in a development or quality assurance environment this can be changed to map to external services or locally.

 More Information

 For most users, this option and the following Access token used to connect to External Services option are not used during the setup.

 Access token used to connect to External Services

 If using the optional External services URL , enter a valid token with guest cards privileges.

 -
 Click Save Changes .

 -
 Copy the shortcode, and navigate to the page in the WordPress Admin panel on which the guest card will appear. Required values are red, optional values are green.

 [rm-guest-cards template=' YourTemplateName ' location=' YourFriendlyLocationName ' property=' YourPropertyShortName ' unit=' YourUnitID ']

 -
 Paste the shortcode into the appropriate location, and replace the following default values with your information:

 More Information

 If you are using WordPress version 5.0 or higher and using the block editor, you must first insert a shortcode block on your page before pasting the shortcode.

 Default Value
 Description

 ' yourtemplatename '

 The name of the guest card template you wish to use.

 ' yourfriendlylocationname '

 The specific Rent Manager location from which you would like to pull and submit template information.

 -
 Optionally, if no property is specified by the user or if the template contains no field that maps to a property, replace ' yourpropertyshortname ' with the short name or PropertyID of the property that this plug-in defaults to. If no property is specified, the default property on the guest card template is used when creating the prospect. If you do not wish to specify a property, remove the following text from the shortcode: property=' yourpropertyshortname '.

 -
 Optionally, replace ' yourunitID ' with the specific system-level UnitID of the unit which is marked as the prospect’s interested unit. If you do not wish to specify a unit, remove the following text from the shortcode: unit=' yourunitID '.

 -
 Click Update to save your changes.

 Add Plug-in to Other Types of Websites

 After creating a template and enabling JQuery, you (or your website developer) must configure the plug-in for your website.

 More Information

 For an example of the plug-in, sample code can be downloaded at rentmanager.com .

 To add a plug-in to your website, do the following:

 -
 Reference the following required CDN in your file.

 <script type="text/javascript" src="https://cdn.rentmanager.com/js/GuestCardForm.js"></script>

 -
 Include the following CSS to add default styling to the form. The form will also pull from your site's built-in styles.

 <link rel="stylesheet" type="text/css" href="https://cdn.rentmanager.com/css/GuestCardForm.css">

 -
 Include a link to Google's reCAPTCHA API.

 More Information

 Google hosts this link. Therefore, it may change without notice.

 <script type="text/javascript" src="https://www.google.com/recaptcha/api.js"></script>

 -
 Create a <div> or other HTML element for your form with any class or ID, such as in the following example. The guest card form is generated inside of this element.

 <div class="rmGuestCardContainer"></div>

 -
 Add an options variable in your JavaScript with any name. Available options are defined in the plug-in options below.
For example, (replace the text in green with your information):

 var rmGuestCardOptions = {

 CompanyCode: " YOURCOMPANYCODE ",

 Location: " Default ",

 TemplateName: " YOURTEMPLATE ",

 DefaultProperty: " PROPSHORTNAME ",

 UnitID: 999

 }

 -
 In your script, initialize the form using the code below. Use the class, ID, and options that you specified above.

 $('.rmGuestCardContainer').GuestCardForm("initialize", rmGuestCardOptions);

 Plug-in Options

 As part of the guest cards plug-in, several options are available to be passed to modify the plug-in's behavior to suit the needs of any site. The following options are passed in a single object, upon initialization of the guest cards plug-in. Required options are noted in red .

 Option Name
 Description and Default Function

 CompanyCode

 The name of your database, which is used when connecting to the Rent Manager API.

 Default value: N/A

 Location

 The specific Rent Manager database location from which you would like to pull and submit template information. For more information, refer to Manage Locations (Pop-Up) Manage Locations (Pop-Up) .

 Default value: N/A

 TemplateName

 The name of the guest card template from which you wish to pull field information. This corresponds to the established guest card template in Rent Manager . Multiple templates may be used.

 Default value: N/A

 DefaultProperty

 The short name or PropertyID of the property that this plug-in defaults to if none is specified by the user or if the template contains no field that maps to a property. If no property is entered here in the code, then the default property specified on the guest card template is used when creating the prospect.

 The PropertyID is the system-generated ID number of the property. To obtain a property's ID number, you can open a letter template and run the following script:

 [Property().PropertyID]

 For more information, refer to Property Class (Script) .

 Default value: None

 UnitID

 If passed in, UnitID adds an entry to the prospect’s interested units. This corresponds to the system-level ID. You can view a unit's ID by viewing the order in which the units display on the Unit ID Listing report based on the numbers in the Unit ID column. This report can be obtained by downloading it from the online template library (OTL). For more information, refer to Online Template Library (Page) .

 Related Preferences

 If you are using Unit Availability and have established which units in Rent Manager are considered available to rent when a visitor conducts a unit availability search on your Web Template Suite website., set this equal to *{unitid}*. For more information, refer to Availability Profile (System Web Preferences) .

 Default value: None

 StartInitializationFunction

 This option may be passed in to begin running immediately, prior to initialization.

 Default value: None

 EndInitializationFunction

 This option may be passed in to run after initialization.

 Default value: None

 SubmitFunction

 This option may be passed in to run after submission.

 Default value: None

 ErrorHandlingFunction (xhr, textStatus, err, element)

 This option may be passed in to override error handling from external services and API exceptions in the plug-in. This function takes in the returned xhr object, textstatus, and error, and the parent element on which the plug-in is instantiated.

 Default value: A default function for error handling.
