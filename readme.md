# Mortage monthly payment calculation

- This application use Java Spring boot for backend, PostgreSQL for database and React with Typescript for frontend
- the build tool for Java backend is Maven and for React frontend is NPM 

### To run the application

- clone the repo
- open repo folder
- Install node modules by go to frontend folder and via the following command:

```console
cd frontend
npm install
```
- install Java SDK to run springboot and add it to JAVA_HOME PATH by following this link:

https://openjdk.java.net/install/

- install maven by following this link and set it to your Path:

https://maven.apache.org/download.cgi

- install PostgreSQL on your machine by following this link

https://www.postgresql.org/download/

- once you have finish all your install 
- Change the following properties to match your postgreSQL settings, change the username and password, the other are default values in the /target/classes/application.properties

```
server.port=9090
spring.jpa.database=POSTGRESQL
spring.datasource.platform=postgres
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=<your username (default is postgres)>
spring.datasource.password=<your database password>
spring.jpa.show-sql=true
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true

```

- Stop any instances of postgres on your computer. We need to free up port 5432.

once you have finished all the settings above, to run the application just go to the root folder (where has pom.xml) and execute run.sh 

```console
run.sh
```

- The backend will be running on port 9090 and will be watching for changes
- The frontend will be running on port 3000 and on the url: http://localhost:3000. You should receive the message "Hello World".

Enjoy your day! :smile:
