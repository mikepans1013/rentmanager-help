# Chart of Account Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Chart-of-Account-Details.htm

Once a general ledger (GL) account is created on the chart of accounts, you can manage additional information regarding the account depending on its account type. Bank-type GL accounts also allow you to add magnetic ink character recognition (MICR) information for printing checks and deposit slips, while non-bank and non-credit card account types allow you to link charge types to the GL account.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 General ledger accounts
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a GL account, go to   arrow_forward Accounting arrow_forward General arrow_forward Chart of Accounts and select a GL account from the list.

 Account Information

 All GL account types include the following basic information fields in the Account Information section.

 The following fields display in this section:

 Field
 Description

 Active

 A indicates that the GL account is active and can be used for tracking transactions in Rent Manager . Uncheck to make the account inactive.

 More Information

 Inactive accounts cannot be used to record future transactions in Rent Manager , but the historical record of the account's use remains viewable.

 Associated Card Numbers

 The Last Four Digits of each credit card to be linked to this GL account. These are used when uploading Smart Receipts to validate if a company credit card was used for the purchase. For more information, refer to Smart Receipts .

 If multiple cards are linked to the GL account, click after entering each additional credit card. Each number added displays to the right of the Associated Card Numbers field. This field displays only if the GL account is a credit card-type account.

 Description

 A more detailed summary of the account. This is for internal use and does not display on reports but is useful when determining differences between various GL accounts that are similarly named and numbered.

 GL Account No

 The unique account number used as the system-wide identifier for the GL account.

 More Information

 Rent Manager 's integration partner AvidXchange refers to this field as a bank code .

 Name

 A unique name that matches your real life account to identify its purpose at a glance. This name displays when writing checks that expense this GL account and on some reports, such as the Balance Sheet and Financial Statement reports.

 ODFI Banks

 A NACHA-compliant bank for bank-to-bank transfers. This field displays only if the GL account is a bank-type account. For more information, refer to NACHA Settings (System Preferences) .

 Selected Users

 The users who require access to the bank account. This field displays only if the GL account is a bank-or credit card-type account.

 More Information

 Users with the option for *** All Banks enabled are selected by default. For more information, refer to Limit Access to a Bank or Credit Card .

 Subaccount Of

 A GL account that acts as the parent account for this GL account. Certain reports allow subaccounts to be collapsed into parent accounts, showing all GL subaccount totals as one line item.

 Warning

 If you choose a parent account, it must be the same type GL account as the child account. If you choose a parent account of a different type, your new account automatically switches to the parent account's GL account type.

 Type

 The account type that most closely defines the purpose of the GL account (e.g., Bank , Expense , Equity , etc.).

 Linked Charge Types

 For non-bank and non-credit card GL accounts, the Linked Charge Types section displays the charge types associated with the GL account. You can use the menu to link either existing charge types, or create new charge types to link to the account.

 The following columns display in this section:

 Column
 Description

 Description

 An additional note to provide context for this charge type.

 Name

 The abbreviated name of the charge type.

 Commercial Recoverable Expense (CRE)

 If you are adding an expense-type account, you can use the GL account when tracking common area maintenance (CAM) expenses that must be reconciled for your commercial portfolio.

 The following fields display in this section:

 Field
 Description

 Annualized expense (prorated by occupancy) during CAM reconciliation

 If checked, this expense is calculated separately from non-annualized expenses during CAM reconciliation. This makes it so that commercial tenants pay their pro rata share only for the duration of time they occupied the unit.

 For example, consider a scenario where the property tax for your commercial property is billed on a quarterly basis (January 1, April 1, July 1, and October 1) and you have a tenant who moved in on June 4. When you perform a CAM reconciliation for the year, Rent Manager calculates the tenant's pro rata for property tax expenses. Rent Manager then takes into account the percentage of time they occupied the unit and charges (or credits) the tenant for their prorated pro rata share.

 Commercial recoverable expense (CRE) account

 Marks this GL account as a commercial recoverable expense (CRE) account. This field must be checked to make all other fields in this section available.

 Reconcile Type

 The charge type used for end-of-period tenant transactions when their portion of the expenses is posted to their account after a CAM reconciliation to balance CRE income and expenses.

 Recoverable Expense Type

 The type used to classify the GL account totals as either CAM ,  Tax , Insurance , or Other .

 More Information

 These categories can also be used to categorize GL account totals into columns of the same name that can be added to the Commercial Rent Roll report using grid view in Rent Manager 12 .

 Recovery Type

 The charge type examined on tenant accounts to determine the charges to be applied to each tenant account.

 When a CAM reconciliation is performed, the expenses on this GL account are checked against the charges on tenant accounts with the same charge type as the Recovery Type . The difference between your expenses and these tenant charges helps determine the Reconcile Type charge amount for each tenant.

 Bank MICR Information

 Magnetic ink character recognition (MICR) encoding is used when routing and account numbers are printed on checks and deposit slips using a special magnetic ink. In addition to the general information for GL accounts, bank-type accounts also have fields for MICR information, depending on whether you are printing checks or deposit slips.

 Checks

 The following fields display in the Checks section:

 Field
 Description

 Account Number

 The account number for the specified bank account.

 Bank Name

 City, State ZIP

 The business name and address of the bank.

 Bank Phone Number

 The phone number used to contact the bank.

 Company Address

 The address of the account owner, such as the property management company.

 Company Name

 The name of the account owner, such as the property management company.

 More Information

 This field must be completed for banks used to post bills via AvidPay . If this field is left blank, an error occurs when posting.

 Enable MICR for Checks on this account

 Enables MICR encoding if this account uses routing and account numbers that are printed on checks using a special magnetic ink.

 Include space between Routing and Account Numbers

 Adds a single space between the Routing Number and Account Number on the check.

 Checked:

 Unchecked:

 Routing Number

 The bank’s routing number.

 Use property name and address

 Prints the associated property name and address on the check.
Otherwise, the Company Name and Company Address are printed on the check.

 Deposits

 The following fields display in the Deposits section:

 Field
 Description

 Account Number

 The account number for the specified bank account.

 Bank Name

 City, State Zip

 The business name and address of the bank.

 Bank Phone Number

 The phone number used to contact the bank.

 Company Address

 The address of the account owner, such as the property management company.

 Company Name

 The name of the account owner, such as the property management company.

 More Information

 This field must be completed for banks used to post bills via AvidPay . If this field is left blank, an error occurs when posting.

 Enable MICR for Deposits on this account

 Enables MICR encoding if this account uses routing and account numbers that are printed on deposit slips using a special magnetic ink.

 Routing Number

 The bank’s routing number.

 Use property name and address

 Prints the associated property name and address on the deposit slip. Otherwise, the Company Name and Company Address are printed on the deposit slip.
