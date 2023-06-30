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

cron.schedule("*/10 * * * * *", function () {
 console.log("6 cal team ");

  async function main() {
    const RStr ="SELECT * FROM tbl_memberreg WHERE status = 1 and level_team_check = 0";  
  const resR = await query(RStr);
  console.log(resR);
      resR.forEach(async(rowR) => {
      
        const member_user_id = rowR.member_user_id;
        console.log("member_user_id" ,member_user_id);

        const total_level =await getTotalLevel();
        console.log(total_level);
        for (let cnt = 1; cnt <= total_level; cnt++) {
         const test =    `Update tbl_memberreg set level_team_member=level_team_member+1 where member_id =${cnt}`
         const test_ = await query(test);
         console.log(test);
        }
        
        const upL = `UPDATE tbl_memberreg SET level_team_check=1 WHERE member_user_id='${member_user_id}'`;
          await query(upL)

console.log(upL)
         
        });
  }
  main();

 
   
  

 
  async function getTotalLevel() {
    let str = "SELECT count(*) FROM tbl_memberreg";
    let str_ = await query(str);
    console.log(str_[0]);
    let count = str_[0]["count(*)"];
    console.log(count);
    return count;
  }

});

// total user count

  
 