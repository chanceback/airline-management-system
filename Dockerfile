# Use a Maven image to build the JAR file
FROM maven:3-openjdk-18 as build
WORKDIR /app

# Copy the Maven project files to the container
COPY pom.xml .
COPY src ./src

# Build the project and create the JAR file
RUN mvn clean package -DskipTests

# Use a new image to create the final Docker image
FROM openjdk:22
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Set the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
