# Service Manager Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Service-Manager.htm

This class examines service issues and can be followed by either a Service Manager scripting function or another class associated with issues. Functions in this class typically evaluate fields on the service issue.

 More Information

 If you wish to examine service issue information for a prospect, you need to use the following syntax in prospect-type letters and reports:

 [Tenant().ServiceManager().Function]

 Example

 [ServiceManager().TotalHours()]

 Result

 Displays the number of hours spent on the selected issue on the Details tile, as calculated by time entered through rmAppSuite Pro check-ins or manually on the issue.

 Example

 [Tenant().ServiceManager().Count()]

 Result

 Displays the number of service issues linked to the tenant.

 Service issues linked to a tenant are found by searching for a specific tenant on the Issues page or searching for the issue(s) on the tenant's History/Notes pop-up.

 Class Parameters

 A single, optional parameter may be specified for this class: an index.

 Index

 An index allows you to return information about a specific service issue on an account by using a number to identify each issue listed. For example, if there are three service issues listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which issue you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first issue in the list.

 More Information

 The Service Manager class can be indexed only when it is a child class.

 Issues are pulled from different locations for each unique parent class. The following table provides the location from which phone number information for each parent class is found.

 Class
 Location

 Tenant

 The tenant's History/Notes pop-up.

 Property

 The property's History/Notes pop-up.

 Unit

 The unit's History/Notes pop-up.

 Tenant().ServiceManager(1).Category()]

 Displays the Category selected on the second oldest (the oldest service issue has a base index of 0 ) issue linked to the tenant.

 Recommended Classes

 This class is often followed by one of these recommended classes. Adding an additional class lets you use a function in the additional class.

 Function represents a scripting function that must be inserted into the script. For a complete list of functions, refer to Script Functions .

 Class
 Description

 Property

 [ServiceManager().Property(). Function ]

 This class retrieves data about the property linked to the service issue.

 Prospect

 [ServiceManager().Prospect(). Function ]

 This class retrieves data about the prospect linked to the service issue.

 Tenant

 [ServiceManager().Tenant(). Function ]

 This class retrieves data about the tenant linked to the service issue.

 Unit

 [ServiceManager().Unit(). Function ]

 This class retrieves data about the unit linked to the service issue.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 More Information

 Functions in the Service Manager class accept an ID parameter, which allows you to specify a service issue to examine. This ID is the Issue # of an issue.

 [ServiceManager.ClosedBy("53")]

 Displays the username of the Rent Manager user who marked Issue number 53 as Closed .

 Function
 Description

 Allowed To Enter

 [ServiceManager().AllowedToEnter()]

 Displays whether the service issue has the Allowed to Enter field checked. The function displays True if the field is checked and False if the field is not checked.

 Assigned Closed Date

 [ServiceManager().AssignedClosedDate()]

 Displays either the Closed date of the service issue that was either most recently entered by a user or the original Closed date (if the user has not changed it).

 Assigned Open Date

 [ServiceManager().AssignedOpenDate()]

 Displays either the Opened date of the service issue that was either most recently entered by a user or the original Opened date (if the user has not changed it).

 Assignee

 [ServiceManager().Assignee()]

 Displays the user selected in the Assigned To User field on the Issue details page.

 Category

 [ServiceManager().Category()]

 Displays the Category selected on the Details tile of the service issue.

 Checklist

 [ServiceManager().Checklist()]

 Displays the Check List Items tile of the service issue. The output is formatted as displayed below:

 Checklist Count

 [ServiceManager().ChecklistCount()]

 Displays the number of items on the Check List Items tile for the issue.

 Close Date

 [ServiceManager().CloseDate()]

 Displays the date on which the Close Date box was initially checked on the service issue in the Issue details page.

 Closed By

 [ServiceManager().ClosedBy()]

 Displays the user who initially checked Close Date on the service issue in the Issue details page.

 Count

 [ Class() .ServiceManager().Count()]

 Displays the number of service issues (both open and closed, by default) linked to an entity within a specified date range.

 To return a value, this function must be used with the Property, Tenant, Prospect, or Unit class preceding the ServiceManager class as represented by .Class in the syntax.

 Create Date

 [ServiceManager().CreateDate()]

 Displays the date and time on which the issue was created and first saved.

 Description

 [ServiceManager().Description()]

 Displays the text entered in the Description field on the issue's Description tile.

 Due Date

 [ServiceManager().DueDate()]

 Displays the Due Date on the Issue details page.

 Has Pets

 [ServiceManager().HasPets()]

 Displays whether a service issue linked to a property, tenant, prospect, or unit has the Pets field checked. The function displays True if the field is checked; otherwise displays False .

 History Count

 [ServiceManager().HistoryCount()]

 Displays the total number of history/notes on the service issue's History/Notes pop-up.

 Individual Hours

 [ServiceManager().IndividualHours()]

 Displays information regarding service tech hours entered on the issue's History/Notes pop-up, including the user who performed the work and the number of hours entered, per line item. The output is formatted as displayed below:

 Individual Hours Count

 [ServiceManager().IndividualHoursCount()]

 Displays the number of service tech hours line items listed on the issue's History/Notes pop-up.

 Is Closed

 [ServiceManager().IsClosed()]

 Displays True if the service issue of the selected property, tenant, prospect, or unit is closed. Otherwise, False displays.

 Is Confirmed

 [ServiceManager().IsConfirmed()]

 Displays whether the issue's scheduled date and time block is confirmed on the Maintenance Schedule page in Rent Manager Express . The function displays True if the issue is confirmed and False if the issue is not confirmed.

 Is Read

 [ServiceManager().IsRead()]

 Displays whether the service issue has been viewed. The function displays True if the issue has been read and False if it has not been read.

 Issue History

 [ServiceManager().IssueHistory()]

 Displays entries from the service issue's Issue History pop-up, which lists other issues associated with any linked entities.

 Links

 [ServiceManager().Links()]

 Displays any tenant, prospect, unit, and/or property to which the issue is linked.

 List

 [ServiceManager().List()]

 Displays a list of service issues linked to the property, tenant, prospect, or unit within a specified date range. The output is formatted as displayed below:

 Note

 [ServiceManager().Note()]

 Displays information about the most recent note (including service tech hours) on the issue's History/Notes tile.

 Number

 [ServiceManager().Number()]

 Displays the Issue ID assigned to the service issue.

 Priority

 [ServiceManager().Priority()]

 Displays the Priority selected on the service issue's Details tile.

 Project

 [ServiceManager().Project()]

 Displays the Project selected on the service issue's Details tile.

 Resolution

 [ServiceManager().Resolution()]

 Displays the Resolution as entered on the service issue's Description tile.

 Scheduled Date

 [ServiceManager().ScheduledDate()]

 Displays the date entered in the Scheduled field of the issue. If the issue was added via the Maintenance Schedule page in Rent Manager Express , the scheduled date and time block displays.

 Set History Filter

 [ServiceManager().SetHistoryFilter()]

 This function is designed to filter the total collection of service issue history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Signature On File

 [ServiceManager().SignatureOnFile()]

 Displays whether a service issue linked to a property, tenant, prospect, or unit has the Signature on file field checked. The function displays True if the field is checked; otherwise displays False .

 Status

 [ServiceManager().Status()]

 Displays the Status selected on the service issue's Details tile.

 Title

 [ServiceManager().Title()]

 Displays the Title as entered on the Issue details page.

 Total Hours

 [ServiceManager().TotalHours()]

 Displays the total hours spent on the service issue as displayed on the Details tile. This number is calculated by adding the amount of time any rmAppSuite Pro user has checked in, any time entered manually, and any time that added in the issue's History/Notes pop-up.

 Update Date

 [ServiceManager().UpdateDate()]

 Displays the most recent date and time that the service issue was updated and saved.

 User Defined Field

 [ServiceManager().UserDefinedField()]

 Displays the value of the issue-type user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [ServiceManager.UserDefinedField("Status")]

 Displays the value of the Status user defined field.

 Vendor

 [ServiceManager().Vendor()]

 Display the Vendor selected on the service issue's Details .

 Work Order

 [ServiceManager().WorkOrder()]

 Displays information from a line item on the service issue's Work Orders Table tile.

 Work Order Count

 [ServiceManager().WorkOrderCount()]

 Displays the number of line items on the service issue's Work Orders Table tile.
