const sequelizeConnection = require('../config/dbConnection');
const Sequelize = require('sequelize');
const DictionaryEs = sequelizeConnection.define('words_es', {
    word: Sequelize.STRING,
    slug: Sequelize.STRING,
    word_len : Sequelize.INTEGER,
    word_combinations_count : Sequelize.INTEGER,
  }, {
    timestamps: false,
    tableName : 'words_es'
  });

  module.exports = DictionaryEs;