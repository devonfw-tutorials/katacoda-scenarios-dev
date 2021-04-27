CobiGen is integrated via plugin in the VS Code IDE. We will use it to generate code from one single java class based on existing templates.


Please change the folder to &#39;..&#39;.

`cd ..`{{execute T1}}


Use the ng create command to create a new Angular Project with the name cobigenangularexample.
`devon ng create cobigenangularexample`{{execute T1}}




Please change the folder to &#39;cobigenangularexample&#39;.

`cd cobigenangularexample`{{execute T1}}


Run ng build command to build the Angular Project to the output directory specified in the angular.json.
`devon ng build`{{execute}}
  



Now you have to open another terminal. Click on the cd command twice and you will change to &#39;devonfw/workspaces/main/cobigenangularexample/angular&#39; in terminal 3 automatically. Alternatively you can click on the + next to &#39;IDE&#39;, choose the option &#39;Open New Terminal&#39; and run the cd command afterwards. 


`cd devonfw/workspaces/main/cobigenangularexample/angular`{{execute T3}}


Now build and start the app
 

`devon ng serve --host 0.0.0.0 --disable-host-check`{{execute T3 }}

For your local projects you wouldn't add '--host 0.0.0.0' and '--disable-host-check' to the ng command.


Now you can open the following link to use the app. 
https://[[HOST_SUBDOMAIN]]-4200-[[KATACODA_HOST]].environments.katacoda.com/
 



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/cobigenangularexample/core/src/main/java/com/example/application/cobigenangularexample/customermanagement/dataaccess/api`{{execute T1}}

Switch to the IDE and click 'Copy to Editor'. 

'CustomerEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenangularexample/core/src/main/java/com/example/application/cobigenangularexample/customermanagement/dataaccess/api/CustomerEntity.java">
package com.example.application.cobigenangularexample.customermanagement.dataaccess.api;

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


Open the following java file in the IDE.
`devonfw/workspaces/main/cobigenangularexample/core/src/main/java/com/example/application/cobigenangularexample/customermanagement/dataaccess/api/CustomerEntity.java`{{open}}

You can use the plugin simply via the context menu. Make a right click on the java file (in the explorer on the left or in the editor itself). The context menu will open and you can start the CobiGen Plugin by clicking on 'CobiGen'.

A terminal will open on the bottom of the IDE and CobiGen CLI will start.

You can choose the templates CobiGen should use by entering the numbers in the terminal of the IDE.

`1,3,5,6,8`


