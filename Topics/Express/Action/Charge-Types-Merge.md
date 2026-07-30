# Merge Charge Types

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Charge-Types-Merge.htm

The Merge Charge Types tool combines one charge type into another by converting the charge type used in existing transactions into a different charge type. This tool is useful, for example, if you discover that you have multiple charge types that are used to track the same kind of data (e.g., a carpet cleaning fee and damage fee) and you want to consolidate the charge types while retaining the transactions.

 Warning

 Merging charge types modifies all charges of the source type, including those from prior fiscal years. Doing so may affect financial statements from prior years. Please speak with your accountant about the financial implications to ensure this is the best course of action for your business.

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Charge Type
 View, Edit

 Merge Charge Type
 Enabled

 For more information, refer to Control User Access .

 To merge charge types, do the following:

 -
 Go to   arrow_forward Accounting arrow_forward General arrow_forward Merge Charge Types .

 -
 Enter the information in the available fields described below.

 Field
 Description

 Source Charge Type

 The charge type you want to convert into another charge type.

 Destination Charge Type

 The charge type into which the Source Charge Type will be converted.

 Remove Original Charge Type

 Check to delete the Source Charge Type once the merge is completed.

 -
 Click Merge .

 -
 Click Yes to confirm the merging of two charge types.
All transactions associated with the source charge type are merged into the destination charge type.

 Related Privileges

 Group
 Privilege
 Column

 Setup
 Override accounting close date
 Enabled

 If you set an accounting close date in system preferences, you receive a warning if you attempt to merge a charge type that was used in a closed period. To override this warning, you must have this privilege. For more information, refer to Control User Access .
