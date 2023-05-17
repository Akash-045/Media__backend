# Partner Content API

The Partner Content API is a TypeScript backend project that provides RESTful API routes for partners to create, view, and delete their content. The API routes are authenticated and authorized to ensure that only authorized partners can perform read and write operations on their content.

### Run the project

1. Step 1: Clone the repository
   Make sure to have Docker running in your system (laptop)
2. Step 2: `docker build . -t name-of-project`
3. Step 3: `docker run -p 8001:8000 -d name-of-project`
   (make sure no project is running on port 8001)

4. Step 2: `yarn ` (to install the dependencies )
5. Step 3: `yarn start` (to start the server )
6. Step 4: `yarn test` (to run test)

### API Routes

1.POST:http://localhost:8000/contents/create/:partnerId

2.GET:http://localhost:8000/contents/view/:contentId

3.DELETE:http://localhost:8000/contents/delete/:contentId

4.POST:http://localhost:8000/users/create

5.POST:http://localhost:8000/users/login/:partnerId

### Tech stack here

1.Express.js

2.Mongodb

3.Node.js

4.TypeScript

Conclusion

The Partner Content API provides a self-servicing frontend for partners to manage their content. The API routes are authenticated and authorized to ensure that only authorized partners can perform read and write operations on their content. The project is built with TypeScript, Express.js, and uses any database that you are comfortable with.