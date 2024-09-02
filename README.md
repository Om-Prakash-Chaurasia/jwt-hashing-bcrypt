# JWT Authentication with Express.js

This project is a simple implementation of an Express.js server that uses JWT (JSON Web Token) for user authentication. It provides endpoints for user registration, login, and access to a protected route.

## Features

- **User Registration:** Users can register with a username and password.
- **User Login:** Registered users can log in to receive a JWT token.
- **Protected Route:** Access to certain routes is protected by JWT authentication.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [npm](https://www.npmjs.com/) (comes with Node.js).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    node index.js
    ```

    The server will start on port `3001`.

2. **Register a User:**

    - Endpoint: `POST /register`
    - Request Body:

      ```json
      {
        "username": "your-username",
        "password": "your-password"
      }
      ```

    - Response:

      ```json
      {
        "message": "User registered successfully"
      }
      ```

3. **Login a User:**

    - Endpoint: `POST /login`
    - Request Body:

      ```json
      {
        "username": "your-username",
        "password": "your-password"
      }
      ```

    - Response:

      ```json
      {
        "token": "your-jwt-token"
      }
      ```

4. **Access the Protected Route:**

    - Endpoint: `GET /protected`
    - Headers:

      ```json
      {
        "Authorization": "Bearer your-jwt-token"
      }
      ```

    - Response:

      ```json
      {
        "message": "Welcome your-username, you have accessed to this protected route"
      }
      ```

## Project Structure

- `index.js`: Main server file that contains the implementation of the Express server and the authentication logic.

## Dependencies

- **express**: A fast, unopinionated, minimalist web framework for Node.js.
- **jsonwebtoken**: Library to sign, verify, and decode JSON Web Tokens.
- **bcryptjs**: Library for hashing and comparing passwords securely.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries, please contact [jackadvic07@gmail.com](mailto:jackadvic07@gmail.com).
