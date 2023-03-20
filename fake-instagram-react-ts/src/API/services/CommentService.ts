import ICommentRequest from "../Request/ICommentRequest";
import ICommentResponse from "../Response/ICommentResponse";
import API from "./../api";
const ApiUrl = "comments";

// const GetComments = () => {
//   return API.get(`${ApiUrl}`);
// };
const GetComments = () => {
  return API.get(`${ApiUrl}`)
    .then((response) => response.data)
    .then((comments) => {
      return comments;
    })
    .catch((error) => {
      console.log(error);
    });
};

// const CreateComment = (comment: ICommentRequest) => {
//   return API.post(`${ApiUrl}`, comment);
// };
const CreateComment = (comment: ICommentRequest): Promise<ICommentResponse> => {
  return API.post(`${ApiUrl}`, comment)
    .then<ICommentResponse>((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

// const DeleteComment = (commentId: number) => {
//   return API.delete(`${ApiUrl}/${commentId}`);
// };
const DeleteComment = (commentId: number) => {
  return API.delete(`${ApiUrl}/${commentId}`)
    .then((response) => {
      if (response.status === 200) {
        return;
      }
      throw new Error("Something went wrong!");
    })
    .catch((error) => {
      console.log(error);
      // window.location.href = '/errorPage';
    });
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

const UpdateOrCreateComment = (commentId: number) => {
  return API.put(`${ApiUrl}/${commentId}`);
};

const UpdateComment = (commentId: number) => {
  return API.patch(`${ApiUrl}/${commentId}`);
};

export const CommentService = {
  GetComments,
  CreateComment,
  DeleteComment,
  // GetComment,
  // GetCommentsForPost,
  // CreateCommentForPost,
  // UpdateOrCreateComment,
  // UpdateComment,
};

export interface ICommentService {
  GetComments: () => Promise<ICommentResponse[]>;
  CreateComment: (comment: ICommentRequest) => Promise<ICommentResponse>;
  DeleteComment: (commentId: number) => Promise<void>;
}
