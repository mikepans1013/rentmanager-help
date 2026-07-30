# Import Payments

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Payments.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing payments, you can add tenant and prospect payments that are prepayments or that apply to existing charges.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Payments
 Enabled

 Receivables
 Take tenant payments
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of payment data is displayed with each row representing a different payment and each column representing information about that payment.

 Required Fields

 In order to import payments, the Amount field must always have values entered for all payments. Additionally, at least one of the following fields or combination of fields must have values entered:

 -
 Account Number

 -
 Property Short Name and Unit Name

 -
 A user defined field (UDF)

 Field Descriptions

 You can import values into any Rent Manager payment field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import payment information:

 Field
 Description

 Account Number

 The system-generated account number of the tenant or prospect associated with the payment, as shown on the account's details page in the Account# field.

 Amount

 The dollar amount of the payment. You can enter the amount with or without the currency symbol.

 For example, to import a $200 payment, you can enter 200 , 200.00 , or $200 .

 Charge Type Short Name

 The abbreviated name of the charge type associated with the charge this payment pays (such as RC ), as entered on the charge type's details page in the Name field.

 Comment

 Any additional notes or information about the payment to display in the Comment column of the account's transactions page.

 Date

 The date on which the payment was received and applied. You can use multiple formats, provided the order of the date is month, then day, then year.

 For example, to enter a date of July 10, 2026 , you could enter 7/10/ 2026 , 7-10- 26 , or July 10, 2026 .

 Invoice Number

 If the payment is linked to an invoice, the system-generated number of the invoice created in Rent Manager .

 Property Short Name

 The abbreviated name of the tenant or prospect's property associated with this payment, as entered on the property's details page in the Short Name field.

 Reference

 The form of payment used for the transaction: Cash , MO  (money order), CC (credit card), or the check number (such as 1234 ).

 Unit Name

 The name of the unit associated with the payment, as entered on the unit's details page in the Name field.

 User Defined Field

 This column should be used only if you are matching to tenant and prospect accounts based on a user defined field (UDF) value. During Step 2: Begin the Import , in the Match to payments by section, the option Use the following value from a User Defined Field option must be selected to determine which UDF to use for matching.

 Unlike other importing tools, this UDF column does not accept a selection for Handling . The values in this column are instead used to match the payments to tenants and prospects based on the value entered in the UDF selected in the Match to payments by section.

 Step 2: Begin the Import

 To import properties, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Payments .
The Import Payment Settings pop-up displays.

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
 In the Match to Payments by section, specify how Rent Manager matches the payments in your import file to their associated accounts, then click Next . The available options are described below.

 Option
 Description

 Use Account Number supplied in the import file

 Match the payments to each tenant or prospect's system-generated account number, as shown on the account's details page in the Account# field. The import file must have a column for the account numbers.

 Use Property Short Name and Unit supplied in the import file

 Match the payments to their associated unit and property using the name of the unit (as entered on the unit's details page in the Unit Name field) and the abbreviated name of the property (as entered on the property's details page in the Short Name field). The import file must have a column for both the units' names and a column for the abbreviated property names.

 This method imports payments to the unit and not to a specific tenant, so the payment is assigned to the current tenant of that unit. If no current tenant exists, the import fails for that specific record.

 Use Unit supplied in the import file and the following Property

 Match the payments to their associated units at a single property using the name of the unit (as entered on the unit's details page in the Unit Name field). Then select the Property associated with the units. The import file must have a column for the names of the units.

 This method imports payments to the unit and not to a specific tenant, so the payment is assigned to the current tenant of that unit. If no current tenant exists, the import fails for that specific record.

 Use the following value from a User Defined Field

 Match the data to a tenant-type user defined field (UDF), then select the UDF to match to for each property. The import file must have a column for the UDF's values.

 Use Invoice Number supplied in the import file

 Match the data to each payment's associated invoice number. The import file must have a column for the invoice numbers.

 -
 In the Default Values section, enter default information into the available fields. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s).

 Field
 Description

 Post Date

 The date on which the payments are received for the tenant or unit account.

 Automatically deposit payments to

 If checked, automatically deposits the payments in Rent Manager once the import is completed. Select the bank account where the payments will be deposited.

 To automatically deposit payments while importing payments, you must first create the bank general ledger account(s). For more information, refer to Add a Bank Account .

 Comment

 Any additional notes or information about the payment to display on the tenant's transactions.

 -
 Click Next .
The pop-up closes and the Import Properties page displays.

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
