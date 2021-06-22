

We shall now return to:

`C:\Users\[yourName]\.cobigen\templates\CobiGen_Templates\src\main\templates`

Inspect the `context.xml` file. For code generation purposes, this lists a trigger for each template folder available to CobiGen. 

We need to edit this file by adding another trigger referring to our new `CRUD-openapi-python` folder. On Visual Studio, for instance, paste at the top of the list:

``` html
&lt;trigger id=&#34;crud_openapi_python&#34; type=&#34;openapi&#34; templateFolder=&#34;crud_openapi_python&#34;&gt;
    &lt;containerMatcher type=&#34;element&#34; value=&#34;openAPIFile&#34;/&gt;
    &lt;matcher type=&#34;element&#34; value=&#34;EntityDef&#34;&gt;
      &lt;variableAssignment type=&#34;extension&#34; key=&#34;rootPackage&#34; value=&#34;x-rootpackage&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;component&#34; value=&#34;componentName&#34;/&gt;
      &lt;variableAssignment type=&#34;property&#34; key=&#34;entityName&#34; value=&#34;name&#34;/&gt;
    &lt;/matcher&gt;
&lt;/trigger&gt;
```




