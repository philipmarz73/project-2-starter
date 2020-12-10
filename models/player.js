module.exports = function (sequelize, DataTypes) {
    const Player = sequelize.define("Player", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        //TODO: Days of the week? 
    })

    return Player;
};