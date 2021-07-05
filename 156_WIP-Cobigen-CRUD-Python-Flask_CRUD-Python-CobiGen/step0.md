

## devonfw setup



Create the directory where the devonfw IDE will be installed.

`mkdir devonfw`{{execute T1}}

`cd devonfw`{{execute T1}}


To install devonfw execute the following commands. More information about setting up your IDE on https://devonfw.com/website/pages/docs/devonfw-ide-introduction.asciidoc.html#setup.asciidoc

First you have do download and extract the installation files.

`wget -c https://bit.ly/2BCkFa9 -O - | tar -xz`{{execute T1}}

Now start the installation process. The tools that are installed within the IDE can be configured in a settings repository. A repository that you can use has already been created by the setup script. It is located in the '/root/devonfw-settings' folder.

`bash setup /root/devonfw-settings/settings.git`{{execute T1}}

The installation process may take a while.

Accept the licence agreements.
`yes`{{execute T1}}


The installer will ask you if you want to enter secrets for your maven repository. You can simply skip this by pressing 'Enter'.
 

The devonfw IDE is now installed. To use the new 'devon' commands you have the open a new terminal or use the following command:

`. ~/.bashrc`{{execute T1}}



## Install CobiGen

`devon cobigen`{{execute T1}}






Run devon with this bash-command.
`devon `{{execute T1}} 





Run the CobiGen command 'adapt-templates' to generate a new templates folder and save its location in a configuration file.

`devon cobigen adapt-templates`{{execute T1}}




Please change the folder to &#39;workspaces/main&#39;.

`cd workspaces/main`{{execute T1}}


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/.cobigen/templates/CobiGen_Templates/src/main/templates`{{execute T1}}

`cd  /root/.cobigen/templates/CobiGen_Templates/src/main/templates`{{execute T1}}


Now clone the repository to your local directory.

`git clone https://github.com/devonfw-tutorials/tutorial-compiler.git`{{execute T1}}



Switch to the editor and open the file 'devonfw/workspaces/main/root/.cobigen/templates/CobiGen_Templates/src/main/templates/context.xml'.

`devonfw/workspaces/main/root/.cobigen/templates/CobiGen_Templates/src/main/templates/context.xml`{{open}}




Replace the content of the file with the following code.


Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/root/.cobigen/templates/CobiGen_Templates/src/main/templates/context.xml" data-target="replace" data-marker="">
&lt;?xml version=&#34;1.0&#34; encoding=&#34;UTF-8&#34; standalone=&#34;yes&#34;?&gt;
&lt;contextConfiguration xmlns=&#34;http://capgemini.com/devonfw/cobigen/ContextConfiguration&#34; version=&#34;2.1&#34;&gt;

  &lt;trigger id=&#34;crud_java_server_app&#34; type=&#34;java&#34; templateFolder=&#34;crud_java_server_app&#34;&gt;
    &lt;containerMatcher type=&#34;package&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api&#34;
      retrieveObjectsRecursively=&#34;false&#34;/&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api\.([^\.]+)Entity&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;entityName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_java_server_app_complex&#34; type=&#34;java&#34; templateFolder=&#34;crud_java_server_app_complex&#34;&gt;
    &lt;containerMatcher type=&#34;package&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api&#34;
      retrieveObjectsRecursively=&#34;false&#34;/&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api\.([^\.]+)Entity&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;entityName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_typescript_angular_client_app&#34; type=&#34;typescript&#34; templateFolder=&#34;crud_typescript_angular_client_app&#34;&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;([^\.]+).entity&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;entityName&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;domain&#34; value=&#34;demo&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;testdata_builder&#34; type=&#34;java&#34; templateFolder=&#34;testdata_builder&#34;&gt;
    &lt;containerMatcher type=&#34;package&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api&#34;
      retrieveObjectsRecursively=&#34;false&#34;/&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.dataaccess\.api\.([^\.]+Entity)&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;pojoName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.logic\.api\.to\.([^\.]+[E|C]to)&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;pojoName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
    &lt;matcher type=&#34;expression&#34; value=&#34;instanceof java.lang.Enum&#34; accumulationType=&#34;NOT&#34;/&gt;
    &lt;matcher type=&#34;expression&#34; value=&#34;isAbstract&#34; accumulationType=&#34;NOT&#34;/&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;constants_security_permissions&#34; type=&#34;xml&#34; templateFolder=&#34;constants/security_permissions&#34;&gt;
    &lt;matcher type=&#34;nodename&#34; value=&#34;access-control-schema&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;rootPackage&#34; value=&#34;com.devonfw.gastronomy.restaurant&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;constants_named_queries&#34; type=&#34;xml&#34; templateFolder=&#34;constants/named_queries&#34;&gt;
    &lt;matcher type=&#34;nodename&#34; value=&#34;entity-mappings&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;rootPackage&#34; value=&#34;com.devonfw.gastronomy.restaurant&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_angular_client_app&#34; type=&#34;java&#34; templateFolder=&#34;crud_angular_client_app&#34;&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.logic\.api\.to\.([^\.]+)Eto&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;etoName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_ngrx_client_app&#34; type=&#34;java&#34; templateFolder=&#34;crud_ngrx_client_app&#34;&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.logic\.api\.to\.([^\.]+)Eto&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;etoName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_java_ea_uml&#34; type=&#34;xml&#34; templateFolder=&#34;crud_java_ea_uml&#34;&gt;
    &lt;containerMatcher type=&#34;xpath&#34; value=&#34;./uml:Model//packagedElement[@xmi:type=&#39;uml:Class&#39;]&#34;/&gt;
    &lt;matcher type=&#34;xpath&#34; value=&#34;self::node()[@xmi:type=&#39;uml:Class&#39;]/ancestor::uml:Model&#34;&gt;
      &lt;variableAssignment type=&#34;xpath&#34; key=&#34;rootPackage&#34;
        value=&#34;self::node()/ancestor::packagedElement/packagedElement/@name&#34;/&gt;
      &lt;variableAssignment type=&#34;xpath&#34; key=&#34;component&#34;
        value=&#34;self::node()/ancestor::packagedElement/packagedElement/packagedElement/@name&#34;/&gt;
      &lt;variableAssignment type=&#34;xpath&#34; key=&#34;className&#34; value=&#34;self::node()/@name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_openapi_java_server_app&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_java_server_app&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;extension&#34; key=&#34;rootPackage&#34; value=&#34;x-rootpackage&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;entityName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_openapi_angular_client_app&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_angular_client_app&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;domain&#34; value=&#34;demo&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;etoName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_openapi_angular_service_based_app&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_angular_service_based_app&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;ComponentDef&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;domain&#34; value=&#34;demo&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;name&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;etoName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;cobigen-python-templates&#34; type=&#34;openapi&#34; templateFolder=&#34;cobigen-python-templates&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;extension&#34; key=&#34;rootPackage&#34; value=&#34;x-rootpackage&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;entityName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_openapi_net&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_net&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;extension&#34; key=&#34;rootPackage&#34; value=&#34;x-rootpackage&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;entityName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_openapi_ionic_client_app&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_ionic_client_app&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;domain&#34; value=&#34;demo&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;etoName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;crud_ionic_client_app&#34; type=&#34;java&#34; templateFolder=&#34;crud_ionic_client_app&#34;&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.logic\.api\.to\.([^\.]+)Eto&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;etoName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;REST_Docs&#34; type=&#34;java&#34; templateFolder=&#34;documentation/rest&#34;&gt;
    &lt;containerMatcher type=&#34;package&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.service\.api\.rest&#34;
      retrieveObjectsRecursively=&#34;false&#34;/&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.service\.api\.rest\.([^\.]+)RestService&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;Swagger_Docs&#34; type=&#34;java&#34; templateFolder=&#34;documentation/kafka&#34;&gt;
    &lt;containerMatcher type=&#34;package&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.service\.data&#34;
      retrieveObjectsRecursively=&#34;false&#34;/&gt;
    &lt;matcher type=&#34;fqn&#34; value=&#34;((.+\.)?([^\.]+))\.([^\.]+)\.service\.data\.([^\.]+)To&#34;&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;rootPackage&#34; value=&#34;1&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;domain&#34; value=&#34;3&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;component&#34; value=&#34;4&#34;/&gt;
      &lt;variableAssignment type=&#34;regex&#34; key=&#34;toName&#34; value=&#34;5&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
  &lt;trigger id=&#34;OpenAPI_docs&#34; type=&#34;openapi&#34; templateFolder=&#34;documentation/openapi&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;constant&#34; key=&#34;rootPackage&#34; value=&#34;com.devonfw&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;entityName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
  &lt;/trigger&gt;
