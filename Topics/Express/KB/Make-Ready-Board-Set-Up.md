# Set Up the Make-Ready Board for Unit Turnover

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Make-Ready-Board-Set-Up.htm

The unit turnover process involves inspecting, repairing, and updating units after a tenant moves out to prepare for the next tenant to move in. In Rent Manager , the make-ready board helps you streamline the turnover process by tracking inspection information and service issues related to each unit's turnover process. The make-ready board also helps you visualize where each unit is at in the process. Before using the make-ready board, you must set up the different make-ready actions and workflows that apply to your various units. This topic guides you through establishing your make-ready setups.

 Before You Begin

 Before starting your unit turnover processes on the make-ready board, you need to establish a few setups in Rent Manager . Each setup item is described in the table below. If you have already set up everything you need these items, proceed to Step 1: Create Make-Ready Actions .

 Option
 Description

 Service Issue Fields

 Service issues use various customizable options to help track urgency, where the issue is in the resolution process, and the type of issue. You can add, delete, and modify the options available for each of the following service issue fields:

 Priorities

 The urgency level of the issue (e.g., Low , High , etc.), indicating how promptly the issue should be addressed. For more information, refer to Add an Issue Priority .

 Categories

 The service issue category that best identifies the type of issue (e.g., Maintenance , Plumbing , etc.). For more information, refer to Add an Issue Category .

 Statuses

 The current state of the individual service issue (e.g., New , In Progress , etc.), indicating its progress to resolution. For more information, refer to Add an Issue Status .

 Inspection Templates

 When creating inspections for a make-ready process, you select from an existing inspection form (also called an inspection template) created in Rent Manager . For more information, refer to Inspection Templates (Page) .

 Checklist Templates

 The service issues you can add to your make-ready process can have a list of tasks—called checklists—to complete for that specific issue. If there is a checklist of tasks that you commonly use for multiple issues, you can create a template of that checklist which can then be added to the issue all at once rather than manually adding each item one at a time. For more information, refer to Add a Checklist Template .

 Step 1: Establish Make-Ready Actions

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Make ready actions
 Add, View

 For more information, refer to Control User Access .

 Make-ready actions are the individual tasks that need to be completed during the unit turnover process. These actions display as columns on the make-ready board and are used to organize similar issues and inspections in one column. Each make-ready action can be assigned to one or more make-ready templates and can be organized in sequential order.

 Create Make-Ready Actions

 While service issues and inspections cover the more granular steps in the unit turnover process, make-ready actions allow you to group them together in larger categorical steps. This helps you visualize each major step in the process and better organize each task.

 For example, if you have a step in your make-ready process that is made up of multiple smaller tasks, the main step would be the make-ready action and each smaller task in that step would be the service issues. So a make-ready action called Standard Upkeep could hold multiple service issues for routine turnover maintenance actions, such as one changing air filters and another for replacing batteries in smoke detectors.

 When creating your make-ready actions, you are just creating the sections that show on the make-ready board. While you do not have to use every action on every make-ready process, the same actions are available for use on each make-ready process and display the same for each as well. Service issues and inspections associated with the action are covered later in the topic.

 To add a make-ready action, do the following:

 -
 Go to arrow_forward Services arrow_forward Service Setup arrow_forward Make Ready arrow_forward Make Ready Actions .
The Make Ready Actions page displays.

 -
 Click Add Action .
The Make Ready Action Add pop-up displays.

 -
 Enter information in the following fields:

 Field
 Description

 Name

 The name of the task that needs to be performed (e.g., Move Out Inspection , Maintenance/Repair , Re-Key Locks ).

 Description

 A more detailed explanation of the action (e.g., Inspection of the unit to determine required maintenance ).

 -
 Click Save .
