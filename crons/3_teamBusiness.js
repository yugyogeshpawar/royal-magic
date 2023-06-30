const mysql = require("mysql2");
const { promisify } = require("util");

const cron = require("node-cron");
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

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

// Schedule tasks to be run on the server.
cron.schedule("*/25 * * * * *", function () {
  // console.log("running a task every minute");
console.log("19 tam busines scheduled");
  let query = promisify(connection.query).bind(connection);

  async function main() {
    let date = new Date();
    console.log(date);
    let sys_date = date.toISOString().split("T")[0];

    let RStr =
      "SELECT * FROM tbl_reinvest WHERE checked=1 and cal_team=0 ORDER BY record_no LIMIT 0,5";
    console.log(RStr.length);
    const resR = await query(RStr);
    console.log(resR.length);
    resR.forEach(async (rowR) => {
      let member_user_id = rowR.member_user_id;
      let invest_packag = rowR.invest_package;
      console.log("invest_packag", invest_packag);
      let record_no = rowR.record_no;

      let upL = `UPDATE tbl_reinvest SET cal_team=1 WHERE record_no=${record_no}`;
      await query(upL);
      cal_Team(invest_packag, member_user_id);
    });
  }

  main();

  async function cal_Team(topup_amount, member_user_id) {
    let parent_id = get_parrent_member_id();
    let member_id = member_user_id;
    let total_level = 11;
    for (let cnt = 1; cnt <= total_level; cnt++) {
      let mstr = `SELECT sponcer_id FROM tbl_memberreg WHERE member_user_id='${member_id}'`;

      const mresult = await query(mstr);
      console.log(mresult);
      if (mresult.length === 0) {
        console.log("No more parent");
        break;
      }
      // mresult.forEach(async (mrow) => {
      const sponcer_id = mresult[0].sponcer_id;

      let up = `UPDATE tbl_memberreg SET team_business=team_business+${topup_amount} WHERE member_user_id='${sponcer_id}'and status=1`;
      console.log(up);
      await query(up);
      if (sponcer_id == "4789213") {
        cnt = get_total_level() + 20;
        console.log("no sponsor ahead");
        break;
      }
      member_id = sponcer_id;
      // })
    }
  }

  function get_parrent_member_id() {
    const str =
      "SELECT member_user_id FROM tbl_memberreg ORDER BY member_id ASC";
    connection.query(str, (err, res) => {
      if (err) {
        return res.status(400).send({ error: "Not found" });
      }
      return res[0].member_user_id;
    });
  }

  function get_total_level() {
    let str = "SELECT member_user_id FROM tbl_memberreg";
    connection.query(str, (error, res) => {
      if (error) throw error;
      return res.length;
    });
  }
});
