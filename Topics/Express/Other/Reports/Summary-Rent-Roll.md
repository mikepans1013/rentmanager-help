# Summary Rent Roll (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Summary-Rent-Roll.htm

The Summary Rent Roll  report tracks transaction activity on tenant accounts over a specified period of time. You can examine held security deposits for each of these tenants as well as vacancy loss, and loss to lease totals.

 The Summary Rent Roll also provides a breakdown of totals for rent and non-rent charges, credits, prior balances, charges, payments, and credit and debit balances and is a good report to provide to your bank when they request to view your income. Additionally, the end of this report provides summary totals for the selected properties.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Summary Rent Roll .

 For more information, refer to Control User Access .

 To view the Summary Rent Roll report, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Rent Roll arrow_forward Summary Rent Roll .
The Reports: Summary Rent Roll page displays.

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

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Security Deposit Date

 Select an option to determine how the Deposit Held column value displays for each tenant.

 Option
 Description

 First day of period

 The total amount of held security deposits at the beginning of the Date Range display.

 Last day of period

 The total amount of held security deposits at the end of the Date Range display.

 Report Method

 Select one of the following options to determine which tenants display in the report results:

 Option
 Description

 Current tenants only

 Only tenants with a status of Current during the Date Range display.

 Only activity in the period

 Only tenants who made payments or had charges posted to their account during the Date Range display.

 Activity and prior balances

 Only tenants who either have a balance prior to the first day in the Date Range or who posted charges or received payments during the date range display.

 Site Classification Date

 Site classifications are system-derived classification codes only for units associated with manufactured housing properties. This data is included only if Include Site Classification is checked and replaces the Sq Ft column in the report.

 Select an option to determine how the Site Classification data displays for each tenant.

 Option
 Description

 First day of period

 Each unit's classification as of the From date selected in the Date Range displays.

 Last day of period

 Each unit's classification as of the To date selected in the Date Range displays.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 This option is only selectable only when the Properties to Include section displays the Property tab.

 Show Whole Dollar Only

 If checked, general ledger account totals are rounded to the nearest whole dollar (0–49 cents is rounded down, and 50–99 cents is rounded up). Otherwise, the actual amount displays.

 Restrict by Owner Contract Dates

 This option becomes available when the Owner tab is selected.

 Check to display only data that is within the active contract dates for each of the selected owners, regardless of the date range . This option is useful if, for example, your contract with one owner is ending and another contract with a different owner is beginning.

 Option
 Description

 Checked

 The report filters to display only data within the selected owner or owners' active contract.

 For example, if the report is generated for 01/01/ 2026 – 12/31/ 2026 , and Owner A has an active contract from January to June of 2026 , the report displays only data at the properties owned by Owner A from January 2026 to June 2026 .

 Unchecked

 The report displays current data for any months included in the report date range regardless of owner contracts.

 Exclude NSF Transactions

 Check to hide any deposited tenant payments from the report if a Non-Sufficient Funds (NSF) fee was assessed against the tenant's account for that payment.

 Include Site Classification

 Check to display the Site Classification column, which displays the short name of each unit's site classification. This option is accessible only when at least one manufactured housing–type property (or an owner who owns a manufactured housing–type property during the entered date range) is selected.

 The site classification that displays is based on the day chosen for the Site Classification Date option. Units not associated with a manufactured housing–type property display as blank in this column.

 Select one of the following Site Classification Date options to determine the date used to pull each unit's site classification:

 Option
 Description

 First day of period

 Display each unit's site classification as of the From date selected in the Date Range option.

 Last day of period

 Display each unit's site classification as of the To date selected in the Date Range option.

 Market Rent

 Select an option to determine how market rent calculates in the Loss to Lease column.

 Option
 Description

 Prorate Market Rent

 The market rent total based on how many days the tenant rented the unit during the month, and how many of those days are during the report Date Range .

 Market Rent based on 1 month

 The market rent of the unit as of the date you enter in the Effective Date field.

 Combine Home and Lot Details Into One Row

 Check to consolidate information for a home-type asset and its associated lot (i.e., unit). The Tenant Name , Unit , and Sq. Ft. values are retrieved from the home's lot, while the other columns are calculated by combining the home and lot values. Otherwise, home asset and lot unit details are listed separately.

 This option is available only if, in the Properties to Include report option, at least one property with the Manufactured Housing property type is selected.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The names of tenants with a Current status who are leasing units at the selected properties as of the end of the specified date range (the To date). If the rental unit is not occupied for the entire Date Range , the Tenant Name column displays as VACANT .

 Unit

 The name of each unit associated with the selected properties.

 Site Classification

 This system-derived status indicates the operational state of manufactured housing sites. The classification that displays for each unit is based on the presence of an RV asset or home at the unit location, homeowner status, if the unit is occupied or vacant, if a lease is currently in a rent-free period, and unit status. For more information, refer to Site Classification .

 This column displays only for properties with a Property Type of Manufactured Housing and if Include Site Classification is enabled in report options.

 Sq.Ft.

 The square footage of the unit, as entered on the Unit details page.

 This column displays only if the Include Site Classification option is not enabled in report options.

 Deposit Held

 The total dollar amount of held security deposits for each tenant.
