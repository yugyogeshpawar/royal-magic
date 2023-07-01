require("dotenv").config();
const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");
const { log } = require("util");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const connection = mysql.createConnection({
  //  host: "localhost",
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
    // now we can start cron
  });
} catch (error) {
  console.log("error", error);
}
let query = promisify(connection.query).bind(connection);
cron.schedule("*/20 * * * * *", function () {
async function topupAmount() {
    const check =`select * from tbl_reinvest where checked = 1 and status = '0'` 
    const res = await query(check)
    console.log(res);
   
    res.forEach(async(element) => {
    const memberId=  element.member_user_id ;
    const pack=  element.invest_package;
    const record_no = element.record_no;
    const walletAddress = element.walletAddress
    const up = `update tbl_reinvest set status = '1' where record_no = ${record_no}` ;
    await query(up)
console.log(up)
    const memberBalance = `update tbl_memberreg set status ="1", wallet_address='${walletAddress}',topup_amount =topup_amount + ${pack} where member_user_id = ${memberId}` ;
   
   await query(memberBalance)
 
    });
   await dierctIncome()
}

topupAmount()

async function dierctIncome(){
  const directBalance2 = `select * from tbl_memberreg where status ="1" and topup_amount>0 and checked =0 ` ;
  const res = await query(directBalance2)
   console.log(res.length);
   const sys_date = new Date().toISOString().slice(0, 10);
  
   res.forEach(async(element) => {
    const memberID = element.member_user_id;
    console.log(memberID);
   const sponcer = element.sponcer_id;
   if(sponcer == 4789213) {
    return;
   }

  const memberName = element.member_name;
  const directStatus = `update tbl_memberreg set checked =1 where member_user_id =${memberID}`
  await query(directStatus)
  console.log(directStatus);
   const directIncome = `update tbl_memberreg set direct_income = direct_income+5 ,wallet_amount=wallet_amount+5 where member_user_id =${sponcer} `;
  await query(directIncome)
   console.log(directIncome);
 
  const insert = `INSERT INTO tbl_member_income_dtails ( member_user_id,member_name, calculate_date,income_amt,income_type,b_type,status)
                                               VALUES ('${sponcer}',' ${memberName}', '${sys_date}', "5",'DIRECT BONUS','DIRECT BONUS',1)`;
    const res_ = await query(insert);
    console.log(insert);

  });
}

// async function level_team() {
// const total_level =await getTotalLevel();
// console.log(total_level);
// for (let cnt = 1; cnt <= total_level; cnt++) {
//  const test = `Update tbl_memberreg set level_team_member=level_team_member+1 where member_id =${cnt}`
//  const test_ = await query(test);
//  console.log(test);
// }

// }


async function getTotalLevel() {
  let str = "SELECT count(*) FROM tbl_memberreg";
  let str_ = await query(str);
  console.log(str_[0]);
  let count = str_[0]["count(*)"];
  console.log(count);
  return count;
}


})