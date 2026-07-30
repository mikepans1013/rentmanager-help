# Add a Positive Pay Template

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Positive-Pay-Template-Add.htm

Positive pay formats allow Rent Manager and your bank to establish a communication system where information about checks you write is shared with the bank before they are cashed. When the checks are cashed, the bank can compare the presented checks against the information you sent them to ensure that the checks have not been altered. This fraud-deterrence system sends the specifics of each check you write to the bank it will be drawn on, provided your bank uses positive pay formats.

 Before positive pay formats can be used, a template meeting the banks requirements must be created. The template is used by the bank to identify which checks should be cashed. Once a template has been created, you can assign it to one or more bank accounts. After you send the file to the bank (following their instructions), the bank honors only the checks whose information is in the file. Positive pay format templates can be created from scratch or imported into Rent Manager .

 Related Privileges

 Group
 Privilege
 Column

 Banks/Checks
 Create Positive Pay Exports
 Enabled

 For more information, refer to Control User Access .

 Step 1: Create a Template

 To create a positive pay template, do the following:

 -
 Go to arrow_forward Administration , then go to Payables arrow_forward Positive Pay Formats .
The Positive Pay Formats page displays.

 -
 On the action bar to the right, click . Alternatively, if you already have a positive pay template saved to your computer, click arrow_forward Import Format .
The Add Positive Pay Format pop-up displays.

 -
 Enter a Name for the new template.

 -
 Optionally, to copy an existing template, select the desired template from the Template drop-down list.

 -
 To finish, click Save & Close , or to add additional formats, click Save & New .
The new template(s) is added to the list and displays on the left.

 Step 2: Enter Template Details

 After creating positive pay format templates, you can select them from the list at the left to enter the needed information. Each template must be set up to match the structure of the bank's required records and the specific order of information (fields, field start position and length, value, format, and total length of record) to ensure the bank can verify your checks.

 To complete the template, do the following:

 -
 From the list on the left, select the template you wish to edit.

 -
 Click Bank Accounts in the upper right.
The Account Mapping pop-up displays.

 -
 Select the desired bank(s) to map them to the template and click Save .
The pop-up closes and the positive pay template is mapped to the selected bank(s).

 -
 In the Transmission Header section, enter information into the following columns.

 Column
 Description

 Field Name

 A name to describe the information that goes in the field such as Account Number .

 Start Position

 The starting character position for this field.

 Length

 The length of this field. Typically, this is the maximum number of characters that are returned for this field. Displayed values that have fewer characters than the specified length may be zero-filled or blank-filled depending on the Format selected.

 Value

 Returns the value associated with the selected option from the drop-down list. For example, Bank Name returns the name of the bank associated with the check..

 The ASK scripting function is also available. ASK allows you to ask a question and prompt the user for input when exporting positive pay. For more information, refer to Export Positive Pay . If you select ASK , you need to type the actual question you wish to ask in the Field Name column for this row.

 Format

 The desired formatting from the drop-down list to be applied to the returned value. If a format is not selected, the value will be left-justified by default.

 Format String

 A value to apply to the returned value in this row. The Format String is applied to the Value first and then the Format .

 For example, if you want Check Amount and Sum of Check Amounts to have two-place decimals and be filled with zeroes, you can enter #####0.00 in Format String and then select Zero Filled for the Format .

 If a date format is selected as the Format , any Format String is ignored. If you want your date to include slashes, hyphens, or other formatting elements, leave Format empty and define your specific date format in Format String (for example, MM/DD/YYYY).

 If the Format String is left empty, the Value retains its functionality (for example, Check Amount and Sum of Check Amounts will not have decimals).

 -
 Click Add Item for each additional field you need to add to the section.

 -
 Enter a value in Record Length that is equal to or larger than the sum of the Length column values.

 -
 Repeat steps 4 and 5 the File Header , Detail and Trailer sections.

 -
 Once you've entered the appropriate information, click Save .
The template is now ready to be used.
