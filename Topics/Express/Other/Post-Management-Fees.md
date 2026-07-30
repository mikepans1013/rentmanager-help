# Post Management Fees

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Post-Management-Fees.htm

If you are a fee-based management company, management fees are the fees you collect for managing properties. After you have collected receivables—such as rent and late fees—for the properties you manage and paid any bills that are due, you can calculate and post your management fees. This process transfers funds from the trust accounts of your managed properties to the operating bank account of your management company.

 If you run the Profit & Loss report for the management company property, management fees are listed as income. When generating the Profit & Loss report for any owners that paid management fees, the management fees are instead listed as expenses.

 Related Preferences

 Before you begin processing management fees, you must set up a property as your management company and configure how to handle management fees in system preferences. For more information, refer to Management Company (System Preferences) and Management Fee Setup (System Preferences) .

 Related Privileges

 Group
 Privilege
 Column

 Owners
 Post management fees
 Enabled

 For more information, refer to Control User Access .

 Step 1: Select Fees to Post

 The first step of posting management fees is to select which owners or properties to post for, as well as when to post the fees. To begin posting management fees, do the following:

 -
 Go to arrow_forward Owners arrow_forward Management Fees arrow_forward Post Management Fees .
The Post Management Fees page displays.

 -
 In the Post date field, enter the date on which to post the management fees. By default, yesterday's date populates.

 More Information

 Management fees are applied to the transaction activity that occurred since the day after the last management fee posting. This date displays in the Last Fee Post column.

 If a Type of Owner is selected, click next to an owner's name to view their properties and the associated Last Fee Post dates.

 -
 In the Type field, select whether you would like to post management fees by Property or by Owner .
The page updates to display owners or properties based on your selection.

 -
 Check each property or owner that should have their management fees posted. Alternatively, in the Group field at the top of the page, select a property or owner group to select only properties or owners that are part of that group.

 -
 Click Calculate Fees .
A new page displays with the fee calculations.

 Step 2: Review Calculated Fees

 After calculating fees, a new page displays with the management fees for each property based on the property's management fee setup. If the fee setup for the property has no value entered for a field, the associated column displays blank.

 More Information

 The calculation of the amounts in each column varies slightly depending on whether the property uses an Advanced fee setup or Standard fee setup. Advanced setups calculate the management fees on a per posting basis, while standard setups calculate the fees on a per month basis. For more information, refer to Management Fee Setup Comparison .

 Review the information on this page to verify it is correct. The total values for each column display at the bottom of the Management Fees section. Each column is described in the table below.

 Column
 Description

 Property

 The property for which management fees are being posted. This column displays only if you selected the posting Type to be Property on the previous page.

 Owner

 The name of the owner (as it displays on the owner's details page in the Name field) of the property for which management fees are being posted.

 If you selected the posting Type to be Owner on the previous page, all properties owned by that owner display under the owner's name.

 Min Fee

 The defined minimum dollar amount in fees to collect from the property.

 Max Fee

 The defined maximum dollar amount in fees to collect from the property.

 Flat Fee

 A flat-rate fee amount collected every month or every posting, depending on the fee setup configuration.

 Per Unit Fee

 A flat-rate fee amount collected for each unit at the property.

 Per Occupied Fee

 A flat-rate fee amount collected for each unit with an active lease at the property at the time of the posting. This fee posts every time you post management fees.

 % of Total Income

 The total dollar amount collected from the property's total gross income, based on the fee setup configuration.

 % of Net Income

 The total dollar amount collected from the property's income after expenses and deductions are taken out, based on the fee setup configuration.

 Fee %

 The dollar amount collected from rental income and other specified general ledger (GL) accounts or charge types, based on the fee setup configuration.

 Pass Thru

 The dollar amount collected for charges marked as pass-through, meaning they are transferred to the management company directly.

 Total Amount

 The total dollar amount of management fees collected for the management company in this posting.

 Chart Transfers

 If applicable, the dollar amount transferred between two GL accounts whenever management fees are posted. This applies only to Advanced management fee setups.

 Related Preferences

 This column displays only if Show transfer grid when setting up management fees is enabled in system preferences. For more information, refer to Management Fee Setup (System Preferences) .

 Step 3: Post Management Fees

 After confirming the fee calculations are accurate, you are ready to finish posting. To post the management fees, do the following:

 -
 In the Payment Options section, select how the funds for the fees are transferred in the Payment Method field. Each option is described below.

 Option
 Description

 ACH

 An automated transfer handled by your bank that uses the automated clearing house network for added security.

 Check

 A physically-routed payment drawn against deposited funds from the payer to the payee.

 Debit

 A preauthorized payment that allows a bank to pay a certain amount directly to a bank or company at regular intervals.

 EFT

 An electronic funds transfer for any type of digital payment including, but not limited to, a credit or debit card.

 ePay

 An electronic payment transferred via the Zego ePay integration. This option displays only if ePay is enabled in Rent Manager and the PayDirect feature is enabled for your Zego account.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 -
 In the Override Comment field, optionally enter a custom comment that replaces the default text (e.g., Management Fee: Riverview Apartments ) that normally displays on the owner account's Management Company pop-up in the Comment column. To add a memorized comment, click .

 -
 To create a single bill or check to the management company for each bank account that itemizes the properties in the fee posting, check Group checks/bills by bank account .

 Related Preferences

 When posting management fees, a bill for the property and/or check for payment to the management company is created depending on your selections in system preferences. For more information, refer to Management Company (System Preferences) .

 -
 Click Post Fees .
The management fees are posted to each owner's account.

 Next Steps

 After management fees are posted, there are additional tasks you may need to complete. See the table below for more information.

 Action
 Description

 Collect payment or post charges for fees

 Depending on your settings in system preferences, you may need to create a bill for the property or add charges or send an invoice to an owner for the management fees owed. Additionally, you may need to add the payments from those owners to Rent Manager , and then deposit those payments. If any of these steps are enabled in system preferences, the actions are automatically performed when you post management fees. For more information, refer to Management Company (System Preferences) .

 Post owner distributions

 After you collect the management fees you are owed, you need to pay out the rest of the owners profits to the owner based on your contract. For more information, refer to Pay Owners .

 Send out Owner Statements

 Once all the finances have been taken care of, you need to send out statements to your owners to provide them with their financial information. You can send these statements by mail, email, or even post the statements to Owner Web Access (OWA) for them to access through the OWA portal. For more information, refer to Owner Statement (Report) , Basic Owner Statement (Report) , and Share Reports .
