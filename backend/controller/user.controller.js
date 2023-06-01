const jwt = require("jsonwebtoken");

const User = require("../model/user.model");

exports.addUser = (req, res, next) => {
  const { user } = req.body;
  const token = jwt.sign({ foo: "bar" }, "privateKey");
  const defaultUser = {
    name: "Sharad",
    email: "sharad1111@example.com",
    password: "password",
    token: token,
  };

  const insertUser = user || defaultUser;

  User.find({ email: user?.email })
    .then((exitsUser) => {
      if (exitsUser.length > 0) {
        const error = new Error(
          "User is already exits with this email address, please try with others email address"
        );
        error.statusCode = 403;
        throw error;
      }

      const newUser = new User(insertUser);
      return newUser.save();
    })
    .then((result) => {
      res.status(201).json({
        success: true,
        data: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
