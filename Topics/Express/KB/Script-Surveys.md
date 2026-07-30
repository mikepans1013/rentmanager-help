# Survey Scripts

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Script-Surveys.htm

There are several areas of Rent Manager where you can use survey-specific scripts, such as survey automated notifications and the Add Survey pop-up. These scripts allow you to pull in data from your surveys directly into the body of the email, text, or page as needed.

 Available Functions

 When adding scripts to surveys or automated notifications, the function is always preceded by the Survey class. The available survey scripts are described in the table below.

 Function
 Description

 Description

 [Survey.Descripton]

 The details entered in the Description field of the survey.

 Display Name

 [Survey.DisplayName]

 The name of the survey that displays to recipients as entered in the Display Name field.

 End Date

 [Survey.EndDate]

 The date on which the survey expires as entered in the End Date field.

 This script applies only to surveys published to Tenant Web Access (TWA) . Surveys sent via email and/or text message return no result.

 Expiration Date

 [Survey.ExpirationDate]

 The relative date (in mm/dd/yy format) on which the link to the survey will expire based on the current date and the number entered in the Link will expire X days after it is sent field. For example, if the current date is 1/1/ 26 and the link is set to expire in 7 days, the date that displays is 1/8/ 26 .

 This script applies only to surveys sent via email and/or text message. Surveys published to TWA return no result.

 Name

 [Survey.Name]

 The internal name of the survey that displays to Rent Manager users, as entered in the Name field.

 Response Property

 [Survey.ResponseProperty]

 The name of the property associated with the survey response.

 Responses

 [Survey.Responses]

 Displays a list of the responses to each question on the survey. The output returned displays in the format below:

 1. Were you satisfied with the time it took to resolve your issue?
No

 2. How did you submit your issue?
*** No Response ***

 3. Please rate your overall experience:
2 stars

 This script applies only to surveys sent via email and/or text message. Surveys published to TWA return no results.

 Send Date

 [Survey.SendDate]

 For surveys sent via email and/or text message, the date on which the survey was sent to the recipient in mm/dd/yy format.

 For surveys published to TWA, the date on which the survey was published to TWA in mm/dd/yy format.

 Start Date

 [Survey.StartDate]

 For surveys published to TWA, the date on which the survey was published to TWA in mm/dd/yy format.
