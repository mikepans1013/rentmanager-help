# Tenant AutoPay Configuration (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Tenant-Autopay-Configuration.htm

The Tenant AutoPay Configuration report displays a list of tenants who have AutoPay enabled on Tenant Web Access (TWA) and the options they selected for processing payments. If you set up the Tenant Turned AutoPay via TWA ON automated notification, you can run this report when a new tenant creates an AutoPay configuration to review the options they selected.

 This report lists only active AutoPay accounts, including active AutoPay configurations belonging to past tenants. If an AutoPay account is disabled before this report is generated, the account no longer shows on the report.

 Related Preferences

 In order to utilize this notification, you must have the Enable AutoPay Configuration option enabled in system web preferences. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Tenant AutoPay Configuration .

 For more information, refer to Control User Access .

 To view the Tenant AutoPay Configuration report, do the following:

 -
 Go to arrow_forward  Rental Info arrow_forward  Tenants arrow_forward Tenant AutoPay Configuration .
The Reports: Tenant AutoPay Configuration page displays.

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

 Report Results

 The report results are described below including, if applicable, section, column, and subreport or tab descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The columns that display in the report are described below.

 Column
 Description

 Tenant

 The Tenant Web Access (TWA) user's full name.

 Web Username

 The email associated with the TWA web user account.

 Frequency

 The interval at which the tenant's automatic payments are posted. Tenants can select from any of the options enabled in system web preferences. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 Payment Day

 The day of the week or month that the AutoPay automation charges the account .

 Payment Type

 The setup selected by the TWA user for how their account is charged. Each option is described below.

 Total Balance Due

 The automatic payment amount includes all of the tenant's open charges, including those dated in the future.

 Current Balance Due

 The automatic payment amount includes only charges due as of the date AutoPay runs.

 Specific Amount

 The automatic payment amount processes the value entered by the tenant regardless of their balance.

 Amount

 The Max Amount specified by the tenant in TWA which an automatic payment cannot exceed. For example, if a tenant with a Payment Type of Total Balance Due has a $2,000 balance but set the Max Amount to $1,500, a $500 balance remains on their account when AutoPay runs.

 Last Run Date

 The most recent date the AutoPay automation ran on the account.
