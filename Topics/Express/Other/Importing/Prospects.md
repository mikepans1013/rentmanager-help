# Import Prospects

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Prospects.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing prospects, you can add new prospect accounts or add data to existing prospect records in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Prospects
 Enabled

 Tenants/Prospects
 Prospects
 Add, View, Edit

 For more information, refer to Control User Access .

 Step 1: Prepare Import File

 Before beginning the import process, prepare an import file (sometimes called a flat file or data file) outside of Rent Manager . The most common file type used for importing is a comma-separated values (CSV) file, and examples in this section are based on that file type. The following file types are accepted for importing:

 -
 Comma-separated values (CSV)

 -
 Text (TXT)

 -
 Tab-separated (TAB)

 -
 Intuit Interchange Format (IIF)

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of prospect data is displayed with each row representing a different prospect account and each column representing information about that prospect.

 Required Fields

 In order to import prospects, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new prospects, or updating the information for prospects already in Rent Manager .

 Import Type
 Description

 Add New Prospects

 For adding new prospects to Rent Manager , the following field must have a value entered:

 -
 Last Name

 Update Existing Prospects

 For updating prospects already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Account Number

 -
 Property Short Name

 -
 Unit

 -
 A user defined field

 Field Descriptions

 You can import values into any Rent Manager prospect field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice. RV fields apply only to prospects with a leased unit assigned to Manufactured Housing , Short Term Rental , and RV/Campground property types.

 The following fields can be added as columns to import prospect information:

 Field
 Description

 Account Number

 The prospect account's system-generated account number, as shown on the account's details page in the Account# field. This is used only for update imports.

 Annual Income

 The prospect's annual net income to be used when screening the prospect and to make rental decisions.

 Application Date

 The date, as entered in the MM/DD/YYYY format, on which the prospect’s application was submitted.

 Birthday

 The date, as entered in the MM/DD/YYYY format, of the prospect's birthday.

 City

 The city as listed on the prospect detail page's Addresses tile.

 Comment

 A note providing additional information about the prospect.

 Company Name

 If the prospect is associated with a commercial property, the company name of the prospect.

 Default Address Type

 One of the existing address types to be the default address type for the prospect.

 Default Phone

 If the phone number type selected for this column should be the prospect's default phone number, enter True or Yes . Otherwise, enter No or False .

 Display

 The name of the prospect-type color to display on the prospect name in Rent Manager . For more information, refer to Colors (Page) .

 If the color name entered is not in Rent Manager , the prospect is assigned the default color.

 Email

 The email address of the prospect.

 Employer

 The name of the prospect's place of work.

 First and Last Name

 The first and last name of the prospect if importing the prospect's first and last name in the same column.

 If the first and last name of the prospect are in separate columns, instead use the separate First Name and Last Name field options.

 First Name

 The first name of the prospect if importing the prospects' first and last names in separate columns.

 If the first and last name of the prospect are both in one column, instead use the combined First and Last Name field option.

 Interest Level

 A number from 0 through 10 that gauges the interest of the prospect in leasing on the property.

 Last Name

 The last name of the prospect if importing prospects' first and last names in separate columns.

 If the first and last name of the prospect are both in one column, instead use the combined First and Last Name field option.

 Lead Source

 One of the prospect lead sources that determines how this prospect heard about the property. For more information, refer to Prospect Lead Sources (Page) .

 Leasing Agent

 The name of a user who has the Sales Rep/Leasing Agent option checked on the user's details page to determine who is responsible for this prospect.

 License

 The prospect's vehicle license plate number.

 Maximum Rent Amount

 The maximum amount this prospect would be willing to pay in rent.

 Middle Name

 The middle name of the prospect.

 Minimum Rent Amount

 The minimum amount this prospect would be willing to pay in rent.

 Move In

 The date this prospect plans to move into the unit.

 Move Out

 The date this prospect plans to move out of the unit.

 Num of People

 The total number of people to live in the unit with the prospect, including the prospect.

 Occupant City

 The city as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Default Address Type

 One of the existing address types to be the default address type for a contact and to be included on the prospect account.

 Occupant First and Last Name

 The first and last name of a contact to be included on the prospect account if importing the occupant's first and last name in the same column.

 If the first and last name of the contact are in separate columns, instead use the separate Occupant First Name and Occupant Last Name field options.

 Occupant First Name

 The first name of a contact to be included on the prospect account.

 If the first and last name of the contact are both in one column, instead use the combined Occupant First and Last Name field option.

 Occupant Last Name

 The last name of a contact to be included on the prospect account.

 If the first and last name of the contact are both in one column, instead use the combined Occupant First and Last Name field option.

 Occupant Postal Code

 The postal or zip code as listed on the View Contacts pop-up, in the Addresses section.

 Occupant State

 The state as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Street

 The street as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Street 2

 If applicable, the second line of the street address as listed in the contact's Addresses section.

 Occupant Type

 One of the contact types to categorize a contact and to be included on the prospect account.

 Pet Breed

 The name of the breed for the prospect's pet.

 Pet Color

 The color or markings identifiable on the prospect's pet.

 Pet Description

 Any other relevant information to provide identification to the prospect's pet.

 Pet Name

 The name of the pet associated with the prospect.

 Pet Size

 A descriptor of how large or small, or any size in between, to associate with the prospect's pet.

 Pet Types

 One of the pet types to categorize the prospect's pet.

 Phone Number

 One of the phone numbers for the prospect to be listed on the prospect's details page.

 Postal Code

 The postal or zip code as listed on the prospect details page's Addresses tile.

 Property Short Name

 The Short Name of the property with which the prospect is associated, as specified on the property's details page.

 Prospect Stage

 The current prospect stage associated with the prospect. For more information, refer to Prospect Stages (Page) .

 SMS/Text Ready

 If the phone number type selected for this column is able to receive text messages, enter Yes or True . Otherwise, enter No or False .

 Security Deposit Held

 If applicable, the total amount of the security deposit held for the prospect.

 Social Security #

 The legal social security number issued to the prospect.

 State

 The state as listed on the prospect details page's Addresses tile.

 Street

 The street as listed on the prospect details page's Addresses tile.

 Street 2

 If applicable, the second line of the street address as listed on the prospect details page's Addresses tile.

 Type

 One of the contact types to categorize the prospect. For more information, refer to Contact Types (Page) .

 Unit

 The Name of the unit at the prospect's associated property.

 Unit Type

 The unit type of the unit at the prospect's associated property.

 User Defined Field

 Any prospect-type user defined fields (UDFs) can be added as their own column. For more information, refer to Prospect-Type User Defined Fields (Pop-Up) .

 Vehicle

 The make and model of the car or truck belonging to the prospect.

 RV Field

 Description

 RV Amps

 The amperage(s) of the electrical hookup that the prospect's RV requires. Enter one of the following options exactly:

 -
 No Hookups

 -
 20

 -
 30

 -
 50

 RV Homeowner Status

 The classification of the asset associated with the prospect, specified in the asset's Homeowner Status field. This field can be imported only for prospects with a leased unit assigned to the Manufactured Housing property type.

 RV Length

 The numerical length of the prospect's RV.

 RV License

 The license plate number of the prospect's RV.

 RV Make

 The manufacturing company of the prospect's RV.

 RV Model

 The specific model of the prospect's RV.

 RV Number of Slide Outs

 The number of slide outs or room extenders on the prospect's RV. The value must be between zero and four.

 RV Slide Outs

 The type(s) of slide outs or room extenders on the prospect's RV. Enter one or more of the following options separated by commas:

 -
 All

 -
 Passenger

 -
 Driver

 -
 Rear

 RV Type

 The type of RV associated with the prospect. Enter one of the following options exactly:

 -
 Fifth Wheel

 -
 Hybrid Trailer

 -
 Motorclass A

 -
 Motorclass B

 -
 Motorclass C

 -
 Pop Up/Tent Trailer

 -
 Tent

 -
 Toy Hauler

 -
 Travel Trailer

 -
 Truck Camper

 -
 Other

 RV Width

 The numerical width of the prospect's RV.

 RV Year

 The year the prospect's RV or vehicle was manufactured.

 Step 2: Begin the Import

 To import prospects, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Prospects .
