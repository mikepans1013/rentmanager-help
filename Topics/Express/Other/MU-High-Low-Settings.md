# Manage Metered Utilities High/Low Settings

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/MU-High-Low-Settings.htm

Using the Metered Utilities High/Low Settings pop-up, you can create consumption groups to help you manage usage. These ranges instantly flag unusual meter readings, whether too high or too low. Furthermore, you can customize your technician's process in rmAppSuite Pro by requiring an image of the meter or detailed notes depending on the reading, and quickly review the exceptions with a clean and detailed breakdown in the High/Low Consumption report. Additionally, you can determine how to handle meter readings with exceptions when posting charges, configure what reasons can be used for exceptions, and set up approval workflows for your property's meter readings. This data can help you make decisions with confidence and catch meter problems before they escalate.

 More Information

 If you need to edit an existing consumption group, exception reason, and/or approval workflow, you do not need to complete the full process detailed here. For details about input fields you may want to edit, refer to the tables throughout this topic.

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Metered utilities
 Enabled

 Meter types
 View

 Manage High/Low Settings
 Add, View, Edit

 For more information, refer to Control User Access .

 To create a consumption group, exception reasons, and an approval workflow for Metered Utilities , go to arrow_forward Services arrow_forward Service Setup arrow_forward High/Low Settings .

 Step 1: Create a Consumption Group

 To create a consumption group, do the following:

 -
 On the top left, select the Consumption Groups tab.

 -
 To create a new consumption group, click Add Consumption Group in the top left. To edit an existing group, select the group's name from the list.

 -
 In the General section, enter information into the following fields:

 Field
 Description

 Group Name

 A unique name for the consumption group.

 Meter Types

 The meter types that use this consumption group. Click Select Meter Types and select each meter type this consumption group applies to, then click OK to close the pop-up. Only meter types not already assigned to a consumption group display.

 Utility Type

 The most accurate categorization that applies to this consumption group's utility ( Water/Sewer , Gas , Electric , or Other ).

 -
 In the Consumption Ranges section, enter the following information:

 Field
 Description

 Consumption Range UoM

 The unit of measurement for the consumption group (e.g., Therms , Cubic Feet (CF) ). These options are determined by your selection in the Utility Type field.

 Flag all estimates as exceptions

 Any estimated meter readings are labeled as exceptions regardless of their consumption range. For more information, refer to Meter Exceptions (Page) .

 Set Different Ranges for Occupied/Vacant Units

 When checked, sections for Occupied Units and Vacant Units display in which you can add ranges specific to occupied and vacant units. Ranges added to the Occupied Units section apply only to meter readings taken at a unit with a current lease, while ranges added to Vacant Units apply only to meter readings at units not currently leased by a tenant.

 -
 Add consumption ranges to track utility usage for units by clicking Add Range . Then, enter information into the following fields:

 Field
 Description

 Color

 The color of the badge that displays in the Consumption Range column when adding meter readings. Select from Theme Colors or Custom Color and click OK to close the pop-up.

 Consumption Range

 A classification for meter usage that marks any readings falling within the low and high numbers set on the range. These ranges display on reports and in rmAppSuite Pro .

 Flag as exception

 If checked, a warning is sent in rmAppSuite Pro to your service technician when a reading is flagged as an exception. The language of the warning comes from what is inputted in the Description field. The default selections Require Note and Require Image require that your technician check the meter for accuracy and verify the reading with a photo and/or note.

 If this option is selected, the following fields are available to establish rmAppSuite Pro settings:

 Description

 The text that displays in rmAppSuite Pro to explain the reason for the exception alert.

 Require image

 The user completing the meter reading in rmAppSuite Pro must attach an image.

 Require Note

 The user completing the meter reading in rmAppSuite Pro must add a history/note item.

 Include Off Cycle Readings

 If checked, flags off-cycle move-out readings that fall within this consumption range as an off-cycle exception. This field displays only if the Set Different Ranges for Occupied/Vacant Units option is not enabled, or if it is enabled and the range is being added in the Occupied Units section.

 Name

 A unique name for the consumption range (e.g., Low , High ). When adding meter readings, if the range's conditions are met, this text displays on the badge in the Consumption Range column.

 -
 To add a consumption range with a range of -999999 to -1 for units with negative utility consumption, click the drop-down arrow next to Add Range and select Add Negative Consumption Range .

 -
 To add a consumption range with a range of 0 to 0 for units with no utility consumption, click the drop-down arrow next to Add Range and select Add Zero Consumption Range . This option is available only for occupied units.

 -
 Add any additional ranges to the consumption group as needed.

 -
 Click Save .
