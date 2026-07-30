# Credit Card Expiration Listing (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Credit-Card-Expiration-Listing.htm

The Credit Card Expiration Listing report displays your tenant's credit card credentials and expiration dates as entered on their account's ePay Settings pop-up. The report can be filtered to display only credit cards and ACH accounts that have expired to help you track tenants who are charged via recurring ePay and need their credit card info updated in Rent Manager .

 More Information

 Tenants with ACH accounts saved on the ePay Settings pop-up also display in the report results.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Credit Card Expiration Listing .

 For more information, refer to Control User Access .

 To view the Credit Card Expiration Listing report, do the following:

 -
 Go to arrow_forward Banking arrow_forward Payments arrow_forward Credit Card Expiration Listing .
The Reports: Credit Card Expiration Listing page displays.

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

 Sort Options

 Accounts are first sorted numerically by their property's system-generated ID number in ascending order (lowest to highest). Select one of the following options to determine how the report results are sorted.

 Option
 Description

 Account Number

 Accounts are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Expiration

 Accounts are sorted chronologically by their credit card's Expiration date in ascending order (oldest to furthest in the future). Accounts with no expiration date specified display first in the list.

 Property

 Accounts are sorted only by their property's system-generated ID number in ascending order (lowest to highest).

 Tenant

 Accounts are sorted alphabetically by their First Name . Commercial accounts are sorted by Company Name .

 As of Date

 Rent Manager examines relevant report information as of (up through) the date entered to determine the data that displays in the report.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Only Show Expired Cards

 Check to exclude tenants with credit cards that have not yet expired. Tenants with ACH accounts still display in the report results.

 Include Prospects

 Check to display prospect account information in the report results.

 Include in Batch

 If checked, only tenants who have the Include Tenant in ePay Batch Postings using default account information option enabled on the account's ePay Settings pop-up display in the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Property

 The Short Name for the property as entered on the property's General tile.

 Tenant

 The name of the tenant as entered on the tenant's General tile.

 Unit

 The name of the unit the tenant is leasing.

 Unit Type

 The unit type for associated with the unit as selected on the unit's General tile.

 Card Type

 The credit card or ACH account selected in the Account Type drop-down list on the tenant's ePay Settings pop-up.

 Last 4 #'s

 The last four numbers of the Account Number entered on the tenant's ePay Settings pop-up.

 Exp. Date

 The month and year that the tenant's credit card expires as selected in the Expiration Date field on the tenant's ePay Settings pop-up.

 Invalid Date displays for ACH accounts since they do not have an expiration date.

 Days Expired

 The number of days a credit card has been expired based on the report As of Date . N/A displays for ACH accounts since they do not have an expiration date.

 Phone Number: Default

 The tenant's default phone number as entered in the tenant's View Contacts pop-up.
