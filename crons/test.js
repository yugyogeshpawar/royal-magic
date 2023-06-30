


const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");
// ...

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "AIFX",
  // host: "localhost",
  // user: "royalmagic",
  // password: "royalmagic@admin123",
  // database: "royalmagic",
});

connection.connect((err) => {
  if (err) {
    return res.status(400).send({ error: "Not found" });
  }
  console.log("Connected to MySQL database!");
});
let query = promisify(connection.query).bind(connection);

cron.schedule("*/15 * * * * *", function () {
 console.log("6 cal team ");

  async function main() {
    const RStr ="SELECT member_user_id FROM tbl_memberreg WHERE  calTeamStatus=0 and status = 1 LIMIT 10";  
  const resR = await query(RStr);
  console.log(resR);
      resR.forEach(async(rowR) => {
        console.log("30 test");
        const member_user_id = rowR.member_user_id;
        console.log("member_user_id" ,member_user_id);

         console.log("35");
          await cal_Team(member_user_id);
        });
        await level_team()
  }
  main();



async function level_team(){
    for (let i = 1; i < await getTotalLevel(); i++) {
    console.log("getTotalLevel()",await getTotalLevel());
      const test = await query(
        `Update tbl_memberreg set level_team_member=level_team_member+1 where member_id = ${i}`
      );
      console.log(test);
  }
  }
})

async function getTotalLevel() {
    let str = "SELECT count(*) FROM tbl_memberreg";
    let str_ = await query(str);
    console.log(str_[0]);
    let count = str_[0]["count(*)"];
    console.log(count);
    return count;
  }
  