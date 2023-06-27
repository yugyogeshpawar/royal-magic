require("dotenv").config();
const axios = require("axios");
const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");
const API_KEY = process.env.API_KEY;
const apiKey = API_KEY;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
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
const query = promisify(connection.query).bind(connection);
cron.schedule("*/20 * * * * *", function () {
  async function fetch() {
    const detail = `select * from tbl_memberreg where team_member =21 limit 10`;
    const data = await query(detail);
    console.log(data);

    res.forEach(async(element) => {
      const detail = { parent: 0, child: [] };
      const root = [detail];

      for (i = 0; i <= root.length; i++) {
        root.detail.parent = element.member_user_id;
        root.detail.child = element.member_user_id;
        console.log(root);
      }
    });
    fetch();
  }
});
