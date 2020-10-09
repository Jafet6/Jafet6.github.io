const express = require('express');
const bodyParser = require('body-parser');
const { book } = require('./models');

const factory = () => {
  const app = express();

  app.use(bodyParser.json());

  app.get('/books', async (req, res) => {
    const allBooks = await book.findAll({ order: [ ['author', 'ASC'], ['createdAt', 'ASC'] ] });
    return res.status(200).json(allBooks);
  })


  app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const oneBook = await book.findByPk(id);
    return res.status(200).json(oneBook);
  })

  app.get('/books/author/:author', async (req, res) => {
    const { author } = req.params;
    console.log(author);
    const bookByAuthor = await book.findOne({ where: { author: author }})

    return res.status(200).json(bookByAuthor)
  })

  app.post('/books', async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await book.create({ title, author, pageQuantity })
    return res.status(201).json(newBook);
  })

  app.put('/books/:id', async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    await book.update({ author, pageQuantity, title }, { where: { id }});
    const updatedBook = await book.findByPk(id);
    return res.status(200).json(updatedBook);
  })

  app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    await book.destroy({ where: { id }});

    return res.status(204).json({ message: 'Livro deletado' });
  })

  return app;
}

module.exports = factory;