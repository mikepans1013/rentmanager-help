# Add a Purchase Order Workflow

Source: https://rmxhelp.rentmanager.com/Topics/Express/Action/Purchase-Order-Workflows-Add.htm

A purchase order (PO) workflow specifies a sequence of tasks to be performed in the review, approval, and fulfillment of purchase orders and the user(s) assigned to each sequential task in the workflow process.

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 PO Workflows
 Add, View

 For more information, refer to Control User Access .

 To add a new workflow to your system, do the following:

 -
 Go to arrow_forward Payables arrow_forward Payables Setup arrow_forward Purchase Order Workflows .
The Purchase Order Workflow page displays.

 -
 Click Add .

 -
 In the Workflow Name field, enter a unique name to identify the workflow.

 -
 If applicable, in the Automatically assign this workflow when these inventory items are selected on a purchase order drop-down, select inventory items that triggers Rent Manager to assign the selected items to this workflow when they are added to a purchase order. Inventory items can only be assigned to one workflow at a time.

 Warning

 Items with different assigned workflows cannot be added to the same purchase order. For example, if you have Item A assigned to Workflow A, and Item B assigned to Workflow B, these items must be added to separate purchase orders.

 -
 Click Add User to add Rent Manager users or user roles and assign the actions they are responsible for in the workflow.

 -
 In the Action column, select the task to be performed by the corresponding user.

 Option
 Description

 Review

 Enable the selected user or user role assigned to the action to review the purchase order. If you need multiple employees to review a purchase order, multiple Review tasks can be assigned to different users by adding additional lines to the workflow sequence. If two users are assigned a Review in a row, each user must advance the workflow.

 Approve (Tier 1-4)

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Approve purchase orders
 Enabled

 For more information, refer to Control User Access .

 Enable the selected user or user role to approve the purchase order so it can advance in the workflow. Approval tiers must be used in order. For example, Approve (Tier 2) can only be used after Approve (Tier 1) .

 You can assign up to four tiers of approval, so that you can restrict purchases of specified amounts to users who serve in different ranks and roles in your organization. For example, if a maintenance technician can approve a purchase of $50, but a maintenance manager must approve all purchases over $50, you can assign Approve (Tier 1) to the technician and Approve (Tier 2) to the manager to ensure the correct employee approves the purchase.

 Approve All

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Approve purchase orders
 Enabled

 For more information, refer to Control User Access .

 Enable the selected user or user role to enact final approval on the purchase order. If any other approval tiers are used in the workflow, they must be followed by the Approve All action. For example, if you include Approve (Tier 1)  and Approve (Tier 2) , you must include Approve All as the final approval step.

 If the workflow includes only one approval step, use Approve All .

 Fulfill

 Related Privileges

 Group
 Privilege
 Column

 POs/Estimates
 Fulfill purchase orders
 Enabled

 For more information, refer to Control User Access .

 Enable the selected user to update the purchase order with received items and close the purchase order when all items have been received.

 -
 For each approval tier selected in the Action column, enter the Max Approval Amount to set the maximum dollar value of purchase orders that can be approved by the user(s) and user role(s) assigned to this approval tier. For example, if you set a Max Approval Amount of 50.00 for a user with the Approve (Tier 1)  action, but a purchase order exceeds $50.00, the workflow skips that user and progresses to the next user with the appropriate Max Approval Amount .

 -
 In the User/User Role column, select the Rent Manager user account(s) or user role(s) that can complete the corresponding step in the workflow.

 -
 Repeat steps 5 through 8 for any subsequent tasks in the workflow.

 -
 Click Save .
The new workflow is added to the list and is available to select for purchase orders.
