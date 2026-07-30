# Add a Violation Code Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Violations-Code-Group-Add.htm

With violations, you can create code groups, which are made up of violation categories (e.g., parking) and associated violation codes (e.g., no parking on street), representing the entirety of a property's rules and regulations. For each code group, default stages can be set, which are escalating penalties or actions that occur when time passes and a tenant has not resolved the outstanding violation. However, each individual code can optionally have different stages, allowing for flexibility.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Violation Code Groups
 Add, View

 For more information, refer to Control User Access .

 To create a new violation code group, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward Rental Info Setup arrow_forward Violations arrow_forward Violation Code Groups .
The Violation Code Groups page displays.

 -
 Click Add Violation Code Group .

 -
 In the General section, enter information into the available fields.

 Field
 Description

 Name

A unique name that identifies the types of codes in this group, such as the name of the association, owner portfolio, or lease agreement these codes are applicable to. When creating a violation, the name of the associated code group automatically populates based on the violation code selected.

 Properties

 The properties that use this violation code group as their bylaws or rules and regulations. Each property can be applied to only one code group.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 In the Code Group Default Options section, select options in the available fields.

 Field
 Description

 Charge Type

 The default charge type to populate when adding a violation, adding a charge to a violation, or escalating a violation in this code group.

 More Information

 You can override the code group default on the violation stage, the violation code, or the violation itself. Other charge types may be chosen during the process, allowing for more specific charges based on the code or escalation stage.

 Letter

 The letter template used by default when adding a violation, adding a charge to a violation, or escalating a violation in this code group. You can select either a tenant- or violation-type letter template. For more information, refer to Letter/Email Templates (Page) .

 You can override this default and select a different letter template on the violation stage, violation code, or individual violation as needed.

 More Information

 This field populates only with the letter templates to which you have access. Your access to letter templates can be managed from your user account or on the letter template settings. For more information, refer to Control Letter / Email Template Access .

 -
 In the Default Stages section, click Add Stage to create a new default stage, or status, for violations in this code group. Then, enter information in the available column.

 Column
 Description

 Actions Confirmed

 Require users to complete any Internal Actions for the stage before they can escalate it to the next stage.

 Amount

 The dollar amount charged to tenants when this violation stage is reached.

 Charge Type

 The default charge type used for any fees when escalating a violation to this stage. By default, <Use Code Charge Type> is selected.

 Days to Comply

 The number of days the tenant has to remedy the violation before it can be escalated to the next stage.

 Internal Actions

 Actions that need to be taken by a user while the violation is in this stage.

 Letter

 The letter template used by default when escalating a violation to this stage. You can select either a tenant- or violation-type letter template. For more information, refer to Letter/Email Templates (Page) .

 You can override this default and select a different letter template on the violation code or individual violation as needed.

 More Information

 This field populates only with the letter templates to which you have access. Your access to letter templates can be managed from your user account or on the letter template settings. For more information, refer to Control Letter / Email Template Access .

 Name

 The unique identifier for this stage (e.g., Warning , Fee Charged ).

 Stage

 The numerical order of escalation for this stage.

 -
 Click Save .
The violation code group is created.
