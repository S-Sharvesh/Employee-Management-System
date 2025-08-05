# MongoDB Setup Instructions

## You have successfully configured the project to use MongoDB Atlas!

### What you need to do:

1. **Update your password in config.properties:**

   - Open: `backend/config.properties`
   - Replace `YOUR_PASSWORD` with your actual MongoDB Atlas password
   - Example: `mongodb+srv://your-username:your-password@your-cluster.mongodb.net/employee_management?retryWrites=true&w=majority`

2. **Your MongoDB Configuration:**

   - Database: `employee_management` (will be created automatically)
   - Collections: `employees`, `departments`, `users` (will be created automatically)
   - No need to install local MongoDB - you're using MongoDB Atlas cloud

3. **Changes Made to Support MongoDB:**
   - ✅ Removed MySQL dependencies
   - ✅ Updated all models to use MongoDB annotations (@Document, @Id, @DBRef)
   - ✅ Changed ID types from Long to String (MongoDB uses String IDs)
   - ✅ Updated all repositories to extend MongoRepository
   - ✅ Updated all service and controller methods
   - ✅ Updated application.properties to use only MongoDB

### Ready to Run:

Your application is now configured for MongoDB Atlas. Just update the password and you can run:

```bash
npm run dev
```

This will start both frontend (http://localhost:3000) and backend (http://localhost:8080).

### MongoDB Collections Structure:

- **employees**: firstName, lastName, email, age, department (reference)
- **departments**: name, employees (array of references)
- **users**: username, password (for authentication)

The application will automatically create these collections when you first add data.
