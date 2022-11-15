import API from "./../api";
const ApiUrl = "comments";

const GetComments = () => {
  return API.get(`${ApiUrl}`);
};

const GetComment = (commentId: number) => {
  return API.get(`${ApiUrl}/${commentId}`);
};

const GetCommentsForPost = (commentId: number) => {
  return API.get(`comments?postId=${commentId}`);
};

const CreateCommentForPost = (commentId: number) => {
  return API.post(`comments?postId=${commentId}`);
};

const CreateComment = () => {
  return API.post(`${ApiUrl}`);
};

const UpdateOrCreateComment = (commentId: number) => {
  return API.put(`${ApiUrl}/${commentId}`);
};

const UpdateComment = (commentId: number) => {
  return API.patch(`${ApiUrl}/${commentId}`);
};

const DeleteComment = (commentId: number) => {
  return API.delete(`${ApiUrl}/${commentId}`);
};

const CommentService = {
  GetComments,
  GetComment,

  GetCommentsForPost,
  CreateCommentForPost,

  CreateComment,
  UpdateOrCreateComment,
  UpdateComment,
  DeleteComment,
};

export default CommentService;
