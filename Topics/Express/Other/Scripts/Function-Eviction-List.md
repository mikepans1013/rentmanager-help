# Eviction List Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Eviction-List.htm

The EvictionList function displays information about a tenant's eviction processes, including the process's start date, reason for eviction, close date, outcome, and whether or not the tenant was evicted. Closed evictions that are reopened count as a single eviction process.

 The default output of the function displays below, and the Format parameter can be used to customize this output.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().EvictionList()]

 Displays a tab-separated list of a tenant's eviction process(es) and associated information.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Tenant().EvictionList( "Format" )]

 Format

 List details of each tenant eviction process using a special format sequence.

 Use \t to insert a tab.

 Use \n to insert a new line.

 Default Format

 If no custom format is specified, Rent Manager 's default formatting displays the process's start date, reason for eviction, close date, outcome, and eviction status variables separated by tabs:

 "\t$_StartDate\t$_EvictionReason\t$_ClosedDate\t$_Outcome\t$_Evicted"

 Variables

 The following variables may be used in the Format parameter.

 Variable
 Description

 $_ClosedDate

 Displays the date that the tenant's eviction case was resolved in MM/DD/YYYY format.

 $_Evicted

 Displays the eviction result ( Evicted or Not Evicted ) determined by a tenant's eviction outcome in the Type field. For more information, refer to Eviction Outcomes (Page) .

 $_EvictionReason

 Displays the reason that the tenant's eviction process began.

 $_Outcome

 Displays the landlord or court decision and resulting action against the tenant, based on the selected eviction outcome.

 $_StartDate

 Displays the date that the eviction process began for this tenant in MM/DD/YYYY format.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().EvictionList("\t$_ClosedDate\t$_Outcome\t$_Evicted\n")]

 Displays a new line customized list of the date the eviction case was resolved, the landlord or court decision, and the eviction status (separated by tabs) for all eviction processes associated with the tenant.

 [Tenant().EvictionList("\t$_StartDate\t$_Outcome\t$_EvictionReason\n")]

 Displays a new line with a customized list of the date that the eviction process began, the landlord or court decision, and the reason the eviction process began (separated by tabs) for all eviction processes associated with the tenant.
