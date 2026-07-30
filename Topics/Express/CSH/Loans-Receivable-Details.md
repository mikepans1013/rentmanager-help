# Loans Receivable Details (Page)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Loans-Receivable-Details.htm

The loans receivable tool provides the ability to set up the terms and conditions of owner-financed loans. The Loans Receivable details page allows you to manage, track, and report the loan through its scheduled process, as well as default the loan, or pay off the loan.

 Related Privileges

 Group
 Privilege
 Column

 Loans Receivable
 Loans Receivable
 View, Edit

 For more information, refer to Control User Access .

 To view the details of a loan, go to arrow_forward Receivables arrow_forward Loans Receivables arrow_forward Loans Receivable and select a loan from the list.

 General

 This tile displays basic information about the loan.

 Field
 Description

 Reference

 The system-generated loan number that Rent Manager generated when the loan was created or, alternatively, the manually entered loan number.

 Close Date

 The date the loan was signed.

 Payment Day

 The day of the month on which the payments are due for the loan.

 Acquisition Date

 The date on which the loan was purchased from another lender.

 Insurance Expiration

 The date on which the insurance, such as homeowners' or Private Mortgage Insurance (PMI), expires.

 Calculation Options

 This tile allows you to view or edit the following fields.

 Field
 Description

 Increase principal to cover interest

 This option is typically used for daily interest to account for payments made well after the scheduled payment date. In such cases, the interest amount may be more than the scheduled payment amount.

 If checked, a credit covering the unpaid interest is posted against the principal to increase the balance. Otherwise, the unpaid interest remains open on the tenant's Transactions tile because the whole interest charge was posted but only partially paid.

 Extend loan term until balance is fully paid

 If checked, if a loan's final payment exceeds the regular monthly amount, the loan's term extends until all principal is charged. Otherwise, the full remaining principal is posted on the last period of the loan.

 Use average principal to calculate interest

 If checked, the loan's average principal balance since the last payment is used to calculate the next payment's interest. Otherwise, the loan's current principal balance is used to calculate the next payment's interest.

 UDFs

 User-defined fields display on this tile based on when a value was added to the UDF. The order in which the user-defined fields display may not match the order that displays in the User Defined Fields pop-up or on the User Defined Fields page. This tile displays up to six loan-type UDFs with values and used to track information that Rent Manager does not track by default.

 Metro 2

 This tile allows you to condition loan data into a format suitable for import by the major consumer reporting bureaus (TransUnion, Equifax, Experian, and Innovis). The format, called Metro 2, is an industry-standard reporting format.

 Field
 Description

 Account Type

 The code that best identifies the account classification.

 Account Status

 The code that best describes the current status of the account (e.g., whether the account is current or past due).

 Special Comment Code

 The code that further describes the current condition of the account. This should be reported as long as the condition applies.

 Compliance Condition Code

 The code that best reports a condition that is required for legal compliance, for example, according to the Fair Credit Reporting Act (FCRA) or Fair Credit Billing Act (FCBA). The condition may refer to accounts closed at the consumer's request or accounts in dispute under FCRA or FCBA.

 The code for an account in dispute only needs to be reported when the consumer disputes the account directly with the data furnisher. It should be reported one time and is deleted only when another code or the XR (remove value) is reported.

 Account Closure Date

 The date on which the account is closed to further charges or paid in full.

 Include in Metro 2 Exports

 If checked, the loan's information is included in the Metro 2 file generated from the Export to Metro 2 tool.

 Amortization Schedule

 This tile displays the theoretical breakdown of how each installment payment would be applied to the loan. The values displayed are determined by the options you defined when you created the loan as well as any changes you make during the life of the loan. Rent Manager immediately updates the amortization schedule with each change or actual payment.

 Column
 Description

 Reference

 The system-generated loan number that Rent Manager generated when the loan was created or, alternatively, the manually entered loan number.

 Due date

 The date the loan payment is due.

 Payment Due

 The total amount of the loan payment.

 Payment

 The amount paid by the tenant.

 Applied To Other Charges

 The amount of the loan payment that was applied to other charges on the tenant's account.

 Applied To Interest

 The amount of the payment that is applied to the loan's interest.

 Applied To Principal

 The amount of the payment that is applied to the loan's principal.

 Total Paid Interest

 The total amount of interest paid on the loan.

 Total Paid Principal

 The total amount of principal paid on the loan.

 Remaining Principal

 The total amount of the loan's unpaid principal.
