const connection = require("../config/db.config");
const {promisify} = require('util');
const query = promisify(connection.query).bind(connection);

const summary = async (req, res) => {
    const sql = `SELECT * FROM tbl_reinvest`; // get all deposits that have been checked
    try{
        const result = await query(sql);
        res.status(200).json({message: 'Successfully fetched investment summary', data: result});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    summary
}
