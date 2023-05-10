
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