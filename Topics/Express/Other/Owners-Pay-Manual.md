# Manual Owner Pay

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Owners-Pay-Manual.htm

After you collect receivables and pay expenses (including management fees) for managed ownerships, you can make an equity distribution for each of your owners. With manual owner pay, you can pay your owners a specified amount directly from Rent Manager . The reasons to use this method are the following:

 -
 You get to decide exactly how much money to pay the owner.

 -
 You can pay an owner for the profits of a single property instead of paying the owner the maximum distribution for their entire property portfolio.

 Rent Manager uses the following formula to determine the manual payout for each owner:

 Owner Payout = (Owner Percent / Total Percent Owned) * Payout Amount

 If you need to view or update an owners percent of ownership, you can access this information on the property's Owners pop-up. For more information, refer to Property Owners (Pop-Up) .

 More Information

 If you want to pay owners their maximum payout amount, you can use the Pay Owners page to perform a full equity distribution for each owner. This processes uses the following formula: Owner Payout = (Bank Balance – Withholdings) * Ownership % ± Balanced Reserves . For more information, refer to Pay Owners .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Create payments for owners
 Enabled

 For more information, refer to Control User Access .

 Step 1: Enter Details

 To manually pay an owner, do the following:

 -
 Go to   arrow_forward Owners arrow_forward Owner Payments arrow_forward Manual Owner Pay .

 -
 In the Details section, enter information into the following available fields.

 Field
 Description

 Property

 The property from which to pay its owner(s).

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Unit

 The associated unit, if you wish to include the unit on the equity distribution specifically for unit-level reporting.

 Draw Account

 The equity general ledger (GL) account that tracks the payout. <Use Owner default> is the GL account established on the Owner details page's Manage Account tile.

 Bank

 The bank account from which to draw funds for the owner payment.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Date

 The date of the payment transaction.

 Amount

 The amount of the owner payment. If this property has multiple owners, the payout is distributed among them in the Owner Percentages section based on each owner’s percentage of ownership and the property's total percentage owned.

 Step 2: Select Owner Payment Method

 The Owner Percentages section displays every active owner of the selected property as of the specified date along with the Percentage of ownership and the Amount to be paid out. You can also include inactive owners in the list by checking Include Inactive Owners .

 In the Owner Percentages section, the following columns display.

 Column
 Description

 Amount

 The dollar amount of the payout for the owner(s).

 Owner

 The Display Name for the owner(s) receiving the payout.

 Pay Amount

 The method ( ACH , AvidPay , Check , Debit , EFT , eChecks , ePay , NACHA ) used to pay the owner(s). The payment method listed on the owner's Miscellaneous tile populates by default in this column.

 To pay the owner through a different method, select one of the following options for each applicable owner:

 ACH

 An automated transfer handled by your real world bank that uses the automated clearing house network for additional security.

 AvidPay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager . For more information, refer to Post AvidPay (Page) .

 Related Preferences

 This option displays only if you have AvidPay set up in the AvidXchange section of system preferences. For more information, refer to AvidXchange (System Preferences) .

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment which allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 eChecks

 A digital check that is delivered to the payee via email, at which point the payee can retrieve and print the check.

 Related Preferences

 This option displays only if Enable eChecks is checked in the eChecks section of system preferences and you have an eChecks account set up. For more information, refer to eChecks (System Preferences) .

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An integrated service offered by Zego to automate electronic funds transfer.

 Related Preferences

 This option displays only if Enable ePay and Enable ePay for Owners is checked in system preferences. For more information, refer to General ePay (System Preferences) .

 NACHA

 An ACH payment is processed to the ODFI bank account set up in system preferences and the NACHA account set up on the owner's account.

 Related Preferences

 This option displays only if a NACHA ODFI-enabled bank is mapped to a bank account created in Rent Manager . For more information, refer to NACHA Settings (System Preferences) .

 Percentage

 The owner's percent of ownership for the selected property.

 Step 3: Review and Pay

 To finish the process of paying the property owners, in the Summary section, do the following:

 -
 Make the following optional selections.

 Option
 Description

 Comment

 A brief description of the distribution. To add a memorized comment, click .

 Create Bills

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Bills
 Add, View

 For more information, refer to Control User Access .

 Creates a bill for each owner based on their allocated payout.

 Write Checks

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 For more information, refer to Control User Access .

 Create a check for each owner based on their allocated payout.

 -
 When you are satisfied with the selections you made, click Pay .
The owner(s) at the property are paid and a record can be found on the owner account's Management Company tile.