The Import Prospects Settings pop-up displays.

 -
 Select one of the available options and click Next .

 Option
 Description

 Import without using template

 Proceed to importing the file without using preestablished settings.

 Import using template

 Use a previously created template, which allows you to use the options established during a prior import. In the available drop-down list, select which template to use.

 -
 In the File Name field, click to select the data file to import. Then, click Next .

 -
 In the Add or Update section, select one of the available options and click Next .

 Option
 Description

 Add New Prospects

 Create new prospect accounts in Rent Manager .

 Update Existing Prospects

 Replace or add information for prospects that are already in Rent Manager .

 To remove information from any fields on existing prospects where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the prospect is unchanged.

 -
 Select the needed information in the available fields. The section and options that display vary depending on whether you are adding or updating prospect accounts.

 Section
 Description

 Default Values

 Select a Property to apply to the imported records where there is an empty cell in the Property Short Name column.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Match to prospects by

 Select an option to specify how Rent Manager matches the prospects in your import file to the existing prospect records. The available options are described below.

 Use Account Number supplied in the import file

 Match the data to the prospect's system-generated account number.

 Use Property Short Name and Unit supplied in the import file

 Match the data to the property Short Name as it is entered on the property's details page and the unit Name as it is entered on the unit's details page that are associated with the prospect.

 Use Unit supplied in the import file and the following Property

 Match the data to the unit Name  as it is entered on the unit's details page and the selected Property from the drop-down list.

 Use the following value from a User Defined Field

 Match to the value data for the user defined field selected from the drop-down list.

 -
 Click Next .
