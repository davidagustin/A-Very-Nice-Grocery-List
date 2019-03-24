require('express');
require('path');

express.static(path.join(__dirname, './../client/dist'));