The Security Deposit Date report options let you choose whether these totals are based on what you held at the beginning or at the end of the chosen reporting period.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 100% Rented

 The total potential income if the unit was occupied for the entire reporting period and the tenant was charged the market rent price for that unit. For example, if the market rent for a unit is $550, this column displays $550 if the reporting period is one month and would display $1100 if the reporting period is two months.

 More Information

 If you have enabled the option to Allow multiple tenants to occupy the same unit (roommates) in system preferences, then it is possible for two separate primary account holder tenants to occupy the same unit. If so, your market rent data displays only on the first tenant record. For more information, refer to General Options (System Preferences) .

 Vacancy Loss

 The dollar amount of money lost if the unit was vacant for at least part of the selected reporting period. Vacancy loss is calculated using the following formula:

 Vacancy Loss = (Days Vacant / Days In Period) * Market Rent

 For example, if the tenant moved into a unit on the 15th day of a month with 31 days and the market rent is $550, the Vacancy Loss is $283.87 using the formula (16 Days Vacant / 31 Days In Period) * 550 Market Rent .

 Loss to Lease

 The dollar amount of possible income lost or gained as a result of leasing this unit to this tenant at its current rental rate. Loss to Lease is calculated using the following formula:

 Loss to Lease = Market Rent – Charged Rent – Vacancy Loss

 If this value is negative, then the amount of rent charged to the tenant exceeded what should have been charged based on market rent.

 For example, if a tenant moves in on the 15th day of a month with 31 days into a unit with a market rent of $550, their prorated rent should be $293.33. However, their rent charges for the month totaled only $274.19. The Loss to Lease is then $27.42 using the formula 550 Market Rent - 274.19 Charged Rent - 248.39 Vacancy Loss .

 Rent Charges

 The total dollar amount of rent charges that have been posted to this tenant's account during the specified reporting period. The Rent value is calculated by adding all recurring charges with charge types selected on the Property details page in the Rent Charge Type field for the tenant's property.

 More Information

 If you add a credit to a tenant's account using a rent charge, the total Rent Charges are reduced, and therefore the Loss to Lease calculation is also reduced, even if this credit is not applied to a rent charge.

 Misc Charges

 The total dollar amount of non-rent charges (including security deposits) that were posted to this tenant's account during the specified reporting period.

 Credits

 The total dollar amount of credits that were applied to this tenant's account during the specified reporting period.

 More Information

 This column tracks the amount of credits created from non-rent charge types. Credits created from rent charges (e.g., a rent charge of -$100.00) instead reduce the Rent Charges column by that credit amount instead of displaying under the Credits column.

 Prior Balance

 The balance owed by the tenant as of one day before the beginning of the specified reporting period.

 Total Charged

 The total of all charges, minus any credits, posted to each tenant's account during the specified reporting period. For example, if the tenant had a rent credit for $100 and then received a rent charge for $800, the Total Charged is $700.

 Total Paid

 The total amount of payments received from each tenant during the specified reporting period.

 Credit Balances

 The amount of any credits due to each tenant as of the end date of your selected reporting period. Rent Manager reports this credit as a negative value. If the tenant does not have a credit balance, Credit Balances is blank.

 Credit Balances is calculated using the following formula:

 Credit Balances = Prior Balance – Total Paid + Total Charged

 Debit Balances

 The amount of any outstanding charges still due from this tenant as of the end date of your selected reporting period. Rent Manager reports this debit balance as a positive value. If the tenant does not have any outstanding charges as of the end of this reporting period, Debit Balances is blank.

 Debit Balances is calculated using the following formula:

 Debit Balances = Prior Balance – Total Paid + Total Charged

 Report Totals Subreport

 This summary section displays totals for all the properties and/or ownerships included in this report. In addition, Rent Manager calculates the total number of units included in this report, how many of those units were vacant for the entire reporting period, how much rent was lost due to vacancy, the number of tenant accounts that ended this reporting period with a credit balance, and the overall balance of all of your tenants combined.

 More Information

 Vacancy Loss and Vacant Rent are different calculations and may display different totals. Vacancy Loss calculates how much money was lost due to any vacancy that occurred during the reporting period or from renting units for less than their market rent value. Vacant Rent calculates how much rental income was lost from units that were vacant for the entirety of the reporting period.
