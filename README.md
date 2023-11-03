# Blog Website

This project is a simple web application for creating, viewing, and managing blog posts. It's built using Node.js, Express, EJS templates, and MongoDB as the database.

## Project Structure

The project is organized into several parts:

### HTML/EJS Templates

1. **`index.ejs`**: The main landing page of the website. It displays a list of existing blog posts, if any, and allows users to create new blog posts.

2. **`details.ejs`**: This page shows the details of a single blog post. Users can read the title and body of the blog post, and there's also an option to delete the post.

3. **`create.ejs`**: This page provides a form for users to create a new blog post. It includes fields for the title, snippet, and the body of the blog post.

4. **`about.ejs`**: A simple page that provides information about the project.

5. **`404.ejs`**: A custom 404 error page for handling page not found errors.

### Node.js/Express Files

1. **`app.js`**: The main application file that sets up the Express server, defines routes, and connects to the MongoDB database.

2. **`server.js`**: The entry point for starting the server. It's configured to run the Express application.

### Data Model

1. **`Blog.js`**: Defines the data model for blog posts using Mongoose. It includes fields for title, snippet, and body. It also uses timestamps for automatic date tracking.

### Package.json

The project dependencies are listed in the `package.json` file. Key dependencies include Express, EJS, Mongoose for MongoDB, and other utility libraries like Lodash and Morgan for logging.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies using `npm install`.

3. Start the server by running `npm start`. This will start the Express application.

4. Access the website by opening your web browser and navigating to `http://localhost:3000`.

5. You can create, view, and manage blog posts using the website.

## Dependencies

- Express: A web application framework for Node.js.
- EJS: A templating engine for rendering HTML.
- MongoDB and Mongoose: Used for storing and managing blog posts in a database.
- Other utility libraries: Lodash for utility functions and Morgan for logging.

## Disclaimer

This project serves as a simple example of a blog website and may lack some security and advanced features typically found in production websites. It is recommended to use this project for educational purposes and to enhance and extend its functionality for real-world use cases.
