# Pay Off a Credit Card Balance

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Credit-Card-Pay-Off-Balance.htm

If you use credit cards for any business transactions, it is important to record this financial activity in Rent Manager just like any other transactions. If you use a credit card for just one property, you can just create a bill for that property for the full credit card amount and pay it off like any other bill.

 However, if you use a credit card to pay transactions across multiple properties, then you have to pay off the credit card liability for each property separately. Your credit card bill likely does not split up your totals by property, but Rent Manager can do this for you with the account balance disbursal tool. Once you have properly sorted the totals on the credit card for each property with this tool, you can then automatically create a bill that reflects these amounts for each property. Then when you pay that bill in Rent Manager , it properly pays off each property's credit card liability using the appropriate bank account(s).

 Warning

 Bills must be linked to a vendor in Rent Manager , so in order to create a credit card bill, you must have a vendor account for that credit card institution. For more information, refer to Vendors (Page) .

 Step 1: Create a Credit Card Transaction

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Credit card transactions
 Add, View

 For more information, refer to Control User Access .

 Credit cards are an important part of managing your businesses finances. To make the process of recording your credit card transactions as simple as possible, Rent Manager allows you to add as many credit card transactions as you need without ever leaving your database.

 To add a credit card transaction, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Banking  arrow_forward Credit Card Register .
The Credit Card Registers page displays.

 -
 Click Add Transaction .

 -
 In the section for transaction details, enter information in the fields below.

 Field
 Description

 Property

 The property to be expensed by the vendor. This is the property where there vendor provided the goods or service.

 Credit Card

 The credit card associated with the transaction. The Balance field reflects the current balance of the selected credit card account.

 Date

 The date the transaction was made. This field automatically populates with today's date.

 Reference

 An optional comment regarding the transaction. For example, you may use this field to record the invoice number for the transaction.

 Vendor

 The name of the vendor linked to the transaction. To automatically populate the properties, accounts, and amounts for each individual line item from a previous credit card transaction for the selected vendor, click Fill from Transaction History .

 Amount

 The dollar amount of the transaction. Alternatively, if you have multiple lines on the transaction, click to populate the total of all fields in the line items' Amount column.

 Charge/Credit

 The type ( Charge or Credit ) of the transaction.

 Comment

 An optional description or additional details about the transaction. For example, you may use this field to enter the name of the individual who performed the work.

 -
 In the Attachments section, click Upload Files to attach additional information related to the transaction, such as a digitally scanned copy of a receipt or invoice.

 -
 In the section for expenses, click   Add Expense to add each property expensed by the vendor. To split or duplicate the total amount of the transaction automatically among multiple properties, units, or GL accounts, click   Disburse Amount . For more information, refer to Disburse Amount .

 Field
 Description

 Property

 The property to be expensed by the vendor. This is the property where there vendor provided the goods or service.

 Unit

 The unit to be expensed by the vendor, if applicable.

 1099

 Check if the expense should be reported as a 1099 expense.

 Expense Account

 The general ledger (GL) account used to track the expense.

 Memo

 An optional comment about the expense to display on the general ledger report.

 Amount

 The portion of the total expense amount to be allocated to the property or unit.

 Billable

 Related Preferences

 This option only displays if Enable billable expenses is checked in the Checks/Bills section of system preferences. For more information, refer to Checks/Bills General (System Preferences) .

 Check to create a invoice for this transaction for a specific owner or tenant. This invoice can be used to reimburse you for the cost of the good or service provided by the vendor.

 Billable To

 The owner or tenant account receiving the invoice.

 Markup

 If applicable, the amount added to the expense's cost to help cover overhead and profit. Enter a number to charge a flat amount (e.g., 110.00 , 55.75 ) or a percent amount if the markup is a percentage of the line item's Amount (e.g., 40% , 30.5% ).

 Invoice Amount = Line Item Amount + Markup

 For example, if the line item's Amount is 400 and you enter a markup of 50 , the invoice created bills the account for $450. If you enter a markup of 25% , the invoice bills the account for $500, since twenty-five percent of four hundred is one hundred.

 -
 Click Save .
