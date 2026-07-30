# Minnesota CRP 2018 and Prior (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Minnesota-CRP-2018-and-Prior.htm

The Minnesota CRP 2018 and Prior  (Certificate of Rent Paid) is a document that property managers and landlords with properties in the state of Minnesota must provide to their tenants every year, provided that property tax was payable for the tax year on the property. This document can be printed directly from Rent Manager and provided to tenants, who can then file the document with their taxes.

 The Minnesota CRP 2018 and Prior  requires that you track specific information for the tenants that is not tracked in Rent Manager by default, and must therefore be tracked using user defined fields (UDFs). The first time you generate the report, all of the necessary UDFs are created automatically based on whether you wish to track the information by property or by unit. After the UDFs are created, you can then enter the information for these UDFs on each applicable tenant, tenant contact, property, and unit account. Once all information is entered, the report generates the necessary data for the Minnesota CRP 2018 and Prior . For more information on UDFs, refer to User Defined Fields (Page) .

 More Information

 Beginning in the tax year of 2024, the State of Minnesota mandates all CRPs to be filed electronically through their e-Services Portal. The Minnesota CRP form can still be used to provide the required copy of CRP to each resident but an electronic form must be submitted to the State of Minnesota. For more information, refer to Export Minnesota CRP .

 Warning

 This report can be run for the year 2018 and any year prior. To run this report for 2019 and later, you must run the most recent version of the form, the Minnesota CRP . For more information, refer to Minnesota CRP (Report) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Minnesota CRP 2018 and Prior .

 For more information, refer to Control User Access .

 Set Up Minnesota CRP 2018 and Prior UDFs

 Before using the Minnesota CRP 2018 and Prior report, you must first establish a number of various, predetermined user defined fields (UDFs) that are used by this report to track specific information required by Minnesota. When attempting to generate the report for the first time, Rent Manager automatically creates these UDFs for you.

 Related Privileges

 In the User Defined Fields Privilege Group , the User defined fields privilege to Add is required.

 To have the necessary UDFs automatically created, do the following:

 -
 Go to arrow_forward Custom Reports arrow_forward General arrow_forward Minnesota CRP 2018 and Prior .
The Reports: Minnesota CRP 2018 and Prior page displays.

 -
 In the Data Source field, select whether to generate the Minnesota CRP 2018 and Prior  on a Unit Based or Property Based level.

 -
 Generate the report in your desired file format(s).
