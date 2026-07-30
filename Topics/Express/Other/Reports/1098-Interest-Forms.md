# 1098 Interest Forms (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/1098-Interest-Forms.htm

The 1098 Interest Forms report is designed to allow you to print out information directly on the preprinted IRS 1098 form to record interest from loans tenants paid you during a calendar year. The results can include any information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date. The forms can then be mailed to the borrower(s) and the IRS to satisfy the IRS requirements for 1098 forms.

 More Information

 If you prefer to electronically submit your 1098s, you can generate an eFile to be submitted through the IRS. For more information on how to generate an eFile from Rent Manager , refer to Export 1098 .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to 1098 Interest Forms .

 For more information, refer to Control User Access .

 To view the 1098 Interest Forms report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Loans Receivable arrow_forward 1098 Interest Forms .
The Reports: 1098 Interest Forms page displays.

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

 Mortgage Insurance Premium Charges

 Select each desired charge type for which to calculate each loan's mortgage insurance premiums (MIPs) to display in box 5 Mortgage Insurance Premiums . This applies to charges established in the Charge Types and Other Charges sections of a loan's General tile. The MIP displays only if the total calculated from all selected charge types is $600 or more.

 Exclude Total Values Less Than $600

 Check to display forms only for tenants who paid you at least $600 in interest on their loan during the selected year in the report results.

 Use Payer's/Borrower's Mailing Address as Property Securing the Mortgage

 Check to display the default address for the borrower as entered on the tenant's details page. If unchecked, the report displays the address of the unit associated with the loan.

 Hide Complete SSNs/Tax IDs

 Check to replace all but the last four digits of the borrower's Soc Sec # as entered on the tenant's details page with Xs.

 Lender's Address to Use

 Select an option to determine which address displays for the Lender's Address field.

 Option
 Description

 Property

 The property's full name, default address, tax ID, and default phone number as entered on the property's details page.

 Management Company

 The property management company's name, default address, tax ID, and default phone number as entered on the property management company's details page.

 Owner

 The owner's name, default address, tax ID, and default phone number as entered on the owner's details page. The owner who has an active contract during the selected year for the property displays.

 Manual

 Enter a custom Name , address, Phone number, and Tax ID .

 Year

 Select the desired calendar year to display the interest earned from loans during that year.

 More Information

 Interest you received from January 1 of the selected year until January 15 of the next tax year displays in the results. In addition, interest that is paid in the prior year and is accrued after January 15 of the selected year is also included in the results.

 For example, if 2025 is selected for the Year , then interest you received from January 1, 20 26 to January 15, 20 26 as well as any interest received in the 20 25 calendar year are included in the results.

 Report Results

 When the report is generated, it can be printed on the 1098 form and line up to populate the appropriate fields.The form displays as shown below when printing the 1098 Interest Forms report on its preprinted form.

 Field Descriptions

 Each borrower is displayed in their own subsection in the report so that it can printed on the 1098 form. The report results are described below including, if applicable, section, column, and subreport descriptions.

 Field
 Description

 RECIPIENT'S/LENDER'S name

 The lender's address from either the Property , Management Company , Owner , or a custom Manual address as selected in the report options.

 RECIPIENT'S/LENDER'S TIN

 The Property Tax ID associated with the option selected in the Lender's Address to Use section in the report options.

 PAYER'S/BORROWER'S TIN

 The tenant's social security number entered on the tenant's details page.

 PAYER'S/BORROWER'S name

 the tenant's name and default address as entered on the tenant's details page.

 Account Number

 The tenant's Reference number entered on their loan.

 1 Mortgage interested received from payer(s)/borrower(s)

 The total amount of interest the tenant has paid you for their loan in the selected calendar year.

 2 Outstanding mortgage principal

 The Principal Balance as of the last day in the calendar year prior to the selected year for the tenant's loan.

 For example, if you generate the report for 20 25 , the principal balance as of 12/31/20 24 displays. Loans entered during the current year display the full loan amount.

 3 Mortgage origination date

 The Origination date for each tenant's Loan.

 5 Mortgage insurance premiums

 The total amount of charges associated with charge types that were designated as Mortgage Insurance Premium Charges in the report options.

 8 Address or description of property securing mortgage

 If Use Payer's/Borrower's Mailing Address as Property Securing the Mortgage is checked in the report options, this displays the default address for the borrower as entered on the tenant's details page. If unchecked, the report displays the address of the unit associated with the loan.

 11 Mortgage acquisition date

 If the loan was acquired during the current year, the Acquisition Date entered on the loan's details displays. If the loan was not acquired during the current year, no date displays.
