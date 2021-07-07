Now, we will create a sample devon4j application with the name *sampleapp* and build it.


## Setting up your Java project

Please change the folder to &#39;workspaces/main&#39;.

`cd workspaces/main`{{execute T1}}

Now you can use devonfw to setup a Java project for you by executing the following 'devon' command.

`devon java create com.example.application.sampleapp`{{execute T1}}



Please change the folder to &#39;sampleapp&#39;.

`cd sampleapp`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

