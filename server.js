const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 💥 Shutting down...', err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB connection successful');

    server.listen(port, () => console.log(`App running on port ${port}...`));
  } catch (error) {
    console.log(error.name, error.message);
  }
};

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection 💥 shutting down...', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

startServer();
