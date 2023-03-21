import IAlbumResponse from "../Response/IAlbumResponse";
import IUserResponse from "../Response/IUserResponse";
import API from "./../api";
const ApiUrl = "users";

const GetUsers = () => {
  return API.get(`${ApiUrl}`)
    .then((response) => response.data)
    .then((users) => {
      return users;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const GetUser = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}`)
    .then<IUserResponse>((response) => response.data)
    .then((posts) => {
      return posts;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const CreateUser = () => {
  return API.post(`${ApiUrl}`);
};

const UpdateOrCreateUser = (userId: number) => {
  return API.put(`${ApiUrl}/${userId}`);
};

const UpdateUser = (userId: number) => {
  return API.patch(`${ApiUrl}/${userId}`);
};

const DeleteUser = (userId: number) => {
  return API.delete(`${ApiUrl}/${userId}`);
};

const GetUserAlbums = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}/albums`)
    .then<IAlbumResponse[]>((response) => {
      if (response.status === 200) {
        return response.data;
      }
      throw new Error("While fetching posts something went wrong!");
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const CreateUserAlbum = (userId: number) => {
  return API.post(`${ApiUrl}/${userId}/albums`);
};

const GetUserPosts = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}/posts`);
};

const CreateUserPost = (userId: number) => {
  return API.post(`${ApiUrl}/${userId}/posts`);
};

const GetUserTodos = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}/todos`);
};

const CreateUserTodo = (userId: number) => {
  return API.post(`${ApiUrl}/${userId}/todos`);
};

export const UserService = {
  GetUsers,
  GetUser,
  CreateUser,
  UpdateOrCreateUser,
  UpdateUser,
  DeleteUser,
  GetUserAlbums,
  CreateUserAlbum,
  GetUserPosts,
  CreateUserPost,
  GetUserTodos,
  CreateUserTodo,
};

export interface IUserService {
  GetUsers: () => Promise<IUserResponse[]>;
  GetUser: (userId: number) => Promise<IUserResponse>;
  GetUserAlbums: (userId: number) => Promise<IAlbumResponse[]>;
}
