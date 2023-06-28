require("dotenv").config();
const connection = require("../config/db.config");
const { promisify } = require("util");
const query = promisify(connection.query).bind(connection);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const getRegister = async (req, res) => {
  let sponcer_id = req.query.sponcer_id;
  let query1 = `SELECT * FROM tbl_memberreg WHERE member_user_id='${sponcer_id}' `;
  const checkSponcer = await query(query1);
  if (checkSponcer.length === 0) {
    return res.status(400).send({
      status: false,
      message: "Invalid sponcer id",
    });
  }
  let sponcer_name = checkSponcer[0].member_name;
  return res.status(200).send({
    status: true,
    sponcer_name: sponcer_name,
    sponcer_id: sponcer_id,
  });
};

const register = async (req, res) => {
 try{ 
  let sponcer_id = req.body.sponcerid;
  console.log(req.body)
  let member_user_id;
  let query1 = `SELECT * FROM tbl_memberreg WHERE member_user_id='${sponcer_id}' and status=1`;
  const checkSponcer = await query(query1);
  if (checkSponcer.length === 0) {
    return res.status(400).send({
      message: "Invalid sponcer id",
    });
  }
  let sponcer_name = checkSponcer[0].member_name;
  let contactNo = req.body.contactNumber.trim();
  let member_name = req.body.member_name.trim().toUpperCase();
  let password = req.body.password.trim();
  let cpassword = req.body.cpassword.trim();
  let email = req.body.email.trim().toLowerCase();

  if (password !== cpassword) {
    return res.status(400).send({
      status: false,
      message: "Password and confirm password not matched",
    });
  }

 

  let reg_date = new Date().toISOString().replace("T", " ").replace("Z", "");

  console.log(`reg_date`, reg_date);

  if (member_name.length < 3) {
   return res.status(400).send({
      title: "Error",
      message: "Fill Member Name",
      status: "error",
    });
  } else if (contactNo.length !== 10) {
   return res.status(400).send({
      title: "Error",
      message: "Fill Valid Mobile No",
      status: "error",
    });
  } else if (!phoneValidation(contactNo)) {
    return res.status(400).send({
      title: "Error",
      message: "Fill Valid Mobile Name",
      status: "error",
    });
  } else if (!emailValidation(email)) {
    return res.status(400).send({
      title: "Error",
      message: "Fill Valid Email Id",
      status: "error",
    });
  } else if (password.length < 6) {
    return res.status(400).send({
      title: "Error",
      message: "Password Must be 6 Charactor",
      status: "error",
    });
  } else if (password !== cpassword) {
    return res.status(400).send({
      title: "Error",
      message: "Password and Confirm Password do not match",
      status: "error",
    });
  } else {
    member_user_id = generateRandomNumber();

    let checkMemberId = `SELECT * FROM tbl_memberreg WHERE member_user_id='${member_user_id}'`;
    let checkMemberIdResult = await query(checkMemberId);

    while (checkMemberIdResult.length > 0) {
      member_user_id = generateRandomNumber();
      checkMemberId = `SELECT * FROM tbl_memberreg WHERE member_user_id='${member_user_id}'`;
      checkMemberIdResult = await query(checkMemberId);
    }
  }

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  let insertQuery = `INSERT INTO tbl_memberreg (member_user_id, sponcer_id, sponcer_name, member_name, contact, email, password, registration_date) VALUES ('${member_user_id}', '${sponcer_id}', '${sponcer_name}', '${member_name}', '${contactNo}', '${email}', '${password}', '${reg_date}')`;

    const insertResult = await query(insertQuery);
    return res.status(200).send({
      status: true,
      message: "Registration successfully",
      userId: member_user_id,
    });
}catch (err) {
  return res.status(500).send({mesage:err});
};
}
const login = async (req, res) => {
 try{ const { email, password } = req.body;

  console.log(email, password);
  const checkUserQuery = `SELECT * FROM tbl_memberreg WHERE member_user_id = '${email}' `;
  const checkUser = await query(checkUserQuery);
  if (checkUser.length === 0) {
    return res.status(400).send({
      status: false,
      message: "Invalid email!",
    });
  } else {
    const validPassword = await bcrypt.compare(password, checkUser[0].password);
    if (!validPassword) {
      return res.status(400).send({
        status: false,
        message: "Invalid password!",
      });
    }

    const token = jwt.sign(
      { userId: checkUser[0].member_user_id },
      JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    const user = checkUser[0];

    const returnObject = {
      member_user_id: user.member_user_id,
      member_name: user.member_name,
      sponcer_id: user.sponcer_id,
      sponcer_name: user.sponcer_name,
      wallet_address: user.wallet_address,
      promoter_id: user.promoter_id,
      promoter_name: user.promoter_name,
      contact: user.contact,
      email: user.email,
      status: user.status,
      registration_date: user.registration_date,
      member_status: user.member_status,
      kyc_status: user.kyc_status,
      topup_amount: user.topup_amount,
      direct_member: user.direct_member,
      wallet_amount: user.wallet_amount,
      checked: user.checked,
      withdrawal_amt: user.withdrawal_amt,
      block_status: user.block_status,
      current_investment: user.current_investment,
      direct_business: user.direct_business,
      total_earning: user.total_earning,
      isblock: user.isblock,
      team_business: user.team_business,
      expiry_date: user.expiry_date,
      expiry_date2: user.expiry_date2,
      team_member: user.team_member,
      activation_date: user.activation_date,
      profile_image: user.profile_image,
      front_image: user.front_image,
      back_image: user.back_image,
      member_dob: user.member_dob,
      address: user.address,
      pincod: user.pincod,
      gender: user.gender,
      country_code: user.country_code,
      state: user.state,
      city: user.city,
      calTeamStatus: user.calTeamStatus,
      updateWallet: user.updateWallet,
      updateWallet: user.updateWallet,
      royalPoolIncome: user.royal_pool,
      magicPoolIncome: user.magic_pool,
      net_income: user.net_income,
      direct_income: user.direct_income,
    };

    return res.status(200).send({
      status: true,
      message: "Login successfully",
      token,
      user: returnObject,
    });
  }}
  catch(err) {
    return res.status(500).send({mesage:err});
};
}
const changePassword = async (req, res) => {
  try {
    let memberUserId = req.user;
    console.log(memberUserId);
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    const verifyPassword = req.body.verifyPassword;
    console.log(req.body);
    if (!(oldPassword && newPassword && verifyPassword)) {
      return res.status(400).json({ message: "all field required " });
    }
    const rPassword = `SELECT password FROM tbl_memberreg WHERE member_user_id = '${memberUserId}' `;
    connection.query(rPassword, (err, resR) => {
      console.log(rPassword);
      if (err) return res.status(400).json({ message: "paslk " });

      if (!bcrypt.compareSync(oldPassword, resR[0].password)) {
        return res.status(400).json({ message: "enter correct old password " });
      }

      if (newPassword != verifyPassword) {
        return res
          .status(400)
          .json({ message: "enter password does't not match " });
      }

      const salt = bcrypt.genSaltSync(10);

      const pwdhash = bcrypt.hashSync(newPassword, salt);
      const sql = `UPDATE tbl_memberreg SET password = "${pwdhash}" WHERE member_user_id = "${memberUserId}"`;
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(400).send({ error: "Not found" });
        }
        if (result.affectedRows === 1) {
          return res
            .status(200)
            .json({ message: "password Updated Successfully" });
        } else {
          return res.status(400).json({ message: "password Update Failed" });
        }
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};

const forgotPassword = async (req, res) => {
  try {
    console.log("called");
    const email1 = req.body.email;
    const row = `SELECT * FROM tbl_memberreg WHERE email = '${email1}' AND isblock = 0`;
    connection.query(row, async (err, resR) => {
      console.log(resR[0]);
      if (err) {
        return res.status(400).send({ error: "Not found" });
      } else if (resR.length > 1) {
        return res
          .status(400)
          .send({ error: "There is more then on email address" });
      }
      let userId = resR[0].member_user_id;

      if (resR.length == 1) {
        console.log(resR.length);
        let email = resR[0].email;
        // const token = crypto.randomBytes(20).toString("hex");
        const token = otpGenerator.generate(6, {
          lowerCaseAlphabets: false,
          upperCaseAlphabets: false,
          specialChars: false,
        });
        console.log(token);

        //
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.EMAIL_PASS}`,
          },
        });
        const expiry = Date.now() + 300; //5 mintues
        console.log(expiry, token, typeof expiry);
        const otpCode = `UPDATE tbl_memberreg SET otp='${token}', OTP_Expiry='${expiry}' WHERE member_user_id='${userId}'`;
        const up = await query(otpCode);
        console.log(up);
        console.log("otpCode", otpCode);
        try {
          const mailOptions = {
            from: `${process.env.EMAIL_USER}`,
            to: `${email}`,
            subject: "[Promoquo] Reset Password Link",
            text:
              "  You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
              "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
              ` ${token}\n\n` +
              "If you did not request this, please ignore this email and your password will remain unchanged.\n",
          };

          // send the email with the password reset link
          transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
              console.log(
                "ERROR coming from forgot.password js and it sucks",
                err
              );
              return res.status(550).json({
                message: `Not able to send mail`,
              });
            } else {
              console.log("Email Send Successfully");
              return res.status(200).json({
                message: `recovery email ${resR[0].email} sent hell yes`,
              });
            }
          });
        } catch (e) {
          return res.status(500).json({ message: e.message });
        }
      } else {
        return res.status(400).json({
          message: "User with that email" + email1 + "does not exist",
        });
      }
      return res.status(200).json({
        message: "Reset password email has been sent WOOHOO 🎉",
      });
    });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const verifyotp = async (req, res) => {
  const otp = req.body.token;
  const newPassword = req.body.newPassword;
  const verifyPassword = req.body.verifyPassword;
  const email = req.body.email;
  const query2 = `SELECT * FROM tbl_memberreg WHERE otp ='${otp}' AND email='${email}' AND isblock = 0`;
  connection.query(query2, async (err, resR) => {
    console.log(query2, resR);
    if (err) {
      console.log(err);
      return res.status(400).send({ error: "bad request " });
    }

    if (resR.length == 0) {
      return res.status(400).send({ error: "Invalid Token!!" });
    }
    if (resR[0].expiry_otp > Date.now()) {
      return res.status(400).send("otp expired");
    }
    const userId = resR[0].member_user_id;

    const salt = bcrypt.genSaltSync(10);

    const pwdhash = bcrypt.hashSync(newPassword, salt);
    const sql = `UPDATE tbl_memberreg SET password = "${pwdhash}" WHERE member_user_id = "${userId}"`;
    connection.query(sql, (err, result) => {
      if (err) {
        return res.status(400).send({ error: "Not found" });
      }
      if (result.affectedRows === 1) {
        return res
          .status(200)
          .json({ message: "password Updated Successfully" });
      } else {
        return res.status(400).json({ message: "password Update Failed" });
      }
    });
  });
};

function generateRandomNumber() {
  const min = 1000000; // Minimum 7-digit number (inclusive)
  const max = 9999999; // Maximum 7-digit number (inclusive)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function phoneValidation(phone) {
  phone = testInput(phone);
  if (/^\d{10}$/.test(phone)) {
    return true;
  } else {
    return false;
  }
}
function emailValidation(email) {
  let emailVal =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  email = testInput(email);
  if (emailVal.test(email)) {
    return true;
  } else {
    return false;
  }
}

function testInput(data) {
  data = data.trim();
  data = data.replace(/\\/g, "");
  data = htmlspecialchars(data);
  return data;
}

function htmlspecialchars(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#039;");
  return str;
}

module.exports = {
  register,
  login,
  getRegister,
  changePassword,
  forgotPassword,
  verifyotp,
};
