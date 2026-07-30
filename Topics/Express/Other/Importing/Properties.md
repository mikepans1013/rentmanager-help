# Import Properties

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Properties.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing properties, you can choose whether you are adding new property data, or updating property data that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Properties
 Enabled

 Properties/Units
 Properties
 Add, View, Edit

 Property Bank Settings
 View, Edit

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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of property data is displayed with each row representing a different property and each column representing information about that property.

 Required Fields

 In order to import properties, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new properties, or updating the information for properties already in Rent Manager .

 Import Type
 Description

 Add New Properties

 For adding new properties to Rent Manager , all of the following fields must have values entered:

 -
 Name

 -
 Short Name

 Update Existing Properties

 For updating properties already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Property ID

 -
 Short Name

 -
 A user defined field

 Property Field Descriptions

 You can import values into any Rent Manager property field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import property information:

 Field
 Description

 AR Automation Schedule

 The exact name of the accounts receivable (AR) automation schedule that applies to the property. For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Billing City

 The city in the property's address marked as Billing .

 Billing Name 1

 The first line of the department or company that takes payments for the property, if it differs from the property name.

 Billing Name 2

 The second line of the department or company that takes payments for the property, if it differs from the property name.

 Billing Postal Code

 The postal or zip code in the property's address to mark as the Billing address.

 Billing State

 The state in the property's address to mark as the Billing address.

 Billing Street

 The first line of the street information in the property's address to mark as the Billing address.

 Billing Street 2

 The second line of the street information in the property's address to mark as the Billing address.

 City

 The city in the property's address marked to mark as the Default address.

 Comment

 A note providing additional information about the property.

 Commercial

 If the property is a commercial-type property, enter Yes or True and the Property Type field for the property is set to Commercial . Otherwise, enter No or False .

 Default Bank Account Number

 The bank account that typically pays expenses and receives payments for this property. Enter the GL Account No —such as 1001 —of the bank account to be imported as the default for the property.

 To add a default bank while importing properties, you must first create GL accounts for the bank(s). For more information, refer to Add a Bank Account .

 Display

 The name of the property-type color to display on the property name in Rent Manager .

 If the color name entered is not in Rent Manager , the property is assigned the default color.

 Email Address

 The email address of the property's primary contact, generally the property manager.

 Enable ePay

 If this property has Zego ePay enabled, enter Yes or True . Otherwise, enter No or False .

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Enable Late Fees

 If this property has any late fees established (charges for late payments), enter Yes or True . Otherwise, enter No or False .

 More Information

 There are many late fee setup fields available for importing. If you are importing late fee information for properties, refer to the table of late fee fields below at Property Late Fee Fields .

 ePay Bank Account Number

 The ePay bank that typically pays electronically processed expenses and receives electronically processed payments for this property. Enter the GL Account No —such as 1001 —of the bank account to be imported as the ePay bank for the property.

 If entered, the Enable ePay field must also be set as Yes or True .

 ePay Platform Fee Charge Type

 The name of the charge type—such as PLTFEE —used to charge platform fees to tenants or prospects making electronic payments via ePay .

 If entered, the Enable ePay field must also be set as Yes or True .

 ePay Terminal ID

 The unique ePay account number provided by Zego .

 If entered, the Enable ePay field must also be set as Yes or True .

 ePay Warning Limit

 When a payment equal to or more than the amount entered in this field is received, a warning message displays.

 If entered, the Enable ePay field must also be set as Yes or True .

 Marketing

 If this property is going to be marketed at the property level (the recommended marketing method), enter Yes or True . If the property is going to be marketed at the unit level, enter No or False . For more information, refer to Property Marketing Setup (Pop-Up) and Unit Marketing Setup (Pop-Up) .

 Name

 The official, full name of the property.

 Phone Number

 One of the phone numbers for the property. If a property has multiple phone numbers, create a separate column for each type of phone number.

 Postal Code

 The postal or zip code in the property's address to mark as the Default address.

 Posting Day

 The day on which users should post recurring charges for the property.

 Property ID

 The property's system-generated Property ID . The ID is located by using the PropertyID function in scripting. For more information, refer to Property Class (Script) .

 This field is used only for updating existing properties. If adding new properties, this column is skipped and Rent Manager automatically generates a property ID for each property during the import.

 Property Manager

 The name of the property's manager or primary contact.

 Property Tax ID

 The property's tax identification number.

 Property Type

 The category that best applies to the property. The entry in this field must match one of the following options exactly:

 -
 Apartment

 -
 Association

 -
 Commercial

 -
 Duplex

 -
 Manufactured Housing

 -
 Multi Family

 -
 RV / Campground

 -
 Short Term Rental

 -
 Single Family

 -
 Storage

 Rent Charge Type

 The name of the charge type—such as RC —that is used to charge rent to tenants or prospects at this property.

 Short Name

 The abbreviated name of the property, such as RIVER for a property named Riverview Apartments.

 State

 The state in the property's address to mark as the Default address.

 Statement Method

 The preferred delivery method of tenant statements for tenants associated with the property. This method is selected by default when adding tenants to this property.

 The entry in this field must match one of the following options exactly:

 -
 Use System Default

 -
 Print

 -
 Email

 -
 VPO

 -
 No Statement

 More Information

 VPO is a valid entry only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO Defaults (System Preferences) .

 Street

 The state in the property's address to mark as the Default address.

 Street 2

 The first line of the street information in the property's address to mark as the Default address.

 Total Square Footage

 The total square footage of the property.

 User Defined Field

 Any property-type user defined fields (UDFs) can be added as their own column. Then enter the values for that UDF for each property. For more information, refer to Property User Defined Fields (Pop-Up) .

 Property Late Fee Fields

 If the properties have late fee setups, there are additional fields specific to the late fee setups you can import. For more information, refer to Property Late Fees (Pop-Up) .

 More Information

 To import any of the following fields, the import file must have a column for the Enable Late Fees field and properties with late fee setups must have this field set as Yes or True . If Enable Late Fees is not set to Yes or True for a property, the late fee information is not imported with the property.

 The fields available to import for property late fees are described below.

 Fixed Late Fee Fields
 Description

 Enable Fixed Late Charge

 If this property has a fixed late fee (a late charge that is a set amount), enter Yes or True . Otherwise, enter No or False .

 Fixed Late Charge Amount

 If this property has a fixed late fee, enter the flat dollar amount for the late charge in this field.

 If entered, the Enable Fixed Late Charge field must also be set as Yes or True .

 Fixed Late Charge On Rent Only

 If this property has a fixed late fee that only impacts delinquent rent charges, enter Yes or True . Otherwise, enter No or False .

 If entered, the Enable Fixed Late Charge field must also be set as Yes or True .

 Percent Late Fee Fields

 Description

 Enable Percent Late Charge

 If this property has a percent late fee (a late charge that is always a certain percentage of the delinquent amount), enter Yes or True . Otherwise, enter No or False .

 Percent Late Charge Percentage

 If this property has a late fee that is a percentage of the tenant's total delinquent charges, enter only the number for that percentage (i.e., for 25%, enter 25 ). Entering a non-numeric value or including the percent (%) symbol prevents the value from being imported with the property.

 If entered, the Enable Percent Late Charge field must also be set as Yes or True .

 Percent Late On Full Charge Amount

 If this property has a percent late fee that is calculated based on the full amount of each charge, enter Yes or True . If the percent late fee is instead calculated based on the remaining balance of each charge, enter No or False .

 If entered, the Enable Percent Late Charge field must also be set as Yes or True .

 Percent Late On Rent Only

 If this property has a percent late fee that calculates only for delinquent rent charges, enter Yes or True for this field. If the fee calculates for all delinquent charges, enter No or False .

 If entered, the Enable Percent Late Charge field must also be set as Yes or True .

 Per-Day Late Fee Fields

 Description

 Enable Per Day Late Charge

 If this property has a per-day late fee (a late charge that increases as days pass without receiving payment), enter Yes or True . Otherwise, enter No or False .

 Enable Per Day One Month Only

 If this property's per-day late charge accrues for only one month, enter Yes or True in this field. Otherwise, enter No or False .

 If enabled, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Charge Amount

 If this property has a per-day late fee, enter the dollar amount to charge each day the payment is delinquent.

 If entered, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Exclude Holidays

 If this property has a per-day late fee that should skip holidays when calculating the number of days delinquent, enter Yes or True . Otherwise, enter No or False . For more information, refer to Default Holidays (System Preferences) .

 If entered, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Exclude Weekends

 If this property has a per-day late fee that should skip weekends (Saturday and Sunday) when calculating the number of days delinquent, enter Yes or True . Otherwise, enter No or False .

 If entered, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Fee Limit Amount

 If this property has a per-day late fee that should not exceed a certain dollar amount, enter that amount in this field.

 If entered, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Minimum Balance

 If this property has a per-day late charge that goes into effect only if the tenant has a balance that is equal to or greater than a certain dollar amount, enter that balance amount in this field.

 If entered, the Enable Per Day Late Charge field must also be set as Yes or True .

 Late Fee Grace Period Fields

 Description

 Enable Per Day Late Grace Period

 If this property has a grace period (the number of days that must elapse before the late charge starts calculating) for the per-day late fee, enter Yes or True . Otherwise, enter No or False .

 If enabled, the Enable Per Day Late Charge field must also be set as Yes or True .

 Per Day Late Grace Days

 If this property has a per-day late charge with a grace period, enter the number of days in the grace period before late fee calculations begin.

 If entered, the Enable Per Day Late Grace Period and Enable Per Day Late Charge fields must also be set as Yes or True .

 Per Day Late Grace Exclude Holidays

 If this property has a per-day late charge that should skip holidays when calculating the grace period, enter Yes or True for this field. Otherwise, enter No or False .

 If entered, the Enable Per Day Late Grace Period and Enable Per Day Late Charge fields must also be set as Yes or True .

 Per Day Late Grace Exclude Weekends

 If this property has a per-day late charge that should skip weekends (Saturday and Sunday) when calculating the grace period, enter Yes or True for this field. Otherwise, enter No or False .

 If entered, the Enable Per Day Late Grace Period and Enable Per Day Late Charge fields must also be set as Yes or True .

 Per Day Late Grace Non-Retroactive

 If this property has a per-day late charge with a grace period, and the late fees should calculate starting from the end of the grace period, enter Yes or True . If the late fees should instead calculate from the original due date, enter No or False .

 If entered, the Enable Per Day Late Grace Period and Enable Per Day Late Charge fields must also be set as Yes or True .

 Other Late Fee Fields

 Description

 Enable Late Fee Script

 If this property has a calculation for the late fee using scripting, enter Yes or True in this field. Otherwise, enter No or False .

 Late Fee Script

 If this property has a scripted calculation for the late fee, enter the script in this field.

 If entered, the Enable Late Fee Script field must also be set as Yes or True .

 More Information

 If this script contains quotation marks (") and your import file uses quotation marks as the Text Qualifier , replace the quotation marks in your script with apostrophes (') to allow the script to import correctly.

 Multiple Late Fee Selection

  

 If the property has multiple late fee options with values entered (in the Fixed Amount , Percent selections, and/or Script calculation fields), enter Add , Highest , or Lowest to determine how the late fee charge is calculated.

 Each option is described below.

 Add

 The late fee is the total amount of all three late fee fields.

 Highest

 Of the three late fee fields, the highest amount is charged as the late fee.

 Lowest

 Of the three late fee fields, the lowest amount is charged as the late fee.

 Step 2: Begin the Import

 To import properties, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Properties .
The Import Property Settings pop-up displays.

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

 Add New Properties

 Create new property accounts in Rent Manager .

 Update Existing Properties

 Replace or add information for properties that are already in Rent Manager .

 To remove information from any fields on existing properties where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the property is unchanged.

 -
 In the Default Values section, enter default information into the available fields. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s).

 Field
 Description

 Rent Charge Type

 The charge type(s) used to charge rent to tenants or prospects at all properties in the import file. This field is editable only when importing new properties.

 Users

 The users that need access to the properties in the import file. To grant property access while importing properties, you must first create user accounts.

 -
 Click Next .
If you selected Add New Properties , the pop-up closes and the Import Properties page displays. Proceed to Step 3: Configure Import File for Rent Manager .

 -
 If you selected Update Existing Properties , select a Match to Properties by option to specify how Rent Manager matches the properties in your import file to the existing property records. The available options are described below.

 Option
 Description

 Use Property ID supplied in the import file

 Match the data to each property's system-generated Property ID . The import file must have a column for the property IDs.

 The ID is located by using the PropertyID function in scripting. For more information, refer to Property Class (Script) .

 Use Property Short Name supplied in the import file

 Match the data to the Short Name as it is entered on each property's details page. The import file must have a column for the abbreviated property names.

 Use the following value from a User Defined Field

 Match the data to a user defined field (UDF), then select the UDF to match to for each property. The import file must have a column for the UDF's values.

 - Click Next .
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

 For example, if the column has data that determines the category or type for each property, select Property Type .

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
