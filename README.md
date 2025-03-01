# Kanban Board Application

[![Vite](https://img.shields.io/badge/Vite-4.x-blue.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853d?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white)](https://sequelize.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JWT Authentication](https://img.shields.io/badge/JWT-Authentication-orange)](https://jwt.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A full-stack application built with React, TypeScript, Vite, Node.js, PostgreSQL, and Sequelize. The application implements user authentication and authorization using JSON Web Tokens (JWT) to provide a secure and scalable method for user verification.

## Table of Contents

- [Kanban Board Application](#kanban-board-application)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [Key Features:](#key-features)
  - [Installation](#installation)
    - [Prerequisites:](#prerequisites)
    - [Steps:](#steps)
  - [Usage](#usage)
  - [Preview images of the deployed application.](#preview-images-of-the-deployed-application)
    - [Login Page](#login-page)
    - [Create New Ticket](#create-new-ticket)
    - [Ticket Management](#ticket-management)
    - [🚀 **Try the live Kanban Board application on Render**](#-try-the-live-kanban-board-application-on-render)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

The **Kanban Board Application** allows users to securely sign up, log in, and manage their work tasks efficiently. It integrates authentication with **JWT** to protect user sessions and securely store credentials in a PostgreSQL database.

### Key Features:

- **User Authentication:** Users can sign up with a username and password, which are stored in the database and authenticated using JWT.
- **Secure Login:** Users log in with credentials, and upon successful authentication, they are redirected to the Kanban board.
- **Task Management:** Users can create, edit, and delete task tickets for better workflow organization.
- **Persistent Sessions:** JWT ensures secure session management with automatic expiration handling.
- **Logout Mechanism:** Users can securely log out, invalidating their session.

## Installation

### Prerequisites:

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)**
- **[Vite](https://vitejs.dev/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Sequelize](https://sequelize.org/)**
- **[VS Code](https://code.visualstudio.com/)**

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/snabaj/kanban-board-app.git
   cd kanban-board-application

   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Configure environment variables: Create a .env file in the root directory and set up:
   ```
   DATABASE_URL=your_postgres_connection_url
   JWT_SECRET=your_jwt_secret_key
   ```
4. Run database migrations:
   ```
   npx sequelize-cli db:migrate
   ```

## Usage

1. Start the application:
   ```
   npm run start:dev
   ```
2. Navigate to the login page and sign in with your credentials.
3. Manage your Kanban board:
   - Add new tasks.
   - Edit existing tasks.
   - Delete tasks when completed.
4. Secure authentication:
   - User sessions are managed using JWT tokens.
   - JWTs are stored securely, and session expiration is handled efficiently.
   - Users can log out, ensuring their session is invalidated.

## Preview images of the deployed application.

### Login Page

![LoginIn page](<client/src/assets/Screenshot 2025-02-04 at 10.48.01 AM.png>)

### Create New Ticket

![New Ticket page](<client/src/assets/Screenshot 2025-02-15 at 5.16.19 PM.png>)

### Ticket Management

![Ticket page](<client/src/assets/Screenshot 2025-02-04 at 10.52.24 AM.png>)

### 🚀 **[Try the live Kanban Board application on Render](https://kanban-board-application-rv08.onrender.com)**

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

Contributions are welcome! If you’d like to improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit:
   ```
   git commit -m "Add feature: description"
   ```
4. Push the branch:
   ```
   git push origin feature/your-feature
   ```
5. Open a pull request.

Please ensure your code is well-documented and tested before submitting.

## Tests

There are no specific tests currently included in this project, but you can add your own testing frameworks or unit tests as necessary.

## Questions

Please contact me with any questions you may have at [snabajja@gmail.com](mailto:snabajja@gmail.com) or visit my GitHub profile at [snabaj](https://github.com/snabaj).
