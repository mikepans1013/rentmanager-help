# Set History Filter Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Set-History-Filter.htm

This function filters history items associated with the selected entity based on the assigned parameter values. This result is reused until the function is run again with different parameters. If the function is run again with no parameters, all filters are removed for examining history items.

 For most entities (such as tenants, units, and so on), this information can be found by going to the entity's details page, then in the History/Notes tile header, click .

 More Information

 This function is used in conjunction with the Note Function (Script) and History Count Function (Script) functions. This function must be run first in your scripting to compile the data set as defined by your parameters, but does not display this data in output. Then, the Note and HistoryCount scripts are used to retrieve selected values from that data and determines what output to display.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().SetHistoryFilter()]

 Examines information found on the asset's History/Notes page.

 Eviction

 [Tenant().Eviction().SetHistoryFilter()]

 On a tenant's Evictions tile, click to view the Eviction pop-up. This script examines information found on the Eviction Notes tile.

 Home

 [ Class(). Home().SetHistoryFilter()]

 Examines information found on the home-type asset's History/Notes page.

 Job

 [Job().SetHistoryFilter()]

 Examines information found on the job's History/Notes page.

 Owner

 [Owner().SetHistoryFilter()]

 Examines information found on the owner's History/Notes page.

 Owner Prospect

 [OwnerProspect().SetHistoryFilter()]

 Examines information found on the owner prospect's History/Notes page.

 Primary Owner

 [Property().PrimaryOwner.SetHistoryFilter()]

 For the owner set as the property's primary owner, this script examines information found on the owner's History/Notes pop-up.

 Property

 [Property().SetHistoryFilter()]

 Examines information found on the property's History/Notes page.

 Service Manager

 [ServiceManager().SetHistoryFilter()]

 Examines information found on the issue's History/Notes page.

 Tenant

 [Tenant().SetHistoryFilter()]

 Examines information found on the tenant's History/Notes page.

 Unit

 [Unit().SetHistoryFilter()]

 Examines information found on the unit's History/Notes page.

 Vendor

 [ Class(). Vendor().SetHistoryFilter()]

 Examines information found on the vendor's History/Notes page.

 Violation

 [Violation().SetHistoryFilter()]

 Examines information found on the violation's History/Notes page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SetHistoryFilter( "Category" , "Type" , "FromDate" , "ToDate" , "Level" , "ExcludedCategories" , "ExcludedTypes" )]

 Warning

 The Level parameter listed below applies to the function only when it is used with the Tenant, Asset, Home, Owner Prospect, Service Manager, Unit, Job, or Violation classes. If using this function with the Owner, Primary Owner, or Vendor classes, there is no Level parameter.

 Category

 Display the number of history items with this category assigned.

 [SetHistoryFilter("Complaints")]

 Selects the history items with the category Complaints assigned.

 Type

 Select the history items with this type.

 The following values may be used in the Type parameter:

 History Type
 Value

 Appointments

 [SetHistoryFilter("","Appointment")]

 Selects the history items with the type Appointment .

 Only appointments for the user generating the script are counted.

 Call

 [SetHistoryFilter("","Call")]

 Selects the history items with the type Call .

 Email - Note

 [SetHistoryFilter("","Email")]

 Selects the history items with the type Email - Note .

 Email - Sent/Received

 [SetHistoryFilter("","SentEmail")]

 Selects the history items with the type Email - Sent/Received .

 Eviction Stage

 [SetHistoryFilter("","EvictionStage")]

 Selects the history items with the type Eviction Stage .

 Note

 [SetHistoryFilter("","Note")]

 Selects the history items with the type Note .

 OWA Files

 [SetHistoryFilter("","OWAFile")]

 Selects the history items with the type OWA File .

 Phone Broadcast

 [SetHistoryFilter("","PhoneBroadcast")]

 Selects the history items with the type Phone Broadcast .

 rmVoIP

 [SetHistoryFilter("","NDT")]

 Selects the history items with the type rmVoIP .

 System

 [SetHistoryFilter("","System")]

 Selects the history items with the type System .

 Task

 [SetHistoryFilter("","Task")]

 Selects the history items with the type Task .

 Text Messages

 [SetHistoryFilter("","TextMessages")]

 Selects the history items with the type Text Messages .

 Visit

 [SetHistoryFilter("","Visit")]

 Selects the history items with the type Visit .

 Web Conversation

 [SetHistoryFilter("","CompletedWebConversations")]

 Selects the history items with the type Web Conversation .

 FromDate

 Select only history items dated on or after this date. If no date is specified, the function uses the beginning of time.

 [SetHistoryFilter("","","5/4/ 2026 ")]

 Select the history items posted on or after May 4, 2026 .

 ToDate

 Select only history items dated on or before this date. If no date is specified, the function uses the end of time.

 [SetHistoryFilter("","","","12/6/ 2026 ")]

 Select the history items posted on or before December 6, 2026 .

 Level

 Specify the entity type(s) of the history item to examine. Each level should be separated by a comma.

 [SetHistoryFilter("","","","","Unit,Prop")]

 Selects only the unit and property history items.

 ExcludedCategories

 Exclude the history items with this category assigned. Each excluded category should be separated with a comma.

 [SetHistoryFilter("","","","","","Complaints,Legal")]

 Selects history items excluding those with the categories of Complaints or Legal .

 ExcludedTypes

 Exclude the history items with this type assigned. Each excluded type should be separated with a comma.

 [SetHistoryFilter("","","","","","","System,Email")]

 Selects history items excluding those with the types of System or Email - Note .

 More Information

 The history/note types that you can enter for exclusion are the same as the types listed in the table for the Type parameter above.

 Script Examples

 The following scripts show various ways the function can be used. These examples do not generate output, but collect data for the Note and HistoryCount functions.

 [Violation().SetHistoryFilter()]

 Removes any filters to the history items associated with the selected violation.

 [Tenant().Lease().Unit().SetHistoryFilter("Complaints")]

 Filters history items associated with the unit of the tenant's first listed lease to include only items with the category Complaints .

 [Tenant().SetHistoryFilter("","Call","01/01/ 2026 ","12/31/ 2026 ")]

 Filters history items associated with the selected tenant to include only items of the Call type created during the year 2026 .

 [Property().SetHistoryFilter("","","01/01/ 2026 ","12/31/ 2026 ,"","Social")]

 Filters history items associated with the selected property for the year 2026 , excluding the category Social .

 [Owner().SetHistoryFilter("","","1/1/ 2026 ","","Social")]

 Filters history items associated with the selected owner posted on or after January 1, 2026 , excluding the category Social .

 [Tenant().Eviction().SetHistoryFilter()]

 Removes any filters to the history/note items associated with the selected eviction.
