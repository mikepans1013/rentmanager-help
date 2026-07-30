# Charge Detail and Charge Breakdown

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Report-Charge-Detail-Charge-Breakdown.htm

Both the Charge Detail and Charge Breakdown reports provide information about tenant and prospect charges, but they each evaluate the charges differently. Both reports focus on charges during a set date range, but output slightly different details of that information.

 Warning

 The information contained here does not replace the advice of an accountant. If you are unclear about how to interpret the data presented in the related reports, please consult your accountant.

 The Charge Detail report displays tenants and prospects with posted charges of specified charge types across a selected date range, along with any payments made or credits applied toward those charges.

 The Charge Breakdown report displays tenants and prospects from selected properties alongside the charges and credits that have been posted to their accounts within a given date range for all charge types.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Run reports
 Enabled

 Additionally, on the Reports tab, you must have access to Charge Detail and Charge Breakdown .

 For more information, refer to Control User Access .

 When run with comparable report options, the Charge Detail report summary's Amount Charged column total matches the Charge Breakdown report summary's Amount column.

 Report Options

 To populate Charge Detail and Charge Breakdown reports that complement each other, use the report option combinations listed in the table below. Report options not mentioned do not affect comparability and can be left on their default setting.

 Charge Detail
 Charge Breakdown
 Description

 Properties to Include

 Properties/Owners to Include

 The same properties or property group must be selected for both reports.

 If the Owners tab is selected for the Charge Breakdown , then on the Charge Detail report, select the properties of those selected owners.

 Date Range

 Date Range

 The same From and To dates must be selected for both reports.

 Tenants to Include

 Tenants to Include

 The same options ( All , or a combination of Current , Past , and/or Future ) must be selected for both reports.

 Charges to Include

 Charge Type Order

 For the Charge Detail report, select all charge types in the list because the Charge Breakdown report always includes all charge types.

 On the Charge Breakdown report, you do have the option to drag and drop the charge types into whichever order you need.

 Troubleshooting Charge Amount Totals that are Different

 While running the reports with the suggested report options above allows the reports to examine the same data, there are other factors that can cause discrepancies between these value totals.

 Credits (Negative Charges)

 The Charge Detail report includes only charges with positive amounts, not credits (negative charges). The Charge Breakdown report includes all charges, both positive and negative. To locate tenants with credits on their account, search the Charge Breakdown report's results for any negative amounts applied to a charge type.

 More Information

 You can also run the Credit Detail report to help you track down tenants that have credits on their account. For more information, refer to Credit Detail (Report) .

 NSF Adjustments

 The Charge Detail report does not include non-sufficient funds adjustment charges (marked under the NSFADJ charge type), while the Charge Breakdown does. If there are NSF charges during the report's date range, the Charge Breakdown report summary adds an additional line named Less NSF adjustments made during the period which reduces the subtotal to the Total Charged value. If this occurs, you can instead compare the Charge Detail report's Total Amount Charged value with the Charge Breakdown report summary's Total Charged value.
