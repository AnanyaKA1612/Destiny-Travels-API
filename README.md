
# Destiny Travels API

## Project Description
Destiny Travels API is a RESTful API developed using Node.js, Express.js, MongoDB, and Mongoose. It manages travel destinations through CRUD operations and advanced queries using MVC architecture.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- dotenv

## Project Features
1. Add a destination
2. Add multiple destinations
3. Retrieve all destinations
4. Retrieve destination by ID
5. Retrieve destination by name
6. Update destination by ID
7. Update destination by name
8. Filter destinations
9. Sort destinations
10. Paginate destinations
11. Get destination categories
12. Count destinations
13. Delete destination by ID
14. Delete destination by name
15. Delete multiple destinations

## Installation

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the example value with your own MongoDB connection string. Never upload real credentials.

## Run the Project

```bash
npm run dev
```

## API Base URL

```text
http://localhost:5000/api/destinations
```

## Architecture

- models – Destination schema
- controllers – API logic
- routes – API endpoints
- config – Database connection
- server.js – Main application entry point

## API Testing

All API endpoints were tested using Postman.

## Author
Destiny Travels API Project
