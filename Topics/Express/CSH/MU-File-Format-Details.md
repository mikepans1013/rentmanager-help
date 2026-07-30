# File Format Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/MU-File-Format-Details.htm

On the File Formats page, you can add, view, and update data formats for the files used to import or export Metered Utilities (MU) readings.

 After MU file formats are set up, you can import multiple meter readings from a text (TXT) or comma-separated value (CSV) file or export your selected meter reading data to a TXT file. Importing a file is useful if you do not have access to a meter reading software that integrates with Rent Manager . You can export files to view meter readings outside of Rent Manager in a spreadsheet, keep a backup stored locally, or share with a coworker.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 For more information, refer to Control User Access .

 To view the details of a metered utilities file format, go to arrow_forward Services arrow_forward Metered Utilities arrow_forward File Formats and select a format from the list.

 You can use either the fixed length or the delimited data format. Each format option is described below.

 Fixed Length

 In fixed length format, fields in the import/export file are fixed length without delimiter characters between fields.

 General

 The following fields display in the General tile for the Fixed Length data format option:

 Field
 Description

 Record Terminator

 The following are types of line endings which determine how each record is terminated in a text file.

 CR/LF

 Ends each record with a carriage return (CR) and a line feed (LF).

 CR

 Ends each record with only a carriage return (CR).

 LF

 Ends each record with only a line feed (LF).

 None

 Ends each record at the Block Length you specify.

 Block Length

 Block length only applies when None is selected in the Record Terminator field. Block length gives you the option to manually determine the size of the record returned.

 Fields

 The following columns display in the Fields tile for the Fixed Length data format option:

 Column
 Description

 Field

 The utility-related field from the drop-down list whose data is included in this format.

 Column

 The field's starting column position.

 Length

 The field's length in characters. Making changes to this value while working in this section affects the column of fields that follow.

 RJust

 If checked, displays the field's values as right-justified.

If left unchecked, the data is left-justified by default.

 Format

 The format (if any) of the field's values. For example, selecting a date field displays the MM/dd/yyyy default format for dates. You may edit that format, if desired.

 Delimited

 In delimited format, fields in the import/export file vary in length and are separated by commas or other delimiter characters.

 General

 The following fields display in the General tile for the Delimited data format option:

 Field
 Description

 Delimited By

 The character that is used to mark the beginning and ending of each data field. For example, , Comma is used if you have a comma-separated value (CSV) file.

 Text Qualifier

 The following fields determines how data enclosed in specific characters in the file is treated.

 " Quote

 Quotation marks around blocks of data indicate if that the selected delimiter is found within the quotation marks it should be treated as part of the data field, as opposed to starting a new field.

 ' Apostrophe

 Apostrophes around blocks of data indicate that if the selected delimiter is found within the apostrophes it should be treated as part of the data field, as opposed to starting a new field.

 - (none)

 No Text Qualifier is used and the selected Delimited By character separates data fields at each instance.

 Fields

 The following columns display in the Fields tile when the Delimited data format option is selected:

 Column
 Description

 Field

 The utility-related field whose data is included in this format.

 Format

 The format (if any) of the field's values. For example, if a date field is selected (e.g., Current Reading Date ), MM/DD/YYYY displays as the default format for dates. You may edit that format, if desired.
