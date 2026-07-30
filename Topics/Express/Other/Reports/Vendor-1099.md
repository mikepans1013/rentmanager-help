# Vendor 1099 (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-1099.htm

The Vendor 1099 report is designed so that you can print out information directly on the preprinted IRS 1099 form for vendors you paid during a calendar year.

 You can generate the Vendor 1099 report in two different ways depending on which report options you select. You can either produce a separate 1099 form for each property that is associated with vendor payment(s) or you can consolidate the 1099 expenses from all of your properties together to produce a single 1099 form for each vendor. The forms can then be mailed to vendors and the IRS to satisfy the IRS requirements for 1099 forms. The report results can include any information prior to the general ledger (GL) start date since this report does not consider the GL start date.

 As of the 2020 tax year, there are two different Vendor 1099 tax forms: the Nonemployee Compensation (NEC) and Other Compensation (MISC). The 1099-NEC form will be provided to vendors with the 1099 Category of Nonemployee Compensation selected in the Tax Information tile on the vendor's details page. All other vendors will receive the 1099-MISC form, which must be generated separately using the Associated 1099 Categories report option.

 More Information

 As of 2023, if you have 10 or more recipients, your must eFile your owner 1099 forms. For more information on how to generate an eFile from Rent Manager , refer to Export Vendor 1099 .

 For information on purchasing Safeguard printable tax forms, refer to Safeguard Tax Forms .

 Related Preferences

 If your printer is not aligning with the IRS 1099's margins when printing the report, you can adjust the margins through system preferences. For more information, refer to Preprinted Forms (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor 1099 .

 For more information, refer to Control User Access .

 To view the Vendor 1099 report, do the following:

 -
 Go to arrow_forward Payables arrow_forward  Vendor 1099 arrow_forward Vendor 1099 .
