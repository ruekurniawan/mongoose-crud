var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'Member' },
  in_date: Date,
  out_date: Date,
  due_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

transactionSchema.pre('save', function(next) {
  const inBook = this.in_date.getTime()
  const dueBook = this.due_date.getTime()
  const penalty = parseInt((inBook - dueBook)/(24*3600*1000))
  if(penalty > 0) {
    this.fine = penalty * 1000
  }
  next()
})
var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction