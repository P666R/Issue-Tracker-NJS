const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

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
    console.error(error.name, error.message);
  }
};

startServer();
