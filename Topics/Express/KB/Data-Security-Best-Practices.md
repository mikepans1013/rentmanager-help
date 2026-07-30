# Best Practices for Rent Manager Data Security

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Data-Security-Best-Practices.htm

Rent Manager stores everything important to your business: account information, financial data, and so much more. This data must always be kept safe and secure. You want to prevent user mistakes as well as malicious activity. This topic covers how to lock down user permissions, limit employees to only seeing what they need to be successful in their roles, and implement safeguards to protect the fidelity of your financial data.

 Limit User Access Through Roles and Permissions

 Tailoring the information to which your users have access is the simplest, most effective way to improve the security of your Rent Manager data. There are four key elements of user access management to consider, known as classic controls:

 -
 User accounts

 -
 Multifactor authentication (MFA)

 -
 Privileges

 -
 Roles

 By utilizing these tools in Rent Manager , you can prevent users from viewing and editing any data that they should not be privy to. This not only helps to limit intentional harm from bad actors, but also keeps users from making honest mistakes and/or using privileges they should not have.

 Each of these controls are described below.

 User Accounts

 When setting up user accounts, you can determine an individual's account information, privileges, display defaults, and access to reports, letters, and filters. This ensures the user can be easily identified in the system, access the areas of Rent Manager that are needed to perform their tasks, and unable to access the areas of Rent Manager you determine are outside of what their role needs access to. For more information, refer to Add a User .

 On the user's General tab, you can choose the bank accounts, properties, and additional options they can access. For example, you may want to grant your maintenance technicians the Inspector option so they can complete inspections using rmAppSuite Pro , or limit a property manager to have access only to a specific property group. For more information, refer to User Details (Page) .

 More Information

 The following are important guidelines for user accounts:

 -
 Each Rent Manager user should have their own user account. This allows you to keep your data secure and control what each user has access to in your database.

 -
 Diligently maintain active and inactive users. If a user is no longer with your company, you can deactivate the user account by unchecking Active on the user's General tab. Maintaining active and inactive users ensures your historical data is maintained. Never reassign a username, or it will appear that everything the previous user did was done by the new user.

 -
 You can have unlimited Rent Manager users. The list of users has no affect on your number of Rent Manager licenses. However, as a best practice, your employees who do not regularly use Rent Manager as part of their job should not have their own user account. If an employee without a Rent Manager account needs information from the software, then they can contact an employee who already has access for this information.

 Multifactor Authentication

 Before you can utilize MFA in Rent Manager , you first need to enable the Require Multifactor Authentication (MFA) to log in option in system preferences. With this option enabled, users must have an email address entered on their account's General tab and download an authenticator application, such as Google Authenticator or Microsoft Authenticator, which will be used to confirm their future login attempts. For more information, refer to Multifactor Authentication (MFA) .

 Warning

 Once enabled, users across all your database locations are required to use an authenticator app to log in to Rent Manager . This change is effective immediately, so it is recommended that you speak to your team about this change before enabling the setting. For more information, refer to Manage Locations (Pop-Up) .

 Privileges

 To establish permissions for a user, go to their user account and click the Privileges tab. Privileges are broken into several different groups, such as Properties/Units , Service Manager , and Tenants/Prospects , to make it easier to find the user access you wish to grant or remove for each account.

 Action-based privileges, such as unlocking user accounts, include only the Enabled option. Others, such as tenant and property information, provide options to Add , View , Edit , and Delete associated information. It is strongly recommended that the ability to delete information is given sparingly, such as for administrators or other high-level users. For more information on privilege management, refer to Control User Access .

 The following privileges should be granted only to the users who absolutely need them.

 Critical Setup Privileges

 Privilege
 Description

 Beginning balances

 Allows users to view and/or edit beginning balances for general ledger accounts. Beginning balances are used to establish your accounts' financial position prior to when your business started using Rent Manager . For more information, refer to Beginning Balances .

 Override accounting close date

 Allows users to add, edit, or delete transactions dated before the most recent accounting close date, which locks transactions and payments that occur in a prior accounting period.

 Set accounting close date

 Allows users to set the accounting close date and lock transactions that occurred on or before the close date. For more information, refer to Accounting Close (System Preferences) and Property Accounting Close (Pop-Up) topics.

 For more information, refer to Setup Privilege Group topic.

 Critical System Privileges

 Privilege
 Description

 Allow user to unlock other users

 Allows users to unlock another user's account who has been prevented from logging in after three failed login attempts.

 Manage all users and privileges

 Allows users to add, view, and/or edit all user accounts and their associated privileges, including providing access to properties, bank accounts, and reports.

 Warning

 Assignment of this privilege should be very limited. A user with this privilege has the potential to change any user in the system as well as create new users (including a new one for themselves) with all privileges and access to all  reports.

 Manage assigned users and privileges

 Allows users to add, view, and/or edit only the user accounts and their associated privileges for which the user is designated as the Supervisor . Supervisors may edit or add new subordinate user accounts with privileges only up to the level of their own privileges (i.e., supervisors are not able to grant any permission to a subordinate that they do not have themselves).

 System Preferences

 Allows users to view and edit settings that affect your entire database in system preferences, such as your general ledger start date and default options for other financial settings.

 System Web Preferences

 Allows users to view and edit settings that affect your web portals in system web preferences, such as how tenants can submit payments via Tenant Web Access (TWA) .

 For more information, refer to System Privilege Group .

 Critical Accounting Privileges

 Privilege
 Description

 Charge types

 Allows a user to add, view, edit, or delete charge types used for transactions.

 General ledger accounts

 Allows a user to add, view, edit, or delete general ledger (GL) accounts. For more information, refer to Chart of Accounts (Page) .

 Journal entries

 Allows a user to add, view, edit, or delete journal entries. For more information, refer to Journals (Page) .

 For more information, refer to Accounting Privilege Group .

 Critical Owners Privilege

 Privilege
 Description

 Allow backdating of transactions prior to last fee posting

 Allows a user to add, edit, or delete transactions with a date prior to the property's last management fee posting.

 For more information, refer to Owners Privilege Group .

 Critical Receivables Privileges

 Privilege
 Description

 Allow to backdate charges

 Allows a user to select a date that occurred in the past when entering charges.

 Allow to backdate payments

 Allows a user to select a date that occurred in the past when entering payments.

 Allow to credit tenants

 Allows a user to apply a credit to a tenant's account through recurring or one-time charges.

 Allow to NSF/Void a Payment

 Allows a user to perform payment reversals for non-sufficient funds (NSF) or void a payment from a tenant or prospect's account.

 For more information, refer to Receivables Privilege Group .

 Critical Payables Privileges

 Privilege
 Description

 Allow user to pay bills

 Allows a user to process payments for bills.

 Approve all bills

 Allows a user to approve all bills, regardless of the bill amount. Alternatively, you can establish three tiers of bills with different approval thresholds, then grant select users the ability to approve tier 1, 2, and/or 3 bills. For more information, refer to Set Up Bill Approval .

 View private vendors

 Allows a user to see private vendors in the vendor list. With this privilege, a user may select this vendor for processes such as writing checks, paying bills, creating purchase orders (POs), entering credit card transactions, running payables reports, or setting management company preferences.

 For more information, refer to Payables Privilege Group .

 Roles

 Rather than manually setting the privileges for each user individually, you can save time and ensure consistency by adding user roles. Roles allow you to establish a set of privileges for different jobs at your company, such as maintenance technician or accountant, and easily apply those privileges to applicable users. If needed, you can even add additional privileges directly to a user on top of the ones inherited from the user role.

 Once you've created a user role and set up the privileges you want to include, you can apply the role directly from the User Roles page or by going to a user's account. For more information, refer to User Roles (Page) .

 Provide Custom Interfaces for Users

 Given the huge variety of tools and reports available in Rent Manager , not all of them are going to be relevant to every employee's day-to-day operations. Customizing the Rent Manager experience using layouts and the Express workspace helps you to streamline your workflow to best suit the needs of you and your colleagues.

 Layouts

 Layouts allow you to customize how the pages displays in select areas of Rent Manager . Tiles can be added, deleted, or repositioned on layouts to create a personalized experience that best suits the workflows of you and your colleagues. Layouts also allow you to customize access for certain user roles on a granular level, such as removing their ability to view the Transactions tile for tenants while still allowing them to add and edit tenants.

 There are two kinds of layouts: personal layouts and system layouts. Personal layouts are unique to specific Rent Manager user accounts, while system layouts can be accessed by and even assigned to multiple users to streamline their Rent Manager experience.

 When customizing layouts, you can either build a brand new layout or copy an existing layout from a user account or from default system layouts. Creating a new layout from scratch offers the most granular control for the content and structure of the tiles, but you can also use the default page layout as a base template to save time. Copying a user's layout allows you to utilize or share a personal layout that has proven useful with other employees, such as maintenance technicians or accountants.

 For more information, refer to Add a Personal Layout and Add a System Layout .

 More Information

 If your business keeps track of information that should be visible only to a select few users, but does not have a corresponding field in Rent Manager , you can create encrypted user-defined fields (UDFs) to limit access to that data for individual users. These encrypted UDFs can also be added to custom layouts to ensure that information is visible only to specified users, even if other users have access to that layout. For more information, refer to Add an Encrypted User Defined Field .

 My Workspace

 The My Workspace page is the default home screen when you log into Express . By customizing the My Favorites and My Reports tiles, you can quickly access your most-viewed pages and reports to save yourself time.

 To change the shortcuts on either tile, select arrow_forward Edit in the top right, then click next to the pages/reports you want to include or exclude from the associated tile. The available options are divided into tabs and subsections to make it easy to find exactly what you need.

 Track User Activity

 When a security issue arises, you need to be able to identify how the issue came to be and which user(s) could be responsible for it. Rent Manager includes reports that show you what changes a user has made, when they were accessing Rent Manager , and which users have access to essential privileges.

 Report
 Description

 Audit Trail

 This report allows administrators to monitor user actions that affect financial data, setup, and other important aspects of your database. User actions are classified by audit types to help you identify and filter the report contents. For more information, refer to Audit Trail .

 Privilege User Listing

 This report can be used to track whether specific privileges are granted to users and/or user roles so you can monitor and maintain your Rent Manager database security. The report also displays which users have access to which properties, banks, and/or reports. For more information, refer to Privilege User Listing (Report) .

 User Activity Log

 This report displays the date and time that each user logged in and out of Rent Manager . It also shows the duration of each session and the total active time for the period, which can help you narrow down users that could have made problematic changes to your data. For more information, refer to User Activity Log (Report) .

 In addition to these reports, many pages in Rent Manager include additional information that can be viewed by clicking . For example, if you are viewing a check, you can click to see the user who created the check, the user who last edited the check, and the date and times that both events occurred.
