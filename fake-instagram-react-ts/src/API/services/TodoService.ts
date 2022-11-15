import API from "./../api";
const ApiUrl = "todos";

const GetTodos = () => {
  return API.get(`${ApiUrl}`);
};

const GetTodo = (todoId: number) => {
  return API.get(`${ApiUrl}/${todoId}`);
};

const CreateTodo = () => {
  return API.post(`${ApiUrl}`);
};

const UpdateOrCreateTodo = (todoId: number) => {
  return API.put(`${ApiUrl}/${todoId}`);
};

const UpdateTodo = (todoId: number) => {
  return API.patch(`${ApiUrl}/${todoId}`);
};

const DeleteTodo = (todoId: number) => {
  return API.delete(`${ApiUrl}/${todoId}`);
};

const GetUserTodos = (userId: number) => {
  return API.get(`${ApiUrl}?userid=${userId}`);
};

const CreateUserTodo = (userId: number) => {
  return API.post(`${ApiUrl}?userid=${userId}`);
};

const TodoService = {
  GetTodos,
  GetTodo,
  CreateTodo,
  UpdateOrCreateTodo,
  UpdateTodo,
  DeleteTodo,
  GetUserTodos,
  CreateUserTodo,
};

export default TodoService;
