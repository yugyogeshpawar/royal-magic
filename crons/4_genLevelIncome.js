const mysql = require("mysql2");
const { promisify } = require("util");
const moment = require("moment-timezone");
const cron = require("node-cron");
const bcrypt = require("bcrypt");
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
let count = 1;
let query = promisify(connection.query).bind(connection);

cron.schedule("*/60 * * * * *", function () {
const activation_date = moment().format("YYYY-MM-DD HH:mm:ss");
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
  const check = `SELECT * FROM tbl_memberreg WHERE team_member > 0`;
  const result = await query(check);

  result.forEach(async (element) => {
    const memberId = element.member_user_id;
    const memberName = element.member_name;
    const directMember = element.direct_member;
    const walletAddress = element.wallet_address;
    console.log(element.team_member);

    switch (true) {
      case element.team_member == 21 && element.level == 0:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[0].reward,
          plan[0].level,
          plan[0].netIncome,
          plan[0].magicPool,
          plan[0].royalPool,
          plan[0].adminCharge,
          plan[0].reentry
        );
        console.log("level1:", memberId);
        break;

      case element.team_member == 51 && element.level == 1:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[1].reward,
          plan[1].level,
          plan[1].netIncome,
          plan[1].magicPool,
          plan[1].royalPool,
          plan[1].adminCharge,
          plan[1].reentry
        );
        console.log("level2:", memberId);
        break;

      case element.team_member == 130 &&
        element.level == 2 &&
        directMember >= 1:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[2].reward,
          plan[2].level,
          plan[2].netIncome,
          plan[2].magicPool,
          plan[2].royalPool,
          plan[2].adminCharge,
          plan[2].reentry
        );
        console.log("level3:", memberId);
        break;
      case element.team_member == 375 &&
        element.level == 3 &&
        directMember >= 1:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[3].reward,
          plan[3].level,
          plan[3].netIncome,
          plan[3].magicPool,
          plan[3].royalPool,
          plan[3].adminCharge,
          plan[3].reentry
        );
        console.log("level4:", memberId);
        break;
      case element.team_member == 505 &&
        element.level == 4 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[4].reward,
          plan[4].level,
          plan[4].netIncome,
          plan[4].magicPool,
          plan[4].royalPool,
          plan[4].adminCharge,
          plan[4].reentry
        );
        console.log("level5:", memberId);
        break;

      case element.team_member == 900 &&
        element.level == 5 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[5].reward,
          plan[5].level,
          plan[5].netIncome,
          plan[5].magicPool,
          plan[5].royalPool,
          plan[5].adminCharge,
          plan[5].reentry
        );
        console.log("level6:", memberId);
        break;
      case element.team_member == 1800 &&
        element.level == 6 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[6].reward,
          plan[6].level,
          plan[6].netIncome,
          plan[6].magicPool,
          plan[6].royalPool,
          plan[6].adminCharge,
          plan[6].reentry
        );
        console.log("level7:", memberId);
        break;
      case element.team_member == 3500 &&
        element.level == 7 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[7].reward,
          plan[7].level,
          plan[7].netIncome,
          plan[7].magicPool,
          plan[7].royalPool,
          plan[7].adminCharge,
          plan[7].reentry
        );
        console.log("level8:", memberId);
        break;
      case element.team_member == 5200 &&
        element.level == 8 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[8].reward,
          plan[8].level,
          plan[8].netIncome,
          plan[8].magicPool,
          plan[8].royalPool,
          plan[8].adminCharge,
          plan[8].reentry
        );
        console.log("level9:", memberId);
        break;
      case element.team_member == 9700 &&
        element.level == 9 &&
        directMember >= 2:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[9].reward,
          plan[9].level,
          plan[9].netIncome,
          plan[9].magicPool,
          plan[9].royalPool,
          plan[9].adminCharge,
          plan[9].reentry
        );
        console.log("level10:", memberId);
        break;
      case element.team_member == 11000 &&
        element.level == 10 &&
        directMember >= 10:
        await insertLevel(
          memberId,
          memberName,
          activation_date,
          plan[10].reward,
          plan[10].level,
          plan[10].netIncome,
          plan[10].magicPool,
          plan[10].royalPool,
          plan[10].adminCharge,
          plan[10].reentry
        );
        console.log("level11:", memberId);
        break;

      default:
        console.log(`no condition match memberId:${memberId},level:${element.level},teammember:${element.team_member},directMember:${directMember},`);
        break;
    }
  });
}
incomeCal();
async function insertLevel(
  memberId,
  memberName,
  activation_date,
  reward,
  incomeLevel,
  netAmount,
  magicPool,
  royalPool,
  reEntry,
  walletAddress
) {
  const InsRec = `INSERT INTO tbl_reinvest(member_user_id,walletAddress,tr_date,invest_type,invest_package,hash_code,gusdAmt)
  VALUES ('${memberId}','${walletAddress}','${sys_date}','REENTRY',${amount},'${transactionHash}','${amount}')`;
   const insertDeposit = await query(InsRec);
  const insert = `INSERT INTO tbl_member_income_dtails ( member_user_id,member_name, calculate_date,income_amt, income_level,income_type,b_type,net_amt, magic_pool,royal_pool,re_entry)
 
  VALUES ('${memberId}',' ${memberName}', '${activation_date}', ${reward}, ${incomeLevel},'LEVEL BONUS','LEVEL BONUS',${netAmount}, ${magicPool}, ${royalPool},${reEntry})`;
  const res = await query(insert);
  console.log(insert);
  const tblMember = `UPDATE tbl_memberreg SET level=${incomeLevel} where member_user_id = ${memberId} `;
  const res1 = await query(tblMember);
console.log(tblMember);
register(memberId, memberName);
}

const register = async (sponcerId, sponcerName, req, res) => {
    try {
      const regDate = new Date().toISOString().replace("T", " ").replace("Z", "");
      console.log("reg_date", regDate);
  
      let password = "123456";
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
  
      const member_user_id = generateRandomNumber();
      let count = 0; // Assuming count is initialized and incremented somewhere
  
      const memberName = `RoyalMagic${count}`;
      count++;
  
      console.log("member_user_id", member_user_id);
  
      const insertQuery = `INSERT INTO tbl_memberreg (member_user_id, sponcer_id, sponcer_name, member_name, password, registration_date)
                           VALUES ('${member_user_id}', '${sponcerId}', '${sponcerName}', '${memberName}', '${password}', '${regDate}')`;
  
      const insertResult = await query(insertQuery);
  
    } catch (err) {
      console.log("Error in registration", err);
     
    }
  };

function generateRandomNumber() {
  const min = 1000000; // Minimum 7-digit number (inclusive)
  const max = 9999999; // Maximum 7-digit number (inclusive)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
})



