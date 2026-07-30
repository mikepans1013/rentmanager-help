# Add a Workflow Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Workflow-Template-Add.htm

Workflow templates in Rent Manager are reusable, pre-configured organizational tools used to create workflow projects. Each workflow template is composed of stages, which are distinct phases of the project. Each stage contains steps (service issues and/or tasks), and as each step is closed, the project progresses toward completion. When a workflow project is created from a template, it inherits these stages and steps, along with any pre-filled information and settings. This reduces setup time and ensures consistency across similar projects. Additionally, workflow templates can be configured to display as workflow boards, which are Kanban-style boards that provide a visual overview of each workflow project generated from specified workflow templates.

 More Information

 In addition to the steps outlined below, you can create a project template from an existing project that already contains your desired setup. For more information, refer to Workflow Project Details (Page) .

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Workflow Templates
 Add, View, Edit

 For more information, refer to Control User Access .

 Step 1: Create the Project Template

 To add a project template, do the following:

 -
 Go to arrow_forward Services arrow_forward Workflows arrow_forward Workflow Templates .
The Workflow Templates page displays.

 -
 Click   Add Workflow Template .
The Add Workflow Template pop-up displays.

 -
 Enter information or make selections in the following fields:

 Field
 Description

 Workflow Template Name

 The name of the new workflow template (e.g., Kitchen Remodeling ).

 Description

 A brief explanation of the workflow template's purpose (e.g., Complete all steps in order when remodeling kitchens ).

 Workflow Template Type

 The entity type that the workflow template is associated with (e.g., Property , Tenant , Vendor , etc.).

 Properties

 The property(s) an entity must be associated with in order to be linked to a workflow project generated from this template. If multiple properties are selected, the linked entity must be associated with at least one of the properties. For example, suppose the Workflow Template Type selected is Unit and, in the Properties field, Riverview Apartments is selected. When you create a workflow project from this template, you can only link it to units at Riverview Apartments.

 Additionally, a user must have access to at least one of the properties to utilize the workflow template. Click Select Properties to select multiple properties at once, or to add them via property group.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Workflow Project Naming Convention

 The value that automatically populates as the name of workflow projects generated from this workflow template. By default, this field populates with [Name()] followed by the value entered in the Workflow Template Name field once both the name and Workflow Template Type are selected. To customize this field further using scripted values, click Open Script Builder .

 More Information

 If Rent Manager scripting fields are inserted, when a workflow project is generated from this template, this field populates with information from the entity linked to the project. For example, if the field in the workflow template displays [Name()] Lock Replacement , and a workflow project is generated from this template for the property Riverview Apartments, the name of the workflow project is Riverview Apartments Lock Replacement . For more information, refer to Scripting .

 Enable visual board view

 When enabled, this workflow template becomes available as a board on the Workflow Boards page. Workflow projects generated from the template display on that page. For more information, refer to Workflow Boards (Page) .

 Restrict editing on workflow projects with this workflow template

 When enabled, users cannot add or edit stages and steps in workflow projects generated from the template. Use this setting to ensure that only the stages and steps specified in the template are completed on workflow projects. Users with the following privilege can override this setting:

 Related Privileges

 Group
 Privilege
 Column

 Service Manager
 Edit projects that are using a restricted workflow template
 Enabled

 For more information, refer to Control User Access .

 Show workflow projects on entity details.

 When enabled, an overview of workflow projects generated from the template displays in a tile on the linked entity's details page. This allows users to gain insight about active projects linked to any entity they're viewing in Rent Manager .

 This field displays only if a Workflow Template Type selected.

 -
 Click Save .
The workflow template details page displays.

 Step 2: Configure Settings

 After creating your workflow template, you can update the optional settings that determine various aspects of the template’s functionality. These settings affect, among other things, the sequence steps must be completed in and the default values that are inherited by each step that is added to the template. By assigning these values before adding the steps, you can eliminate the need to make manual selections for every task or service issue.

 To configure settings for a workflow project template, do the following:

 -
 In the workflow template details page header, configure the following options:

 Field
 Description

 Active

 When enabled, the workflow template can be used to generate workflow projects.

 Steps must be completed in order

 When enabled, all stages, issues, and tasks in workflow projects generated from the template must be completed in the order they are displayed. For example, enabling this option requires that Service Issue A and Task B are both completed before Service Issue C can be completed.

 -
 Click Settings in the top right corner.
