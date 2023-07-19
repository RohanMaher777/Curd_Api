const {Sequelize, Model, DataTypes} = require('sequelize')

const sequelize = new Sequelize ('company', 'root', '',{
    host: 'localhost',
    dialect : 'mysql',
    logging:false
})

try{
    sequelize.authenticate();
    console.log("Connection establised successfully");
}
catch(err){
    console.error("Unable to connect to the database", err);

}

const db = {}
db.Sequelize = Sequelize
db.sequelize= sequelize
db.sequelize.sync();

db.user=require('../model/user')(Model, DataTypes, sequelize);

module.exports = db;


