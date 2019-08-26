const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

//module.exports = app;
app.listen(PORT, () => {
  console.log(`server is listening on PORT` + PORT);
});

module.exports = app;
