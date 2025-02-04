# Kanban Board Application

## Description

 The Kanban Board Application is a full-stack application created using React, TypeScript, Vite, Node JS, and Sequelize. The Kanban board uses authentication with JSON Web Tokens to provide a secure and scalable method for verifying user identities, so that the user can securely access and manage their work tasks. JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing servers to authenticate requests while enhancing security.

## Table of Contents

- Installation
- Usage
- License
- Contributing
- Tests
- Questions

## Installation

To set up the application, ensure you have Node.js, Vite, and Sequelize installed. Clone the repository and navigate into the project directory. Install dependencies using: npm install.
Configure environment variables for JWT authentication and database connections in a .env file.

## Usage

To start the application, the user runs the command “npm run start:dev”. Once running, the user navigates to the login page to authenticate. Users must enter their credentials, which will be verified using JSON Web Tokens (JWT). For this project, use seed data in user-seeds file for login. Successful authentication redirects users to the Kanban board, where they can manage tasks. Users can create a new ticket, edit an existing ticket, or delete a ticket. The application ensures JWT storage security, session expiration handling, and logout mechanisms for a seamless user experience.

Below is a link to the deployed application on Render.
https://kanban-board-application-rv08.onrender.com

Below are preview images of the deployed application.
![LoginIn page](<client/src/assets/Screenshot 2025-02-04 at 10.48.01 AM.png>)
![Ticket page](<client/src/assets/Screenshot 2025-02-04 at 10.52.24 AM.png>)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

If you wish to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request with your changes. Ensure your code is well-documented, and your changes are tested before submitting.

## Tests

There are no specific tests currently included in this project, but you can add your own testing frameworks or unit tests as necessary.

## Questions

Please contact me with any questions you may have at [snabajja@gmail.com](mailto:snabajja@gmail.com) or visit my GitHub profile at [snabaj](https://github.com/snabaj).

