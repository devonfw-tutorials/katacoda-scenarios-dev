

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

