# Service Order List (Report)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reports/Service-Order-List.htm

The Service Order List generates a report based on either an individual issue or an issue list. This report tracks issue information, billing name and address, user assignment, and work order line items, as well as areas for the work performed and tenant’s and technician’s signatures.

 Rent Manager provides a default service order template, but you may also create custom forms for printing a service order.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Service Order List .

 For more information, refer to Control User Access .

 To generate a Service Order List report based on a saved issue list, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Service Order List .
The Reports: Service Order List page displays.

 -
 Adjust the report options as desired. Each option is described below.

 -
 Generate the report in your desired file format(s).

 Report Options

 The report options described below determine what data displays in the report.

 Issue Lists to Include

 Select a saved issue list to display all associated issues in the report.

 This option is available only when the report is generated from the Reports menu. The option does not display when the report is generated from the Issue page because the report only displays the selected service issue and cannot display the entire list.

 Show Work Order Cost

 Check to display the Cost and Total Cost columns in the Work Order section of the report.

 The Cost column displays the amount paid for a single unit of each billable item (before markup) and the Total Cost column displays the amount paid for all of the units of each billable item (before markup) needed for this service issue. This information is pulled from the Work Orders Table tile of the issue(s).

 Show Work Order Price

 Check to display the Price and Total Price columns in the Work Order section of the report.

 The Price column displays the amount you charged for a single unit of each billable item and the Total Price column displays the total amount you charged for each billable item needed for this service issue. This information is pulled from the Work Orders Table tile of the issue(s).

 Show Open Checklist Items

 Check to include any issue checklist items not yet marked complete. The results display in the Issue section of the report.

 Show Completed Checklist Items

 Check to include any issue checklist items marked complete. The results display in the Issue section of the report.

 Report Results

 The report results are described below including, if applicable, section, column, and subreport descriptions.

 Report Header

 The report header displays the report name and key information selected in the report options, such as date information and which properties were examined in the report.

 Issue Links

 Contact information for a tenant, unit, or property link selected on issues.

 Tenant links display in the report even if there are unit and property links. If there are no tenant links, then unit links display. Property links display only if no other links are selected. If there are multiple tenant links, then the tenant with the lowest system generated account ID displays.

 The title of this section in the report changes depending on which type of link is displayed in the report.

 Issue Information

 The issue number and key dates as well as which user and vendor are assigned to the issue.

 The following rows display in this section:

 Row
 Description

 Issue Number

 The Rent Manager generated number assigned to the issue.

 Date Ordered

 The date the issue was created.

 Due Date

 The date the issue is due to be completed.

 Assigned To

 The user who is assigned to complete the issue.

 Vendor

 The vendor assigned to complete the work defined in the issue. If multiple vendors are assigned work in the Work Order section, this field is blank in the report.

 Address

 The Default address as entered on the vendor's details page.

 Phone

 The Default phone number as entered on the vendor's details page.

 Fax

 The fax number as entered on the vendor's details page.

 Job

 The name of the job, if applicable, associated with the issue.

 Allowed To Enter

 Indicates Yes if the Allow to Enter field in the Links section of the issue is checked. Otherwise, displays No .

 Signature on File

 Indicates Yes if the Signature on File field in the Links section of the issue is checked. Otherwise, displays No .

 Pets

 Indicates Yes if the Pets field in the Links section of the issue is checked. Otherwise, displays No .

 Issue

 The description of the issue, as well as any checklist items, if selected in the report options.

 The following fields display in this section:

 Field
 Description

 Issue

 The name created for the issue.

 Description

 Additional information about the issue.

 If there are any checklist items entered on the issue, the following rows display in this section:

 Column
 Description

 Completed

 A Check displays if the item is completed.

 Description

 The description of the checklist item that details the action the user should take.

 User Responsible

 The user assigned to complete the checklist item.

 Completed Date

 The date the checklist item was completed.

 Completed User

 The user who completed the checklist item.

 Work Performed

 The resolution of the issue, if a resolution was entered on the issue.

 Work Order

 The parts and labor costs as entered on the issue work order.

 The following columns display in this section:

 Column
 Description

 Property

 The property short name of each property associated with the work order.

 Unit

 If applicable, the unit(s) associated with the work order.

 Item

 The billable items added to the work order.

 Description

 Additional information regarding the billable item as entered on the item's General Information tile.

 Qty

 The quantity of billable items needed for this issue. The total quantity of all items on the work order is listed at the bottom of the column.

 Cost

 The amount paid for a single unit of each billable item needed for this issue.

 This column displays only if Item Cost is checked in report options.

 Total Cost

 The total amount paid for each billable item needed for this issue.

 This column displays only if Item Cost is checked in report options.

 Price

 The amount charged with markup for a single unit of each billable item needed for this issue.

 This column displays only if Item Price is checked in report options.

 Total Price

 The total amount charged with markup for each billable item needed for this issue.

 This column displays only if Item Price is checked in report options.

 Signature

 Provides a place for the tenant and technician to sign and acknowledge the completion of the issue.
