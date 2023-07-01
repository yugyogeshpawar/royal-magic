const mysql = require("mysql2");
const { promisify } = require("util");
const moment = require("moment-timezone");
const cron = require("node-cron");
const bcrypt = require("bcrypt");
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
  if (err) {
    return res.status(400).send({ error: "Not found" });
  }
  console.log("Connected to MySQL database!");
});
// let count = 1;
let query = promisify(connection.query).bind(connection);

cron.schedule("*/10 * * * * *", function () {
// const activation_date = moment().format("YYYY-MM-DD HH:mm:ss");
const plan = [
  {
    level: 1,
    reward: 5,
    magicPool: 1,
    royalPool: 0.5,
    adminCharge: 0.5,
    netIncome: 3,
    reentry:0
  },
{
    level: 2,
    reward: 10,
    magicPool: 2,
    royalPool: 1,
    adminCharge: 1,
    netIncome: 6,
    reentry:0
  },
  {
    level: 3,
    reward: 21,
    magicPool: 2,
    royalPool: 5,
    adminCharge: 3,
    netIncome: 11,
    reentry:0
  },
  {
    level: 4,
    reward: 34,
    magicPool: 1,
    royalPool: 2,
    adminCharge: 3,
    netIncome: 13,
    reentry:15
  },
  {
    level: 5,
    reward: 72,
    magicPool: 8,
    royalPool: 9,
    adminCharge: 5,
    netIncome: 20,
    reentry:30
  },
  {
    level: 6,
    reward: 114,
    magicPool: 5,
    royalPool: 5,
    adminCharge: 12,
    netIncome: 62,
    reentry:30
  },
  {
    level: 7,
    reward: 182,
    magicPool: 18,
    royalPool: 18,
    adminCharge: 15,
    netIncome: 86,
    reentry:45
  },
  {
    level: 8,
    reward: 311,
    magicPool: 16,
    royalPool: 16,
    adminCharge: 33,
    netIncome: 186,
    reentry:60
  },
  {
    level: 9,
    reward: 411,
    magicPool: 33,
    royalPool: 33,
    adminCharge: 42,
    netIncome: 243,
    reentry:60
  },
  {
    level: 10,
    reward: 566,
    magicPool: 33,
    royalPool: 33,
    adminCharge: 57,
    netIncome: 323,
    reentry:120
  },
  {
    level: 11,
    reward: 833,
    magicPool: 44,
    royalPool: 44,
    adminCharge: 94,
    netIncome: 501,
    reentry:150
  },
];
async function incomeCal() {
  const total = `select * from tbl_memberreg ` ;
const test = await query(total)
console.log("test", test );
console.log(`test member id, ${test} `);

test.forEach(async(element) => {
    let member_id = element.member_id;

    let team = await getTotalLevel() - member_id;
console.log(member_id);
    const memberId = element.member_user_id;
    const memberName = element.member_name;
    const directMember = element.direct_member;
    const walletAddress = element.wallet_address;
    const status = element.status;
    console.log("team",team);

    switch (true) {
      case team >= 21 && element.level == 0 :
        await insertLevel(
          memberId,
          memberName,
          plan[0].reward,
          plan[0].level,
          plan[0].netIncome,
          plan[0].magicPool,
          plan[0].royalPool,
       
          plan[0].reentry,
          status
        );
        console.log("level1:", memberId);
        break;

      case team >= 51 && element.level == 1:
        await insertLevel(
          memberId,
          memberName,
       
          plan[1].reward,
          plan[1].level,
          plan[1].netIncome,
          plan[1].magicPool,
          plan[1].royalPool,
       
          plan[1].reentry,
          status
        );
        console.log("level2:", memberId);
        break;

      case team >= 130 &&
        element.level == 2 &&
        directMember >= 1:
        await insertLevel(
          memberId,
          memberName,
  
          plan[2].reward,
          plan[2].level,
          plan[2].netIncome,
          plan[2].magicPool,
          plan[2].royalPool,
        
          plan[2].reentry,
          status
        );
        console.log("level3:", memberId);
        break;
      case team >= 375 &&
        element.level == 3 &&
        directMember >= 1:
        await insertLevel(
          memberId,
          memberName,
     
          plan[3].reward,
          plan[3].level,
          plan[3].netIncome,
          plan[3].magicPool,
          plan[3].royalPool,
        
          plan[3].reentry,
          status
        );
        console.log("level4:", memberId);
        break;
      case team >= 505 &&
        element.level == 4 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
        
          plan[4].reward,
          plan[4].level,
          plan[4].netIncome,
          plan[4].magicPool,
          plan[4].royalPool,
       
          plan[4].reentry,
          status
        );
        console.log("level5:", memberId);
        break;

      case team >= 900 &&
        element.level == 5 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
  
          plan[5].reward,
          plan[5].level,
          plan[5].netIncome,
          plan[5].magicPool,
          plan[5].royalPool,
        
          plan[5].reentry,
          status
        );
        console.log("level6:", memberId);
        break;
      case team >= 1800 &&
        element.level == 6 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          plan[6].reward,
          plan[6].level,
          plan[6].netIncome,
          plan[6].magicPool,
          plan[6].royalPool,
       
          plan[6].reentry,
          status
        );
        console.log("level7:", memberId);
        break;
      case team >= 3500 &&
        element.level == 7 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
         
          plan[7].reward,
          plan[7].level,
          plan[7].netIncome,
          plan[7].magicPool,
          plan[7].royalPool,
       
          plan[7].reentry,
          status
        );
        console.log("level8:", memberId);
        break;
      case team >= 5200 &&
        element.level == 8 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
        
          plan[8].reward,
          plan[8].level,
          plan[8].netIncome,
          plan[8].magicPool,
          plan[8].royalPool,
         
          plan[8].reentry,
          status
        );
        console.log("level9:", memberId);
        break;
      case team >= 9700 &&
        element.level == 9 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
         
          plan[9].reward,
          plan[9].level,
          plan[9].netIncome,
          plan[9].magicPool,
          plan[9].royalPool,
        
          plan[9].reentry,status
        );
        console.log("level10:", memberId);
        break;
      case team >= 11000 &&
        element.level == 10 &&
        directMember >= 10:
        await insertLevel(
          memberId,
          memberName,
        
          plan[10].reward,
          plan[10].level,
          plan[10].netIncome,
          plan[10].magicPool,
          plan[10].royalPool,
         
          plan[10].reentry,
          status
        );
        console.log("level11:", memberId);
        break;

      default:
        console.log(`no condition match memberId:${memberId},level:${element.level},teammember:${team},directMember:${directMember},`);
        break;
    }
  });
  
}

