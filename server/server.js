/* eslint-disable no-console */
require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');

const app = require('./app');

// Catching uncaught Exeptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

//Setup DB
let DataBase;
if (process.env.NODE_ENV === 'production') DataBase = process.env.DB;
else DataBase = process.env.DB_DEV;
mongoose
  .connect(DataBase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('Database connection successful!'));

//Start server
const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`EmailService running on port ${process.env.PORT || 5000}`)
);

//Handling unhandled Rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Gracefully shutting server down');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
