# Import Tenant/Prospect Contacts

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Contacts.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing tenant or prospect contacts, you can choose whether you are adding new contact data, or updating contact records that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Tenant/Prospect Contacts
 Enabled

 Tenants/Prospects
 Prospects
 Add, View, Edit

 Tenants
 Add, View, Edit

 Change primary contact status
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of contact data is displayed with each row representing a different contact and each column representing information about that contact.

 Required Fields

 In order to import contacts, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new contacts, or updating the information for contacts already in Rent Manager .

 Import Type
 Description

 Add New Contacts

 For adding new contacts to Rent Manager , all of the following fields must have values entered:

 -
 Account Number

 -
 Last Name

 Update Existing Contacts

 For updating contacts already in Rent Manager , at least one of the following fields or combinations of fields must have a value entered:

 -
 Contact ID

 -
 First Name , Last Name , and Account Number

 -
 A user defined field

 Contact Field Descriptions

 You can import values into any Rent Manager contact field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import contact information:

 Field
 Description

 Account Number

 The primary prospect or tenant account's system-generated account number, as shown on the account's details page in the Account# field.

 Annual Income

 The annual net income of the contact. If it is a prospect contact, the annual income is to be used when screening the contact and to make rental decisions.

 Applicant Type

 The applicant type as it related to the contact and how they applied to the property.

 Any of the following are acceptable entries:  Applicant , Co-Applicant , Guarantor , Occupant , Partner , Spouse .

 Birthday

 The date, as entered in the MM/DD/YYYY format, of the contact's birthday.

 City

 The city as listed on the View Contacts pop-up, in the Addresses section.

 Contact ID

 The contact's system-generated contact ID number. The ID is located by using the ContactID function in scripting. For more information, refer to Contact Class (Script) .

 This field is used only for updating existing contacts. If adding new contacts, this column is skipped and Rent Manager automatically generates a contact ID for each contact during the import.

 Default Address Type

 One of the existing address types to be the default address type for the contact.

 Default Phone

 The phone number to be used as the default for the contact.

 Email

 The email address of the contact.

 Employer

 The name of the contact's place of work.

 First and Last Name

 If importing the contact's first and last name in the same column, use this option for the import. This field cannot be used to match to accounts when importing updates.

 First Name

 If importing the contact's first and last name in separate columns, the first name of the contact to be imported.

 Last Name

 If importing the contact's first and last name in separate columns, the last name of the contact to be imported.

 License

 The contact's vehicle license plate number.

 Middle Name

 The middle name of the contact.

 Occupant Type

 One of the contact types to categorize a contact. For more information, refer to Contact Types (Page) .

 Phone Number

 One of the phone numbers for the contacts to be listed on the prospect or tenant account.

 Postal Code

 The postal code as listed on the View Contacts pop-up, in the Addresses section.

 Primary

 If the contact should be marked as the Primary contact, enter Yes or True . Otherwise, enter No or False .

 Only one contact per tenant or prospect account can be marked as the Primary . Marking a contact as primary sets the contact's name and information as the tenant/prospect account.

 Show on Bill

 If the contact should be marked to Show On Statement/Labels , enter Yes or True . Otherwise, enter No or False .

 Only two contacts per tenant or prospect account can be marked as Show On Statements/Labels .

 SMS/Text Ready

 If the contact is able to receive text messages for the specified phone number type, enter Yes or True . Otherwise, enter No or False .

 Social Security #

 The legal social security number issued to the contact.

 State

 The state as listed on the View Contacts pop-up, in the Addresses section.

 Street

 The street as listed on the View Contacts pop-up, in the Addresses section.

 Street 2

 If applicable, the second line of the street address as listed on the View Contacts pop-up, in the Addresses section.

 User Defined Field

 Any tenant or prospect-type user defined fields (UDFs) can be added as their own column.

 Vehicle

 The make and model of the car or truck belonging to the contact.

 Step 2: Begin the Import

 To import contacts, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Tenant/Prospect Contacts .
The Import Tenant/Prospect Contacts Settings pop-up displays.

 -
 Select one of the available options, then click Next .

 Option
 Description

 Import without using template

 Proceed to import the file without using preestablished settings.

 Import using template

 Use a previously created template, which allows you to use the options established during a prior import. In the available drop-down list, select which template to use.

 -
 In the File Name field, click to select the data file to import. Then click Next .

 -
 In the Import Type section, select whether to Import as Tenant Contact(s) or Import as Prospect Contact(s) , and click Next .

 -
 In the Add or Update section, select one of the available options and click Next .

 Option
 Description

 Add New Contacts

 Create new contacts for existing tenant/prospect accounts in Rent Manager .

 Update Existing Contacts

 Replace or add information for contacts that are already in Rent Manager .

 To remove information from any fields on existing contacts where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the contact is unchanged.

 -
 If you selected Add New Contacts , the pop-up closes and the Import Tenant/Prospect Contacts page displays. Proceed to Step 3: Configure Import File for Rent Manager .

 -
 If you selected Update Existing Contacts , select an option to specify how Rent Manager matches the contacts in your import file to the existing contact records. The available options are described below.

 Option
 Description

 Use Contact ID supplied in the import file

 Match the data to the contact's system-generated ID number.

 Use the Primary Contact for the Account Number supplied in the import file

 Match the data to the tenant or prospect account's system-generated account number and update only the primary contact's information.

 Use the First and Last Name supplied in the import file

 Match the data to the First Name and Last Name of the contact associated with the specified prospect or tenant Account Number .

 Use the following value from a User Defined Field

 Match the data to the values of the user defined field selected from the drop-down list.

 -
 Click Next .
The pop-up closes and the Import Tenant/Prospect Contacts page displays.

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

 For example, if the column has data for email addresses, select Email .

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
