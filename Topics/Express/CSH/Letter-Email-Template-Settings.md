# Letter/Email Template Settings (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Letter-Email-Template-Settings.htm

After creating letter or email templates, various settings related to that template can be enabled such as the users who can generate letters from this template as well as where the letter can be accessed from within the software. You may also determine more advanced options, such as items related to printing and filtering options that specify what criteria an account must meet before a letter is generated. These settings can be accessed through both signable templates and letter/email templates.

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View

 Edit other users' templates/packets
 Enabled

 Specific Letter/Email privileges must be enabled for each entity-type for which you wish to create a signable template (e.g., Owner , Tenant , etc.).

 For more information, refer to Control Letter / Email Template Access .

 To adjust the settings of a template, go to one of the following locations:

 Option
 Description

 Letter Templates

 arrow_forward Communication arrow_forward Letters arrow_forward Letter Templates

 Email Templates

 arrow_forward Communication arrow_forward Email arrow_forward Email Templates

 On the row of the template you wish to edit, select arrow_forward Settings .

 Letter/Email Template Settings

 The Letter/Email Template Settings pop-up contains settings such as what users can access the template and where in Rent Manager the template displays as an option.

 The following fields are available on the Letter/Email Template Settings pop-up:

 Field

 Description

 Description

 A brief summary about the letter template that displays on the Letter Templates page. Additionally, if the template is exported to the Online Template Library, the description is also exported.

 Email Template

 The template is made available when writing emails. Enter the Email Subject Line you want to display on your emails when this template is selected.

 More Information

 The Email Template option is available only for standard letter templates and is hidden if the Make VPO Ready and/or the Signable Document  options are selected on the template's details page.

 Folder

 The name of the folder the letter template displays under. If <No Folder> is selected, it displays at the bottom of the list of letter templates.

 To add a new folder, open the drop-down menu and click Add New Folder . Then, enter a folder name that categorizes this template and click Add .

 History/Note Category

 The category assigned to the history/note item created from communication using this template. If left blank, no category is assigned to the history/note item.

 Letter Template

 The template is made available from the Write Letter Batch pop-up, the arrow_forward Write Letters menu for the applicable template type in Rent Manager Express , and the right click menu for the applicable template type in Rent Manager 12 .

 Template Name

 The unique name of the template. This displays wherever you can select a letter template in Rent Manager and should be clear and concise to ensure the template is not selected when it should not be.

 Users

 The users or user roles permitted to access and generate letters from this template. To select all current and future users, select All Users .

 Advanced Settings

 To access further settings for the letter template, on the bottom of the Letter/Email Template Settings pop-up, click Advanced . The Advanced Settings pop-up is divided into settings, and each section is described below.

 Script Options

 The following fields are available in the Script Options section:

 Option
 Description

 Advanced Scripting

 Enter a script to be run prior to generating the template.
 These scripts are commonly used to generate variables that are then used throughout the template, such as true or false conditions or calculations. To open the Script Builder pop-up, click Open Script Builder .

 Lock document after merged (when script is processed)

 Check to prevent the contents of a letter generated from this template from being edited.

 Related Privileges

 To edit the text of a letter after it has been merged with database fields, the Edit merged documents privilege must be Enabled . For more information, refer to Control User Access .

 Printing Options

 The following fields are available in the Printing Options section:

 Field
 Description

 Do not split records across page

 If enabled, Rent Manager adds a generated letter to the current page only if there is room for the entire letter. If a generated letter is going to be split across two pages because of space limitations caused by another record on the page, Rent Manager instead places the entire letter on the next page. Rent Manager does not alter spacing or font size to fit more records on a page. Additionally, Rent Manager does not alter templates that are more than one page in length to force them onto a single page, even if this option is checked.

 For example, if you wish to fit three generated letters created from different letter templates, and only the third letter template fills multiple pages when printed, checking Do not split records across page starts the third letter on a new page. If this option is unchecked, the third letter can display partially on one page and the remainder displays on the following pages.

 Number of records per page

 Determines the maximum number of generated letters that Rent Manager tries to display per page when printed. By default, only one generated letter displays per page. Enter 0 to fit as much information onto a single page as possible before breaking to the next page.

 For example, if you enter 3 and generate a letter for three different recipients, Rent Manager tries to fit all three generated letters on a single page when printing, provided there is enough space on the page to fit all three.

 Template to use as Footer

 A different letter template to follow the primary letter template. When you print letters generated from the primary letter template, the footer template makes up the last page(s).

 Template to use as Header

 A different letter template to precede the primary letter template. When you print letters generated from the primary letter template, the header template makes up the first page(s).

 VPO Ready Template

 Enable letters generated from this template to be sent via the Virtual Post Office (VPO) . For more information, refer to Set Up Virtual Post Office (VPO) .

 Filter Options

 Enter any desired filtering options so that letters are generated only for recipients who meet the specified criteria. For example, you can create a filter that generates letters only when the entity associated with the template type has a balance greater than $100.00.

 To add a new filter option, click Add Item .

 Warning

 These filters do not apply when generating letter templates through the right-click menu in Rent Manager 12 or arrow_forward Write Letters in Rent Manager Express .

 The following fields are available in the Filter Options section:

 Field
 Description

 Condition

 An operator that determines how the Script is compared to the Value . For each filter option, select one from the following:

 >
 Greater than

 <
 Less than

 >=
 Greater than or equal to

 <=
 Less than or equal to

 !=
 Not equal to

 =
 Equal to

 Script

 A formula that examines specific data from the target entity.

 For example, if a letter is being generated for tenants and the Balance function is entered under Script , it examines the balance due for each tenant selected to receive the letter.

 Value

 The value entered in this field is checked against the data examined by the Script , using the operator ( Condition ) to determine how they are to be compared. When the statement created by combining all three fields is true, a letter is sent to the entity, and when it is false, no letter is sent to the entity.

 For example, if you entered the Balance function under Script ,greater than ( > ) under Condition , and 100 under Value , this creates a filter that only generates letters when an entity associated with the template type has a balance greater than $100.00.
