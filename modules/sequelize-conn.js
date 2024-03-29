// npm i sequelize sequelize-cli mysql mysql2
const Sequelize = require("sequelize");	//<script src="../js/fx-slide.js"></script>
const sequelize = new Sequelize({
	host: "db.gksthf4013.gabia.io",
	port: 3306,
	username: "gksthf4013",
	// user: "ella",
	password: "cnsqhrdkfk1004!",
	// password: "000000",
	database: "dbgksthf4013",
	// database: "ella",
	dialect: "mysql",
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

/*
sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
*/
(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	}
	catch (err) {
		console.error('Unable to connect to the database:', err);
	}
})();

module.exports = {Sequelize, sequelize}