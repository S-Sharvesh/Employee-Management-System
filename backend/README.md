# Employee Management System - Backend

## Overview

The backend of the Employee Management System is built using Spring Boot, a powerful Java framework designed to simplify the development of production-ready applications. This backend provides a RESTful API for managing employee and department data, connecting to MongoDB database.

## Features

- **RESTful API**: Provides endpoints for CRUD operations on employees and departments.
- **Data Initialization**: Includes sample data for departments and employees.
- **MongoDB Integration**: Connects to MongoDB database for data storage.
- **Exception Handling**: Custom error handling for not found resources.

## Technologies

- **Spring Boot**: Framework for building production-ready applications with Java.
- **MongoDB**: NoSQL database for document-based data storage.
- **Maven**: Build automation and dependency management tool.

## File Structure

```
employee-management-app
│
├── docker-compose.yaml
│
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── employeemanagement
│   │   │   │               ├── EmployeeManagementApplication.java
│   │   │   │               ├── config
│   │   │   │               │   └── CorsConfig.java
│   │   │   │               │   └── DataInitializer.java
│   │   │   │               ├── controller
│   │   │   │               │   ├── DepartmentController.java
│   │   │   │               │   └── EmployeeController.java
│   │   │   │               ├── model
│   │   │   │               │   ├── Department.java
│   │   │   │               │   └── Employee.java
│   │   │   │               ├── repository
│   │   │   │               │   ├── DepartmentRepository.java
│   │   │   │               │   └── EmployeeRepository.java
│   │   │   │               ├── service
│   │   │   │               │   └── DataInitializer.java
│   │   │   │               └── exception
│   │   │   │                   └── ResourceNotFoundException.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── data.sql
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── employeemanagement
│   │                       └── EmployeeManagementApplicationTests.java
│   ├── .gitignore
│   └── pom.xml
│   └── compose.yaml
│
└── frontend
    └── (frontend code)
```

## Setup Instructions

#### Important: Java 11 is required to run this project.

### 1. Clone the Repository

```bash
git clone https://github.com/S-Sharvesh/Employee-Management-System.git
cd Employee-Management-System/backend
```

### 2. Install Dependencies

Ensure you have [Maven](https://maven.apache.org/) and [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) installed. Run the following command to install the required dependencies:

```bash
mvn install -DskipTests
```

### 3. Configure the Application

Create a copy of `example_config.properties` and rename it to `application.properties` in `src/main/resources/`:

```properties
# MongoDB Configuration (Update with your MongoDB connection details)
spring.data.mongodb.uri=mongodb://your-mongodb-connection-string
spring.data.mongodb.database=your-database-name

# Server Configuration
server.port=8080

# Logging Configuration
logging.level.com.example.employeemanagement=INFO
```

**Important**:

- Replace `your-mongodb-connection-string` with your actual MongoDB connection string
- Replace `your-database-name` with your preferred database name
- The `application.properties` file is gitignored to protect your credentials

### 4. Start the Backend Server

Run the following command to start the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend server will be available at [http://localhost:8080](http://localhost:8080).

### 5. Access the API Endpoints

Here are some example API endpoints you can use to interact with the backend:

- **Get All Employees:**

  ```bash
  curl -X GET http://localhost:8080/api/employees
  ```

- **Get Employee by ID:**

  ```bash
  curl -X GET http://localhost:8080/api/employees/1
  ```

- **Create a New Employee:**

  ```bash
  curl -X POST http://localhost:8080/api/employees -H "Content-Type: application/json" -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "age": 30, "department": {"name": "Engineering"}}'
  ```

- **Update an Employee:**

  ```bash
  curl -X PUT http://localhost:8080/api/employees/1 -H "Content-Type: application/json" -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "age": 30, "department": {"name": "Engineering"}}'
  ```

- **Delete an Employee:**

  ```bash
  curl -X DELETE http://localhost:8080/api/employees/1
  ```

- **Get All Departments:**

  ```bash
  curl -X GET http://localhost:8080/api/departments
  ```

- **Get Department by ID:**

  ```bash
  curl -X GET http://localhost:8080/api/departments/1
  ```

### 6. Data Initialization

The `DataInitializer.java` class is used to preload sample data into the database. This is particularly useful for development and testing.

### 7. Running Tests

To run the unit and integration tests, use:

```bash
mvn test
```

## Detailed File Descriptions

### `EmployeeManagementApplication.java`

The main class that serves as the entry point for the Spring Boot application.

### `DepartmentController.java` and `EmployeeController.java`

REST controllers for handling HTTP requests related to departments and employees, respectively.

### `Department.java` and `Employee.java`

Entity classes representing the `departments` and `employees` collections in the MongoDB database.

### `DepartmentRepository.java` and `EmployeeRepository.java`

Repository interfaces extending MongoRepository for performing CRUD operations on the `departments` and `employees` entities.

### `DataInitializer.java`

A service class that initializes the database with sample data upon application startup.

### `ResourceNotFoundException.java`

A custom exception class used for handling cases where requested resources are not found.

### `application.properties`

Configuration file for Spring Boot, including database connection settings. **Note**: This file is gitignored for security.

### `example_config.properties`

Example configuration file showing the required properties structure.

## Swagger API Documentation

The backend API is documented using Swagger, which provides a user-friendly interface for exploring the available endpoints. To access the Swagger UI, navigate to [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) after starting the backend server.

If you have everything set up correctly, you should see the Swagger UI with a list of available endpoints and the ability to test them directly from the browser:

<!-- API Documentation Screenshot - To be added -->

_API Documentation interface will be displayed here_

## Troubleshooting

### Common Issues

- **`Could not autowire` Errors**: Ensure all Spring Boot components (controllers, services, repositories) are correctly annotated and located in the appropriate package structure.

- **`Exception opening socket` for MongoDB**: Verify that MongoDB is running and accessible. Check MongoDB logs for connection issues.

- **`Connection refused`**: Ensure your MongoDB connection string is correct and the database is accessible.

- **`Port Already in Use`**: If the default port `8080` is already in use, change the port in `application.properties` or terminate the conflicting process.

- **`CORS Error`**: If you encounter CORS issues, ensure that the `CorsConfig.java` class is correctly configured.

- **`Build failed`**: If the Maven build fails, check if you are using Java 11 and have the necessary dependencies installed. Also, check the error logs for more details.

## Contributing

If you'd like to contribute to the backend development, please fork the repository and submit a pull request with your changes. Ensure that you follow the project's coding standards and include relevant tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## More Information

For more information about this project, please refer to the comprehensive [documentation](../README.md).

## Contact

For any questions or issues, please contact [contact@employeemanagement.com](mailto:contact@employeemanagement.com).

---
