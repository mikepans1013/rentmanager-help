# Lease Expiration (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Lease-Expiration.htm

The Lease Expiration report displays leasing information for tenants who have leases expiring in a chosen month during a selected date range and whether those leases are renewed. The leasing information includes lease start and end dates, contact information, and the amount of rent the tenant is typically charged. With the information included in this report, you can easily view a list of tenants who need actions taken, such as sending expiration notices, regarding lease renewals.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Lease Expiration .

 For more information, refer to Control User Access .

 To view the Lease Expiration report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Occupancy arrow_forward Lease Expiration .
The Reports: Lease Expiration page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Related Preferences

 Reports may look different depending on whether or not the Use modernized report style system preference is enabled. For more information, refer to General Report Options (System Preferences) .

 Report Options

 The report options described below determine what data displays in the report.

 Properties to Include

 Select each property or a property Group to be included in the report.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 More Information

 Properties with the Property Type of RV/Campground or Short Term Rental do not display in this report. Short term rental property information is available in reports listed in the Short Term Rentals report category.

 Tenants to Include

 Select an option to determine which accounts display in the report results.

 Option
 Description

 All

 All future, current, and past tenants display.

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Month of Expiration

 Select the month for which you would like to view leases that expire in the specified month. Selecting a month that is not included in the selected Date Range does not display any tenant results.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Exclude Renewed Leases

 Check to remove tenants who already renewed their lease(s) from the results. Otherwise, tenants with renewed leases are included in the report.

 More Information

 A lease is considered a renewal only if it is generated from Create Renewal Offers tool or, on the tenant's lease details pop-up, by clicking the Renew button. For more information, refer to Create Renewal Offers or Manually Renew a Lease .

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading.

 Option
 Description

 Account Number

 Tenants are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Address

 Tenants are sorted alphanumerically by their Default address. Tenants with no address display first in the list.

 Last Name

 Tenants are sorted alphabetically by their Last Name . Tenants marked as Company are sorted alphabetically by Company Name .

 Lease End - Desc

 Tenants are sorted chronologically by the Lease End date in descending order (furthest in the future to oldest).

 Lease Start

 Tenants are sorted chronologically by the Lease Start date in ascending order (oldest to most recent).

 Phone

 Tenants are sorted numerically by their Default phone number in ascending order (lowest to highest). Accounts with no phone number display first in the list.

 Unit

 Tenants are sorted alphanumerically by Unit name.

 Unit Type

 Tenants are sorted alphanumerically by Unit Type name. Tenants with the same unit type are further sorted alphanumerically by Unit name.

 Date Range

 Enter or select the date range to determine the data that displays in the report.

 In the Date Range section, set the From and To dates for which the report should examine data.

 These fields automatically populate with today’s date. Enter a different date or select a date from the calendar. Alternatively, adjust the dates using the available preset buttons or click to open more options for setting a date range.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Name

 The name of each tenant with an expiring lease.

 Acc. #

 The system-generated account number assigned to each tenant.

 Unit

 The name of the unit the tenant is leasing.

 More Information

 This report does not include units with the unit type Other Rentable Item . For more information on ORI lease expirations, refer to ORI Lease Expiration (Report) .

 Unit Type

 The type of unit selected on the unit details page.

 Original Start

 The original start date of the lease, found on the tenant details page. Leases display an original start date if they were renewed at least once. If a tenant is still on their first lease, the column is blank.

 Lease Start

 The date when the current lease begins.

 Lease End

 The date when the current lease ends.

 On Notice/Renewed

 If there is a Notice date entered on the lease, On Notice displays. If the tenant already renewed the lease, Renewed displays.

 MTM displays if the renewed lease is a MTM lease and Consider As Renewal is checked in the MTM lease terms.

 Phone #: Default

 The tenant's default phone number.

 Market Rent

 The amount entered as the unit's market rent value. For more information, refer to Unit Market Rent (Pop-Up) .

 Rent

 The tenant's active recurring rent charge. If the tenant has multiple active recurring rent charges, the sum of those charges display. Rent Charge Types are defined on the property's details page in the Other Information section.

 Summary Subreport

 The Summary subreport displays the number of tenants included in the Lease Expiration report.
