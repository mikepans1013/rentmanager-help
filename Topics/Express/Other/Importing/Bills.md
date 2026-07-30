# Import Bills

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Bills.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing bills, you can track bill amounts, when they are due, and which properties are responsible for paying them.

 More Information

 Bills are imported as unpaid. For bills already paid before importing, you must go to Pay Bills and pay the bill based on the bill's post date. For more information, refer to Pay Bills .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Bills
 Enabled

 Payables
 Bills
 Add

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

 Data in your import file should be organized such that each row denotes information about the bill. When importing bills, rows must be marked as either headers H or detail rows D . Header rows contain general information about the bill itself, whereas detail rows contain information about the bill's allocations and line items.

 In the following example, an import of bill data is displayed with each row notated with H representing general information about a bill and each row notated with D representing allocation information for those bills:

 Required Header Rows

 In order to import bills, the following header rows are required to have a value entered in the data file.

 -
 Account Name (The name of the account, Vendor , Owner , etc., that the bill is payable to.)

 -
 Amount

 -
 Bill Date

 Bill Header Row Descriptions

 The table below displays each Rent Manager field that can be matched when importing header rows. All marked fields are required in order to create the bill.

 Field
 Description

 Account Name

 The name of the account ( Vendor , Owner , etc.) the bill is payable to.

 Account Type

 The type of account ( Vendor , Owner , etc.) the bill is associated with.

 Amount

 The total amount of the bill to be imported.

 Warning

 The total Detail Amount of each detail row associated with the header row must equal the Amount , or the import will fail.

 AvidInvoice URL

 The URL of the scanned invoice, if the bill is linked to AvidXchange , to link the image of the invoice.

 Bank ID

 The general ledger GL Account No of the bank account used to pay the bill.

 Bill Date

 The date the bill was created.

 Comment

 A description of the bill, or the account number given to you by the vendor.

 Due Date

 The date on which the bill is due to be paid.

 Is Approved

 If bill approval is enabled, enter Yes or True if this bill is already approved. Otherwise, enter No or False .

 Related Preferences

 In order to enable owner bill approval, the option to Require bills to be approved before they can be paid must be enabled in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Master Meter Bill

 To enable the Master Meter Bill field on the bill's details page, enter Yes or True . Otherwise, enter No or False .

 Pay Method

 The method of payment (ACH, AvidPay , Check, Debit, eChecks , EFT, ePay ) that pays the bill.

 More Information

 Bills imported without a Pay Method are automatically assigned to the vendor's default Payment Method , as displayed on the vendor details page's Bill Settings tile. For more information, refer to Vendor Details (Page) .

 Post Date

 The date the bill was issued. This should match the post date of the physical bill.

 More Information

 Bills are imported as unpaid, and you must pay them in Pay Bills based on the post date. Ensure you include this column when importing bills as it makes the process of paying imported bills easier.

 Reference

 The invoice number on the bill to be imported to the Bill details page's Invoice # field.

 Term Name

 The bill term to determine the amount of time between the Bill Date and the Due Date . The name must match one of the bill terms entered in Rent Manager exactly. For more information, refer to Bill Terms (Page) .

 Required Detail Row Fields

 In order to import bills, the following fields are required to have a value entered in the data file.

 -
 Detail Amount

 -
 GL Account ID

 -
 Property Short Name

 The following fields are required when the Master Meter Bill header H row has an entered value of Yes or True .

 -
 Billing Period

 -
 Consumption

 -
 Read Date

 -
 Utility

 Bill Detail Row Field Descriptions

 When performing the import, certain fields are required to import the bills. The table below displays each Rent Manager field that can be matched when importing detail rows.

 Every detail row below a header row is associated with that header row until separated by another header row. For example, if a bill has four line item rows, you would need one row marked as a header H and then four consecutive rows marked as detail D containing that bill's allocations. Then another header row can be entered to identify the next bill in the import file.

 Field
 Description

 Account ID

 The system-generated Account Number for the owner or tenant incurring the expense to be billed back through billable expenses.

 Related Preferences

 In order to enable billable expenses, the option to Enable billable expenses must be selected in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 To learn the system-generated ID number for an owner account, the script [Owner().OwnerID] can be used. For more information, refer to Owner Class (Script) .

 Billing Period

 The month and year (e.g., Dec 2026 ) that the meter reading is billed for. This value populates on the master meter bill, in the Billing Period column.

 This field can be imported only when the Master Meter Bill header H row has an entered value of Yes or True .

 Consumption

 The utility usage for the unit of measurement of the meter. This value populates on the master meter bill, in the Consumption column.

 This field can be imported only when the Master Meter Bill header H row has an entered value of Yes or True .

 Detail Amount

 The total amount of each allocation line to be imported.

 Warning

 The total Detail Amount of each detail row associated with the header row must equal the Amount , or the import will fail.

 Detail Comment

 A description of the allocation row.

 GL Account ID

 The general ledger GL Account No of the expense account used to expense the property.

 Is 1099

 If this line item qualifies as 1099 for the vendor, enter Yes or True . Otherwise, enter No or False .

 Is Billable

 If this line item can be billed back through billable expenses, enter Yes or True . Otherwise, enter No or False .

 Related Preferences

 In order to enable billable expenses, the option to Enable billable expenses must be selected in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Job Name

 If applicable, the full name of the job associated with the bill, as specified on the job's details page in the in the Name field.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Job Short Name

 If applicable, the abbreviated name of the job associated with the bill, as specified on the job's details page in the in the Short Name field.

 Markup

 The markup percentage of the line item to be billed back through billable expenses.

 Related Preferences

 In order to enable billable expenses, the option to Enable billable expenses must be selected in system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Property Short Name

 The abbreviated name of the property to be expensed for each line item, as displayed on the property's details page in the Short Name field.

 Read Date

 The date on which the meter reading was taken. This value populates on the master meter bill, in the Read Date column.

 This field can be imported only when the Master Meter Bill header H row has an entered value of Yes or True .

 Unit

 The name of the unit expensed for each line item, as displayed on the unit's details page in the Name field.

 Utility

 The utility being billed (e.g., Water or Electricity ). This value populates on the master meter bill, in the Utility column.

 This field can be imported only when the Master Meter Bill header H row has an entered value of Yes or True .

 Step 2: Begin the Import

 To import bills, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Bills .
The Import Bills Settings pop-up displays.

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
 In the Default Values section, enter default information into the available fields. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s).

 Field
 Description

 Property

 The default property association for each detail row.

 Bank Account

 The default bank account association for each header row.

 Account Type

 The account type ( Vendor or Owner ) to be the default account association for the bill.

 -
 Click Next .
The pop-up closes and the Import Bills page displays.

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

 In the Details section, header rows display at the top, while detail rows about the bill's allocations display at the bottom.

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
