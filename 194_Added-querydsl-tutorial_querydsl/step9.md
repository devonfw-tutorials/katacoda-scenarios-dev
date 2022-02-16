Now you can run the application in development mode.


Please change the folder to &#39;QueryDslTutorial&#39;.

`cd QueryDslTutorial`{{execute T1}}


Run `mvn compile quarkus:dev` with this command.
`mvn compile quarkus:dev `{{execute T1}} 


Accessing the application with the following link will send a GET-request for fruits named Cherry. The `FruitResource` will call the `FindByName` method and pass the `name` parameter to the `FruitRepository`&#39;s `findAllQueryDslName` method, which it inherents from the `FruitFragment` interface. The querying occurs in the method&#39;s implementation, as explained in step 6.
https://[[HOST_SUBDOMAIN]]-8080-[[KATACODA_HOST]].environments.katacoda.com/fruits/name/Cherry


