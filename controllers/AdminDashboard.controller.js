require("dotenv").config();
const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);

const getAdminDashboard = async (req, res) => {
  let query1 = "Select count(*) as cnt from tbl_memberreg";
  let activeQuery =
    "Select count(*) as cnt from tbl_memberreg where status=1 and isblock!=1";
  let inactiveQuery =
    "Select count(*) as cnt from tbl_memberreg where status=0 and isblock!=1";
  let blockedQuery =
    "Select count(*) as cnt from tbl_memberreg where status=0 and isblock=1";
  let totalInvestQuery =
    "Select IFNULL(sum(topup_amount),0) as topup_amount  from tbl_memberreg";
  let PendingWithdraw =
    "Select IFNULL(sum(net_amt),0) as net_amt  from tbl_withdraw  where paid_status=0 ";
  let ConfirmWithdraw =
    "Select IFNULL(sum(net_amt),0) as net_amt  from tbl_withdraw  where paid_status=1 ";
  let WalletAmount =
    "Select IFNULL(sum(wallet_amount),0) as wallet_amount  from tbl_memberreg";
  let currentDate = new Date().toJSON().slice(0, 10);
  let todaystaking = `Select IFNULL(sum(invest_package), 0) as invest_package  from tbl_reinvest where invest_type='REGISTRATION' and tr_date like '%${currentDate}%'`;

  try {
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
        },
      });
    }
  } catch (err) {
    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
      error: { err },
    });
  }
};

module.exports = {
  getAdminDashboard,
};
