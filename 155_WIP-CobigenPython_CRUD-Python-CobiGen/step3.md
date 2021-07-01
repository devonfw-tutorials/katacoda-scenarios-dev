Inspect `user.yml`. Note that the entity is declared under the `components: schemas:` section. In this case, we declared four typed attributes. 

Properties called `id` will be ignored, since the code generator automatically sets `id` as the table&#39;s primary key.

Besides the type, the project considers the following constraints:

* *maxLength*
* *uniqueItems*: sets `unique=True` for the column declaration.
* *required*: sets `nullable=False` for the column declaration.

====

Now open the command line at your project folder. You can check whether the CobiGen CLI is properly set up by running `devon cobigen`.

Let&#39;s generate the code now. Type:






Run cobigen generate user.yml with this bash-command.
`cobigen generate user.yml `{{execute T1}} 





## Install CobiGen

`devon cobigen`{{execute T1}}

