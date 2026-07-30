# Import Inventory Items

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Inventory-Items.htm

The importing tool allows you to pull in large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing inventory items, you can choose whether you are adding new inventory item data, or updating inventory item data that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Inventory Items
 Enabled

 Sales/Invoicing
 Inventory
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of inventory item data is displayed with each row representing a different item and each column representing information about that item.

 Required Fields

 In order to import inventory items, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new inventory items, or updating the information for inventory items already in Rent Manager .

 Import Type
 Description

 Add New Inventory Items

 For adding new inventory items to Rent Manager , the Name field must have values entered.

 Update Existing Inventory Items

 For updating inventory items already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Name

 -
 Income Charge Type

 -
 Expense Chart Account

 Inventory Item Field Descriptions

 You can import values into any Rent Manager inventory item field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import inventory item information:

 Field
 Description

 Active

 If the item should be considered active in Rent Manager , enter Yes or True . If you no longer stock the item, enter No or False .

 Asset Chart Account

 The GL Account No , as displayed on the Chart of Account Details pop-up, of the asset-type account that tracks the value of the item on hand. This is imported to the inventory item details page Asset Chart Account field.

 COGS Chart Account

 The GL Account No , as displayed on the Chart of Account Details pop-up, of the expense-type account that tracks the cost of selling the item. This is imported to the inventory item details page COGS Chart Account field.

 Cost

 The amount that you usually pay for one unit of the item, which is imported to the inventory item details page Default Cost field.

 Description

 A brief description of the item, which is imported to the inventory item details page Description field.

 Expense Chart Account

 The GL Account No , as displayed on the Chart of Account Details pop-up, of the expense-type account that is debited (increased) whenever this inventory item is purchased. This is imported to the inventory item details page Expense Chart Account field.

 Income Charge Type

 The Name of a charge type, linked to an income-type GL account, that is used to charge tenants and owners for the item. This is imported to the inventory item details page Income Charge Type field.

 Is Markup Percentage

 If the value in the item's Markup column should be treated as a percentage, enter Yes or True . Otherwise, enter No or False .

 Location

 The area of your business where the item is stored. This is imported to the inventory item details page Location field.

 Markup

 The fixed value or percentage of markup added to the Cost of the item when you bill tenants or owners for it. This is imported to the inventory item details page Markup field.

 Name

 The name of the item. This is imported to the inventory item details page Name field.

 Purchase Order Workflow

 The workflow that determines the sequence of events an inventory item follows for reviews, approvals, and purchase order fulfillment. This is imported to the inventory item details page Purchase Order Workflow field.

 Reorder Quantity

 The on-hand quantity that the item should reach before you reorder the item. This is imported to the inventory item details page Reorder Quantity field.

 Taxable

 If you plan to collect tax on sales of the item, enter Yes or True . Otherwise, enter No or False .

 Track COGS

 If you plan to track cost of goods sold for the item, enter Yes or True . Otherwise, enter No or False .

 Track Inventory

 If you plan to track the on-hand quantity of the item, enter Yes or True . Otherwise, enter No or False .

 User Defined Field

 Any inventory item-type user-defined fields (UDFs) can be added as their own column.

 Step 2: Begin the Import

 To import inventory items, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Inventory Items .
The Import Inventory Items Settings pop-up displays.

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
 Select one of the available options:

 Option
 Description

 Add New Inventory Items

 Create new inventory item accounts in Rent Manager .

 Update Existing Inventory Items by Name

 Replace or add information for inventory items that are already in Rent Manager .

 To remove information from any fields on existing inventory items where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the inventory item is unchanged.

 -
 Click Next .
The pop-up closes and the Import Inventory Items page displays.

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

 For example, if the column has data about how much you pay for an inventory item, select Cost .

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
