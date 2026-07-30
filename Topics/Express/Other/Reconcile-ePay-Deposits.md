# Reconcile ePay Deposits

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Reconcile-ePay-Deposits.htm

The date Zego ePay transactions are recorded in Rent Manager is the date ePay deposits are created. The transactions, however, deposit to your actual bank account after being processed by Zego . This means there may be a difference between the date ePay transactions are recorded in Rent Manager and the real-world date the transaction is processed.

 Rent Manager provides ePay deposit reconciliation to compare and correct, if necessary, any date discrepancies between your ePay provider and Rent Manager .

 Related Preferences

 ePay deposit reconciliation is available only if the Managed Deposits option is checked in system preferences. For more information, refer to Advanced ePay (System Preferences) .

 Step 1: Configure System Preferences for ePay Deposit Reconciliation

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 ePay

 Access ePay Settings
 Enabled

 Setup and perform ePay operations
 Enabled

 For more information, refer to Control User Access .

 To get started with ePay deposit reconciliation, a few things need to be configured within Rent Manager .

 Ensure the following system preferences are set:

 Option
 Description

 Advanced ePay (System Preferences)

 Preferences to control the types of payment methods that you can accept and how the deposits of ePay payments are tracked in Rent Manager . For more information, refer to Advanced ePay (System Preferences) .

 Security ePay (System Preferences)

 Rent Manager allows you to get rid of inactive data from the system and set your ePay password. For more information, refer to Security ePay (System Preferences) .

 Step 2: Perform an ePay Deposit Reconciliation

 Related Privileges

 Group
 Privilege
 Column

 ePay

 Perform ePay Deposit Reconciliation
 Enabled

 For more information, refer to Control User Access .

 With ePay deposit reconciliation, you can match your recorded ePay transactions to the date Zego deposited the transactions to your bank by performing a deposit reconciliation. To begin the reconciliation, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Payments arrow_forward ePay Deposit Reconciliation .
The ePay Deposit Reconciliation page displays.

 -
 Enter the From date and the To date in the Filter By Date fields. The date range can't be more than a month in the past.

 -
 To include transactions that occurred during an already-closed accounting period, check Include Transactions That Violate Hard Close .

 -
 Review the information in the following columns:

 Column
 Description

 Deposit

 The system-generated reference number of the deposit.

 Name

 The name of the account linked to the transaction.

 Type

 The account type linked to the transaction.

 Owner

 The transaction is an owner contribution made with ePay or a scanned owner check processed with ePay .

 Prospect

 The transaction is an ePay payment made by a prospect, such as an application fee or security deposit.

 Tenant

 The transaction is an ePay payment made by a tenant, such as a rent payment.

 Vendor

 The transaction is a vendor check paid via ePay .

 Property

 The property associated with the transaction.

 Unit

 The unit name linked to the transaction.

 Date

 The date the transaction was entered in Rent Manager .

 Check

 The reference name of the check for the transaction (i.e., CC ).

 Amount

 The dollar amount of the transaction.

 -
 Click Create Deposits to correct any date discrepancies between your ePay provider and Rent Manager . A best practice is to compare your Zego deposit notification email with the payments displayed, filtered by the dates specified in the email. Verify the totals match before clicking Create Deposits .

 -
 Approve any pop-ups to complete the reconciliation.

 Related Preferences

 To help you save time, ePay deposit reconciliations can be automated with Task Automation . For more information refer to Task Automation (System Preferences) .
