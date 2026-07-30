# Checklist Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Checklist.htm

This function displays the checklist of the selected service issue.

 If no custom format is specified, Rent Manager 's default formatting displays all items in the checklist, their status, the description of the item, and the user to whom the item is assigned. If the item is complete, the user who marked it complete and the time and date when it was completed display.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().Checklist()]

 Displays information found on the Check List Items tile for the issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Checklist( "ServiceIssueID" , "ChecklistIndex" , "UsernameResponsible" , "IsClosed" , "Format" )]

 ServiceIssueID

 Select the service issue with this Issue ID . If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Checklist("53")]

 Displays the checklist in service issue number 53.

 ChecklistIndex

 Displays a specific line item in the checklist. The first item in the checklist has an index value of 0 , the second item has an index value of 1 , and so on.

 [Checklist("53","1")]

 Displays the first additional checklist line item in service issue number 53.

 UsernameResponsible

 Displays the checklist item(s) assigned to a Rent Manager user. Both outstanding items and items marked as Completed display.

 More Information

 A user who only marks an issue as Completed is not counted as the responsible user. This parameter displays the user listed in the User Responsible column in the Checklist section of the selected issue.

 [Checklist("53","","ChrisS")]

 Displays the checklist items in service issue number 53 that are assigned to the user ChrisS.

 IsClosed

 Specify True to display the number of items in the checklist marked as Completed . Specify False to display the number of items in the checklist that are open. If no value is specified, the function defaults to True and displays all completed checklist items.

 [Checklist("53","","","True")]

 Displays the checklist items in service issue number 53 that have been completed.

 Format

 List details of each checklist using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the completion status, user who completed the item, the date and time of completion, the item's description, and the user assigned to the item variables separated by tabs:

 "\t$_IsCompleted \t$_CompletedByUser \t$_CompletedDate \t$_Description \t$_AssignedToUser \n"

 Variables

 The following variables may be used in the Format parameter.

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

 Script Examples

 The following scripts show various ways the function can be used:

 [ServiceManager().Checklist()]

 Displays the checklist on the first service issue of the selected entity.

 [ServiceManager().Checklist("53","0")]

 Displays the first checklist item on issue number 53.

 [ServiceManager().Checklist("53","1")]

 Displays the first additional checklist item on issue number 53.

 [ServiceManager().Checklist("53","1","ChrisS")]

 Displays the first additional checklist item on issue 53 assigned to the user ChrisS.

 [ServiceManager().Checklist("53","","","True")]

 Displays all checklist items marked as Completed on issue number 53.

 [ServiceManager().Checklist("53","","ChrisS","True")]

 Displays all checklist items assigned to the user ChrisS that are marked as Completed on issue number 53.

 [ServiceManager().Checklist("53","","ChrisS","False")]

 Displays all checklist items assigned to the user ChrisS that are open on issue number 53.

 [ServiceManager().Checklist("53","","","","\t$_CompletedDate\t$_Description\n")]

 Displays the completion date (if any) and description of each checklist item on issue number 53, with tabs separating the values and a new line for each checklist item.

 The output displays as shown below:
