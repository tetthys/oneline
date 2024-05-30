class PostService {
  constructor(postModel, userModel) {
    this.postModel = postModel;
    this.userModel = userModel;
  }

  async createPostByUser(title, content) {
    return await this.postModel.create({
      title,
      content,
      user: this.userModel,
    });
  }

  async upvotePostByUser() {
    return await this.postModel.upvote();
  }

  async downvotePostByUser() {
    return await this.postModel.downvote();
  }
}

export default PostService;
