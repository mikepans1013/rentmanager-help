# Limit Payment Options for Tenants

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Tenant-Payment-Options-Limit.htm

Rent Manager provides a multitude of methods for tenants to submit payments to allow for flexibility for both tenants and your business. However, your business may only accept some of those payment methods or lease to specific tenants who have more payment method limitations. For instance, perhaps you have a tenant who has had checks bounce multiple times and you no longer want to accept check payments, or you legally need to stop accepting payments from a tenant going through the eviction process.

 You can customize Rent Manager in multiple ways to set payment method limits where and how you need them, both on the tenant level and in all of Tenant Web Access (TWA) .

 Option 1: Limit Access on TWA

 Related Privileges

 Group
 Privilege
 Column

 System
 System Web Preferences
 Enabled

 For more information, refer to Control User Access .

 If you are using the Tenant Web Access (TWA) portal, your tenants can log in and make electronic payments directly from the website. You can customize how TWA allows tenants to pay their balance in the system web preferences described below. These settings apply system wide to all tenants who use TWA.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Establish Required Payment Amounts

 You can adjust your system web preferences to determine when and how much tenants can pay towards their balance via the TWA portal.

 To adjust these system web preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward Financial .

 -
 Check any of the following options:

 Option
 Description

 Allow payments over total balance due

 Allows the tenant to make electronic payments that exceed their current balance amount of all charges (including future charges).

 If Require payment of is also checked, they can overpay their balance as long as the minimum requirement of the selected option is met.

 Require payment of

 Establishes how much of the tenant's balance they are required to pay when making an electronic payment via TWA. If checked, tenant cannot make payments that are less than the amount of their current balance.

 Total balance due

 The tenant must pay their full balance for all charges, including future charges.

 Current balance due

 The tenant must pay their balance as of today's date at least.

 If checked, tenants can still opt to overpay their current balance amount towards future charges.

 Current or total balance due

 The tenant must pay either their balance as of today's date, or their total balance due for all charges (including future charges).

 If checked, tenants cannot partially pay future charges. If Allow payments over total balance due is also checked, they can enter custom payment amounts if the amount exceeds their total balance due.

 - Click Save .
All tenants' TWA payment requirements are updated.

 Configure AutoPay

 You can use your system web preferences to opt to allow or disallow tenants to set up their payments to be paid automatically in regular intervals. Additionally, you can establish the allowed frequency of the automatic payments.

 To adjust these system web preferences, do the following:

 -
 Go to arrow_forward Administration , then go to Preferences arrow_forward System Web Preferences arrow_forward Tenant Web Access arrow_forward AutoPay .

 -
 To allow tenants to configure AutoPay in TWA, check Enable AutoPay Configuration . To disable AutoPay, uncheck this option.

 -
 If AutoPay is enabled, set up your desired frequency configuration for tenant AutoPay. For more information, refer to Tenant Web Access AutoPay (System Web Preferences) .

 -
 Click Save .
The TWA AutoPay configuration is updated.

 Option 2: Limit Access by Tenant

 Related Privileges

 Group
 Privilege
 Column

 Tenants/Prospects
 Tenants
 View, Edit

 For more information, refer to Control User Access .

 If you need to limit the payment options for specific individuals, you can go to a tenant's details page and limit payment options directly for their account. Using these options allows you to present warning messages to Rent Manager users if tenants try to make payments with methods or amounts that are blocked for them, and also prevents them from accepting blocked payment methods. You can also prevent them from making any payments via TWA.

 More Information

 You can use the importing tool to quickly update these tenant settings in a batch. This can be useful for scenarios where a property management company may not allow certain payment methods or amounts by default, but there are some tenants with an exception. For more information, refer to Import Tenants .

 To limit payment options on for an individual tenant account, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Tenants and select a tenant.
 The tenant's details page displays.

 -
 On the Miscellaneous tile, check any of the following options as needed:

 Option
 Description

 Don't Accept Checks

 Check payments from this tenant are not accepted. When adding a payment for this tenant, the Payment Info tile displays a warning message in red that says Do not accept checks from this tenant .

 For example, on the Add Payment pop-up, if a user enters a check number in the Reference # field and attempts to submit the payment, an error displays that prevents them from adding the check payment.

 Don't Accept Partial Payments

 Tenants are required to pay the full balance due on their account. When adding a payment for this tenant, the Payment Info tile displays a warning message in red that says Do not accept partial payments from this tenant .

 For example, on the Add Payment pop-up, if a user enters an Amount that is less than the total in the Balance Due field and attempts to submit the payment, an error displays that prevents them from adding the partial payment.

 Don't Accept Payments

 No payment of any amount or method can be accepted for this tenant. When adding a payment for this tenant, the Payment Info tile displays a warning message in red that says Payments have been stopped for this tenant .

 For example, on the Add Payment pop-up, all fields are disabled and the payment cannot be added.

 Don't Allow TWA Payments

 The tenant cannot make any payments via the Tenant Web Access (TWA) portal. Users can still add payments to the tenant's account for them via Rent Manager .

 - Click Save .
The tenant's available payment options are updated.
