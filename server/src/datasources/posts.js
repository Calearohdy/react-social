const { MongoDataSource } = require('apollo-datasource-mongodb');

class Posts extends MongoDataSource {
  initialize(config) {
    super.initialize(config);

    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts() {
    return await this.model.find();
  }
}

module.exports = Posts;