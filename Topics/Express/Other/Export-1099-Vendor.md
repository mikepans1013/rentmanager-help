# Export Vendor 1099

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Export-1099-Vendor.htm

If you are required by the IRS to produce 1099 tax forms for your vendors, you can export and save the forms as text (.txt) files to a location on your computer or network. These files are for use with the IRS File Information Returns Electronically (FIRE) system, which is different from the IRIS filing portal and uses a separate Transmitter Control Code (TCC). The 1099 file should then be sent to the IRS by the IRS-mandated deadline(s).

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Export 1099
 Enabled

 For more information, refer to Control User Access .

 Step 1: Select Export Options

 To export your 1099 forms, do the following:

 -
 Go to   arrow_forward Payables arrow_forward General arrow_forward Export 1099 .

 -
 Confirm you have the information and details listed on the page and click Next .

 -
 Enter the year and entity type for your 1099 export file using the fields below.

 Field
 Description

 Which tax year will be used for the export?

 The tax year used for the 1099 export file.

 What type of information returns are you filing?

 Select Vendor 1099 to run the 1099 export for vendors. If you need to run a separate 1099 export for owners, refer to Export 1099 Owner .

 Step 2: Enter Transmitter Information

 Once you confirm the export options, select the Transmitter Information tab on the left or click Next .

 Enter information in the fields below related to the sender of the 1099 form. Click Copy From Management Company to auto-fill the Transmitter Information tab with information from the property management company's details page.

 Field
 Description

 TaxID

 The tax identification number issued to your business by the IRS.

 If you use Copy From Management Company , this displays the information from the property's details page under Other Information arrow_forward Property Tax ID .

 TCC

 The Transmitter Control Code (TCC) issued to your business by the IRS to submit the 1099 electronically. This code must be obtained from the IRS before you attempt to submit the 1099.

 Transmitter Name

 The name of your property management company.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Full Name .

 Contact Name

 The name of the person the IRS should contact.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Manager .

 Contact Phone

 The phone number of your property management company.

 If you use Copy From Management Company , this displays the information from the property's details page under Phone Numbers arrow_forward Number that is marked as Default .

 Contact Email

 The email address of your property management company.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Email .

 Company Name

 The name of your property management company used for billing purposes.

 If you use Copy From Management Company , this displays the information from the property's details page under Other Information arrow_forward Billing Name 1 and Billing Name 2 .

 Street Address

 The number and street of your property management company's billing address.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 City

 The city of your property management company's billing address.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 State

 The state of your property management company's billing address.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 Postal Code

 The postal code of your property management company's billing address.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 Step 3: Select Properties

 Once you enter the sender information, select the Property Selection tab on the left or click Next . In the Properties to Include field, select the properties whose 1099 transaction data is included in the exported 1099 file from the drop-down list. Alternatively, select a property Group from the drop-down list.

 To select properties that are not currently active in Rent Manager , check Inactive Properties . The Properties to Include drop-down list updates to include inactive properties.

 Step 4: Enter Payer Information

 Once you select any properties needed for the export, select the Payer Information tab on the left or click Next . The Should all properties be grouped under a single payer? field determines the source of the payer information that can be entered.

 When Yes is selected all payments made from the selected properties on the previous tab are grouped under a single payer. Additionally, each vendor's 1099 payment amounts are totaled across those properties and are reported as a single return. You can update the payer details by selecting one of the options below in the Which payer will be used for this export? field.

 Option
 Description

 Transmitter Info

 The details you entered in the Transmitter Information tab display. If you need to update this information, select the Transmitter Information tab to return to those details.

 Management Company

 The information from the property management company's details page displays.

 Manual Entry

 Blank fields are provided for you to fill out the payer's details. This is useful when the payer's details are different from both the transmitter and management company.

 When No is selected, each property selected on the previous tab displays as a payer that reports its own vendor transactions in the 1099 export file. You can update the payer details that display for each property under Select the property fields to use for the payer records .

 Selecting User Defined Field (UDF) for any of the fields below provides you with a UDF field where you can select a specific property type user defined field.

 Option
 Description

 Payer Name Source

 Select one of the options listed in the drop-down to determine which name is pulled from each property.

 Phone Number Source

 Select one of the options listed in the drop-down to determine which phone number is pulled from each property.

 Address Type Source

 Select one of the options listed in the drop-down to determine which address is pulled from each property.

 Step 5: Select Vendor Options

 Once you enter the sender information, select the Vendor Options tab on the left or click Next . Use the fields below to enter the information for the vendor:

 Field
 Description

 Vendor Name Source

 The Rent Manager field that determines how vendor names display on the 1099 form.

 The following options are available in this drop-down:

 Vendor Name

 The information from the vendor's details page under General arrow_forward Name displays.

 Payee

 The information from the vendor's details page under General arrow_forward Payee displays.

 Vendor Name and Payee

 The information from the vendor's details page under General arrow_forward Name and Payee displays.

 If the vendor and payee names are the same, only Name displays.

 Payee and Vendor Name

 The information from the vendor's details page under General arrow_forward Payee and Name displays.

 If the vendor and payee names are the same, only Name displays.

 User Defined Field

 Provides you with a UDF field that lists vendor user defined fields with the field type Text .

 Included 1099 Categories

 The 1099 categories to include in the report.

 More Information

 As of tax year 2025, Excess Golden Parachute Payments can no longer be filed using the FIRE system. To report such payments, speak with your accountant about alternative filing methods, such as the IRIS system.

 Should values less than $600 be excluded?

 Determines if you want to exclude vendors that you paid less than $600 for the selected Year in the 1099 export file.

 Step 6: Review Summary

 Once you enter the vendor options, select the Summary tab on the left or click Next . On the tab, verify that the information in each field is correct. Then, in the File Name field, enter the desired name for the export file.

 More Information

 To save a test file than can be sent to the IRS during their specified testing date range, check Generate Test File . Then, in the File Name field, enter the desired file name for the export. For more information, refer to the IRS website .

 When finished, click Download File to download the completed 1099 file and select if you want to print a summary of the export options you selected.

 If you select Yes , the Documents pop-up displays. You can use options on the top right to download or print the summary.
