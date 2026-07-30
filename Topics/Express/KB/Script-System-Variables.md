# Scripting System Variables

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-System-Variables.htm

System variables work the same as user variables, but these variables are already created by Rent Manager and cannot be changed. Certain functions have reserved system variables that can be used as special parameters in the function, and other tools, like Report Writer , have system variables that can be used in custom reports.

 System variables always begin with a dollar sign followed by an underscore: $_ . For example, [$_asof] is a system variable in Report Writer that always contains the date selected by the user in the report options of a report. And in the History function's Format parameter, $_Hours is a system variable you can use to display the number of hours spent on resolving a history/note item.

 Report Writer System Variables

 The following system variables can be used to create report headers when setting up reports in Report Writer .

 Variable
 Description

 [$_asof]

 Displays the As of Date selected in the report options.

 [$_createdate]

 Displays the date on which the report was created.

 [$_proplist]

 Displays which properties are included in the report.

 Scripting Function System Variables

 Some scripting function parameters can also accept system variables.

 Board Member List

 The following system variables can be used in the BoardMemberList function's Format parameter:

 Variable
 Description

 $_Comments

 Displays the Comments entered for the board member.

 $_Email

 Displays the Email address entered for the board member.

 $_FirstName

 Displays the first name of the board member.

 $_LastName

 Displays the last name of the board member.

 $_Role

 Displays the Role of the board member.

 $_TermEnd

 Displays the end date of the board member's term.

 $_TermStart

 Displays the start date of the board member's term.

 For more information, refer to Board Member List Function (Script) .

 Charges List

 The following system variables can be used in the ChargesList function's Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the charge.

 $_ChargeType

 Displays the shortened charge type name.

 $_Comment

 Displays the Comment entered on the charge.

 $_Date

 Displays the date the charge was posted.

 $_Description

 Displays the text in the transaction’s Description field.

 $_Reference

 Displays the Reference entered on the transaction.

 For more information, refer to Charges List Function (Script) .

 Checklist

 The following system variables can be used in the Checklist function's Format parameter:

 Variable
 Description

 $_AssignedToUser

 Displays the active Rent Manager user assigned to the checklist item.

 $_CompletedByUser

 Displays the active Rent Manager user who completed the checklist item.

 $_CompletedDate

 Displays the date and time when the checklist item was marked as Completed and the issue was saved.

 $_Description

 Displays the text entered in the Description of the checklist item.

 $_IsCompleted

 Displays Complete or Open , depending on whether or not the checklist item is marked as Completed .

 For more information, refer to Checklist Function (Script) .

 Committee Member List

 The following system variables can be used in the CommitteeMemberList function's Format parameter:

 Variable
 Description

 $_Comments

 Displays the Comments entered for the committee member.

 $_Committee

 Displays the name of the Committee .

 $_Email

 Displays the Email address entered for the committee member.

 $_FirstName

 Displays the first name of the committee member.

 $_LastName

 Displays the last name of the committee member.

 For more information, refer to Committee Member List Function (Script) .

 CRE Charge Type List

 The following system variables can be used in the CREChargeTypeList function's Format parameter:

 Variable
 Description

 $_BaseAmount

 Displays the Base Amount entered on the commercial lease's Charge Type Setup tab.

 $_BaseTerm

 Displays the Base Term entered on the commercial lease's Charge Type Setup tab.

 $_BaseYearStart

 Displays the Base Year Start entered on the commercial lease's Charge Type Setup tab.

 $_CapAmount

 Displays the Cap Amount entered on the commercial lease's Charge Type Setup tab.

 $_CapIncrease

 Displays the % Cap Increase entered on the commercial lease's Charge Type Setup tab.

 $_CapTerm

 Displays the Cap Term entered on the commercial lease's Charge Type Setup tab.

 $_ChargeType

 Displays the shortened charge type name.

 For more information, refer to CRE Charge Type List Function (Script) .

 CRE Setup List

 The following system variables can be used in the CRESetupList function's Format parameter:

 Variable
 Description

 $_AdministrativeFee

 Displays the Administrative Fee % entered on the commercial lease's Charge Type Setup tab.

 $_CREAccount

 Displays the CRE Account on the commercial lease's Charge Type Setup tab.

 $_ProRataShare

 Displays the Pro Rata Share % entered on the commercial lease's Charge Type Setup tab.

 For more information, refer to CRE Setup List Function (Script) .

 Details

 The following system variables can be used in the Details function's Format parameter:

 Variable
 Description

 $_Agency

 Displays the name of the credit bureau reporting the score.

 $_Date

 Displays the date on which the screening requested the credit score.

 $_Factor#

 Displays the specified factor that adversely affected the credit score. Each agency can have 0–5 factors.

 To display a specific factor, insert numbers 1 through 5 in place of # (e.g., $_Factor3 ).

 $_Factors

 Displays the list of factors with each factor separated by a semicolon.

 $_Max

 Displays the highest possible credit score in the range.

 $_Min

 Displays the lowest possible credit score in the range.

 $_Name

 Displays the name of the person being screened.

 $_NumberedFactors

 Displays a numbered list of factors that adversely affected the credit score.

 $_Score

 Displays the person's credit score.

 For more information, refer to Details Function (Script) .

 Individual Hours

 The following system variables can be used in the IndividualHours function's Format parameter:

 Variable
 Description

 $_CheckInTime

 Displays the date and time of the Check In .

 $_CheckOutTime

 Displays the date and time of the Check Out .

 $_Comment

 Displays text entered in the Note column of the entry.

 $_Hours

 Displays the number of hours spent on the issue between the check-in time and check-out time.

 $_User

 Displays the username of the Rent Manager user who checked into the issue.

 For more information, refer to Individual Hours Function (Script) .

 Issue History

 The following system variables can be used in the IssueHistory function's Format parameter:

 Variable
 Description

 $_AssignedClosedDate

 Displays the date the issue was closed and saved in Rent Manager .

 $_AssignedTo

 Displays the user in the issues Assigned To User field.

 $_Category

 Displays the issue category in the Category field.

 $_ClosedDate

 Displays the date in the issue's Close Date field.

 $_CreateDate

 Displays the date in the issue's Open Date field.

 $_Date

 Displays the date the issue was opened and first saved in Rent Manager .

 $_Description

 Displays the text in the issue’s Description field.

 $_DueDate

 Displays the date in the issue's Due Date field.

 $_Hours

 Displays the total number of hours in the issue's Details tile.

 $_IsClosed

 Displays True if the issue is closed, and False if it is not.

 $_IsRead

 Displays True if the issue has been opened by the user, and False if it is not.

 $_IssueID

 Displays the system-generated number for the service issue.

 $_Priority

 Displays the issue priority level in the issue's Priority field.

 $_Resolution

 Displays the text in the issue's Resolution field.

 $_Status

 Displays the issue status in the issue's Status field.

 $_Title

 Displays the description text in the issue’s Title field.

 $_UpdateDate

 Displays the date the issue was last updated and saved in Rent Manager .

 For more information, refer to Issue History Function (Script) .

 List

 The following system variables can be used in the List function's Format parameter:

 Variable
 Description

 $_AssignedClosedDate

 Displays the date currently in the Close Date field of the selected service issue. This can be the close date most recently entered by the user or the original close date (if the user has not changed the date).

 $_AssignedTo

 Displays the active Rent Manager user assigned to the service issue.

 $_Category

 Displays the Category created to help you sort and track service issues.

 $_ClosedDate

 Displays the date on which the Close Date box was initially checked on the selected service issue and the issue was saved.

 $_CreateDate

 Displays the date on which the selected service issue was created and first saved.

 $_Date

 Displays the Open Date of the service issue.

 $_Description

 Displays the text in the Description field on the Service Manager Issue details page.

 $_DueDate

 Displays the Due Date of the service issue.

 $_Hours

 Displays the number of Hours spent on the service issue.

 $_IsClosed

 Displays True if the issue is closed or False if the issue is still open.

 $_IsRead

 Displays True if the issue has been read or False if the issue has not been read.

 $_IssueID

 Displays the Issue ID of the service issue.

 $_Priority

 Displays Priority assigned to the service issue.

 $_Resolution

 Displays the text in the Resolution field on the Service Manager Issue details page.

 $_Status

 Displays the condition that describes the current progress of the service issue.

 $_Title

 Displays the brief summary in the Title field on the Service Manager Issue details page.

 $_UpdateDate

 Displays the date the selected service issue was most recently updated (saved).

 For more information, refer to List Function (Script) .

 Location History

 The following system variables can be used in the LocationHistory function's Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date on which this location history item was entered and first saved in Rent Manager .

 $_CreateUser

 Displays the user who entered and first saved this location history item in Rent Manager .

 $_EntityName

 Displays the name of the Property for the location history item.

 $_FromDate

 Displays the From date for the location history item.

 $_ToDate

 Displays the To date for the location history item.

 $_UnitName

 Displays the name of the Unit for the location history item.

 $_UpdateDate

 Displays the date on which this location history item was last updated and saved in Rent Manager .

 $_UpdateUser

 Displays the user who last updated and saved this location history item in Rent Manager .

 For more information, refer to Location History Function (Script) .

 Note

 The following system variables can be used in the Note function's Format parameter:

 Variable
 Description

 $_Category

 Displays the Category assigned to the history item.

 $_CreatedBy

 Displays the Rent Manager user who created the history item.

 $_Date

 Displays the date on which the item was created.

 $_Regarding

 Displays the text entered in the Note field of the history item.

 $_Time

