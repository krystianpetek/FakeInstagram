import IPostRequest from "../Request/IPostRequest";
import IPostResponse from "../Response/IPostResponse";
import API from "./../api";
const ApiUrl = "posts";

// const CreatePost = (post: IPostRequest) => {
//   return API.post(`${ApiUrl}`, post);
// };
const CreatePost = (post: IPostRequest): Promise<IPostResponse> => {
  return API.post(`${ApiUrl}`, post)
    .then<IPostResponse>((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
};

// const DeletePost = (postId: number) => {
//   return API.delete(`${ApiUrl}/${postId}`);
// };
const DeletePost = (postId: number): Promise<void> => {
  return API.delete(`${ApiUrl}/${postId}`)
    .then((response) => {
      if (response.status === 200 || response.status === 204) {
        return;
      }
      throw new Error("Something went wrong!");
    })
    .catch((error) => {
      throw new Error(error);
    });
};

// const GetPosts = () => {
//   return API.get(`${ApiUrl}`);
// };
const GetPosts = (): Promise<IPostResponse[]> => {
  return API.get(`${ApiUrl}`)
    .then((response) => response.data)
    .then((posts) => {
      return posts;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

// const GetPost = (postId: number) => {
//   return API.get(`${ApiUrl}/${postId}`);
// };
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

const UpdateOrCreatePost = (postId: number) => {
  return API.put(`${ApiUrl}/${postId}`);
};

const UpdatePost = (postId: number) => {
  return API.patch(`${ApiUrl}/${postId}`);
};

export const PostService = {
  CreatePost,
  DeletePost,
  GetPosts,
  // GetPostComments,
  // CreatePostComment,
  // GetPostsFromUser,
  // CreatePostByUser,
  // GetCommentsForPost,
  // CreateCommentToPost,
  // UpdateOrCreatePost,
  // GetPost,
  // UpdatePost,
};

export interface IPostService {
  CreatePost: (post: IPostRequest) => Promise<IPostResponse>;
  DeletePost: (postId: number) => Promise<void>;
  GetPosts: () => Promise<IPostResponse[]>;
  // GetPost: () => Promise<IPostResponse>;
  // GetPostComments;
  // CreatePostComment;
  // GetPostsFromUser;
  // CreatePostByUser;
  // GetCommentsForPost;
  // CreateCommentToPost;
  // UpdateOrCreatePost;
  // UpdatePost;
}
