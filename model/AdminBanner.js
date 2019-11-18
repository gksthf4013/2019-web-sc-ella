const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminBanner extends Model {}
// Sample.init({테이블정보},{옵션});
AdminBanner.init({
	src: { type: Sequelize.STRING, allowNull: false },
	position: { type: Sequelize.ENUM("top", "bot"), defaultValue: "top" },
	title: { type: Sequelize.STRING, allowNull: true },
	desc: { type: Sequelize.STRING, allowNull: true },
	link: { type: Sequelize.STRING, allowNull: true }
},{
	sequelize,
	modelName: "banners",
});
AdminBanner.sync({force: false});

module.exports = {AdminBanner}

// ENUM: 값을 정해놓고 그 중 하나만 받을 수 있다.