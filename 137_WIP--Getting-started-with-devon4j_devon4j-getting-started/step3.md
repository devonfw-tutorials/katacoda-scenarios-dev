In the next step we want to generate an API to store some information about our friends. We start by creating an database entity called FriendEntity.


If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/friendexample/core/src/main/java/com/example/friendexample/friendmanagement/dataaccess/api`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'FriendEntity.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/friendexample/core/src/main/java/com/example/friendexample/friendmanagement/dataaccess/api/FriendEntity.java">
package com.example.friendexample.friendmanagement.dataaccess.api;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = &#34;Friend&#34;)
public class FriendEntity {

  private String name;

  /**
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * @param name the name to set
   */
  public void setName(String name) {
    this.name = name;
  }
}
</pre>

