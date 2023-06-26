const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);

const getWithdrawRequests = async (req, res) => {
  const sql = `SELECT * FROM tbl_withdraw WHERE isverified = '0'`;
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({
        message: "Successfully fetched withdraw requests",
        data: result,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyWithdrawRequest = async (req, res) => {
  const id = req.body.id;

  //Check is it is already verified
    const sql00 = `SELECT * FROM tbl_withdraw WHERE with_referrance = '${id}'`;
    try {
        const result00 = await query(sql00);
        if(result00[0].isverified == 1 || result00[0].isverified == 2){
            return res.status(500).send({ message: "Already verified OR Already Rejected!!" });
        }
    } catch (error) {
        console.log("Error in fetching withdraw amount");
        return res.status(500).send({ message: error.message });
    }


  let user_id;
  // Get amount regarding the id
  const sql0 = `SELECT * FROM tbl_withdraw WHERE with_referrance = '${id}'`;
  var amount;
  try {
    try {
      const result0 = await query(sql0);
      amount = result0[0].with_amt;
      user_id = result0[0].member_user_id;
    } catch (error) {
      console.log("Error in fetching withdraw amount");
      return res.status(500).json({ message: error.message });
    }
    //check is the wallet amount is more than withdraw amount
    const sql1 = `SELECT * FROM tbl_memberreg WHERE member_user_id = '${user_id}'`;
    try {
      const result1 = await query(sql1);
      if (result1[0].wallet_amount < amount) {
        return res.status(500).send({ message: "Insufficient wallet amount" });
      }

      const sql2 = `UPDATE tbl_withdraw SET isverified = '1' WHERE with_referrance = '${id}'`;
      try {
        const result2 = await query(sql2);
        //update wallet amount
        const sql3 = `UPDATE tbl_memberreg SET wallet_amount = wallet_amount - ${amount} , withdrawal_amt = withdrawal_amt + ${amount} WHERE member_user_id = '${user_id}'`;
        console.log(sql3);
        try {
          const result3 = await query(sql3);
          return res
            .status(200)
            .send({ message: "Successfully verified withdraw request" });
        } catch (error) {
          console.log("Error in updating wallet amount");
          return res.status(500).send({ message: error.message });
        }
      } catch (error) {
        console.log("Error in updating withdraw status");
        return res.status(500).send({ message: error.message });
      }
    } catch (error) {
      console.log("Error in fetching wallet amount");
      return res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.log("Error in fetching wallet amount");
    return res.status(500).send({ message: error.message });
  }
};

const rejectWithdrawRequest = async (req, res) => {
  const { id } = req.body;
  const sql = `UPDATE tbl_withdraw SET isverified = '2' WHERE with_referrance = '${id}'`;
  try {
    const result = await query(sql);
    res.status(200).json({ message: "Successfully rejected withdraw request" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const withdrawSummary = async (req, res) => {
  const sql = `SELECT * FROM tbl_withdraw WHERE isverified = '1'`;
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched withdraw summary", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWithdrawRequests,
  verifyWithdrawRequest,
  rejectWithdrawRequest,
  withdrawSummary,
};
