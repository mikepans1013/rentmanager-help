# History Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-History-Count.htm

This function displays the number of history/note items for the specified account based on the parameters selected. For most entities (such as tenants, units, and so on), this information can be found by going to the entity's details page, then in the History/Notes tile header, click . The number of history/note items is located at the bottom of the History/Notes pop-up.

 More Information

 You can pre-filter history items to display for this function by inserting the Set History Filter Function (Script) before the HistoryCount function. This results in the parameters specified automatically applying to the function anywhere it is used after SetHistoryFilter.

 Classes that utilize this function and the locations where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().HistoryCount()]

 Displays the number of history/note items listed on the asset's History/Notes pop-up.

 Eviction

 [Tenant().Eviction().HistoryCount()]

 On a tenant's Evictions tile, click to view the Eviction pop-up. This script displays the number of history/note items listed on the Eviction Notes tile.

 Home

 [ Class(). Home().HistoryCount()]

 Displays the number of history/note items listed on the home-type asset's History/Notes pop-up.

 Job

 [Job().HistoryCount()]

 Displays the number of history/note items listed on the job's History/Notes pop-up.

 Owner

 [Owner().HistoryCount()]

 Displays the number of history/note items listed on the owner's History/Notes pop-up.

 Owner Prospect

 [OwnerProspect().HistoryCount()]

 Displays the number of history/note items listed on the owner prospect's History/Notes pop-up.

 Primary Owner

 [Property().PrimaryOwner.HistoryCount()]

 For the owner set as the property's primary owner, this script displays the number of history/note items listed on the owner's History/Notes pop-up.

 Property

 [Property().HistoryCount()]

 Displays the number of history/note items listed on the property's History/Notes pop-up.

 Service Manager

 [ServiceManager().HistoryCount()]

 Displays the number of history/note items listed on the History/Notes tile of the service issue.

 Tenant

 [Tenant().HistoryCount()]

 Displays the number of history/note items listed on the tenant's History/Notes pop-up.

 Unit

 [Unit().HistoryCount()]

 Displays the number of history/note items listed on the unit's History/Notes pop-up.

 Vendor

 [Vendor().HistoryCount()]

 Displays the number of history/note items listed on the vendor's History/Notes pop-up.

 Violation

 [Violation().HistoryCount()]

 Displays the number of history/note items listed on the History/Notes tile of the violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [HistoryCount( "Category" , "Type" , "FromDate" , "ToDate" , "Level" , "ExcludedCategories" , "ExcludedTypes" )]

 More Information

 If using SetHistoryFilter prior to the HistoryCount function, each parameter specified in SetHistoryFilter is used by default. Any filters applied to the HistoryCount function are applied in addition to the parameters specified in SetHistoryFilter.

 Category

 Display the number of history items with this category assigned.

 [HistoryCount("Complaints")]

 Displays the number of history items with the category Complaints assigned.

 Type

 Displays the number of history items categorized with this type. If no Type parameter is defined, items of all types are returned.

 The following values may be used in the Type parameter:

 History Type
 Value

 Appointments

 [HistoryCount("","Appointment")]

 Displays the number of history/note items with the type of Appointment .

 Only appointments for the user generating the script are counted.

 Call

 [HistoryCount("","Call")]

 Displays the number of history/note items with the type of Call .

 Email - Note

 [HistoryCount("","Email")]

 Displays the number of history/note items with the type of Email - Note .

 Note

 [HistoryCount("","Note")]

 Displays the number of history/note items with the type of Note .

 OWA Files

 [HistoryCount("","OWAFile")]

 Displays the number of history/note items with the type of OWA File .

 Phone Broadcast

 [HistoryCount("","PhoneBroadcast")]

 Displays the number of history/note items with the type of Phone Broadcast .

 rmVoIP

 [HistoryCount("","NDT")]

 Displays the number of history/note items with the type of rmVoIP .

 Email - Sent/Received

 [HistoryCount("","SentEmail")]

 Displays the number of history/note items with the type of Email - Sent/Received .

 System

 [HistoryCount("","System")]

 Displays the number of history/note items with the type of System .

 Task

 [HistoryCount("","Task")]

 Displays the number of history/note items with the type of Task .

 Text Messages

 [HistoryCount("","TextMessages")]

 Displays the number of history/note items with the type of Text Messages .

 Visit

 [HistoryCount("","Visit")]

 Displays the number of history/note items with the type of Visit .

 Web Conversation

 [HistoryCount("","CompletedWebConversations")]

 Displays the number of history items with the type of Web Conversation .

 FromDate

 Specify the date on or after which to examine history/note items. If no date is specified, the function uses the beginning of time.

 [HistoryCount("","","5/4/ 2026 ")]

 Displays the number of history items posted on or after May 4, 2026 .

 ToDate

 Specify the date on or before which to examine history/note items. If no date is specified, the function uses the end of time.

 [HistoryCount("","","","12/6/ 2026 ")]

 Displays the number of history/note items posted on or before December 6, 2026 .

 Level

 Warning

 The Level parameter applies to the function only when it is used with the Tenant, Asset, Home, OwnerProspect, Prospect, ServiceManager, Unit, Job, or Violation classes. If using this function with the Owner, Vendor, or PrimaryOwner classes, there is no Level parameter.

 Specify the entity type(s) of the history/note item to examine. Each level should be separated by a comma.

 [HistoryCount("","","","","Tenant")]

 Displays the tenant-level history/note note items associated with the current entity.

 ExcludedCategories

 Exclude the history items with this category assigned. Each excluded category should be separated with a comma.

 [HistoryCount("","","","","Complaints,Legal")]

 Displays a count of history/note items, excluding those with the categories of Complaints or Legal .

 ExcludedTypes

 Exclude the history items with this type assigned. Each excluded type should be separated with a comma.

 [HistoryCount("","","","","","System,Email")]

 Displays a count of history/note items, excluding those with the types of System or Email - Note .

 Script Examples

 The following scripts show various ways the function can be used:

 [Owner().HistoryCount()]

 This displays the number of history/note items associated with the current owner.

 [Tenant().HistoryCount("Complaints")]

 This displays the number of history/note items with the category of Complaints for the current tenant.

 [Violation().HistoryCount("","ViolationStages","01/01/ 2026 ")]

 This displays the number of violation type history/note items from January 1, 2026 until the end of time for the current violation.

 [Tenant().Eviction().HistoryCount("Notice","Call")]

 Displays the number of history/note items with the category of Notice and the Call type for the tenant's current eviction.
