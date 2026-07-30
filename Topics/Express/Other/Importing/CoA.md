# Import Chart of Accounts

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/CoA.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing general ledger (GL) accounts to your chart of accounts, you can choose whether you are adding new GL accounts, or updating the GL account data that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Chart of Accounts
 Enabled

 Accounting
 General ledger accounts
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of chart account data is displayed with each row representing a different GL account and each column representing information about that account.

 Required Fields

 In order to import GL accounts, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new GL accounts, or updating the information for GL accounts already in Rent Manager .

 Import Type
 Description

 Add New GL Accounts

 For adding new GL accounts to Rent Manager , all of the following fields must have values entered:

 -
 Account Name

 -
 Reference Account Number

 Update Existing GL Accounts

 For updating GL accounts already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Account Name

 -
 Reference Account Number

 Field Descriptions

 You can import values into any Rent Manager transaction field. As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import payment information:

 Field
 Description

 Account Name

 The short, unique name of the GL account, such as Rental Income .

 Account Type

 The Type of GL account to be imported, such as a bank account or liability account. The entry in this field must match one of the following options exactly:

 -
 Accounts Payable

 -
 Accounts Receivable

 -
 Bank

 -
 Cost of Goods Sold

 -
 Credit Card

 -
 Equity

 -
 Expense

 -
 Fixed Asset

 -
 Income

 -
 Other Asset

 -
 Other Current Asset

 -
 Other Current Liability

 -
 Other Expense

 -
 Other Income

 -
 Long Term Liability

 -
 Non Controllable Expense

 -
 Non Controllable Income

 -
 Non Operating Expense

 -
 Non Operating Income

 Description

 A brief description to provide further information about the GL account that users can reference (such as situations where the GL account is used).

 Reference Account Number

 The unique account number to use as the system-wide identifier for the new GL account. This displays as the GL Account No in other areas of Rent Manager .

 The numbering system for a chart of accounts may vary to fit the needs of a business. A certified public accountant (CPA) can provide guidance concerning common chart account practices for businesses within your specific industry.

 Rent Manager defaults to the following numbering system:

 1000–1999

 Banks, Accounts Receivable, and Assets

 2000–2999

 Credit Cards, Accounts Payable, and Liabilities

 3000–3999

 Equity

 4000–4999

 Income

 5000–6100

 Expenses

 Sub Account Of

 The GL account number of the parent account if this GL account is a subaccount. For example, if the GL account is 2101 - Security Deposits and is a subaccount of GL account 2100 - Refundable Deposits , enter 2100 .

 More Information

 As a best practice, if an account has subaccounts, the subaccounts should be used to track transactions in Rent Manager and not parent accounts. Parent accounts act as category headings, while financial data is tracked in the subaccounts.

 Additionally, some reports—such as the Balance Sheet —allow subaccounts to be collapsed into parent accounts, displaying all GL subaccount totals as one line item under the parent account.

 Step 2: Begin the Import

 To import GL accounts, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Chart of Accounts .
The Import Chart of Accounts Settings pop-up displays.

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

 Add New GL Accounts

 Create new GL accounts in Rent Manager .

 Update Existing GL Accounts

 Replace or add information for GL accounts that are already in Rent Manager .

 To remove information from any fields on existing GL accounts where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the GL account is unchanged.

 -
 Select the needed information in the available fields. The section and options that display varies depending on whether you are adding or updating GL accounts.

 Section
 Description

 Default Values

 This option displays only if you are adding new GL accounts. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s).

 In the Default Chart Type field, select the type of GL account that applies to most or all of the GL accounts in the import file (e.g., Bank , Income , Credit Card , etc.).

 Match to chart of accounts by...

 This option displays only if you are updating existing GL accounts.

 Specify how Rent Manager matches the GL accounts in your import file to the existing GL account records. The available options are described below.

 Use chart of account name supplied in the import file

 Match the data to the account name as it is entered on the GL account's details page in the Name field.

 Use chart of account number supplied in the import file

 Match the data to the account number as it is entered on the GL account's details page in the GL Account No field.

 - Click Next .
The pop-up closes, and the Import Chart of Accounts page displays.

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

 For example, if the column has data for the GL account numbers, select Reference Account Number .

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
