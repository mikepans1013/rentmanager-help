# Eviction Workflow Setup

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Eviction-Workflow-Setup.htm

Eviction workflows in Rent Manager allow you to track and manage the multistep eviction process from start to finish. Each workflow can contain multiple stages, customized payment settings, and automated letter actions in order to tailor each workflow to fit the various eviction legal processes you may have. To accommodate circumstances where the eviction process is different depending on the property, you can create as many workflows as you need and assign them to the applicable properties.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Manage Eviction Workflows
 Enabled

 For more information, refer to Control User Access .

 Step 1: Enter Workflow Setup Information

 More Information

 A property can only have one eviction workflow assigned at a time. Before you can assign a new workflow to a property, you must first deselect the property from the Default workflow.

 To create a new eviction workflow set up, do the following:

 -
 Go to   arrow_forward Rental Info arrow_forward   Rental Info Setup arrow_forward Evictions arrow_forward Eviction Workflows .
The Eviction Workflows page displays.

 -
 At the top of the page, click Add Workflow .

 -
 In the Workflow Name field, enter the name you wish to assign to the eviction workflow.

 -
 Click Select Properties to choose which properties the workflow is assigned to.
The Properties pop-up opens.

 -
 Check all applicable properties from the list, or click Add by Group to add properties that are part of a property group. Properties can only be added to one eviction workflow.

 -
 Click OK .
The Properties pop-up closes, and when an eviction is started at the chosen properties, this is the eviction workflow used.

 Step 2: Set Up Workflow Stages

 After naming your new workflow and selecting the properties that can use it, you now can start creating your stages. Workflow stages are the specific steps taken during the eviction process. You should add as many stages as needed to complete the workflow. Each workflow stage also involves customizing what displays on the Eviction tile.

 To create a new workflow stage, do the following:

 -
 Enter a Stage Name . For example, if one stage of your eviction process involves notifying the tenant, you can name this stage Notice .

 -
 In the Write Letter field, select the letter that automatically generates when this stage is started.

 -
 In the Customize the Eviction Tile by Stage section, click   Add Instructions to add any additional internal information that you need to convey to users conducting the eviction regarding this stage.

 -
 To add relevant System , Payment Settings , and Eviction User Defined Fields fields to the stage in the eviction workflow, click Add Fields or .
The following fields are available to select.

 Field
 Description

 Script

 Add custom scripting to include relevant information from other places in Rent Manager . For example, you can create a field called Last Payment Date with a script that pulls in the last date the tenant made a payment on their account.

 Notice Date

 The date the final warning for the tenant to take action before the eviction process begins.

 Date Sent to Attorney

 The date notice was sent to your attorney that an eviction process was beginning.

 Eviction Filed Date

 The date the eviction was filed with the courts.

 Case #

 The case number assigned to the eviction when it was filed with the courts.

 Judgment Amount

 The total dollar amount that the tenant owes that the eviction is filed for.

 Vacate Date

 The date on which the tenant must vacate the property.

 Writ Date

 The date of writ of execution. Once the judgment is passed in favor of the landlord, the tenant must move out within the specified number of days.

 Lockout Date

 The date on which the tenant is locked out from the property by local enforcements.

 Eviction Outcome

 The ruling or decision made in regards to closing the eviction.

 Evicted

 A system-created user defined field that indicates if the tenant has been evicted or not.

 Eviction User Defined Fields

 Each eviction-type user defined field (UDF) created displays to select from. To create a new UDF, click Add Eviction User Defined Field .

 Related Privileges

 Group
 Privilege
 Column

 User Defined Fields
 User defined fields
 Add, View

 For more information, refer to Control User Access .

 Don't Charge Late Fees

 If checked, late fees are not charged on the tenant's account.

 Don't Accept Partial Payments

 If checked, the property management company does not take partial payments from the tenant. A partial payment is considered anything below the tenant's current balance due as of the payment date.

 Don't Accept Payments

 If checked, the property management company does not take payments from the tenant including payments made on Tenant Web Access or rmResident .

 Don't Accept Checks

 If checked, the property management company does not take checks as a acceptable payment method from the tenant.

 Don't Send AR Automation Notifications

 If checked, accounts receivable automated notifications are not sent to the tenant.

 Don't Allow TWA Payments

 If checked, the tenant is not allowed to make payments from Tenant Web Access (TWA) .

 - Click   Add Stage and repeat steps 1-4 for each new eviction stage you wish to create.

 Step 3: Configure Workflow Stage and Payment Settings

 To address the stages of the eviction workflow where a tenant is evicted at the end of the process, you need to configure what happens at each stage before the eviction is closed. In addition to deciding at which stages a tenant is considered evicted, you also need to decide at which stages payments are no longer accepted.

 To configure you workflow stage settings, do the following:

 -
 At the top of the page, click Settings .

 -
 In the Stage Settings section, select the stage(s) at which a tenant is considered to be legally in eviction.

 -
 In the Payment Settings section, select the stage when partial payments are no longer accepted and the stage when payments are no longer accepted.

 -
 Optionally, to open the related automated notification settings and review or update the available setups, click Automated Notification: Eviction Stage Aging . For more information, refer to Eviction Stage Aging (Automated Notification) .

 -
 When done, click OK to close the pop-up.

 -
 Once you are satisfied with your eviction workflow setup, click Save .
The eviction workflow is added to Rent Manager and can be used at the selected property(s).
