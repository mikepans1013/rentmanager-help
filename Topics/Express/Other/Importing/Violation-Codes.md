# Import Violation Codes

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Violation-Codes.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing violation codes, you can choose whether you are adding data for one code group or multiple code groups.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Violation Codes
 Enabled

 Setup
 Violation Code Groups
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of violation code data is displayed with each row representing a different violation code and each column representing information about that violation code. Additionally, each code is entered multiple times to add it to multiple code groups.

 Required Fields

 In order to import violation codes, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are importing violation codes to a single violation code group or importing violation codes to multiple violation code groups.

 More Information

 When importing violation codes, the names of the violation codes and violation code groups that you enter determine whether you are importing new violation codes or updating existing violation codes. One of the following must be true, depending on how you wish to import your violation codes:

 -
 To update existing violation codes, both the names of the violation code group and violation code must match in Rent Manager and the import.

 -
 To add new violation codes to existing violation code groups, only the name of the violation code groups must match in both Rent Manager and the import.

 -
 To add new violation code groups with new violation codes, you must specify the new violation code group name(s) during the import.

 Import Type
 Description

 Prepare Imports to One Code Group

 For importing to one code group, all of the following fields must have values entered:

 -
 Code

 -
 Code Violation Category

 Prepare Imports to Multiple Code Groups

 For importing to multiple code groups, all of the following fields must have values entered:

 -
 Code

 -
 Code Group Name

 -
 Code Violation Category

 Violation Code Field Descriptions

 You can import values into any Rent Manager violation code field. As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import codes to one or multiple code groups:

 Field
 Description

 Code

 The name of each violation code included in the code group.

 Code CCR Reference

 The reference number in the Covenants, Conditions, and Restrictions (CC&R) or similar regulatory document that precedes the text of the code, such as 6.1.2 - Unauthorized Vehicles or 5-1A .

 Code Charge Type

 The name of the default charge type to be used for charges incurred by violating the code.

 Code Description

 A description of the code or rule.

 Code Group Name

 The violation code group to which the violation code is added. If the specified code group name does not exist, a new code group is added. A column for this field should be added only if you are importing codes to multiple code groups at once.

 To add a violation code to multiple groups, create multiple lines for the violation code and assign each one to a different code group in this column.

 Code Internal Notes

 Any notes to further describe the actions taken, or that need to be taken, by a user before the violation is escalated.

 Code Is Active

 If the violation code is active, enter Yes or True . Otherwise, enter No or False .

 Code Letter Template

 The name of a tenant- or violation-type letter template to populate by default when adding a violation, adding a charge to a violation, or escalating a violation.

 Code Resolve Action

 The action required from the tenant to resolve a violation for the violation code.

 Code Violation Category

 The violation category to organize the code with similar codes. For more information, refer to Violation Categories (Page) .

 Step 2: Begin the Import

 To import violation codes, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Violation Codes .
The Import Violation Codes Settings pop-up displays.

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
 Select one of the following options:

 Option
 Description

 Add One Violation Code Group

 Adds all codes in the import file to a specified violation code group. Enter the exact name of the code group in the Code Group Name field.

 Add or Update Violation Code Groups

 Adds the codes in the import file to multiple violation code groups based on the code group names entered in the file's Code Group Name column.

 -
 Click Next .
The pop-up closes and the Import Violation Codes page displays.

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

 For example, if the column has data about the charge types used for violation charges, select Code Charge Type .

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
