
# My Creative Catalog
A full-stack application built with Node.js, Express, MongoDB Atlas, and React. Users can create, read, update, and delete items with authentication.

## Features
- User authentication with JWT
- CRUD operations for items
- MongoDB Atlas as the database
- RESTful API routes
- React frontend with Axios for API requests
- Protected routes for secure actions

## Backend
- Node.js and Express for the server
- MongoDB Atlas for data storage
- Mongoose for data modeling
- dotenv for environment variables
- JWT for authentication

## Frontend
- React for UI
- React Router for routing
- Axios for API calls

## Getting Started
1. Clone the repository:
```bash
git clone https://github.com/kriman619-git/my-creative-catalog.git
````

2. Install backend dependencies:

cd backend
npm install

3. Create a `.env` file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

4. Start backend:

npm run dev

5. Install frontend dependencies:

cd ../frontend
npm install
npm start

## API Routes

* POST /auth/register` - Register new user
* POST /auth/login` - Login user
* GET /items` - Get all items
* POST /items` - Create item (protected)
* PATCH /items/:id` - Update item (protected)
* DELETE /items/:id` - Delete item (protected)

## License

This project is licensed under the MIT License.