The Settings pop-up displays.

 -
 Click Default Issue Values to expand the tile, then assign values the following fields:

 Field
 Description

 Assigned To

 The user responsible for completing the service issue. For example, for a maintenance-related workflow template, you might wish to assign all issues to a service tech manager who will oversee the project.

 Category

 The default type of service issue (e.g., Property Wide , Maintenance , Electrical , Plumbing , Emergency , Office ). For more information, refer to Issue Categories (Page) .

 Jobs

 The job used to track finances associated with the workflow project. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Priority

 The default urgency you assign to a service issue (e.g., Critical , High , Medium , Low ). For more information, refer to Issue Priorities (Page) .

 Status

 The default current progress of a service issue (e.g., New , Work in Progress , Resolved , Unresolved ). For more information, refer to Issue Statuses (Page) .

 Vendor

 The vendor associated with the work defined in the issue’s Work Order tile. When you select a vendor for this field, the Vendor column is removed from the Work Order tile of a new issue.

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
 Click Save .
The workflow template's settings are updated.

 Step 3: Add Stages and Steps

 After you have created your template and configured its settings, you can add the stages and steps that are added to workflow projects generated from it. Once stages and steps are added to the project, you can use to click and drag them into the correct sequence. Steps can also be moved from one stage to another using this action.

 Add a New Stage

 A stage is a distinct phase in a workflow template that issues and tasks are grouped in. For example, in a project to rehab an apartment, each stage might represent a room within the apartment to be renovated. You can add as many stages to a workflow template as are needed to complete the goal. Additionally, if Enable visual board view is selected in the Settings pop-up, each stage displays as a column for this template on the Workflow Boards page.

 To add a new stage, do the following:

 -
 On the selected workflow template’s details page, click   Add New Stage .
The new Stage tile displays.

 -
 In the Stage field, update the stage's name to reflect the work involved in this phase.

 -
 Optionally, click Custom Color to assign the stage an identifying color. You can choose from default Theme Colors , or choose a Custom Color using the color selector. The select color displays on stages in workflow projects generated from the template and, if Enable visual board view is selected, in the corresponding workflow board's columns.

 -
 Click Save .
The new stage is added to the workflow template.

 Add Steps

 After creating stages, you can add service issues and tasks to them to build out the work required to complete the stage. For example, in a stage called Kitchen Renovation , you might have a service issue for removing the old cabinets, another for re-tiling the floor, and so on. By adding steps for each element involved in the stage, you can specify details and assign responsibilities, keeping the workflow efficient and organized. Additionally, if Enable visual board view is selected in the Settings pop-up, each step can display for workflow projects of this template type on the Workflow Boards page.

 Add an Issue

 Issues in Rent Manager are used to organize and track work your service team performs. Each service can be linked to a particular entity, associated with work orders and invoices, involve a detailed checklist to complete, and more. In a workflow template, use issues rather than tasks when the work involved is more complex.

 To add a issue step, do the following:

 -
 On the selected workflow template's details page, in the relevant stage, click Add Step arrow_forward Issue .
An issue line item is added to the stage.

 -
 Enter information in the following columns:

 Column
 Description

 Step Name

 The name of the issue.

 Status

 The condition that describes the current progress of the issue, such as New or Waiting for Parts .

 Assigned To

 The user responsible for completing the service issue.

 Due

 The number of days after the project Start Date that the issue must be completed. For example, if 3 is entered, and a project's Start Date is 1/1/ 2026 , the issue is due on 1/4/ 2026 . Enter 0 to have the issue due the same day as the project Start Date .

 Category

 The classification that best describes the type of issue being created.

 Open

 The number of days after the project Start Date that the issue becomes available. For example, if 3 is entered, and a project's Start Date is 1/1/ 2026 , the issue is opened on 1/4/ 2026 . Enter 0 to have the issue open the same day as the project Start Date .

 -
 To add optional details to the issue, click   arrow_forward   Details . For more information, refer to Workflow Template Issue Details (Pop-Up) .

 -
 Click Save .
 The issue is added to the stage.

 Add a Task

 Tasks in Rent Manager are used to track one-time actions that help keep your schedule organized. Each task can involve completing a specific action and can also be configured to alert its assigned user with a reminder. In a workflow template, use tasks rather than issues when the work involved is more simple or requires an action to be taken within Rent Manager (e.g., writing a letter or entering an invoice).

 To add a task step, do the following:

 -
 On the selected workflow template’s details page, in the relevant stage, click   Add Step   arrow_forward   Task .
A task line item is added to the stage.

 -
 Enter information in the following columns:

 Column
 Description

 Step Name

 The name of the task.

 Action

 The work required to complete the task.

 Assigned To

 The user responsible for completing the task.

 Due

 The number of days after the project Start Date that the task must be completed. For example, if 3 is entered, and a project's Start Date is 1/1/ 2026 , the task is due on 1/4/ 2026 . Enter 0 to have the task due the same day as the project Start Date .

 -
 To add optional details to the task, click   arrow_forward   Details . For more information, refer to Workflow Task Details (Pop-Up) .

 -
 Click Save .
The task is added to the stage.
