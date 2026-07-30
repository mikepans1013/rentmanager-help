# Export 1098

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Export-1098.htm

If you are required by the IRS to produce 1098 tax forms for tenants who paid you interest on an owner-financed loan, you can export the forms as a text (.txt) file to submit directly to the IRS. These files are for use with the IRS File Information Returns Electronically (FIRE) system, which is different from the IRIS filing portal and uses a separate Transmitter Control Code (TCC).

 Related Privileges

 Group
 Privilege
 Column

 Loans Receivable
 Loans Receivable
 View, Edit

 For more information, refer to Control User Access .

 Step 1: Select Export Options

 To export 1098 information on your computer or network so that it can be sent to the IRS, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Loans Receivable arrow_forward Export 1098 .
The Export 1098 page displays.

 -
 Confirm you have the details listed on the page and click Next .

 -
 On the Export Options tab, in the Which tax year will be used for the export? field, select the year for which you are exporting 1098 information from the drop-down list. The current year is selected by default.

 Step 2: Enter Transmitter Information

 Once you confirmed the export options, select the Transmitter Information tab on the left or click Next . Enter details about the entity that is sending the export file to the IRS.

 Alternatively, click Copy From Management Company to auto-fill the Transmitter Information tab section with information from the property management company's details page.

 Field
 Description

 Tax ID

 The tax identification number that has been issued to your business by the IRS.

 If you use Copy From Management Company , this displays the information from the property's details page under Other Information arrow_forward Property Tax ID .

 TCC

 The Transmitter Control Code (TCC) issued to your business by the IRS. This code must be obtained from the IRS before you attempt to submit the 1098 electronically.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Full Name .

 Transmitter Name

 The legal name of the entity transmitting the file.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Full Name .

 Contact Name

 The name of the person who you wish to be contacted by the IRS.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Manager .

 Contact Phone

 The phone number of the person who you wish to be contacted by the IRS.

 If you use Copy From Management Company , this displays the information from the property's details page under Phone Numbers arrow_forward Number that is marked as Default .

 Contact Email

 The email address of the person who you wish to be contacted by the IRS.

 If you use Copy From Management Company , this displays the information from the property's details page under General arrow_forward Email .

 Company Name

 The name of your property management company.

 If you use Copy From Management Company , this displays the information from the property's details page under Other Information arrow_forward Billing Name 1 and Billing Name 2 .

 Street Address

 The number and street name where your property management company is located.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 City

 The city where your property management company is located.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 State

 The state where your property management company is located.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 Postal Code

 The zip or postal code where your property management company is located.

 If you use Copy From Management Company , this displays the information from the property's details page under Primary Address for the address marked as Billing .

 Step 3: Select Properties

 On the Property Selection tab, in the Properties to Include field, select the properties for which to import interest data in the exported 1098 file from the drop-down list. Alternatively, select a property Group from the drop-down list.

 To select properties that are not currently active in Rent Manager , check Inactive Properties . The Properties to Include drop-down list updates to include inactive properties.

 Step 4: Enter Lender Information

 On the Lender Information tab, in the Which lender will be used for this export? field, select the applicable lender for this 1098 from the drop-down list. There are four options available: Management Company , Property , Owner , and Manual Entry . Depending on the option you select in this field, the information is retrieved from different places in Rent Manager . Each option is described below.

 Option
 Description

 Management Company

 The information on this tab pulls from the management company's Property details page. When this option is selected, the fields can be edited manually. The management company property is established in system preferences.

 Property

 The information on this tab pulls from the Property details pages of the selected properties. When this option is selected, the fields are read-only.

 Owner

 The information on this tab pulls from the Owner details pages of the owners associated with the selected properties. When this option is selected, the fields are read-only.

 Manual Entry

 No fields are populated on the tab, and values must be entered manually.

 After you select a lender, enter the information in the following fields:

 Field
 Description

 Tax ID

 The tax identification number that has been issued to the lender by the IRS. This field populates with the tax ID entered on the selected entity's details page.

 Name

 The lender's legal name. This field populates with the name entered on the selected entity's details page.

 Street

 The street where the lender is located. This field populates with the information on the selected entity's details page for the address marked as Default .

 City

 The city where the lender is located. This field populates with the information on the selected entity's details page for the address marked as Default .

 State

 The state where the lender is located. This field populates with the information on the selected entity's details page for the address marked as Default .

 Postal Code

 The zip or postal code where the lender is located. This field populates with the information on the selected entity's details page for the address marked as Default .

 Phone

 The phone number for the lender. This field populates with the information on the selected entity's details page for the phone number marked as Default .

 Step 5: Select Mortgage Insurance Charge Types

 On the Mortgage Insurance tab, in the Charge Types field, select the charge type(s) to use when calculating mortgage insurance premiums and interest data.

 Step 6: Select Borrower Options

 On the Borrower Options tab, establish the mailing address to use for the export and whether to include values less than $600. Each field is described below.

 Field
 Description

 Should the borrower's mailing address be used as the property securing the mortgage?

 Select Yes to use the address marked as Default on the borrower's Tenant details page in the exported file. Select No to use the address marked as Default on the Unit details page of the unit associated with the loan. If the tenant moves to a new unit, the loan’s unit does not change, and the original unit's details display.

 Should values less than $600 be excluded?

 Select Yes to remove loans from the export file if the tenant's interest payments did not exceed $600 in the tax year. Otherwise, select No .

 Step 7: Review Summary

 On the Summary tab, verify that the information in each field is correct.

 More Information

 To save a test file than can be sent to the IRS during their specified testing date range, check Generate Test File . Then, in the File Name field, enter the desired file name for the export. For more information, refer to the IRS website .

 When finished, click Download File to download the completed 1098 file and select if you want to print a summary of the export options you selected.

 Warning

 If any loans in the export, on the Loan Contacts pop-up for the loan, doesnn't have a tax ID entered in the Soc Sec # field, a warning pop-up displays to let you know those loans are excluded from the export. A tax ID must be added to the loan before you can download the file and print the export summary.

 If you select Yes , the Documents pop-up displays. You can use options on the top right to download or print the summary.
