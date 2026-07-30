# Set Up Violations

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Violations-Set-Up.htm

Violations are used to track and document instances when tenants break the community standards established for your properties, such as those with a homeowners association. By replicating your rules and regulations in Rent Manager , you can track and manage tenants with violations, infraction penalties, and penalty escalations. This topic guides you through how to set up the violations tool in Rent Manager .

 Each violation you enter is associated with an individual violation code. These codes can be grouped together by adding them to a code group. In addition, codes can be labeled and filtered using categories. Because rules and regulations can be extensive, creating categories such as Parking or Lawn Care can help organize your violations. This allows you to filter violations to easily locate patterns or generate reports of similar violations.

 Step 1: Create Violation Categories

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Violation Categories
 Add, View

 For more information, refer to Control User Access .

 The first step is creating your violation categories to label similar violation codes.

 To add a violation category, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Violations arrow_forward Violation Categories .
The Violation Categories page displays.

 -
 At the top, click Add Violation Category .

 -
 Enter the category information in the available fields. Each field is described below.

 Field
 Description

 Name

 A unique name that identifies the category of violations.

 When creating a violation, the name of the associated category automatically populates based on the violation code selected.

 Description

 A brief summary that provides further context about the types of violations that apply to this category.

 -
 Click Save .
The violation category is added to the list. Repeat these steps until all needed categories are created.

 Step 2: Create Violation Code Groups

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Violation Code Groups
 Add, View

 For more information, refer to Control User Access .

 The next step is to create code groups, which are made up of violation codes (e.g., no parking on street) and represent the entirety of a property's rules and regulations.

 For each code group, you can set a default list of stages to use for each violation code in the group. Stages are escalated penalties or actions that apply when time passes on outstanding violations. However, you can set custom stages for each individual code, allowing for flexibility.

 To add a violation code group, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Violations arrow_forward Violation Code Groups .
The Violation Code Groups page displays.

 -
 At the top, click Add Violation Code Group .

 -
 In the General section, enter information into the available fields. Each field is described below.

 Field
 Description

 Name

 A unique name that identifies the types of codes in this group, such as the name of the association or the type of property these codes apply to (e.g., Student Housing ).

 When creating a violation, the name of the associated code group automatically populates based on the violation code selected.

 Properties

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 The properties that use this violation code group as their bylaws or rules and regulations. Each property can be applied to only one code group.

 -
 In the Code Group Default Options section, select an option in the available fields. Each field is described below.

 Field
 Description

 Letter

 The letter template used by default when adding a violation, adding a charge to a violation, or escalating a violation in this code group. You can select either a tenant- or violation-type letter template. For more information, refer to Letter/Email Templates (Page) .

 You can override this default and select a different letter template on the violation stage, violation code, or individual violation as needed.

 Charge Type

 The default charge type used when adding a violation, adding a charge to a violation, or escalating a violation in this code group.

 You can override this default and select a different charge type on the violation stage, violation code, or individual violation as needed.

 -
 In the Default Stages section, click Add Stage and enter information into the available columns.

 Column
 Description

 Stage

 The escalation order of the stages for this code group. Stage 1 is used when the violation is initially issued, stage 2 is used after it is escalated once, and so on. The number is system-generated but the order of the stages can be moved as needed.

 Name

 A brief name that summarizes the stage's escalation level, such as Reminder , Second Warning , or Eviction Notice .

 Days to Comply

 The number of days the tenant has to remedy the violation before it can be escalated.

 Amount

 The fee amount to charge the tenant at this escalation level. If no fee should be charged, enter 0.00 .

 Letter

 The letter template used by default when adding or escalating a violation to this stage. To use the template selected in the Code Group Default Options section's Letter field, select <Use Code Letter> .

 Charge Type

 The charge type applied to the fee charged at this escalation level. To use the charge type selected in the Code Group Default Options section's Charge Type field, select <Use Code Charge Type> .

 Internal Actions

 The actions that need to be taken by an internal employee or Rent Manager user at this escalation level, such as Send the tenant a reminder of the HOA rules .

 Actions Confirmed

 Check this box if users are required to complete the instructions in the Internal Actions column for this stage before the violation can be escalated further.

 -
 Add additional stages and stage information as needed.

 -
 Click Save .
