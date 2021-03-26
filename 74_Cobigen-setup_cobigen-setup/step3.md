====

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

