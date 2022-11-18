import IPostRequest from "../Request/IPostRequest";
import API from "./../api";
const ApiUrl = "posts";

const GetPosts = () => {
  return API.get(`${ApiUrl}`);
};

const GetPost = (postId: number) => {
  return API.get(`${ApiUrl}/${postId}`);
};

const GetPostComments = (postId: number) => {
  return API.get(`${ApiUrl}/${postId}/comments`);
};

const CreatePostComment = (postId: number) => {
  return API.post(`${ApiUrl}/${postId}/comments`);
};

const GetPostsFromUser = (userId: number) => {
  return API.get(`posts?userId=${userId}`);
};

const CreatePostByUser = (userId: number) => {
  return API.post(`posts?userId=${userId}`);
};

const GetCommentsForPost = (postId: number) => {
  return API.get(`comments?postId=${postId}`);
};

const CreateCommentToPost = (postId: number) => {
  return API.post(`comments?postId=${postId}`);
};

const CreatePost = (post: IPostRequest) => {
  return API.post(`${ApiUrl}`, post);
};

const UpdateOrCreatePost = (postId: number) => {
  return API.put(`${ApiUrl}/${postId}`);
};

const UpdatePost = (postId: number) => {
  return API.patch(`${ApiUrl}/${postId}`);
};

const DeletePost = (postId: number) => {
  return API.delete(`${ApiUrl}/${postId}`);
};

const PostService = {
  GetPosts,
  GetPost,
  GetPostComments,
  CreatePostComment,
  GetPostsFromUser,
  CreatePostByUser,
  GetCommentsForPost,
  CreateCommentToPost,
  CreatePost,
  UpdateOrCreatePost,
  UpdatePost,
  DeletePost,
};

export default PostService;
