let Member = require('../model/member')
class ControllerMember {
  static read(req, res) {
    Member
      .find()
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res){
    Member
      .create(req.body)
      .then(() => {
        res.status(200).json('Success create Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res){
    const query = req.query
    const memberId = query.id
    Member
      .findByIdAndUpdate(memberId, query)
      .then(() => {
        res.status(200).json('Success update Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static remove(req, res){
    const query = req.query

    Member
      .findByIdAndRemove(query.id)
      .then(() => {
        res.status(200).json('Success remove Data')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = ControllerMember