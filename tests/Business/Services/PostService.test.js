import PostService from "../../../src/Business/Services/PostService";

describe("PostService", () => {
  it("createPost", async () => {
    const postModel = {
      create: async () => {
        return {};
      },
    };
    const userModel = {};
    const postCreated = await new PostService(
      postModel,
      userModel
    ).createPostByUser();
    expect(postCreated).toEqual({});
  });
  it("upvote", async () => {
    const postModel = {
      upvote: async () => {
        return {};
      },
    };
    const userModel = {};
    const upvoted = await new PostService(
      postModel,
      userModel
    ).upvotePostByUser();
    expect(upvoted).toEqual({});
  });
  it("downvote", async () => {
    const postModel = {
      downvote: async () => {
        return {};
      },
    };
    const userModel = {};
    const downvoted = await new PostService(
      postModel,
      userModel
    ).downvotePostByUser();
    expect(downvoted).toEqual({});
  });
});
