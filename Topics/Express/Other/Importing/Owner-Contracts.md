# Import Owner Contracts

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Owner-Contracts.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 In Rent Manager , the ownership of a property is determined by the owner's contract, which your company may refer to as a management agreement. The contract has an active date range and specifies the percent of ownership share that the owner has in the property. For example, a single owner has a 100% ownership share, while, in a partnership between two owners, there could be various divisions of ownership share, such as each partner owning 50% or a 60% - 40% split. When importing owner contracts, you can enter beginning and end dates, percentage shares, and reserve amounts for multiple ownerships, including primary property owners.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Owner Contracts
 Enabled

 Owners
 Owners
 View, Edit

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of owner contracts data is displayed with each row representing a different owner contract and each column representing information about that owner contract.

 Required Field

 In order to import owner contracts, some fields are required to have a value entered in the data file. The following fields must have values entered:

 -
 The Owner Contract From date.

 -
 To match the import to the owner(s) in Rent Manager , either an Owner ID or an Owner User Defined Field .

 -
 To match the import to the property(s) in Rent Manager , either a Property ID , a Property Short Name , or a Property User Defined Field .

 Owner Contracts Field Descriptions

 You can import values into any Rent Manager owner contract field. As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import owner contract information:

 Field
 Description

 Owner Contract From

 The starting date of the owner's contract, which displays on the property details page's Owners pop-up in the Start column.

 Owner Contract Percentage

 The percentage of the owner's stake in the property, which displays on the property details page's Owners pop-up in the % column. When preparing your import file, do not include the % character in the value for this field.

 Owner Contract Reserve

 The minimum balance that must be kept in the bank for the property, which displays on the property details page's Owners pop-up in the Reserve column.

 Owner Contract To

 The final date of the owner's contract, which displays on the property details page's Owners pop-up in the End column.

 Owner ID

 The system-generated account number for the owner associated with this contract. This number can be obtained by downloading and running the Owner ID Listing or Owner IDs reports available in the online template library (OTL). For more information, refer to Online Template Library (Page) .

 Owner User Defined Field

 The value for any owner-type user-defined field (UDF) that is used to match owner accounts. During Step 2: Begin the Import , in the Match to Owners by section, the Use the following value from a User Defined Field option must be selected to determine which UDF to use for matching. Then, when importing, you must select the UDF you are using to match in the Handling drop-down list. For more information, refer to Owner-Type User Defined Fields (Pop-Up) .

 Primary Owner ID

 The system-generated account number for the primary owner associated with this contract. This number can be obtained by downloading and running the Owner ID Listing or Owner IDs reports available in the online template library (OTL). For more information, refer to Online Template Library (Page) .

 Primary Owner User Defined Field

 The value for any owner-type user-defined field (UDF) that is used to match primary owner accounts. During Step 2: Begin the Import , in the Match to Owners by section, the Use the following value from a User Defined Field option must be selected to determine which UDF to use for matching. Then, when importing, you must select the UDF you are using to match in the Handling drop-down list.

 Property ID

 The system-generated account number for the property associated with this contract. This number can be obtained by downloading and running the Property ID Listing or Property IDs reports available in the online template library (OTL). For more information, refer to Online Template Library (Page) .

 Property Short Name

 The Short Name for the property associated with this contract, as displayed on the property details page's General tile.

 Property User Defined Field

 The value for the any property-type user-defined field (UDF) whose value is used to match property records. During Step 2: Begin the Import , in the Match to Properties by section, the Use the following value from a User Defined Field option must be selected to determine which UDF to use for matching. Then, when importing, you must select the UDF you are using to match in the Handling drop-down list. For more information, refer to Property User Defined Fields (Pop-Up) .

 Step 2: Begin the Import

 To import owner contracts, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Owner Contracts .
The Import Owner Contracts Settings pop-up displays.

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
 Select a Match to Owner by option to specify how Rent Manager matches the owners in your import file to the existing owner records. The available options are described below.

 Option
 Description

 Use Owner ID supplied in the import file

 Match the data to each owner's system-generated Owner ID . The import file must have a column for the owner IDs.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each owner. The import file must have a column for the UDF's value.

 -
 Select a Match to Property by option to specify how Rent Manager matches the properties in your import file to the existing property records. The available options are described below.

 Option
 Description

 Use Property ID supplied in the import file

 Match the data to each property's system-generated Property ID . The import file must have a column for the property IDs.

 Use Property Short Name supplied in the import file

 Match the data to the Short Name as it is entered on each property's details page. The import file must have a column for the abbreviated property names.

 Use the following value from a User Defined Field

 Match the data to a user-defined field (UDF), then select the UDF to match to for each property. The import file must have a column for the UDF's value.

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

 For example, if the column has data for the abbreviated property names, select Property Short Name .

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
