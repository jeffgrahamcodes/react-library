# Books App

A simple React application that displays a collection of books, allows users to view detailed information, search through the collection, and access a secret section through a private route.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

The **Books App** is built with React and demonstrates how to use the Context API and React Router for state management and navigation. The application retrieves book data from a local JSON file and provides:

- A public view of books with search functionality.
- A detailed view for individual books.
- A protected (private) route for accessing secret content.
- A custom 404 Not Found page for undefined routes.

## Features

- **Book Listing:** View all books and filter them using a search query.
- **Book Details:** Click on a book to see its detailed information such as title, author, and description.
- **Private Route:** Access a secret section containing exclusive books through a protected route.
- **404 Page:** A custom Not Found page is shown for any undefined route.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jeffgrahamcodes/react-library.git
   cd react-library
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **View Books:** Navigate to `/books` to see the complete list of books.
- **Search Books:** Use the query parameter (e.g., `/books?search=1984`) to filter books by title.
- **Book Details:** Click on any book to view its detailed information at `/book/:bookID`.
- **Secret Books:** Access the secret section at `/secret-books` (protected via a private route).
- **404 Page:** Any undefined route will display the custom 404 Not Found message.

## File Structure

    ├── src
    │   ├── components
    │   │   ├── Book.js         # Component for displaying detailed book information
    │   │   ├── Books.js        # Component for listing books with search functionality
    │   │   ├── NotFound.js     # Component for displaying a 404 Not Found message
    │   │   └── SecretBooks.js  # Component for displaying secret books (protected)
    │   ├── context
    │   │   └── BooksContext.js # Provides book data from books.json using React Context
    │   ├── routes
    │   │   └── PrivateRoute.js # Component for protecting private routes
    │   ├── books.json          # Local JSON file containing book data
    │   └── App.js              # Main application component that includes routing configuration

## Technologies Used

- **React:** For building the user interface.
- **React Router:** For managing client-side routing.
- **Context API:** For state management across the application.
- **JavaScript (ES6+):** Modern JavaScript for improved functionality and code clarity.

## License

This project is licensed under the MIT License.
