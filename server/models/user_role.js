'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Role = sequelize.define('User_Role', {
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {});
  User_Role.associate = function(models) {
    // associations can be defined here
  };
  return User_Role;
};