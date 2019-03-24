const express = require('express');
const path = require('path');

const port = Number(process.env.PORT || 4000);

const app = express();

express.static(path.join(__dirname, './../client/dist'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
