'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	logging: false,
	pool: {
		max: 100,
		min: 0,
		idle: 200000,
		acquire: 1000000,
	  }
})
module.exports = sequelize;
