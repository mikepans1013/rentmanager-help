# Recurring Issue Detail (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Recurring-Issue-Detail.htm

The Recurring Issue Detail report creates a detailed profile of every recurring service issue fitting the criteria you select in the report options, including history note items, user defined fields, and work order costs.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Recurring Issue Detail .

 For more information, refer to Control User Access .

 To view the Recurring Issue Detail report, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Recurring Issue Detail .
The Reports: Recurring Issue Detail page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 Properties/Owners to Include

 Check each property or owner to be included in the report. Alternatively, select a property or owner Group .

 More Information

 Only information related to the properties to which you have access displays. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Optionally, check Show Inactive Properties to include properties that are no longer active.

 Category

 Select an issue category from the drop-down list to filter the report results so only issues assigned to the selected category display. For more information, refer to Issue Categories (Page) .

 To view only issues that have not been assigned a Category , select <Unassigned> . Alternatively, to include issues of all categories, select Any .

 Status

 Select an issue status from the drop-down list so only issues with the selected Status display. To view only issues that have not been assigned a status, select <Unassigned> . Alternatively, to include issues of all categories, select Any . For more information, refer to Issue Statuses (Page) .

 Priority

 Select an issue priority from the drop-down list to display only issues with that priority in the report results. To view only service issues that have not been assigned a priority, select <Unassigned> . Alternatively, to include service issues of all priorities, select All . For more information, refer to Issue Priorities (Page) .

 Assigned To

 Select a user to filter the report results so only service issues that are assigned to that user display.

 To view only service issues that have not been assigned to a user, select <Unassigned> . Alternatively, to include service issues assigned to any user that match the other selected report options, select All .

 Vendor

 Select a vendor from the drop-down list. Only issues that are assigned to that vendor display in the report. To include only issues that have not been assigned a vendor, select <Unassigned> . Alternatively, to include service issues assigned to any vendor, select All .

 Link Type

 Select a type of service issue link (tenant, prospect, unit, or property) to filter the accounts that display in the Link drop-down.

 Link

 Select an entity of the selected Link Type so only issues that are linked to that entity display in the report results.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Column Descriptions

 The information that displays in the report is separated by section and described below.

 General Info

 This section displays basic information about each service issue in the following fields:

 Field
 Description

 Vendor

 The vendor associated with the recurring issue, selected on the Recurring Issue Information tile.

 Status

 The status assigned to the recurring issue on the Recurring Issue Information tile.

 Assigned To

 The user to whom the recurring issue is currently assigned, as displayed on the Recurring Issue Information tile.

 Category

 The category assigned to the recurring issue on the Recurring Issue Information tile.

 Priority

 The priority assigned to the recurring issue on the Recurring Issue Information tile.

 Allowed To Enter

 If, on the Issue Details tile of the issue, the Allowed to Enter field is checked, Yes displays. Otherwise, No displays.

 Related Preferences

 This field displays only when Allowed to Enter is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Pets

 If, on the Issue Details tile of the issue, the Pets field is checked, Yes displays. Otherwise, No displays.

 Related Preferences

 This field displays only when Has Pets is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Open Date

 The date and time the recurring service issue was created.

 Open User

 The user who created the recurring issue.

 Modify Date

 The date and time the recurring issue was most recently edited.

 Modify User

 The user who most recently modified the recurring issue.

 Next Post Date

 The date and time the recurring service issue is scheduled to post next.

 Signature on File

 If, on the Issue Details tile of the issue, the Signature on File field is checked, Yes displays. Otherwise, No displays.

 Related Preferences

 This field displays only when Signature on File is checked in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Post Period

 The time period to be used when determining how often the issue should be posted.

 Post Term

 The full time in which this recurring issue is active.

 Post Times Left

 The remaining number of times the recurring issue will post within the time allotted in the Post Term .

 Last Post Date

 The date that the last post from this recurring issue will occur.

 Link

 The tenant ( T ), property ( P ), and unit ( U ) service issue links.

 Issue

 This section displays the Title as entered on the recurring issue's details page.

 Description

 This section displays the Description as entered on the recurring issue's details page.

 User Defined

 Information about user defined fields are displayed in the columns described below:

 Column
 Description

 Name

 The name of each issue-type user defined field.

 Value

 The value entered or selected for each issue-type user defined field.

 Work Order

 Information about work order items are displayed in the columns described below:

 Column
 Description

 Prop

 The short name of the property where each billable item is being used.

 Unit

 The name of the unit where each billable item is being used, if applicable.

 Item

 The name of each inventory item used to complete the work order.

 Description

 Additional details about each inventory item.

 Qty

 The number of each inventory item used to complete the work order.

 Cost

 The base cost for one unit of each inventory item for your management company.

 Total Cost

 The total cost of each inventory item, calculated using the following formula:

 Total Cost = Cost * Qty

 Price

 The amount that an owner or tenant pays for one unit of each inventory item through created invoices.

 Total Price

 The total amount that an owner or tenant pays for each inventory item, calculated using the following formula:

 Total Price = Price * Qty
