### Database





Let&#39;s initialize the database now by running:

`flask db init`

This should create the &#34;migrations&#34; folder and the respective &#34;__pycache__&#34; folders in your directory. 

In order to upload the table declared in our &#34;Model.py&#34; we need a migration script. This command requires an attached message whenever it runs, for instance:

`flask db migrate -m &#39;first migration&#39;`

In this case, the terminal should print in return &#34;Detected added table &#39;user&#39;&#34;, among others.

We can now upload the migration script by running:

`flask db upgrade`

This way our database is all set up. 



