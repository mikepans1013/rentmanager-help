# Management Fee Setup (System Preferences)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/System-Preferences/Owners-Management-Fee-Setup.htm

Adjust these preferences to control management fee defaults, specify when fees are calculated, and enable the GL account types that are used to calculate fees.

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
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Preferences arrow_forward Owners arrow_forward Management Fee Setup .

 -
 Edit the settings as desired. Each setting is described below.

 -
 Click Save to accept your changes.

 Preference Descriptions

 Each setting is described below:

 Preference
 Description

 Default Management Fee Setup

 Select one of the management fee templates as the system-level default collection of fee settings.

 More Information

 This setting can be overridden per property on the property's details page.

 Default Calculation Method

 Select the default method used to specify when the management fee is calculated:

 Accrual

 Calculate the management fee based on when charges are added to the tenant's account.

 Cash

 Calculate the management fee based on what is collected or what the tenant pays.

 Show transfer grid when setting up management fees

 Check to display the Chart Account Transfers grid on management fee templates. The purpose of a chart account transfer is to reallocate a portion of funds between two general ledger (GL) accounts each time management fees are posted.

 For example, suppose you are required to withhold 5 percent of an owner's rental income as part of a state tax law. You can set up one of these transfers so that after each management fee posting, Rent Manager calculates 5 percent of the activity for your specified Rental Income account. Rent Manager then creates a journal entry to debit an expense account for the cost of this withholding and credit a liability account to hold the funds set aside for this tax requirement.

 Each transfer journal entry is linked to the management fee post from which it was generated. If you rollback the management fees for this owner, any journal entry created in this way is automatically deleted. Furthermore, Rent Manager does not let you manually delete a journal entry created in this manner without also rolling back the linked management fee posting.

 GL account types to include in the chart percentages grid

 Check the GL account types that are used to calculate management fees. The selected GL account types display in the Chart Account Percentages section of the management fee template.

 -
 Income

 -
 Expense

 -
 Asset

 -
 Liability

 For example, if you want to charge a markup on maintenance paid on behalf of your owner, you can calculate a percentage of that expense account as a management fee.
