== Build devon4j devon4j-kafka-employeeapp application

[step]
--
buildJava("devon4j-kafka-employeeapp", false)
--

[step]
--
cloneRepository("", "https://github.com/wurstmeister/kafka-docker.git")
--
In order to run the test method in the sample application its required to have ZooKeeper & kafka running on your system. use below commands
cd kafka-docker
docker-compose up -d
[step]
--
dockerCompose("kafka-docker", { "startupTime": 600, "port": 8081, "path": "" })
--
Update the port number in the application.properties messaging.kafka.common.bootstrapServers=localhost:9092. For docker use docker ps to find out the mapped port number for the kafka container.

===Conclusion
 This application shows how devon4j-kafka works with the test method saveAndDeleteEmployeeViaKafkaService. This test menthod has 2 checks:

  
* sends an employee information to kafka using MessageSender of devon4j-kafka and consuming it with the Listener service classes implemented as part of this application and saves it in Db(using MessageProcessor). Its validated using another service findEmployeeByCriteria.

  
* Send an employeeId information to kakfa using MessageSender of devon4j-kafka and consuming it with the listener service classes implemented as part of this application and deletes the employee corresponding to the employeeId consumed(using MessageProcessor). Its validated using another service findEmployeeByCriteria
