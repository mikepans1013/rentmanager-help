# Tenant Statement Methods

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Tenant-Statement-Automation-Methods.htm

The Tenant Statement displays transaction information for selected tenants across a date range and provides information about the totals for charges, credits, and the current balance due. Because the statement is intended to be mailed to tenants at the end of each billing period, it fits on an 8.5x11 sheet of paper when printed and includes a mailing address header and a section for personalized comments.

 For tenant statement automation, the tenant receives their statement based on the default statement method. For example, when setting up the automation schedule, if you select Email as the statement method for the automation, then only tenants whose default method is email receive the statement.

 There are three options for selecting the tenant statement method. You can set the method at the system level, property level, or tenant level.

 Option 1: Set Statement Method in System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 If all or most of your properties use the same method, then you can set the method in system preferences. To set the tenant statement method in system preferences, do the following:

 -
 Go to arrow_forward Administration arrow_forward Preferences arrow_forward System Preferences arrow_forward Report Options arrow_forward General .
The Report Options-General page displays.

 -
 On the Tenant Statements tile, click the drop-down arrow in the Default Statement Method field.

 -
 Select one of the following options:

 Option
 Description

 Email

 Indicate that tenants associated with this property prefer to receive tenant statements as PDF email attachments by default.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Add a Tenant Statement Automation .

 Print

 Indicate that tenants prefer to receive printed tenant statements by default.

 -
 Click Save to confirm your changes.
The setting is applied system-wide.

 Option 2: Set Statement Method by Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 If properties in your portfolio use different tenant statement methods, then you can set the method at the property level. To set the tenant statement method by property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The Property details page displays.

 -
 On the Other Information tile, click the drop-down arrow in the Statement Method field.

 -
 The following options display:

 Option
 Description

 <Use System Default>

 Indicate that tenants associated with this property prefer to receive tenant statements using the default Statement Method set in system preferences. The default method is displayed in parentheses. For example, if the Statement Method is set to Print in system preferences, the field displays <Use System Default> (Print) .

 For more information, refer to General Report Options (System Preferences) .

 No Statement

 Indicate that tenants associated with this property do not prefer to receive tenant statements by default.

 Email

 Indicate that tenants associated with this property prefer to receive tenant statements as PDF email attachments by default.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Add a Tenant Statement Automation .

 Print

 Indicate that tenants associated with this property prefer to receive printed tenant statements by default.

 -
 Click Save to confirm your changes.
The setting is applied to the property.

 Option 3: Set Statement Method by Tenant

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 You might have tenants who need to receive their statements in a format that's different from other tenants at the same property. For example, perhaps you set the statement method to email at the property level, but you have a few tenants without an email address. For these individual tenants, you would need to establish a different statement method.

 To set the tenant statement method at the individual tenant level, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list.
The Tenant details page displays.

 -
 On the Miscellaneous tile, click the drop-down arrow in the Statement Method field.

 -
 The following options display:

 Option
 Description

 <Use Property Default>

 Indicate that the tenant prefers to receive tenant statements using the default Statement Method set on the property's details page. The default method is displayed in parentheses. For example, if the property's Statement Method is set to Print , the field displays <Use Property Default> (Print) .

 No Statement

 Indicate that the tenant does not prefer to receive tenant statements. When generating tenant statements, any tenants with a Statement Method of No Statement do not display in the results and no statement is generated for them.

 Email

 Indicate that the tenant prefers to receive tenant statements as PDF email attachments. When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has Email or All selected.

 More Information

 This option can be used with Task Automation to send tenant statements on a schedule. For more information, refer to Tenant Statement Automation Schedules (Page) .

 Print

 Indicate that the tenant prefers to receive printed tenant statements. When generating tenant statements, tenants with this option selected display only if the report option for Statement Method has Print or All selected.

 -
 Click Save to confirm your changes.
The setting is applied to the tenant account.
