# Establish a Charge Type for Security Deposits

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Security-Deposit-Establish-Charge-Type.htm

You collect and hold security deposits for your tenants. There are two steps to reflect this in Rent Manager . First, you must create a charge type and tell Rent Manager that any charges associated with it are security deposits and therefore need to be held. You can create multiple charge types for different security deposits. For example, you might want to track rent security deposits and pet security deposits with separate charge types. As long as Rent Manager knows those charge types are for security deposits, when charges associated with those charge types are paid, the amount displays as Held on the tenant account.

 The second step is defining the charge type as a security deposit. This allows  Rent Manager to perform additional actions on any transaction associated with the charge type. When a payment is applied to the charge, the amount displays as Held on the Security Deposit card. When you refund a security deposit, it reduces the Held amount and the property's security deposit liability. Identifying the charge type as a security deposit is essential to ensure the Held amount accurately displays.

 Step 1: Add a Charge Type for Security Deposits

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge types
 Add, View

 For more information, refer to Control User Access .

 To add a charge type, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Charge Types .
The Charge Types page displays.

 -
 On the action bar to the right, click .
The Add Charge Type pop-up displays.

 -
 Enter the following information for the new charge type:

 Field
 Description

 Name
 Identifies the charge type on generated transaction ledgers for related accounts and internally on the Charge Types register (maximum of six characters).

 Description
 An additional note to provide context for this charge type, which displays on generated transaction ledgers for related accounts and internally on the Charge Types register.

 Chart Account
 The liability GL account to be linked to this charge. Security deposits are kept in liability accounts because they are either paid back to tenants after they move out, or they are forfeited to pay for repairs or maintenance.

 Default Amount

 This value populates the Amount field when adding a one-time charge or a recurring charge of this security deposit charge type.

 This amount can be overridden when creating individual charges. If you charge the same security deposit for all or most of the units in your portfolio, enter a default amount, and override it when necessary.

 Allocation Order

 If you created custom allocation orders, select End or Beginning to determine the placement of the charge type on the allocation order.

 This option can be overridden on individual charges. If you create recurring security deposit charges, you might consider selecting an allocation order and overriding it when necessary. If you generally create one-time security deposit charges, you can leave this blank.

 Active

 This option is checked by default, allowing the charge type to be assigned to transactions for tracking the applicable financial data.

 More Information

 Uncheck this box to mark a charge type as inactive. This is a good alternative to deleting a charge type, as the charge type can not be used, but historical data concerning the charge remains intact.

 For more information on deleting a charge type, refer to Delete a Charge Type .

 Prorate By Day
 Check to have transactions associated with this charge type automatically charge an altered amount based on the post date. As a security deposit does not depend on the move-in date and therefore has no need to be prorated, you do not need to enable this for security deposits.

 Commercial Recoverable Expense (CRE) Charge Type

 The CRE charge type is used to recover the cost of commercial recoverable expenses. Since security deposits have no correspondence to CRE charges, you do not need to enable this for security deposits.

 -
 Click Save .
The new charge type is added to the Charge Types page and is available to apply to security deposits.

 Step 2: Establish Existing Charge Types as Security Deposits in System Preferences

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set a charge type as a security deposit, do the following:

 -
 Go to arrow_forward Administration arrow_forward Preferences arrow_forward System Preferences arrow_forward General Options arrow_forward Security Deposit arrow_forward General .
The System Preferences: Security Deposit - General page displays.

 -
 In the Charge Type: field, click the drop-down arrow.

 -
 Select a charge type from the drop-down list.
Alternatively, type a phrase to search for a specific charge type.

 -
 Click .
The charge type is added to the bottom of the list of Security Deposit Charge Type(s) .

 -
 Repeat these steps for all charge types that should be considered security deposit charge types.

 -
 Click Save .
The charge type is confirmed as a security deposit.
