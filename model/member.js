var mongoose = require('mongoose')
var Schema = mongoose.Schema

var memberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  zipcode: String,
  email: {
    type: String,
    email: {
      type: String,
      validate: [
        {
          validator: v => {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)
          },
          message: `Invalid email format`
        }
      ],
    }
  },
  phone: {
    type: String,
    min: [11, 'Angka harus 11'],
    max: [13, 'Angka maksimal 13']
  }
})

memberSchema.post('save', function(err, doc, next) {
  if(err.name === 'MongoError' && err.code === 11000) {
    next(new Error(`Email has been used`))
  } else {
    next()
  }
})
var Member = mongoose.model('Member', memberSchema)

module.exports = Member