&lt;/contextConfiguration&gt;
</pre>



Create the new folder '../../../../../../devonfw/workspaces/main/cobigen-python-example'.

The '-p' parameter ensures, that the whole directory structure is created.

`mkdir -p ../../../../../../devonfw/workspaces/main/cobigen-python-example`{{execute T1}}



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/root/devonfw/workspaces/main/cobigen-python-example`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'user.yml' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/root/devonfw/workspaces/main/cobigen-python-example/user.yml">
openapi: 3.0.0
servers:
  - url: &#39;https://localhost:8081/server/services/rest&#39;
    description: Just some data
info:
  title: devonfw Example
  description: Example of a API definition
  version: 1.0.0
  x-rootpackage: com.devonfw.poc.jwtsample
paths:
  /:
    post:
      responses:
        &#39;200&#39;:
          description: Any
components:
    schemas:
        User:
          x-component: usermanagement
          description: Entity definiton of User
          type: object
          properties:
            name:
              type: string
              maxLength: 100
              uniqueItems: true            
            age:
              type: integer
            phone :
              type: string
              maxLength: 100
              uniqueItems: true
            email:
              type: string
              maxLength: 100
              uniqueItems: true              
          required:
            - name
            - email
</pre>






Run cd /root/devonfw/workspaces/main/cobigen-python-example with this bash-command.
`cd /root/devonfw/workspaces/main/cobigen-python-example `{{execute T1}} 








Run cobigen generate user.yml -i 1 with this bash-command.
`cobigen generate user.yml -i 1 `{{execute T1}} 








Run python3 -m pip install virtualenv with this bash-command.
`python3 -m pip install virtualenv `{{execute T1}} 








Run python3 -m virtualenv env with this bash-command.
`python3 -m virtualenv env `{{execute T1}} 






We want to execute the command in a different directory so you have to change your current directory.
With the next command we also open a new terminal, so you have to execute the command twice 
`cd venv/bin `{{execute T1}}. 

Run source activate with this bash-command.
`source activate `{{execute T1}} 








Run pip install -r requirements.txt with this bash-command.
`pip install -r requirements.txt `{{execute T1}} 








Run flask db init with this bash-command.
`flask db init `{{execute T1}} 








Run flask db migrate -m &#39;initial migration&#39; with this bash-command.
`flask db migrate -m &#39;initial migration&#39; `{{execute T1}} 








Run flask db upgrade with this bash-command.
`flask db upgrade `{{execute T1}} 








Run flask run with this bash-command.
`flask run `{{execute T1}} 



