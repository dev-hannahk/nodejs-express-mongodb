import express from 'express';
import morgan from 'morgan';

const app = express();

const PORT = 4000;

const logger = (req, res, next) => {
  console.log("I'm in the middle");
  next();
};

const handleHome = (req, res) => {
  return res.send('<h1>Home</h1>');
};

const handleLogin = (req, res) => {
  return res.send('<h1>Login</h1>');
};

// morgan inform us path, method, etc.
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/login', handleLogin);

const handleListen = () =>
  console.log(`Hello, server open here!! http://localhost:${PORT}`);

app.listen(PORT, handleListen);
