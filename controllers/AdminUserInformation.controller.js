const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const getActiveUsers = async (req, res) => {
  const sql = `SELECT * FROM tbl_memberreg WHERE status = '1'`; // status = 0 means active
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched active users", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getBlockedUsers = async (req, res) => {
  const sql = `SELECT * FROM tbl_memberreg WHERE isblock = '1'`; // isblock = 1 means blocked
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched Blocked users", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInactiveUsers = async (req, res) => {
  const sql = `SELECT * FROM tbl_memberreg WHERE status = '0'`; // status = 1 means inactive
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched inactive users", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchUser = async (req, res) => {
  const { search } = req.query;
  const sql = `SELECT * FROM tbl_memberreg WHERE member_name LIKE '%${search}%' OR member_user_id LIKE '%${search}%' OR contact LIKE '%${search}%'`;
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched search results", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  const id = req.body.id;
  const sql = `SELECT * FROM tbl_memberreg WHERE member_user_id = '${id}'`;
  try {
    const result = await query(sql);
    res
      .status(200)
      .json({ message: "Successfully fetched user details", data: result[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSearchDashboard = async (req, res) => {
  try {
    const { userID } = req.query;
    const checkUserQuery = `SELECT * FROM tbl_memberreg WHERE member_user_id = '${userID}' `;
    const checkUser = await query(checkUserQuery);
    if (checkUser.length === 0) {
      return res.status(400).send({
        status: false,
        message: "Invalid USER ID!",
      });
    }
    const token = jwt.sign(
      { userId: checkUser[0].member_user_id },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      message: "Successfully fetched Dashboard search Data",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postBlockUser = async (req, res) => {
  try {
    const { userID } = req.body;
    const checkUserQuery = `SELECT * FROM tbl_memberreg WHERE member_user_id = '${userID}' `;
    const checkUser = await query(checkUserQuery);
    if (checkUser.length === 0) {
      return res.status(400).send({
        status: false,
        message: "Invalid USER ID!",
      });
    }
    const BlockUserQuery = `UPDATE tbl_memberreg SET isblock=1 WHERE member_user_id = '${userID}' `;
    const blocked = await query(BlockUserQuery);

    res.status(200).json({
      resposnce: blocked,
      message: `Successfully Blocked The user ${userID}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getActiveUsers,
  getInactiveUsers,
  searchUser,
  getUserDetails,
  getBlockedUsers,
  getSearchDashboard,
  postBlockUser,
};
