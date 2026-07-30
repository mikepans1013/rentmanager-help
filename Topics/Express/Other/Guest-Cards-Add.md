# Add a Guest Card Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Guest-Cards-Add.htm

In order to use the guest cards tool, you must first set up guest card templates for your properties and/or management company. These templates are set up with fields that display on the guest card contact form, which can be added to your website to collect information from interested prospects or owner prospects. When that form is submitted, an account is automatically created for the guest in Rent Manager . By matching the guest card fields with associated fields in Rent Manager , any information provided by guests is included when their account is created.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Guest Card Templates
 Add, View

 For more information, refer to Control User Access .

 Step 1: Enter Guest Card Template General Information

 To add a new guest card template, do the following:

 -
 Go to arrow_forward Administration , then go to Customization arrow_forward Guest Card Templates .
The Guest Card Templates page displays.

 -
 Click Add Guest Card Template .

 -
 On the Select Template Type pop-up, select guest card template type ( Prospect or Owner Prospect ) and click Continue .

 -
 In the General Information tile, enter the following information:

 Field
 Description

 Name

 The unique name for the guest card template (e.g., Potential Owner , Commercial , Short Term Rentals ).

 Default Property

 The property to which guest accounts are assigned if no property is selected on the guest card.

 Submission Message

 The message to display to the guest after they have submitted their information via the guest card (e.g., Thank you! Your information has been submitted! ). This field has a limit of 255 characters.

 Require human verification (CAPTCHA) before Guest Card submission

 Requires guests to complete a CAPTCHA form, which helps prevent spam.

 Property

 The properties that are available for guests to select from the drop-down list. Alternatively, in the Group field, select a property group from the drop-down list.

 This section is available only if Prospect was selected as the Guest Card Type .

 Step 2: Determine Guest Card Fields

 In the Guest Card Fields tile, determine which fields display for guests to complete.

 To create additional guest card fields, click the Add drop-down arrow in the top right of the pop-up and select Add Guest Card Field .

 Field
 Description

 Label

 The name that displays on the guest card on your website.

 Required

 The guest card field is required for guests.

 Help Text

 The text that displays to provide the guest with more information about the answer they should submit (e.g., Enter all children and adults) .

 Match To

 The Rent Manager field where the guest's information is to be stored.

 Handling

 If, in the Match To field, you selected Property , Phone , Address , History/Note , or User Defined Field , this field allows you to further specify where the guest's information should be stored.

 For example, if you selected Address in the Match To field, you may select an Address Type in the Handling drop-down list.

 Related Preferences

 For a history/note item submitted through a guest card, Handling allows you to select a history/note category. If you have the system preference requiring a history/note category enabled, you must set Handling to a category on the guest card field with Match To set to History/Note . For more information, refer to General Options (System Preferences) .

 Step 3: Determine Guest Card Hidden Fields

 In the Hidden Fields tile, determine the fields that are automatically assigned to all prospect or owner prospect accounts created from guest cards and do not display on the guest card. For example, hidden fields can be used for tracking leasing agent information or the source (website, TV, referral, etc.) from which guests found out about your property.

 To add hidden fields, click the Add drop-down arrow in the top right of the pop-up and select Add Hidden Field .

 The following fields are available from the System Field drop-down list:

 Field
 Description

 Display Color

 The color to display to the left of the account name on the Prospects or Owner Prospects page. For more information, refer to Colors (Page) .

 Lead Source

 The lead source that is applied to accounts created from guest cards.

 Leasing Agent

 The name of a user who is designated as the guest's leasing agent. For a user to display in this list, their User Details page must have Sales Rep/Leasing Agent selected.

 User Defined Field

 The prospect- or owner prospect-level user defined field (UDF). In the User Defined Value field, enter or select the desired value for that UDF.

 To finalize the template and add it to the Guest Card Templates page, click Save .

 Next Steps

 Now that you have set up your guest card templates, you are ready to start utilizing the guest card tool. The recommended next steps are described in the table below.

 Action
 Description

 System Web Preferences

 Once you create your guest card templates, you can Enable Availability Web Access in system web preferences to use guest cards on your website. For more information, refer to Licensing (System Web Preferences) .

 Automated Notifications

 With automated notifications, you can send alerts to a customized list of recipients when a certain set of conditions are met. After you configure and save a guest card template, click Guest Card Notification to set up the associated automated notification(s). This can be used to thank the guest for their visit, or inform a manager or leasing agent that a new guest card has been submitted. For more information, refer to Prospect Guest Card Submitted (Automated Notification) and Owner Prospect Guest Card Submitted (Automated Notification) .

 Dashboard Tiles

 The Prospects and Owner Prospects dashboard tiles help you track prospects/owner prospects that have been created in Rent Manager through multiple sources. You can use these tiles to review the number of prospects/owner prospects created at certain properties, identify their assigned leasing agents/sales representatives, and monitor when they were last contacted. For more information, refer to Prospects (Dashboard Tile) and Owner Prospects (Dashboard Tile) .

 Guest Card Plugins

 After you create your templates, you can add a guest card plugin to your WordPress website and other non-WordPress websites. For more information, refer to Set Up Guest Card Plug-in .
