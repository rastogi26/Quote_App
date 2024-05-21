# Quote App

Welcome to the Quote App, a platform where users can view, publish, and interact with quotes. Users can also create and manage their profiles, and view other users' profiles. This application is built with modern technologies to ensure a seamless and efficient user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
<!-- - [GraphQL Queries and Mutations](#graphql-queries-and-mutations)
- [Contributing](#contributing)
- [License](#license) -->

## Features

- **View Quotes:** Users can browse through a list of quotes.
- **Publish Quotes:** Authenticated users can publish their own quotes.
- **User Profiles:** Users can create and manage their profiles.
- **View Other Profiles:** Users can view profiles of other users.
- **JWT Authentication:** Secure authentication to ensure only logged-in users can interact with the application.
- **Caching:** Apollo Client is used for caching to reduce network calls and improve performance.

## Technologies Used

- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - Apollo Client: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

- **Backend:**
  - GraphQL: A query language for your API.
  <!-- - Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Express.js: A web application framework for Node.js. -->
  - MongoDB: A NoSQL database for storing user data and quotes.

- **Authentication:**
  - JSON Web Tokens (JWT): For secure user authentication and authorization.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/quote-app.git
   cd quote-app
   ```

2. **Install dependencies for both client and server:**
      ```bash
      # For the backend
      npm install

      # For the frontend
      cd ../client
      npm install
     ```

3. **Set up environment variables:**

   Create a .env file in the server directory and add your MongoDB connection string and JWT secret:
      ```bash
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret

     ```

4. **Run the application:**

      ```bash
     # Start the backend server
    nodemon server
    

    # Start the frontend development server
    cd ../client
    npm start
    ```
   The application will be available at http://localhost:3000.

## Usage

- **Viewing Quotes:** Navigate to the homepage to view a list of quotes.
- **Publishing Quotes:** Log in and use the "Publish Quote" feature to add a new quote.
- **User Profiles:** Go to your profile to update your information. View other users' profiles by clicking on their names in the quote listings.

## Authentication

This app uses JWT for authentication. Here is a brief overview of how it works:

- **Login:** Users authenticate by providing their credentials. A JWT token is issued upon successful authentication.
- **Protected Routes:** Certain routes are protected and require a valid JWT token. Unauthorized users will receive an error message.
- **Token Storage:** The JWT token is stored in localStorage for maintaining the session.


