# Commercial Rent Roll (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Commercial-Rent-Roll.htm

The Commercial Rent Roll report displays commercial tenant lease information and breaks it down by square footage, pro rata, rent increase, and so on. This report is helpful when tracking commercial leases and need to compare current and annual financial standing. In addition, you can review upcoming rent escalations.

 To fully utilize the Commercial Rent Roll report, ensure the following information is provided:

 -
 On the commercial unit's details page, in the Miscellaneous tile, the Square Footage field has a value.

 -
 On the commercial unit's details page, in the Current Market Rent tile, there is an active Market Rent value.

 -
 On the commercial unit's details page, in the Recurring Charges tile, any current rent charge type recurring charges have a From Date and To Date .

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Commercial Rent Roll .

 For more information, refer to Control User Access .

 To view the Commercial Rent Roll report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Rent Roll arrow_forward Commercial Rent Roll .
The Reports: Commercial Rent Roll page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 More Information

 When this report option is selected, reports generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, an error message displays stating that no reports were generated.

 For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group . When the Owners tab is selected, results generate only for owners with active ownerships. If all selected owners currently do not have active ownerships, and Restrict by owner contract dates is selected, an error message displays stating that no reports were generated. For more information on establishing active ownerships, refer to Property Owners (Pop-Up) .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 Properties with the Property Type of RV / Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports organized in the Short Term Rentals report category.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Rent Escalations

 Check Show rent escalations to display current and future rent escalations in a table beneath each commercial tenant. Optionally, check Include past escalations to include any past, current, and future rent escalations in the table beneath each commercial tenant.

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

 Select one of the following options to determine how the report results are sorted within each property subheading:

 Option
 Description

 Account Number

 Units are sorted numerically by the occupant's system-generated ID number in ascending order (lowest to highest). Vacant units display first in the results.

 Last Name

 Units are sorted alphabetically by the occupant's Last Name . Commercial tenants are sorted by Company Name . Vacant units display first in the results.

 Unit

 Units are sorted alphanumerically by Unit name.

 Unit Type

 Units are sorted alphanumerically by Unit Type name. Units of the same unit type are further sorted by Unit name.

 Vacancy

 Occupied units display first in the results. Units are further sorted alphanumerically by Unit name.

 Vacancy Descending

 Vacant units display first in the results. Units are further sorted alphanumerically by Unit name.

 Pro Rata Share

 This option determines how Rent Manager calculates the CRE distribution method in the report for each commercial tenant’s share.

 Option
 Description

 Percent of Property Sq Ft

 Charge CRE to commercial tenants based on the percentage of each tenant’s rented square footage of the property’s overall square footage. Rent Manager calculates the total square footage of all the units at the specified property and divides the square footage of the unit occupied by the tenant to determine the pro rata share.

 For example, if the CRE charge is $3000 and a commercial tenant rents 50 percent of the total square footage of the property, that tenant is charged $1500 of the CRE charge amount.

 For this option to work, the tenant’s rental unit must have the Square Footage defined on unit's details page and the Total Sq Ft defined on the property's details page.

 UDF Field

 Charges CRE based on the percent value specified in a selected tenant-type user defined field (values may range from one to one hundred).

 For this option to work, you must create tenant-level user defined fields specifically for tracking percentages for each tenant who should receive a CRE charge. Only tenant-level user defined fields are available in the drop-down list.

 CRE Setup

 Charges each commercial tenant the percentage of expenses you defined through the CRE Setup on commercial leases. For more information, refer to Add a Commercial Lease .

 For this option to work, you must have already defined percentages through the CRE Setup on Commercial Leases and have expenses in the selected CRE accounts for the selected date range.

 Pro rata share

 The default pro rata share percentage for the selected CRE account defined through the CRE Setup on commercial leases.

 When Pro rata share is checked, the Show expenses with 0% pro rata share option is made available to select. If selected, all applicable expenses with 0% pro rata share display in the Pro Rata Share column of the report.

 Admin fees

 The default admin fee percentage for the selected CRE account defined through the CRE Setup on commercial leases.

 Pro rata share and Admin Fees

 This is calculated by first multiplying the pro rata share and administrative fee percentages for each commercial tenant and then adding that value to the pro rata share percentage defined through the CRE Setup on commercial leases.

 The formula is: Pro Rata Share % + (Pro Rata Share % * Administrative Fee %) .

 For example, if the pro rata share is 2.8888 percent and administrative fee is 10 percent, the total percentage is 3.1777 percent. Once rounded to the nearest hundredth, the report displays 3.18 percent.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The name of each commercial tenant. Alternatively, if the unit is vacant, <VACANT> displays instead.

 Unit

 The name of each unit as entered on the unit's details page.

 Sq. Ft.

 The square footage of each unit as entered on the unit's details page.

 Pro Rata Share

 The percentage of the pro rata share for each commercial tenant. This column displays different results depending on what option is selected in the Pro Rata Share section of the report options.

 More Information

 The values displayed in this column do not necessarily reflect the pro rata share entered in the CRE Setup on the commercial lease.

 Percent of Property Sq Ft

 The percentage each unit occupies of the property. The square footage of the property is the number entered on the property's details page for the Total Sq Ft . If a number is not entered in the field, Rent Manager adds the numbers entered on the unit's details page for the Square Footage of each unit in the property.

 The pro rata share is calculated using the following formula:

 Pro Rata Share = 100 * (Total Unit Square Footage / Sum of all the Property's Unit Square Footage)

 CRE Distribution

 If Pro rata share is selected, the default pro rata share percentage for the selected CRE account defined through the CRE Setup on commercial leases displays.

 If Admin Fee is selected, the default administration fee percentage for the selected CRE account defined through the CRE Setup on commercial leases displays.

 If Pro Rata Share and Admin Fee is selected, the percentage is calculated by first multiplying the pro rata share and administrative fee percentages for each commercial tenant and then adding that value to the pro rata share percentage defined through the CRE Setup on commercial leases.

 This is calculated using the following formula:

 Pro Rata Share % + (Pro Rata Share % * Administrative Fee %)

 For example, if the pro rata share is 2.8888 percent and administrative fee is 10 percent, the total percentage is 3.1777 percent. Once rounded to the nearest hundredth, the report displays 3.18 percent.

 Percentage in User Defined Field

 The percent value specified in the selected tenant-type user defined field (values may range from one to one hundred).

 For this option to work, you must create tenant-level user defined fields specifically for tracking percentages for each tenant who should receive a CRE charge. Only tenant-level user defined fields are available in the drop-down list. For more information, refer to Tenant User Defined Fields (Pop-Up) .

 Lease Start

 The most recent lease start date entered on the lease for each unit a commercial tenant is leasing.

 Lease End

 The most recent lease end date entered the lease for each unit a commercial tenant is leasing.

 Security Deposit

 The security deposit currently being held for each tenant.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Last Rent Increase

 The date of the most recent rent escalation.

 Rent Charges

 The total of all active recurring charges that are of the same charge type as the Rent Charge Type selected on the property's details page. Alternatively, if a unit is vacant, the most recent market rent value as entered on Unit Market Rent displays.

 Annual Rent Sq. Ft.

 The yearly rent cost of a single square foot of each commercial tenant’s unit. This is calculated using the following formula:

 Annual Rent Sq Ft = Rent Charges * 12 / Sq Ft

 At the bottom of each property, the Totals row displays the average rental cost per square foot for all of the units in the property.

 Operation Charges

 The total of each commercial tenant’s current recurring charges that do not have a charge type that matches the Rent Charge Type selected on the property's details page.

 Annual Operation Sq. Ft.

 The yearly cost of operation charges for a single square foot of each commercial tenant’s unit. This is calculated using the following formula:

 Annual Operation Sq Ft = Operation Charges * 12 / Sq Ft

 At the bottom of each property, the Totals row displays the average operation cost per square foot for all of the units in the property.

 Total Charges

 The total of all recurring charges for each commercial tenant. This is calculated using the following formula:

 Total Charges = Rent Charges + Operation Charges

 Alternatively, if a unit is vacant, the most recent market rent value as entered on unit market rent displays.

 Annual Charges Sq. Ft.

 The total yearly cost of a single square foot of each commercial tenant’s unit. This is calculated using the following formula:

 Annual Charges Sq Ft. = Total Charges * 12 / Sq Ft

 At the bottom of each property, the Totals row displays the average total cost per square foot for all of the units in the property.

 Summary Subreport

 This subreport displays provides an overview of the data included in the Commercial Rent Roll report.

 Rows
 Description

 Total Possible Rent

 The total amount of rent that could be charged monthly if every unit displayed in the report was occupied. This is calculated using the following formula:

 Total Possible Rent + Vacancy Rent + Occupied Unit Rent

 Vacancy Rent

 The total market rent of all vacant units in the report.

 Occupied Unit Rent

 The total Rent Charges for each unit being leased by a commercial tenant in the report.

 # of Units

 The total number of occupied and vacant units displayed in the report.

 Vacant Units

 The total number of vacant units displayed in the report.

 Occupied Square Footage

 The total square footage of occupied units in the report.

 Occupancy %

 The percent occupied using the following formula:

 Occupancy % = 100 * Occupied SqFt / Total SqFt
