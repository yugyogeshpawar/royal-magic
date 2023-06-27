require("dotenv").config();
const axios = require("axios");
const mysql = require("mysql2");
const { promisify } = require("util");
const cron = require("node-cron");
const API_KEY = process.env.API_KEY;
const apiKey = API_KEY;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const connection = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "123456789",
  database: "royal_magic1",
});

try {
  connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
} catch (error) {
  console.log("error", error);
}
const query = promisify(connection.query).bind(connection);
cron.schedule("*/20 * * * * *", function () {
async function fetchTransactionDetails() {
  const detail = `select * from tbl_reinvest where checked ='0' limit 10`;
  const data = await query(detail);
 
  data.forEach(async (element) => {
    console.log(element.hash_code);
    let apiUrl = `https://apilist.tronscan.org/api/transaction-info?hash=${element.hash_code}`;

    try {
      let response = await axios.get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "TRON-PRO-API-KEY": apiKey,
        },
      });

      if (response.status === 200) {
        let transactionDetails = response.data;
        // Process the transaction details as needed

        while (transactionDetails.confirmed != true) {
          console.log(
            transactionDetails.contractRet +
              " - > " +
              transactionDetails.confirmed
          );
          response = await axios.get(apiUrl, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "TRON-PRO-API-KEY": apiKey,
            },
          });
          if (response.status === 200) {
            transactionDetails = response.data;
          }
          console.log(
            "Transaction is not confirmed yet. Retrying in 30 seconds."
          );
          await new Promise((resolve) => setTimeout(resolve, 30000));
        }
        console.log(transactionDetails.data);
        if (transactionDetails.contractRet == "SUCCESS") {
          // Process the transaction details as needed

          //10^6 decimal usdt
          let transactionAmount = transactionDetails.trigger_info.parameter._value /10**6
          console.log(`
          contractAddress:- ${ transactionDetails.contractData.contract_address} ,TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
          sender:- ${ transactionDetails.contractData.owner_address}, ${element.walletAddress}
          reciever:- ${transactionDetails.trigger_info.parameter._to},TQ78Q5aAYidd5eJDqTKhtYmSbH2E74iWdT
          amount:- ${transactionAmount},${element.invest_package}
             `);

          if (
            transactionDetails.contractData.owner_address ==
              element.walletAddress &&
            transactionDetails.contractData.contract_address ==
              "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t" &&
            transactionDetails.trigger_info.parameter._to ==
              "TQ78Q5aAYidd5eJDqTKhtYmSbH2E74iWdT" &&
              transactionAmount ==
              15 && transactionAmount == element.invest_package
          ) {


            const update = `UPDATE tbl_reinvest SET checked = 1 WHERE hash_code = '${element.hash_code}'`;
          console.log(update);
            const updated = await query(update);
console.log("transaction completed status updated");

          }
        } else {
          console.log("Transaction Failed");
        }
      } else {
        console.log("Error occurred while fetching transaction details.");
      }
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  });
}

fetchTransactionDetails();
})



