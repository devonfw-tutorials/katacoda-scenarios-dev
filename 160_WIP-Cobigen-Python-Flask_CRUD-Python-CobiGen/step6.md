




Run `flask db init` with this command.
`flask db init `{{execute T1}} 






In order to upload the table declared in our &#34;Model.py&#34; we need a migration script. This command requires an attached message whenever it runs, for instance:

`flask db migrate -m` &#34;`first migration`&#34;

In this case, the terminal should print in return `Detected added table user`, among others. We can now upload the migration script.








Run `flask db upgrade` with this command.
`flask db upgrade `{{execute T1}} 




