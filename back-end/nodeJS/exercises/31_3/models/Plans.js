const Plans = (sequelize, DataTypes) => {
  const Plans = sequelize.define('Plans', {
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    coverage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  }, { timestamps: false })

  Plans.associate = (models) => {
    Plans.hasMany(models.Patients, { foreignKey: 'plan_id', as: 'patients' })
  }  
  return Plans;
};

module.exports = Plans;
