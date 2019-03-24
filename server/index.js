const express = require('express');
const path = require('path');

const port = Number(process.env.PORT || 5000);

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, './../client/dist')));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
