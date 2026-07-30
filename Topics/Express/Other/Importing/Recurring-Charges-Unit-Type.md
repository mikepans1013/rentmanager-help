# Import Unit Type Recurring Charges

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Recurring-Charges-Unit-Type.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 More Information

 This topic covers importing unit type recurring charges. If you are importing recurring charges for another entity, refer to one of the topics listed below.

 -
 For importing tenant recurring charges, refer to Import Tenant Recurring Charges .

 -
 For importing unit recurring charges, refer to Import Unit Recurring Charges .

 -
 For importing property recurring charges, refer to Import Property Recurring Charges .

 When importing recurring charges for unit types , you can add new recurring charges or update existing recurring charges.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Recurring Charges
 Enabled

 Recurring Charges/Market Rent
 Recurring charges
 Add, Edit

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of recurring charge data is displayed with each row representing a different charge and each column representing information about that charge.

 Required Fields

 In order to import new or update existing unit type-level recurring charges, the following fields must always have values entered.

 -
 Amount

 -
 Unit Type ID

 Additionally, at least one of the following fields or combination of fields must have values entered:

 -
 Unit Type Name

 Recurring Charges Field Descriptions

 You can import values into any Rent Manager recurring charges field, including user-defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import recurring charges information:

 Field
 Description

 Amount

 The dollar amount of the recurring charge to be imported.

 Calculation

 The formula the used the generate the recurring charge.

 Charge Type

 The shortened name of the charge type applied to the charge (e.g., RC , LATE , SECDEP ).

 Comment

 An additional note to provide context about the charge.

 Frequency

 The number representing how often the charge should post. For example, if the tenant is a monthly tenant and this charge should be posted once a month, enter 1 . If it should be posted every two months, enter 2 .

 From Date

 The date when the recurring charge should go into effect.

 To Date

 The date when the recurring charge should expire and no longer post to the tenant.

 Unit Type ID

 The system-generated Unit ID number, which is used to identify the unit type to which recurring charges are being imported.

 Unit Type Name

 The name of the unit type as shown on the unit type's details page.

 Step 2: Begin Import

 To import recurring charges, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Recurring Charges .
The Import Recurring Charges Settings pop-up displays.

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
 In the Select Import Recurring Charge Type field, select Unit Type .

 -
 Select one of the available options and click Next .

 Option
 Description

 Add New Recurring Charges

 Create new recurring charges in Rent Manager .

 Update Existing Recurring Charges

 Replace or update recurring charges that are already in Rent Manager .

 To remove information from any fields on existing recurring charges where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field for the recurring charges is unchanged.

 - In the Match to Unit Types by section, specify how Rent Manager matches the information in your import file to the existing unit type records. The available options are described below. Option Description
 Use Unit Type ID supplied in the import file
 Use the unit type's system generated ID number. The Unit ID field must be included in the import file.

 Use Unit Type Name supplied in the import file
 Use the name of the unit type. The Unit Type Name field must be included in the import file.

 -
 In the Default Values section, enter default information into the available fields. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s).

 Option
 Description

 Comment

 A default comment to be added to each imported recurring charge.

 Frequency

 The number representing how often the charge should post. For example, if the tenant is a monthly tenant and this charge should be posted once a month, enter 1 . If it should be posted every two months, enter 2 .

 From Date

 The date when the recurring charge should go into effect.

 Import Zero Charges

 Check to import recurring charges with a dollar amount of 0. Recurring charges with an amount of 0 dollars will fail to import if this option is not checked.

 Replace Existing Charges

 Check to replace existing recurring charges with new recurring charges. This option is only available when the option to Add New Recurring Charges is selected.

 To Date

 The date when the recurring charge should end.

 -
 Click Next .
The pop-up closes and the Import Recurring Charges page displays.

 Step 3: Configure Import File for Rent Manager

 In the Import Settings section, you may view or edit the previously entered default values to apply to the imported accounts or records. In the Details section's File Name field, you can view the currently selected import file, or click to select a different import file. If you have selected a valid, readable file, its data is displayed in a preview on the lower half of the page.

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

 On this page, you can review the information before you import it into Rent Manager . Once you have verified the information is correct, click Import .

 Your data is imported, and a summary of the import displays in the Import Result column. Rows listed as Success in green were successfully imported. Any rows that failed to import are listed in red with an error that displays why that row couldn’t be imported.

 For any rows that failed to import, correct the data in your import file, restart the import process, and select only the rows that failed to import in the previous attempt.

 More Information

 You can use importing templates to save time and use the same importing settings during future imports of the same type. To create an importing template based on the import you just performed, on the action bar, click .
