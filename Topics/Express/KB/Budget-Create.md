# Create a Budget

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Budget-Create.htm

Creating and tracking budgets is important for measuring actual income and expenses versus projected revenue and costs. Rent Manager makes budgeting easy by allowing you to enter data manually, copy a budget from the previous year, or import a budget file. When entering data manually, you can save time by using quick tools that prompt Rent Manager to calculate and distribute budget data across the year for a GL account based on a flat amount or percentage.

 More Information

 If you manage commercial properties, you can use budgeted numbers to auto-calculate your tenants’ recurring commercial recoverable expense (CRE) charges. For more information, refer to Add a CRE Recurring Charge .

 Related Preferences

 You can set your system preferences to display warnings when financial transactions will exceed your budget goals. For more information, refer to Budget (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Budgets
 View, Edit

 For more information, refer to Control User Access .

 To create and manage your budgets, go to arrow_forward Administration , then go to Accounting arrow_forward Budget .

 Manually Enter a Budget

 To manually enter a budget, do the following:

 -
 In the Property field, select the property for which you are creating a budget.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 At the top, select one of the following tabs:

 Tab
 Description

 Profit & Loss

 The existing income and expense accounts display in the leftmost column, followed by a Total column and a column for each month in sequential order from left to right. Yearly and monthly Total Expenses and Net Income calculate at the bottom of the budget.

 Balance Sheet

 The existing asset, liabilities, and equity accounts display in the leftmost column, followed by a Final column and a column for each month in sequential order from left to right. Monthly Total Assets , Total Liability , Total Equity , and Liability + Equity calculate at the bottom of their sections in the budget.

 -
 For the general ledger (GL) account for which you are setting a budget, click in the cell for the desired month (such as Jan 26 ).

 -
 Enter the dollar value for the maximum budget for that month.

 More Information

 You can adjust the value in a cell by a flat amount or percentage by clicking the cell and selecting Modify Selected . Select how to change the value and then enter the flat Amount or Percentage by which to increase the value. To reduce the value, enter a negative number.

 -
 Press the Tab key to quickly move to the next month in the row and enter the maximum budget for that month. Alternatively, click Copy Across to quickly calculate subsequent values based on a flat amount or percentage. For more information, refer to the Copy Values Across the Year heading below.

 -
 Repeat until all months for the GL account are filled out.
The Total or Final column calculates the sum of the values entered in all months for the account. The name of the column varies based on the selected budget tab.

 -
 Repeat all steps for each GL account as needed.

 More Information

 To set a GL account's budget for the entire year instead and automatically fill all months for that account based on the yearly budget amount, enter the year's budget amount in that account's Total or Final column. You can then opt to divide the amount across all months evenly or based on a previous budget's monthly ratio.

 -
 Click Save .
The budget data is saved. If needed, select the other budget tab ( Profit & Loss or Balance Sheet ) and repeat the steps for those GL accounts.

 Copy Values Across the Year

 You can quickly fill data across a GL account based on the amount entered in a selected cell. For instance, you can click the Jan 26 cell for a GL account, enter a value, and then automatically fill each month after that based on the entered value.

 To copy values across the year, do the following:

 -
 In the desired cell, enter the budget value amount for the associated month and GL account.

 -
 Click the cell and select Copy Across .

 The  Copy Across pop-up displays.

 -
 Select one of the available options described below.

 Option
 Description

 Copy same amount across

 All cells in the row to the right of the selected cell fill with the same amount entered in the selected cell.

 For example, if you enter 50.00 in this cell, then all cells for the following months in the row populate with 50.00 .

 Change amount by a given amount each month

 All cells in the row to the right of the selected cell increase or decrease by a specified flat amount each month. In the Amount field, enter a positive number to increase the value each month by that amount or enter a negative number to decrease the value each month by that amount.

 For example, if the cell has 100.00 entered and you enter 50 in the Amount field, then the months after the cell populate with 150.00 , 200.00 , 250.00 , and so on.

 Change amount by a percentage each month

 All cells in the row to the right of the selected cell increase or decrease by a percentage each month. In the Percent field, enter a positive number to increase the value each month by that percent or enter a negative number to decrease the value each month by that percent.

 For example, if the cell has 1,250.00 entered and you enter 10 in the Percent field, then the months after the cell populate with 1,375.00 , 1,512.50 , 1,663.75 , and so on.

 -
 Click Copy .
The cells to the right of the selected cell populate with budget data.

 Fill Budget from a Previous Year

 If you are creating a budget that is similar to the budget of a previous year, you can save time by copying the data from the prior year into the current budget. This can be done only if the previous year's budget or financial data was entered into Rent Manager . Once copied over, you can edit or add the data into the budget as desired if there are any differences or changes that need to be made.

 To pull data from a previous year's budget, do the following:

 -
 In the Property field, select the property for which you are creating a budget.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 At the top, select one of the following tabs:

 Tab
 Description

 Profit & Loss

 The existing income and expense accounts display in the leftmost column, followed by a Total column and a column for each month in sequential order from left to right. Yearly and monthly Total Expenses and Net Income calculate at the bottom of the budget.

 Balance Sheet

 The existing asset, liabilities, and equity accounts display in the leftmost column, followed by a Final column and a column for each month in sequential order from left to right. Monthly Total Assets , Total Liability , Total Equity , and Liability + Equity calculate at the bottom of their sections in the budget.

 -
 On the action bar to the right, click arrow_forward Fill From Previous .
The Fill From Previous pop-up displays.

 -
 Select one of the available options described below:

 Option
 Description

 Fill with values from previous year's budget

 The exact budget data entered for this property for the prior year is copied to the current budget.

 Fill with values from previous year's income and expenses

 Budget data is calculated based the actual income and expenses accrued from the prior year. Select whether to use the data from Cash or Accrual basis accounting.

 This option displays only if the Profit & Loss budget tab is selected.

 Fill with values from previous year's balance

 Budget data is calculated based the actual account balances from the prior year. Select whether to use the data from Cash or Accrual basis accounting.

 This option displays only if the Balance Sheet budget tab is selected.

 -
 Click Fill .
The budget populates with values based on your selection. If needed, select the other budget tab ( Profit & Loss or Balance Sheet ) and repeat the steps for those GL accounts.

 Import a Budget

 Related Privileges

 Group
 Privilege
 Column

 Importing
 Import Budget
 Enabled

 For more information, refer to Control User Access .

 If you have file with budget data that is formatted similarly to the layout of the Budget page, you can import the data from that file directly into Rent Manager . See the image below for an example of how the data file would look in CSV format.

 More Information

 Alternatively, you can import a budget using the importing tool. The importing tool is a more detailed and customizable method of importing budgets and may be more helpful if you are also importing comments, multiple properties, or multiple years. For more information, refer to Import Budgets .

 To import a simple budget from the Budget page, do the following:

 -
 In the Property field, select the property for which you are creating a budget.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 At the top, select one of the following tabs:

 Tab
 Description

 Profit & Loss

 The existing income and expense accounts display in the leftmost column, followed by a Total column and a column for each month in sequential order from left to right. Yearly and monthly Total Expenses and Net Income calculate at the bottom of the budget.

 Balance Sheet

 The existing asset, liabilities, and equity accounts display in the leftmost column, followed by a Final column and a column for each month in sequential order from left to right. Monthly Total Assets , Total Liability , Total Equity , and Liability + Equity calculate at the bottom of their sections in the budget.

 -
 On the action bar to the right, click .

 -
 Enter information in the following fields:

 Field
 Description

 Filename

 To select a file to import, click . The accepted file types for importing are CSV, TXT, TAB, or IIF.

 Delimiter

 The character used to mark the beginning and ending of the columns of data.

 Generally, CSV files use commas, TXT files use spaces, and TAB files use tabs. If the data displays incorrectly in the preview, you can select each character option until the data displays correctly.

 Text Qualifier

 If your import file uses a delimiter that can be found within the actual text data, you may need to surround that data in quotation marks or apostrophes to indicate that it is all part of one data entry. This is not commonly needed for CSV files, but may be necessary for simpler formats such as TXT files.

 For example, if your delimiter is a comma, but your data file has budget amounts that include a comma (such as 1,000.00 ), you would need to surround those budget amounts in a text qualifier. If you choose quotation marks as the qualifier, you would enter budget amounts with commas in the data file as "1,000.00" .

 -
 In the Import Columns section, configure how Rent Manager should read the import file.

 Field
 Description

 Account

 The column number where the GL accounts are located in the import file. For example, if they are in column A in a CSV file, enter 1 .

 GL account numbers can be entered as just the account number or as the number and full name that displays on the Budgets page. For example, the data file can have GL accounts entered as just 4101 or the full 4101 Rental Income .

 Skip Rows

 If budget data starts on the top row of the file, enter 0 . Otherwise, enter the number of rows above where the budget data begins. For example, if you have a header row in the file and the budget data starts on row two, enter 1 to skip the first row.

 Months (Jan, Feb, Mar, etc.)

 For each month, enter the column number where that month's budget data is located. For example, if all of the budget values for January are in column B , enter 2 in the Jan field.

 - Click Import .
The data from the file is imported to the budget.

 - Click Save .
The budget is saved to Rent Manager . If needed, select the other budget tab ( Profit & Loss or Balance Sheet ) and repeat the steps for those GL accounts.
