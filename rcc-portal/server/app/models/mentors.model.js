module.exports = (sequelize, DataTypes) => {
  const Mentor = sequelize.define(
    "mentor",
    {
      m_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      m_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      m_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      m_number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      m_department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Mentor;
};
