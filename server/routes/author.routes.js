const AuthorController = require ('../controller/author.controllers')

module.exports = app => {
    app.get('/api/allAuthors', AuthorController.allAuthors)
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    app.post('/api/newAuthor', AuthorController.newEntry)
    app.put('/api/edit/:id', AuthorController.editAuthor)
    app.delete('/api/deleteOne/:id', AuthorController.deleteAuthor)
}