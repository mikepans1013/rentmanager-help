# Task Automation (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Task-Automation.htm

These system preferences allow users to enable Task Automation , a tool that allows you to schedule routine tasks to run automatically in Rent Manager , such as posting recurring charges, sending accounts receivable alerts, creating recurring service issues, and charging late fees. Rent Manager checks posting schedules daily and posts the applicable items.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Task Automation .
The System Preferences: Task Automation page displays.

 -
 Edit the settings as desired. Each setting is described the heading below.

 -
 Click Save .
The system preference configuration is updated.

 General

 This section sets the tools and processes that can utilize Task Automation . Each option is described below.

 Option
 Description

 AR Automation

 Enables accounts receivable (AR) automation, which can be set up to automatically send notices to tenant contacts who have open or upcoming charges. You can create multiple notices and customize them based on the contact's delinquency. For more information, refer to Accounts Receivable Automation Schedules (Page) .

 The following options are available to establish automation schedule defaults:

 Default Schedule

 The AR automation schedule to be used as the system default. This schedule applies to any property whose details page has the AR Automation Schedule field set to <System Default> .

 Clear on Properties

 If a property's details page has the AR Automation Schedule field set to the same option selected in the Default Schedule field, click this option to revert that field to <None> and disable AR automation for that property. For more information, refer to Property Details (Page) .

 Set on Properties

 If a property's details page has the AR Automation Schedule field set to <None> , click this option to populate that field with the option selected in the Default Schedule field and enable AR automation for that property.

 Asset Depreciation

 Enables asset depreciation automation, which can be set up to automatically post journal entries for depreciation every month or fiscal year, depending on the option selected in the Posting Frequency field of the depreciation schedule. For more information, refer to Create a Depreciation Schedule .

 Additionally, in the Notify by Email field, you can enter the email address(es) to receive messages containing the results of each automated asset depreciation posting. To include multiple email addresses, separate each one with a semicolon (;).

 ePay Deposit Reconciliation

 Enable Task Automation for ePay deposit reconciliations, which can be set up to automatically process ePay payments using the date that the payment was deposited to your bank account by Zego in real life. Schedules for ePay deposit reconciliation cannot be configured; postings always take place once per day.

 More Information

 In order to enable Task Automation for an ePay deposit reconciliation, a reconciliation must have been performed within the last 15 days. Once enabled for the first time, automated ePay deposit reconciliation performs reconciliations up to 15 days in the past for deposits that have not been reconciled during that span. For more information, refer to Reconcile ePay Deposits .

 When this option is enabled, the following fields are available:

 Include transactions that violate hard close

 Transactions that are posted after any hard close date are included when the automated ePay deposit reconciliation runs. For more information, refer to Accounting Close (System Preferences) and Property Accounting Close (Pop-Up) .

 Notify by Email

 The email address(es) to receive messages containing the results of each ePay deposit reconciliation posting. To include multiple email addresses, separate each one with a semicolon (;).

 ePay Returns

 Enable Task Automation for ePay returns, which can be set up to automatically process non-sufficient funds (NSF) fees and reversals associated with ePay payments. For more information, refer to ePay Returns (Page) .

 Additionally, in the Notify by Email field, establish who should receive messages to alert them of any ePay returns so the issue can be resolved in a timely manner. Each option is described below:

 Other Recipients

 Send alerts for all properties to the email address(es) entered in this field. To include multiple email addresses, separate each one with a semicolon (;).

 Property Managers

 Send alerts for a property to the email address(es) entered in that property details page's Email field. For more information, refer to Property Details (Page) .

 GPR

 Enable Task Automation for calculating gross potential rent (GPR), which can be set up to automatically create journal entries to reduce the rental income general ledger (GL) account to $0 and adjust other designated income GL accounts to project your maximum revenue.
For more information, refer to GPR Automation Schedules (Page) .

 Late Fees

 Enable Task Automation for late fees, which can be set up to automatically process one-time late charges for delinquent tenants and add the charges to their account balance automatically. For more information, refer to Late Fee Automation Schedules (Page) .

 Loan Late Fees

 Enable Task Automation for loans receivable late fees, which can be set up to automatically process one-time late charges for delinquent borrowers and add the charges to their account balance automatically.
For more information, refer to Loans Receivable Late Fee Automation Schedules (Page) .

 Management Fees

 Enable Task Automation for management fees, which can be set up to automatically calculate and post fees to owners based on any of their owned properties' management fee setup.
For more information, refer to Management Fees Automated Posting (Page) .

 Loans Payable

 Enable Task Automation for loans payable charges, which can be set up to automatically to post expenses for open loans on a specific day of each month automatically.

 On a loan's Payment Info pop-up, the Automate Loan Payments option must be enabled before automated posting can begin. The option has to be enabled for each individual loan you want to automate posting on. For more information, refer to Loans Payable Payment Info (Pop-Up) .

 Loans Receivable

 Enable Task Automation for loans receivable charges, which can be set up to automatically post principal transactions to borrowers with open loans on specific dates. For more information, refer to Loans Receivable Automation Schedules (Page) .

 Recurring Bills

 Enable Task Automation for specified recurring bills, which can be set up to automatically create bills based on the set frequency and active date range for that recurring bill. For more information, refer to Add a Recurring Bill .

 Recurring Charges

 Enable Task Automation for recurring charges, which can be set up to automatically post recurring charges for tenants on set dates, for specific properties, and at different frequencies. For more information, refer to Recurring Charges Automation Schedules (Page) .

 Recurring ePay

 Enable Task Automation for recurring ePay , which can be set up to automatically process batch payments for tenants with ePay information entered on their Rent Manager account.
For more information, refer to Recurring ePay Automation Schedules (Page) .

 Recurring Issues

 Enable Task Automation for recurring service issues, which can be set up to automatically create identical issues on a regular basis determined by settings on the recurring issue's Recurrence tile. For more information, refer to Add a Recurring Issue .

 Recurring Journals

 Enable Task Automation for specified recurring journals, which can be set up to automatically create identical journal entries on a regular basis determined by settings on the recurring journal's Summary section. For more information, refer to Add a Recurring Journal .

 Tenant Statements

 Enable Task Automation for tenant statements, which can be set up to automatically send financial statements to tenant contacts on a consistent schedule and with specific statement options. For more information, Tenant Statement Automation Schedules (Page) .

 Utilities

 Enable Task Automation for utilities, which can be set up to automatically charge metered utility usage fees to tenants, create invoices for those charges, and handle overages for commercial recoverable expenses (CRE). For more information, refer to Utilities Automated Postings (Page) .
