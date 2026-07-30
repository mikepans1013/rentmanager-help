# Eviction Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Evictions.htm

The Eviction class examines eviction process information on a tenant account and is preceded by the Tenant class.

 Example

 [Tenant().Eviction().CurrentStage]

 Result

 Displays the stage of the first eviction process listed on the tenant's account.

 Class Parameter

 This class can be passed a single, optional parameter: an index.

 Index

 An index allows you to return information about a specific eviction process on an account by using a number to identify each process listed. For example, if there are three eviction processes listed on a tenant's account, they are referenced by indexes 0, 1, and 2. You can specify which process you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the eviction process with the most recent Start Date .

 [Tenant().Eviction(1).DateSentToAttorney]

 Displays the date a notice was sent to your attorney indicating that the eviction process with the second most recent Start Date on the tenant's account was beginning.

 [Tenant().Eviction(2).Outcome]

 Displays the outcome of the eviction process with the third most recent Start Date on the tenant's account.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Function
 Description

 Case Number

 [Tenant().Eviction().CaseNumber]

 Displays the court-assigned number for the tenant's eviction case.

 Closed Date

 [Tenant().Eviction().ClosedDate]

 Displays the date that the tenant's eviction case was resolved.

 Court Date

 [Tenant().Eviction().CourtDate]

 Displays the date on which the tenant is due to appear in court to address the case.

 Current Stage

 [Tenant().Eviction().CurrentStage]

 Displays the current step in the eviction workflow for a tenant's eviction process. For more information, refer to Eviction Workflow Setup .

 Date Sent to Attorney

 [Tenant().Eviction().DateSentToAttorney]

 Displays the date notice was sent to your attorney that a tenant's eviction process was beginning.

 Evicted

 [Tenant().Eviction().Evicted]

 Displays the category of process ( Evicted or Not Evicted ) represented by a tenant's eviction outcome. For more information, refer to Eviction Outcomes (Page) .

 Eviction Filed Date

 [Tenant().Eviction().EvictionFiledDate]

 Displays the date that a tenant's eviction case was filed with a court.

 Eviction Reason

 [Tenant().Eviction().EvictionReason]

 Displays the reason that the tenant's eviction process began. For more information, refer to Eviction Reasons (Page) .

 History Count

 [Tenant().Eviction().HistoryCount()]

 Displays the number of history/note items for the tenant's eviction process based on the parameters selected.

 Judgment Amount

 [Tenant().Eviction().JudgmentAmount]

 Displays the balance the tenant owes after a judgment is rendered in court.

 Last Stage Change Date

 [Tenant().Eviction().LastStageChangeDate]

 Displays the date that the eviction stage for a tenant's eviction process was updated by a user.

 Lockout Date

 [Tenant().Eviction().LockoutDate]

 Displays the date after which the tenant is locked out of the unit by law enforcement.

 Note

 [Tenant().Eviction().Note()]

 Displays information about the most recent history/note item on the eviction's Eviction Notes tile.

 Notice Date

 [Tenant().Eviction().NoticeDate]

 Displays the date on which an eviction notice was sent to the tenant.

 Outcome

 [Tenant().Eviction().Outcome]

 Displays the court decision and resulting action against the tenant.

 Set History Filter

 [Tenant().Eviction().SetHistoryFilter()]

 This function is designed to filter the total collection of eviction history/note items based on the assigned parameter values. This filtered collection becomes the data set used by the Note and HistoryCount functions that are run after it is applied. It remains in effect until it is run again with different parameters.

 Start Date

 [Tenant().Eviction().StartDate]

 Displays the date on which the eviction process began for this tenant.

 User Defined Field

 [Tenant().Eviction().UserDefinedField()]

 Displays the value of the eviction-type user defined field (UDF). The name of the desired UDF must be specified as a parameter. An example is shown below.

 [Tenant().Eviction().UserDefinedField("Priority")]

 Displays the value entered for the Priority UDF.

 Vacate Date

 [Tenant().Eviction().VacateDate]

 Displays the date by which the tenant must vacate the unit after a judgment is rendered in the eviction case.

 Writ Date

 [Tenant().Eviction().WritDate]

 Displays the date that the eviction case was ruled in favor of the landlord, if applicable.
