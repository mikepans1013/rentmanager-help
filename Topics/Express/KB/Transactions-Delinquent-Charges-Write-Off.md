# Write Off Delinquent Charges

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Transactions-Delinquent-Charges-Write-Off.htm

Charges that are delinquent can be written off as an expense—such as bad debt—or with an offsetting credit when it becomes clear that the charges will never be paid. The write-off zeros out the tenant's ledger, removing the tenant from showing on Rent Manager reminders and the Delinquency report.

 There are two ways to write off a delinquent balance:

 Option
 Description

 Expense

 Writing off an open balance as an expense allows you to track those expenses on reports such as Profit & Loss and the Owner Statement .

 This option is best suited for accrual basis accounting to reflect the adjustment to net income with the expense.

 Offsetting Credit

 Writing off an open balance with an offsetting credit displays the write-off on the tenant's account and prevents it from being included on reports as an expense.

 This option is best suited for cash basis accounting because it is reflected only on the tenant's transactions.

 Warning

 Please speak with your accountant about the financial implications of each option to ensure the best course of action for your business.

 Option 1: Write Off Delinquent Charges as an Expense

 Delinquent charges can be written off by adding a credit equal to the outstanding charge and associated with a charge type and GL account used specifically to track delinquent charges. After you write off all of the delinquent charges from the tenant's account as an expense, the tenant no longer displays on the Delinquency report or Rent Manager reminders but the expense is still tracked in the Profit & Loss and the Owner Statement .

 More Information

 Your accounting basis determines how the expense affects your reports. For example, on the Profit & Loss report, writing off delinquent charges as an expense on an accrual basis results in no change to rental income, but the net income is reduced by the bad debt expense. However, writing off these charges as an expense on a cash basis causes an increase to rental income which is offset by the bad debt expense with no change to the net income.

 This option requires that a charge type be created that is linked to an expense account. If you already have an expense account and charge type for writing off delinquent charges, proceed to Step 2: Write Off the Delinquent Balance .

 Step 1: Set Up Expense Account and Charge Type

 Writing off delinquent charges as an expense requires you to create a charge type that is linked to an expense account. The expense account reflects the write-off of the charge on financial reports while the charge type is used to show the write-off on the tenant's transactions.

 Create Expense Account

 More Information

 By default, Rent Manager offers a default bad debt expense chart account, 6000 Bad Debt . If you plan to use this chart account, you do not need to create a new expense account.

 The expense account created here reflects how the write-off displays in the general ledger and on financial reports. To create the expense account, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts .
The Chart of Accounts page displays.

 -
 Click Add GL Account .
The Add GL Account pop-up displays.

 -
 Enter the following information into the available fields:

 Field
 Description

 Type

 Select the option Expense .

 GL Account No

 The account number to use for this expense account. Expense accounts are generally set between 6000–7999.

 If you wish to make this a sub-account for an existing expense account, select the parent account in the Subaccount of field.

 Name

 A name for the account that makes its purpose clear, such as Bad Debt .

 -
 Click Add .
The expense account is created.

 Create Charge Type

 This charge type is used on the tenant's transactions to create a credit that reflects the write-off of the charge and reduces the outstanding balance. To create the charge type, do the following:

 -
 Go to arrow_forward Accounting arrow_forward General arrow_forward Charge Types .
The Charge Types page displays.

 -
 Click Add Charge Type .
The Add Charge Type pop-up displays.

 -
 Enter the following information into the available fields:

 Field
 Description

 Name

 The shortened name of the charge type (up to six characters), such as BD .

 Description

 A longer name that gives context to the charge type's purpose, such as Bad Debt .

 Chart Account

 The expense account you use for writing off delinquent charges, such as the one you created in the steps above or the default account 6000 Bad Debt .

 - Click Save .
The charge type is created and linked to the appropriate expense account.

 Step 2: Write Off the Delinquent Balance

 To write off the delinquent charges for a tenant as an expense, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select the tenant with the outstanding charges to write off.
The tenant's details page displays.

 -
 On the Transactions tile, click Add Charge .
The Transaction Detail pop-up displays.

 -
 Enter the following information into the available fields:

 Field
 Descriptions

 Charge Type

 The charge type you use to track delinquent charge write-offs.

 Date

 The date on which to post the transaction.

 More Information

 For cash basis accounting, if you collect management fees on the income account associated with the delinquent charge, it is included in the management fee calculations when paid by a credit.

 To collect fees on the outstanding charges, set this date for after the last management fee posting. If you do not want to collect fees on these outstanding charges, set this date for on or before the last management fee posting.

 Amount

 The dollar amount of the tenant's open balance to write-off entered as a negative amount. For example, if the tenant's balance is $120, enter -120 .

 The tenant's open balance can be found in the Balance Due field of the tenant's scoreboard at the top of their account's details page.

 Comment

 A brief note explaining the reason for the write-off.

 -
 Click Save .
The credit offsets the outstanding charges and the tenant's account displays a $0 balance, while still displaying the expense on financial reports.

 Option 2: Write Off Delinquent Charges with an Offsetting Credit

 Delinquent charges can be written off by creating an offsetting credit which uses the same charge type, amount due, and date of the outstanding charge. The offsetting credit negates the charge without removing it from the tenant's transactions.

 Each credit offsets the outstanding charge and the tenant’s outstanding balance is reduced by the amount credited. If all open charges are offset with a matching credit, the tenant's account shows a $0 balance and will no longer display in any Rent Manager reminders or the Delinquency report.

 Related Preferences

 If you operate in cash basis, in system preferences, you can enable Record cash credit reallocations when only income accounts and/or expense accounts are used (applies to new credits) to use a charge type dedicated to write-offs to remove financial impact on your Profit & Loss report or the Owner Statement . For more information, refer to General Ledger Settings (System Preferences) .

 Warning

 If there are multiple open charges that make up the tenant's open balance, a separate offsetting credit must be created for each charge.

 To write off delinquent charges with an offsetting credit, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select the tenant with the outstanding charges to write off.
The tenant's details page displays.

 -
 On the tenant's Transactions tile, click .
The View Transactions pop-up displays.

 -
 At the top, check View Open Receivables Only and take note of the Date , Description , and Amount columns of each open charge.

 -
 Click Add Charge .
The Transaction Detail pop-up displays.

 -
 Enter the following information into the available fields:

 Field
 Description

 Charge Type

 The same charge type as the outstanding charge, as shown in the Description column noted above.

 Date

 The date to apply the credit. As a best practice, this date should be the same as the date of the charge so it does not display as an open charge during any period in reports.

 Amount

 The dollar amount due for the outstanding charge entered as a negative amount. For example, if the first outstanding charge is for $500, enter -500 .

 The Preallocations section displays when a negative amount is entered.

 -
 In the Preallocations section, click Add Item .

 -
 In the Charge Type and Amount columns, select the same charge type and amount as the outstanding charge.

 -
 Click Save .
The first outstanding charge is paid by the credit.

 -
 Repeat steps 4–8 for each outstanding charge until all open charges are credited and the tenant's outstanding balance is $0.
