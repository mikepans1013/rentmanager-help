# Survey Details (Pop-Up)

Source: https://rmxhelp.rentmanager.com/Topics/Express/CSH/Survey-Details.htm

Gain insight and gather opinions from your tenants by using surveys. The survey tool helps you to create custom surveys that can be sent via email and/or text message and answered by your tenants through a dedicated portal, which does not require a Tenant Web Access (TWA) login. The Survey Details pop-up allows you to view and manage general information and questions associated with the currently selected survey.

 More Information

 This topic describes the details page of surveys sent via email and/or text message. For more information on the details page of surveys (polls) distributed through Tenant Web Access , refer to Survey/Poll Details (Pop-Up) .

 Related Privileges

 Group
 Privilege
 Column

 Surveys
 Surveys
 View, Edit

 For more information, refer to Control User Access .

 To view a survey's details, go to arrow_forward Communication arrow_forward Surveys arrow_forward Surveys . Then, on the survey you wish to view, click arrow_forward Details .

 Details

 This tile includes the following fields:

 Field
 Description

 Survey Type

 The type of survey ( Tenant or Issue ). Tenant surveys ask general questions about your properties or units, while Issue surveys collect feedback on specific maintenance request.

 Send Option

 The method ( Public Link ) by which the survey is sent to tenants.

 Status

 The name that describes the current state of the survey ( Active or Inactive ).

 Active

 When checked, the survey is available to send to tenants on demand or automatically. If an Inactive survey is made Active again, the associated links remain expired.

 Name

 The name of the survey that displays within Rent Manager .

 Display Name

 The name of the survey that displays in the survey portal.

 Description

 The comments that display only to Rent Manager users.

 Introduction Page

 The Introduction Page tile describes the purpose of the survey, which displays on the introduction page in the survey portal. To create a dynamic scripting introduction, click Open Script Builder . For more information, refer to Scripting .

 Questions

 This tile include the following columns:

 Column
 Description

 Question

 The question asked to the tenant taking the survey.

 Required

 Yes displays for questions the tenant is prevented from skipping. No displays for questions the tenant may skip.

 Response Type

 The data type the tenant uses in the response for the question.

 Dropdown List

 Tenants select a single response from a list of pre-defined options.

 Multiple Selection

 Tenants select one or more responses from a Selection List of pre-defined options.

 Star Rating (1-5)

 Tenants select a numerical rating from 1-5 to indicate their satisfaction.

 Text

 Tenants manually enter a response.

 Yes/No

 Tenants select Yes or No as a response.

 Closing Page

 The Closing Page tile displays the message the tenant sees in the survey portal upon completing the survey. To create a dynamic scripting closing, click Open Script Builder . For more information, refer to Scripting .

 Delivery Options

 This tile includes the following options:

 Option
 Description

 Link will expire X days after it is sent

 The number of days before the survey recipient(s) can no longer access and complete the generated survey.

 Send this survey on demand via

 Determines how surveys are sent to tenants ( Email , Text , Email & Text ).

 More Information

 The option to send the survey as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Automation Settings

 If the Survey Type is Service Issue , the Automation Settings tile displays with the following fields:

 Field
 Description

 Send automatically when the service issue

 The action that causes an issue-related survey to be sent to the linked tenant. Surveys can be sent only when issues have a single tenant link.

 Is Closed

 The survey is sent to tenants when a service issue they are linked to is closed.

 Status Changes

 The survey is sent to tenants when a service issue's status is changed. If Send on issue close, if not previously sent is checked, the survey automatically sends when an issue is closed regardless of its status.

 Send via

 The automated delivery method for the survey ( Email , Text , or Email & Text ).

 More Information

 The option to send the survey as a text is available only if you have the Texting feature, which is a licensed feature and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 Properties

 Each property that should receive alerts when the automated survey is sent. If <All Properties> is checked, all current and future properties are included.

 More Information

 This field populates only with the properties to which you have access. Your access to properties can be managed from your user account or on the property's details page. For more information, refer to Limit Access to a Property .

 Issue Categories

 Each issue category whose associated issues trigger an automated survey.

 Email Configuration

 If the send method is Email or Email & Text , the Email Configuration tile displays with the following fields:

 Field
 Description

 From Name

 The sender's name that displays for the tenant.

 Subject

 The subject line that displays for the tenant.

 To customize the subject line using scripting, click Open Script Builder for scripting assistance.

 Body

 The content of the email body that generates each time the survey is sent.

 To customize the message using scripting, click Open Script Builder for scripting assistance.

 Text Configuration

 If the send method is Text or Email & Text , the Text Configuration tile displays the text message that generates each time the survey is sent. To customize the message using scripting, click Open Script Builder for scripting assistance.

 Branding

 The Branding tile allows you to customize how the survey looks on the survey portal and in the email sent with the survey link using the following fields:

 Field
 Description

 Button Color

 To open the color picker, click . You can click and drag to refine the color and opacity:

 Alternatively, if you have specific color values to enter, use to switch between the following methods and enter the values in the fields provided:

 -
 Hex

 -
 RGBA

 -
 HSLA

 If you do not have an A (alpha channel) value to include with your RGB or HSL values, you can use the opacity slider or enter a value between 0 and 1 using decimals (e.g. 0.3 , 0.75 ).

 Logo

 The image that displays in the survey link email and on the survey portal.

 None

 No logo image is included.

 Property User Defined Field

 The image uploaded to an Image -type property-level user-defined field (UDF) is included.

 Custom

 To select an image from your computer or network drive, click Upload Files .
