# Lease Abstract (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Lease-Abstract.htm

The Lease Abstract report displays a detailed overview of lease information for each tenant at the selected property(s). This report can be used to save you time searching for the paper lease by generating results for all lease details for the selected tenants.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Lease Abstract .

 For more information, refer to Control User Access .

 To view the Lease Abstract report, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward Tenants arrow_forward Lease Abstract .
The Reports: Lease Abstract page displays.

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

 Select each desired option to determine which accounts display in the report results.

 Option
 Description

 Current

 All tenants with a Move In date on or before the report date and with either no Move Out date or a Move Out date after the selected date display.

 Past

 All tenants with a Move Out date set before the selected date display.

 Future

 All tenants with a Move In date that is undefined or after the selected date display.

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following sorting options to determine the order in which the pages of the report generate. Each page is dedicated to a unit with an ongoing individual lease.

 Option
 Description

 Account Number

 Pages are sorted numerically by their system-generated ID number in ascending order (lowest to highest).

 Tenant

 Pages are sorted alphabetically by the tenant's First Name . Accounts marked as Company are sorted alphabetically by Company Name .

 Unit

 Pages are sorted alphanumerically by Unit name. Pages for leases with no unit display first.

 Address Type

 Select an Address Type to determine which entity address displays in the report.

 To use the address that is marked as the Default on the account, select < Use Default > .

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Account InfoInformation

 The Account Info section displays basic information about the tenant and their lease. The following fields display in the section:

 Field
 Description

 Account Name

 The tenant's name in a Last Name , First Name format.

 Lease Signed

 The date on which the tenant's lease was signed, as entered on the lease.

 Lease Start

 The date on which the tenant's lease started, as entered on the lease.

 Lease Term

 The tenant's lease terms. For more information, refer to Lease Terms (Page) .

 Lease End

 The date on which the tenant's lease ends, as entered on the lease.

 Move In

 The date on which the tenant moved or will move into the unit, as entered on the lease.

 Move Out

 The date on which the tenant vacated or is expected to vacate the unit, as entered on the lease.

 Account #Number

 The tenant's system-generated account number.

 Tax ID

 For commercial tenants, the Tax ID of the Primary contact, as entered on the tenant's View Contacts pop-up.

 For residential tenants, the Soc Sec # of the Primary contact, as entered on the tenant's View Contacts pop-up.

 Pro Rata Share

 For commercial tenants, the Default Pro Rate Share % as entered on the CRE Setup tab of the lease.

 Administration Fee

 For commercial tenants, the Default Administrative Fee % as entered on the CRE Setup tab of the lease.

 SD Held

 The amount being held as a security deposit for the tenant.

 More Information

 If a security deposit does not display in the report results, you should check for the following:

 -
 Confirm the charge type is selected as a security deposit charge type in the security deposit options system preferences. For more information, refer to Security Deposit General Options (System Preferences) .

 -
 On the tenant's account, ensure a payment has been allocated to the charge.

 -
 On the security deposit transaction, ensure that the unit selected in the Unit field is linked to same unit where the security deposit is being held.

 Primary Contact Information

 The Primary Contact Info section displays the information about the Primary contact, including the image uploaded to the contact, listed on the tenant's View Contacts pop-up.

 Field
 Description

 First Name

 The primary contact's first name.

 Last Name

 The primary contact's last name.

 Email

 The primary contact's email address.

 Phone Number Home

 The primary contact's phone number associated with the phone number type marked as Default .

 Address

 The primary contact's address of the Address Type selected in the report options.

 Comments

 The text entered on the tenant's details page, in the Comment section.

 Unit Information

 The Unit Information section displays details, as entered on the unit's details page, about the unit being leased by the tenant.

 Field
 Description

 Unit

 The Name of the unit being leased.

 Unit Type

 The unit type of the unit being leased.

 Unit Sq Ft

 The Square Footage of the unit being leased.

 Address

 The Address marked as Default for the unit being leased.

 Property

 The name of the property where the unit is located.

 Recurring Charges

 The Recurring Charges section displays information about the recurring charges configured on the tenant's View Recurring Charges pop-up.

 Column
 Description

 Charge Type

 The charge type used by each recurring charge.

 Amount

 The amount that posts to the tenant's account each time the recurring charge is posted.

 Comment

 The comment entered for each recurring charge.

 Frequency

 How often each recurring charge posts to the tenant's account.

 More Information

 The Frequency is calculated as a number of months, weeks, or days that should elapse between each posting of the recurring charge. For example, 1 means post this recurring charge once every month/week/day. 3 means post once every three months/weeks/days.

 From

 The date on which each recurring charge went into effect.

 To

 The date after which each recurring charge is no longer active.

 Rent and Escalations

 The Rent and Escalations section displays historical information about the recurring charge escalations for commercial leases.

 Column
 Description

 Charge Type

 The charge type used by each recurring charge.

 Effective Date

 The date on which each escalation went into effect.

 Amount

 The amount that posts to the tenant's account each time the recurring charge is posted.

 Amount Sq. Ft.

 The Amount per square foot for the unit based on the calculations set on the recurring charge(s).
