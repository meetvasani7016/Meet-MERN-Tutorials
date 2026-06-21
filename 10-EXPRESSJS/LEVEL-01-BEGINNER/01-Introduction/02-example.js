import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.listen(3000, () => {
  console.log('Express running at http://localhost:3000/');
});