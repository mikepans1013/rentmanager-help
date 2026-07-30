# Import STR Guests

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Importing/STR-Guests.htm

The importing tool allows you to pull large amounts of data into Rent Manager at one time via a comma-separated values (CSV) file or other file type that uses supported delimiters. The file is first prepared outside Rent Manager , using a program such as Microsoft Excel or Notepad, which contains rows of data representing the information that matches to designated Rent Manager fields. This greatly reduces the amount of time spent on data entry, especially when first setting up your Rent Manager database, or during routine additions that require a lot of new data, such as acquiring a new property.

 When importing short term rental (STR) guests, you can add guests as new tenant accounts in Rent Manager along with their reservations, greatly reducing the amount of time spent on data entry. Up to two reservations can be imported for each guest tenant.

 More Information

 This importing tool allows you to import guests only as new tenants. To import guest prospect reservations, you must import the reservations with new prospect guest accounts. For more information, refer to Import STR Guest Prospects .

 To import reservations to existing tenant accounts, refer to Import STR Reservations .

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import STR Guests
 Enabled

 Tenants/Prospects
 Tenants
 Add, View

 Create multiple leases on a tenant
 Enabled

 For more information, refer to Control User Access .

 Step 1: Prepare Import File

 Before beginning the import process in Rent Manager , prepare an import file (sometimes called a flat file or data file) outside of Rent Manager . The most common file type used for importing is a comma-separated values (CSV) file, and examples in this section are based on that file type. The following file types are accepted for importing:

 -
 Comma-separated values (CSV)

 -
 Text (TXT)

 -
 Tab-separated (TAB)

 -
 Intuit Interchange Format (IIF)

 Data in your file should be organized such that each row is a separate guest tenant, and each column contains information relevant to that tenant. In the following example, an import of STR guests is displayed with each row representing a different tenant and each column representing information about the new guest tenant:

 Required Fields

 In order to import STR guests, the following fields are required to have a value entered in the data file.

 -
 Arrival Date

 -
 Last Name

 STR Guests Field Descriptions

 You can import values into any Rent Manager STR guests field, including user defined fields (UDFs). As long as your import file meets the field requirements above, you can include as many or as few additional fields of your choice.

 The following fields can be added as columns to import STR guests information:

 Field
 Description

 Annual Income

 The annual net income of the tenant.

 Applicant Type

 The applicant type as it related to the tenant and how they applied to the property. Any of the following are acceptable entries: Applicant , Co-Applicant , Guarantor , Occupant , Partner , Spouse .

 Arrival Date

 The date on which the guest plans to arrive for their reservation.

 Birthday

 The date, as entered in the MM/DD/YYYY format, of the tenant's birthday.

 CashPay Account Number

 If your tenants pay rent with Zego CashPay, enter the tenant's CashPay account number to be imported.

 City

 The city as listed on the tenant's details page.

 Comment

 A note providing additional information about the tenant.

 Default Address Type

 One of the existing address types to be the default address type for the tenant.

 Default Phone

 If the phone number type selected for this column should be the tenant's default phone number, enter True or Yes . Otherwise, enter No or False .

 Departure Date

 The date on which the guest's reservation ends.

 Display

 The name of the tenant-type color to display on the tenant name in Rent Manager . For more information, refer to Colors (Page) .

 If the color name entered is not in Rent Manager , the tenant is assigned the default color.

 Don't Accept Checks

 If the tenant is not allowed to make payments via check, enter True or Yes . Otherwise, enter No or False .

 Don't Accept Payments

 To prevent Rent Manager from accepting any payments for this tenant, enter True or Yes . Otherwise, enter No or False .

 Don't Accept TWA Payments

 To prevent Rent Manager from accepting any payments made through Tenant Web Access for this tenant, enter True or Yes . Otherwise, enter No or False

 Don't Charge Late Fees

 If the tenant is exempt from late fees, enter True or Yes . Otherwise, enter No or False . For more information, refer to Tenant Late Fees (Pop-Up) .

 Don't Send AR Notification

 If the tenant should not receive accounts receivable automation notifications, enter True or Yes . Otherwise, enter No or False . For more information, refer to Accounts Receivable Automation Schedules (Page) .

 Email

 The email address of the tenant.

 Employer

 The name of the tenant's place of work.

 First and Last Name

 The first and last name of the tenant if importing the tenant's first and last name in the same column.

 If the first and last name of the tenant are in separate columns, instead use the separate First Name and Last Name field options.

 First Name

 The first name of the tenant if importing the tenants' first and last names in separate columns.

 If the first and last name of the tenant are both in one column, instead use the combined First and Last Name field option.

 Last Name

 The last name of the tenant if importing the tenants' first and last names in separate columns.

 If the first and last name of the tenant are both in one column, instead use the combined First and Last Name field option.

 License

 The tenant's vehicle license plate number.

 Middle Name

 The middle name of the tenant.

 Number of Adults

 The number of adults associated with the tenant's reservation.

 Number of Children

 The number of children associated with the tenant's reservation.

 Number of Pets

 The number of pets associated with the tenant's reservation.

 Number of Slide Outs

 The number of room extenders on the guest's RV.

 Occupant City

 The city as listed on the tenant's details page.

 Occupancy Default Address Type

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

 The postal code as listed on the tenant's details page.

 Occupant State

 The state as listed on the tenant's details page.

 Occupant Street

 The street as listed on the tenant's details page.

 Occupant Street2

 If applicable, the second line of the street address as listed on the tenant's details page.

 Occupant Type

 One of the contact types to categorize a contact and to be included on the tenant account.

 Phone Number

 One of the phone numbers for the tenant to be listed on the tenant's details page.

 Postal Code

 The postal or zip code as listed on the tenant's details page.

 Property Short Name

 The Short Name of the property with which the tenant is associated, as specified on the property's details.

 Rent Amount

 The amount the tenant is to pay in rent. This information is imported as a tenant-level recurring charge with the associated property's Rent Charge Type .

 Reservation Comment

 Any additional information about the guest to display on that guest's account.

 Reservation Lead Source

 The source that best represents how the guest heard about the property. You must enter one of the existing lead sources entered in Rent Manager . For more information refer to Prospect Lead Sources (Page) .

 RV/Vehicle Amps

 The amperage(s) of the electrical hookup that the guest's RV requires. Enter one of the following options:

 -
 No Hookups

 -
 20

 -
 30

 -
 50

 RV/Vehicle Length

 The numerical length of the guest's RV.

 RV/Vehicle License

 The license plate number of the guest's RV or vehicle.

 RV/Vehicle Model

 The manufacturing company of the guest's RV or vehicle.

 RV/Vehicle Slide Outs

 The type(s) of slide outs or room extenders on the guest's RV. Enter one or more of the following options separated by commas:

 -
 All

 -
 Passenger

 -
 Driver

 -
 Rear

 RV/Vehicle Type

 The type of RV the guest is bringing to the reservation. Enter one of the following options exactly:

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

 RV/Vehicle Width

 The numerical width of the guest's RV.

 RV/Vehicle Year

 The year the guest's RV or vehicle was manufactured.

 Secondary Arrival Date

 If the guest has a second reservation, the date on which the guest plans to arrive for the additional reservation.

 Secondary Departure Date

 If the guest has a second reservation, the date on which the guest's additional reservation ends.

 Secondary Lease Rent Amount

 If the guest has a second reservation, the amount the tenant is to pay in rent for the additional reservation. This information is imported as a tenant-level recurring charge with the associated property's Rent Charge Type .

 Secondary Lease Unit

 If the guest has a second reservation, the Name of the unit at the tenant's associated property. This property must be the same as the first reservation.

 More Information

 If the tenant has an additional reservation at another property, you can import that information in a separate import file that allows you to import reservations to existing tenants after you complete this import.

 Secondary Number of Adults

 If the guest has a second reservation, the number of adults associated with the tenant's additional reservation.

 Secondary Number of Children

 If the guest has a second reservation, the number of children associated with the tenant's additional reservation.

 Secondary Number of Pets

 If the guest has a second reservation, the number of pets associated with the tenant's additional reservation.

 Secondary Number of Slide Outs

 If the guest has a second reservation, the number of room extenders on the guest's RV being used for the additional reservation.

 Secondary Reservation Comment

 If the guest has a second reservation, any additional information about the guest to display on that guest's account related to the additional reservation.

 Secondary Reservation Lead Source

 If the guest has a second reservation, the source that best represents how the guest heard about the property. You must enter one of the existing lead sources entered in Rent Manager .

 Secondary RV/Vehicle Amps

 If the guest has a second reservation, the amperage(s) of the electrical hookup that the guest's RV requires for the additional reservation. Enter one of the following options:

 -
 No Hookups

 -
 20+

 -
 30+

 -
 50

 Secondary RV/Vehicle Length

 If the guest has a second reservation, the numerical length of the guest's RV being used for the additional reservation.

 Secondary RV/Vehicle License

 If the guest has a second reservation, the license plate number of the guest's RV or vehicle being used for the additional reservation.

 Secondary RV/Vehicle Make

 If the guest has a second reservation, the manufacturing company of the guest's RV or vehicle being used for the additional reservation.

 Secondary RV/Vehicle Model

 If the guest has a second reservation, the specific model name of the guest's RV or vehicle being used for the additional reservation.

 Secondary RV/Vehicle Slide Outs

 If the guest has a second reservation, the type(s) of slide outs or room extenders on the guest's RV being used for the additional reservation. Enter one or more of the following options separated by commas:

 -
 All

 -
 Passenger

 -
 Driver

 -
 Rear

 Secondary RV/Vehicle Type

 If the guest has a second reservation, the type of RV the guest is bringing to the additional reservation. Enter one of the following options exactly:

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

 Secondary RV/Vehicle Width

 If the guest has a second reservation, the numerical width of the guest's RV being used for the additional reservation.

 Secondary RV/Vehicle Year

 If the guest has a second reservation, the year the guest's RV or vehicle was manufactured.

 Security Deposit Held

 The total amount of the security deposit held for the tenant.

 SMS/Text Ready

 If the phone number type selected for this column is able to receive text messages, enter Yes or True . Otherwise, enter No or False .

 Social Security #

 The legal social security number issued to the tenant.

 State

 The state as listed on the tenant's details page.

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

 More Information

 VPO is a valid entry only if Virtual Post Office is enabled in Rent Manager . For more information, refer to VPO Defaults (System Preferences) .

 Street

 The street as listed on the tenant's details page.

 Street 2

 If applicable, the second line of the street address as listed on the tenant's details page.

 Type

 One of the contact types to categorize the tenant. For more information, refer to Contact Types (Page) .

 Unit

 The name of the unit at the tenant's associated property.

 User Defined Field

 Any tenant-type user defined fields (UDFs) can be added as their own column.

 Vehicle

 The make and model of the car or truck belonging to the tenant.

 Step 2: Begin the Import

 To import STR guests, do the following:

 -
 Go to arrow_forward Administration , then go to Import arrow_forward Import Records arrow_forward Import STR Guests .
The Import STR Guests Settings pop-up displays.

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
 In the Default Values section, select the Property for which to import tenant guest information.

 -
 Click Next in the bottom right.
The pop-up closes and the Import STR Guests page displays.

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

 For example, if the column has data about the size of the tenant's vehicle, select RV/Vehicle Length .

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
