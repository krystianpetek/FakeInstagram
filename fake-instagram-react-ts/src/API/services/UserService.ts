import API from "./../api";
const ApiUrl = "users";

const GetUsers = () => {
  return API.get(`${ApiUrl}`);
};

const GetUser = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}`);
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
  return API.get(`${ApiUrl}/${userId}/albums`);
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

const UserService = {
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

export default UserService;
