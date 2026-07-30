# Resolve Errors That May Occur When Paying Bills

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Bills-Errors.htm

When you pay bills in Rent Manager , several potential errors might prevent you from successfully processing your bill payments. With the correct permissions, you can override some errors to post bill payments without addressing the error. For other errors, you may need to make changes or consult with other members of your team or business unit to correct errors. The following errors can occur when paying bills. This topic describes the needed privileges and steps to follow to override or address bill errors.

 More Information

 If you need further assistance in trying to resolve any of these errors or warnings, please contact our support team at 800-669-0871 or support@rentmanager.com .

 Bill Payment Exceeds Purchase Order

 The total dollar amount of the bill exceeds the total dollar amount, or a percentage threshold, of the linked purchase order. This warning displays only if the Checks/Bills system preference for Prevent bill payments that exceed linked purchase order amount by more than X % is enabled. For more information, refer to Checks/Bills General (System Preferences) .

 Resolution

 Users with the following privilege can override this warning and pay bills without resolving the error:

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Allow user to pay bills that exceed PO amount
 Enabled

 For more information, refer to Control User Access .

 Ownership Overdraft

 The bill is paid by a property's owner, and the total dollar amount of the bill exceeds the total dollar amount that the owner has available to spend at this property. This warning displays only if the Owner Overdraft system preference for Overdraft Actions is set to Warn or Prevent . For more information, refer to Owner Overdraft (System Preferences) .

 Resolution

 View an owner's current balance on their details page or by running the Owner Bank Balance report. Users can override this warning if the Owner Overdraft system preference for Overdraft Actions is set to Warn . In this case, the bill can still be paid, but only the amount available to the owner at this time is applied to the bill's open charges. If Overdraft Actions is set to Ignore , the bill can be paid, and no warning displays even if the bill exceeds the owner's available funds.

 You may need to contact the owner and deposit additional funds to cover the billed expense.

 Hard Close Exception

 There is an accounting close date set in system preferences, and the bill payment date falls within the closed accounting period. For more information, refer to Accounting Close (System Preferences) .

 Resolution

 To fix a Hard Close Exception error, you can change the payment date on the bill. If you pay from the bill's details page, click Pay Bill and, in the Payment Info pop-up, set the Payment Date . If you pay from the Pay Bills page, select the bills you want to pay and click Pay Bills . Then, in the Payment Info pop-up, set the Payment Date .

 In addition, users with the following privilege can override this warning and pay bills without resolving the error:

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Override accounting close
 Enabled

 For more information, refer to Control User Access .

 Property Bank Restrictions

 The bank account selected on the bill is not selected in the Bank Settings field on the associated property's details page. To pay a bill, the property on the bill must have access to the bank account that pays the bills. This error cannot be overridden and must be corrected to pay the bill.

 Resolution

 To fix a Property Bank Restrictions error, you can change the bank settings on the property or on the bill. If you use the Pay Bills page to pay multiple bills at once, you can also review the bank selected in the Bank/CC field.

 Change Bank Settings on a Property

 Related Privileges

 Group
 Privilege
 Column

 Properties/Units
 Properties
 View, Edit

 For more information, refer to Control User Access .

 To change the bank settings on a property, do the following:

 -
 Go to arrow_forward Rental Info arrow_forward General arrow_forward Properties and select a property from the list.
The property's details page displays.

 -
 In the Other Information tile, in the Bank Settings field, select the bank account that pays the bill.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Click Save .
You can now return to the bill and complete the payment.

 Change Bank Settings on a Bill

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bills register
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 To change the bank settings on a bill, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Bills and select a bill from the list.
The bill's details page displays.

 -
 In the Default Bank field, select a bank account that the associated property has access to.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Click Save .
You can now pay the bill.

 Change Bank Settings on the Pay Bills Page

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bills register
 Enabled

 Payables
 Bills
 View, Edit

 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 To change the bank settings on the Pay Bills page, do the following:

 -
 Go to arrow_forward Payables arrow_forward Bills arrow_forward Pay Bills .
The Pay Bills page displays.

 -
 In the Bank/CC field, select a bank account that the associated property on the bills you want to pay has access to.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 -
 Follow the normal steps to pay bills.

 No Bank Selected

 No bank account is selected to pay the bill from. This error cannot be overridden and must be corrected to pay the bill.

 Resolution

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bills register
 Enabled

 Payables
 Bills
 View, Edit

 For more information, refer to Control User Access .

 To fix a No Bank Selected error, go to arrow_forward Payables arrow_forward Bills arrow_forward Bills and select a bill from the list. In the Default Bank field, select a bank account or select <Property Default> to use the bank set as default on the associated property's details page.

 Related Privileges

 This field populates with only banks and credit cards to which you have access. Your access to banks and credit cards can be managed on the user's details page. For more information, refer to Limit Access to a Bank or Credit Card .

 Vendor Insurance Expired

 The Insurance Expiration Date on the vendor's details page is earlier than the current date. To pay a bill, the vendor on the bill must not have an expired insurance date. If the expiration date is blank, the insurance is treated as having no expiration date. This error cannot be overridden and must be corrected to pay the bill.

 Resolution

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bills register
 Enabled

 Payables
 Bills
 View, Edit

 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 To fix a Vendor Insurance Expired error, go to   arrow_forward Payables arrow_forward General arrow_forward Vendors and select the vendor from the list. In the Insurance Expiration Date field, enter the expiration date from the vendor's current insurance certificate. This date must be the current date or later to clear the error.

 Vendor Worker's Compensation Expired

 The Workers Comp Expiration Date on the vendor's details page is earlier than the current date. To pay a bill, the vendor on the bill must not have an expired workers compensation date. If the expiration date is blank, the worker's compensation is treated as having no expiration date. This error cannot be overridden and must be corrected to pay the bill.

 Resolution

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 View bills register
 Enabled

 Payables
 Bills
 View, Edit

 Allow user to pay bills
 Enabled

 For more information, refer to Control User Access .

 To fix a Vendor Worker's Compensation Expired error, go to   arrow_forward Payables arrow_forward General arrow_forward Vendors and select the vendor from the list. In the Workers Comp Expiration Date field, enter the expiration date from the vendor's current worker's compensation certificate. This date must be the current date or later to clear the error.
