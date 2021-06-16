This might take some time for application to start.


Please change the folder to &#39;httprestclient&#39;.

`cd httprestclient`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 







The server is already running. Rerun the command to stop and relaunch it automatically.
 

`devon mvn spring-boot:run`{{execute T2 interrupt}}

This will take some time.

Once the REST-server started running,
Open http://localhost:8080/client/services/rest/testrest/v1/response
