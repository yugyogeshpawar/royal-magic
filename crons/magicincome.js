require("dotenv").config();
// const axios = require("axios");
const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");

const moment = require("moment-timezone");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "AIFX",
});

try {
  connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
} catch (error) {
  console.log("error", error);
}

// Schedule tasks to be run on the server.
cron.schedule("*/10 * * * * *", function () {

const chckMember = `select * from tbl_member`


})