// const fs = require('fs');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const Tour = require('./../../models/tourModel');

// dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log('DB connection successful'))
//   .catch(err => console.log(`DB not connected ${err.message}`));

//Read JSON file
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
// );

//Import DATA into db
// const importData = async () => {
//   try {
//     await Tour.create(tours);
//     console.log('Data is successfully loaded');
//   } catch (err) {
//     console.log(err);
//   }
//   process.exit();
// };

//Delete all data from DB
// const deleteData = async () => {
//   try {
//     await Tour.deleteMany();
//     console.log('Data deleted');
//   } catch (err) {
//     console.log(err);
//   }
//   process.exit();
// };

// if (process.argv[2] === '--import') importData();
// else if (process.argv[2] === '--delete') deleteData();

// console.log(process.argv);
