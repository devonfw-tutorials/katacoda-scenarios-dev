devonfw supports the automatic migration of databases with flyway. We will use this feature to create a database table for our friends entity.


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/friendexample/core/src/main/resources/db/type/h2`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'V0001__CreateFriendTable.sql' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/friendexample/core/src/main/resources/db/type/h2/V0001__CreateFriendTable.sql">
CREATE TABLE `Friend` (

    id BIGINT NOT NULL AUTO_INCREMENT,
    modificationCounter INTEGER NOT NULL,
    name varchar(50)

)
</pre>

devonfw will use this file to migrate the database to the state we want when we start the application.
