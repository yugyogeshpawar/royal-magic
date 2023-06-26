const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM admin WHERE admin_name = '${username}' AND admin_pass = '${password}'`;
  const query1 = "Select count(*) as cnt from tbl_memberreg";
  const activeQuery =
    "Select count(*) as cnt from tbl_memberreg where status=1 and isblock!=1";
  const inactiveQuery =
    "Select count(*) as cnt from tbl_memberreg where status=0 and isblock!=1";
  const blockedQuery =
    "Select count(*) as cnt from tbl_memberreg where status=0 and isblock=1";
  const totalInvestQuery =
    "Select IFNULL(sum(topup_amount),0) as topup_amount  from tbl_memberreg";
  const PendingWithdraw =
    "Select IFNULL(sum(net_amt),0) as net_amt  from tbl_withdraw  where paid_status=0 ";
  const ConfirmWithdraw =
    "Select IFNULL(sum(net_amt),0) as net_amt  from tbl_withdraw  where paid_status=1 ";
  const WalletAmount =
    "Select IFNULL(sum(wallet_amount),0) as wallet_amount  from tbl_memberreg";
  const currentDate = new Date().toJSON().slice(0, 10);
  const todaystaking = `Select IFNULL(sum(invest_package), 0) as invest_package  from tbl_reinvest where invest_type='REGISTRATION' and tr_date like '%${currentDate}%'`;

  try {
    const result = await query(sql);
    if (result.length > 0) {
      const token = jwt.sign(
        { username: result[0].admin_name },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      const output = await query(query1);
      const output2 = await query(activeQuery);
      const output3 = await query(inactiveQuery);
      const output4 = await query(blockedQuery);
      const output5 = await query(totalInvestQuery);
      const output6 = await query(PendingWithdraw);
      const output7 = await query(ConfirmWithdraw);
      const output8 = await query(WalletAmount);
      const output9 = await query(todaystaking);
      console.log(output2);
      if (output.length === 0) {
        return res.status(400).send({
          status: false,
          message: "Your database is empty",
        });
      } else {
        return res.status(200).send({
          status: true,
          message: "dashboard information",
          user: {
            totalUser: output[0].cnt,
            totalActiveUser: output2[0].cnt,
            totalInactiveUser: output3[0].cnt,
            totalBlockedUser: output4[0].cnt,
            totalInvestment: output5[0].topup_amount,
            pendingWithdraw: output6[0].net_amt,
            confirmWithdraw: output7[0].net_amt,
            walletAmount: output8[0].wallet_amount,
            todaystaking: Number(output9[0].invest_package),
            ...result[0],
          },
          token,
        });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
      error: { error },
    });
  }
};

module.exports = {
  login,
};