The Reports: Vendor 1099 page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Mark as Corrected

 Check Mark to print an X in the Corrected box for all generated 1099 reports. Select Yes on the pop-up to mark the 1099 as corrected, or No to return to the report options.

 Year

 Select the desired calendar year to display the payments you made to vendors during that year.

 Associated 1099 Categories

 Select the desired form from the options below:

 Option
 Description

 Nonemployee Compensation (NEC)

 Generates the 1099-NEC form for vendors with the selected 1099-NEC categories, as selected on the vendor's details page in the 1099 Category field.

 Other Compensation (MISC)

 Generates the 1099-MISC form for vendors with the selected 1099-MISC categories, as selected on the vendor's details page in the 1099 Category field.

 Vendor Name Source

 Select from where in Rent Manager to pull the vendor's name.

 Option
 Description

 Vendor Name

 Display the Vendor Name as entered on the Vendor details page.

 Payee

 Display the Payee as entered on the Vendor details page.

 If a payee has not been entered, the Vendor Name displays instead.

 Vendor Name and Payee

 Display the Vendor Name first and then the Payee as entered on the Vendor details page.

 If the vendor and payee names are the same, only the Vendor Name displays.

 Payee and Vendor Name

 Display the Payee first and then the Vendor Name as entered on the Vendor details page.

 If the vendor and payee names are the same, only the Vendor Name displays.

 User Defined Field

 If selected, a UDF Name drop-down list becomes available and displays vendor-type UDFs with a text field type. Selecting a UDF displays its value as entered on the vendor User Defined Fields pop-up.

 If the selected UDF has no value entered, the Vendor Name displays instead.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Total Values Less Than $600

 Check to display forms only for vendors that were paid $600 or more in the selected year. The results that display are dependent on whether or not the Consolidate Properties report option is checked.

 Option
 Description

 Unchecked

 If Consolidate Properties is unchecked, check Exclude total values less than $600 to exclude individual forms from the report results where the associated property did not pay the vendor $600 or more. For example:

 -
 Property A paid Vendor A $300.

 -
 Property B paid Vendor A $300.

 -
 Property C Paid Vendor A $300.

 Each property would be excluded because none of the properties paid $600 or more.

 Checked

 If Consolidate Properties is checked, check Exclude total values less than $600 to exclude the individual forms from the report results if the vendor was not paid $600 or more from all the selected properties combined. For example:

 -
 Property A paid Vendor A $300.

 -
 Property B paid Vendor A $300.

 -
 Property C Paid Vendor A $300.

 While none of the individual properties paid Vendor A $600 or more, when the payments are consolidated, the properties paid a total of $900, and therefore, Vendor A gets a single 1099 with a $900 amount.

 Hide Complete SSNs/Tax IDs

 Check to replace all but the last four digits of the vendor's 1099 SocSec # / Tax # as entered on the Vendor page with Xs.

 Consolidate Properties

 Check Consolidate Properties to combine all payments made from the selected properties to this vendor into a single entry in the report. After you have selected this option, you can enter the desired Name , address information, Phone number, and Tax ID to display your management company's information in the report instead of the property's information associated with each vendor payment. Or select to automatically populate the fields in this section with the management company's information.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 The fields that display on the Vendor 1099 form vary depending on the selection in the Consolidate Properties report option. Each form is described below.

 More Information

 If a property does not have a vendor payment associated with it that meets the selected report options, the report output is blank if the report option for Run Properties separately is selected.

 Non-Consolidated Vendor 1099

 If the Consolidate Properties report option is unchecked, the fields below display when printing the Vendor 1099 on its preprinted form.

 1099-NEC Form

 1099-MISC Form

 Each vendor payment is displayed in their own subsection in the report so that it can printed on separate 1099 forms. Each field in the report is described below.

 More Information

 Depending on the form and 1099 categories selected in the report options, the total payments to the vendor you made during the selected year displays in the corresponding section.

 1099 Form Field
 Description

 PAYER'S name

 The name, default address, and default phone number for the property associated with each vendor payment in the report.

 PAYER'S TIN

 The Property Tax ID for the property management company.

 RECIPIENT'S TIN

 The 1099 SocSec #/Tax # for each vendor as entered on the Vendor details page.

 RECIPIENT'S name

 The Vendor Name and/or Payee displays depending on the selection made in the Name Source section of the report options. If the Payee or UDF  has no data, only the Vendor Name displays.

 Vendor Name

 The Vendor Name as entered on the Vendor details page.

 Payee

 The Payee as entered on the Vendor details page.

 Vendor Name and Payee

 The Vendor Name first and then the Payee as entered on the Vendor details page.

 Payee and Vendor Name

 The Payee first and then the Vendor Name as entered on the Vendor details page.

 User Defined Field

 The value of the selected UDF Name as entered on the vendor-type User Defined Field pop-up.

 Account Number

 The unique, system-generated identifier for each information return of the same type for the same payee. This is derived from the company code, location ID, and vendor ID and can be a combination of alpha, numeric, or special characters.

 Consolidated Vendor 1099

 If the Consolidate Properties report option is checked, the fields below display when printing the Vendor 1099 on its preprinted form.

 1099-NEC Form

 1099-MISC Form

 Each vendor is displayed in their own subsection in the report so that it can printed on separate 1099 forms. Each field in the report is described below.

 More Information

 Depending on the form and 1099 categories selected in the report options, the total payments to the vendor you made during the selected year displays in the corresponding section.

 1099 Form Field
 Description

 PAYER'S name

 The name and address you entered in the Consolidate Properties section of the report options for each vendor.

 PAYER'S TIN

 The Tax ID you entered in the Consolidate Properties section of the report options for each vendor

 RECIPIENTS TIN

 The 1099 SocSec #/Tax # for each vendor as entered on the Vendor details page.

 RECIPIENT'S name

 The Vendor Name and/or Payee displays depending on the selection made in the Name Source section of the report options. If the Payee or UDF  has no data, only the Vendor Name displays.

 Vendor Name

 The Vendor Name as entered on the Vendor details page.

 Payee

 The Payee as entered on the Vendor details page.

 Vendor Name and Payee

 The Vendor Name first and then the Payee as entered on the Vendor details page.

 Payee and Vendor Name

 The Payee first and then the Vendor Name as entered on the Vendor details page.

 User Defined Field

 The value of the selected UDF Name as entered on the vendor-type User Defined Field pop-up.

 Account Number

 The unique, system-generated identifier for each information return of the same type for the same payee. This is derived from the company code, location ID, and vendor ID and can be a combination of alpha, numeric, or special characters.