Displays the time the item was created.

 $_Type

Displays the Type of the history item.

 For more information, refer to Note Function (Script) .

 Open Charges List

 The following system variables can be used in the OpenChargesList function's Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the open charge.

 $_AmountLeft

 Displays the amount of the open charge left after payment allocation.

 $_AmountPaid

 Displays the amount of the open charge that has been paid/allocated.

 $_ChargeType

 Displays the shortened charge type name.

 $_ChargeTypeDescription

 Displays the charge type Description .

 $_Comment

 Displays the Comment entered on the open charge.

 $_Comment25

 Displays the first 25 characters of the Comment entered on the open charge.

 $_Date

 Displays the date the open charge was posted.

 $_Description

 Displays the text in the open charge’s Description field.

 $_Reference

 Displays the Reference entered on the open charge.

 $_ShortDate

 Displays the open charge date in a shortened format (mm/dd/yy).

 For more information, refer to Open Charges List Function (Script) .

 Other Charges List

 The following system variables can be used in the OtherChargesList function's Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the charge.

 $_ChargeType

 Displays the shortened name of the charge type.

 $_ChargeTypeDescription

 Displays the charge type Description .

 $_Comment

 Displays the optional comment entered for the charge type.

 For more information, refer to Other Charges List Function (Script) .

 Prospect Stage

 The following system variables can be used in the ProspectStage function's Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date and time that the stage was assigned.

 $_CreateUser

 Displays the username of the Rent Manager user who assigned the specified stage, or completed the trigger action that assigned the specified stage.

 If the stage was set by the prospect (such as when an application is submitted, or a document signed), this displays blank.

 $_Description

 Displays text entered in the Description field of the prospect stage.

 $_Duration

 Displays the amount of time the prospect spent in that stage.

 If the stage is currently active, this displays as blank.

 $_FromDate

 Displays the date and time the selected stage was assigned.

 $_Name

 Displays the name of the stage.

 $_ToDate

 Displays the date and time the selected stage was last assigned.

 If this is the current stage, the From Date displays.

 $_UpdateDate

 Displays the date and time the selected stage was last updated.

 $_UpdateUser

 Displays the username of the Rent Manager user who last updated the stage, or completed the trigger action that assigned the specified stage.

 If the stage was set by the prospect (such as when an application is submitted, or a document signed), this displays blank.

 For more information, refer to Prospect Stage Function (Script) .

 Recurring Charge List

 The following system variables can be used in the RecurringChargeList function's Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the recurring charge.

 $_ChargeTypeName

 Displays the name of the recurring charge's charge type.

 $_ChargeTypeDescription

 Displays the description of the recurring charge's charge type.

 $_Comment

 Displays the Comment entered on the recurring charge.

 $_Frequency

 Displays the frequency of the recurring charge.

 $_FromDate

 Displays the start date on which the recurring charge becomes active.

 $_Level

 Displays the level of the recurring charge (e.g., Property).

 $_Property

 Displays the property associated with the recurring charge.

 $_ToDate

 Displays the end date on which the recurring charge ends.

 $_Unit

 Displays the unit associated with the recurring charge.

 For more information, refer to Recurring Charge List Function (Script) .

 Recurring Charges List

 The following system variables can be used in the RecurringChargesList function's Format parameter:

 Variable
 Description

 $_ChargeType

 Displays the shortened charge type name.

 $_Amount

 Displays the amount of the recurring charge.

 $_FromDate

 Displays the start date on which the recurring charge becomes active.

 $_ToDate

 Displays the end date on which the recurring charge ends.

 $_Comment

 Displays the Comment entered on the recurring charge.

 $_ChargeTypeDescription

 Displays the description of the recurring charge's charge type.

 $_Level

 Displays the level of the recurring charge (e.g., Property ).

 For more information, refer to Recurring Charges List Function (Script) .

 Stage List

 The following system variables can be used in the StageList function's Format parameter:

 Variable
 Description

 $_Name

 Displays the name of the stage.

 $_Description

 Displays the description of the stage.

 $_FromDate

 Displays the date and time on which the stage was defined for the prospect.

 $_ToDate

 Displays the date and time the stage was changed for the prospect.

 $_CreateUser

 Displays the Rent Manager username of the person who added the stage.

 $_CreateDate

 Displays the date and time the stage was created.

 $_UpdateUser

 Displays the Rent Manager username of the person who edited the stage.

 $_UpdateDate

 Displays the date and time the stage was edited.

 For more information, refer to Stage List Function (Script) .

 Status History

 The following system variables can be used in the StatusHistory function's Format parameter:

 Variable
 Description

 $_Comment

 Displays the Comment on the asset status on the Asset Status History tile.

 $_CreateDate

 Displays the date and time that the status was assigned.

 $_CreateUser

 Displays the username of the Rent Manager user who assigned the specified status.

 $_Description

 Displays the Description of the status.

 $_Duration

 Displays the amount of time the asset spent in the current status. If the status is currently active, this output is blank.

 $_FromDate

 Displays the date and time the selected status began, as shown in the Date field on the Asset Status History tile.

 $_Status

 Displays the name of the selected status.

 $_ToDate

 Displays the date and time the selected status ended. If the status is currently active, this output is blank.

 $_UpdateDate

 Displays the date on which this status for the asset was last updated.

 $_UpdateUser

 Displays the username of the Rent Manager user who last updated the status.

 For more information, refer to Status History Function (Script) .

 Title Status History

 The following system variables can be used in the TitleStatusHistory function's Format parameter:

 Variable
 Description

 $_CreateDate

 Displays the date on which this title status was created and saved on the Asset Title Statuses page.

 $_CreateUser

 Displays the user who first created and saved this title status in the Asset Title Statuses page.

 $_Description

 Displays the Description of the title status.

 $_Duration

 Displays the number of days, hours, and minutes the title status has been selected on the asset's details page.

 If the stage is currently active, this displays as blank.

 $_FromDate

 Displays the date the title status was selected and saved on the asset's details page.

 $_Status

 Displays the name of the selected Title Status for the title status history item.

 $_ToDate

 Displays the date the title status was removed or changed and saved on the asset's details page.

 $_UpdateDate

 Displays the date on which this title status was last updated and saved in the Asset Title Statuses page.

 $_UpdateUser

 Displays the user who last updated and saved this title status in the Asset Title Statuses page.

 For more information, refer to Title Status History Function (Script) .

 Transactions

 The following system variables can be used in the Transactions function's Format parameter:

 Variable
 Description

 $_Amount

 Displays the amount of the transaction.

 $_ChargeType

 Displays the shortened charge type name.

 $_ChargeTypeDescription

 Displays the charge type description.

 $_Comment

