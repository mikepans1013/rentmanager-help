# Accounting Close (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Accounting-Close.htm

These system preferences provide default options for setting the accounting close date in order to lock transactions that occur on or before the specified date.

 Unless a user is given the privilege to override the accounting close date, they cannot make changes to transactions and payments that occur in a prior accounting period. That user can, however, make changes to the comments on these locked items.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 Setup
 Set accounting close date
 Enabled

 For more information, refer to Control User Access .

 More Information

 These preferences can be overridden for each property on the Accounting Close pop-up. For more information, refer to Property Accounting Close (Pop-Up) .

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Accounting Close .

 -
 In the Accounting Close Type section, choose whether to use a single close date or to split accounting close dates. Each option for the accounting close type is described in the table below.

 Option
 Description

 Single Accounting Close Date

 Select this option to set one accounting close date (or no accounting close date) for all financials.

 Split Accounting Close for AR, AP, Journals/Adjustments

 Select this option to set separate accounting close dates for each type of financial data:  Accounts Payable , Accounts Receivable , and Journals .

 -
 The options that display depend on your Accounting Close Type selection. Each option is described below.

 -
 Click Save to accept your changes.

 More Information

 The existing Current Close Date displays at the top of the Single section. This date updates based on your selections after you click Save .

 Preference Descriptions

 If you opted to set one accounting close date, the following fields are available to edit. If you chose to set separate accounting close dates for each type of financial data, you must edit the accounting close date information for each type of data separately. To configure split accounting close dates, click for each type of financial data (AP, AR, and Journals). Then you may use the following fields to manage your accounting close date information.

 Option
 Description

 No Close

 There is no default close date.

 Specific Date

 The accounting period closes on a specific date (such as the last day of the fiscal year). You must select the date from the corresponding calendar control.

 In the field below, enter the desired close date, or click to select a date from the calendar.

 Monthly

 The accounting period closes every month and prevents transactions from being dated prior to the closing day.

 More Information

 Users often need to make a few final adjustments after running reports at the end of an accounting period. The time between the Closing Day and the Effective Day can be used for entering items such as depreciation, earned interest, and prepaid expenses. The Effective Day is enforced by Rent Manager in that users are unable to backdate transactions to before the Closing Day once the Effective Day has passed.

 Closing Day

 Enter the specific day of the month on which to close the accounting period.

 Effective Day

 Enter the specific day of the month following the closing day on which the closing day is enforced by Rent Manager .

 Yearly

 The accounting period closes on a yearly basis and prevents transactions from being dated prior to the closing month/day.

 More Information

 Users often need to make a few final adjustments after running reports at the end of an accounting period. The time between the Closing Day and the Effective Day can be used for entering items such as depreciation, earned interest, and prepaid expenses. The Effective Day is enforced by Rent Manager in that users are unable to backdate transactions to before the Closing Day once the Effective Day has passed.

 Closing mm/dd

 Enter the specific month and day of the month on which to close the accounting period each year, or click to select a date from the calendar.

 Effective mm/dd

 Enter the specific day of the month following the closing day on which the closing day is enforced by Rent Manager , or click to select a date from the calendar.

 X days ago

 Create a dynamic close date that is always X days from the current date.

 For example, if you enter a 7 in this field, the close date is always one week ago from today.
