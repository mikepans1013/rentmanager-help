# Import Meter Information

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Meter-Information.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing meter information, you can choose whether you are adding new meter information for each unit at a property, or updating unit meter information that already exists in Rent Manager . This information is imported to the Meter Readings Setup page.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Meter Information
 Enabled

 Utilities
 Metered utilities
 Enabled

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of meter information is displayed with each row representing a different unit meter and each column representing information about that unit meter.

 Required Fields

 In order to import meter information, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new unit meters, or updating the information for unit meters already in Rent Manager .

 Import Type
 Description

 Add New Meter Information

 For adding new meter information to Rent Manager , all of the following fields must have values entered:

 -
 Meter Number

 -
 Unit

 Update Existing Meter Information

 For updating meter information already in Rent Manager , at least one of the following fields or combinations of fields must have a value entered:

 -
 Meter Number

 -
 Property Short Name , Unit , and Utility

 Meter Information Field Descriptions

 You can import values into any Rent Manager unit meter field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import unit meter information:

 Field
 Description

 Class Code

 A per-tenant, single capital letter for the class, which is typically used for customers who receive medical discounts. For example, M for medical.

 Comment

 Any additional notes about this unit meter.

 Income Type

 The income type assigned to the meter. For meters that use the baseline utility charge calculation, enter Standard . For meters that allow a reduced rate based on the tenant's income, enter Low Income .

 Meter Number

 The unique meter number for each unit. This may be a serial number or other identification number.

 More Information

 This field cannot be updated if the utility being matched has a source utility. For example, if a sewer utility has the Source Utility for Readings field set as the Water utility, you receive an error when attempting to import data. Any updates to this field on the source utility are inherited by the non-source utilities linked to it.

 Meter Type

 The name of the meter type used to determine the utility charge amount based on consumption.

 If you want Rent Manager to use the meter type specified in Default Meter Type field at the top of the Meter Readings Setup page, enter <Use Default> . Otherwise, select a meter type from the drop-down list.

 Other, Other 2, Other 3, etc.

 An optional field that can store additional information determined by the user. Up to five optional fields can be defined by the user (Other, Other 2, Other 3, Other 4, Other 5). For example, you could use this field to record where the meter is located inthe unit, such as the left exterior wall.

 Property Short Name

 The abbreviated name of the property where this meter is located, as specified on the property's details page in the Short Name field. If the data file includes meter information for multiple properties, this column must be included.

 If this field is not provided in the data file, the data is imported to the property established in the Import Settings section's Property field.

 Rate Zone

 A comment defining the geographic area, such as the name of the city in which the unit is located. This field is helpful to identify meters that may need to charge different rates based on location and set up variables in Metered Utilities Plus (MU-Plus) to charge those rates automatically.

 Route

 The number that represents the order in which this meter is read. The first meter read has a value of 1 , the second a value of 2 , and so on. This is useful for streamlining the order of meters that display for your technicians in rmAppSuite Pro so that the meters listed match the order they check them on their route.

 More Information

 This field cannot be updated if the utility being matched has a source utility. For example, if a sewer utility has the Source Utility for Readings field set as the Water utility, you receive an error when attempting to import data. Any updates to this field on the source utility are inherited by the non-source utilities linked to it.

 Unit

 The name of the unit at the property associated with the meter.

 Utility

 The name of the utility measured by the meter. If the data file includes meter information for multiple utilities, this column must be included.

 If this field is not provided in the data file, the data is imported for the utility established in the Import Settings section's Utility field.

 Step 2: Begin the Import

 To import meter information, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Meter Information .
The Import Meter Information Settings pop-up displays.

 -
 Select one of the available options and click Next .

 Option
 Description

 Import without using template

 Proceed to importing the file without using preestablished settings.

 Import using template

 Use a previously created template, which allows you to use the options established during a prior import. In the available drop-down list, select which template to use.

 -
 In the File Name field, click Upload Files to select the data file to import. Then, click Next .

 -
 Enter the default information in the available fields:

 Field
 Description

 Property

 Meter information is imported for this property for all unit meters unless a Property Short Name column is included in the import file and the meter has a value entered for the field.

 Utility

 Meter information is imported for this utility for all unit meters unless a Utility column is included in the import file and the meter has a value entered for the field.

 -
 In the Add or Update section, select one of the available options and click Next .

 Option
 Description

 Add New Meter Information

 Add new unit meter information to Rent Manager .

 Update Existing Meter Information

 Replace or add information to unit meters already in Rent Manager .

 To remove information from any fields on existing meters where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the meter is unchanged.

 If you selected Add New Meter Information , the pop-up closes and the Import Meter Information page displays. Proceed to Step 3: Configure Import File for Rent Manager .

 -
 If you selected Update Existing meter Information , select an option to specify how Rent Manager matches the meters in your import file to the existing meter records. The available options are described below.

 Option
 Description

 Use Property Short Name, Unit and Utility supplied in import file

 Match the data to the meter based on the values in the Property Short Name , Unit , and Utility columns. All three of these columns must be in the data file and have values entered for every meter in order to use this option.

 Use the Meter Number supplied in the import file

 Match the data to the meter based on the value entered in the Meter Number column.

 -
 Click Next .
The pop-up closes and the Import Meter Information page displays.

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

 For example, if the column has data that contains the name of a unit, select Unit .

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
