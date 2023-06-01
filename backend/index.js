const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const bodyParser = require("body-parser");
const User = require("./model/user.model");

const PORT = 3003;
// Define the GraphQL schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String, password: String!): User
    deleteUser(id: ID!): User
  }
`);

// Define the root resolver
const root = {
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw error;
    }
  },
  getUserById: async ({ id }) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  },
  createUser: async ({ name, email, password }) => {
    const token = jwt.sign({ foo: "bar" }, "privateKey");
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      token: token,
    });
    const user = await newUser.save();
    return user;
  },
  updateUser: async ({ id, name, email, password }) => {
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, password },
        { new: true }
      );
      return user;
    } catch (error) {
      throw error;
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (error) {
      console.error("Failed to delete user:", error);
      throw error;
    }
  },
};

const uri =
  "mongodb+srv://sharad:RmUBeY4bqmIpnPih@cluster0.kax3a2r.mongodb.net/testdb";

// Create the express app
const app = express();
app.use(cors());

// Add the GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });
