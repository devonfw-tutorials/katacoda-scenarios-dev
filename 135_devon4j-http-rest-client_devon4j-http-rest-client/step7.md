This might take some time for application to start.



Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/httprestclient/server&#39; in terminal 2 automatically. The first click will open a new terminal and the second one will change the directory. Alternatively you can click on the &#39;+&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/httprestclient/server`{{execute T2}}

Start the server in terminal 2 by running the 'maven' command 'mvn spring-boot:run'.

Because this terminal runs the server we will not use it for any other command.
 

`devon mvn spring-boot:run`{{execute T2 }}

This will take some time.

Once the REST-server started running,
Open http://localhost:8080/client/services/rest/testrest/v1/response, Enter username as &#34;admin&#34; and password as &#34;admin&#34;
