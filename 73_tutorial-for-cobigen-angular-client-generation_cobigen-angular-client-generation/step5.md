CobiGen is integrated via plugin in the VS Code IDE. We will use it to generate code from one single java class based on existing templates.


Please change the folder to &#39;..&#39;.

`cd ..`{{execute T1}}


Use the ng create command to create a new Angular Project with the name cobigenexample.
`devon ng create cobigenexample`{{execute T1}}




Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/cobigenexample/angular&#39; in terminal 3 automatically. Alternatively you can click on the + next to &#39;IDE&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/cobigenexample/angular`{{execute T3}}


Now build and start the app
 

`devon ng serve --host 0.0.0.0 --disable-host-check`{{execute T3 }}

For your local projects you wouldn't add '--host 0.0.0.0' and '--disable-host-check' to the ng command.


Now you can open the following link to use the app. 
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
 



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'CustomerEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java">
package com.example.application.cobigenexample.customermanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = &#34;Customer&#34;)
public class CustomerEntity {

  private String firstname;

  private String lastname;

  private int age;

  /**
   * @return the firstname
   */
  public String getFirstname() {
    return firstname;
  }

  /**
   * @param firstname the firstname to set
   */
  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  /**
   * @return the lastname
   */
  public String getLastname() {
    return lastname;
  }

  /**
   * @param lastname the lastname to set
   */
  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  /**
   * @return the age
   */
  public int getAge() {
    return age;
  }

  /**
   * @param age the age to set
   */
  public void setAge(int age) {
    this.age = age;
  }

}
</pre>



Run the cobiGen command 'adapt-templates' to generate a new templates folder and save its location in a configuration file.

`devon cobigen adapt-templates`{{execute T1}}




## CobiGen Java


Start CobiGen CLI and pass the file as parameter by executing the following command.
`devon cobigen generate cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java`{{execute T1}}

CobiGen will ask you which files to generate. You can enter the numbers separated by commas. 
`1,3,5,6,8`{{execute T1}}

CobiGen will now generate code based on the source file and the templates you have passed.


