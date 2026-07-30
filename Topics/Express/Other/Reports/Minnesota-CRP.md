# Minnesota CRP (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Minnesota-CRP.htm

The Minnesota CRP (Certificate of Rent Paid) is a document that property managers and landlords with properties in the state of Minnesota must provide to their tenants every year, provided that property tax was payable for the tax year on the property. This document can be printed directly from Rent Manager and provided to tenants, who can then file the document with their taxes.

 The Minnesota CRP requires that you track specific information for the tenants that is not tracked in Rent Manager by default, and must therefore be tracked using user defined fields (UDFs). The first time you generate the report, all of the necessary UDFs are created automatically based on whether you wish to track the information by property or by unit. After the UDFs are created, you can then enter the information for these UDFs on each applicable tenant, tenant contact, property, and unit account. Once all information is entered, the report generates the necessary data for the Minnesota CRP . For more information on UDFs, refer to User Defined Fields (Page) .

 More Information

 Beginning in the tax year of 2024, the State of Minnesota mandates all CRPs to be filed electronically through their e-Services Portal. The Minnesota CRP form can still be used to provide the required copy of CRP to each resident but an electronic form must be submitted to the State of Minnesota. For more information, refer to Export Minnesota CRP .

 Warning

 This version of the Minnesota CRP is effective as of the year 2019 and after. To generate it for years prior to 2019, you must use the prior version of the form, the Minnesota CRP 2018 and Prior . For more information, refer to Minnesota CRP 2018 and Prior (Report) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Minnesota CRP .

 For more information, refer to Control User Access .

 Set Up Minnesota CRP UDFs

 Before using the Minnesota CRP report, you must first establish a number of various, predetermined user defined fields (UDFs) that are used by this report to track specific information required by Minnesota. When attempting to generate the report for the first time, Rent Manager automatically creates these UDFs for you.

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 To have the necessary UDFs automatically created, do the following:

 -
 Go to arrow_forward Custom Reports arrow_forward General arrow_forward Minnesota CRP .
The Reports: Minnesota CRP page displays.

 -
 In the Data Source field, select whether to generate the Minnesota CRP on a Unit Based or Property Based level.

 -
 Generate the report in your desired file format(s).
A pop-up displays with a list of all the UDFs that have been created for the purposes of the Minnesota CRP .

 -
 Review the list of UDFs that were created, then click Cancel to close the pop-up.

 -
 For each tenant, tenant contact, and property or unit that applies to the Minnesota CRP, enter the needed information for each newly-created UDF. Each UDF is described in the headings below.

 Property or Unit UDFs

 The following UDFs are created at either the property or unit level, depending on the Data Source selected the first time the report is generated. All Minnesota CRP user defined fields are case sensitive. For more information, refer to Property User Defined Fields (Pop-Up) or Unit User Defined Fields (Pop-Up) .

 UDF
 Description

 county

 Enter the name of the county in which the property or unit is located.

 parcelnum

 Enter the tax parcel ID number for the property or unit.

 CRP Is Nursing Home

 Select Yes if the property or unit is a nursing home. Otherwise, select No .

 CRP Is Intermediate Care Facility

 Select Yes if the property or unit is an intermediate care facility. Otherwise, select No .

 CRP Is Adult Foster Care

 Select Yes if the property or unit is an adult foster care facility. Otherwise, select No .

 CRP Is Assisted Living

 Select Yes if the property or unit is an assisted living facility. Otherwise, select No .

 CRP Is Mobile Home Lot

 Select Yes if the property or unit is a mobile home lot. Otherwise, select No .

 CRP is Mobile Home

 Select Yes if the property or unit is a mobile home. Otherwise, select No .

 Tenant UDFs

 The following UDFs are created at the tenant level the first time the report is generated. All Minnesota CRP user defined fields are case sensitive. For more information, refer to Tenant User Defined Fields (Pop-Up) .

 UDF
 Description

 numadults

 Enter the number of adults that are associated with this tenant account. Typically, this is the number of adults listed on the View Contacts page for each tenant account or the number of adults living in the unit.

 Warning

 As of 2019, married couples are no longer counted as one person for the Minnesota CRP report. Each adult living in the unit now receives their own copy, and the rent is evenly divided between them.

 CRP Govt Housing Assistance

 Select Yes if the tenant receives government housing assistance. Otherwise, select No .

 CRP GAMC Payments

 Enter the amount paid for this tenant's rent by the General Assistance Medical Care (GAMC) program, if known.

 CRP GRH Payments

 Enter the amount paid for this tenant's rent by the Housing Support program (formerly known as Group Residential Housing, or GRH), if known.

 CRP Caretaker Payments

 Enter the total amount in credits that the tenant receives for performing caretaker duties each year.

 CRP Medicaid Assistance

 Enter the amount paid for this tenant's rent by medical assistance (Medicaid), if known.

 Contact UDFs

 The following UDFs are created at the contact level the first time the report is generated. All Minnesota CRP user defined fields are case sensitive.

 UDF
 Description

 Receives CRP

 Select Yes if this contact should receive a Minnesota CRP form. Otherwise, select No .

 Each adult should receive their own Minnesota CRP form, regardless of whether they are married or not.

 CRP Movein Date

 Optionally, enter the contact's Move In date.

 This may differ from the Move In date displayed on the tenant's details page if the contact moved in on a different date than the primary contact.

 CRP Moveout Date

 Optionally, enter the contact's Move Out date.

 This may differ from the Move Out date displayed on the tenant's details page if the contact moved out on a different date than the primary contact.

 Asset UDFs

 The following UDFs are created at the asset level the first time the report is generated with the Unit Based selected for the Data Source report option. All Minnesota CRP user defined fields are case sensitive.

 More Information

 For an asset to be included in the Minnesota CRP report, the following conditions must be met:

 -
 The Asset Type of the asset has the option Assets of this type are homes checked. For more information, refer to Asset Types (Page) .

 -
 The option Allow asset to be rented is checked on the asset's details page. For more information, refer to Asset Details (Page) .

 UDF
 Description

 county

 Enter the name of the county in which the asset is located.

 parcelnum

 Enter the asset's tax parcel ID number.

 CRP is Nursing Home

 Select Yes if the asset is a nursing home. Otherwise, select No .

 CRP is Immediate Care Facility

 Select Yes if the asset is an intermediate care facility. Otherwise, select No .

 CRP is Adult Foster Care

 Select Yes if the asset is an adult foster care facility. Otherwise, select No .

 CRP is Assisted Living

 Select Yes if the asset is an assisted living facility. Otherwise, select No .

 CRP is Mobile Home Lot

 Select Yes if the asset is a mobile home lot. Otherwise, select No .

 CRP is Mobile Home

 Select Yes if the asset is a mobile home. Otherwise, select No .

 Generate the Minnesota CRP

 To view the Minnesota CRP report, do the following:

 -
 Go to arrow_forward Custom Reports arrow_forward General arrow_forward Minnesota CRP .
