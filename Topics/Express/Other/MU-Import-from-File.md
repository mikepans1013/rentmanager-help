# Import from File (Metered Utilities)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-Import-from-File.htm

The MU Import from File page gives you the ability to import multiple meter readings at once from a text (TXT) file or a comma-separated value (CSV) file. This tool is useful for importing meter readings if you do not have access to meter reading software that integrates with Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 For more information, refer to Control User Access .

 Warning

 In order to import meter readings from this page, the import file must match one of the Metered Utilities (MU) file formats created in Rent Manager . File formats tell Rent Manager how to recognize and properly assign readings to the correct unit. For more information, refer to Add a File Format (Metered Utilities) .

 Additionally, each record must have a Current Reading entered on the import file.

 To import a meter readings file, do the following:

 -
 Go to arrow_forward Services arrow_forward Metered Utilities arrow_forward Import From File .
The MU Import from File page displays.

 -
 In the first tile, in the Import File field, click and select the TXT or CSV file with meter readings that you are importing to Rent Manager .
In the Import Fields tile, the information from the selected import file displays.

 -
 In the first tile, enter information in the below fields. On any applicable fields, to have Rent Manager automatically populate your selected data in that field the next time you open the MU Export To File page, check Remember .

 Field
 Description

 Format

 The file format to use that tells Rent Manager how to read the import file.

 Import File

 The TXT or CSV file with meter readings that you are importing to Rent Manager .

 To indicate that the first line of the import file is a header and not a meter reading, check Line 1 is a header and Rent Manager will exclude this line.

 Properties

 The properties whose meter readings you are importing.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Reading Date

 If you wish to specify a single date to use for all lines of data rather than the Reading Date provided in the import file, enter that date here. Otherwise, to use the date provided in the import file, leave this field blank.

 Utilities

 The utilities that you are importing meter readings for.

 -
 In the Imported Meter Readings tile, review the information that will be imported to the selected properties and ensure everything is correct.

 -
 Click Import .
The meter readings are imported to Rent Manager .
