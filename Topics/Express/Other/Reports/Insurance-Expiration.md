# Insurance Expiration (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Insurance-Expiration.htm

If you have the insurance integration with LeaseTrack and utilize the Tracking or Enforcement option, this report displays tenants and homeowners that have insurance policies that expire within a specified number of days. If a tenant or homeowner has multiple leases with insurance policies recorded, they are listed more than once with a separate line for each lease.

 Related Preferences

 This report displays only if Enable insurance tracking is checked. For more information, refer to Activate and Set Up LeaseTrack Insurance .

 More Information

 Tenants and homeowners are excluded from the report if one or more of the following conditions are true:

 -
 The tenant or homeowner has a lease with the Don't require insurance option selected.

 -
 The tenant or homeowner has a lease with a Move Out date on, or Expected MO date before the insurance expiration date.

 -
 The tenant or homeowner's lease is for a unit type marked as Other Rentable Items (ORI) .

 -
 The tenant or homeowner has a lease at a property that does not have insurance tracking enabled.

 -
 The tenant or homeowner has a lease with a insurance policy expiring, but has another policy with an expiration date outside of the set Insurance Expiration .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Insurance Expiration .

 For more information, refer to Control User Access .

 To view the Insurance Expiration report, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Tenants arrow_forward Insurance Expiration .
The Reports: Insurance Expiration page displays.

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

 Run Properties Separately

 Check to generate a separate report for each selected property. Otherwise, all selected properties are combined into a single report.

 Sort Options

 Select one of the following options to determine how the report results are organized:

 Option
 Description

 Property

 Tenants and homeowners are first sorted alphanumerically by property name, then further sorted alphabetically by their Last Name .

 Unit

 Tenants and homeowners are first sorted alphanumerically by property, then further sorted alphanumerically by unit name.

 Last Name

 Tenants and homeowners are sorted alphabetically by their Last Name . Commercial tenants are sorted by Company Name .

 Account Number

 Tenants and homeowners are sorted numerically based on their system-generated ID number that is assigned when their account is created.

 Insurance Expiration

 Rent Manager examines information for the number of days entered to determine the data that displays in the report.

 This field automatically populates with the number 30 . Enter a number to display insurance policies which expire in the entered number of days from today's date.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Acc. #

 The system-generated account ID number assigned to each tenant upon creation.

 Insurance Expiration

 The date on which the insurance coverage expires, as entered on the policy.

 Move In

 The date when the tenant or homeowner moved in as entered on the lease.

 Move Out

 The date when the tenant or homeowner moved out as entered on the lease.

 Property

 The name of the property of the tenant or homeowner's lease.

 Tenant

 The Last Name , First Name of the tenant or homeowner whose insurance policy will expire in the entered number of days from today's date.

 Unit

 The name of the unit where the tenant or homeowner resides.
