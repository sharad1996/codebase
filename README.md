# codebase
**To run frontend you need to follow some steps:**
1) First install all dependencies : **npm install**
2) After that run server **npm start**

**To run backend you've to follow these steps**
1) npm install

If you want to run only node server so run this command **npm start**, It will start the  node server in port **8080**.
If you want to run **graphql** Server so you need to run this command **npm run start:graphql**, It'll start server on port **8081**

=========================================================================================================================================

**Part 1: NodeJS**
1. Create a NodeJS server that listens on port 3000 and responds to the route "/hello" with the message "Hello World!".<br />
**Solution:** go to http://localhost:8080/hello, you'll see the output for that.
2. Create a function in NodeJS that takes in an array of integers and returns the sum of all even numbers in the array.<br />
**Solution:** For this i've made a new post type request that takes an array of number and returns a sum of event numbers i.e. <br />
URL: **/get-sum-of-event-numbers**<br />
**parameter**: numbers //it should be array like [1,2,3,4]<br />

3. Create a function in NodeJS which runs automatically every 5 seconds and puts a message
(“”QUERY RUNNING) in console.<br />
**solution:** For this you've to open the console where node application is running so there you can see the logs.<br />

**Part 2: MongoDB**
1. Create a MongoDB database called "testdb" with a collection called "users".
2. Add a new user to the "users" collection with the following information:
• Name: John Doe
• Email: john.doe@example.com
• Password: password123
• Token (USE JWT for tokens)
3. Write a MongoDB query that retrieves all users with the email domain<br />
**Solution**
 -> For this you've to see into code where i've created model for it & used it according to requirement.
 
**Part 3: ReactJS**
1. Create a React component that displays a list of user names and email addresses. The
component should receive an array of user objects as a prop.
2. Create a ref inside each of above component and show in console on click of component
element.
3. Create a Multi-step (2 steps) form in React that allows users to add a new user to the list.
Information should be captured in two steps and user should be able to go back and forth. The form should have
fields for name, email, and password.<br />
**Solution**
For this run the front end code see the results on your browser.

**Part 4: GraphQL**
1. Create a GraphQL schema that defines the following types:
• User: id, name, email, password
• Query: getUsers, getUserById
• Mutation: createUser, updateUser, deleteUser
2. Implement the resolvers for the Query and Mutation types.
3. Write a GraphQL query that retrieves all users from the database.<br />

**Solution**
 -> For this you can visit the  http://localhost:8081/graphql, you can see all queries and mutations inside docs.
