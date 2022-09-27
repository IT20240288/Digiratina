const User = require("../models/user");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await User.findOne({
      $and: [{ username }, { password }]
    });
    console.log("user", req.body);

    if (result) {
      res.send({
        message: "success",
        data: {
          userName: result.username,
          password: result.password
        }
      });
    } else {
      res.status(401).send({ message: "Check username or password" });
    }
  } catch (err) {
    console.log("login requsee eror ", err);
    res.status(500).send({ message: "failed", data: err });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    console.log("user", user);
    const data = await user.save();
    if (data) {
      console.log("success");
    }
  } catch (err) {
    console.log("login requsee eror ", err);
    res.status(500).send({ message: "failed", data: err });
  }
};
