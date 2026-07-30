# Pay Off a Credit Card Balance with a Check

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Credit-Card-Pay-Off-Balance-Check.htm

If you use credit cards for any business transactions, it is important to record this financial activity in Rent Manager just like any other transaction. If you use a credit card for just one property, or if you have a credit card with an open balance that you want to pay off all at once, you can write a check in Rent Manager for the full credit card amount, paying it off with one check. For more information about disbursing an amount among several properties, refer to Pay Off a Credit Card Balance .

 You can check the balance on a credit card by going to arrow_forward Accounting arrow_forward Banking arrow_forward Credit Card Register . In the Credit Card field, enter the card for which you want to check the balance.

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Checks
 Add, View

 Accounting
 General ledger accounts
 View

 For more information, refer to Control User Access .

 To pay off a credit card using a check in Rent Manager , do the following:

 -
 Go to arrow_forward Payables arrow_forward Checks arrow_forward Write Checks .
The Write Check pop-up displays.

 -
 Enter the following information about the check details:

 Field
 Description

 Property

 The property associated with the credit card being paid off or the property management company itself.

 Bank

 The operating bank for your property management company.

 Related Privileges

 To write checks that are not drawn from the Default Bank specified on the property's details page, the Write checks from banks that are not default privilege must be enabled. For more information, refer to Banks/Checks Privilege Group .

 Date

 The date the payment is made.

 No.

 The number of the check. This number defaults to the next number in your checkbook sequence. If you pay this check online, enter ACH .

 Vendor

 The vendor account associated with the credit card. This is usually the bank that issued the card.

 Amount

 The total dollar amount of the payment.

 Payee Information

 The name and address of the vendor receiving the payment. This information automatically populates from the vendor's details page.

 Memo

 An optional message describing the payment.

 -
 Choose from the following settings to print or attach files to this check:

 Field
 Description

 Check will be printed

 If you have a printer connected to Rent Manager , check this option to indicate that the check is printed.

 Avid Pay

 An automatic bill payment integration provided by AvidXchange using the Post AvidPay tool in Rent Manager .

 Upload Files

 To attach any related images or documents from your network or computer to the check, click Upload Files .

 -
 Enter the following allocation information. Even if you do not plan to disburse the amount to more than one property, you must enter at least one allocation in this section.

 Field

 Description

 Property

 The property associated with the payment. This is the same property you entered in Step 2.

 Unit

 To link the allocation to a single unit, select a unit from the drop-down.

 Expense Account

 The general ledger (GL) account for the credit card you are paying off.

 Job

 If job costing is enabled, select a job from the search bar.

 Related Preferences

 This option displays only if Enable job costing is checked in the General Options section of system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 An optional note explaining this allocation.

 Amount

 The total dollar amount to allocate to the accounts in this line item. The total of all Amount fields in the allocations section must match the amount you entered in Step 2.

 -
 Click Save .
The check is created and now displays on the Credit Card Register . The amount is subtracted from the credit card's balance.
