# Import Assets

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Assets.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing assets, you can choose whether you are adding new asset data, or updating asset data that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Assets
 Enabled

 Asset Management
 Manage Assets
 Add, View Edit

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of asset data is displayed with each row representing a different asset and each column representing information about that asset.

 Required Fields

 In order to import assets, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new assets, or updating the information for assets already in Rent Manager .

 Import Type
 Description

 Add New Assets

 For adding new assets to Rent Manager , the Asset Name field must have a value entered.

 Update Existing Assets

 For updating assets already in Rent Manager , at least one of the following fields or combination of fields must have a value entered:

 -
 Asset Name

 -
 Asset Name and Financial Property

 -
 A user defined field

 Asset Field Descriptions

 You can import values into any Rent Manager asset field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import asset information:

 Field
 Description

 Allow Leasing

 If the asset is able to be rented by tenants and has a Community Owned homeowner status, enter Yes or True . If the asset is not able to be rented, or does not have a Community Owned homeowner status, enter No or False .

 If Track Financials is mapped as No or False , this field must also be entered as No or False .

 Asset Manufacturer

 The name of the company that makes the asset.

 Asset Name

 The desired name of the asset as it displays in Rent Manager .

 Asset Type

 The exact classification of the asset, such as Dishwasher or Stove . For more information, refer to Asset Types (Page) .

 Bathrooms

 If your asset is a manufactured home, provide the number of bathrooms within the asset.

 Bedrooms

 If your asset is a manufactured home, provide the number of bedrooms within the asset.

 Comment

 An internal note for users about the asset.

 Dimensions

 The length and width, entered in LxW format, of the asset (e.g., 24x10 ).

 Financial Property

 If Track Financials is set to Yes or True , enter the Short Name of the property that is used to track these transactions.

 Has Service Agreement

 If the asset comes with a service agreement, enter Yes or True . If there is no service agreement, enter No or False .

 Homeowner Status

 The classification of the home-type asset. This is imported to the Homeowner Status field on the asset's details page. Homeowner statuses must match one of the system defined statuses.

 Homeowner Status Start Date

 The date on which the home-type asset status started. This is imported into the Date field on the asset's details page. The date entered must be between the Service Life Start and Service Life End date and cannot have the same start date as another status for the same asset. If a date is not specified during import, the current date is used.

 Lienholder

 The name of the financial institution that retains legal claim to the asset until the loan associated with the Loan Number is paid off. This is imported to the Lienholder field on the asset's details page

 Loan Number

 The number assigned to the loan by the lender. This is imported to the Loan Number field on the asset's details page.

 Location From Date

 The date on which the asset was first moved to the location, in the MM/DD/YYYY format. The date must be on or between the Service Life Start and Service Life End dates.

 Location Property Short Name

 The shortened name of the property at which the asset is located. The Short Name is established on the property's General tile.

 Location To Date

 The final date on which the asset was at the location before being moved to another location, in the MM/DD/YYYY format. The date must be on or between the Service Life Start and Service Life End dates.

 Location Unit Name

 The name of the unit at which the asset is located.

 Manufactured

 The date, entered in the MM/DD/YYYY format, the asset was constructed.

 Market Rent

 If Allow Leasing is set to Yes or True , enter the amount to charge for renting this asset. This is imported to the asset's details page in the Market Rent field.

 Market Rent Start Date

 The date on which the market rent amount goes into effect. This is imported to the asset's View Market Rent pop-up in the From Date column.

 Model

 The asset's model name or number.

 Next Maintenance Date

 The due date, entered in the MM/DD/YYYY format, of the next maintenance date for the asset.

 Purchase Date

 The date, entered in the MM/DD/YYYY format, when the asset was purchased.

 Purchase Price

 The amount that was paid for the asset.

 Sale Price

 The amount that you charge to sell this asset.

 Serial Number

 The asset's serial identification number.

 Service Expiration

 The date, entered in the MM/DD/YYYY format, on which the asset's service agreement expires.

 Service Life End Date

 The date, entered in the MM/DD/YYYY format, when the asset was taken out of service or is scheduled to be taken out of service.

 Service Life Start Date

 The date, entered in the MM/DD/YYYY format, when the asset was put into service.

 Service Period

 The number of months between maintenance sessions.

 Square Footage

 If your asset is a manufactured home, provide the total square footage of the asset.

 Title Status

 The exact title status of the asset. For more information, refer to Asset Title Statuses (Page) .

 Track Financials

 Enter Yes or True to track financial and transactional records for this asset. If financial information is not tracked for this asset, enter No or False .

 User Defined Field

 Any asset-type user defined fields (UDFs) can be added as their own column. For more information, refer to Asset-Type User Defined Fields (Pop-Up) .

 Vendor

 The name of the vendor responsible for maintenance to this asset.

 Warranty Expiration Date

 The date, entered in the MM/DD/YYYY format, on which the asset's warranty expires.

 Warranty Info

 An internal note for users about the asset's warranty.

 Step 2: Begin the Import

 To import assets, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Assets .
The Import Assets Settings pop-up displays.

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

 Add New Assets

 Create new asset accounts in Rent Manager .

 Update Existing Assets

 Replace or add information for assets that are already in Rent Manager .

 To remove information from any fields on existing assets where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the asset is unchanged.

 -
 Select the needed information in the available fields. The section and options that display varies depending on whether you are adding or updating assets.

 Section
 Description

 Comment

 This option displays only if you are adding new assets.

 Enter an additional note or information to display on each imported asset.

 Match to assets by

 This option displays only if you are updating existing assets.

 Select an option to specify how Rent Manager matches the assets in your import file to the existing asset records. The available options are described below.

 Use Asset Name supplied in the import file

 Match the data to the asset Name as it is entered on the Asset details page.

 Use Asset Name and Financial Property supplied in the import file

 Match the data to both the asset Name and financial Property as it is entered on each asset's details page.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each asset. The import file must have a column for the UDF's values.

 -
 Click Next .
The pop-up closes and the Import Assets page displays.

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

 For example, if the column has data that determines whether or not an asset can be rented, select Allow Leasing .

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