The violation code group is created. Repeat these steps until all needed code groups are created.

 Step 3: Add Violation Codes

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Violation Code Groups
 View, Edit

 For more information, refer to Control User Access .

 Once your code groups are created, you need to add the individual violation codes to the groups. Violation codes represent violations against the code group's established rules and regulations, such as tenants making excessive noise during quiet hours or depositing trash in unapproved areas rather than in the proper bins.

 More Information

 If you have a large number of codes to add, you can save time by importing your violation codes from a comma-separated value (CSV) file instead of manually entering each code. For more information, refer to Import Violation Codes .

 To add violation codes to a code group, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Violations arrow_forward Violation Code Groups and select a code group from the list.
The Code Group page displays.

 -
 At the top, click Add Code .

 -
 In the General section, enter information into the available fields. Each field is described below.

 Field
 Description

 Category

 The violation category that best applies to this code.

 When creating a violation, the associated category automatically populates based on the violation code selected.

 Code

 The name of the violation code. Each code within a code group must be unique. However, you may have codes with the same name in other code groups.

 Description

 Detailed information about the rule(s) associated with this violation code.

 When creating a violation, this description automatically populates based on the violation code selected.

 Resolve Action

 Information about what the tenant must do to remedy the violation.

 When creating a violation, this action automatically populates based on the violation code selected.

 CC&R Reference

 The reference number in the Covenants, Conditions, and Restrictions (CC&R), or similar regulatory document, which precedes the name in the Code field, such as 6.1.2 - Unauthorized Vehicles .

 When creating a violation, this reference automatically populates based on the violation code selected.

 Internal Notes

 Any additional notes to further describe the actions that need to be taken by the association for this violation code.

 When creating a violation, these notes automatically populate based on the violation code selected.

 -
 In the Code Default Options section, select an option in the available fields. Each field is described below.

 Field
 Description

 Letter

 The letter template used by default when adding a violation, adding a charge to a violation, or escalating a violation in this code group. You can select either a tenant- or violation-type letter template. To use the default letter template selected on the associated code group, select <Use Code Group Letter Template> .

 You can override this default and select a different letter template on the violation stage, violation code, or individual violation as needed.

 Charge Type

 The default charge type to populate when adding a violation, adding a charge to a violation, or escalating a violation in this code group. To use the default charge type selected on the associated code group, select <Use Code Group Charge Type> .

 To create a new charge type for this violation code, click Add . For more information, refer to Add a Charge Type .

 You can override this default and select a different charge type on the violation stage, violation code, or individual violation as needed.

 -
 If this code has escalation stages that differ from the default stages for the associated code group, check Override Code Group Settings and modify the stages as needed. These changes apply only to this code and do not affect the code group or other codes.

 -
 Click Save .
The code is added to the code group. Repeat these steps until all needed codes in each code group are created.

 Next Steps

 Once you have set up your violation categories, code groups, and codes, you can begin using the violations tool in Rent Manager . Some actions you can take using violations are described in the table below.

 Action
 Description

 Create Violations

 Begin using the violations module by adding violations to tenant accounts in Rent Manager . For more information, refer to Add a Violation .

 Escalate Violations

 When you have existing violations that tenants have not yet remedied, you can escalate those violations to the next stage in the process. For more information, refer to Escalate a Violation .

 Add Rules & Regulations to Property Files

 To ensure your tenants have access to the rules and regulations, you can add the applicable documents to the property's files and make them available on  Tenant Web Access (TWA) . This provides tenants the opportunity to avoid violations by accessing the property's rules from the TWA portal. For more information, refer to Add a Property File .

 Dashboard Tiles

 You can monitor your violations at a glance from the Rent Manager dashboard. The Open Violations tile allows you to see unresolved violations, and the Violations - Communication Needed tile displays escalated violations that still needs to be communicated to the tenant. For more information, refer to Open Violations (Dashboard Tile) and Violations - Communication Needed (Dashboard Tile) .
