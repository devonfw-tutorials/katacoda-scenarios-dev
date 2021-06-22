Inspect `user.yml`. Note that the entity is declared under the `components: schemas:` section. In this case, we declared four typed attributes. 

Properties called `id` will be ignored, since the code generator automatically sets `id` as the table&#39;s primary key.

Besides the type, the project considers the following constraints:

* *maxLength*
* *uniqueItems*: sets `unique=True` for the column declaration.
* *required*: sets `nullable=False` for the column declaration.

====



Now open the command line at your project folder. You can check whether the CobiGen CLI is properly set up by running `devon cobigen`.

Let&#39;s generate the code now. Type:

`cobigen generate user.yml`


If the command is not working properly you might want to run `cobigen update` or `cobigen adapt-templates` first. 

Otherwise the command line should return a full list of the available increments. 

Assuming that the `context.xml` and `templates.xml` files were properly set up, this should include the &#34;CRUD Python Flask&#34; option. Select this option. The command line should print out &#34;Successful generation&#34; shortly.




