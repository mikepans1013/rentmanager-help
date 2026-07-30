# Set Up Income and ID Verification

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Income-ID-Verification-Set-Up.htm

Rent Manager has partnered with AmRent to provide the ability to verify an individual's claimed income and identification from within Rent Manager . The Income and ID Verification feature allows you to obtain and review tenants' and prospects' banking information without the need to request paper documentation and risk receiving falsified data. You can send income verification invitation links directly from Rent Manager , where recipients are prompted to log into a secure portal and connect their bank account. Financial data is then pulled directly from the bank account(s) provided and a report is generated that includes account balances, transactions, and cash flow. You can also verify they have provided valid identification at the start of the process, ensuring the information is correct before income verification is processed.

 Before utilizing Income and ID Verification, you need to enable the feature in system preferences and establish default settings.

 More Information

 Although the Income and ID Verification feature is accessible within Rent Manager , the company that provides the service is AmRent 's partner Ibbie. Registered users can retrieve verification reports that can be instantly viewed or printed. Additionally, Income and ID Verification requires different credentials from AmRent Screenings . For information about getting an account or if you have Income Verification and want to utilize ID Verification as well, contact AmRent by calling 800-324-3681 or emailing info@amrent.com.

 Related Privileges

 Group
 Privilege
 Column

 System
 System Preferences
 View, Edit

 For more information, refer to Control User Access .

 Step 1: Enable AmRent Income and ID Verification

 To enable AmRent for income and ID verification, do the following:

 -
 Go to arrow_forward Administration , then go to System Preferences arrow_forward Screening Products arrow_forward Credentials .

 -
 Check Use AmRent Screening Products .

 -
 In the AmRent Username field, enter the account login provided by AmRent .

 -
 In the Income Verification section, enter the Client ID and Secret Key provided by AmRent .

 -
 Click Test Connection to verify that the credentials are correct.

 -
 Click Save .
The Income and ID Verification feature is enabled in Rent Manager .

 Step 2: Establish System Preferences

 To choose preferences for income and ID verification, do the following:

 -
 Go to arrow_forward Administration , then go to System Preferences arrow_forward Screening Products arrow_forward Income Verification .

 -
 To automatically populate the Run Income Verification pop-up with the address marked Default for the associated contact, check Use contact default address for income verifications .

 -
 Next to Default Delivery Method , check Text Message and/or Email . The selected delivery method(s) will be automatically checked whenever a verification request is submitted.

 More Information

 Since verification text messages are sent by AmRent 's partner Ibbie, you are not required to have the Text Broadcasting feature in Rent Manager . If you do have Text Broadcasting , any texts sent through Ibbie do not count toward your daily totals.

 -
 In the Adverse Action Letters drop-down list, select the letter template(s) that are available when sending a letter from the Income Verification Detail page. For example, you may want to include templates to inform prospects that their application was rejected due to the results of the verification, or to inform them of an issue with their verification request.

 To select letters in this field, the following privileges are required:

 Related Privileges

 Group
 Privilege
 Column

 Letter/Email Templates/Reports/Packets
 Letter/Email templates/packets
 View

 Tenant templates/packets
 View

 Prospect templates/packets
 View

 Additionally, on the Communication tab, you must have access to the desired letter template(s).

 For more information, refer to Control Letter / Email Template Access .

 -
 Click Save .
The selected verification preferences are saved.

 Next Steps

 Now that you have set up the Income and ID Verification feature, you are ready to start sending verification invitations and receiving reports. The recommended next steps are described in the table below.

 Action
 Description

 Send ID and Income Verification Invitation Links

 Upon running for income verification, you are first notified if the ID verification was successful or, if unsuccessful, you have the option to override it and go straight into income verification. Income verification invitation links are then sent to prospects and tenants is directly from their account's details pages, which allows them to submit their relevant financial data directly to AmRent . For more information, refer to Run Income Verification .

 Monitor the Request

 Once an income verification invitation link is sent, you can view and refresh the status of the request, resend the link in the event of an error or expiration, and communicate with the recipient(s) by sending one of the available Adverse Action Letters from the Income Verification Detail page.

 Additionally, the ID Verification icon next to the primary contact's name displays the current status of the recipient's ID verification. A green-colored icon displays if the ID verification was successful for all contacts, a red-colored icon displays if all contacts have failed the ID verification, and an orange-colored icon displays if there is a mix of successful and failed attempts.

 This page can be accessed directly from the recipient's details page or from the Screenings page. Depending on how you want to access the page and the actions you want to take, additional privileges are required. For more information, refer to Income Verification Details (Page) and Resend Income Verification Invitation
