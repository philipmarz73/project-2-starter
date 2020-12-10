module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        maxNumPlayers: DataTypes.INTEGER,
        minNumPlayers: DataTypes.INTEGER,
      
        //TODO: time range 
    })

    return Game;
};