# Import Master Meters

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Master-Meters.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing master meters, you can choose whether you are adding new master meter information for each property, or updating master meter information that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Master Meters
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

 Data in your import file should be organized such that each row denotes information about the master meter. When importing master meters, rows must be marked as either headers H or detail rows D . Header rows contain general information about the master meter itself, whereas detail rows contain information about the master meter's property and meter number.

 In the following example, an import of master meter data is displayed with each row notated with H representing general and default information about a master meter and each row notated with D representing the detailed information for those master meters:

 Required Header Rows

 In order to import master meters, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new master meters, or updating the information for master meters already in Rent Manager .

 -
 To import new master meters or update existing master meters, the Utility field must have values entered.

 -
 If the Utility selected for the master meter being imported does not have a Default Vendor or Default Expense Account defined in Rent Manager , those fields must have values entered.

 -
 If at least one detail row has ratio utility billing system (RUBS) enabled and the utility selected for the master meter does not have a default RUBS template defined in Rent Manager , the Default RUBS Template field must have values entered.

 Master Meter Header Row Descriptions

 The table below displays each Rent Manager field that can be matched when importing header rows. All marked fields are required in order to create the master meter.

 Field
 Description

 Default Expense Account

 The default vendor expense account to use on the master meter bills created for properties assigned to this utility.

 Default RUBS Template

 The default RUBS template to use on the master meter bills created for properties assigned to this utility.

 Default Vendor

 The default vendor account to assign to the master meter bills created for properties assigned to this utility.

 Utility

 The name of the utility as it displays in Rent Manager (e.g., Water , Sewer , Duke Electric , and so on). The utility entered in this field must exactly match the existing Utility Name that displays on the Utilities page.

 Required Detail Row Fields

 In order to import master meters, the following fields are required to have a value entered in the data file.

 -
 To import new master meters or update existing master meters, the Property Short Name field must have values entered.

 -
 To import new master meters, the Active , Vendor , and Expense Account fields must have values entered.

 -
 If RUBS Enabled is set to Yes or True for a master meter row, the RUBS Calculation Template field must have values entered.

 Master Meter Detail Row Field Descriptions

 When performing the import, certain fields are required to import the master meters. The table below displays each Rent Manager field that can be matched when importing detail rows.

 Every detail row below a header row is associated with that header row until separated by another header row. For example, if a master meter has four line item rows, you would need one row marked as a header H and then four consecutive rows marked as detail D containing that master meter's information. Then another header row can be entered to identify the next master meter in the import file.

 Field
 Description

 Is Master Meter Active

 If the master meter should be considered active in Rent Manager , enter Yes or True . If you no longer use the master meter, enter No or False .

 Expense Account

 The general ledger (GL) account that records utility expenses at the property associated with the master meter, as displayed on the utility's details page in the Master Meters tile.

 When adding a new master meter, if a Default Expense Account is defined for the utility, set the value to < Use Default > .

 Meter Number

 The master meter's unique meter number at the associated property, as displayed on the utility's details page in the Master Meters tile. This may be a serial number or other identification number.

 Property Short Name

 The abbreviated name of the property linked to the master meter, as displayed on the property's details page in the Short Name field.

 RUBS Calculation Template

 The ratio utility billing system (RUBS) template used to calculate the utility bill for each tenant at the property based on the master meter bill. The template entered in this field must exactly match the existing RUBS Template that displays on the Master Meters pop-up.

 When adding a new master meter, if RUBS Enabled is Yes or True and a Default RUBS Template is defined for the utility, set the value to < Use Default > .

 Is RUBS Enabled

 If, on the Master Meters pop-up, RUBS Enabled should be toggled on, enter Yes or True . Otherwise, enter No or False .

 Vendor

 The vendor that bills the property for utility charges associated with the master meter. The vendor entered in this field must exactly match the existing Name that displays on the vendor's details page.

 When adding a new master meter, if a Default Vendor is defined for the utility, set the value to < Use Default > .

 Step 2: Begin the Import

 To import master meters, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Master Meters .
The Import Master Meters Settings pop-up displays.

 -
 Select one of the available options and click Next .

 Option
 Description

 Import without using template

 Proceed to importing the file without using preestablished settings.

 Import using template

 Use a previously created template, which allows you to use the options established during a prior import. In the available drop-down list, select which template to use.

 -
 In the File Name field, click Upload File to select the data file to import. Then, click Next .

 -
 In the Add or Update section, select one of the available options.

 Option
 Description

 Add New Master Meters

 Create new master meters in Rent Manager .

 Update Existing Master Meters

 Replace or add information for master meters that are already in Rent Manager .

 To remove information from any fields on existing master meters where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the master meter is unchanged.

 -
 Click Next .
The pop-up closes and the Import Master Meters page displays.

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
