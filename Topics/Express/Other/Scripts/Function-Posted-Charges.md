# Posted Charges Function (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Function-Posted-Charges.htm

The PostedCharges function applies only to generating calculated amounts when adding or editing a recurring charge on the View Recurring Charges page for properties, tenants, units, or unit types. This function is used as part of a calculation specified on the Calculation field of the recurring charge to generate a charge amount directly related to the recurring charges listed on the account.

 This function calculates the total of all active recurring charges, including inherited recurring charges, on the View Recurring Charges page as of the Post Date . If the recurring charge is disabled on the tenant's View Recurring Charges page or the To Date is expired, those recurring charges are no longer calculated in scripts that use the PostedCharges function. The recurring charge utilizing this function automatically adjusts to calculate a new amount reflective of the active recurring charge total. Similarly, if a new recurring charge is added to the tenant's account, the function calculates the addition into the total amount of the recurring charge utilizing this function.

 This function is utilized by the following class:

 Class
 Syntax

 System

 [System.PostedCharges()]

 Warning

 This function is a part of the System class even though this function does not display with other System functions in letter templates or Report Writer .

 Parameters

 Parameters change what the function examines and/or how it displays results. The parameters available to this function are indicated below and must be specified in the order listed in the following syntax. Required parameters must be assigned values for the function to work. For Optional parameters, if no value is provided in the script, Rent Manager uses default values as specified below.

 [PostedCharges( "ChargeType" )]

 ChargeType

 Specify the short name code of the charge type to examine. This parameter is only functional with one charge type. If more than one are listed, the function reads the first charge type and disregard the rest. If no parameter is specified, the function examines all charge types.

 [PostedCharges("RC")]

 Calculates the recurring charges total for the Rent Charges (RC) charge type posted as of today.

 Script Examples

 The following scripts show various ways the function can be used.

 [PostedCharges()*.05]

 Calculates the total of all recurring charges posted as of today and multiplies it by 5%.

 [PostedCharges("LC")+10]

 Calculates the recurring charges total for the Late Charges (LC) charge type posted as of today and adds 10.

 [PostedCharges("GARAGE")/2]

 Calculates the recurring charges total for the Garage Fees (GARAGE) charge type posted as of today and divides it by 2.
