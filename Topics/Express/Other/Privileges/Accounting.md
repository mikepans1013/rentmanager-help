# Accounting Privilege Group

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Privileges/Accounting.htm

Accounting privileges provide access to accounting features such as: GL accounts, charge types, journal options, gross potential rent, and check registers.

 Related Privileges

 Group
 Privilege
 Column

 System
 Manage assigned users and privileges
 View, Edit

 Manage all users and privileges
 View, Edit

 For more information, refer to Control User Access .

 To manage these privileges, do the following:

 -
 Go to arrow_forward Administration , then go to Users arrow_forward Users . Select a user and click the Privileges tab.

 -
 Click next to the privilege group to expand the privilege list.

 -
 To enable a privilege, check the box. Each privilege is described below.

 -
 Click Save .

 Privilege Descriptions

 Each privilege is described below.

 Privilege
 Description

 General ledger accounts

 Allows a user to add, view, edit, or delete GL accounts from the Chart of Accounts .

 Merge GL Accounts

 Allows a user to move the transaction data of one GL account to another with the Merge GL Accounts tool.

 Accounting periods

 Allows a user to add, view, edit, and delete accounting periods.

 Related Preferences

 To configure accounting periods in Rent Manager , you must first enable the General Ledger Settings (System Preferences) option to Enable accounting periods .

 Override General Ledger Report Drill Down

 If the user does not have access to the General Ledger report (as granted on the User Details (Page) ), enable this privilege to allow them to view General Ledger report details in other reports.

 For example, if a user with this privilege enabled generates the Profit & Loss report and clicks on the amount of a GL account, a limited General Ledger report is generated specific to that GL account.

 If a user does not have this privilege enabled and does not have access to the General Ledger report, clicking on that GL account amount will not generate a General Ledger report.

 More Information

 This privilege must be enabled for a user. It is not automatically assigned to users designated as Administrator on the User Details page.

 Chart mappings

 Allows a user to add, view, edit, or delete mapped chart accounts via Chart of Accounts Mapping .

 Charge types

 Allows a user to add, view, edit, or delete Charge Types .

 Merge Charge Types

 Allows a user to merge one Charge Type into another via Merge Charge Types .

 Journal entries

 Allows a user to add, view, edit, or delete Journal Entries .

 Memorized journal entries

 Allows a user to add, view, edit, or delete Memorized Journal Entries .

 Recurring journals

 Allows a user to add, view, edit, or delete Recurring Journals .

 Post recurring journals

 Allows a user to Post Recurring Journals to generate monthly, weekly, or daily journal entries.

 Set journal basis (cash or accrual)

 Allows a user to choose the accounting method (cash or accrual) of a journal entry when generating reports.

 Jobs

 Allows a user to add, view, edit, or delete trackable jobs for job costing. For more information, refer to Jobs (Page) .

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Job types

 Allows a user to add, view, edit, or delete Job Types for jobs.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Assign jobs

 Allows a user to assign jobs to bills, checks, journal entries, purchase orders, service issues, invoices, or credit card transactions.

 Related Preferences

 In order to use the job costing tool in Rent Manager , Enable job costing must be checked in system preferences. For more information, refer to General Options (System Preferences) .

 Post gross potential rent

 Allows a user to post Gross Potential Rent for one or more properties.

 Account Balance Disbursal tool

 Allows a user to calculate the balance of a general ledger account for one or more properties and then transfer some or all funds to another GL account with a bill or journal entry using Account Balance Disbursal .

 View journal register

 Allows a user to access to the Journal Entries register that tracks information on every created journal entry.

 View check register

 Allows a user to access to the check register that tracks information on created Checks .

 View bill register

 Allows a user access to the bill register that tracks information on Bills .

 Manage Bank Sync Setup

 Allows a user to access the Bank Sync Setup page that tracks bank and credit card account connections through Plaid.
