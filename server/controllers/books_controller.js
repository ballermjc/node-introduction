let books = [];
let id = 0;

module.exports = 
{
    create: (req, res) => {
        const { title, author } = req.body;
        books.push( { id, title, author } );
        id++;
        res.status(200).send(books);
    },
    read: (req, res) => res.status(200).send(books),
    update: (req, res) => {
        const {title, author } = req.body;
        const id = req.params.id;
        let indexOfBook = books.findIndex(book => book.id == id);
        books[indexOfBook] = { 
            id: id, 
            title: req.body.title || books[indexOfBook].title, 
            author: req.body.author || books[indexOfBook].author 
        };
        res.status(200).send(books);
    },
    delete: (req, res) => {
        const id = req.params.id;
        let indexOfBook = books.findIndex(book => book.id == id);
        books.splice(indexOfBook, 1);
        res.status(200).send(books);
    } 
};