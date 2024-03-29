const mysql = require("mysql2/promise");
const pool = mysql.createPool({
	host: "db.gksthf4013.gabia.io",
	port: 3306,
	user: "gksthf4013",
	// user: "ella",
	password: "cnsqhrdkfk1004!",
	// password: "000000",
	database: "dbgksthf4013",
	// database: "ella",
	connectionLimit: 10,
	waitForConnections: false
});

/* async await 하기 전 */
/*
const sqlExec = (sql, sqlVals) => {
	pool.getConnection((error, connect) => {
		if(error) console.log(error);
		else {
			connect.query(sql, sqlVals, (error, result) => {
				if(error) console.log(error);
				else console.log(result);
			})
		}
	});
}
*/

/* async await 적용 */
const sqlExec = async (sql, sqlVals) => {
	try {
		const connect = await pool.getConnection();
		const result = await connect.query(sql, sqlVals);
		connect.release();
		return result;
	}
	catch(error) {
		connect.release();
		console.log(error);
		// throw new Error(error);
	}
}

module.exports = {mysql, sqlExec};

