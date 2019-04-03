let Transaction = require('../model/transaction')
class ControllerBook {
  static read(req, res) {
    let where = {}
    if(req.query.bookId) {
      where = {
        booklist : req.query.bookId
      }
    }
    Transaction
      .find(where)
      .populate('member')
      .populate('booklist')
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    Transaction
      .create(req.body)
      .then(() => {
        res.status(200).json('Success create Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    const query = req.query
    const bookId = query.id
    Book
      .findByIdAndUpdate(bookId, query)
      .then(() => {
        res.status(200).json('Success update Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res) {
    const query = req.query

    Book
      .findByIdAndRemove(query.id)
      .then(() => {
        res.status(200).json('Success remove Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = ControllerBook