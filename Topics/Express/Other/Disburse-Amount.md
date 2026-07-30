# Disburse Amount

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Disburse-Amount.htm

There are various tools in Rent Manager where you may need to add multiple line items for transactions, such as writing a check, creating a bill, adding charges or credits to a credit card, making a deposit, or performing reconciliations. The Disburse Amount pop-up in Rent Manager allows you to automatically add multiple line items at once and split up the amount for each line item by property, unit, or general ledger (GL) account. You can also choose the method by which the amount is divided. This allows you to more quickly and efficiently calculate and divide the amount of the transaction in one step, rather than manually adding each line item individually.

 The Disburse Amount pop-up is a tool that can be accessed from various areas of Rent Manager . Information about how this pop-up is used on each tool is described in the table below.

 Tool
 Description

 Reconciliations

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Reconciled transactions
 Add

 For more information, refer to Control User Access .

 Splits or disburses the amounts for service charges and interest that apply to the reconciliation. This is also used on electronic reconciliations.

 Deposits

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Bank deposits
 Add

 Step three deposits
 Add, Edit

 For more information, refer to Control User Access .

 When adding additional income in a deposit via the Other Items tab, split or disburse the amount for that income to multiple line items.

 Checks

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

 When adding multiple expense items to a check, split or disburse the amount to multiple line items.

 Bills

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Bills
 Add, View, Edit

 Accounting
 View bill register
 Enabled

 For more information, refer to Control User Access .

 When adding multiple expense items to a bill, split or disburse the amount to multiple line items.

 Credit Card Transactions

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Credit card transactions
 Add, View, Edit

 For more information, refer to Control User Access .

 When adding transactions to a credit card, split or disburse the amount of the charge or credit to multiple line items.

 The various methods by which you can split or disburse an amount are described in the headings below.

 Disburse an Amount between Properties

 Splitting or disbursing the amount by property divides a total amount among selected properties based on a specified calculation method. This is useful for situations such as having one large expense that was applied to multiple properties.

 The image below shows an example of a service charge amount disbursed between multiple properties on a bank reconciliation with the amount divided based on the number of units at each property.

 To disburse an amount to multiple properties, do the following:

 -
 In the Type field, select Property .

 -
 In the Property drop-down list, select each property that should receive a portion of the transaction amount. Alternatively, in the Group field, select a property group to automatically select the properties that are part of that group.

 -
 In the GL Account field, select the general ledger account being expensed or credited for the transaction. This GL account is applied to each line item.

 -
 In the Disbursal Method field, select how the total amount is split between the properties. Each method is described in the table below.

 Option
 Description

 Evenly

 Split the Amount evenly across the selected properties.

 For example, if you have three properties expensed with $750.00, three expense line items are created for an amount of $250.00 each (one for each property).

 Duplicate

 Apply the full Amount value to each selected property.

 For example, if you have four properties that had the same work done and it was $700.00 for each property, four expense line items are created for an amount of $700.00 each (one for each property).

 Percent of Square Footage

 Split the Amount between each selected property based on its percentage of square footage compared to the total square footage of all the selected properties. The square footage of each property is located in the Total Sq Ft field on the property's details page.

 More Information

 If a property does not have a value entered for Total Sq Ft , the total square footage of each active unit at the property determines the property's total square footage. The unit's Square Footage is located on the Miscellaneous section of each unit's details page.

 For example, consider a scenario where you have a total Amount of $1,200.00 and select two properties. Property A is 2,000 square feet and Property B is 1,000 square feet. Since Property A has two-thirds of the total square footage, it is allocated two-thirds of the total amount. This results in a two line items: one for Property A for $800.00, and one for Property B for $400.00.

 Percent of User Defined Field

 Split a specified percent of the Amount between each property based on the value of a selected user defined field (UDF) compared to the total of all values in that UDF for all selected properties. If selected, choose the property-type UDF to use from the User Defined Field drop-down list. The UDF values for each property must be numeric.

 For example, consider a scenario where you have a total Amount of $900.00, you selected two properties, and selected a numeric UDF named # of buildings . Property A has 2 buildings and Property B has 1 building. Since Property A has two-thirds of the total UDF value, Property A is allocated two-thirds of the total amount. This results in a two line items: one for Property A for $600.00, and one for Property B for $300.00.

 Relative Percent of Units in a Property

 Split the Amount between each selected property based on its percentage of the number of active units compared to the total number of active units of all the selected properties.

 For example, consider a scenario where you have a total Amount of $1,000.00 and selected all of your properties. If you have a total of 800 active rental units between all the selected properties, and Property A has 200 of those active units, the line item for Property A is allocated an amount of $250.00 (twenty-five percent of the total amount).

 -
 In the Amount field, enter the total dollar amount to be divided among the properties unless you selected a Disbursal Method of Duplicate . If you selected Duplicate , enter the amount to expense or credit on each line item.

 -
 In the Memo field, add a comment to provide further context about the transactions. The memo is added to each line item.

 -
 If these items should be counted towards a 1099 tax form, check Is 1099 .

 -
 Click Disburse .
