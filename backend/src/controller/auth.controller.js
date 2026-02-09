export const DefaultPath = (req, res) => {
    res.status(404).json({
        message: "invalid PATH hehe"
    })
}

export const Signup = (req, res) => {
  res.status(200).json({
    message: "signup",
  });
};

export const Login = (req, res) => {
  res.status(200).json({
    message: "login",
  });
};

export const Logout = (req, res) => {
  res.status(200).json({
    message: "logout",
  });
};
