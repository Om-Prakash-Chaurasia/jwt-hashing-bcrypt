const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 3001;

const JWT_SECRET = "secretKey";

app.use(express.json());

const users = [];

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign(
    { username: user.username },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
    (err, token) => {
      res.json({ token });
    }
  );
});

app.get("/protected", (req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({
      message: `Welcome ${decoded.username}, you have accessed to this protected route`,
    });
  } catch (err) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running at port ${PORT}`);
});
