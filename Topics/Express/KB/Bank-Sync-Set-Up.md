# Set Up Bank Sync

Source: https://rmxhelp.rentmanager.com/Topics/Express/KB/Bank-Sync-Set-Up.htm

The Bank Sync feature allows you to import a statement directly from your real world bank or credit card account into Rent Manager during your reconciliation process. This allows you to easily match real-world transactions to your Rent Manager data and eliminates the need to obtain a monthly statement from the bank to import or enter manually.

 More Information

 This feature is licensed and must be purchased separately. For more information, contact your sales representative at sales@rentmanager.com .

 The Bank Sync feature uses a built-in integration with Plaid to safely and securely connect with your bank or credit card institution. You can add any accounts you have open with that institution so that no matter what bank or credit card general ledger (GL) account you perform a reconciliation on, you can sync your transactions in real time.

 This topic will walk you through the initial setup of your banking institutions with Bank Sync in Rent Manager Express .

 More Information

 If you have already set up your institution(s) for Bank Sync and need to add an additional account to an existing institution, refer to Connect an Additional Account to an Institution for more information.

 Step 1: Connect an Institution via Plaid

 Related Privileges

 Group
 Privilege
 Column

 Accounting
 Manage Bank Sync Setup
 Enabled

 For more information, refer to Control User Access .

 An institution is the bank where your account is located. For each institution, you should have only one set of login credentials associated with that bank. For example, if you have a checking and credit card account at Bank of America and you use one set of login credentials to access both accounts, you only need to connect to Bank of America once.

 More Information

 Your online banking credentials are securely directed to Plaid and your institution. Rent Manager does not view or store your username and password.

 To connect to a banking institution, do the following:

 -
 Go to arrow_forward Accounting arrow_forward Accounting Setup arrow_forward General arrow_forward Bank Sync Setup .
The Bank Sync Setup page displays.

 -
 Click Manage Institution .
The Connect Accounts pop-up displays.

 -
 You must scroll through the Bank and Credit Card Connection Privacy Policy document and agree to both statements listed at the bottom of the pop-up in order to proceed. When complete, click Agree & Continue .

 -
 Click Add New to add a new institution.
The Plaid Link integration displays.

 -
 Since Plaid also has a privacy policy, you must agree by clicking Continue to proceed.

 -
 If you are not logged into Plaid, enter your phone number to sign in or register an account. Alternatively, select Continue as guest to continue the set up process without logging in.

 -
 Select a saved institution from the list or select Connect a new institution where you are directed to a page with a list of available institutions to choose from.

 More Information

 Whether you use a national institution or a local institution, make sure you select the correct institution name. For example, if you search for Chase Bank, you could get results for both Chase Personal Banking and Chase Business Banking . If you try to connect to an institution that doesn't match your institution credentials, the sync fails.

 -
 Once selected, you must authorize the connection. Depending on the requirements of the institution, you are either asked to enter your Username and Password for the institution's online banking, or Plaid redirects you to the institution's website to authorize the connection directly.
When the connection is authorized, your accounts associated with the institution display.

 -
 Check each account you wish to sync to Rent Manager , then click Continue .
The Plaid add wizard closes, and the Connect Accounts pop-up displays with your institution's accounts.

 Step 2: Update Institution Information for Rent Manager

 Once your account information from the banking institution is pulled into Rent Manager from Plaid, you must finish setting up the data for the institution and its linked accounts. This enables you to pull your transaction data from those accounts directly into Rent Manager while performing electronic reconciliations.

 On the Connect Accounts pop-up, do the following:

 -
 In the Description field, enter a unique comment for the institution for the selected accounts. This is for your reference within Rent Manager to identify the login associated with the accounts.

 -
 In the Linked GL Account column, select the corresponding GL account to which each account should be mapped. When this GL account is selected on an electronic bank or credit card reconciliation, transactions from the account are imported into Rent Manager so you can reconcile your Rent Manager transactions.

 More Information

 If you leave this field blank, Rent Manager ignores the institution account and does not pull transactions from it, even if you selected it to be synced with your database.

 -
 When finished, click Save & Add Another to create another institution connection, or click Save to return to the Bank Sync Setup page.
The new institution and its connected accounts display in the list.

 Next Steps

 Once your institution and accounts are synced to Rent Manager , you are able to pull in your real-world transactions directly to your electronic bank and credit card reconciliations. For more information, refer to Electronic Bank Reconciliation using Bank Sync and Electronic Credit Card Reconciliation with Bank Sync .
