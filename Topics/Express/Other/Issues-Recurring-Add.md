# Add a Recurring Issue

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Issues-Recurring-Add.htm

Recurring issues allow you to create an automatically scheduled service issue on a regular basis. This is helpful for any issue that is addressed regularly and uses the same details each time. If only some of the details match, you can also set up a recurring issue with just those details so the creation of the issue is still automated. This reduces the overall amount of work needed when addressing each new issue and enables the ability to use automated notifications, such as Issue Due or Issue Scheduled , to track these issues.

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Recurring issues
 Add, View

 For more information, refer to Control User Access .

 Step 1: Create Recurring Issue and Set Up Recurrence Pattern

 To begin initial set up of the recurring issue, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Manager arrow_forward Recurring Issues .
The Service Manager Recurring Issues page displays.

 -
 Click   Add Recurring Issue .

 -
 In the Recurrence section, enter the following information to determine when to start posting this issue and how often to post the issue going forward.

 Field
 Description

 Next Post Date

 The date on which Rent Manager creates the first instance of the recurring issue.

 Posts Left

 Defines the number of times the issue posts, with the first post occurring on the Next Post Date .

 Due Date

 The date, relative to the date posted, the issue is expected to be resolved. The options below are available to determine if and when each posted issue is due.

 No Due Date

 The issue is not given a due date.

 Immediately

 The due date is the same as the post date.

 1st of Month

 The due date is the next occurring first of the month following the post date.

 X Day(s)/X Week(s)/X Month(s)

 The due date is a specific number of days, weeks, or months from the posting date.

 Post Every

 Defines the amount of time that must pass before a new issue is posted. The number entered in the first field combines with the time frame selected in the next field to give the desired span of time between posts. The following options are available to select as the time-frame.

 Days

 The number of days after each posting that a new issue is posted.

 Weeks

 The number of weeks after each posting that a new issue is posted.

 Months

 The number of months after each posting that a new issue is posted. This also enables the Post Day field, where you can determine which day of the month to post.

 Notification Email

 The email address(es) that Rent Manager sends an email notification for each successful or failed automatic posting from this recurring issue. If entering more than one email address, separate each with a semi-colon (;).

 Related Preferences

 This option requires your system preferences to have task automation enabled for recurring issues. For more information, refer to Task Automation (System Preferences) .

 Step 2: Set Up General Information

 In the Recurring Issue Information section, enter the following general information about the issue:

 Field
 Description

 Category

 The issue category allows you to sort and track service issues by specific types.

 Priority

 Determines the level of urgency that displays on the issue.

 Status

 Determines the initial status given to the issue when posted.

 Assigned To User

 Determines the initial Rent Manager user assigned to the issue when posted.

 More Information

 Selecting a user in the Assigned To User field overrides the defaults set on the property level and in system preferences. For more information, refer to Service Issue General Options (System Preferences) .

 Vendor

 Determines the vendor to complete all work defined in the Work Orders section. If work orders are to be completed by multiple vendors, leave this field blank.

 Step 3: Name the Recurring Issue

 In the Details section, enter the following information:

 Option
 Description

 Title

 A one-line summary that acts as the title of the recurring issue template and any issues posted from it. This also displays in the comment area on a vendor or owner bill created from a work order.

 Description

 The work that needs to be completed in order for the issue to be considered resolved.

 Step 4: Link the Recurring Issue

 In the Links section, add any entities that are associated to the recurring issues. From the drop-down, select an entity type, then use the search field to find the desired entity and click to add the link. This automatically adds other associated entities where possible. For example, adding a tenant automatically adds the property, unit, and owner associated with their active lease(s).

 More Information

 When a recurring issue is posted, a history/note item is automatically added to each linked entity. In addition, the links can be used to invoice tenants or owners from included work orders and generate data found in the Reported Issues by Unit report, which displays the number of issues linked to tenants or units. If more than one tenant is linked to a service issue, you cannot add an invoice to the issue. For more information, refer to Reported Issues by Unit (Report) .

 Step 5: Set Up Work Orders

 In the Work Orders section, click   Add Item for each associated billable items, parts, and labor charges.
A new line item is added to the Work Orders section. Use the fields below to fill out or edit existing line items.

 Field
 Description

 Property

 The property expensed by the recurring issue.

 Unit

 If applicable, the specific unit to be expensed. If the expense applies only to the property as a whole, leave this field blank.

 Vendor

 Determines the vendor to complete each item. If work orders are all to be completed by a single vendor, leave these fields blank and put the vendor in the Recurring Issue Information section.

 Item

 The specific products or services that are entered into Rent Manager as inventory items. After selecting an item, the Description , Cost , and Sale Price fields populate with that item's default values. The Qty field populates with 1 by default. For more information, refer to Inventory Items (Page) .

 Description

 The user recorded details, set in Inventory Items , for the selected item.

 Qty

 The numerical amount of products, hours, or instances of a service utilized for a single line item.

 Cost

 The original dollar amount that was paid per item.

 Sale Price

 The dollar amount you are charging per item.

 Total

 The total dollar amount billed to the owner or tenant. This is calculated using the following formula:

 Total = Qty x Sale Price

 PO

 Creates a purchase order (PO) and links the line item to it. If a PO is created, you cannot create a vendor bill or owner bill for that line item.

 Invoice Tenant

 Creates an invoice for the Total of the line item and is charged to the linked tenant. The invoice is created when the issue is posted and can be opened from the Issue detail page in the Work Order section.

 Vendor Bill

 Creates a bill for the total Cost of the line item to be paid to the vendor, expensing the selected property (and, if applicable, the selected unit).

 Owner Bill

 Creates a bill for the Total of the line item and is billed to the owner, expensing the selected property (and, if applicable, the selected unit).

 More Information

 If Vendor Bill and Owner Bill are checked in the same row, two separate bills are created.

 Vendor Bill creates a bill for the selected vendor, and expenses the management company's property for the total Cost .

 Owner Bill creates a bill for the management company, and expenses the property (and, if applicable, the unit) for the Total .

 Click Save to update the recurring issue. This must be done before you can access the remaining sections.

 Step 6: Add a Checklist

 In the Checklist section, click to add and update the following information about checklist items. You can create new checklist items or add them from template.

 Field
 Description

 Description

 Details of the selected item.

 User Responsible

 Related Privileges

 This field populates only with users who have the following privilege:

 Group
 Privilege
 Column

 Service Manager

 Issues
 View

 For more information, refer to Control User Access .

 The user assigned to a specific item in the list.

 Step 7: Add UDFs

 In the UDFs section, click to update the values for each user defined field (UDF). Required UDFs are marked with an asterisk (*) and must have a Value entered to create the recurring issue.

 More Information

 The list of UDFs displays only issue-type UDFs. For more information, refer to User Defined Fields (Page) .

 Step 8: Save the Recurring Issue

 On the Service Manager Recurring Issue page, click Save to finalize any additional changes.
The recurring issue is saved. If you have task automation set up for recurring issues, new issues post automatically. If you do not have task automation, you need to manually post each instance of the recurring issue.

 Related Preferences

 For recurring issues to post automatically, in system preferences, you must have task automation enabled for recurring issues. For more information, refer to Task Automation (System Preferences) .
