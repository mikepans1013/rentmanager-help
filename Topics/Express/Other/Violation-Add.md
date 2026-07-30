# Add a Violation

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Violation-Add.htm

Violations are used to track and document when tenants break the rules and regulations established for your properties. By replicating your rules and regulations in Rent Manager , you can track and manage tenants with violations, including the penalty for the infraction and any escalating penalties for failing to comply. This topic covers creating violations in your Rent Manager database so you can track tenant violations at your properties.

 More Information

 Before creating violations, you must create the associated categories, code groups, and codes to assign to your violations. For more information, refer to Set Up Violations .

 Step 1: Add Violation and General Information

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Violations
 Add, View

 For more information, refer to Control User Access .

 To create a violation, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Violations .
The Violations page displays.

 -
 At the top, click Add Violation .

 On the left, the Violation Information tab is selected by default when you open the wizard.

 -
 In the Tenant Information section, enter the information for the tenant receiving the violation into the available fields below.

 Field
 Description

 Tenant

 The name of the tenant receiving the violation.

 More Information

 If the violation was added directly to a tenant account from the Tenants page or the Tenant details page, this field automatically populates with the tenant's information.

 Unit

 The unit to which the violation applies. By default, the unit associated with the tenant's default lease is selected.

 Address

 This field populates the Default address of the selected Unit .

 -
 In the Violation Information section, select the desired information into the available fields below.

 Field
 Description

 Code Group

 The code group, which are the rules and regulations, associated with the property of the tenant's selected Unit .

 Code

 The code (e.g., No parking on the street ) that the tenant violated.

 Category

 The category (e.g., Parking ) associated with the selected Code .

 Violation Date

 The date the violation was reported. By default, today's date populates.

 -
 In the Upload Image section, click to browse your computer for an image file to attach to the violation.

 -
 In the Code Information section, enter the desired information into the available fields below. If any corresponding fields are entered on the Code Details pop-up, they automatically populate when the code is selected.

 Field
 Description

 Description

 The details outlining the criteria of the selected Code .

 Action To Resolve

 The text which specifies what the tenant must do to remedy the situation. For example, Remove the vehicle can be used as Action To Resolve for a parking violation.

 CC&R Reference

 The Covenants, Conditions, and Restrictions (CC&R) reference number or similar regulatory document which precedes the text of the code, such as 6.1.2 - Unauthorized Vehicles .

 Internal Notes

 The notes to users regarding this code. For example, Tow after 3 days can be used as an internal note for a parking violation.

 Step 2: Enter Violation Stages and Actions Information

 After entering the violation's general information, select the Stages and Actions tab on the left.

 To add violation processes, do the following:

 -
 In the Stages section, enter the desired information into the available fields below.

 Field
 Description

 Current Stage

 The stage(s) as entered on the Violation Code Group Settings pop-up. By default, the first stage is selected.

 More Information

 The stages always generate from the violation code group, unless the Code Details pop-up associated with the selected code, has Override Code Group Settings enabled.

 Days to Comply

 The number of days the tenant has to remedy the violation as inherited from the stage selected in the Current Stage field.

 Communication Sent

 Check to signify correspondence was already sent in regards to this violation.

 Due Date

 The date the by which the tenant must remedy the issue. By default, a calculated date is populated based on the Current Stage selection:

 Due Date = Days to Comply + Violation Date

 -
 In the Internal Actions section, add or edit information to describe the actions which were already taken or need to be taken by a user. By default, the Internal Actions of the selected stage display.

 Step 3: Enter Violation Charges and History

 Related Privileges

 Group
 Privilege
 Column

 Receivables
 Tenant transactions
 Add

 History
 Violation History/Notes
 Add

 For more information, refer to Control User Access .

 After entering the violation's stages and actions information, select the Charges and History tab on the left.

 To add charges and history notes to the violation, do the following:

 -
 In the Charges section, click   Add Charge to apply a new charge to the tenant in regards to the violation.
The Add Charge pop-up displays.

 More Information

 If you add a charge, a system-generated history note with the Violation Notes type is added to the tenant's History/Notes page.

 -
 In the Violation History section, review any additional violations the tenant has incurred.
If the tenant has additional current or past violations, you can click a violation in the list to open the Violation details page. If this is the tenant's first violation recorded in Rent Manager , Violations not found displays.

 -
 In the Add History section, you can add another history note with a type of Violation Notes , in addition to the system-generated note stating the violation was created. Enter the violation type history into the available fields below.

 Field
 Description

 Note

 The details of the history note.

 Category

 The appropriate violation type history category.

 -
 In the Write Letter section, select a letter to send to the tenant regarding the violation. Enter the violation letter information into the available fields below.

 Field
 Description

 Letter Template Type

 A tenant or violation-type letter template. The letter template type selected here determines what letter templates populate in the Letter Template drop-down.

 Letter Template

 The existing letter template you wish to send to the tenant.

 Step 4: Save the New Violation

 Once you have established the Charges and History , click Save and Finish to complete the violation creation process and close the wizard. Alternatively, click Save and New to finish adding the violation and refresh the wizard to add another violation.
