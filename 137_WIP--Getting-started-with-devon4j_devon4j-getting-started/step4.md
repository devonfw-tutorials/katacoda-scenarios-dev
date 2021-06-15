Before we start generating code we need to build the application once to ensure that all dependencies are downloaded.


Please change the folder to &#39;friendexample&#39;.

`cd friendexample`{{execute T1}}
 
Use the following devon command to build the Java project.

`devon mvn clean install -Dmaven.test.skip=true`{{execute T1}}

The maven command 'clean' will clear the target directory beforehand. 

We do not need to execute the test cases, so we can skip them by using the option '-Dmaven.test.skip=true'.

