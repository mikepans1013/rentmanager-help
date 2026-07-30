# Add a Chart Account Mapping

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/COA-Mapping-Add.htm

While Rent Manager contains a master chart of accounts that is used for all properties, some users find that tracking and reporting accounting data for specific report recipients require a variety of bookkeeping and reporting standards to be met. Through chart account mapping, users can customize the appearance and naming structure of individual general ledger (GL) accounts to meet the needs of various report recipients.

 Users can map, or tailor, any GL accounts by creating a chart accounts mapping. This mapping can contain any number of mapped, or virtual, accounts linked to one or more chart accounts as a way to retrieve specific information depending on the type of output needed on individual reports. These mapped accounts can be named as needed depending on the standards of the recipient for whom you are generating the reports. When a report is generated with a mapping selected in the report options, Rent Manager displays the information as you designed it.

 Step 1: Create a Mapping

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Chart mappings
 Add, View

 For more information, refer to Control User Access .

 To create a chart account mapping, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Chart Accounts Mapping .
The Chart Accounts Mapping page displays.

 -
 Click Add . If there are already existing mappings, select Add arrow_forward Add Chart of Account Mapping .
The Add Chart Accounts Mapping pop-up displays.

 More Information

 Alternatively, if you need to create a new mapping that is very similar to an existing chart account mapping with only a few changes, you can save time by duplicating the similar mapping. To make a copy of an existing mapping, click Duplicate .

 -
 Enter information into the available fields.

 Field
 Description

 Create Default Mapping

 If checked, the chart account mapping you create automatically populates with every GL account already mapped to itself. This saves you time if only some of your accounts need to be mapped differently.

 This option does not display if you are copying an existing mapping.

 Description

 Additional context or information regarding the chart account mapping and when to use it.

 Name

 A unique name to identify the chart account mapping. This is the name that displays when generating reports and selecting a mapping.

 -
 Click Add .
The new mapping is added to the list.

 Step 2: Map GL Accounts

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Chart mappings
 View, Edit

 For more information, refer to Control User Access .

 You can set your account mappings from one of two UI options: Mapped Account View or GL Account View . The tab you select determines how the accounts display and how they can be edited.

 Tab
 Description

 GL Account View

 Each GL account added to this mapping displays on the left column, and the second column displays the GL account it is mapped to. From here, you can quickly change which accounts are mapped to each GL account by clicking the drop-down in the Mapped Account column and selecting another GL account.

 Mapped Account View

 The mapped accounts display on the left column, and the second column displays the source GL account linked to it. From here, you can add new mapped accounts and quickly reorder the mapped accounts as needed.

 Add a New Mapped Account

 In order to add a new mapped GL account, do the following:

 -
 Select the Mapped Account View tab.

 -
 At the top, click Add arrow_forward Add Mapped Account .
The Mapped Account Details pop-up displays.

 -
 Enter information into the available fields.

 Field
 Description

 Account No

 The number of the mapped account as it should display on reports using this chart account mapping.

 Description

 Additional context about the purpose of this mapped GL account.

 Linked Accounts

 The GL accounts to include in this mapped account. Only accounts of the same Type display in the list.

 Name

 The name of the mapped account as it should display on reports using this chart account mapping.

 Subaccount Of

 Optionally, the parent account of this GL account if it is a subaccount.

 Type

 The account type of the mapped account, such as Bank , Income , or Expense . Once the mapped account is created, this field can no longer be modified.

 -
 To create the mapped account and refresh the pop-up to add additional mapped accounts, click Save & New . To create the mapped account and close the pop-up, click Save & Close .

 More Information

 When generating reports with a chart account mapping selected, all mapped accounts display above unamapped GL accounts. The order of the mapped accounts on this page determines the order in which they display on your reports. To change the order of these mapped accounts, click to drag and drop the accounts into the desired order.

 Edit a Mapped Account

 If you have added mapped accounts or selected Create Default Mapping when creating the chart account mapping, you can edit any of the mapped accounts as needed. To edit a mapped account, do the following:

 -
 From either tab view, on the account you wish to edit, click arrow_forward Details .

 -
 Enter information in the available fields.

 Field
 Description

 Account No

 The number of the mapped account as it should display on reports using this chart account mapping.

 Description

 Additional context about the purpose of this mapped GL account.

 Linked Accounts

 The GL accounts to include in this mapped account. Only accounts of the same Type display in the list.

 Name

 The name of the mapped account as it should display on reports using this chart account mapping.

 Subaccount Of

 Optionally, the parent account of this GL account if it is a subaccount.

 Type

 The account type of the mapped account, such as Bank , Income , or Expense . This field cannot be edited.

 -
 Click Save .
The mapped account's information is updated.

 More Information

 If you wish to quickly reassign a GL account to an existing mapped account, you can click the GL Account View tab, then in the Mapped Account column, select the mapped account to which to map the GL account to.

 Step 3: Save the Mapping

 After all of your mapped accounts are set up to meet your needs and the order has been set, click Save . The chart account mapping is created.
