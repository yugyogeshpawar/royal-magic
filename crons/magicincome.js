// require("dotenv").config();
// const axios = require("axios");
// const mysql = require("mysql2");
// const { promisify } = require("util");
// const cron = require("node-cron");
// const API_KEY = process.env.API_KEY;
// const apiKey = API_KEY;
// const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "AIFX",
// });

// try {
//   connection.connect((error) => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
//   });
// } catch (error) {
//   console.log("error", error);
// }
// const query = promisify(connection.query).bind(connection);

// async function fetch() {
//   const detail = `select member_user_id,team_member from tbl_memberreg where team_member =21 limit 10`;
//   const data = await query(detail);

//   const node = { parent: 0, child: [] };

//   const root = [node];
//   console.log("root[0].child", root[0].child);

//   data.forEach((element) => {
//     const memberId = element.member_user_id;
//     if (root[0].parent == 0) root[0].parent = memberId;
//     root[0].child.push(element.member_user_id);

// //     console.log();
// //   });
// // }

// // fetch();

// insert(data);
// {
//   var newNode = new Node(data);

//   if (this.root === null) this.root = newNode;
//   else this.insertNode(this.root, newNode);
// }

// insertNode(node, newNode);
// {
//   if (newNode.data < node.data) {
//     if (node.left === null) node.left = newNode;
//     else this.insertNode(node.left, newNode);
//   } else {
//     if (node.right === null) node.right = newNode;
//     else this.insertNode(node.right, newNode);
//   }
// }
