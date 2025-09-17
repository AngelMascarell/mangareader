# Etapa 1: Compilación con Maven
FROM maven:3.9.4-eclipse-temurin-17 AS build

WORKDIR /app

# Copiamos pom.xml y código fuente
COPY pom.xml .
COPY src ./src

# Construimos el JAR
RUN mvn clean package -DskipTests

# Etapa 2: Imagen final con JDK
FROM eclipse-temurin:19-jdk

WORKDIR /app

# Copiamos el JAR generado en la etapa build
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
