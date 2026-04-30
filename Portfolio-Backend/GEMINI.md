# Portfolio Backend

## Project Overview
This is a Node.js backend for a portfolio application. It provides an API for managing user registration, login, and project data.

### Key Technologies
- **Express**: Web framework for building the API.
- **Mongoose**: ODM for MongoDB interaction.
- **Bcrypt**: Library for password hashing.
- **JSON Web Token (JWT)**: Used for secure user authentication.
- **CORS**: Middleware to allow cross-origin requests from the frontend.
- **Nodemon**: Utility for automatically restarting the server during development.

### Architecture
The project follows an MVC pattern:
- **`index.js`**: Application entry point, middleware configuration, and route registration.
- **`controllers/`**: Logic for handling API requests (`userController.js`, `projectController.js`).
- **`models/`**: Mongoose schemas for data models (`User`, `Project`).
- **`routes/`**: API route definitions (`userRouter.js`, `projectRouter.js`).
- **`middleware/`**: Custom middleware, including JWT verification (`authMiddleware.js`).

## Building and Running

### Prerequisites
- Node.js installed.
- MongoDB database (local or Atlas).

### Environment Configuration
Create a `.env` file in the `Portfolio-Backend` directory:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
PORT=5000
```

### Commands
- **Install dependencies**: `npm install`
- **Start development server**: `npm start`
- **Default Port**: 5000 (configurable via `.env`).

## API Endpoints

### User Routes (`/api/users`)
- `POST /`: Register a new user.
- `POST /login`: Login and receive a JWT.

### Project Routes (`/api/projects`)
- `GET /`: Get all projects (Public).
- `POST /`: Add a new project (Protected - Requires JWT).
- `PUT /`: Update an existing project (Protected - Requires JWT).
- `DELETE /`: Delete a project (Protected - Requires JWT).

## Development Conventions

### Authentication
- Protected routes require an `Authorization` header in the format: `Bearer <token>`.

### Code Style
- Uses **ES Modules** (`import`/`export`).
- Controllers handle business logic and interact with Mongoose models.
- JWTs expire in 1 hour by default.