A pop-up displays with a list of all the UDFs that have been created for the purposes of the Minnesota CRP 2018 and Prior .

 -
 Review the list of UDFs that were created, then click Cancel to close the pop-up.

 -
 For each tenant, tenant contact, and property or unit that applies to the Minnesota CRP 2018 and Prior , go to the User Defined Fields tab and enter the needed information for each newly-created UDF. Each UDF is described in the headings below.

 Property or Unit UDFs

 The following UDFs are created at either the property or unit level, depending on the Data Source selected the first time the report is generated. All Minnesota CRP 2018 and Prior  user defined fields are case sensitive. For more information, refer to Property User Defined Fields (Pop-Up) or Unit User Defined Fields (Pop-Up) .

 UDF
 Description

 county

 Enter the name of the county in which the property or unit is located.

 parcelnum

 Enter the tax parcel ID number for the property or unit.

 CRP Is Nursing Home

 Select Yes if the property or unit is a nursing home. Otherwise, select No .

 CRP Is Intermediate Care Facility

 Select Yes if the property or unit is an intermediate care facility. Otherwise, select No .

 CRP Is Adult Foster Care

 Select Yes if the property or unit is an adult foster care facility. Otherwise, select No .

 CRP Is Assisted Living

 Select Yes if the property or unit is an assisted living facility. Otherwise, select No .

 CRP Is Mobile Home Lot

 Select Yes if the property or unit is a mobile home lot. Otherwise, select No .

 Tenant UDFs

 The following UDFs are created at the tenant level the first time the report is generated. All Minnesota CRP 2018 and Prior  user defined fields are case sensitive. For more information, refer to Tenant User Defined Fields (Pop-Up) .

 UDF
 Description

 numadults

 Enter the number of adults that are associated with this tenant account. Typically, this is the number of adults listed on the View Contacts page for each tenant account or the number of adults living in the unit.

 Warning

 Married couples are counted as one adult for the purposes of the Minnesota CRP 2018 and Prior report.

 CRP Govt Housing Assistance

 Select Yes if the tenant receives government housing assistance. Otherwise, select No .

 CRP NumAdults Includes Married Couple

 Select Yes if the number of adults entered includes a married couple. Otherwise, select No .

 CRP GAMC Payments

 Enter the amount paid for this tenant's rent by the General Assistance Medical Care (GAMC) program, if known.

 CRP GRH Payments

 Enter the amount paid for this tenant's rent by the Housing Support program (formerly known as Group Residential Housing, or GRH), if known.

 CRP Is Caretaker

 If this tenant is a caretaker for the property and provides services in lieu of all or part of their rent, select Yes . Otherwise, select No .

 CRP Caretaker Payments

 Enter the total amount in credits that the tenant receives for performing caretaker duties each year.

 Contact UDFs

 The following UDFs are created at the contact level the first time the report is generated.

 UDF
 Description

 Receives CRP

 Select Yes if this contact should receive a Minnesota CRP 2018 and Prior  form. Otherwise, select No .

 Each unmarried adult should receive their own Minnesota CRP 2018 and Prior  form. Married couples should receive just one form between them.

 CRP Movein Date

 Optionally, enter the contact's Move In date.

 This may differ from the Move In date displayed on the tenant's details page if the contact moved in on a different date than the primary contact.

 CRP Moveout Date

 Optionally, enter the contact's Move Out date.

 This may differ from the Move Out date displayed on the tenant's details page if the contact moved out on a different date than the primary contact.

 Generate the Minnesota CRP 2018 and Prior

 To view the Minnesota CRP 2018 and Prior report, do the following:

 -
 Go to  arrow_forward Custom Reports arrow_forward General arrow_forward Minnesota CRP 2018 and Prior .
