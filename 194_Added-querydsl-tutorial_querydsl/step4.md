The data model consists of a Fruit entity with Id, name, color, and price fields.

To extend the application with custom queries in Querydsl, we need to create a FruitFragment-interface and its implementation. This will be extended by the FruitRepository along with the CrudRepository.



If the parent directories aren't already in the project, 'mkdir -p' will create them for you. 

`mkdir -p /root/devonfw/workspaces/main/QueryDslTutorial/src/main/java/org/acme/spring/data/jpa/repo/fruit`{{execute T1}}

Switch to the editor and click 'Copy to Editor'. 

'FruitFragment.java' will be created automatically inside the newly created folder.

<pre class="file" data-filename="devonfw/workspaces/main/QueryDslTutorial/src/main/java/org/acme/spring/data/jpa/repo/fruit/FruitFragment.java">
package org.acme.spring.data.jpa.repo.fruit;

import java.util.List;

import org.acme.spring.data.jpa.model.Fruit;

public interface FruitFragment {

  public List&lt;Fruit&gt; findAllQueryDslName(String name);

  public List&lt;Fruit&gt; findAllQueryDslMaxPriceDesc(Float price);

  public List&lt;Fruit&gt; findAllQueryDslMinPriceAsc(Float price);

  public List&lt;Fruit&gt; findAllQueryDslPriceRange(Float min, Float max);

}

</pre>

