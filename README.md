
# My Creative Catalog

A full-stack application built with Node.js, Express, MongoDB Atlas, and React. Users can register, log in, and perform CRUD operations on items.


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

git clone https://github.com/kriman619-git/my-creative-catalog.git

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

### Authentication

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /auth/register | Register new user |
| POST   | /auth/login    | Login user        |

### Items (CRUD)

| Method | Endpoint   | Description                   |
| ------ | ---------- | ----------------------------- |
| GET    | /items     | Get all items                 |
| POST   | /items     | Create a new item (protected) |
| PATCH  | /items/:id | Update an item (protected)    |
| DELETE | /items/:id | Delete an item (protected)    |



## Example User Credentials

json
{
  "name": "Krishna Manish",
  "email": "kriman@example.com",
  "password": "Purnima2906"
}


## Postman Screenshots

### **Register User**
<img width="1920" height="1080" alt="Screenshot (103)" src="https://github.com/user-attachments/assets/b2097a92-18c4-423d-8994-db273cf11521" />

### **Create Item**

<img width="1920" height="1080" alt="Screenshot (104)" src="https://github.com/user-attachments/assets/0c45a156-9059-44a8-adec-8e53eaa1c48e" />


### **Get All Items**

<img width="1920" height="1080" alt="Screenshot (105)" src="https://github.com/user-attachments/assets/c8480f5f-12c5-4664-93eb-9e0ea3c95c39" />


### **Update Item**

<img width="1920" height="1080" alt="Screenshot (106)" src="https://github.com/user-attachments/assets/f601769d-b192-47c6-9f1d-870060252447" />


### **Delete Item**

<img width="1920" height="1080" alt="Screenshot (107)" src="https://github.com/user-attachments/assets/b3ec094e-25d8-45f8-b82e-21c48f27caf7" />

## License

This project is licensed under the MIT License.
