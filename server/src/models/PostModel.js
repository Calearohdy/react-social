const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  id: String,
  username: String,
  body: String,
  createdAt: String,
})

module.exports = model('Post', postSchema);