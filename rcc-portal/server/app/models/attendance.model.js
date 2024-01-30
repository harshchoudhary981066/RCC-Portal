module.exports = (sequelize, DataTypes) => {
  const Attendence = sequelize.define(
    "attendence",
    {
      a_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stud_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // foreignKey: true,
      },
      m_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stud_rno: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      mark_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      slot_1: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_2: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },

      slot_3: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },

      slot_4: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_5: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_6: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_7: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_8: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
      slot_9: {
        type: DataTypes.STRING,
        allowNull: true,
        default: 0,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Attendence;
};
