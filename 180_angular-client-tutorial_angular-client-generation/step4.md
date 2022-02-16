CobiGen is integrated via plugin in the VS Code IDE. We will use it to generate code from one single java class based on existing templates.


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/cobigenjavaexample/core/src/main/java/com/example/application/cobigenjavaexample/customermanagement/dataaccess/api`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'CustomerEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenjavaexample/core/src/main/java/com/example/application/cobigenjavaexample/customermanagement/dataaccess/api/CustomerEntity.java">
package com.example.application.cobigenjavaexample.customermanagement.dataaccess.api;

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



## CobiGen Java


Open the following Java file in the IDE.
`devonfw/workspaces/main/cobigenjavaexample/core/src/main/java/com/example/application/cobigenjavaexample/customermanagement/dataaccess/api/CustomerEntity.java`{{open}}

You can use the plugin simply via the context menu. Make a right click on the Java file (in the explorer on the left or in the editor itself). The context menu will open and you can start the CobiGen Plugin by clicking on 'CobiGen'.

A terminal will open on the bottom of the IDE and CobiGen CLI will start.

You can choose the templates CobiGen should use by entering the numbers in the terminal of the IDE.

`1,3,5,6,8`


The CobiGen code generator will generate code for Transfer object, REST service handling and data access and so on.

For example, the following files are generated by CobiGen when using the specified templates:

(5) TO&#39;s: Generates the related Transfer Objects.
- `devonfw/workspaces/main/cobigenjavaexample/api/src/main/java/com/example/application/cobigenjavaexample/customermanagement/logic/api/to/CustomerEto.java`{{open}}
- `devonfw/workspaces/main/cobigenjavaexample/api/src/main/java/com/example/application/cobigenjavaexample/customermanagement/logic/api/to/CustomerSearchCriteriaTo.java`{{open}}
