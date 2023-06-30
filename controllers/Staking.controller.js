const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);

//staking request 
const stakingRequest = async (req, res) => {
  try{
    const user = req.user;
  const query1 = `SELECT * FROM tbl_memberreg WHERE member_user_id='${user}'`;
  console.log("query1", query1);
  let output = await query(query1);
  if (output.length === 0) {
    return res.status(400).send({
      message: "Invalid user id",
    });
  }

  const query2 = `SELECT * FROM tbl_reinvest WHERE member_user_id='${user}'`;
  console.log("query1", query2);
  let output_ = await query(query2);
  if(output_.length >= 1) {
    return res.status(400).send({
      message: "ID ALREADY ACTIVATED",
    });
  }
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
const currentTime = getCurrentDateTime()
console.log(currentTime )
  const InsRec = `INSERT INTO tbl_reinvest(member_user_id,walletAddress,tr_date,invest_type,invest_package,hash_code,gusdAmt,checked)
  VALUES ('${user}','${wallerAddress}','${currentTime}','REGISTRATION',${amount},'${transactionHash}','${amount}',1)`;
   const insertDeposit = await query(InsRec);

   // const InsRec = `INSERT INTO tbl_reinvest(member_user_id,walletAddress,tr_date,invest_type,invest_package,hash_code,gusdAmt)
  // VALUES ('${user}','${wallerAddress}','${currentTime}','REGISTRATION',${amount},'${transactionHash}','${amount}')`;
  // const insertDeposit = await query(InsRec);
 
  return res.status(200).send({
    message: "Staking request submitted successfully",
  });
}
catch (err) {
  return res.status(500).send({"internal server error":err.message});
};
}
const stakingSummary = async (req, res) => {
  try {
  const user = req.user;
  const query1 = `SELECT * FROM tbl_reinvest WHERE member_user_id='${user}'`;
  
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