The Reports: Minnesota CRP 2018 and Prior page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Click Generate Report .
The report either downloads to your computer, or, if you selected PDF  in the formats drop-down list, the report displays.

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Signature Date

 Enter a date which displays on the Date field of the Owner's or agent's signature line on the form.

 Charges to Include

 The report displays total paid rent charges associated with any of the selected charge types.

 Data Source

 Select one of the following options to determine at which level the forms generate. The first time you generate the report for the selected data type, the UDFs for that data type are created automatically.

 For example, if the first time the report is generated is for Property Based data , the UDFs created are on the property level. If the report is then generated again with Unit Based data, the UDFs are recreated on the unit level as well. Once information is entered in the fields, the information that generates in the report depends on the Data Source you select.

 Option
 Description

 Property Based

 The forms generate using the data defined for each property in the property-level user defined fields.

 Unit Based

 The forms generate using the data defined for each unit in the unit-level user defined fields.

 Separation Method

 Select one of the following options to determine how the report results are batched.

 Option
 Description

 Do not separate

 Generates one document with one form per page.

 Separate by Properties

 Generates multiple documents with the recipients at each property generated individually.

 Separate by Tenants

 Generates multiple documents with the recipients associated with each tenant account generated individually.

 Owner/Agent Information

 Select from the following options to determine how the information for the owner or agent of the property displays on the form.

 Related Preferences

 Some fields pull information from the property established as the management company in Management Company (System Preferences) .

 Name

 Determines the name used for the owner or managing agent of the recipient's property. All fields are located on the property's details page.

 Option
 Description

 Property Name

 The Full Name of the property as entered on the General tile.

 Property Send Payment to Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile.

 Property Send Payment to Name or Property Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile. If no billing names are defined for the property, the Full Name displays.

 Mgt. Co. Property Name

 The management company's Full Name as entered on the General tile.

 Mgt. Co. Property Send Payment to Name

 The management company's Billing Name 1 and Billing Name 2 as entered on the Other Information tile.

 Address

 Determines the address used for the owner or managing agent of the recipient's property. All fields are located on the property's details page on the Addresses tile.

 Option
 Description

 Property Address

 The address marked as Default for the property.

 Property Send Payment to Address

 The address marked as Billing for the property.

 Mgt. Co. Property Address

 The address marked as Default for the management company property.

 Mgt. Co. Property Send Payment to Address

 The address marked as Billing for the management company property.

 Phone

 Determines the phone number used for the owner or managing agent of the recipient's property. All fields are located on the property's details page on the Phone Numbers tile.

 Option
 Description

 Property Default Phone Number

 The phone number marked as Default for property.

 Mgt. Co. Default Phone Number

 The phone number marked as Default for the management company property.

 Override default phone

 Alternatively, check this option and enter a phone number in the Default Phone Number Override field to use for every form, regardless of the recipient's property.

 Sort Options

 Select one of the following options to determine the order in which forms generate.

 Option
 Description

 Account Number

 Forms are sorted numerically by the recipient's system-generated ID number in ascending order (lowest to highest).

 Last Name

 Forms are sorted alphabetically by the recipient's Last Name .

 Unit

 Forms are sorted alphanumerically by the associated Unit name.

 Year

 Select the desired calendar year for which you would like to print Minnesota CRP 2018 and Prior forms, up to the year 2018. To generate the report for the year 2019 and after, you must instead generate the Minnesota CRP report. For more information, refer to Minnesota CRP (Report) .

 CRP Percent

 Enter the percentage used to calculate the amount of the tenant's rent applied toward property tax for the selected Year . If you are unsure of the percentage, visit https://www.revenue.state.mn.us for more information.

 CRP Income Requirement

 Enter the annual income threshold that determines whether a tenant is eligible for a property tax refund for the selected Year . If you are unsure of the income amount, visit https://www.revenue.state.mn.us for more information.

 Credits to Include

 Select each credit charge type to include in the report results. All credits that were issued with the selected types to recipients are included. By default, payments are applied to accounts using the PR - Payment Received charge type.

 Report Results

 The following fields display on the Minnesota CRP 2018 and Prior  form. If values have been entered in the applicable UDFs for Minnesota residents, the data displays properly on the form. If there are any applicable residents missing from the report results, make sure that all of their UDFs related to the CRP form are correctly filled out. If there are tenants that have not had all of their UDFs properly configured, there may be missing information on those forms and it must be added manually once the document is printed.

 Field Descriptions

 The fields that display in the report are described below.

 Field
 Description

 Renter’s Name and Address of the Unit Rented

 The name of the contact receiving the form and the address of the unit they lease.

 Owner’s or Managing Agent’s Name and Address (Including ZIP Code)

 The address information configured in the Owner / Agent Information section of the report options.

 Property ID Number or Parcel Number

 The property's tax ID number or parcel number as entered in the property- or unit-level parcelnum user defined field.

 County

 The county in which the property or unit is located as entered in the property- or unit-level county user defined field.

 Number of Units on This Property

 The number of active units at the property in Rent Manager .

 Rented from (MM/DD/YYYY)

 Displays the date from the following fields, depending on which is the most recent date:

 - The CRP Movein Date UDF in the contact's User Defined Fields section.

 - The Move In date on the tenant's details page.

 - The first day ( 01/01 ) of the Year selected in the report options.

 to (MM/DD/YYYY)

 The date entered in the contact-level CRP Moveout Date user defined field. If this UDF is blank, it instead displays the Move Out date entered on the tenant's detail's page.

 If both fields have no date entered, the last day ( 12/31 ) of the Year selected in the report options displays.

 Total Months Rented

 The total number of months that the unit was rented by the contact during the selected Year .

 Number of Adults Living in Unit (count married couple as 1)

 The number of adults living in the unit as entered in the tenant-level numadults user defined field.

 Warning

 Married couples are counted as one adult for the purposes of the Minnesota CRP 2018 and Prior report.

 Place an X in box if count includes married couple

 An X displays if the number of adults includes a married couple, indicated by selecting Yes for the tenant-level CRP NumAdults Includes Married Couple user defined field.

 Place an X if Nursing Home

 An X displays if the property or unit is a nursing home, indicated by selecting Yes for the property- or unit-level CRP Is Nursing Home user defined field.

 Place an X if Intermediate Care Facility

 An X displays if the property or unit is an intermediate care facility, indicated by selecting Yes for the property- or unit-level CRP Is Intermediate Care Facility user defined field.

 Place an X if Adult Foster Care

 An X displays if the property or unit is an adult foster care facility, indicated by selecting Yes for the property- or unit-level CRP Is Adult Foster Care user defined field.

 Place an X if Assisted Living

 An X displays if the property or unit is an assisted living community, indicated by selecting Yes for the property- or unit-level CRP Is Assisted Living user defined field.

 Amount paid for the rent by medical assistance (Medicaid)

 The amount of rent paid for the tenant by medical assistance programs, as entered in the tenant-level CRP GAMC Payments user defined field.

 Housing Support (formerly GRH) payments received by landlord on behalf of this renter

 The amount of rent paid for the tenant by housing support programs, as entered in the tenant-level CRP GRH Payments user defined field.

 Rent paid to you by this individual renter or married couple for YYYY (round to nearest whole dollar)

 The total amount of rent paid to you by the contact for the selected Year . This amount includes all payments and credits that use the charge types selected in the Charge Types to Include and Credits to Include report options.

 This amount does not include any credits for rent reductions the tenant received for being a caretaker if that rent credit's charge type is selected in the Credits to Include report option.

 More Information

 Rent paid in the current year for charges dated in the previous year is not included on either the current year's or next year's Minnesota CRP 2018 and Prior , per Minnesota IRS guidelines.

 If a government housing agency paid you part of the rent for this unit, place an X in this box, but do not include the amounts paid by the government agency in line 1.

 An X displays if a government housing agency paid part of the tenant's rent, indicated by selecting Yes in the tenant-level CRP Govt Housing Assistance user defined field.

 Place an X in this box if rent was for a mobile home lot.

 An X displays if the property or unit is a mobile home lot, indicated by selecting Yes in the property- or unit-level CRP Is Mobile Home Lot user defined field.

 Place an X in this box if this renter received reduced rent for being caretaker.

 An X  displays if the tenant received rent discounts for being a caretaker for the property, indicated by selecting Yes in the tenant-level CRP Is Caretaker user defined field.

 Enter the yearly rent reduction for this renter included on line 1 here

 The amount in credits that the tenant received for being a caretaker, as entered in the tenant-level CRP Caretaker Payments user defined field.

 This amount is automatically subtracted from the tenant's rent paid if the credit's charge type is selected in the Credits to Include report option.

 The percentage for all renters is X percent

 The percentage entered in the CRP Percent report option.

 This value changes every year and is provided by the state of Minnesota IRS.

 Multiply line 1 by line 2. (round to nearest whole dollar)

 The amount that the renter paid toward property tax by multiplying the amount in rent paid by the property tax percentage. This value is used by the renter when filing their taxes.

 Owner's or agent's signature

 The location where the landlord must sign the document.

 Date

 The date entered in the Signature Date report option. Otherwise, the owner or landlord must enter the date on which they sign the document.

 Business Phone

 The Phone number entered or selected in the Owner / Agent Information report option.
