const express = require('express');
const mainRouter = require('./routes/index');

const app = express();

app.use('/', mainRouter);

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

