// Customer model

// The Customer has a "customer" attribute of type DataTypes.String

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });



  return Customer;
};