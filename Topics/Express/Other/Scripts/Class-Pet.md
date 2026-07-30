# Pet Class (Script)

Source: https://rmxhelp.rentmanager.com/Topics/Express/Other/Scripts/Class-Pet.htm

This class examines the pet(s) of tenants and prospects as displayed on their details page on the Pets tile.

 More Information

 The Pet class is considered a child class of the Tenant class. If you wish to examine pet information for a prospect, you need to use the following syntax in prospect-type letters and reports:

 [Tenant().Pet().Function]

 Example

 [Tenant().Pet().Breed]

 Result

 Displays the breed of the first listed pet of the tenant.

 Class Parameter

 This class can specify a single, optional parameter: a pet type or an index.

 Pet Type

 Specify the Pet Type of the pet to examine as displayed on the tenant or prospect's details page on the Pets tile.

 [Tenant().Pet("Cat").Image()]

 Displays the image on file of the tenant's first pet with the pet type of Cat .

 Index

 An index allows you to return information about a specific pet on an account by using a number to identify each pet listed. For example, if there are three pets listed on a tenant’s account, they are referenced by indexes 0, 1, and 2. You can specify which pet you want Rent Manager to return information about by referencing an index in your script. If no index is specified, Rent Manager defaults to an index of 0, which represents the first pet listed on the tenant's account.

 [Tenant().Pet(1).Breed]

 Displays the breed of the first additional pet listed on the tenant or prospect's details page on the Pets tile.

 Available Functions

 This class can be followed by any of these scripting functions. Functions with parameters are hyperlinked in the table below.

 Class(). represents a required parent class. If the parent class is not defined at the beginning of your script, Rent Manager defaults to the most appropriate class based on the location of the script.

 Function
 Description

 Age

 [Tenant().Pet().Age]

 Displays the Age of the pet entered on the tenant or prospect's details page on the Pets tile.

 Breed

 [Tenant().Pet().Breed]

 Displays the Breed of the pet entered on the tenant or prospect's details page on the Pets tile.

 Color

 [Tenant().Pet().Color]

 Displays the Color of the pet entered on the tenant or prospect's details page on the Pets tile.

 Description

 [Tenant().Pet().Description]

 Displays the text entered in the Description field of the tenant's View Pets pop-up.

 Image

 [Tenant().Pet().Image()]

 Displays the image uploaded to the tenant's View Pets pop-up.

 Name

 [Tenant().Pet().Name]

 Displays the Name entered on the tenant or prospect's details page on the Pets tile.

 Pet Type

 [Tenant().Pet().PetType]

 Displays the Pet Type entered on the tenant or prospect's details page on the Pets tile.

 Size

 [Tenant().Pet().Size]

 Displays the Size entered on the tenant or prospect's details page on the Pets tile.
