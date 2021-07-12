Now, we will create a sample devon4j project with the name *migrateSampleApp*.
Before creating sample project, Execute below command to navigate to main directory.





Run cd devonfw/workspaces/main with this bash-command.
`cd devonfw/workspaces/main `{{execute T1}} 








Run mvn -DarchetypeVersion=3.0.1 -DarchetypeGroupId=com.devonfw.java.templates -DarchetypeArtifactId=devon4j-template-server archetype:generate with this bash-command.
`mvn -DarchetypeVersion=3.0.1 -DarchetypeGroupId=com.devonfw.java.templates -DarchetypeArtifactId=devon4j-template-server archetype:generate -DgroupId=com.example.application -DartifactId=migrateSampleApp -Dversion=1.0.0-SNAPSHOT -Dpackage=com.devonfw.application.migrateSampleApp -DinteractiveMode=false -DarchetypeVersion=2020.08.001`{{execute T1}} 