A line item is added for each selected property with the specified GL account and the amounts are calculated based on your Disbursal Method .

 Disburse an Amount between Units

 Splitting or disbursing the amount by unit divides a total amount among selected units at a single property based on a specified calculation method. This is useful for situations such as having one large expense for a service performed at multiple units at the property.

 The image below shows an example of a deposit's Other Items tab with the same dollar amount applied to multiple units at a property.

 To disburse an amount to multiple units, do the following:

 -
 In the Type field, select Unit .

 -
 In the Property field, select the property to apply the transactions to units at that property.

 -
 In the Unit drop-down list, select each unit that should receive a portion of the transaction amount.

 -
 In the GL Account field, select the general ledger account being expensed or credited for the transaction. This GL account is applied to each line item.

 -
 In the Disbursal Method field, select how the total amount is split between the properties. Each method is described in the table below.

 Option
 Description

 Evenly

 Split the Amount evenly across the selected units.

 For example, if you have ten units expensed with $800.00, ten expense line items are created for an amount of $80.00 each (one for each unit).

 Duplicate

 Apply the full Amount value to each selected unit.

 For example, if you have twenty units that had the same work done and it was $500.00 for each unit, twenty expense line items are created for an amount of $500.00 each (one for each unit).

 Percent of Square Footage

 Split the Amount between each selected unit based on its percentage of square footage compared to the total square footage of all the selected units. The square footage of each property is located in the Square Footage field on the unit's details page.

 For example, consider a scenario where you have a total Amount of $1,300.00 and selected four units. Unit A is 2,000 square feet and the three other units are 1,000 square feet. Since Unit A has two-fifths of the total square footage, it is allocated two-fifths of the total amount. This results in a four line items: one for Unit A for $520.00, and three for $260.00 for the other units.

 Percent of User Defined Field

 Split a specified percent of the Amount between each unit based on the value of a selected UDF compared to the total of all values in that UDF for all selected units. If selected, then choose the unit-type UDF to use from the User Defined Field field. The UDF values for each unit must be numeric.

 For example, consider a scenario where you have a total Amount of $2,200.00, have selected three units, and selected a numeric UDF named # of amenities . Unit A has 4 amenities and the other three units each have 2 amenities. Since Unit A has half of the total UDF value, Unit A is allocated half of the total amount. This results in a three line items: one for Unit A for $1,100.00, and two for $550.00 for the other units.

 -
 In the Amount field, enter the total dollar amount to be divided among the properties unless you selected a Disbursal Method of Duplicate . If you selected Duplicate , enter the amount to apply to each line item.

 -
 In the Memo field, add a comment to provide further context about the transactions. The memo is added to each line item.

 -
 If these items should be counted towards a 1099 tax form, check Is 1099 .

 -
 Click Disburse .
A line item is added for each selected unit with the specified GL account and the amounts are calculated based on your disbursal method.

 Disburse an Amount between GL Accounts

 Splitting or disbursing the amount by general ledger (GL) account is when you divide a total amount among selected GL accounts based on a specified calculation method. This is useful for situations in which a large expense for a single property or unit that covers multiple services and should be applied to separate GL accounts.

 The image below shows an example of a service charge amount disbursed between multiple GL accounts on a check with the total dollar amount divided evenly between each account.

 To disburse an amount to multiple GL accounts, do the following:

 -
 In the Type field, select GL Account .

 -
 In the Property field, select the property to apply the transactions to units at that property.

 -
 If applicable, in the Unit drop-down list, select the unit to which this transaction applies. Otherwise, leave this field blank.

 -
 In the GL Account drop-down list, select each GL account being expensed or credited for the transaction. A separate line item is added for each selected account.

 -
 In the Disbursal Method field, select how the total amount is split between the properties. Each method is described in the table below.

 Option
 Description

 Evenly

 Split the Amount evenly across the selected GL accounts.

 For example, if you select four GL accounts to expense a total of $800.00, four expense line items are created for an amount of $200.00 each (one for each GL account).

 Duplicate

 Apply the full Amount value to each selected GL account.

 For example, if you select six GL accounts that were each expensed $300.00 at the same property, six expense line items are created for an amount of $300.00 each (one for each GL account).

 -
 In the Amount field, enter the dollar amount of the transaction(s) based on your Disbursal Method .

 Method
 Description

 Evenly

 If you selected Evenly , enter the total amount of the transaction to be divided between each GL account.

 Duplicate

 If you selected Duplicate , enter the amount to expense or credit on each line item.

 -
 In the Memo field, add a comment to provide further context about the transactions. The memo is added to each line item.

 -
 If these items should be counted towards a 1099 tax form, check Is 1099 .

 -
 Click Disburse .
A line item is added for each selected GL account with the specified property and the amounts are calculated based on your disbursal method.