The transaction is added to the Credit Card Register .

 Step 2: Create a Bill for Credit Card Transactions

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Account Balance Disbursal tool
 Enabled

 For more information, refer to Control User Access .

 In addition to creating a transaction from the Credit Card Registers page, your credit card transactions can also be automatically tracked whenever you select it as a payment method for vendor bills or other payables. You can then use the account balance disbursal tool to separate these transaction total amounts by property. For more information, refer to Account Balance Disbursal .

 To create a bill that automatically separates your credit card transaction totals by property, do the following:

 -
 Go to arrow_forward Payables arrow_forward General arrow_forward Account Balance Disbursal .

 -
 In the Properties section, select the Properties or property Group to include in the credit card bill.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 If you want to include only unit-specific transactions at a property, in the Unit Level Disbursals field, click Click here to select and check the units to include. If you select <No Unit> for a property, only property-specific transactions for that property are included.

 -
 In the Disbursal Type field, select Bill .

 -
 Enter the needed information in the following fields:

 Field
 Description

 Source Account

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The credit card account for which you are creating a bill. The total amount of the transactions associated with this account for the selected properties will be disbursed.

 Date Range

 The transactions dated on or between the entered dates will be disbursed. This is usually the date range of your credit card bill.

 Use percentage

 If you wish to disburse only a partial amount of the total for each property, check this option and enter the percentage of the amount to calculate.

 For example, if Property A has a total amount of $1,000 and Property B has a total amount of $1,500 and you enter a percentage of 50 , then Property A disburses only $500 and Property B disburses only $750.

 More Information

 To make a partial credit card payment, it is recommended that you still disburse the full amount (100%) to the bill in Rent Manager . This way your Rent Manager bill for the credit card reflects the correct amount, and you can then pay the bill in increments like you would in the real world.

 Exclude negative balances

 Check to exclude properties and units that have negative balances in the selected GL account from the disbursement.

 For example, if you are calculating a credit card liability account and there is a property with a credit balance on the card (which displays as a negative balance), you can exclude this property from the disbursement so the credit is retained for the property.

 -
 Click Calculate .
The total amount of transactions on the credit card account during the date range is calculated and separated by each selected property.

 -
 In the Memo column, enter an optional note about the line item that you wish to show on the bill.

 -
 Click Disburse .

 -
 On the Bill Options pop-up, enter the applicable information for the bill.

 Field
 Description

 Vendor

 The vendor account for the credit card institution. Leave the 1099? box unchecked for credit card institutions.

 Bill Account

 The GL account for the credit card that populates in the Expense Account column for each line item on the bill. The Source Account is selected by default.

 Bill Date

 The date on which the bill was issued. This usually reflects the date of your real-world credit card bill.

 Post Date

 The date on which this bill expenses the GL account on an accrual accounting basis. This field defaults to the same date as the Bill Date and is usually the same.

 Invoice #

 The bill's reference number or invoice number, usually found on the bill you received from your credit card institution.

 Memo

 An optional message or note to provide further context about the bill.

 -
 Click Create .
A bill is created with each property's amount as a separate line item.

 Step 3: Pay the Credit Card Bill

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 Once you have created your credit card bill in Rent Manager , you can then pay the bill in Rent Manager to clear the credit card liability for each property. For more information, refer to Pay Bills .

 Related Preferences

 If the option Require bills to be approved before they can be paid is checked in system preferences, the credit card bill must be approved by a user with sufficient privileges before it can be paid. For more information, refer to Checks/Bills General (System Preferences) .

 To pay that credit card bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 Locate the credit card bill in the list and check the box in the Pay column.

 -
 Enter the applicable information in the following columns:

 Column
 Description

 Bank

 Related Privileges

 This field populates with only banks to which you have access. Your access to banks can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 The bank to be expensed to pay the associated bill which defaults to <Bill Default> . On the bill's details page, <Property Default> is selected by default and automatically expenses the bank established as the Default Bank on the property's details page for each property line item.

 Amount To Pay

 The dollar amount to pay towards the credit card bill. The full bill amount displays by default.

 Pay Method

 How the credit card bill should be paid (via ACH , Check , Debit , and so on).

 -
 Click Pay Bills .
The credit card bill is paid based on the amount entered via the selected payment method.
