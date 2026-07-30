# Owner Overdraft (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Owners-Overdraft.htm

These preferences allow you to warn or prevent users from overdrawing an owner’s bank account when you write checks to pay bills, or for some other purpose.

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

 To set these system preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Owner Overdraft .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 Each setting is described below:

 Option
 Description

 Overdraft Actions

 Select the action to take in response to writing a check for an amount that would reduce the account below the designated balance where you consider an overdraft to occur. This protection extends after an owner's contract date expires until another owner's contract starts.

 Ignore

 Ignore overdraft protection and allow the transaction.

 Warn

 Warn the user and require a confirmation to continue.

 Prevent

 Prevent the user from saving the transaction.

 Ownership Level

 This option determines how the balance is assessed. You may choose to examine an entire portfolio, or the single property specified in the transaction.

 Click on the options below to learn more.

 Ownership

 Select to examine the bank account balance of only the property specified on the check. For example, if the owner has five properties and you enable this setting, Rent Manager does not evaluate the balances of the other four properties.

 Entire portfolio per bank

 Select to consider the balance of the owner's entire portfolio. If at least one property in the portfolio has the funds, a property is allowed to overdraft their bank account.

 If the owner uses multiple banks, only bank balances of properties in the portfolio that use the same bank as the transaction in question are considered.

 For example, if the owner has five properties (that all use the same bank) and you enable this option, Rent Manager first looks at the bank balance of the property specified in the transaction. If that property does not have enough money, Rent Manager then examines the other four properties to determine if there is enough combined money to cover the transaction.

 If the owner has five properties, but only three use the same bank specified in the transaction, Rent Manager examines only the three with the same bank. The two using a different bank are not considered.

 Balance Where Overdraft Occur

 Select an option to determine which balance thresholds triggers an overdraft action when writing a check.

 More Information

 You should only select the options for Security Deposit or Security Deposit Plus Reserve Amount if the security deposits are commingled in the operating bank (trust) account of the managed properties.

 Zero

 The transaction would leave the bank balance at zero (or below). For example, the owner has a total of $1000 in the bank, including all security deposits and reserve amounts. Rent Manager allows you to write a check up to $1000.

 Security Deposit

 The transaction would reduce the amount in the bank to less than the total of all held security deposits. For example, if the owner has $1000 in the bank, but $400 is a held security deposit, Rent Manager allows you to write a check up to $600.

 Reserve Amount

 The transaction would reduce the amount in the bank to less than the reserve amount total for all owners of the property. For example, if the owner has $1000 in the bank, but $600 is a reserve amount, Rent Manager allows you to write a check up to $400.

 Security Deposit Plus Reserve Amount

 The transaction would reduce the amount in the bank to less than the total of the security deposits held plus the reserve amount total for all owners. For example, if the owner has $1000 in the bank, but $400 is a held security deposit, and $600 is a reserve amount, Rent Manager considers the account over drafted.
