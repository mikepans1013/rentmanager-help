# Links Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Links.htm

This function displays any tenant, prospect, unit, and/or property to which the selected Service Issue is linked. By default, each entity is displayed on a new line; however, you may specify a delimiter to separate each entity on the same line.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Service Manager

 [ServiceManager().Links()]

 Displays information found in the Links tile of the service issue.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Links( "ServiceIssueID" , "Level" , "Delimiter" )]

 ServiceIssueID

 Select the service issue with this Issue ID. If this parameter is not specified, it defaults to the oldest/first issue on the linked account.

 More Information

 If ServiceManager is the only class, its parameter is ServiceIssueID. If another class precedes the ServiceManager class, the ServiceManager class instead uses the Index parameter, and the entity of the preceding class must be associated with a service issue in order for the script to return results.

 [Links("127")]

 Displays all entities linked to service issue number 127.

 Level

 Specify the level—or entity type—for the function to examine. Possible values include Tenant , Prospect , Unit , and Property .

 [Links("127","Unit")]

 Displays the unit, if any, linked to service issue number 127.

 Delimiter

 Separate multiple entities with a delimiter such as or , and , or & . If no delimiter is specified, Rent Manager displays each entity on a new line .

 More Information

 In order to define a delimiter, the first and second parameter positions must be defined. In this example, an empty set of quotation marks in the first and second positions tells Rent Manager to use the all entities .

 [Links("",""," and ")]

 Displays all entities with a spaced and between them.

 More Information

 It is recommended to include the spaces you wish to display between the delimiter and the entity name as Rent Manager defaults to no spaces between.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().ServiceManager().Links()]

 Displays any tenant, prospect, unit, and property that is linked to the first service issue associated with the selected tenant. By default, each entity displays on a new line.

 [Property().ServiceManager().Links("207")]

 Displays any tenant, prospect, unit, and property that is linked to service issue number 207. By default, each entity displays on a new line.

 [Unit().ServiceManager().Links("43","Tenant")

 Displays any tenant that is linked to service issue number 43.

 [Prospect().ServiceManager().Links("","","—")]

 Displays any tenant, prospect, unit, and property that is linked to the first service issue associated with the selected prospect. Entities are separated by — on a single line.

 [Tenant().ServiceManager().Links("11","",System.Tab)]

 Displays any tenant, prospect, unit, and property that is linked to service issue number 11. Entities are separated by a tab on a single line.
