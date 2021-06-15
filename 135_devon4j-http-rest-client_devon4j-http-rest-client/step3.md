* To create devon4j service Client. First You need to create a sample devon4j project and build the project.


## Setting up your Java project

Please change the folder to &#39;..&#39;.

`cd ..`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create com.sample.application.httprestclient`{{execute T1}}



Please change the folder to &#39;httprestclient&#39;.

`cd httprestclient`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

Then, You need to add required dependency to your application. 
