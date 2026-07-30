# Tenant Web Access Settings (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Tenant-TWA-Settings.htm

The Web Access Settings pop-up allows you to view and manage a tenant's web user account in order to enable or disable their Tenant Web Access (TWA) account, assign or reset TWA credentials, provide individualized TWA messages, and remove TWA account lockouts.

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 To view the Web Access Settings pop-up, go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant from the list. Then, on the action bar to the right, click arrow_forward TWA Settings .

 If a tenant has multiple web users, you can select the account you wish to view from the list on the left of the pop-up. Once selected, the TWA user's full name and linked email display above the Account Information tile.

 Tenant Information

 The following fields display at the top of the pop-up.

 Field
 Description

 Name

 The name of the primary tenant associated with the web account.

 Account #

 The system-generated ID for the tenant account in Rent Manager .

 Message to show to Tenant

 An individualized message that displays on the tenant's TWA dashboard.

 When applicable, a badge indicating the user's TWA access status displays. If the tenants access was extended, a badge that says TWA Access Extended displays in green.

 More Information

 A displays if any of the following conditions are met:

 -
 The Balance Due shown on the tenant's scoreboard is greater than 0.

 -
 Don't Allow TWA Payments is not checked on the tenant's Miscellaneous tile.

 -
 The tenant is status is set to Past .

 -
 The tenant's move out date is past the days allotted in the Days active after move out field in system web preferences. For more information, refer to Tenant Web Access General (System Web Preferences) .

 When you click on , you can extend TWA access to make it so as long as they log into TWA once every six months and have an open charge(s) on the account, they can access their TWA account to make payments.

 However, TWA Access Expired displays in red if at least one of the following conditions are met:

 -
 The tenant's status in Rent Manager is set to Past .

 -
 The tenant is no longer active based on the time allocated in system web preferences. For more information refer to Tenant Web Access AutoPay (System Web Preferences) .

 -
 Extended access to TWA has been disabled via that displays next to the TWA access badge.

 Account Information

 The following information displays in the Account Information tile.

 Field
 Description

 Enabled

 When checked, the account is active and can be used to log in to TWA.

 Last Failed Login

 The date on which the user attempted and failed to log into their TWA account. If the user has exceed their login attempts, a message indicating the date and time at which the account was locked displays in red.

 Last Login

 The date on which the user last logged into their TWA account.

 Phone #

 The phone number of the user with a Tenant Web Access (TWA) account.

 More Information

 If the TWA user has a lease at a property with a Property Type of Association and are a board member and/or committee member, they are listed as such along with the name(s) of the associated committees.

 AutoPay Information

 The AutoPay Information tile displays detailed information about the user's AutoPay setup. To deactivate the AutoPay schedule for the user, click Disable AutoPay . Once disabled, the tenant can still create a new AutoPay setup on TWA.

 More Information

 If you are using account groups for tenants, the master account of the group can set up AutoPay only to pay their account's balance, but can make manual payments to the balances of any other members of the group. To set up automatic payments for non-master accounts in the group, each member must create a TWA account and set up AutoPay on their account. For more information, refer to Manage Account Groups and Set Up Roommates .

 Related Preferences

 To give tenants and prospects the ability to create and manage automatic payment schedules in Tenant Web Access , AutoPay must be enabled in tenant web preferences. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 The following information displays on this tile.

 Field
 Description

 Day of Month

 The day of the month on which the AutoPay is scheduled to run for the user.

 End Date

 The date on which the user selected to end the AutoPay schedule.

 Frequency

 How often the AutoPay configuration occurs for the user. For example, if the configuration is setup to run once a month, the frequency displays as Monthly .

 Last AutoPay Date

 The date on which the most recent AutoPay occurred for the user.

 Max Amount

 The maximum dollar amount that can be withdrawn via AutoPay.

 Payment Type

 The type of payment the AutoPay is scheduled for as determined by system web preferences. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 Start Date

 The date on which the user selected to begin the AutoPay schedule.

 Row Actions

 The following row actions are available from the menu in the left panel.

 Option
 Description

 Change Password

 Send an email to the web user allowing them to reset their account password. The password recovery email is sent to the email address displayed in the corresponding row.

 Delete

 Permanently remove the web user account and prevent them from accessing TWA.

 Related Preferences

 If the system web preference to Allow tenants to create accounts is enabled, the user can still create a new TWA account. For more information, refer to Tenant Web Access Accounts (System Web Preferences) .

 Manage Email Subscriptions

 View and manage the email subscription settings to ensure your company is honoring the web user's preferences and following email compliance standards. For more information, refer to Unsubscribe From Emails .

 Remove User Lockout

 Remove the lockout for a web user who has entered an incorrect password too many times, allowing them to try logging in again.

 This option displays only for users who are locked out of their account after exceeding the number of Failed Login Attempts Until Lockout established in the system web preferences. For more information, refer to Tenant Web Access General (System Web Preferences) .

 Resend Verification Email

 Send a new verification email to the web user's email address, rendering the prior verification email(s) unusable.

 This option displays only for a web user that has not yet completed the account creation process.

 Update Username

 Reset the email address for the web user's TWA account. For additional account security, check Require email and password reset for this web user to force the user to confirm their old password and select a new one before accessing their account.
