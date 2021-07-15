const { MongoDataSource } = require('apollo-datasource-mongodb');

class Posts extends MongoDataSource {
  initialize(config) {
    super.initialize(config);

    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts() {
    const dbPosts = await this.model.find();
    console.log(dbPosts);
    return dbPosts;
  }
}

module.exports = Posts;