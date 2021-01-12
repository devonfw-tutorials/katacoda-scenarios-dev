Build the java project


Please change the folder to cobigenexample.

`cd cobigenexample`{{execute }}
 
Use the following devon command to build the java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option &#39;-Dmaven.test.skip=true&#39;.

