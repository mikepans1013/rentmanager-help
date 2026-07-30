# Import Depreciation Setup

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Depreciation-Setup.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing depreciation setups, you can create or update depreciation methods, balance rates, frequencies, and more for depreciable assets.

 More Information

 Depreciation schedules can be imported only for assets with the Track Financials option enabled and an associated property for tracking that financial data.

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Depreciation Setup
 Enabled

 Asset Management
 Depreciation Schedules
 Add

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of depreciation setup data is displayed with each row representing a different depreciation setup and each column representing information about that depreciation setup.

 Required Fields

 In order to import a depreciation setup, the following fields must always have values entered for all depreciation setups:

 -
 Accumulated Depreciation

 -
 Depreciation Expense

 -
 Depreciation Start

 -
 Expected Life

 -
 Posting Frequency

 -
 Purchase Amount

 Additionally, at least one of the following fields or combination of fields must have values entered:

 -
 Asset Name

 -
 Financial Property Short Name

 -
 A user-defined field

 Depreciation Setup Field Descriptions

 You can import values into any Rent Manager asset-type field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import depreciation setup information:

 Field
 Description

 Accumulated Depreciation

 The asset-type general ledger (GL) account that is used to track the asset's value over time. This account is credited in each journal entry created to decrease the value of the asset.

 Adjusted Accumulated Depreciation

 The decreased dollar value for an asset that was partially depreciated before it was tracked in Rent Manager . If you enter a value in this field of your import file, you must also include the Pre-existing Depreciable Asset field with a value of Yes or True .

 Adjusted Depreciation Start

 The last date on which the depreciation schedule updated before you added the asset to Rent Manager . If you enter a value in this field of your import file, you must also include the Pre-existing Depreciable Asset field with a value of Yes or True .

 Asset Name

 The Name entered on the asset's details page.

 Automate Depreciation Posting

 Determines whether depreciation is posted automatically or manually.

 If your import file has Yes or True entered in this field, depreciation is posted automatically using Task Automation . If your import file has No or False entered in this field, depreciation must be posted manually. For more information, refer to Post Depreciation .

 Related Preferences

 To post depreciation automatically, you must enable the Task Automation option for Asset Depreciation in system preferences. For more information, refer to Task Automation (System Preferences) .

 Convert To Straight Line

 Determines whether a setup using the Accelerated depreciation method switches to the Straight Line method automatically when the depreciation amount would be greater using that method (typically between 1/2 and 3/4 of the way through the Accelerated method).

 If your import file has Yes or True entered in this field, the depreciation method is switched automatically. If your import file has No or False entered in this field, the depreciation method remains Accelerated for the duration of the asset's life.

 Declining Balance Rate

 Determines the rate at which the value of an asset using the Accelerated depreciation method decreases. This value can either be 150 (for a 150% declining balance rate) or 200 (for a 200% declining balance rate).

 Depreciation Expense

 The expense-type GL account that is used to track the decline in the asset's value over time. This account is debited in each journal entry created to increase the depreciation expense for the asset.

 Depreciation Method

 The method defined for the depreciation setup (i.e., Straight Line or Accelerated ).

 Depreciation Start

 The date on which the asset's value begins depreciating.

 Expected Life

 The estimated number of months or years you expect this asset to be in service.

 Decimals which reflect a quarter year are allowed for depreciation schedules that have Yearly entered in the Posting Frequency column ( .25 , .5 , .75 ).

 Financial Property Short Name

 The short name of the Property used to track the asset's financial records, as selected on the asset's details page.

 Posting Frequency

 How often the depreciation schedule is posted.

 If your import file has Monthly in this field, the depreciation schedule is posted once a month. If your import file has Yearly in this field, the depreciation schedule is posted once a year.

 Pre-existing Depreciable Asset

 Indicates whether this asset was partially depreciated before it was tracked in Rent Manager .

 If your import file has Yes or True in this field, the Pre-Existing option is selected for this depreciation schedule, and you must also include the Adjusted Accumulated Depreciation and Adjusted Depreciation Start fields with applicable values. If your import file has No or False in this field, the depreciation schedule is added as a brand new schedule.

 Prorate Depreciation Posting

 Determine whether the depreciation schedule calculation is prorated based on the Depreciation Start date.

 If your import file has Yes or True entered in this field, the depreciation schedule calculation is prorated by month or by year, depending on the value entered in the Posting Frequency field. If your import file has No or False entered in this field, the depreciation schedule calculation is not prorated.

 Purchase Amount

 The beginning dollar amount for the depreciation calculation.

 Residual Amount

 The amount that the asset is expected to be worth at the end of its depreciation. This is also referred to as the salvage amount.

 User Defined Field

 The value for the any asset-type user-defined field (UDF) whose value is used to match depreciation setup information to asset records. During Step 2: Begin the Import , in the Match to Properties by section, the Use the following value from a User Defined Field option must be selected to determine which UDF to use for matching. Then, when importing, you must select the UDF you are using to match in the Handling drop-down list. For more information, refer to Asset-Type User Defined Fields (Pop-Up) .

 Step 2: Begin the Import

 To import depreciation schedules, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Depreciation Setup .
The Import Depreciation Setup Settings pop-up displays.

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
 In the Default Values section, select one of the available depreciation methods and click Next .

 Option
 Description

 Accelerated

 Depreciate assets at an accelerated rate, decreasing its value more during the earlier years of the asset's life.

 Optionally, you can have the depreciation method switch to Straight Line automatically when the depreciation amount would be greater using that method (typically between 1/2 and 3/4 of the way through the Accelerated method) by checking Convert to the straight line method of depreciation when the calculated accelerated depreciation amount is less than the straight line amount .

 Additionally, in the Rate field, select one of the following options to calculate the asset's depreciation rate:

 150% Declining Balance

 Decreases the asset's value at 150% the rate that the Straight Line depreciation would calculate, using the following formula:

 Depreciation Expense = Beginning Asset Value * (1 / Expected Life) * 1.5

 200% Declining Balance

 Decreases the asset's value at 200% the rate that the Straight Line depreciation would calculate, using the following formula:

 Depreciation Expense = Beginning Asset Value * (1 / Expected Life) * 2.0

 Straight Line

 Depreciate assets by a fixed value each month or year. Straight line depreciation is calculated using the following formula:

 Depreciation Expense = (Beginning Asset Value - Residual Value) / Expected Life

 -
 Select a Match to Assets by option to specify how Rent Manager matches the depreciation setups in your import file to the existing asset records. The available options are described below.

 Option
 Description

 Use Asset Name supplied in the import file

 Match the data to each asset's Name . The import file must have a column for the asset name.

 Use Asset Name and Financial Property Name supplied in the import file

 Match the data to each asset's Name and the short name of the selected Property for tracking the asset's financials. The import file must have a column for the asset name and financial property short name.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each asset. The import file must have a column for the UDF's values.

 -
 Click Next .
The pop-up closes and the Import Depreciation Setup page displays.

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

 For example, if the column has data for each asset's life expectancy, select Expected Life .

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
