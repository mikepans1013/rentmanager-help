# Set Script Invalid Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Set-Script-Invalid.htm

This function controls the output of the letter template in which it appears. If the Value parameter is set to True , the letter does not generate. This applies when the letter is an individual document or as part of a document packet or letter batch.

 This function can be utilized by the following class:

 Class
 Syntax

 System

 [System.SetScriptInvalid()]

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [SetScriptInvalid( "Value" )]

 Value

 Set to True to prevent a letter from generating or False to generate a letter.

 [SetScriptInvaild("True")]

 This prevents the letter from generating.

 Script Examples

 The following scripts show various ways the function can be used:

 [System.SetScriptInvalid("True")]

 If this function is included in a letter template, the True value prevents that letter from being generated.

 [System.If(Property.Name()=="Buckeye Hall",System.SetScriptInvalid("True"),"")]

 If this script is included in a tenant letter template, it prevents the letter from being generated to any tenant that is associated with the property named Buckeye Hall.
