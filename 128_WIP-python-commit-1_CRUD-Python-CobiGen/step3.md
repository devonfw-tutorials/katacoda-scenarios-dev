The only thing we are missing now is a .yml input in v3.0.0 format declaring a component and its properties. Take `user.yaml` as an example.



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/main/cobigen-python-example`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'user.yml' will be created automatically inside the newly created folder.

<pre class="file" data-filename="main/cobigen-python-example/user.yml">
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