incomeCal();
})
async function insertLevel(
  memberId,
  memberName,
  reward,
  incomeLevel,
  netAmount,
  magicPool,
  royalPool,
  reEntry,
  status,
  walletAddress,
  sys_date,
) {
   sys_date = getCurrentDateTime()
   console.log("rentry: " + reEntry);
  if( reEntry > 0){
  const InsRec = `INSERT INTO tbl_reinvest(member_user_id,tr_date,invest_type,invest_package,gusdAmt)
                                     VALUES ('${memberId}','${sys_date}','REENTRY',15,15)`;
   const insertDeposit = await query(InsRec);
  
  }

  sys_date = getCurrentDateTime()
  if(status ===1){
  const insert = `INSERT INTO tbl_member_income_dtails ( member_user_id,member_name, calculate_date,income_amt, income_level,income_type,b_type,net_amt, magic_pool,royal_pool,re_entry)
                                                VALUES ('${memberId}',' ${memberName}','${getCurrentDateTime()}', ${reward}, ${incomeLevel},'LEVEL BONUS','LEVEL BONUS',${netAmount}, ${magicPool}, ${royalPool},${reEntry})`;
  const res = await query(insert);
  console.log(insert);

  const tblMember = `UPDATE tbl_memberreg SET level='${incomeLevel}' where member_user_id = '${memberId}' `;
  const res1 = await query(tblMember);
console.log(tblMember);
  }

}


function getCurrentDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

async function getTotalLevel() {
  let str = "SELECT count(*) FROM tbl_memberreg";
  let str_ = await query(str);
  console.log(str_[0]);
  let count = str_[0]["count(*)"];
  console.log("count",count);
  return count;
}