# MeetX

**MeetX** is a collaborative meeting scheduling platform built with Node.js, Express, and MongoDB. It enables users to create, manage, and join meetings seamlessly, offering features like authentication, real-time updates, and secure token-based sessions.

---

## 🚀 Features

* **User Authentication**: Secure sign-up and login using JWT.
* **Meeting Management**: Create, update, and delete meetings with ease.
* **Real-time Updates**: Receive live notifications for meeting changes.
* **RESTful API**: Clean and well-structured API endpoints.
* **MongoDB Integration**: Efficient data storage and retrieval.
* **Environment Configuration**: Manage sensitive data using `.env` files.

---

## 💠 Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ODM)
* **Authentication**: JSON Web Tokens (JWT)
* **Environment Variables**: dotenv

---

## 📁 Project Structure

```
MeetX/
├── config/             # Configuration files (e.g., database connection)
├── controllers/        # Route handler functions
├── middlewares/        # Custom middleware (e.g., authentication)
├── models/             # Mongoose schemas and models
├── routes/             # API route definitions
├── .gitignore          # Files and directories to ignore in Git
├── .env                # Environment variables (not committed)
├── app.js              # Express app setup
├── server.js           # Entry point of the application
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/viz-83/MeetX.git
   cd MeetX
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   *Note*: Ensure that `.env` is added to `.gitignore` to prevent sensitive information from being committed.

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

---

## 📬 API Endpoints

### Authentication

* **POST** `/api/auth/register` – Register a new user
* **POST** `/api/auth/login` – Login and receive a JWT

### Meetings

* **GET** `/api/meetings` – Retrieve all meetings
* **POST** `/api/meetings` – Create a new meeting
* **GET** `/api/meetings/:id` – Get a specific meeting
* **PUT** `/api/meetings/:id` – Update a meeting
* **DELETE** `/api/meetings/:id` – Delete a meeting

*Note*: Protected routes require a valid JWT in the `Authorization` header.

---

## 🧪 Testing

To run tests (if implemented):

```bash
npm test
```

---

## 📌 Best Practices

* **Security**: Always keep your `.env` file secure and avoid committing it to version control.
* **Code Quality**: Follow consistent coding standards and use linters.
* **Documentation**: Keep API documentation up-to-date for ease of use.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Contact

For questions or feedback, please open an issue or contact [viz-83](https://github.com/viz-83).
