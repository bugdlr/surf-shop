const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const POSTSchema = new Schema ({
  title: String,
  price: String,
  description: String,
  images: [ String ],
  location: String,
  lat: Number,
  lng: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});


module.exports = mongoose.model('Post', PostSchema);
