# Vendor 1096 (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Vendor-1096.htm

The Vendor 1096 report is a summary tax form that displays the vendors who received an IRS 1099 form from you. The report can be generated in two ways depending on the selected report options. You can either generate a separate 1096 form for each property that is associated with vendor payment(s), or you can consolidate the expenses from all of your properties together to produce a single 1096 form for each vendor. The results can include any information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 To complete your tax forms as accurately as possible, generate the Vendor 1099 forms first and then generate the Vendor 1096 using the same report options as the 1099 forms. If you used more than one type of 1099 to pay vendors, you also need to submit a 1096 form for each type of 1099 as the 1096 form is an addendum to each kind of 1099 form. The 1096 form can then be mailed to the IRS to satisfy the IRS requirements for 1096 forms.

 More Information

 As of 2023, if you have 10 or more recipients, your must eFile your owner 1099 forms. For more information on how to generate an eFile from Rent Manager , refer to Export Vendor 1099 .

 For information on purchasing Safeguard printable tax forms, refer to Safeguard Tax Forms .

 Related Preferences

 If your printer is not aligning with the IRS 1096's margins when printing the report, you can adjust the margins through system preferences. For more information, refer to Preprinted Forms (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Vendor 1096 .

 For more information, refer to Control User Access .

 To view the Vendor 1096 report, do the following:

 -
 Go to arrow_forward Payables arrow_forward Vendor 1099 arrow_forward Vendor 1096 .
The Reports: Vendor 1096 page displays.

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

 Year

 Select the desired calendar year to display the payments you made to vendors during that year.

 Associated 1099 Categories

 Option
 Description

 Nonemployee Compensation (NEC)

 Generates the Vendor 1096 form for vendors with the selected 1099-NEC categories, as selected on the vendor's details page in the 1099 Category field.

 Other Compensation (MISC)

 Generates the Vendor 1096 form for vendors with the selected 1099-MISC categories, as selected on the vendor's details page in the 1099 Category field.

 Exclude Total Values Less Than $600

 Check to display forms only for vendors that were paid $600 or more in the selected year. The results that display are dependent on whether the 1099 Properties were consolidated report option is checked.

 Option
 Description

 Unchecked

 If 1099 Properties were consolidated is unchecked, check Exclude total values less than $600 to exclude individual forms from the report results where the associated property did not pay the vendor $600 or more. For example:

 -
 Property A paid Vendor A $300.

 -
 Property B paid Vendor A $300.

 -
 Property C Paid Vendor A $300.

 Each property would be excluded because none of the properties paid $600 or more.

 Checked

 If 1099 Properties were consolidated is checked, check Exclude total values less than $600 to exclude the individual forms from the report results if the vendor was not paid $600 or more from all the selected properties combined. For example:

 -
 Property A paid Vendor A $300.

 -
 Property B paid Vendor A $300.

 -
 Property C Paid Vendor A $300.

 While none of the individual properties paid Vendor A $600 or more, when the payments are consolidated, the properties paid a total of $900, and therefore, Vendor A gets a single 1099 with a $900 amount.

 1099 Properties Were Consolidated

 Check to combine all vendor payments associated with the selected properties into a single entry in the report. Enter the desired Name , address, Contact name, contact information, and Tax ID into the fields in this section to display your management company's information instead of the property address associated with each vendor payment.

 More Information

 Name generally refers to the name of your property management company, while Contact refers to the individual preparing the report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 The fields that display in the Vendor 1096 report vary depending on the selection in the Associated 1099 Categories report option. Each report output based on the selected report option is described below.

 Non-Consolidated Vendor 1096 Field Descriptions

 If the 1099 properties were consolidated report option is unchecked, the Vendor 1096 displays the total payments made by each property to various vendors over the selected tax year. The form appears as displayed below when printing the Vendor 1096 on its preprinted form.

 Each field in the report is described below.

 1096 Form Field
 Description

 FILER'S name

 The name and default address of your property management company with each vendor payment in the report.

 Name of person to contact

 The name of the Manager or accountant who is managing your taxes as entered on the property's details page.

 Email address

 The Email for the manager as entered on the property's details page.

 Telephone number

 The Default phone number for the property management company entered on the property's details page.

 Fax number

 The fax number for the property management company entered on the property's details page.

 1 Employer identification number

 The Property Tax ID for the management company property.

 3 Total number of forms

 The total number of 1099 forms that are summarized by this 1096 form.

 5 Total amount reported

 The total amount of payments made to vendors of the selected 1099 categories.

 6 Enter an "X"

 An X displays in the checkbox for the appropriate type of tax form that this 1096 summarizes.

 Consolidated Vendor 1099 Field Descriptions

 If the 1099 Properties were consolidated report option is checked, the Vendor 1096 displays the payments made by properties managed by this management company for the selected tax year. The form displays when printing the Vendor 1096 report on its preprinted form.

 Each field in the report is described below.

 1096 Form Field
 Description

 FILER'S name

 The name and default address of your property management company with each vendor payment in the report.

 Name of person to contact

 The name of the Manager or accountant who is managing your taxes as entered on the property's details page.

 Email address

 The Email for the manager as entered on the property's details page.

 Telephone number

 The Default phone number for the property management company entered on the property's details page.

 Fax number

 The fax number for the property management company entered on the property's details page.

 1 Employer identification number

 The Property Tax ID for the management company property.

 3 Total number of forms

 The total number of 1099 forms that are summarized by this 1096 form.

 5 Total amount reported

 The total amount of payments made to vendors of the selected 1099 categories.

 6 Enter an "X"

 An X displays in the checkbox for the appropriate type of tax form that this 1096 summarizes.
