# Job Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Job.htm

This class examines job information and can be followed by a job-level scripting function.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Example

 [Job().EndDate]

 Result

 Displays the End Date entered on the job's details page in the General section. If no end date was specified, the function displays a blank.

 Example

 [Job().ShortName]

 Result

 Displays the Short Name entered on the job's details page.

 Class Parameters

 A single, optional parameter can be specified for this class: an ID.

 ID

 The ID is a system-generated, unique number assigned by Rent Manager . The ID is assigned in the order of the job's Create Date . This number does not display on any window but may be used in scripting. If no ID is specified, Rent Manager defaults to using the ID of the job selected before running the script.

 Entering a distinct ID in this class parameter allows you to specify the job that the following function examines.

 [Job(102).HistoryCount()]

 Displays the number of history notes on the History/Notes pop-up of the job with the system-generated ID number of 102 .

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Aggregate Budget Value

 [Job().AggregateBudgetValue()]

 Displays job-level financial data related to the budget of the selected job.

 This scripting function must be used in conjunction with the Job FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Aggregate Chart Value

 [Job().AggregateChartValue()]

 Displays job-level financial data related to the selected job based on the specified general ledger (GL) account number and field.

 This scripting function must be used in conjunction with the Job FillChart function. For more information, refer to Fill Chart Function (Script) .

 Budget Comment

 [Job().BudgetComment]

 Displays the Comment entered on the job's Budget pop-up.

 Budget Value

 [Job().BudgetValue()]

 Displays the value entered on the job's Budget pop-up, based on the specified GL account number and field.

 This scripting function must be used in conjunction with the Job FillBudget function. For more information, refer to Fill Budget Function (Script) .

 Chart Value

 [Job().ChartValue()]

 Displays the account data of the specified GL account number and its field.

 This scripting function must be used in conjunction with the Job FillChart function. For more information, refer to Fill Chart Function (Script) .

 Description

 [Job().Description]

 Displays the text entered in the Description field of the job's General tile.

 End Date

 [Job().EndDate]

 Displays the End Date entered on the job's General tile. If no end date was specified, the function displays nothing.

 Expected End Date

 [Job().ExpectedEndDate]

 Displays the Expected End Date entered on the job's General tile. If no date was specified, the function displays nothing.

 Fill Budget

 [Job().FillBudget()]

 Displays a collection of job-specific GL account data related to the job's budget.

 This scripting function must be used in conjunction with the other Job BudgetValue functions. For more information, refer to Budget Value Function (Script) .

 Fill Chart

 [Job().FillChart()]

 Displays a collection of job-specific GL account data related to the job.

 This scripting function must be used in conjunction with the other Job ChartValue functions. For more information, refer to Chart Value Function (Script) and Aggregate Chart Value Function (Script) .

 History Count

 [Job().HistoryCount()]

 Displays the total number of history/notes on the job's History/Notes pop-up.

 Is Active

 [Job().IsActive]

 Displays True if Active is checked on the job's General tile; otherwise, displays False .

 Job Type

 [Job().JobType]

 Displays the name of the Job Type as selected on the job's General tile.

 Link

 [Job().Link]

 Displays the name of the Property , Unit , or Asset selected in the job's Link tile.

 Link Type

 [Job().LinkType]

 Displays the link type ( Property , Unit , or Asset ) selected in the job's Link tile.

 Name

 [Job().Name]

 Displays the Name as entered on the job General tile.

 Note

 [Job().Note()]

 Displays information about the most recent note on the job's History/Notes tile.

 Set History Filter

 [Job().SetHistoryFilter()]

 This function is designed to filter the total collection of job history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Short Name

 [Job().ShortName]

 Displays Short Name as entered on the job's General tile.

 Start Date

 [Job().StartDate]

 Displays the Start Date as entered on the job's General tile. If no start date was specified, the function displays nothing.

 User Defined Field

 [Job().UserDefinedField()]

 Displays the value of the user defined field (UDF). The Name of the desired UDF must be specified as a parameter. An example is shown below.

 [Job().UserDefinedField("Status")]

 Displays the value for Status user defined field.
