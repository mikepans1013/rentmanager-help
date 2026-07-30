# Set Up Billable Expenses

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Billable-Expenses-Set-Up.htm

Billable expenses is a billing and invoicing tool that allows you to charge back expenses to tenants or owners in the form of invoices, and optionally add a markup amount to each billable expense as part of the reimbursement. When this tool is enabled, columns are added to Rent Manager bills, checks, and credit card transactions to identify billable expenses, assign them to an owner or tenant, add a markup for the expenses, and then create invoices to bill back those expenses.

 To set up billable expenses, you must enable it in system preferences and, if you invoice owners, establish settings for how those receivables are handled when billable expenses are paid. After completing these setup steps, you can begin to utilize the tool in Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Owners
 Owners
 View

 For more information, refer to Control User Access .

 Step 1: Enable Billable Expenses

 To enable billable expenses, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Checks/Bills arrow_forward General .

 -
 In the Billable Expenses section, check Enable billable expenses .

 -
 Configure the following default options:

 Option
 Description

 Default Billback Entity

 The default entity, either Owner or Tenant , that displays in the Billable To column on checks, bills, and credit card transactions.

 If Auto is selected, Rent Manager automatically determines the entity in the Billable To column based on who is being invoiced. If your management company property is being billed back, owners display. If any other property is being billed back, tenants display.

 Default Markup

 The dollar amount or percentage that displays by default in the Markup column of each billable expense.

 -
 Click Save .
Billable expenses are now enabled in your database.

 Step 2: Set Up Receivable Options for Invoicing Owners

 To establish your management company's preferences for receivables from owner invoices, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Management Company .

 -
 In the Receivables section, check Add a payment from the owner when a bill is paid to the management company . With this option enabled, paying a bill that has the vendor set to your management company results in Rent Manager automatically adding a payment on the owner account to reimburse your management company. That payment pays the invoice linked to the bill by the billable expenses tool.

 -
 Enable any of the following options to best reflect your management company's practices:

 Option
 Description

 Allow manual allocation of payment at the time bills are paid

 Allows you to choose which open owner invoices to apply the check payment toward when paying bills with billable expenses. If unchecked, Rent Manager  automatically applies an owner payment to the oldest open owner invoice.

 Deposit the payments for commingled funds

 If the expensed property in a bill has commingled funds (meaning the expensed property and your management company use the same default bank), check this option to automatically deposit the owner payment that is created to pay the invoice linked to the bill. If this option is unchecked, owner payments must be manually deposited.

 Deposit the payments for non-commingled funds

 If the expensed property in a bill has non-commingled funds (meaning the expensed property and your management company do not use the same default bank), check this option to automatically deposit the owner payment that is created to pay the invoice linked to the bill in your management company's bank. If this option is unchecked, owner payments must be manually deposited.

 More Information

 This option updates the allocation of your funds in Rent Manager , but you must still make the money transfer to the correct bank account in the real world.

 - Click Save .
Your preferences for owner invoices created with billable expenses are established.
