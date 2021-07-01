If the command is not working properly you might want to run `cobigen update` or `cobigen adapt-templates` first. 

Otherwise the command line should return a full list of the available increments. 

Assuming that the `context.xml` and `templates.xml` files were properly set up, this should include the &#34;CRUD Python Flask&#34; option. Select this option. The command line should print out &#34;Successful generation&#34; shortly.


Now open the folder containing the .yml input on Visual Studio, for instance. Observe that Cobigen has generated and named the five files mentioned above. We are now set to run the application.

The safest way to install the required packages is to do so locally, by setting up a virtual environment. 

executeCommand(&#34;.\venv\Scripts\activate&#34;,&#34;.\venv\Scripts\activate&#34;)






Run python -m pip install virtualenv with this bash-command.
`python -m pip install virtualenv `{{execute T1}} 








Run pip install -r requirements.txt with this bash-command.
`pip install -r requirements.txt `{{execute T1}} 



