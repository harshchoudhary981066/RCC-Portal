module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "event",
    {
      e_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      e_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_organizer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      e_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      e_venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_judges: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      e_winners: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      participants_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Event;
};
