# Stage Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Stage.htm

This class examines data about violation stages. It is always preceded by the Violation class and can be followed by a stage-level scripting function. Violation information is pulled from the Violation details page.

 Example

 [Violation().Stage().Action]

 Result

 Displays the text of the action defined for the current violation stage of the selected violation as listed on the Violation details page on the Stage Information tile.

 Example

 [Tenant().Violation().Stage().LetterTemplate]

 Result

 Displays the name of the letter template for the selected violation's current stage as listed in the violation's code group under Code Group Settings or, if the settings are overridden on a specific code, in the code's details.

 Class Parameter

 This class can specify a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific violation stage on an account by using a number to identify each stage listed for the specified violation. For example, if there are three violation stages listed for a violation on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which violation stage you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first stage in the list for the violation.

 [Violation().Stage(1).Name]

 Displays the name of the second violation stage listed for the violation.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Action

 [Violation().Stage().Action]

 Displays the text of the action defined in the Internal Actions field for the violation stage of the violation.

 Amount

 [Violation().Stage().Amount]

 Displays the amount of the fine assessed, as defined in the Charge field for the violation stage of the violation.

 Charge Type

 [Violation().Stage().ChargeType]

 Displays the charge type of the fine as defined in the Charge Type field for the violation stage of the violation.

 Comply Days Actual

 [Violation().Stage().ComplyDaysActual]

 Displays the number of days the tenant has to remedy the violation before the violation is escalated to the next stage.

 More Information

 When a violation is escalated to the next violation stage, the stage Due Date can be manually overridden.

 This scripting function displays the updated difference between the Due Date and Escalation Date for the stage. The Escalation Date is the date on which the violation advanced to the selected stage and can be viewed on the Escalate Violation pop-up.

 Comply Days Original

 [Violation().Stage().ComplyDaysOriginal]

 Displays the default number of days the tenant has to remedy the violation as originally entered in the Days to Comply field when the violation stage was established.

 More Information

 When a violation is escalated to the next violation stage, the stage Due Date can be manually overridden.

 Use [Violation().Stage().ComplyDaysActual] to see the updated difference between the Due Date and the Escalation Date for the stage.

 Date (Stage Date)

 [Violation().Stage().Date]

 Displays the notice date of the current violation stage.

 Due Date

 [Violation().Stage().DueDate]

 Displays the date by which a violation must be resolved to prevent further escalation. By default, the Due Date of the current stage displays.

 Letter Template

 [Violation().Stage().LetterTemplate]

 Displays the name of the letter template associated with the violation. Letter templates can be assigned to a violation code group, code, and stage. Rent Manager uses the following hierarchy to determine which letter template name displays for this scripting function:

 Letter Template Location
 Order of Importance

 Stage

 Highest priority. If a default letter template is defined for the stage, this letter template displays.

 Code

 Next priority. If no specific letter template is set for the stage, the letter template set for the code displays.

 Code Group
 Lowest priority. If no specific letter template is set for the stage or code, the letter template set for the code group displays.

 Name

 [Violation().Stage().Name]

 Displays the Current Stage name as listed on the violation's Stage Information tile.

 Stage Number

 [Violation().Stage().StageNumber]

 Displays the current stage's sequential number as listed in the # column on the violation's View Stage pop-up.
