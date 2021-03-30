== Commands and options
Using the following command and option you will be able to customize your generation as follows:

=&gt; cobigen, cg: Main entry point of the CLI. If no arguments are passed, man page will be printed.

=&gt; [generate, g]: Command used for code generation.

   -&gt; InputGlob: Glob pattern of the input file or the whole path of the input file from which the code will be generated.

   -&gt; &lt; --increment, -i &gt; : Specifies an increment ID to be generated. You can also search increments by name and CobiGen will output the resultant list. If an exact match found, code generation will happen.

   -&gt; &lt; --template, -t &gt; : specifies a template ID to be generated. You can also search templates by name and CobiGen will output the resultant list.

   -&gt; &lt; --outputRootPath, -out &gt;: The project file path in which you want to generate your code. If no output path is given, CobiGen will use the project of your input file.

=&gt; [adapt-templates, a]: Generates a new templates folder next to the cobigen cli and stores its location    inside  a configuration file. After executing this command, the CLI will attempt to use the specified Templates folder.

    -&gt; &lt; --custom-location, -cl &gt; : Allows the user to choose an absolute file path to a custom location where the CobiGen Templates should be stored and read from.

=&gt; &lt; --verbose, -v &gt; : Prints debug information, verbose log.

=&gt; &lt; --help, -h &gt; : Prints man page.

=&gt; &lt; update, u&gt; : This command compare the artificial pom plug-ins version with central latest version available and user can update any outdated plug-ins version .

Now we will create devon4j project to create operation in Java code.



## Setting up your java project

Please change the folder to &#39;devonfw/workspaces/main&#39;.

`cd devonfw/workspaces/main`{{execute T1}}

Now you can use devonfw to setup a java project for you by executing the following devon command.

`devon java create com.example.application.cobigensetupexample`{{execute T1}}

== CLI Execution steps:
CobiGen CLI is installed inside your devonfw distribution. In order to execute it follow the next steps:

1. Run console.bat, this will open a console.

2. Execute cobigen or cg and the man page should be printed.

3. Use a valid CobiGen input file and run cobigen generate &lt;pathToInputFile&gt;. Note: On the first execution of the CLI, CobiGen will download all the needed dependencies, please be patient.

A list of increments will be printed so that you can start the generation.

== Examples:
A selection of commands that you can use with the CLI:

1. cobigen generate foo\bar\EmployeeEntity.java: As no output path has been defined, CobiGen will try to find the pom.xml of the current project in order to set the generation root path.

2. cobigen generate foo\bar\*.java --out other\project: Will retrieve all the Java files on that input folder and generate the code on the path specified by --out.

3. cg g foo\bar\webServices.yml --increment TO: Performs a string search using TO and will print the closest increments

4. cg g foo\bar\webServices.yml -i 1,4,6: Directly generates increments with IDs 1, 4 and 6. CobiGen will not request you any other input.

5. cg a: Downloads the latest CobiGen_Templates and unpacks them next to the CLI. CobiGen will from now on use these unpacked Templates for generation.

6. cg a -cl C:\my\custom\location: Downloads the latest CobiGen_Templates and unpacks them in C:\my\custom\location. CobiGen will from now on use these unpacked Templates for generation.

== CLI update command
command is &#34;cobigen update&#34;. In which you can select the plugins whichever you want to update.

== Troubleshooting
When generating code from a Java file, CobiGen makes use of Java reflection for generating templates. In order to do that, the CLI needs to find the compiled source code of your project.

If you find an error like Compiled class foo\bar\EmployeeEntity.java has not been found, it means you need to run mvn clean install on the input project so that a new target folder gets created with the needed compiled sources.

