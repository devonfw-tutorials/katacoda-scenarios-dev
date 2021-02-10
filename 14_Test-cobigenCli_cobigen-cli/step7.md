Create the getter and setter for the new attribute


Go back to the IDE and find the file "devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java".

`devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java`{{open}}

Insert after &#39; private int age; &#39; the following segment of code.

Click on 'Copy to Editor' to change it automatically.

<pre class="file" data-filename="devonfw/workspaces/main/cobigenexample/core/src/main/java/com/example/application/cobigenexample/customermanagement/dataaccess/api/CustomerEntity.java" data-target="insert" data-marker="private int age;">
private int age;

private String company;

/** @return the company */
public String getCompany() {
    return company;
  }
  
  /** @param company the company to set */
  public void setCompany(String company) {
    this.company = company;
  }
</pre>


