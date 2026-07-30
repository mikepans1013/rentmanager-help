# Next Hard Close Effective Date Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Next-Hard-Close-Effective-Date.htm

This function displays the accounting close effective date for the current period.

 The class that utilizes this function and the location where the scripting information is pulled from in Rent Manager can be found in the table below.

 Class
 Syntax

 Property

 [Property().NextHardCloseEffectiveDate()]

 Displays information found on a property's details page at arrow_forward Accounting Close . If Use System is selected on the pop-up, the information is found in system preferences.

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values.

 [NextHardCloseEffectiveDate( "Type" )]

 Type

 For a property with the Split Accounting close for AR, AP, Journals option selected in system preferences, this parameter allows you to select which accounting close date to display.

 Available values for this parameter include:

 Value
 Description

 AP

 [NextHardCloseEffectiveDate("AP")]

 Display the accounting close date set for your accounts payable ledger, including checks, bills, and credit card transactions.

 AR

 [NextHardCloseEffectiveDate("AR")]

 Display the accounting close date set for your accounts receivable ledger, including tenant charges and payments.

 Journals

 [NextHardCloseEffectiveDate("Journals")]

 Display the accounting close date set for journal entries.

 If the property has separately configured accounting close dates and no Type parameter value is defined, the latest of the three dates display.

 [NextHardCloseEffectiveDate("AR")]

 Displays the accounting effective close date associated with accounts receivable transactions.

 Script Examples

 The following scripts show various ways the function can be used:

 [Property().NextHardCloseEffectiveDate()]

 This displays the accounting effective close date for the current period for the selected property.

 [Property().NextHardCloseEffectiveDate("AP")]

 This displays the accounting effective close date set for accounts payable transactions for the current period for the selected property. The property must have Split Accounting Close for AR, AP, Journals/Adjustments selected in system preferences.