The new consumption group is created and automatically assigned to the selected Meter Types .

 Step 2: Establish Exception Reasons

 To add exception reasons, do the following:

 -
 On the top left, select the Exception Reasons tab.

 -
 In the Utility Types section on the left, select the desired utility type from the list.

 -
 In the Posting Restriction section, choose one of the following options to determine how meter readings with exceptions are handled when posting charges.

 Option
 Description

 Do not consider exception reasons when posting readings and utility charges

 Meter readings are posted regardless if exceptions are present.

 Warn before posting exceptions without a reason

 If attempting to post readings that have exceptions without a reason set, the Confirm Posting pop-up displays before the user can proceed with the posting.

 Require reasons on all exceptions before posting readings and utility charges

 Meter readings are posted only when all exception reasons are selected for the specified utility type. Selecting this is option also enables Approval Workflows .

 -
 In the rmAppSuite Pro section, enable Allow rmAppSuite users to select a reason for exceptions to prompt the user adding a reading in the exception range to select one of the reasons defined below.

 -
 In the Manage Consumption Exception Reasons section, click Add Reason and enter the name of the reason to be used on meter exceptions (e.g., Meter Malfunction , Faulty Appliance , Recent Move In/Out , Water Leak ).

 -
 Add any additional exception reasons as needed.

 -
 Click Save .
The new exception reason is created and automatically assigned to the selected Utility Types .

 Step 3: Create an Approval Workflow

 To create an approval workflow, do the following:

 -
 On the top left, select the Approval Workflows tab.

 -
 To create a new workflow, click Add Approval Workflow in the top left. To edit an existing workflow, select the workflow's name from the list. If all properties are assigned to an approval workflow for every utility type, this option is not available.

 -
 Check Enable Approval Workflow .

 -
 In the General section, enter information in the following fields:

 Field
 Description

 Assign to Properties

 Click Select Properties to establish the properties where this workflow is used. A property can be assigned to only one workflow for each utility type.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Utility Type

 The most accurate categorization that applies to this approval workflow. Options display in this field only if, on the Exception Reasons tab, the utility type has the Require reasons on all exceptions before posting readings and utility charges option enabled.

 Workflow Name

 The unique label to identify this workflow.

 -
 In the Select Reviewers & Approvers section, the following fields display:

 Field
 Description

 Approvers/Final Approvers

 The user(s) or role(s) responsible for approving or rejecting meter exceptions. This field displays as Final Approvers if Enable a two-step approver process is toggled on.

 When the two-step process is enabled, the Final Approvers can either approve or reject the exceptions. When approved, the exceptions are sent to the Reviewers to post the readings. If the exceptions are rejected, they are resubmitted to the Conditional Approvers .

 Check Notify final approvers by email when meter readings are ready for approval to automatically send an email to the selected user(s) or role(s) when the Meter Exceptions have a status of Needs Final Approval .

 Conditional Approvers

 The user(s) or role(s) responsible for approving or rejecting meter exceptions. This field displays only when Enable a two-step approver process is toggled on.

 If the conditional approver approves all the exceptions, they are submitted to the Approvers . If they reject the exceptions, they are resubmitted to the Reviewers .

 Check Notify conditional approvers by email when meter readings are ready for approval to automatically send an email to the selected user(s) or role(s) when the Meter Exceptions have a status of Needs Conditional Approval .

 Reviewers

 The user(s) or role(s) responsible for reviewing and setting the exception reason(s) for meter exceptions. Check Notify reviewers by email when meter readings are ready for review to automatically send an email to the selected user(s) or role(s) when the Meter Exceptions have a status of Needs Review .

 -
 In the Reading Lock Options section, choose one of the following options to determine when unposted meter exceptions are locked for reviewers and cannot be edited.

 Option
 Description

 Allow changes to exceptions at any time

 Exceptions can be modified by any user with access.

 Lock exceptions after they are approved

 When exceptions are approved, the Meter Readings fields for the corresponding unit/utility are locked and cannot be edited.

 Lock exceptions after they are initially flagged

 When meter readings are initially flagged as exceptions, the Meter Readings fields for the corresponding unit/utility can be edited only by users defined as Approvers for the associated properties.

 -
 Click Save .
The new approval workflow is created for the selected properties, reviewers, and approvers.
