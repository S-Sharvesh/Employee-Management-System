# Employee Management Full-Stack Application

The **Employee Management Full-Stack Application** is a modern, feature-rich system for managing employee and department data, built to demonstrate the power of combining traditional enterprise technologies with modern web frameworks. It leverages a responsive React frontend alongside a robust Spring Boot backend, delivering a seamless user experience with features such as CRUD operations, data visualization, and secure REST APIs. This application uses MongoDB for data storage and is designed for local development and testing, making it an ideal learning project for full-stack development.


## Table of Contents

- [Overview](#overview)
- [Key Technologies](#key-technologies)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Backend Setup](#backend-setup)
  - [Prerequisites](#1-prerequisites)
  - [Clone the Repository](#2-clone-the-repository)
  - [Install Dependencies](#3-install-dependencies)
  - [Configure the Application](#4-configure-the-application)
  - [Start the Backend Server](#5-start-the-backend-server)
  - [Access the API Endpoints](#6-access-the-api-endpoints)
  - [API Documentation](#7-api-documentation)
  - [Backend Testing](#8-backend-testing)
- [Frontend Setup](#frontend-setup)
  - [Clone the Repository](#1-clone-the-repository-1)
  - [Install Dependencies](#2-install-dependencies-1)
  - [Start the Development Server](#3-start-the-development-server)
  - [Build for Production](#4-build-for-production)
  - [Test the Application](#5-test-the-application)
- [Detailed Component Instructions](#detailed-component-instructions)
- [Containerization](#containerization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

The Employee Management System is a dynamic full-stack application that seamlessly combines cutting-edge and traditional technologies. By integrating a modern **React** frontend with a classic **Spring Boot** backend, this project demonstrates how new and established technologies can harmoniously work together to create a robust and efficient application for managing employee and department data!

![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![JUnit5](https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![OpenAPI](https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Render](https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Airbnb JavaScript Style Guide](https://img.shields.io/badge/Airbnb%20Style-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)
![Google Java Style Guide](https://img.shields.io/badge/Google%20Java%20Style-4285F4?style=for-the-badge&logo=google&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white)
![WebStorm](https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=webstorm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

## Screenshots

### Landing Page

<img width="2852" height="1504" alt="image" src="https://github.com/user-attachments/assets/14df2e3a-7b77-4d6a-8fad-b61305cf31c9" />

<!-- Landing page screenshot -->

_Modern responsive landing page with navigation and branding_

### Dashboard

<img width="2852" height="1624" alt="image" src="https://github.com/user-attachments/assets/617969af-cdef-44ac-9f00-de47f3a0dd49" />

<!-- Dashboard screenshot -->

_Analytics dashboard with employee metrics and data visualization using Chart.js_

### Employee Management

<img width="2852" height="1570" alt="image" src="https://github.com/user-attachments/assets/65e097d5-d0b7-405a-a8c2-aad637787db9" />

<!-- Employee list screenshot -->

_Employee management interface with CRUD operations, search, and pagination_

### Department Management

<img width="2852" height="1570" alt="image" src="https://github.com/user-attachments/assets/93a19664-3053-4407-b738-7c9bf3459083" />

<!-- Department list screenshot -->

_Department organization and management system_

**Add Employee Form:**

<p align="center" style="cursor: pointer">
<img width="4" height="1" alt="image" src="https://github.com/user-attachments/assets/ba255dab-f902-404c-84c9-ddb4da9473c4" />
</p>

**Edit Department Form:**

<p align="center" style="cursor: pointer">
  <img width="2880" height="1622" alt="image" src="https://github.com/user-attachments/assets/48fb0b16-54e7-447f-a53e-861c4c0ebe28" />
</p>

**Profile Page:**

<p align="center" style="cursor: pointer">
 <img width="2852" height="1618" alt="image" src="https://github.com/user-attachments/assets/0259393e-88a7-4bf2-8996-055af578a5cf" />
</p>

**Login Page:**

<p align="center" style="cursor: pointer">
 <img width="2846" height="1624" alt="image" src="https://github.com/user-attachments/assets/2b030bdd-8556-4dbd-aa35-09f994bb32bd" />
</p>

**Register Page:**

<p align="center" style="cursor: pointer">
  <img width="2848" height="1556" alt="image" src="https://github.com/user-attachments/assets/77def6a7-a551-428a-97d9-371596781b68" />
</p>

**404 Page:**

<p align="center" style="cursor: pointer">
 <img width="2856" height="1612" alt="image" src="https://github.com/user-attachments/assets/c222a98f-19ed-445f-a03a-4c1d0aded8b0" />
</p>

**Footer:**

<p align="center" style="cursor: pointer">
 <img width="2852" height="660" alt="image" src="https://github.com/user-attachments/assets/9611073b-2b8a-4f5c-b2b4-66a605cd7a62" />
</p>

<p align="center">
 And many more features & pages to explore! Feel free to navigate through the application and test the various functionalities.
</p>

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or higher)
- **Java** (JDK 11 or higher)
- **Maven** (v3.6 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/S-Sharvesh/Employee-Management-System.git
   cd Employee-Management-System
   ```

2. **Backend Setup**

   ```bash
   cd backend

   # Copy configuration template
   cp example_config.properties src/main/resources/application.properties

   # Edit application.properties with your MongoDB connection details
   # Install dependencies
   mvn install -DskipTests

   # Start the backend server
   mvn spring-boot:run
   ```

3. **Frontend Setup**

   ```bash
   cd frontend

   # Install dependencies
   npm install

   # Start the development server
   npm start
   ```

4. **Access the Application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080](http://localhost:8080)
   - API Documentation: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

## Key Technologies

- **React (Frontend)**: A modern JavaScript library for building user interfaces, providing a responsive and interactive experience.
  - **React Router**: A routing library for React that enables navigation and URL handling in single-page applications.
  - **Chart.js**: A JavaScript library for creating responsive and customizable charts and graphs.
  - **Axios**: A promise-based HTTP client for making API requests.
  - **Tailwind CSS**: A utility-first CSS framework for creating custom designs with minimal CSS.
  - **Redux**: A predictable state container for managing application state.
  - **Jest and React Testing Library**: Testing libraries for unit and integration testing React components.
- **Java Spring Boot (Backend)**: A powerful Java framework for building production-ready applications, offering robust backend support and data management.
  - **Spring Data MongoDB**: Integration with MongoDB database for document-based data storage.
  - **Spring Boot Actuator**: Production-ready features for monitoring and managing the application.
  - **Spring Boot Starter Web**: For building web applications and RESTful services.
  - **RESTful APIs**: For communication between the frontend and backend.
  - **Java 11**: Long-term support version of Java for stability.
  - **JUnit 5**: Testing framework for Java applications.
  - **Swagger**: Tool for documenting and testing RESTful APIs.
- **MongoDB**: A flexible NoSQL database for document-based data storage.
- **Docker**: Containerization platform for packaging applications and their dependencies.
- **Style Guides**: This project follows popular style guides to ensure clean and consistent code.
  - **Airbnb JavaScript Style Guide**: For writing clean and consistent JavaScript code.
  - **Google Java Style Guide**: For writing readable and maintainable Java code.

## File Structure

## API Endpoints

Here's a table listing all the RESTful API endpoints provided by this application:

| Endpoint                | Method | Description                         |
| ----------------------- | ------ | ----------------------------------- |
| `/api/employees`        | GET    | Get all employees                   |
| `/api/employees/{id}`   | GET    | Get an employee by ID               |
| `/api/employees`        | POST   | Add a new employee                  |
| `/api/employees/{id}`   | PUT    | Update an employee by ID            |
| `/api/employees/{id}`   | DELETE | Delete an employee by ID            |
| `/api/departments`      | GET    | Get all departments                 |
| `/api/departments/{id}` | GET    | Get a department by ID              |
| `/api/departments`      | POST   | Add a new department                |
| `/api/departments/{id}` | PUT    | Update a department by ID           |
| `/api/departments/{id}` | DELETE | Delete a department by ID           |
| `/swagger-ui.html`      | GET    | Access the Swagger UI documentation |

## File Structure

```
Employee-Management-Fullstack-App/
├── docker-compose.yaml
├── Jenkinsfile
├── openapi.yaml
├── README.md
├── package.json
├── .mvn/
│   └── wrapper
│       └── maven-wrapper.properties
├── kubernetes/
│   ├── configmap.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
├── nginx/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── employeemanagement/
│   │   │   │               ├── EmployeeManagementApplication.java
│   │   │   │               ├── config/
│   │   │   │               │   └── CorsConfig.java
│   │   │   │               │   └── DataInitializer.java
│   │   │   │               ├── controller/
│   │   │   │               │   ├── DepartmentController.java
│   │   │   │               │   └── EmployeeController.java
│   │   │   │               ├── model/
│   │   │   │               │   ├── Department.java
│   │   │   │               │   └── Employee.java
│   │   │   │               ├── repository/
│   │   │   │               │   ├── DepartmentRepository.java
│   │   │   │               │   └── EmployeeRepository.java
│   │   │   │               ├── service/
│   │   │   │               │   └── DataInitializer.java
│   │   │   │               └── exception/
│   │   │   │                   └── ResourceNotFoundException.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── data.sql
│   │   └── test/
│   │       └── java/
│   │           └── com/
│   │               └── example/
│   │                   └── employeemanagement/
│   │                       └── EmployeeManagementApplicationTests.java
│   ├── .gitignore
│   ├── pom.xml
│   └── compose.yaml
│
└── frontend/
    ├── build/
    ├── public/
    │   ├── index.html
    │   └── favicon.ico
    │   └── manifest.json
    │   └── robots.txt
    │   └── icon-192x192.webp
    │   └── icon-512x512.webp
    ├── src/
    │   ├── components/
    │   │   ├── Dashboard.js
    │   │   ├── EmployeeList.js
    │   │   ├── EmployeeForm.js
    │   │   ├── DepartmentList.js
    │   │   ├── DepartmentForm.js
    │   │   └── Navbar.js
    │   ├── services/
    │   │   ├── employeeService.js
    │   │   └── departmentService.js
    │   ├── App.js
    │   ├── index.js
    │   ├── index.css
    │   ├── reportWebVitals.js
    │   ├── App.css
    │   └── theme.js
    ├── Dockerfile
    ├── postcss.config.js
    ├── tailwind.config.js
    └── package.json
```

## Backend Setup

### 1. Prerequisites

Ensure that you have Java 11 installed on your local machine. If not, follow the instructions below:

- For MacOS:

  ```bash
  brew install openjdk@11
  export JAVA_HOME=/usr/local/opt/openjdk@11
  ```

- For Windows: Download OpenJDK 11 from [https://jdk.java.net/archive/](https://jdk.java.net/archive/) and follow the installation instructions.

- Also, ensure that MongoDB and MySQL are installed and running on your local machine.

### 2. Clone the Repository

```bash
git clone https://github.com/S-Sharvesh/Employee-Management-System.git
cd Employee-Management-System
cd backend
```

### 3. Install Dependencies

First, ensure you have [Maven](https://maven.apache.org/) and [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) installed. Run the following command to install them:

- For MacOS:
  ```bash
  brew install maven
  ```
- For Windows: Download Maven from [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi) and follow the installation instructions.

Next, install the project dependencies:

```bash
mvn install
```

### 4. Configure the Application

**Important**: Copy the example configuration and update it with your MongoDB connection details:

```bash
cp example_config.properties src/main/resources/application.properties
```

Edit `src/main/resources/application.properties` with your MongoDB configuration:

```properties
# MongoDB Configuration
spring.data.mongodb.uri=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority

# For local MongoDB
# spring.data.mongodb.uri=mongodb://localhost:27017/employee_management

# Server Configuration
server.port=8080
```

> **Security Note**: Never commit your actual `application.properties` file with real credentials to version control. The `.gitignore` file is configured to protect this file.

### 5. Start the Backend Server

Before starting the server, ensure that MongoDB is running and properly configured!

Then, run the following command to start the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will be available at [http://localhost:8080](http://localhost:8080).

### 6. Access the API Endpoints

- **Get All Employees:**

  ```bash
  curl -X GET http://localhost:8080/api/employees
  ```

- **Get Employee by ID:**

  ```bash
  curl -X GET http://localhost:8080/api/employees/1
  ```

- **Get All Departments:**

  ```bash
  curl -X GET http://localhost:8080/api/departments
  ```

- **Get Department by ID:**

  ```bash
  curl -X GET http://localhost:8080/api/departments/1
  ```

- **Feel free to add more API endpoints as needed...**

### 7. API Documentation

The application uses Swagger to provide an interactive API documentation interface. The Swagger UI allows developers to explore the available API endpoints, view detailed information about each endpoint, and test the endpoints directly from the browser.

**How to Access the API Documentation:**

1. **Start the Backend Server**: Ensure that the backend server is running:

   ```bash
   mvn spring-boot:run
   ```

2. **Open the Swagger UI**: Navigate to the following URL in your web browser:
   [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

3. **Raw OpenAPI JSON**: Available at [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

**Benefits of Using Swagger UI:**

- Interactive documentation for easy API understanding
- Test endpoints directly from the browser
- Standardized API documentation format

### 8. Backend Testing

To run the unit and integration tests, use:

```bash
mvn test
```

This will run the tests and provide you with the results. Ensure that all tests pass before making any changes to the application.

Feel free to add more tests as needed to ensure the reliability and correctness of your application.

## Frontend Setup

### 1. Clone the Repository

```bash
git clone https://github.com/S-Sharvesh/Employee-Management-System.git
cd Employee-Management-System/frontend
```

### 2. Install Dependencies

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the React development server:

```bash
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

To create a production build of your application, run:

```bash
npm run build
```

The build files will be generated in the `build` directory.

### 5. Test the Application

To run tests for the frontend application, use the following command:

```bash
npm test
```

## Detailed Component Instructions

### `Dashboard.js`

Displays various metrics related to employees, such as total employee count, average age, employee growth over time, and distribution by age range. It uses `react-chartjs-2` to render bar charts.

### `EmployeeList.js`

Shows a list of employees with options to search, paginate, and delete entries. Includes a link to add a new employee and edit existing employees.

### `EmployeeForm.js`

Provides a form for adding or editing employee details. Fetches departments to populate the department dropdown. Uses `useParams` to determine if it's in edit mode or add mode.

### `DepartmentList.js`

Displays a list of departments with options to search, paginate, and delete entries. Includes a link to add a new department and edit existing departments.

### `DepartmentForm.js`

Provides a form for adding or editing department details.

### `Navbar.js`

The navigation bar component that includes links to various pages such as Dashboard, Employees, and Departments. Highlights the currently active page.

## Containerization

If you'd like to containerize the project, Docker files are included for both frontend and backend. You can build and run the application in Docker containers using the following commands:

```bash
# Build and run with docker-compose
docker-compose up --build

# Or build images separately
cd backend
docker build -t employee-management-backend .

cd ../frontend
docker build -t employee-management-frontend .

# Run containers
docker run -p 8080:8080 employee-management-backend
docker run -p 3000:3000 employee-management-frontend
```

## Troubleshooting

### Backend Issues

- **`Could not autowire` Errors**: Ensure that all dependencies are correctly defined in the `pom.xml` and that the repository interfaces are located in the correct package structure.

- **`Exception opening socket` for MongoDB**: Verify that MongoDB is running and accessible at `localhost:27017`. Check MongoDB logs for any connection issues.

- **`Build failed`**: Ensure that you are using Java 11 and that all dependencies are correctly installed. Check the `pom.xml` file for any missing dependencies.

- Regardless of the error, perhaps you can try running the following commands to clean and rebuild the project:

  ```bash
  mvn clean install
  ```

  If the issue persists, you can run Maven with more detailed logging to identify the problem:

  ```bash
  mvn -X spring-boot:run
  ```

### Frontend Issues

- **Error: Cannot read properties of undefined (reading 'id')**: Ensure that the `employee` object in `EmployeeForm` is correctly initialized and that the `id` parameter is correctly passed. Check the `getEmployeeById` and `updateEmployee` functions for proper handling of data.

- **Chart Issues**: Ensure `Chart.js` and `react-chartjs-2` are correctly installed and configured. Verify that the chart data passed to components is in the correct format.

- Regardless of the error, perhaps you can try running the following commands to clean and rebuild the project:

  ```bash
  npm install
  ```

  If the issue persists, you can run the React development server with more detailed logging to identify the problem:

  ```bash
  npm start --verbose
  ```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

- Create an issue on GitHub
- Contact the developer through GitHub

---

Thank you for checking out the **Employee Management Full-Stack Application!** Feel free to use this project for learning or development purposes.

Created and customized by **[Sharvesh S](https://github.com/S-Sharvesh)** - 2025

For more projects and updates, visit my GitHub profile: **[@S-Sharvesh](https://github.com/S-Sharvesh)**

---

**[⬆ Back to Top](#employee-management-full-stack-application)**
