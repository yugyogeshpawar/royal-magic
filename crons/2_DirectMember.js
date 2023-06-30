require("dotenv").config();
// const axios = require("axios");
const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");

const moment = require("moment-timezone");
const connection = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "AIFX",
  host: "localhost",
  user: "royalmagic",
  password: "royalmagic@admin123",
  database: "royalmagic",
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
  // console.log("running a task every minute");
  console.log("4 check deposit payment ");
  let query = promisify(connection.query).bind(connection);

  async function main() {
    const activation_date = moment().format("YYYY-MM-DD HH:mm:ss");

const str = "Select * from tbl_memberreg where status=1 and member_status=0 and topup_amount>0 order by member_id";

    console.log("str");
   const res= await query(str)
    // connection.query(str, (err, res) => {
    //   if (err) {
    //     return res.status(400).send({ error: "Not found" });
    //   }
      return res.forEach(async(row) => {
        const member_user_id = row["member_user_id"];
        const sponcer_id = row["sponcer_id"];
        const topUp = row["topup_amount"];
        const Up = `Update tbl_memberreg set direct_member=direct_member+1 ,direct_business=direct_business+${topUp}  where member_user_id='${sponcer_id}' `;
      await query(Up)
      
        // connection.query(Up, (err) => {
        //   if (err) {
        //     return res.status(400).send({ error: "Not found" });
        //   }
        // });

        // const exp_date = moment().add(15, "days").format("YYYY-MM-DD");
        // const payroalExpiry = moment().add(3, "months").format("YYYY-MM-DD");
        const UpM = `Update tbl_memberreg set member_status=1,activation_date='${activation_date}' where member_user_id='${member_user_id}'`;
      await query(UpM)
        // connection.query(UpM, (err) => {
        //   if (err) {
        //     return res.status(400).send({ error: "Not found" });
        //   }
        // });
      });
    
  }

  main();
});
