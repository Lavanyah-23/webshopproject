"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "products",
      "categoryId",
      Sequelize.INTEGER,
      {
        references: {
          model: "categories",
          key: "categoryId",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "products",
      "categoryId",
      Sequelize.INTEGER
    );
  },
};
