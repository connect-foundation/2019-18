#!/usr/bin/env node

import ErrnoException = NodeJS.ErrnoException;

/**
 * Module dependencies.
 */
require('dotenv').config();
const debug = require('debug')('nodejs-express-typescript-sample:server');
const http = require('http');
const app = require('../app');
