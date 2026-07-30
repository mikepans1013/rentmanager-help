# Rent Roll Analysis (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Rent-Roll-Analysis.htm

The Rent Roll Analysis report tracks information about units and their financial standing as of a given date. This is helpful when refinancing, as you can compare the rent charge amount against the amount collected per month to get the anticipated income on a particular date. The report also provides a summary of occupied unit rent compared to total possible rent (based on market rent) and the total occupancy percentage of all selected properties. It is best used as a forecasting report, meaning you can generate the report for a future date to predict how financial information display as of that date.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Rent Roll Analysis .

 For more information, refer to Control User Access .

 To view the Rent Roll Analysis report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Rent Roll arrow_forward Rent Roll Analysis .
The Reports: Rent Roll Analysis page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 Properties with the Property Type of RV / Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports organized in the Short Term Rentals report category.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date. This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest). Vacant units display first in the results.

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name . Vacant units display first in the results.

 Site Classification

 Tenants are sorted alphanumerically by Site Classification name.

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Items to Include

 Select additional items to display in the report results.

 Option
 Description

 Other Rentable Items

 Includes units that are associated with unit types that have the option Other Rentable Item checked on the Unit Type details page.

 Assets

 Include assets that are financially tied to the property as selected on the Asset details page.

 Only assets with Allow asset to be rented enabled display in the report results.

 Homes

 Include assets that are financially tied to the property as selected on the Asset details page and are associated with an asset type that has the option Assets of this type are homes enabled.

 Only home-type assets with Allow asset to be rented enabled display in the report results.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Use Unit Market Rent for Rent Vacancy Loss

 Check or uncheck to determine how Rent Manager calculates a vacant unit's Rent and Vacancy Loss .

 Option
 Description

 Checked

 The report results are calculated using the unit market rent entry that is active on the As of Date for the vacant units. The column displays 0.00 if there are no active market rent entries. For more information, refer to Unit Market Rent (Pop-Up) .

 Unchecked

 The report results are calculated using the unit recurring charge that is active on the As of Date for the vacant units. The column displays 0.00 if there are no active recurring charges. For more information, refer to Unit-Level Recurring Charges (Pop-Up) .

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property (or an owner who owns a manufactured housing–type property during the entered date range) is selected.

 The site classification that displays is based on the date selected in the As of Date section.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Balance

 The tenant's account balance as of the report date.

 Increase Amount

 The difference between the tenant's current rent amount and previous rent amount.

 Last Rent Increase

 The most recent date on which the tenant's recurring rent charge increased due to a recurring charge escalation or a batch of recurring charges updates on the Modify Recurring Charges page. For more information, refer to Modify Recurring Charges .

 Lease End

 The lease end date of the tenant's active lease as of the report date as entered on the Tenant details page in the Leases tile.

 Market Rent

 The value entered on the unit's details page in the Current Market Rent tile that is active as of the report date. For rentable assets, the value entered on the asset's details page in the Market Rent field displays.

 Misc. Charges

 The total amount of non-rent recurring charges inherited by the tenant as of the report date.

 Move In

 The tenant's move in date as entered on the Unit details page in the Leases tile.

 Move Out

 The tenant's future move out date as entered on the Unit details page in the Leases tile. If the tenant does not yet have a move out date entered, this column is blank.

 Rent

 The amount of the tenant's recurring rent charge. If the unit is vacant, this column is calculated using either the unit's market rent or its active recurring charges, depending on whether the Use Unit market rent for rent and vacancy loss report option is checked.

 More Information

 The Rent value is calculated by adding all recurring charges with charge types selected in the Rent Charge Type field on the Property details page for the tenant's property. The Rent value can also display as prorated if the charge type has Prorate By Day enabled on the Charge Types page.

 Security Deposit

 The amount of security deposit funds held for the tenant as of the report date.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Site Classification

 This system-derived status indicates the operational state of manufactured housing sites based on the presence of an RV on the lease or home asset at the unit location, homeowner status, occupancy, leases in a rent-free period, and unit status. For more information, refer to Site Classification .

 This column only displays for properties with a Property Type of Manufactured Housing and when Include Site Classification is enabled in report options.

 Sq. Ft.

 The unit's Square Footage as entered on the Unit details page.

 Tenant

 The name of each tenant who leased at the property on the As of Date . <VACANT> displays if a unit was vacant on the As of Date .

 Total Charges

 The totals of recurring charges inherited by the tenant as of the report date.

 Unit

 The Name of the unit the tenant inhabits as entered on the Unit details page.

 Unit Type

 The category of each unit as entered on the Unit details page.

 Vacancy Loss

 The amount of potential rent not being collected because of a unit vacancy. If the unit is vacant, this column is calculated using either the unit's market rent or its active recurring charges, depending on whether the Use Unit market rent for rent and vacancy loss report option is checked.

 More Information

 Vacant, rentable assets calculate vacancy loss using the Rent Amount specified on the Asset details page.

 Summary Subreport

 This subreport provides overall report totals for all of the calculated columns, as well as statistics about the rental income and vacancies included in the report.

 Each row in the Summary subreport is described below:

 Row
 Description

 Total Possible Rent

 The total amount of potential rental income if all units included in the report are occupied. This value is calculated by adding all of the values in the Rent column in the report.

 Vacancy Rent

 The total amount of potential rental income that is not being collected due to vacant units. This value is calculated by adding all of the values in the Vacancy Loss column in the report.

 Occupied Unit Rent

 The total amount of rent collected from tenants at occupied units. This value is calculated using the following formula:

 Occupied Unit Rent = Total Possible Rent - Vacancy Rent

 # of Units

 The total quantity of units included in the report.

 Vacant Units

 The total quantity of vacant units included in the report.

 Occupancy

 The percentage of units included in the report that are occupied as of the report date, calculated using the following formula:

 Occupancy = (# of Units - Vacant Units) / # of Units
