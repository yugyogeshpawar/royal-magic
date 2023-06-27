const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);

//staking request 
const stakingRequest = async (req, res) => {
  try{const user = req.user;
  const query1 = `SELECT * FROM tbl_memberreg WHERE member_user_id='${user}'`;
  console.log("query1", query1);
  let output = await query(query1);
  if (output.length === 0) {
    return res.status(400).send({
      message: "Invalid user id",
    });
  }
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  let sys_date = currentDate
    .toLocaleString("en-IN", options)
    .replace(",", "")
    .replaceAll("/", "-");
  const arr = sys_date.split("-");
  sys_date = `${arr[2]}-${arr[1]}-${arr[0]}`;
  const option = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  };
  const time = currentDate.toLocaleString("en-IN", option);
  sys_date = `${sys_date} ${time}`;
  console.log(sys_date);
  const { wallerAddress, amount, transactionHash } = req.body;
  console.log("amount",amount);
  //showing some error in greater than less than
  if( amount != 15 ) {
    return res.status(400).send({message: `${amount}: should be equal to 15`});
  }
 
  const checkHash = `select checked  from tbl_reinvest where hash_code = '${transactionHash}'`;
  console.log(checkHash);
  const status = await query(checkHash)
  if (checkHash == 0) return res.status(400).send({message: "hash already submited"})

  const InsRec = `INSERT INTO tbl_reinvest(member_user_id,walletAddress,tr_date,invest_type,invest_package,hash_code,gusdAmt)
  VALUES ('${user}','${wallerAddress}','${sys_date}','REGISTRATION',${amount},'${transactionHash}','${amount}')`;
   const insertDeposit = await query(InsRec);
  return res.status(200).send({
    message: "Staking request submitted successfully",
  });
}
catch (err) {
  return res.status(500).send({"internal server error":err.message});
};
}
const stakingSummary = async (req, res) => {
  const user = req.user;
  const query1 = `SELECT * FROM tbl_reinvest WHERE member_user_id='${user}'`;
  try {
    const output = await query(query1);
    return res.status(200).send({
      message: "Staking summary",
      data: output,
    });
  } catch (err) {
    console.log(`error`, err);
    return res.status(400).send({
      message: "Error while fetching data",
    });
  }
};

module.exports = {
  stakingRequest,
  stakingSummary,
};