The pop-up closes and the Import Prospects page displays.

 Step 3: Configure Import File for Rent Manager

 In the Import Settings section, you may view or edit the previously entered default values to apply to the imported accounts or records. In the Details section's File Name field, you can view the currently selected import file, or click Upload Files to select a different import file. If you have selected a valid, readable file, its data is displayed in a preview on the lower half of the page.

 To continue importing, do the following:

 -
 In the Field Settings section, select an option for the available fields described below.

 Field
 Description

 Delimited Fields

 The character used to mark the beginning and ending of the columns of data.

 Generally, CSV files use commas, TXT files use spaces, and TAB files use tabs. If the data displays incorrectly in the preview, you can select each character option until the data displays correctly.

 Text Qualifier

 If your import file uses a delimiter that can be found within the actual text data, you may need to surround that data in quotation marks or apostrophes to indicate that it is all part of one data column. This is not commonly needed for CSV files, but may be necessary for simpler formats such as TXT files.

 For example, while importing properties, if you use spaces as the delimiter in a TXT file and a property name is two words, you would need to use a text qualifier to indicate that both words apply to the property Name column.

 In the image above, the property name Willow Bridge was not entered in quotation marks. Because the delimiter used for the TXT file is spaces, the property name was split into two separate columns. As a result, all data after is shifted one column over and the imported data cannot be matched accurately.

 None

 Column data is separated only by the selection in the Delimited Fields field.

 Quote

 Column data is first separated by quotation marks ("), then by the selection in the Delimited Fields field.

 Apostrophe

 Column data is first separated by apostrophes ('), then by the selection in the Delimited Fields field.

 -
 In the Begin import from line field, enter the starting line number from which information should be imported. For example, if the first row in your import file has old or irrelevant data you do not want to import, enter 2 to start the import from the second line of data. Empty rows are ignored.

 -
 If the line on which the import begins (as specified above) contains field names or column headers, check Line # is a header . This helps Rent Manager automatically match columns and fields and can save time by requiring less manual input for matching fields.

 Step 4: Match Data Fields

 Now that Rent Manager is configured to read your import file, you can begin matching columns from your import file to specific fields in Rent Manager . Columns that you need to manually match display in orange and are labeled Not Matched . If you checked Line # is a header , columns that matched to your header titles display in green and are labeled Import Ready .

 To match columns to their associated Rent Manager fields, do the following:

 -
 In the Details section, click an orange column labeled Not Matched .

 -
 Select information for the available fields described below.

 Field
 Description

 Match To

 The Rent Manager field where the data in this column should be imported.

 For example, if the column has data for email addresses, select Email .

 Handling

 Some Rent Manager fields require further specification, such as address information or user defined fields (UDFs). If no handling is needed, this field is disabled.

 For example, if the Match To field has Postal Code selected, you must select the address type to which that postal code information applies. For most UDFs, set the Match To field to User Defined Field , then in the Handling field, select the specific UDF where the column data belongs.

 The column name populates with the selected field and the label changes to Import Ready in green.

 -
 Repeat for every orange column labeled Not Matched until all columns you wish to import are correctly matched to the appropriate fields. Only green columns labeled Import Ready will be imported.

 -
 On the left, all rows of data are selected by default. If there are any rows you do not wish to import, uncheck the row(s).

 More Information

 If you are matching to fields with system-defined options or user defined fields with set values, the data in your import file must match Rent Manager 's field options exactly (including spaces).

 -
 In the Details section's Required Columns field, verify that all Rent Manager fields in the list have been matched to their associated column. Required fields that have been matched display a display a , while unmatched fields are followed by an asterisk (*). All Required Columns must be matched in order to proceed.

 -
 Click Next .
The Import Review page displays.

 Step 5: Review and Complete Import

 On this page, you can review the information before you import it into Rent Manager and, if needed, make any edits or corrections. Once you have verified the information is correct, click Import .

 Your data is imported, and a summary of the import displays in the Import Result column. Rows listed as Success in green were successfully imported. Any rows that failed to import are listed in red with an error that displays why that row could not be imported.

 For any rows that failed to import, correct the data in your import file, restart the import process, and select only the rows that failed to import in the previous attempt.

 More Information

 You can use importing templates to save time and use the same importing settings during future imports of the same type. To create an importing template based on the import you just performed, on the action bar, click .
