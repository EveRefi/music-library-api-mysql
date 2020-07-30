module.exports = (sequelize, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      genre: DataTypes.STRING,
      country: DataTypes.STRING,
    };
  
    const Artist = sequelize.define('Artist', schema);
    return Artist;
  };