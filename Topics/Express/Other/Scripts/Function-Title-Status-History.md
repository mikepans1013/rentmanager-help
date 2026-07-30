# Title Status History Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Title-Status-History.htm

This function displays the history of the selected asset's title status(es) based on the parameters specified. The history is based on the time and date on which the asset's title status was changed and then saved.

 The default output of the function displays below. The Format parameter can be used to customize this output, as shown in the last example in this topic.

 Classes that utilize this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Asset

 [Asset().TitleStatusHistory()]

 Displays information found on the asset's details page.

 Home

 [ Class(). Home().TitleStatusHistory()]

 Displays information found on the home-type asset's details page.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [TitleStatusHistory( "AssetID" , "TitleStatusIndex" , "FromDate" ," ToDate" , "Format" )]

 AssetID

 Specify the system-generated asset ID number you wish to examine. If no asset ID is specified, Rent Manager defaults to using the ID of the asset selected before running the script.

 [TitleStatusHistory("710")]

 Displays title status history for the asset with ID number 710.

 TitleStatusIndex

 Displays a specific line item in the title status history. The second oldest item in the title status history has an index value of 0 , the second item has an index value of 1 , and so on.

 [TitleStatusHistory("","1")]

 Displays the second oldest title status assigned to the selected asset.

 FromDate

 Specify the date on or after which to examine title status history. If no date is specified, the function uses the beginning of time.

 [TitleStatusHistory("","","5/4/ 2026 ")]

 Displays the history of title statuses for the asset from May 4, 2026 or after.

 ToDate

 Specify the date on or before which to examine title status history. If no date is specified, the function uses the end of time.

 [TitleStatusHistory("","","","12/6/ 2026 ")]

 Displays the history of title statuses for the asset on December 6, 2026 or before.

 Format

 List details of each title status history item using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the name of the title status, from date, and to date variables separated by tabs:

 "\t$_Status\t$_FromDate\t$_ToDate\n"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_CreateDate

 Displays the date on which this title status was created and saved on the Asset Title Statuses page.

 $_CreateUser

 Displays the user who first created and saved this title status in the Asset Title Statuses page.

 $_Description

 Displays the Description of the title status.

 $_Duration

 Displays the number of days, hours, and minutes the title status has been selected on the asset's details page.

 If the stage is currently active, this displays as blank.

 $_FromDate

 Displays the date the title status was selected and saved on the asset's details page.

 $_Status

 Displays the name of the selected Title Status for the title status history item.

 $_ToDate

 Displays the date the title status was removed or changed and saved on the asset's details page.

 $_UpdateDate

 Displays the date on which this title status was last updated and saved in the Asset Title Statuses page.

 $_UpdateUser

 Displays the user who last updated and saved this title status in the Asset Title Statuses page.

 TitleStatusHistory("","","","","\t$_Status\t$_Description\t$_Duration\n")

 Displays a new line with a customized list of the title status, its description, and the length of time the status was selected for the asset, separated by tabs for each title status history item.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().Home().TitleStatusHistory()]

 Displays the history of title statuses that have been assigned to the tenant's first-listed home-type asset.

 [Asset().TitleStatusHistory("310")]

 Displays the history of title statuses that have been assigned to the asset with the system-generated ID number 310.

 [Asset().TitleStatusHistory("310","1")]

 Displays the second oldest title status assigned to the asset with the system-generated ID number 310.

 [Tenant().Asset().TitleStatusHistory("","","1/1/ 2026 ","12/31/ 2026 ")]

 Displays the history of title statuses dated from January 1, 2026 through December 31, 2026 for the selected tenant's first-listed asset.

 [Asset().TitleStatusHistory("","","","","$_CreateDate\t$_CreateUser\t$_Status\n")]

 Displays a new line with a customized list of the date the title status was created, the user who created the title status, and the name of each title status history item for the selected asset.

 The output displays as shown below:
