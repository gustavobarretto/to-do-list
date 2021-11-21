FROM openjdk:11

WORKDIR /webtasks

COPY ToDoList_server-0.0.1-SNAPSHOT.jar /webtasks/webtasks.jar

ENTRYPOINT ["java", "-jar", "webtasks.jar"]