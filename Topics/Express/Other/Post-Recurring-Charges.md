# Post Recurring Charges

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Post-Recurring-Charges.htm

Recurring charges are charge templates assigned to property, unit type, unit, or tenant records that are posted regularly as one-time charges for associated tenant accounts. You can use the Post Recurring Charges page to save time by batch posting recurring charges for tenants at selected properties on a specified date. Additionally, transactions related to utility usage, loan principal payments, and ratio utility billing system (RUBS) charges can also be included in the posting.

 More Information

 To ensure that your postings are timely and consistent, you can create a Task Automation schedule to automatically post recurring charges. Once set up, Rent Manager automatically posts these recurring charges on a predetermined, continuing schedule. For more information, refer to Add a Recurring Charge Posting Automation .

 Related Privileges

 Group
 Privilege
 Column

 Recurring Charges/Market Rent
 Post recurring charges
 Enabled

 For more information, refer to Control User Access .

 Step 1: Select the Recurring Charges to Post

 To post recurring charges, do the following:

 -
 Go to arrow_forward Receivables arrow_forward Recurring Charges arrow_forward Post Recurring Charges .

 -
 In the Select Recurring Charges section, choose the properties for which you want to post recurring charges, or click the Group field and select a property group from the drop-down list.

 More Information

 Only properties to which you have access display. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 -
 In the Posting type field, select the payment frequency of charges to be posted ( Monthly , Weekly , or Daily ).

 More Information

 The Monthly , Weekly , or Daily selection corresponds to the Rent Period field on the tenant's details page. Recurring charges are posted to tenants whose Rent Period matches the selected Posting Type .

 Step 2: Configure the Recurring Charges

 Once you have selected the group or properties for which to post recurring charges, configure the recurring charges to be posted by doing the following:

 -
 In the Posting Information section, Choose the Post date for the new charges.

 -
 If applicable, configure any of the following options:

 Option
 Description

 CRE setup cap overage

 For commercial tenants, select how the posting should handle a charge amount greater than the commercial recoverable expenses (CRE) cap.

 Adjust

 The charge amount is adjusted to not exceed the CRE cap.

 Allow

 The charge is allowed to exceed the CRE cap.

 Skip

 The charge is skipped if the amount exceeds the CRE cap.

 Post loans

 Related Privileges

 Group
 Privilege
 Column

 Loans Receivable
 Post Loans Receivable
 Enabled

 For more information, refer to Control User Access .

 Post loan principal charges to borrowers of the selected properties in addition to the recurring charges.

 Post RUBS

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Post RUBS Charges
 Enabled

 For more information, refer to Control User Access .

 Post ratio utility billing system (RUBS) charges to tenants of the selected properties in addition to the recurring charges.

 Post utilities

 Related Privileges

 Group
 Privilege
 Column

 Utilities
 Post utility information
 Enabled

 For more information, refer to Control User Access .

 Post charges associated with unit-specific meter readings for tenants of the selected properties in addition to the recurring charges.

 Post zero charges

 Post a $0.00 one-time charge to tenants who inherited a recurring charge that uses a calculation to determine the amount and the calculated amount is zero.

 Rent charge transaction memo

 A message explaining the charge. This memo displays in the Comment field for any rent charge type transactions on the one-time rent charges created from this posting.

 Use rent due day for posting

 Post new charges on the month of the chosen Post Date , but use the post day as specified by the Due Day on the tenant's details page. This option dynamically updates each tenant's charge based on their Due Day .

 -
 Click Post Charges .
One-time charges are posted to tenant accounts for the selected properties.

 -
 On the Print Report pop-up, if you wish to generate a Recurring Charges Posting Information report displaying the charges, choose your desired report format in the Select export option drop-down list and click Yes . Otherwise, click No .
