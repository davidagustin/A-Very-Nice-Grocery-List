const express = require('express');
const path = require('path');

express.static(path.join(__dirname, './../client/dist'));
