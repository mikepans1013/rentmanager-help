# Add a Workflow Project

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Workflow-Project-Add.htm

A workflow project is used to organize and coordinate your team to accomplish a major goal. Each workflow project is composed of stages, which are distinct phases of the project. Each stage contains steps (service issues and/or tasks), and as each step is closed, the project progresses toward completion. By using workflow projects, multiple team members can be assigned to steps within the same project and collaborate effectively, each handling their assigned work while staying informed about the overall progress. This level of organization is beneficial when coordinating complex activities, such as renovations, new-tenant workflows, or employee onboarding. Additionally, you can require steps to be completed in the specified order to ensure the workflow project is accomplished in the correct sequence.

 Related Privileges

 Depending on the steps you wish to add to the workflow project, you need the privileges for either Tasks, Issues, or both.

 Group
 Privilege
 Column

 Setup

 Tasks

 Add

 Service Manager

 Issues

 Add, View

 Workflow Projects

 Add, View, Edit

 For more information, refer to Control User Access .

 Step 1: Create the Workflow Project

 To add a workflow project in Rent Manager , do the following:

 -
 Go to arrow_forward Services arrow_forward Workflows arrow_forward Workflow Projects .
The Workflow Projects page displays.

 -
 Click Add Workflow Project .
The Add Workflow Project pop-up displays.

 -
 In the How would you like to set up your workflow project? section, select Use a template or Start from scratch .

 Related Privileges

 To select Use a template , the following privilege is required:

 Group
 Privilege
 Column

 Service Manager
 Workflow Templates
 Add

 For more information, refer to Control User Access .

 -
 Enter the following information:

 Option
 Description

 Workflow Template

 The premade configuration that automatically populates the workflow project with settings, steps, issues, and tasks from the selected template. This field is available only if you selected Use a template in the previous step.

 More Information

 You must have access to at least one of a workflow template's associated properties to generate a workflow project from it. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Workflow Project Type

 The entity type that the workflow project is associated with (e.g., Property , Tenant , Vendor ). After selecting the type, in the Link to field, select the specific entity associated with the workflow project. For example, if you select a Workflow Project Type of Property , enter the name of property to link to.

 Workflow Project Name

 The name of the workflow project (e.g., Bathroom Renovation , New Employee Training , Repave Parking Lot , and so on).

 More Information

 If you create this workflow project from a workflow template with a Workflow Project Naming Convention , this field automatically populates with a name based in that template's settings. For more information, refer to Workflow Projects and Templates .

 Description

 A brief explanation of the purpose of the workflow project or additional details about it.

 Start Date

 The start date of the workflow project. This date defaults to the current date.

 Due Date

 The day by which all steps in the workflow project should be complete.

 -
 Click Save .
The workflow project is created and the details page displays.

 More Information

 If you selected a workflow template with issue-type steps, and you have issue-type user defined fields (UDFs) that are marked as Required , the Issues: Required UDFs pop-up displays after you click Save . You can decide to enter values for the required UDFs either All at once or Individually . After making your selection, enter a Value for each UDF that displays. After entering values, click Save to finish creating the workflow project.

 Step 2: Configure settings

 After creating your workflow project, you can update the optional settings that determine various aspects of the project’s functionality. These settings include the sequence in which steps are completed in and the default values inherited by each step added to the project. By assigning these values before adding the steps, you can eliminate the need to make manual selections for every task or service issue. This saves you time and streamlines your workflow projects.

 More Information

 If you create this workflow project from a workflow template with established Default Issue Values and Default Task Values , the corresponding sections in this project automatically populate with the selections made in that template's settings. For more information, refer to Add a Workflow Template .

 To configure settings for a workflow project, do the following:

 -
 On the workflow project's details page, click Settings in the top right corner.
The Settings pop-up displays.

 -
 In on the General tile, configure the following settings as needed:

 Field
 Description

 Show workflow project on entity details

 Add a tile that displays an overview of the workflow project on the selected entity's details page. This allows users to gain insight about active projects linked to any entity they're viewing in Rent Manager .

 More Information

 This field displays only if the workflow project was created from a workflow template, and has a Workflow Project Type selected.

 Steps must be completed in order

 Require all stages, and the issues and tasks in those stages, to be completed in the order they are displayed in the workflow project. For example, you must start with the first stage in the workflow project and complete all the steps within that stage in the order they are listed before you can start the second stage.

 -
 Click Default Issue Values to expand the tile, then assign values the following fields:

 Field
 Description

 Assigned To

 The user responsible for completing the service issue. For example, for a maintenance-related workflow project, you might wish to assign all issues to a service tech manager who will oversee the project's work.

 Category

 The default type of service issue (e.g., Property Wide , Maintenance , Electrical , Plumbing , Emergency , Office ). For more information, refer to Issue Categories (Page) .

 Jobs

 The job used to track finances associated with the workflow project. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Priority

 The default urgency you assign to a service issue (e.g., Critical , High , Medium , Low ). For more information, refer to Issue Priorities (Page) .

 Status

 The default state service issues start in (e.g., New , Work in Progress , Resolved , Unresolved ). For more information, refer to Issue Statuses (Page) .

 Vendor

 The vendor associated with the work defined in the issue’s Work Order tile.

 Leave this field as <Unassigned> if multiple vendors are involved or you do not wish to assign a default vendor to new service issues.

 -
 Click Default Task Values to expand the tile, then assign values the following fields:

 Field
 Description

 Actions

 The action that needs to be taken to complete this task (e.g., Write Letter , Enter an Invoice , Post Utilities ). The options that display are from a predetermined list of actions that can be performed in Rent Manager .

 Assigned To

 The user responsible for completing the task.

 -
 To automatically load the issues and tasks established in the selected Workflow Template into the workflow project, click Add Steps from Workflow Template . The Start Date you select becomes the default Open and Due date for all issues and tasks added by this action. This option is only available if the project is created from scratch.

 More Information

 Selecting this option does not link the workflow project with a workflow template. Consequently, it does not display on the workflow board associated with the selected workflow template.

 -
 Click Save .
