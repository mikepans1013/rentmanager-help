# Note Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Note.htm

This function displays information about a single history note on the selected entity. By default, this includes the date and time the note was created, the category, type, description, and the username of the person who created the note.

 This function can be preceded by the History class to further specify, using an index, which history item information displays. If you do not specify an index for the History class, the function pulls information about the most recent note posted to the account. Optionally, use the available parameters to specify which parts of the note display.

 More Information

 You can pre-filter history items to display for this function by inserting the SetHistoryFilter Function before the Note function. This results in the parameters specified automatically apply to the Note function anywhere it is used after SetHistoryFilter.

 Classes that utilize this function and the locations from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().History().Note()]

 Displays information found on the asset's History/Notes pop-up.

 Eviction

 [Eviction().Note()]

 Displays information found on the Eviction Notes tile of the eviction.

 Home

 [ Class(). Home().History().Note()]

 Displays information found on the home-type asset's History/Notes pop-up.

 Job

 [Job().History().Note()]

 Displays information found on the job's History/Notes pop-up.

 Owner

 [Owner().History().Note()]

 Displays information found on the owner's History/Notes pop-up.

 Owner Prospect

 [OwnerProspect().History().Note()]

 Displays information found on the owner prospect's History/Notes pop-up.

 Primary Owner

 [Property().PrimaryOwner().History().Note()]

 Displays information found on the primary owner's History/Notes pop-up.

 Property

 [Property().History().Note()]

 Displays information found on the property's History/Notes pop-up.

 Service Manager

 [ServiceManager().History().Note()]

 Displays information found on the History/Notes pop-up of the service issue.

 Tenant

 [Tenant().History().Note()]

 Displays information found on the tenant's History/Notes pop-up.

 Unit

 [Unit().History().Note()]

 Displays information found on the unit's History/Notes pop-up.

 Vendor

 [Vendor().History().Note()]

 Displays information found on the vendor's History/Notes pop-up.

 Violation

 [Violation().History().Note()]

 Displays information found on the History/Notes pop-up of the violation.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Note( "Category" , "Type" , "FromDate" , "ToDate" , "Level" , "ExcludedCategories" , "ExcludedTypes" , "Format" )]

 More Information

 If using SetHistoryFilter prior to the Note function, each parameter specified in SetHistoryFilter is used by default. Any filters applied to the Note function are applied in addition to the parameters specified in SetHistoryFilter.

 Category

 Display the most recent history items with this category assigned.

 [Note("Complaints")]

 Displays information about the most recent history item with the category Complaints assigned.

 Type

 Displays the most recent history items categorized with this type. If no Type parameter is defined, the most recent history item is returned.

 The following values may be used in the Type parameter:

 History Type
 Value

 Appointments

 [Note("","Appointment")]

 Displays information about the most recent history item assigned the Appointment type in Rent Manager 12 .

 Only appointments for the user generating the script are counted.

 Call

 [Note("","Call")]

 Displays information about the most recent history item assigned the Call type.

 Email - Note

 [Note("","Email")]

 Displays information about the most recent history item assigned the Email - Note type.

 Note

 [Note("","Note")]

 Displays information about the most recent history item assigned the Note type.

 OWA Files

 [Note("","OWAFile")]

 Displays information about the most recent history item assigned the OWA File type.

 Phone Broadcast

 [Note("","PhoneBroadcast")]

 Displays information about the most recent history item assigned the Phone Broadcast type.

 rmVoIP

 [Note("","NDT")]

 Displays information about the most recent history item assigned the rmVoIP type.

 Email - Sent/Received

 [Note("","SentEmail")]

 Displays information about the most recent history item assigned the Email - Sent/Received type.

 System

 [Note("","System")]

 Displays information about the most recent history item assigned the System type.

 Task

 [Note("","Task")]

 Displays information about the most recent history item assigned the Task type.

 Text Messages

 [Note("","TextMessages")]

 Displays information about the most recent history item assigned the Text Messages type.

 Visit

 [Note("","Visit")]

 Displays information about the most recent history item assigned the Visit type.

 Web Conversation

 [Note("","CompletedWebConversations")]

 Displays information about the most recent history item assigned the Web Conversation type.

 FromDate

 Select only history items dated on or after this date. If no date is specified, the function uses the beginning of time.

 [Note("","",1/1/ 2026 ")]

 Displays information about the last history item posted on or after January 1, 2026 .

 ToDate

 Select only history items dated on or before this date. If no date is specified, the function uses the end of time.

 [Note("","","","12/1/ 2026 ")]

 Displays information last history item posted on or before December 31, 2026 .

 Level

 Warning

 The Level parameter applies only to the function when it is used with the Tenant, Asset, Home, OwnerProspect, Prospect, ServiceManager, Unit, Job, or Violation classes. If using this function with the Owner, Vendor, or PrimaryOwner classes, there is no Level parameter.

 Specify the entity type(s) of the history item to examine. Each level should be separated by a comma.

 [Note("","","","","Tenant")]

 Displays information about the most recent tenant-level history item associate with the current entity.

 ExcludedCategories

 Exclude the history items with this category assigned. Each excluded category should be separated with a comma.

 [Note("","","","","Complaints,Legal")]

 Displays information about the last history item posted excluding those assigned the categories of Complaints and Legal .

 ExcludedTypes

 Exclude the history items with this type assigned. Each excluded type should be separated with a comma.

 [Note("","","","","","System,Email")]

 Displays information about the last history item posted excluding those with the type of System and Email - Note .

 Format

 List details of each history item using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the date and time the item was created, the item category, the item type, the text entered in the Note field, and the user that created the item variables, separated by tabs:

 "\t$_Date\t$_Time\t$_Category\t$_Type\t$_Regarding\t$_CreatedBy\n"

 Variables

 The following variables may be used in the Format parameter:

 Variable
 Description

 $_Category

 Displays the Category assigned to the history item.

 $_CreatedBy

 Displays the Rent Manager user who created the history item.

 $_Date

 Displays the date on which the item was created.

 $_Regarding

 Displays the text entered in the Note field of the history item.

 $_Time

 Displays the time the item was created.

 $_Type

 Displays the Type of the history item.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Note]

 Displays information about the most recent history item posted to the selected tenant's account.

 [Vendor().History(1).Note]

 Displays information about the second most recent history item posted to the selected vendor's account.

 [Owner().Note("Legal")]

 Displays information about the most recent history item with the category of Legal posted to the selected owner's account.

 [Tenant().Note("","","","","","","","$_Regarding")]

 Displays only the description of the history item last posted to the selected tenant's account.

 [Violation().Note("","Email","1/1/ 2026 ")]

 Displays information about the most recent Email - Note type history item posted on or after January 1, 2026 for the selected violation.

 [Tenant.Eviction().Note("","Notice","Call")]

 Displays information about the most recent note item with the category of Notice and the Call type on the tenant's eviction.
