const mysql = require("mysql2");
const { promisify } = require("util");
const moment = require("moment-timezone");
const cron = require("node-cron");
const connection = mysql.createConnection({
  host: "localhost",
  user: "royalmagic",
  password: "royalmagic@admin123",
  database: "royalmagic",
});

connection.connect((err) => {
  if (err) {
    return res.status(400).send({ error: "Not found" });
  }
  console.log("Connected to MySQL database!");
});
let query = promisify(connection.query).bind(connection);
cron.schedule("*/120 * * * * *", function () {
async function calLevelIncome() {
  const checkStatus = `SELECT * FROM tbl_member_income_dtails where status='0' and income_type = 'LEVEL BONUS' ORDER BY income_id DESC ;`;
  const res = await query(checkStatus);
  console.log(res, checkStatus);
  res.forEach(async (element) => {
    const memberID = element.member_user_id;
    const recordNo = element.income_id;
    const magicPool = element.magic_pool;
    const royalPool = element.royal_pool;
    
    const current = element.net_amt;
    console.log(memberID, recordNo, magicPool, royalPool, current);
    await updateStatus(memberID, recordNo, magicPool, royalPool, current);
   
  });
}

calLevelIncome();

async function updateStatus(
  memberUserId,
  recordNo,
  magicPool,
  royalPool,
  netIncome
) {
  const upStatus = `UPDATE tbl_member_income_dtails SET status=1 where income_id='${recordNo}'`;
  await query(upStatus);
console.log(upStatus);
  const upMem = `UPDATE tbl_memberreg set magic_pool=magic_pool+${magicPool} ,royal_pool=royal_pool+${royalPool}, net_income=net_income+${netIncome},wallet_amount =wallet_amount+${netIncome} where member_user_id = ${memberUserId}`;
  await query(upMem);
  console.log(upMem);
}

})