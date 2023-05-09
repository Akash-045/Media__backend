Partner Content API

The Partner Content API is a TypeScript backend project that provides RESTful API routes for partners to create, view, and delete their content. The API routes are authenticated and authorized to ensure that only authorized partners can perform read and write operations on their content.

Requirements

To run this project, you will need to have Node.js and a database installed on your local machine or server. The project is built with Express.js.

Getting Started

1.Clone the repository.
2.Install the dependencies by running npm/yarn install.
4.Start the server by running npm start.

API Routes

The following API routes are available:

Create Content
POST /api/content
Creates a new content object and persists it to the database. The content object must have the following properties:
interface Content {
  _id: UUID;
  title: string;
  partnerId: UUID;
  description: string;
  originalUrl: string;
  publishDate: string;
  paragraph: string;
  media: array; // media can be image or video
}
The partnerId property is used to verify that the partner has WRITE permission. If the partner only has READ permission, the API will return a 401 Unauthorized error.

Get Content by ID
GET /api/content/:id

Returns a content object by ID. The partnerId property is used to verify that the partner has READ permission. If the partner does not have READ permission, the API will return a 401 Unauthorized error.

Delete Content by ID
DELETE /api/content/:id
Deletes a content object by ID. The 'partnerId' property is used to verify that the partner has WRITE permission. If the partner only has READ permission, the API will return a 401 Unauthorized error.

Authentication and Authorization

Partners must be authenticated and authorized to perform read and write operations on their content. The API key, which is stored in the database, is used for authentication. The 'partnerId' property of the content object is used for authorization.

The 'User' and 'Permission' interfaces are used to represent users and their permissions:
interface User {
  _id: UUID;
  partnerId: UUID;
  key: string;
}

interface Permission {
  _id: UUID;
  partnerId: UUID;
  access: string; // can be enum and should have READ, WRITE or both
}

Validation and Error Handling

The controllers are responsible for validating the data that is sent to the API. If the data is invalid, the API will return a 400 Bad Request error.

If an unexpected error occurs, the API will return a 500 Internal Server Error.

Testing

Unit testing is a good practice to ensure the quality of the code. You can run the tests by running 'npm/yarn test'. The tests are located in the 'src/test' directory.

Conclusion

The Partner Content API provides a self-servicing frontend for partners to manage their content. The API routes are authenticated and authorized to ensure that only authorized partners can perform read and write operations on their content. The project is built with TypeScript, Express.js, and uses any database that you are comfortable with.