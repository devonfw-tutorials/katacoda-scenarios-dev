Now you can go through api module of your java project and use Cobigen again to generate your client.
[step]
== Running CobiGen to generate to your Angular code
--
cobiGenJava("cobigenjavaexample/api/src/main/java/com/example/application/cobigenjavaexample/customermanagement/logic/api/to/CustomerEto.java",[1])
--
Angular client will be generated inside devon4ng-application-template/src folder.
Your client application for displaying your entities has been generated within minutes.Now you can check your angular client by running Angular application.
[step]
--
runClientNg("devon4ng-application-template"), { "startupTime": 200, "port": 4200, "path": "" })
--

Conclusion: In this Tutorial we learned the following things below.
Create an java project
CobiGen to generate the Angular source code out of the java files