The Reports: Minnesota CRP page displays.

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

 More Information

 The Properties to Include report option does not display if the report is generated directly from a tenant account.

 Preparer Information

 Signature Line Date

 Enter a date to display on the signature line in the form.

 Prepared by Agent

 If applicable, check Prepared by Agent to indicate that someone other than the property owner is preparing the form.

 The Name and Phone fields in Preparer Information are disabled unless this option is checked. If the option is not checked, the fields for the managing agent's Name and Phone display no data.

 Related Preferences

 Some fields pull information from the property established as the management company in system preferences. For more information, refer to Management Company (System Preferences) .

 Name

 If Prepared by Agent is checked, select the Name to display on the Managing Agent Name field on the Minnesota CRP report. All fields are located on the property's details page.

 Option
 Description

 Property Billing Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile.

 Property Billing Name or Property Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile. If no billing names are defined for the property, the Full Name displays.

 Mgt. Co. Property Name

 The management company's Full Name as entered on the General tile.

 Mgt. Co. Billing Name

 The management company's Billing Name 1 and Billing Name 2 as entered on the Other Information tile.

 Phone

 If Prepared by Agent is checked, select the Phone to display on the managing agent's Daytime Phone field on the Minnesota CRP report. All fields are located on the property's details page on the Phone Numbers tile.

 Option
 Description

 Property Default Phone Number

 The phone number marked as Default for property.

 Mgt. Co. Default Phone Number

 The phone number marked as Default for the management company property.

 Override default phone

 If applicable, check this option and enter a phone number to use for every form, regardless of the recipient's property.

 Charges to Include

 The report displays total paid rent charges associated with any of the selected charge types.

 Data Source

 Select one of the following options to determine at which level the forms generate. The first time you generate the report for the selected data type, the user defined fields (UDFs) for that data type are created automatically.

 For example, if the first time the report is generated is for Property Based data, the UDFs created are on the property level. If the report is then generated again with Unit Based data, the UDFs are recreated on the unit and asset levels as well. Once information is entered in the fields, the information that generates in the report depends on the Data Source you select.

 Option
 Description

 Property Based

 The forms generate using the data defined for each property in the property-level UDFs.

 Unit Based

 The forms generate using the data defined for each unit in the unit-level UDFs, and also generates data defined for each asset in the asset-level UDFs.

 Separation Method

 Select one of the following options to determine how the report results are batched:

 Option
 Description

 Do not separate

 Generates one document with one form per page.

 Separate by Properties

 Generates multiple documents with the recipients at each property generated individually.

 Separate by Tenants

 Generates multiple documents with the recipients associated with each tenant account generated individually.

 Include Other Rentable Items

 Check to generate a document for units that are associated with unit types with the Other Rentable Item option checked on the Unit Type details page.

 Sort Options

 Select one of the following options to determine the order in which forms generate:

 Option
 Description

 Account Number

 Forms are sorted numerically by the recipient's system-generated ID number in ascending order (lowest to highest).

 Last Name

 Forms are sorted alphabetically by the recipient's Last Name .

 Unit

 Forms are sorted alphanumerically by the associated Unit name.

 Year

 Select the desired calendar year for which you would like to print Minnesota CRP forms, from the year 2019 or later. To generate the report for the year 2018 or earlier, you must instead generate the Minnesota CRP 2018 and Prior report. For more information, refer to Minnesota CRP 2018 and Prior (Report) .

 Credits to Include

 Select each credit charge type to include in the report results. All credits that were issued with the selected types to recipients are included. By default, payments are applied to accounts using the PR - Payment Received charge type.

 Owner Information

 Select from the following options to determine how the information for the owner of the property displays on the form.

 Related Preferences

 Some fields pull information from the property established as the management company in system preferences. For more information, refer to Management Company (System Preferences) .

 Name

 Determines the name used for the owner or property. All fields are located on the details page for the property or owner.

 Option
 Description

 Owner Name

 The Name of the property's primary owner as entered on the General tile.

 Owner Display Name

 The Display Name of the property's primary owner as entered on the General tile.

 Property Name

 The Full Name of the property as entered on the General tile.

 Property Billing Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile.

 Property Billing Name or Property Name

 Both Billing Name 1 and Billing Name 2 for the property as entered on the Other Information tile. If no billing names are defined for the property, the Full Name displays.

 Address

 Determines the address used for the owner or managing agent of the recipient's property. All fields are located on the owner's or property's details page on the Addresses tile.

 Option
 Description

 Owner Default Address

 The address marked as Default for the owner.

 Property Default Address

 The address marked as Default for the property.

 Property Billing Address

 The address marked as Billing for the property.

 Mgt. Co. Default Address

 The address marked as Default for the management company property.

 Mgt. Co. Property Billing Address

 The address marked as Billing for the management company property.

 Phone

 Determines the phone number used for the owner or property. All fields are located on the owner's or property's details page on the Phone Numbers tile.

 Option
 Description

 Owner Default Phone Number

 The phone number marked as Default for the owner.

 Property Default Phone Number

 The phone number marked as Default for property.

 Override default phone

 If applicable, check this option and enter a phone number to use for every form, regardless of the recipient's property.

 Report Results

 The following fields display on the Minnesota CRP form. If values have been entered in the applicable UDFs for Minnesota residents, the data displays properly on the form. If there are any applicable residents missing from the report results, make sure that all of their UDFs related to the CRP form are correctly filled out. If there are tenants that have not had all of their UDFs properly configured, there may be missing information on those forms and it must be added manually once the document is printed.

 Renter/Unit Information

 This section of the form covers information about the tenant and unit.

 Field
 Description

 Renter First Name and Initial

 The First Name and Middle Initial of the contact receiving the form.

 Renter Last Name

 The Last Name of the contact receiving the form.

 Rental Unit Address and Unit

 The street of the unit's address marked as Default .

 If the unit's name is included in the unit's default address, it displays with the rest of the address as it did on the previous versions of the Minnesota CRP 2018 and Prior report. This field has a limit of thirty-four characters.

 Unit

 The name of the unit the tenant is leasing.

 City

 The city of the unit's Default address.

 State

 The state of the unit's Default address.

 ZIP Code

 The zip code of the unit's Default address.

 County

 The county in which the unit is located as entered in the county user defined field.

 Rented from (MM/DD/YYYY)

 Displays the date from the following fields, depending on which is the most recent date:

 -
 The CRP Movein Date UDF in the contact's User Defined Fields section.

 -
 The Move In date on the tenant's details page.

 -
 The first day ( 01/01 ) of the Year selected in the report options.

 to (MM/DD/YYYY)

 The date entered in the contact-level CRP Moveout Date user defined field. If this UDF is blank, it instead displays the Move Out date entered on the tenant's detail's page.

 If both fields have no date entered, the last day ( 12/31 ) of the Year selected in the report options displays.

 Total Months Rented

 The total number of months that the unit was rented by the contact during the selected Year .

 Electronic Certificate Number (ECN)

 This field is required for the purposes of the Minnesota Department of Revenue. Currently no data displays in this field.

 Number of Adults Living in Unit

 The number of adults living in the unit as entered in the tenant-level numadults user defined field.

 Warning

 As of 2019, married couples are no longer counted as one person in the Minnesota CRP report. Each adult living in the unit now receives their own copy, and the rent is evenly divided between them.

 Property Information

 This section of the form covers information about the property.

 Field
 Description

 Place an X if Adult Foster Care

 An X displays if the property or unit is an adult foster care facility, notated by selecting Yes for the CRP Is Adult Foster Care user defined field.

 Place an X if Assisted Living

 An X displays if the property or unit is an assisted living community, notated by selecting Yes for the CRP Is Assisted Living user defined field.

 Place an X if Intermediate Care Facility

 An X displays if the property or unit is an intermediate care facility, notated by selecting Yes for the CRP Is Intermediate Care Facility user defined field.

 Place an X if Nursing Home

 An X displays if the property or unit is a nursing home, notated by selecting Yes for the CRP Is Nursing Home user defined field.

 Place an X if Mobile Home

 An X displays if the unit is a mobile home, notated by selecting Yes for the CRP Is Mobile Home user defined field.

 Place an X if Mobile Home Lot

 An X displays if the property or unit is a mobile home lot, notated by selecting Yes for the CRP Is Mobile Home Lot user defined field.

 Property ID or Parcel Number

 The property's tax ID number or parcel number as entered in the parcelnum user defined field.

 Number of Units on This Property

 The number of active units at the property in Rent Manager .

 Rent Details

 This section of the form covers information about the tenant's rent.

 Field
 Description

 A. Was any rent paid by Medical Assistance ?

 An X displays in the No field if the CRP Medicaid Assistance user defined field is marked No , indicating none of the rent was paid by medical insurance (Medicaid).

 An X displays in the Yes field if the CRP Medicaid Assistance user defined field is marked Yes , indicating a portion of the rent was paid by medical insurance (Medicaid).

 If yes, enter amount: A

 The amount of rent paid for the tenant by medical assistance programs as entered in the CRP GAMC Payments user defined field.

 The Minnesota CRP report always pulls the amount from the CRP GAMC Payments user defined field, even if the CRP Medicaid Assistance user defined field is marked No .

 B. Did the renter receive housing support?

 An X displays in the No field if the CRP Govt Housing Assistance user defined field is marked No , indicating none of the rent was paid by housing support programs.

 An X displays in the Yes field if the CRP Govt Housing Assistance user defined field is marked Yes , indicating a portion of the rent was paid by housing support programs.

 If yes, enter amount: B

 The amount of rent paid for the tenant by housing support programs, as entered in the CRP GRH Payments user defined field.

 The Minnesota CRP report always pulls the amount from the CRP GRH Payments user defined field, even if the CRP Govt Housing Assistance user defined field is marked No .

 Total Rent

 This section of the form covers information about the tenant's total rent for the year.

 Field
 Description

 Renter's share of rent paid

 The total amount of rent paid to you by the contact for the selected Year . This amount includes all payments and credits that use the charge types selected in the Charge Types to Include and Credits to Include report options, calculated using the following formula:

 Renter's share of rent paid = Totals amount of included charges / 2

 This amount does not include any credits for rent reductions the tenant received for being a caretaker if that rent credit's charge type is selected in the Credits to Include report option.

 More Information

 Rent paid in the current year for charges dated in the previous year is not included on either the current year's or next year's Minnesota CRP , per Minnesota IRS guidelines.

 Caretaker rent reduction

 The amount in credits that the tenant received for being a caretaker, as entered in the tenant-level CRP Caretaker Payments user defined field.

 This amount is automatically subtracted from the tenant's rent paid if the credit's charge type is selected in the Credits to Include report option.

 Total rent (Add lines 1 and 2)

 The total rent amount for the contact.

 Total Rent = Renter's share of rent paid + Caretaker rent reduction

 Property Owner

 This section of the form covers information about the owner of the tenant's property. The data that displays is determined by the selections made in the Owner Information section of the report options.

 Field
 Description

 Property Owner Name

 The Name of the tenant's property or property owner.

 Daytime Phone

 The Phone number of the tenant's property or property owner.

 Property Owner Address

 The street name in the Address of the owner or property.

 City

 The city name in the Address of the owner or property.

 State

 The state name in the Address of the owner or property.

 ZIP Code

 The zip code in the Address of the owner or property.

 Sign Here

 This section of the form covers information about the form signature.

 Field
 Description

 Owner or Agent Signature

 The location where the landlord must sign the document.

 Date

 The date entered in the Preparer Information section of the report options. Otherwise, the owner or landlord must enter the date on which they sign the document.

 Managing Agent Name, If Applicable

 The Name of the agent selected in the Preparer Information section of the report options if Prepared by Agent is checked.

 Daytime Phone

 The Phone number entered or selected in the Preparer Information section of the report options if Prepared by Agent is checked.
