# Import Units

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Units.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing units, you can add new unit records or update data in existing unit records in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Units
 Enabled

 Properties/Units
 Units
 Add, View, Edit

 For more information, refer to Control User Access .

 Step 1: Prepare Import File

 Before beginning the import process, prepare an import file (sometimes called a flat file or data file) outside of Rent Manager . The most common file type used for importing is a comma-separated values (CSV) file, and examples in this section are based on that file type. The following file types are accepted for importing:

 -
 Comma-separated values (CSV)

 -
 Text (TXT)

 -
 Tab-separated (TAB)

 -
 Intuit Interchange Format (IIF)

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of unit data is displayed with each row representing a different unit and each column representing information about that unit.

 Required Fields

 In order to import units, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new units, or updating the information for units already in Rent Manager . The Required Columns display at the top of the page while setting up your import.

 Import Type
 Description

 Add New Units

 For adding new units to Rent Manager , all of the following fields must have values entered:

 -
 Unit Name

 -
 Unit Type

 Update Existing Units

 For updating units already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Property Short Name

 -
 Unit Name

 -
 A user-defined field

 Unit Field Descriptions

 You can import values into any Rent Manager unit field. As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice. RV/Campground fields only apply to units being imported to properties with the RV/Campground property type.

 The following fields can be added as columns to import unit information:

 Field
 Description

 Bathrooms

 The number of bathrooms within the unit.

 Bedrooms

 The number of bedrooms within the unit.

 City

 The city as listed on the unit details page's Addresses tile.

 Comment

 If applicable, enter a note about the unit.

 Default Address Type

 One of the unit address types to be the default address type for the unit. The value must match an existing unit address type in Rent Manager .

 Display

 The color the unit displays as in various areas of Rent Manager , as listed on the unit details page's Display Color field.

 If the color name entered is not in Rent Manager , the unit is assigned the default color.

 Floor

 The floor on which the unit is located. Entries must match one of the floors created in Rent Manager . For more information, refer to Floors (Page) .

 Market Rent

 The average rent amount for units of the same type and size in the same area.

 Market Rent Start Date

 The date on which the market rent amount goes into effect.

 Marketing

 If this unit is going to be individually marketed online using an internet listing service (ILS) such as Zillow or Trulia, enter Yes or True in this field to enable unit-level marketing. If the unit's property is using property-level marketing or you are not using ILS online marketing, enter No or False .

 More Information

 Note that many ILS sites no longer accept unit-level marketing data for individual units and it is strongly recommended that you use property-level marketing. For more information, refer to Unit Marketing Setup (Pop-Up) and Property Marketing Setup (Pop-Up) .

 Max Occupancy

 The maximum amount of tenants who can live in this unit at one time.

 Postal Code

 The postal code as listed on the unit details page's Addresses tile.

 Property Short Name

 The property's Short Name , displayed on Property details page, which is used to match units to existing properties.

 Rent Amount

 The amount that tenants at this unit pay in rent. This information is imported as a unit-level recurring charge using the property's associated Rent Charge Type defined on the property's details page. If multiple rent charge types are defined, the information is imported as the first unit-level recurring charge established for the property.

 Square Feet

 The total square footage of the unit.

 State

 The state as listed on the unit details page's Addresses tile.

 Street

 The street as listed on the unit details page's Addresses tile.

 Street 2

 If applicable, the second street address as listed on the unit details page's Addresses tile.

 Unit Default Security Deposit

 The total security deposit amount tenants are charged for the unit.

 Unit Name

 The unit's official name throughout Rent Manager .

 Unit Type

 The unit type to classify this unit. The value must match an existing unit type in Rent Manager . For more information, refer to Unit Types (Page) .

 User Defined Field

 Any unit-type user defined fields (UDFs) can be added as their own column. For more information, refer to Unit User Defined Fields (Pop-Up) .

 RV/Campground Field

 Description

 Amps

 The amperage of the electrical hookup available for this space.

 Length

 The length of the rentable space.

 Prohibited Equipment

 Any vehicle or equipment that is not permitted at this unit. Guests with vehicles or equipment of the selected types are unable to reserve this space on the STR Online Booking portal.

 Pull-Through

 Indicates if a space allows pull-through parking.

 Slide Outs

 The type(s) of room extenders on the guest's RV allowed at the site.

 Width

 The width of the rentable space.

 Step 2: Begin the Import

 To import units, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Units .
The Import Units Settings pop-up displays.

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

 Add New Unit

 Create new unit accounts in Rent Manager .

 Update Existing Unit

 Replace or add information for units that are already in Rent Manager .

 To remove information from any fields on existing units where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the unit is unchanged.

 -
 Select the needed information in the available fields. The section and options that display varies depending on whether you are adding or updating units.

 Section
 Description

 Property

 Select a property to apply to the imported records where there is an empty cell in the Property Short Name column.

 Match to Units by

 Select a Match to Units by option to specify how Rent Manager matches the units in your import file to the existing unit records.

 Use Property Short Name and Unit supplied in the import file

 Match the data to the property Short Name as it is entered on the Property details page and the unit Name as it is entered on the Unit details page.

 Use Unit supplied in the import file and the following Property

 Match the data to the unit Name as it is entered on the Unit details page and the selected Property from the drop-down list.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each unit. The import file must have a column for the UDF's values.

 -
 Click Next .
The pop-up closes and the Import Units page displays.

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

 For example, if the column has data about the number of bedrooms, select Bedrooms .

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
