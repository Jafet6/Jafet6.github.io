const createBook = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  })

  return Book;
};

module.exports = createBook;
