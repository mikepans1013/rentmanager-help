# Types on GL Reports

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-GL-Types.htm

On general ledger (GL) reports, such as the General Ledger and Unit General Ledger reports, each transaction is identified by a Type code.

 This table explains each type code, including the following information:

 -
 Where the transaction originated from in Rent Manager .

 -
 The method used to determine the date that displays on the report for each transaction type.

 -
 The accounting basis under which each transaction type displays in GL reports.

 Type
 Source
 Date Method
 Accounting Basis

 BEGBAL

 Beginning chart balances

 GL start date

 Cash and accrual

 BILL

 Bill

 Bill post date

 Accrual

 BILLTM

 Chart account selected as the Expense Account on a bill

 Bill post date

 Accrual

 BILLPAY

 A check that paid a bill

 Check date

 Accrual

 BNKDEP

 Bank deposit

 Deposit date

 Cash and accrual

 CC CHG

 Credit card charge

 Transaction date

 Cash and accrual

 CC CRDT

 Credit card credit

 Transaction date

 Cash and accrual

 CHARGE

 Charge posted to a tenant or prospect account

 Charge date

 Accrual

 CHECK

 Check (that paid a bill or not) or a credit card that paid a bill

 Transaction date

 Cash and accrual

 CHKITM

 Line item of a check that does not pay a bill

 Check date

 Accrual

 CHPAID

 Charge paid by a tenant or prospect payment or credit

 Charge date or payment date (whichever is later)

 Cash

 CRALOC

 Credit added to a tenant or prospect account without a credit allocation in a previous reporting period

 Charge date

 Cash

 CRDITM

 Vendor credit applied to a bill

 Vendor credit date

 Accrual

 CRDPRE

 Credit added to a tenant or prospect account with a credit allocation

 Credit date

 Cash

 CREDIT

 Vendor credit

 Vendor credit date

 Accrual

 CRREAL

 Credit added to a tenant or prospect account with a credit allocation AND the allocation is applied to a different charge type

 Charge date or credit date (whichever is later)

 Cash

 CSTCRD

 Credit added to a tenant or prospect account

 Credit date

 Accrual

 CSTPAY

 Payment received by a customer or prospect account

 Payment date

 Cash and accrual

 JOURNL

 Journal entry

 Journal date

 Cash and accrual

 NSF

 Deposited payment from a tenant or prospect account that is marked NSF

 Date of the NSF adjustment

 Accrual

 NSFBANK

 Deposited payment from a tenant or prospect account that is marked NSF AND  the system preference for Process NSF payments through reversing entries  was enabled when the payment was marked NSF

 Date of the NSF adjustment

 Cash

 PPALOC

 Tenant or prospect prepayment received AND  marked as unallocated AND  paid for a charge

 Charge date

 Cash

 PYALOC

 Tenant or prospect payment received in a previous reporting period AND marked as unallocated AND  pays for a charge in the current period AND  is date before the date of the charge

 Charge date

 Cash

 REALOC

 Tenant or prospect prepayment received AND  allocated to a charge type AND later allocated to a different charge type

 Final charge date

 Cash

 UNALOC

 Tenant or prospect prepayment received AND  marked as unallocated

 Payment date

 Cash
