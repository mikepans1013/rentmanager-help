# Import Vendors

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Vendors.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing vendors, you can add new vendor accounts or add data to existing vendor records in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Vendors
 Enabled

 Payables
 Vendors
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of vendor data is displayed with each row representing a different vendor account and each column representing information about that vendor.

 Required Fields

 In order to import vendors, the Vendor Name field must always have values entered for all vendors.

 Field Descriptions

 You can import values into any Rent Manager vendor field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import vendor information:

 Field
 Description

 1099 SocSec#/Tax#

 The vendor's social security or tax ID number, to be used for 1099 or tax reporting purposes.

 Account Number

 Your vendor-provided account number that identifies your account with that company for billing purposes.

 Active

 Enter Yes or True if this is an active vendor that your business currently uses. Otherwise, enter No or False .

 Associated Properties

 The Short Name of each property at which this vendor performs work. Separate multiple properties with commas and no spaces (e.g., RIVER,123ST,101-AB ).

 If the vendor can perform work at all of your properties, enter ALLPROPS .

 Auto-Fill Checks

 If you would like to automatically populate new checks or bills for this vendor with the same property, bill terms, expense account, and amount as the last check or bill written to the vendor, enter Yes or True for this field. Otherwise, enter No or False .

 City

 The name of the City for the vendor's address.

 Comment

 Additional notes or information about the vendor to be imported to the vendor's details page in the Comment field.

 Contact Name

 The name of your primary point of contact for each vendor. This information populates the vendor's details page in the Contact Name field.

 Default Address Type

 One of the existing vendor address types to make that address type the default for the vendor.

 Default Chart Account

 The GL Account No of one of the general ledger (GL) expense accounts to use that account as the default for bills or checks created for this vendor.

 Default Pay Method

 The method you typically use to pay this vendor.

 The following options are acceptable entries for this field:  ACH , Check , Debit , eChecks , EFT , ePay .

 Display

 The vendor-type color, which appears in the Miscellaneous section on the vendor's details page.

 If the color name entered is not in Rent Manager , the property is assigned the default color.

 eChecks Email

 An email address to which payments made through Safeguard eChecks are sent.

 Email

 The primary Email address for contacting the vendor to display on the vendor's details page.

 Insurance Expiration

 The date on which the vendor's insurance coverage expires, in the MM/DD/YYYY format.

 Is 1099

 Enter Yes or True to import vendors as 1099 vendors. Otherwise, enter No or False .

 Payee

 The name to use when writing checks to each vendor.

 Phone Number

 One of the phone numbers for the vendor. If a vendor has multiple phone numbers, create a separate column for each type of phone number.

 Postal Code

 The Postal Code for the vendor's address.

 Private

 Enter Yes or True if this is a private vendor whose information should be only accessed by Rent Manager administrators. Otherwise, enter No or False .

 State

 The name of the State for the vendor's address.

 Street

 The name of the Street for the vendor's address.

 Street2

 If applicable, enter a second address line for the vendor's address.

 Terms

 The bill terms to specify when payment is due to the vendor once a bill is received. For more information, refer to Bill Terms (Page) .

 User Defined Field

 Any vendor-type user defined fields (UDFs) can be added as their own column. Then enter the values for that UDF for each vendor. For more information, refer to Vendor-Type User Defined Fields (Pop-Up) .

 Vendor 1099 Category

 For 1099 vendors, the name of the 1099 category that applies to the vendor (e.g., Nonemployee Compensation , Rents , Royalties ). The entry in this field must match the option exactly.

 Vendor Name

 The Vendor Name , which is how the vendor displays throughout Rent Manager .

 Workers Comp Expiration

 The date on which the vendor's worker's comp coverage expires, in the MM/DD/YYYY format.

 Step 2: Begin the Import

 To import vendors, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Vendors .
The Import Vendors Settings pop-up displays.

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

 Add New Vendors

 Create new vendor accounts in Rent Manager .

 Update Existing Vendors

 Replace or add information for vendors that are already in Rent Manager .

 To remove information from any fields on existing vendors where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the vendor is unchanged.

 -
 Select the needed information in the available fields. The section and options that display varies depending on whether you are adding or updating vendor accounts.

 Section
 Description

 Properties

 This option displays only if you are adding new vendor accounts. Select each Property and/or Group at which the vendors are allowed to perform work. Check Show Inactive Properties to include those in the list. All vendors without the Associated Properties field defined in the import file are associated with these default properties.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Match to vendors by

 This option displays only if you are updating existing vendor accounts.

 Select an option to specify how Rent Manager matches the vendors in your import file to the existing vendor records. The available options are described below.

 Use Vendor Name supplied in the import file

 Match the data to the Vendor Name as it is entered on each vendor's detail page. Each vendor record in the import file is required to have the Vendor Name field specified.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each vendor. The import file must have a column for the UDF's values.

 - Click Next .
The pop-up closes and the Import Vendors page displays.

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

 For example, if the column has data about a vendor's payee name, select Payee .

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