The action is created and added to the list.

 -
 Repeat for all actions that need to be performed during any unit turnover process.

 Establish the Action Order

 The order of your make-ready actions on the Make Ready Actions page determines the order of the columns on the make-ready board. Click and drag the icon for each action item in the list and drop them into the same sequential order in which they need to be completed for the unit turnover process.

 For example, set the order of actions with the first action to complete at the top of the list and the final action at the bottom as shown in the image below.

 Based on that order, the columns on the make-ready board display in the same order from left to right (shown in the image below).

 Step 2: Create Make-Ready Templates

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Make ready templates
 Add, View

 For more information, refer to Control User Access .

 Make-ready templates are comprised of issues or inspections and define a workflow that can be used to quickly initiate the turnover process for a unit. Make-ready actions classify and determine the order in which issues and inspections display on the make-ready board for all workflows, while make-ready templates determine which actions apply to a specific workflow and each issue and/or inspection that is created for that workflow when the turnover process is started.

 For example, you may have some units that need repairs and others that do not. You can create a template named 2B/1B Unit that does not include the make-ready action for repairs, and a separate template named 2B/1B Unit - Needs Repair that does include the make-ready action for repairs. Then you can assign units to either one accordingly when starting the turnover process depending on whether or not repairs are needed.

 Multiple templates can be created to account for how processes may vary between each property as well as each type of unit. After creating a template, you can use it whenever you need to prepare a unit for occupancy.

 To create a make-ready template, do the following:

 -
 Go to arrow_forward Services arrow_forward Make Ready arrow_forward Make Ready Templates .
The Make Ready Templates page displays.

 -
 Click Add .

 -
 In the top section, enter information into the following fields:

 Field
 Description

 Name

 A unique name for the template as it displays when assigning units to a make-ready process. It is recommended that the name make it clear when this template should be selected (e.g., 2 Bed/2 Bath Turnover , Studio make-ready , etc.).

 Enforce Action Sequence

 To require that the actions in the template must be completed in the order displayed, check this option. If unchecked, actions in the template can be completed in any order.

 Properties

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 The properties or at which this make-ready template is available. Units can be assigned only to make-ready templates that have their property selected in this field. You can select each property individually, or select a group of properties in the Group field.

 -
 In the Make Ready Items section, click the drop-down arrow next to Add and select one of the following:

 Option
 Description

 Add Service Issue

 Creates an issue for each service issue action item when a make-ready process is started with this template selected. The issue displays in the associated action column of the make-ready board. For detailed field descriptions, refer to Add Service Issue Item .

 Add Inspection Item

 Creates an inspection for each inspection action item when a make-ready process is started with this template selected. The inspection displays in the associated action column of the make-ready board. For detailed field descriptions, refer to Add Inspection Item .

 Add From Project Template

 If you have an existing project template that is similar to your unit turnover process, you can convert that project into a make-ready template. For detailed field descriptions, refer to Add Service Issue Item .

 -
 Enter the information for that service issue, inspection item, or project template into the available fields.

 -
 Add as many actions to the make-ready template as needed for the workflow.

 -
 Click Save .
