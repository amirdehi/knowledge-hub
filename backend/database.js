const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('knowledgehub', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;
