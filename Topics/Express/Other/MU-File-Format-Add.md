# Add a File Format (Metered Utilities)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-File-Format-Add.htm

If you use external files to import or export Metered Utilities (MU) data, you can create file formats to ensure that readings and other information is added to the appropriate corresponding fields in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 For more information, refer to Control User Access .

 To create a new file format for Metered Utilities , do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward File Formats .
The File Formats page displays.

 -
 On the action bar to the right, click .

 -
 To use an existing file format as the basis for a new format, in the Format , select the desired format from the drop-down list.
The pop-up is populates with the details from the selected Format .

 -
 In the General tile, enter a unique Name for the file format.

 -
 If the first line in this file format contains field names or column headers that should be excluded when importing files, select Line 1 is a header .

 -
 Select the data format options for these files. Each option is described below:

 Field
 Description

 Delimited

 Indicates that fields in the import/export file vary in length and are separated by commas or other delimiter characters.

 Delimited By

 The character used to indicate the beginning and ending of each data field. For example, if this file format uses comma-separated values (CSV) files, select , Comma .

 Text Qualifier

 If the character selected in Delimited By may be found within the data, select an additional character to indicate whether the Delimited By character is included or not. For example, if you selected , Comma as the delimiter, any commas in the data are included or excluded based on this selection.

 If you select the " Quote option, quotation marks around blocks of data indicate that the selected delimiter found within the data should be treated as part of the data, as opposed to starting a new field. Alternatively, if you select the ' Apostrophe option, apostrophes around blocks of data indicate that the delimiter found within the data should be treated as part of the data.

 If quotation marks or apostrophes surround data and a text qualifier is not specified, the quotation marks or apostrophes are included in the data.

 Fixed Length

 Indicates that fields in the import/export file are always the same length without delimiter characters between fields. In the Record Terminator drop-down list, select one of the options described below.

 CR

 End each record with only a carriage return (beginning of same line). Used with older versions of Macintosh.

 CR/LF

 Ends each record with a carriage return and a line feed (beginning of next line). Used with Windows.

 LF

 End each record with only a line feed (next line). Used with Linux, UNIX, and macOS.

 None

 End each record at the specific number of characters entered in the Block Length field.

 -
 In the Fields tile, click Add Field . Then, enter information in the following columns:

 Column
 Description

 Column

 The field's starting column position.

 Field

 The utility-related field from the drop-down list whose data is included in this format. File formats require the Meter Number , Unit , and Street Address to be created.

 Format

 The format (if any) of the field's values. For example, selecting a date field (e.g., Current Reading Date ) displays the MM/DD/YYYY default format for dates. You may edit that format, if desired.

 Length

 The field's length in characters. Making changes to this value while working in this section affects the Column of fields that follow.

 RJust

 If checked, the field's values display as right-justified. Otherwise, the data is left-justified by default.

 -
 In the Sample Export Record tile, verify that the sample data matches your expected file format.

 -
 Click Save & Close to complete the file format creation process and close the pop-up. Alternatively, click Save & New to finish adding the format and refresh the pop-up to create another format.
The MU file format is created.
