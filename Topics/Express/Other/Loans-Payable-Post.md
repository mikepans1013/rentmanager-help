# Post Loans Payable

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Loans-Payable-Post.htm

To post monthly payments for your loans, you can use the Post Loans Payable page to see which loans are due and make any necessary adjustments to payment amounts. The amounts due for principal, interest, and any other costs for each month populate with information from the amortization schedule found on the loan's details page in the Transactions & Amortization tile.

 Related Privileges

 Group
 Privilege
 Column

 Payables
 Post Loans Payable
 Enabled

 For more information, refer to Control User Access .

 To post loan payables, do the following:

 -
 Go to arrow_forward Payables arrow_forward Loans Payable arrow_forward Post Loans Payable .

 -
 Filter the list to display the loans you want to pay. By default, all loan payments due in the next seven days display in the list. The following filter options are available on this page:

 Option
 Description

 Days Until Due Date

 Allows you to display only loans that have a Next Payment Date within the number of days you enter in this field.

 Search

 Allows you to display only loans that contain data matching what you enter in this field. For example, you can put in the Loan Number or Lender name.

 Show Quick Filters

 A set of commonly used filters to easily narrow down the list. Once you have selected the desired filters, click Apply .

 You can select any combination of the following filters:

 Payment Method

 Only loans with the associated Payment Method display ( Journal , Check , EFT , ACH ).

 Properties

 Only loans associated with the properties or property groups selected display.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Show Loans with Active Automation

 If checked, only loans with active automations display as determined on the loan's details page on the Payment Info tile.

 -
 Ensure that each loan payment you want to post is checked ( ). All upcoming payments are checked by default. The following columns are available on this page:

 Column
 Description

 Due Date

 The day of the month the loan payment is due to the lender, as established on the loan's Payment Info tile.

 Escrow/Other

 If insurance and taxes are managed by a lender, the escrow amount that gets paid in addition to the loan's principal and interest. This payment amount changes when escrow funding is evaluated each year.

 Interest

 The amount of interest due for the next scheduled payment, as displayed on the loan's Transactions & Amortization tile. The value displayed here is determined by the options you defined when you created the loan, as well as any changes you make during the life of the loan.

 Lender

 The financial institution, associated with a vendor account, who provided the loan and receives payments.

 Loan Number

 The number of the loan assigned by the lender, which can typically be found in the loan's paperwork.

 Name

 The unique name used to identify the loan.

 Payment Amount

 The monthly payment amount of the loan, calculated using the following equation:

 Payment = Monthly Principal + Interest + Monthly Escrow/Other Costs

 Payment Date

 The date, in a MM/DD/YY format, that the monthly payment is due.

 Principal

 The amount of principal due for the next scheduled payment, as displayed on the loan's Transactions & Amortization tile. The value displayed here is determined by the options you defined when you created the loan as well as any changes you make during the life of the loan.

 Property

 The Short Name of the property that is financially impacted by the loan.

 -
 Review the Principal and Interest amounts. You can manually change these amounts, such as if you want to make a larger than normal principal payment this month.

 -
 If you need to add additional costs to the payment, click next to the loan's Payment Amount .

 -
 In the Edit Payment Amount pop-up, click Add Cost to add as many additional line items as needed. Select a general ledger (GL) account from the drop-down list and enter the payment amount. When finished adding line items, click Update .
The loan's Payment Amount updates to include the additional costs.

 -
 On the Post Loans Payable page, click Post Loans .
The loan payments are recorded in their respective GL accounts. If there are any problems with the payments, the Loan Issues pop-up displays information about which loans could not be paid and why. For more information, refer to Resolve Errors That May Occur When Posting Loans Payable .
