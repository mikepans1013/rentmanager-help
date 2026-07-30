# Add a Prospect

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Prospect-Add.htm

Prospects in Rent Manager are potential tenants. These individuals express interest in your properties and rental units. The goal is to get prospects to sign leases and become paying tenants of your management company. Prospecting in Rent Manager is designed to help leasing agents and property managers manage prospect information. This topic cover creating prospects in your Rent Manager database so you can track the effectiveness of your leasing agents and marketing campaigns.

 To streamline the creation process, consider setting up prospect user-defined fields (UDFs), lead sources, and other information related to your prospects before adding prospect accounts. For more information, refer to Customize Prospect Options .

 More Information

 This topic covers the addition of prospective tenants at residential or commercial properties. For information about adding prospective guest at short-term rental (STR) properties, refer to Add a Short Term Rental (STR) Reservation .

 Step 1: Create Prospect and Add General Information

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Prospects
 Add, View

 For more information, refer to Control User Access .

 To create a prospect account, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Prospects .
The Prospects page displays.

 -
 At the top, click Add Prospect .

 On the left, the Prospect Information tab is selected by default when you open the wizard.

 More Information

 If your system has multiple add wizards set up using custom wizards, you will first be prompted to select the property . Your selection determines which wizard to display. If you change the selection during the add process, you will be prompted to switch wizards if applicable. For more information, refer to Design a Wizard .

 -
 In the Account tile, enter the prospect's information into the available fields described below.

 Field
 Description

 Addresses

 The prospect's current address(es). Select Default for the address that should be used for any correspondence with the prospect.

 Is Company

 If this is a commercial prospect, check Is Company . This option displays only if the selected property has a Property Type of Commercial .

 If this option is checked, enter the required Company Name , which is the name displayed as the prospect throughout Rent Manager .

 Name

 The prospect's First Name , Middle Name (if applicable), and Last Name . For commercial prospects, this is the name of the primary contact for the application.

 Property

 The property that the prospect has expressed interest in.

 Related Privileges

 To allow users to indicate a prospect's interest in a property the user does not have access to, the following privilege is required:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties

 Enabled

 For more information, refer to Control User Access .

 -
 In the Miscellaneous tile, enter the prospect's information into the available fields described below.

 Field
 Description

 Display Color

 A color to help identify prospects of certain types, groups, or any other specifications you prefer, such as prospects with a specific lead source or interest level. The color displays as a bar to the left of the prospect in some areas of Rent Manager , such as the Prospects list page.

 Interest Level

 The prospect's interest level ( 0 through 10 , with 10 being the highest) in your property.

 Lead Source

 The main source of information that describes how this prospect learned about your company. This information is reflected in the Box Score report and can give you insight on what types of marketing strategies are most effective for your company.

 Leasing Agent

 The user who acts as the prospect's leasing agent, if applicable. Users with the option Sales Rep/Leasing Agent selected on the user's details page display in this list.

 Stage

 The prospect stage that describes the current progress of a prospect through the leasing process. Tracking these sources can be beneficial for certain prospecting reports (e.g., Box Score and Prospect Stage Comparison ) that assess the marketing strategies you have employed.

 -
 In the Original Contact tile, enter the prospect's information into the available fields described below.

 Field
 Description

 Contact Date Time

 The date and time of the prospect's first contact. For the prospect to display in the Box Score report, the date you enter must be included in the report options.

 Contact Description

 A description of the conversation or exchange with the prospect. For example, Received an email from the prospect, they are interested in the 2B/B at the Riverview property .

 Original Contact

 The method (contact type) by which the prospect contacted you the first time. This contact type displays in the Box Score report.

 Spoke with Prospect

 If you selected Call for the Original Contact , check Spoke with Prospect if you actually spoke with the prospect rather than leaving a message or voicemail.

 Related Preferences

 The Enable "Spoke with prospect" on new calls by default option in system preferences determines if this option is checked by default. For more information, refer to Prospect (System Preferences) .

 Step 2: Enter Prospect Contact Information

 After entering the prospect's general information, select the Contacts tab on the left. In the Contacts tile, enter information in the following fields. To add additional contacts, such as potential occupants or guarantors, click Add New Contact and fill out their contact information.

 Field
 Description

 Applicant Type

 The type of applicant that best describes the contact (e.g., Primary , Guarantor ).

 Contact Type

 The user-created categorization that best describes the contact (e.g., Initial Contact , Co-Signer ). For more information, refer to Contact Types (Page) .

 Email Address

 The email address used to communicate with the contact.

 Name

 The contact's First Name , Middle Name (if applicable), and Last Name . The first contact's information populate automatically from the details entered on the Prospect Information tab. For commercial prospects, this is the name of the primary contact for the application.

 Phone Number

 The primary phone number used to communicate with the contact. To enable the phone number for texting, click to enable the phone number for texting. Alternatively, to disable texting, click . The Ext. field for extensions is removed when texting is enabled.

 Primary

 Check to indicate that this person is the main point of contact for the prospect account. Only one contact can be marked as Primary .

 Show On Statement/Labels

 Check to include the contact's name on prospect and prospect contact labels. Only two contacts may have Show On Statement/Labels checked on each prospect account. The first contact on the account is always the Primary prospect, so by default, the prospect has Show On Statement/Labels checked.

 Step 3: Enter Prospect UDF Values

 After entering the prospect's contact information, select the User Defined Fields tab on the left. In the User Defined Fields tile, only required UDFs display in the Name column. Required UDFs are marked with an asterisk (*) and must have a Value entered to create the prospect.

 To view all the prospect-type UDFs in the database, click View All UDFs . For each UDF applicable to the prospect you are adding, enter or select the information in the Value column for the associated UDF.

 Step 4: Add Unit Preferences

 After entering the prospect's UDF information, select the Preferences tab on the left.

 In the Preferences section, enter the preferences the prospect may have for their future unit into the available fields described below. The data you enter or select for these fields filters the available units in the next step so that only units matching that criteria display in the list.

 Field
 Description

 Expected Move In Date

 The prospect's expected move-in date.

 You should select an expected move-in date that corresponds with the rental plans of the prospect (i.e., in two months, three months, and so on) to view the units that are available at that time.

 Expected Move Out Date

 If known, the prospect's expected move-out date. This is a soft move-out date that does not stop recurring charges from being posted or list the unit as vacant once the date has passed.

 Number of People

 The number of people who will occupy the unit. This can not exceed the unit’s Max Occupancy value.

 Preferred Amenities

 The features, services, or other amenities the prospect wants included with their unit.

 Preferred Floors

 The floor(s) where the prospect is willing to rent a unit.

 Preferred Units Types

 The type(s) of unit the prospect is looking to rent.

 Rent Max

 The highest rent amount the prospect anticipates paying for a unit.

 Rent Min

 The lowest rent amount the prospect anticipates paying for a unit.

 Step 5: Select Units Matching Criteria

 After entering the prospect's unit preference, select the Units Matching Criteria tab on the left. A list of units that match the prospect's unit preferences display in the list.

 To find a unit that matches the prospect's preferences, do the following:

 -
 Check any of the following options to further filter the units in the list:

 Field
 Description

 Show all Units matching criteria

 Units that are occupied by a tenant during the selected move-in/out time display.

 If you check Show all Units matching criteria and Show matches from all Properties , all units ( Available , Occupied , Reserved , Inactive ) that match the criteria within any property display.

 Show matches from all Properties

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties

 Enabled

 For more information, refer to Control User Access .

 All units that match the criteria within any property display.

 If you check Show all Units matching criteria and Show matches from all Properties , all units ( Available , Occupied , Reserved , Inactive ) that match the criteria at any property display.

 -
 In the Include section, if you check Other rentable items , Assets , or Units , available units of those types display.

 -
 Check the I , WL  and/or R  columns to place a prospect on the waiting list or reserve a unit for that prospect.

 Column
 Description

 Interested (I)

 Indicates the prospect is interested in leasing the unit but has not made a decision yet.

 More Information

 This information is available only on a prospect's details page by default, but it can be retrieved for Report Writer reports and letter templates using the InterestedUnits function. For more information, refer to Prospect Class (Script) .

 Related Privileges

 This is the only option that displays if the user has the following privilege and is viewing units associated with a property they do not have access to:

 Group
 Privilege
 Column

 Tenants/Prospects
 Access limited occupancy information for all properties
 Enabled

 For more information, refer to Control User Access .

 Reserve (R)

 Reserves the unit for the prospect. Once a unit is reserved, it displays on the prospect's account in the Reservation/Expected Lease Information tile and cannot be reserved for another prospect. In addition, the prospect displays on the Occupancy tile for that unit. Only one unit may be reserved per prospect.

 Waiting List (WL)

 Places the prospect on the waiting list for the corresponding unit. This causes the prospect to display in the Prospect Waiting List report, giving them priority when the unit becomes move-in ready.

 -
 If the selected property has a Property Type of Manufactured Housing and the R column is checked for a unit in the Unit Matching Criteria tile, one of the following tiles displays:

 Tile
 Description

 Home

 If you do not wish to reserve the home-type asset associated with the unit, uncheck the Reserve Associated Home option. If left checked, both the asset and unit are leased to the prospect simultaneously. The Home field is read-only and displays the asset currently located on the unit, as specified on the asset's details page.

 This tile displays only if a home-type asset is located on that unit (lot) as of the date in the Preferences tile's Expected Move In Date field.

 RV Information

 Determines whether the prospect has a resident-owned RV. This tile displays only if a home-type asset is not associated with that unit (lot) on or between the dates in the Expected Move In Date and Expected Move Out Date fields.

 Each option is described below.

 No, reserve unit only

 The prospect does not have a resident-owned RV.

 Yes, enter resident owned RV details

 The prospect has a resident-owned RV they intend to place on the lot. If selected, enter information about the RV into the available fields. If the prospect is converted to a tenant, this information is included on their lease.

 Step 6: Add Rent Quotes

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Rent Quotes
 Add

 For more information, refer to Control User Access .

 Once you have selected the desired unit(s), select the Rent Quotes tab on the left. You can manually create a new rent quote by clicking Add Rent Quote , or automatically add a line item for the unit(s) selected on the Units Matching Criteria tab by clicking Add from Selected Units .

 Enter information in the following columns:

 Column
 Description

 Amount

 The dollar amount offered to the prospect for the corresponding Unit and Lease Term .

 Charge Type

 The rent charge type to use for the quoted recurring charge. The charge types displayed are based on the charge types selected on the property's Rent Charge Types field.

 Expiration

 The number of days after the Date Quoted or the specific date that rent quote is no longer valid. You can select one of the relative options by clicking (e.g., 7 Days , or enter a specific date.

 Lease Term

 The duration of the lease for which the quote price is applicable. For more information, refer to Lease Terms (Page) .

 If the quoted unit later becomes reserved, this selection populates on the prospect's details page in the Reservation/Expected Lease Information tile's Lease Term field.

 Move In

 The date on which the prospect plans to move into the unit.

 If the quoted unit later becomes reserved, this date determines the dates that populate on the prospect's details page in the Reservation/Expected Lease Information tile in the Expected Lease Start , Reserved Move In , and Expected Lease End . The fields are calculated based on this date and the selected Lease Term .

 Property

 The property for which the prospect has been offered a rent quote.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The unit for which the prospect has been offered a rent quote.

 Step 7: Save the New Prospect

 Once you have added any rent quotes, click Save and Finish to complete the prospect creation process and close the pop-up. Alternatively, click Save and New to finish adding the prospect and refresh the pop-up to add another prospect account.
