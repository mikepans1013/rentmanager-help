# Make ePay Deposits

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/ePay-Deposit-Make.htm

When tenant payments are made via ePay , the funds are automatically processed and deposited into your actual bank account(s) by Zego . To ensure that your financial data in Rent Manager matches your real world finances, these payments need to be deposited using the Make ePay Deposit page. Alternatively, you can automate ePay deposits by setting up Task Automation for ePay deposit reconciliation.

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Set up and perform ePay operations
 Enabled

 Create manual deposits with managed deposits
 Enabled

 Manage deposits
 Edit

 Banks/Checks
 Bank deposits
 Add

 For more information, refer to Control User Access .

 Step 1: Establish ePay Settings

 Before you can collect ePay payments and create deposits, you need to enable ePay in Rent Manager , select the payment method(s) that can be used for ePay payments, and decide how ePay deposits are processed in system preferences. If these preferences are already set up in your database, proceed to step 2.

 Option
 Description

 Merchant Information

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 In order to collect ePay payments, ePay needs to be enabled in Rent Manager and your Zego account credentials must be established in system preferences. For more information, refer to General ePay (System Preferences) .

 Account Types

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Account types allow you to define the payment methods that tenants can use to make ePay payments, such as through automated clearing house (ACH) accounts or specific credit card companies. Each option must be enabled by Zego before payments can be accepted. For more information, refer to Advanced ePay (System Preferences) .

 Deposit Options

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 There are three options available for handling ePay deposits in Rent Manager : Managed Deposits , Separate deposits (Credit Cards, ACH) , and Automatically deposit ePay payments . For more information, refer to Advanced ePay (System Preferences) .

 ePay Banks

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 ePay banks are bank accounts that have been set up with Zego to accept ePay payments. For more information, refer to Tenant ePay (System Preferences) .

 Property ePay

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 Properties either can use the default ePay bank account established in system preferences or have a unique bank account established on the property's ePay Setting pop-up. For more information, refer to Property ePay Settings (Pop-Up) .

 Step 2: Create the ePay Deposit

 To create an ePay deposit, do the following:

 -
 Go to arrow_forward Accounting arrow_forward ePay arrow_forward Make ePay Deposit .

 -
 At the top of the page, select the Properties or property Group for which you are making the deposit.
The center of the page updates to display undeposited ePay payments associated with the selected properties.

 -
 Select the undeposited payment(s) to include in the ePay deposit.

 Step 3: Add Other Income to the Deposit

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Step three deposits
 Add

 For more information, refer to Control User Access .

 The Other Income tile allows you to track any other additional income you need to deposit that is not accounted for in a payment, such as concessions, vending machines, and coin laundry.

 To add other income to an ePay deposit, do the following:

 -
 In the Payments section, select Add Other Income .

 -
 For the new line item, enter the applicable information for each column below.

 Column
 Description

 Amount

 The dollar amount of the income for this line item.

 Income Account

 The general ledger (GL) account used to track this type of income.

 Job

 If this income can be associated with a job, select the job from the drop-down list. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Memo

 A brief comment about this income, such as the event or building where it was collected.

 Property

 The property from which the income is collected.

 Reference

 The payment type of the income.

 Cash

 Record as a cash payment.

 CC

 Record as a credit card payment.

 Check

 Manually type the check number to record as a check payment.

 MO

 Record as a money order payment.

 Unit

 The unit associated with the income, if applicable.

 Vendor/Owner

 If applicable, the account type and specific account that provided the income.

 -
 Click Add Item to add as many line items to the deposit as needed. Alternatively, click Disburse Amount to have Rent Manager automatically calculate and distribute the total income amount between properties, units, or GL accounts into individual line items. For more information, refer to Disburse Amount .

 Step 4: Complete the Deposit

 To complete the deposit, do the following:

 -
 Click Deposit .

 -
 Enter or select the needed information in the available fields:

 Field
 Description

 Attachments

 Any images or documents relevant to the ePay deposit, such as a screenshot of the deposit confirmation from Zego . To upload a file, click Upload or to paste an image from your clipboard, click Paste .

 Bank Account

 The bank account to deposit the income into, or choose one of the options below.

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 <Use Charge Type Banks>

 Instead of depositing payments based on the property's default bank, payments are deposited to specific banks based on the charges they pay. This option is beneficial if you are depositing payments to bank accounts based on the property's charge type bank setup. For more information, refer to Charge Type Banks (Pop-Up) .

 More Information

 Rent Manager can perform a split deposit when using charge type banks to split a single payment across multiple bank accounts if that payment is a non-Check 21 ePay transaction.

 Scanned checks processed through ePay are considered Check 21 transactions.

 <Use Property Default>

 Deposit each payment into the default operating account for its associated property. This option is beneficial if you are depositing payments from multiple properties to multiple bank accounts at once.

 Comments

 An optional note or additional information regarding this ePay deposit. This comment displays in several deposit reports and on the Deposits details page for the associated payment.

 To select a memorized comment, click .

 Deposit Date

 The date on which this income was deposited by Zego in the real world.

 Print Deposit Ticket

 If checked, Rent Manager generates a printable copy of the ePay deposit record once the deposit is submitted. In the drop-down to the right, select which type of deposit ticket to print.

 MICR Deposit

 Generates the MICR Deposit Detail report, which is a summary of the deposit information that can be printed onto preformatted MICR stock.

 Standard Deposit

 Generates the Deposit Detail report, which is a summary of the deposit with its own formatting similar to other Rent Manager reports. For more information, refer to Deposit Detail (Report) .

 -
 Click Deposit .
The Confirm Deposit pop-up displays.

 -
 Verify the deposit information and click Yes .
The payments are deposited, and, if a report option was selected, the deposit report displays. Previous deposits can be viewed in Rent Manager by clicking Deposit # on a payment.
