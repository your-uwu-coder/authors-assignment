const Author = require('../model/author.models')

module.exports = {

    allAuthors: async (req, res) => {
        try {
            const allAuthors = await Author.find()
            res.json(allAuthors)
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    newEntry: async (req, res) => {
        try {
            const newAuthor = await Author.create(req.body)
            res.json(newAuthor)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    editAuthor: async (req, res) => {
        try {
            const updatedAuthor = await Author.findOneAndUpdate({ _id: req.params.id }, req.body , { new: true, runValidators: true } )
            res.json(updatedAuthor)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    getOneAuthor: async (req, res) => {
        try {
            const oneAuthor = await Author.findById ({ _id: req.params.id })
            res.json(oneAuthor)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    deleteAuthor: async (req, res) => {
        try{
            const response = await Author.deleteOne({_id: req.params.id})
            res.json(response)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}