# Eviction Count Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Eviction-Count.htm

The EvictionCount function displays the total number of eviction processes associated with a tenant. Closed evictions that are reopened count as a single eviction process.

 The class that utilizes this function and the location from where the scripting information is pulled in Rent Manager can be found in the table below.

 Class
 Syntax

 Tenant

 [Tenant().EvictionCount()]

 Displays the number of open and closed eviction processes associated with a tenant.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [Tenant().EvictionCount( "Type" )]

 Type

 Specify if you want to count eviction processes with an outcome Type of Evicted or Not Evicted . If no parameter is specified, all eviction processes are counted.

 [Tenant().EvictionCount("Evicted")]

 Displays the number of eviction processes that resulted in the tenant being evicted.

 Script Examples

 The following scripts show various ways the function can be used:

 [Tenant().EvictionCount()]

 Displays the total number of eviction processes of all outcomes associated with a tenant.

 [Tenant().EvictionCount("Not Evicted")]

 Displays the total number of eviction processes that did not result in the tenant being evicted.