The workflow project's settings are updated.

 Step 3: Add Stages and Steps

 After you have created your project and configured its settings, you can add the stages and steps that must be finished to complete it. Once stages and steps are added to the project, you can use to click and drag them into the correct sequence. Steps can also be moved from one stage to another using this action.

 Add a New Stage

 A stage is a distinct phase in a workflow project that issues and tasks are grouped in. For example, in a project to rehab an apartment, each stage might represent a room within the apartment to be renovated. You can add as many stages to a workflow project as are needed to complete the goal.

 More Information

 New stages cannot be added to workflow projects created from a template. To add new stages, you must select Start from scratch when creating your workflow project.

 To add a new stage, do the following:

 -
 On the selected workflow project's details page, click Add New Stage .
The new Stage tile displays.

 -
 Next to the Stage heading, update the stage's name to reflect the work involved in this phase.

 -
 Optionally, click Custom Color to assign the stage an identifying color. You can choose from default Theme Colors , or choose a Custom Color using the color selector. This option is available only if the workflow project is created from scratch.

 -
 Click Save .
The new stage is added to the workflow project.

 Add Steps

 Related Privileges

 If you create this workflow project from a workflow template with the setting Restrict editing on workflow projects with this workflow template enabled, you are unable add or remove steps from the project unless you have the following privilege:

 Group
 Privilege
 Column

 Service Manager
 Edit projects that are using a restricted workflow template
 Enabled

 For more information, refer to Control User Access .

 After creating stages, you can add service issues and tasks to them to build out the work required to complete the stage. For example, in a stage called Kitchen Renovation , you might have a service issue for removing the old cabinets, another for re-tiling the floor, and so on. By adding steps for each element involved in the stage, you can specify details and assign responsibilities, keeping the workflow efficient and organized.

 Add an Issue

 Issues in Rent Manager are used to organize and track work your service team performs. Each service issue can be linked to a particular entity, associated with work orders and invoices, involve a detailed checklist to complete, and more. In a workflow project, use issue-type steps rather than tasks when the work involved is more complex.

 To add an issue-type step, do the following:

 -
 On the selected workflow project's details page, in the relevant stage, click Add Step arrow_forward Issue .
An issue line item is added to the stage.

 -
 Enter information in the following columns:

 Column
 Description

 Step

 The name of the issue.

 Status

 The condition that describes the current progress of the issue, such as New or Waiting for Parts .

 Category

 The classification that best describes the type of issue being created.

 Assigned To

 The user responsible for completing the service issue.

 Open

 The earliest date that the issue can be available to service technicians.

 Due

 The date by which the issue must be completed.

 -
 To add optional details to the issue, click   arrow_forward   Edit . For more information, refer to Workflow Project Issue Details (Pop-Up) Add an Issue

 -
 Click Save .
The issue-type step is added to the stage.

 More Information

 If you have issue-type user defined fields (UDFs) that are marked as Required , the Issues: Required UDFs pop-up displays after you click Save . You can decide to enter values for the required UDFs either All at once or Individually . After making your selection, enter a Value for each UDF that displays. After entering values, click Save to add the values to each issue's UDFs.

 Add a Task

 Tasks in Rent Manager are used to track one-time actions that help keep your schedule organized. Each task can involve completing a specific action and can also be configured to alert its assigned user with a reminder. In a workflow project, use tasks rather than issues when the work involved is more simple or requires an action to be taken within Rent Manager (e.g., writing a letter or entering an invoice).

 To add a task-type step, do the following:

 -
 On the selected workflow project's details page, in the relevant stage, click Add Step arrow_forward Task .
A task line item is added to the stage.

 -
 Enter information in the following columns:

 Column
 Description

 Step

 The name of the task.

 Action

 The work required to complete the task.

 Assigned To

 The user responsible for completing the task.

 Due

 The date by which the task must be completed.

 -
 To add optional details to the task, click   arrow_forward   Edit . For more information, refer to Workflow Task Details (Pop-Up) .

 -
 Click Save .
The task-type step is added to the stage.

 Once you add as many stages and steps as are needed, click Save to apply changes to the workflow project.