Displays the Comment entered on the transaction.

 $_Comment25

 Displays only the first twenty-five characters of the Comment entered on the transaction.

 $_Date

Displays the date the transaction was posted.

 $_Description

 Displays the text in the transaction’s Description field.

 $_Reference

 Displays the Reference entered on the transaction.

 For more information, refer to Transactions Function (Script) .

 Utility Readings History

 The following system variables can be used in the UtilityReadingsHistory function's AsOfDate parameter:

 Variable
 Description

 $_chargeamt

 Displays the Amount that was charged, based on the reading.

 $_consumption

 Displays the calculated value of usage during the period between $_prevdate and $_currdate.

 $_currdate

 Displays the Current Reading Date of the most recent reading.

 $_currread

 Displays the value of the Current Reading .

 $_custaccno

 Displays the account number associated with a meter.

 $_metername

 Displays the name of the meter.

 $_prevdate

 Displays the Previous Reading Date .

 $_prevread

 Displays the value of the Previous Reading .

 More Information

 System variables used with the UtilityReadingsHistory function must be written in all lowercase.

 For more information, refer to Utility Readings History Function (Script) .

 Violation List

 The following system variables can be used in the ViolationList function's Format parameter:

 Variable
 Description

 $_CCRReference

 Displays the letter or number that precedes the text of the CC&R code, as entered in the CC&R Reference field on the Violation Details tile.

 $_CloseDate

 Displays the date on which the violation was closed, as entered in the Closed field on the Violation Details tile.

 $_Code

 Displays the name of the individual code or rule within the violation code group on the Violation Details scoreboard.

 $_Description

 Displays the text of the violation, as entered in the Description field on the Violation Details tile.

 $_ResolveAction

 Displays the text that specifies what the tenant must do to remedy the violation, as entered in the Action To Resolve field on the Violation Details tile.

 $_StageDate

 Displays the date on which a violation stage was escalated, as entered in the Escalation Date field on the Escalate Violation page.

 $_StageDueDate

 Displays the date by which a violation stage must be resolved to prevent further escalation, as entered in the Due Date field on the Escalate Violation page.

 $_StageName

 Displays the name of the violation stage, as shown in the Current Stage field on the Stage Information tile.

 $_StageNumber

 Displays the stage number of the violation stage, as shown in the # column on the View Stages page.

 $_ViolationDate

 Displays the date of the infraction, as entered in Violation Date on the Violation Details tile.

 For more information, refer to Violation List Function (Script) .

 Work Order

 The following system variables can be used in the WorkOrder function's Format parameter:

 Variable
 Description

 $_Property

 Displays the short name of the Property assigned to the work order line item.

 $_Unit

 Displays the name of the Unit assigned to the work order line item.

 $_Item

 Displays the inventory Item assigned to the work order line item.

 $_Description

 Displays the Description assigned to the work order line item.

 $_Vendor

 Displays the name of the Vendor assigned to the work order line item.

 $_Qty

 Displays the quantity assigned to the work order line item.

 $_CostPrice

 Displays the Cost assigned to the work order line item.

 $_TotalCostPrice

 Displays the total cost amount of all inventory items associated with the work order line item.

 Total Cost Price = Cost x Quantity

 $_SalePrice

 Displays the Sale Price per inventory item on the work order line item.

 $_TotalSalePrice

 Displays the Total sale amount of all inventory items associated with the work order line item.

 Total Sale Price = Sales Price x Quantity

 $_HasInvoiceLink

 Displays True if the Invoice Tenant option is checked on the work order line item. Displays False if it is not checked.

 $_HasVendorBill

 Displays True if the Vendor Bill option is checked on the work order line item. Displays False if it is not checked.

 $_HasOwnerBill

 Displays True if the Owner Bill option is checked on the work order line item. Displays False if it is not checked.

 $_HasPOLink

 Displays True if the PO option is checked on the work order line item. Displays False if it is not checked.

 For more information, refer to Work Order Function (Script) .
