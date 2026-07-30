# Security Deposit Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Security-Deposit-Listing.htm

The Security Deposit Listing report displays security deposit amounts for tenant and/or prospect accounts of the selected properties as of the report date, as well as information about tenant move-in and move-out dates. Additionally, the report includes the total amount of held security deposits for each tenant and prospect, if applicable, as well as the total deposits charged, paid, and refunded to tenants as of the report date.

 This report is useful in providing a snapshot of the security deposits you are liable for, and can be used in conjunction with your Balance Sheet to ensure security deposit amounts are accurate.

 More Information

 The results can include any transaction information even if it started prior to the general ledger (GL) start date since this report does not consider the GL start date.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Security Deposit Listing .

 For more information, refer to Control User Access .

 To view the Security Deposit Listing report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward  Tenants arrow_forward Security Deposit Listing .
The Reports: Security Deposit Listing page displays.

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

 Tenants to Include

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Security Deposit Types to Include

 Check one or more of the security deposit charge types to include in the report. If your database has only one security deposit charge type, this option does not display.

 Related Preferences

 You can adjust which charge types count towards security deposits in system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are sorted in each property subheading:

 Option
 Description

 Account Number

 Accounts are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Address

 Accounts are sorted alphanumerically by their Default address. Accounts with no address display first in the list.

 Amount - Desc

 Accounts are sorted numerically by the security deposit amount Charged in descending order (greatest to least).

 Last Name

 Accounts are sorted alphabetically by their Last Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Phone

 Accounts are sorted numerically by their Default phone number in ascending order (lowest to highest). Accounts with no phone number display first in the list.

 Move In - Desc

 Accounts are sorted chronologically by the Move In date in descending order (furthest in the future to oldest).

 Move Out - Desc

 Accounts are sorted chronologically by the Move Out date in descending order (furthest in the future to oldest). Accounts with no move out date display last in the list.

 Unit

 Accounts are sorted alphanumerically by Unit name.

 Show Prospects

 Check to include prospect records in the report results. Otherwise, only tenant's records display.

 Zero Amount Exclusions

 Select an option to determine which tenants and/or prospects are excluded from the report results.

 Option
 Description

 None

 Display all tenants and/or prospects regardless of their security deposit.

 Activity

 Exclude tenants and/or prospects that were not charged, refunded, or paid a security deposit.

 Balance

 Exclude tenants and/or prospects that do not currently have a held security deposit.

 Activity or Balance

 Exclude tenants and/or prospects who either were not charged, refunded, or paid a security deposit, or do not have a held security deposit.

 Activity and Balance

 Exclude tenants and/or prospects who both were not charged, refunded, or paid a security deposit, and do not have a held security deposit.

 After selecting the report options, they may be saved, allowing you to quickly generate the report with that criteria.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information, selected charge types, and which properties and types of tenants were examined in the report. The report header displays * indicates a prospect to help you track how the report results are filtered.

 Column Descriptions

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 The columns that display in the report are described below. Each property selected displays in its own section.

 Column
 Description

 Tenant

 The property and tenants or prospects associated with that property. The column name does not change if the Show Prospects report option is selected; prospects are listed in the same manner as tenants, but with an asterisk (*) in front of the name.

 Acc. #

 The tenant or prospect account number that was generated when the account was created.

 Unit

 The unit associated with the tenant or prospect.

 Phone #: Default

 The Default phone number associated with the tenant or prospect as entered on the View Contacts page.

 Address

 The Default street address associated with the tenant or prospect as entered on the Tenant details page.

 Move In

 The tenant's Move In date or the prospect's Expected Move-In date as entered on the details page.

 Move Out

 The tenant's Move Out date or the prospect's Expected Move Out date as entered on the details page.

 Charged

 The total amount of security deposit charge types that were posted to the tenant or prospect account. The total of charged security deposits for all tenants and/or prospects included can be found at the end of each property's section.

 Received

 The total amount of payments collected that are allocated to security deposit charge types. The total of received security deposits for all tenants and/or prospects included can be found at the end of each property's section.

 Refunded

 The total amount of security deposits that were returned to the tenants and/or prospects. The total of refunded security deposits for all tenants and/or prospects included can be found at the end of each property's section.

 Held

 The total amount of held security deposits for tenants and/or prospects. The total of held security deposits for all tenants and/or prospects included can be found at the end of each property's section.

 Summary Subreport

 This subreport displays the total number of units, vacant units, held security deposits, and accounts without deposits for the tenants and prospects, if applicable, of the selected properties.

 The following fields display in the subreport:

 Fields
 Description

 Units

 The total number of units associated with the selected properties.

 Vacant Units

 The total number of units that are not currently being leased by a tenant.

 Deposit Held

 The number of accounts that have a held security deposit.

 No Deposit

 The number of accounts that do not have a held security deposit.
