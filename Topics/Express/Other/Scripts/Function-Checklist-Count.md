# Checklist Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Checklist-Count.htm

This function displays the number of items on the checklist of the selected service issue. This value may be filtered for items assigned to a selected Rent Manager user, or it may be used to show how many items on a checklist are either open or closed.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().ChecklistCount()]

 Displays information found on the issue's Check List Items page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [ChecklistCount( "ServiceIssueID" , "UsernameResponsible" , "IsClosed" )]

 ServiceIssueID

 Select the service issue with this Issue ID .

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [ChecklistCount("45")]

 Displays the number of checklist items in service issue number 45.

 UsernameResponsible

 Displays the number of checklist item(s) assigned to a Rent Manager user. Both outstanding items and items marked as Completed display.

 [ChecklistCount("45","ChrisS")]

 Displays the number of checklist items in service issue number 45 assigned to the user ChrisS.

 IsClosed

 Specify True to display the number of items in the checklist marked as Completed . Specify False to display the number of items in the checklist that are open. If no value is specified, the function defaults to True and displays all completed checklist items.

 [ChecklistCount("45","","True")]

 Displays the number of checklist items in service issue number 45 that have been completed.

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().ChecklistCount()]

 Displays the total number of checklist items on the selected service issue.

 [ServiceManager().ChecklistCount("45")]

 Displays the total number of checklist items on issue number 45.

 [ServiceManager().ChecklistCount("45","ChrisS")]

 Displays the number of all checklist items assigned to the user ChrisS on issue number 45.

 [ServiceManager().ChecklistCount("45","ChrisS","True")]

 Displays the number of completed checklist items assigned to the user ChrisS on issue number 45.

 [ServiceManager().ChecklistCount("45","ChrisS","False")]

 Displays the number of open checklist items assigned to the user ChrisS on issue number 45.

 [ServiceManager().ChecklistCount("45","","True")]

 Displays the total number of completed checklist items on issue number 45.

 [ServiceManager().ChecklistCount("45","","False")]

 Displays the total number of open checklist items on issue number 45.
