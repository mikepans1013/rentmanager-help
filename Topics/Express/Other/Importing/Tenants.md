# Import Tenants

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/Tenants.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing tenants, you can choose whether you are adding new tenant data, or updating tenant data that already exists in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Tenants
 Enabled

 Tenants/Prospects
 Tenants
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

 Data in your import file should be organized with each row as a separate entity and each column containing information relevant to that entity. For example, an import of tenant data is displayed with each row representing a different tenant and each column representing information about that tenant.

 Required Fields

 In order to import tenants, some fields are required to have a value entered in the data file. The fields that are required depend on whether you are adding new tenants, or updating the information for tenants already in Rent Manager .

 Import Type
 Description

 Add New Tenants

 For adding new tenants to Rent Manager , the following field must have a value entered:

 -
 Last Name

 Update Existing Tenants

 For updating tenants already in Rent Manager , at least one of the following fields must have a value entered:

 -
 Account Number

 -
 Property Short Name

 -
 Unit

 -
 A user defined field

 Tenant Field Descriptions

 You can import values into any Rent Manager tenant field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice. RV fields apply only to tenants with a leased unit assigned to Manufactured Housing , Short Term Rental , and RV/Campground property types.

 The following fields can be added as columns to import tenant information:

 Field
 Description

 Account Number

 The tenant's system-generated account number as shown on the account's details page in the Account# field. This is used only for update imports.

 Annual Income

 The annual net income of the tenant to be imported.

 Applicant Type

 The applicant type as it related to the tenant and how they applied to the property. Any of the following are acceptable entries: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Spouse .

 Birthday

 The date, as entered in the MM/DD/YYYY format, of the tenant's birthday.

 CashPay Account Number

 If your tenants pay rent with Zego CashPay, enter the tenant's CashPay account number to be imported.

 City

 The city as listed on the tenant details page's Addresses tile.

 Comment

 A note providing additional information about the tenant.

 Company Name

 If the tenant is associated with a commercial property, the company name of the tenant.

 Default Address Type

 One of the existing address types to be the default address type for the tenant.

 Default Phone

 If the phone number type selected for this column should be the tenant's default phone number, enter True or Yes . Otherwise, enter No or False .

 Display

 The name of the tenant-type color to display on the tenant name in Rent Manager . For more information, refer to Colors (Page) .

 If the color name entered is not in Rent Manager , the tenant is assigned the default color.

 Don't Accept Checks

 If the tenant is not allowed to make payments via check, enter Yes or True . Otherwise, enter No or False .

 Don't Accept Partial Payments

 To prevent any partial payments from being processed for this tenant, enter Yes or True . Otherwise, enter No or False . A partial payment is considered anything below the tenant's current balance due as of the payment date.

 Don't Accept Payments

 To prevent Rent Manager accepting any payments for this tenant, enter Yes or True . Otherwise, enter No or False .

 Don't Allow TWA Payments

 To prevent Rent Manager accepting any payments made through Tenant Web Access for this tenant, enter Yes or True . Otherwise, enter No or False .

 Don't Charge Late Fees

 If the tenant is exempt from late fees, enter Yes or True . Otherwise, enter No or False . For more information, refer to Tenant Late Fees (Pop-Up) .

 Don't Send AR Auto Notifications

 If the tenant should not receive accounts receivable automation notifications, enter Yes or True . Otherwise, enter No or False . For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Email

 The email address of the tenant to be imported.

 Employer

 The name of the tenant's place of work.

 Expected Move Out

 If applicable, the date, as entered in the MM/DD/YYYY format, the tenant expects to move out of the property.

 First and Last Name

 The first and last name of the tenant if importing the tenant's first and last name in the same column.

 If the first and last name of the tenant are in separate columns, instead use the separate First Name and Last Name field options.

 First Name

 The first name of the tenant if importing the tenants' first and last names in separate columns.

 If the first and last name of the tenant are both in one column, instead use the combined First and Last Name field option.

 Last Name

 The last name of the tenant if importing the tenants' first and last names in separate columns.

 If the first and last name of the tenant are both in one column, instead use the combined First and Last Name field option.

 Lease End

 The date, as entered in the MM/DD/YYYY format, the lease is set to end.

 Lease Sign

 The date, as entered in the MM/DD/YYYY format, the tenant signed the lease.

 Lease Start

 The date, as entered in the MM/DD/YYYY format, the lease begins.

 Lease Term

 The lease term to describe the duration of the tenant's lease. For more information, refer to Lease Terms (Page) .

 License

 The tenant's vehicle license plate number.

 Middle Name

 The middle name of the tenant.

 Move In

 The date, as entered in the MM/DD/YYYY format, this tenant plans to move into the unit.

 Move Out

 The date, as entered in the MM/DD/YYYY format, this tenant plans to move out of the unit.

 Notice Date

 The date, as entered in the MM/DD/YYYY format, the tenant gave notice of their intention to move out and no longer occupy the unit.

 Occupant City

 The city as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Default Address Type

 One of the existing address types to be the default address type for a the contact included on the tenant account.

 Occupant First and Last Name

 The first and last name of a contact to be included on the tenant account if importing the occupant's first and last name in the same column.

 If the first and last name of the contact are in separate columns, instead use the separate Occupant First Name and Occupant Last Name field options.

 Occupant First Name

 The first name of a contact to be included on the tenant account.

 If the first and last name of the contact are both in one column, instead use the combined Occupant First and Last Name field option.

 Occupant Last Name

 The last name of a contact to be included on the tenant account.

 If the first and last name of the contact are both in one column, instead use the combined Occupant First and Last Name field option.

 Occupant Postal Code

 The postal code as listed on the View Contacts pop-up, in the Addresses section.

 Occupant State

 The state as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Street

 The street as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Street2

 If applicable, the second line of the street address as listed on the View Contacts pop-up, in the Addresses section.

 Occupant Type

 One of the contact types to categorize a contact and to be included on the tenant account.

 Phone Number

 One of the phone numbers for the tenant to be listed on the tenant's details page.

 Postal Code

 The postal or zip code as listed on the tenant details page's Addresses tile.

 Property Short Name

 The Short Name of the property with which the tenant is associated, as specified on the property's details page.

 Rent Amount

 The amount the tenant is to pay in rent. This information is imported as a tenant-level recurring charge with the associated property's Rent Charge Type .

 Secondary Lease End

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, the secondary lease is set to end.

 Secondary Lease Expected Move Out

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, the tenant expects to move out of the property.

 Secondary Lease Move In

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, this tenant plans to move into the unit.

 Secondary Lease Move Out

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, this tenant plans to move out of the unit.

 Secondary Lease Notice Date

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, the tenant gave notice of their intention to move out and no longer occupy the unit.

 Secondary Lease Rent Amount

 If the tenant has a secondary lease, the amount the tenant is to pay in rent. This is imported as a tenant-level recurring charge with the associated property's Rent Charge Type .

 Secondary Lease Sign

 If the tenant has a secondary lease, he date, as entered in the MM/DD/YYYY format, the tenant signed the secondary lease.

 Secondary Lease Start

 If the tenant has a secondary lease, the date, as entered in the MM/DD/YYYY format, the secondary lease begins.

 Secondary Lease Unit

 If the tenant has a secondary lease, the Name of the unit at secondary lease's associated property.

 Secondary Lease Unit Type

 If the tenant has a secondary lease, unit type of the unit secondary lease's associated property.

 Security Deposit Held

 The total amount of the security deposit held for the tenant. This creates a charge and an offsetting credit dated before the GL start date on the tenant account.

 SMS/Text Ready

 If the phone number type selected for this column is able to receive text messages, enter Yes or True . Otherwise, enter No or False .

 Social Security #

 The legal social security number issued to the tenant.

 State

 The state as listed on the tenant details page's Addresses tile.

 Statement Method

 The tenant's preferred delivery method for tenant statements.

 Entries in this field must match one of the following options:

 -
 Use Property Default

 -
 Print

 -
 Email

 -
 VPO

 -
 No Statement

 Related Preferences

 VPO is a valid entry only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO Defaults (System Preferences) .

 Street

 The street as listed in the tenant details page's Addresses tile.

 Street2

 If applicable, the second line of the street address as listed on the tenant details page's Addresses tile.

 Type

 One of the contact types to categorize the tenant. For more information, refer to Contact Types (Page) .

 Unit

 The Name of the unit at the tenant's associated property, specified in the Property Short Name field in the import file.

 Unit Type

 The unit type of the unit at the tenant's associated property specified in the Property Short Name field in the import file.

 User Defined Field

 Any tenant-type user defined fields (UDFs) can be added as their own column. For more information, refer to Tenant User Defined Fields (Pop-Up) .

 Vehicle

 The make and model of the car or truck belonging to the tenant to be imported.

 RV Field

 Description

 RV Amps

 The amperage(s) of the electrical hookup that the tenant's RV requires. Enter one of the following options exactly:

 -
 No Hookups

 -
 20

 -
 30

 -
 50

 RV Homeowner Status

 The classification of the asset associated with the tenant, specified in the asset's Homeowner Status field. This field can be imported only for tenants with a leased unit assigned to the Manufactured Housing property type.

 RV Length

 The numerical length of the tenant's RV.

 RV License

 The license plate number of the tenant's RV.

 RV Make

 The manufacturing company of the tenant's RV.

 RV Model

 The specific model of the tenant's RV.

 RV Number of Slide Outs

 The number of slide outs or room extenders on the tenant's RV. The value must be between zero and four.

 RV Slide Outs

 The type(s) of slide outs or room extenders on the tenant's RV. Enter one or more of the following options separated by commas:

 -
 All

 -
 Passenger

 -
 Driver

 -
 Rear

 RV Type

 The type of RV associated with the tenant. Enter one of the following options exactly:

 -
 Fifth Wheel

 -
 Hybrid Trailer

 -
 Motorclass A

 -
 Motorclass B

 -
 Motorclass C

 -
 Pop Up/Tent Trailer

 -
 Tent

 -
 Toy Hauler

 -
 Travel Trailer

 -
 Truck Camper

 -
 Other

 RV Width

 The numerical width of the tenant's RV.

 RV Year

 The year the tenant's RV or vehicle was manufactured.

 Step 2: Begin the Import

 To import tenants, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import Tenants .
