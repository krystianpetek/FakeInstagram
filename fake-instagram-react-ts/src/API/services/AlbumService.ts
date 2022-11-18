import API from "./../api";
const ApiUrl = "albums";

const GetAlbums = () => {
  return API.get(`${ApiUrl}`);
};

const GetAlbum = (albumId: number) => {
  return API.get(`${ApiUrl}/${albumId}`);
};

const GetUserAlbums = (userId: number) => {
  return API.get(`${ApiUrl}/${userId}/albums`);
};

const AddUserAlbum = (userId: number) => {
  return API.post(`${ApiUrl}/${userId}/albums`);
};

const GetPhotosFromAlbum = (albumId: number) => {
  return API.get(`${ApiUrl}/${albumId}/photos`);
};

const AddPhotoToAlbum = (albumId: number) => {
  return API.post(`${ApiUrl}/${albumId}/photos`);
};

const CreateAlbum = () => {
  return API.post(`${ApiUrl}`);
};

const UpdateOrCreateAlbum = (albumId: number) => {
  return API.put(`${ApiUrl}/${albumId}`);
};

const UpdateAlbum = (albumId: number) => {
  return API.patch(`${ApiUrl}/${albumId}`);
};

const DeleteAlbum = (albumId: number) => {
  return API.delete(`${ApiUrl}/${albumId}`);
};

const AlbumService = {
  GetAlbums,
  GetAlbum,
  GetUserAlbums,
  AddUserAlbum,
  GetPhotosFromAlbum,
  AddPhotoToAlbum,
  CreateAlbum,
  UpdateOrCreateAlbum,
  UpdateAlbum,
  DeleteAlbum,
};

export default AlbumService;