The make-ready template is created.

 -
 Repeat for all workflows that need to be performed for your various properties and units.

 Add Service Issue Item

 If you selected Add Service Issue above, the following fields are available:

 Field
 Description

 Action

 The make-ready action that best fits the purpose of this service issue. For example, if this service issue is for changing filters, select the make-ready action that includes this task (such as Upkeep & Maintenance ).

 Issue

 A one-line summary that also acts as the title of the issue, such as Replace door locks .

 Description

 More detailed description about the service issue's purpose and any other important information.

 Category

 The service issue category that best identifies the type of issue (e.g., Maintenance , Plumbing , etc.).

 Priority

 The urgency level of the issue (e.g., Low , High , etc.), indicating how promptly the issue should be addressed.

 Status

 The current state of the individual service issue (e.g., New , In Progress , etc.), indicating its progress to resolution.

 Assigned To

 The Rent Manager user designated to handle and complete the service issue. Select <Property Default> to automatically assign to the user selected on each associated property's details page in the Assign Service Issues field.

 Vendor

 If applicable, the vendor associated with the issue. If no vendors or multiple vendors are involved, select <Unassigned> .

 Due Date Offset

 The number of days from the make-ready process's start date that the service issue is due. For example, if you enter 3 and the make-ready process's start date is 10/16/ 2026 , the service issue's Due field is set to 10/19/ 2026 .

 Scheduled Date Offset

 The number of days from the make-ready process's start date that the service issue is scheduled to begin work. For example, if you enter 2 and the make-ready process's start date is 12/17/ 2026 , the service issue's Scheduled field is set to 12/19/ 2026 .

 Notify when ready

 If this option is checked, the user selected in the Assigned To field receives an notification that the service issue is ready for them to begin. When the make-ready process is started, the associated service issues are created and the notification goes out to the assignee(s) at that time.

 If the option Enforce Action Sequence is selected for the make-ready template, this notification instead goes out to the assignee(s) after all issues and inspections scheduled before their service issue have been completed.

 Checklist

 If there are multiple tasks that need to be completed for the service issue, you can create a checklist for tracking those tasks.

 To manually add checklist items individually, click Add Checklist Item . To automatically add all items in predefined checklist template, click Add Checklist Items From Template . For more information, refer to Add a Checklist Item to an Issue .

 Add Inspection Item

 If you selected Add Inspection Item above, the following fields are available:

 Field
 Description

 Action

 The make-ready action that best fits the purpose of this inspection. For example, if the inspection is to check the condition of recently vacated units, select the make-ready action that includes this inspection (such as Move-out Inspection ).

 Inspection Templates

 The inspection form template to use for this inspection. Select <Unit Default> to automatically use the inspection template selected on the associated unit's details page in the Inspection Template field.

 Inspection Description

 More detailed information regarding the inspection being performed.

 Inspector

 The user who is performing the inspection or ensuring the inspection is completed.

 Inspection Type

 The type or purpose of the inspection being performed, such as Move-Out or Post Maintenance .

 Inspection Status

 The current state of the inspection to specify its progress in the inspection process, such as New or In Progress .

 New Issues Action

 The make-ready action to which any new service issues that were created as part of this inspection will be assigned. Alternatively, select <Exclude from Make Ready> if you do not want to link any issue created from a make-ready inspection.

 Scheduled Date Offset

 The number of days from the inspection date that the inspection is scheduled to start work.

 For example, if you enter 3 and the inspection is created for 10/16/ 2026 as the start date, the scheduled date on the inspection is automatically set to 10/19/ 2026 . If you enter 0 , the Scheduled date is set to the same date as the make-ready start date.

 Notify when ready

 If this option is checked, the user selected in the Inspector field receives an notification that the inspection is ready for them to start work. When the make-ready process is started, the associated inspections are created and the notification goes out to the inspector(s) at that time.

 If the option Enforce Action Sequence is selected for the make-ready template, this notification instead goes out to the inspector(s) after all issues and inspections scheduled before their inspection have been completed.

 Add Items from Project Template

 If you select Add From Project Template the fields below are available. For more information, refer to Workflow Templates (Page) .

 Field
 Description

 Project Template

 The project template from which to add service issues for this make-ready template. Each issue associated with the template populates in the section below.

 Default Action

 The make-ready action that best fits the purpose of most of the issues in this project template. For example, if this project is for updating ILS information, select the make-ready action that includes this task (such as Update Listing Info ). All issues in the list with the Action column set to <Default> are applied to this default action.

 If there are specific issues in the list that would better apply to a different make-ready action, select that option in the issue's associated Action column.

 Next Steps

 Now that you have set up your make-ready actions and templates, you are ready to start a make-ready process and use the make-ready board. The recommended next steps are described in the table below.

 Action
 Description

 Start a make-ready process

 The make-ready tool helps you prepare vacant units for occupancy and to give an up-to-date visual representation of the unit turnover process. Once a unit's make-ready process is started, all associated inspections and issues are created and added to the make-ready board. For more information, refer to Assign a Make Ready Process .

 Monitor unit turnover

 The make-ready board displays units that are assigned a make-ready process with color-coded statuses for the associated service issues and inspections. From here, you can view each issue and inspection associated with each unit's turnover process, as well as filter the page to display only units that meet specified criteria. For more information, refer to Make Ready Board (Page) .

 Related Preferences

 You can determine which issue statuses display a make-ready item as the yellow In Progress make-ready status in your system preferences. For more information, refer to Make Ready (System Preferences) .
