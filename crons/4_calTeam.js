const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");
// ...

const connection = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "123456789",
  database: "royal_magic1",
});

connection.connect((err) => {
  if (err) {
    return res.status(400).send({ error: "Not found" });
  }
  console.log("Connected to MySQL database!");
});
let query = promisify(connection.query).bind(connection);

cron.schedule("*/10 * * * * *", function () {
 console.log("6 cal team ");

  async function main() {
    const RStr ="SELECT member_user_id FROM tbl_memberreg WHERE  calTeamStatus=0 and status = 1 LIMIT 10";  
  const resR = await query(RStr);
  console.log(resR);
      resR.forEach(async(rowR) => {
        console.log("30 test");
        const member_user_id = rowR.member_user_id;
        console.log("member_user_id" ,member_user_id);

        const upL = `UPDATE tbl_memberreg SET calTeamStatus=1 WHERE member_user_id='${member_user_id}' and status='1'`;
          await query(upL)
          console.log("35");
          await cal_Team(member_user_id);
        });
  }
  main();

  async function cal_Team(member_user_id) {
    const total_level =await getTotalLevel();
    console.log(total_level);
    let member_id = member_user_id;
    console.log(member_id);
    const parant_id = await get_parrent_member_id();

    for (let cnt = 1; cnt <= total_level; cnt++) {
        const mresult = await query(
            `Select sponcer_id from tbl_memberreg where member_user_id='${member_id}' and status=1`
          );
      console.log("mresult", typeof mresult, mresult, mresult.length);
      if (mresult.length == 0) {
        console.log("kha jayega bhai");
        return;
      }
      console.log(
        "sponcerid:",
        typeof mresult[0].sponcer_id,
        mresult[0].sponcer_id
      );
      // for (const mrow of mrows) {
      const sponcer_id = mresult[0].sponcer_id;

      const test = await query(
        `Update tbl_memberreg set team_member=team_member+1 where member_user_id='${sponcer_id}' and status=1`
      );
     
      if (sponcer_id === parant_id) {
        cnt = total_level + 20;
      }
      member_id = sponcer_id;
      // }
    }
  }

  //parent member id first id 
  async function get_parrent_member_id() {
    const str = "SELECT member_user_id FROM tbl_memberreg ORDER BY member_id ASC";
    const str_ = await query(str);
    return str_[0].member_user_id;
  }
});

// total user count
async function getTotalLevel() {
    let str = "SELECT count(*) FROM tbl_memberreg";
    let str_ = await query(str);
    console.log(str_[0]);
    let count = str_[0]["count(*)"];
    console.log(count);
    return count;
  }
  
 