The Import Tenants Settings pop-up displays.

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

 Add New Tenants

 Create new tenant accounts in Rent Manager .

 Update Existing Tenants

 Replace or add information for tenants that are already in Rent Manager .

 To remove information from any fields on existing tenants where there is an empty cell in the import file, check Replace data with blanks . Otherwise, the information for that field on the tenant is unchanged.

 Select one of the options below to determine how to handle leases associated with the tenant in the import file.

 Add New Leases

 The lease data within the import file is used to create a new lease on the tenant account without affecting any leases that already exist on the account in Rent Manager .

 Update Existing Leases

 The lease data within the import file is used to update an existing lease on the tenant account.

 -
 Select the needed information in the available fields. The section and options that display varies depending on whether you are adding or updating tenant accounts.

 Section
 Description

 Default Values

 This option displays only if you are adding new tenant accounts. These values are automatically applied to any blank rows for the column in the import file, or to all rows if no column is specified for the field(s). The available options are described below.

 Property

 Select the default property to apply to the imported records where there is an empty cell in the Property Short Name column.

 Create new units if they don't exist

 Check to have Rent Manager create new units based on the information in the import file for the tenants to be imported.

 Use default lease term based off of lease start and end dates

 Check to automatically adjust the tenant's lease term based on the lease dates provided in the import file.

 Match to Tenants by

 This option displays only if you are updating existing tenant accounts.

 Specify how Rent Manager matches the tenant accounts in your import file to the existing tenant account records. The available options are described below.

 Use Account Number supplied in the import file

 Match the data to the tenant's system-generated account number.

 Use Property Short Name and Unit supplied in the import file

 Match the data to the property Short Name as it is entered on the Property details page and the unit Name as it is entered on the Unit details page that are associated with the tenant.

 Use Unit supplied in the import file and the following Property

 Match the data to the unit Name  as it is entered on the Unit details page and the selected Property from the drop-down list.

 Use the following value from a User Defined Field

 Match to the data value for the user defined field selected from the drop-down list.

 -
 Click Next .
The pop-up closes and the Import Tenants page displays.

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
