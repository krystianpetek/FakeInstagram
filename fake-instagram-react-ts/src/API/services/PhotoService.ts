import API from "./../api";
const ApiUrl = "photos";

const GetPhotos = () => {
  return API.get(`${ApiUrl}`);
};

const GetPhoto = (photoId: number) => {
  return API.get(`${ApiUrl}/${photoId}`);
};

const AddPhoto = () => {
  return API.post(`${ApiUrl}`);
};

const UpdateOrAddPhoto = (photoId: number) => {
  return API.put(`${ApiUrl}/${photoId}`);
};

const UpdatePhoto = (photoId: number) => {
  return API.patch(`${ApiUrl}/${photoId}`);
};

const DeletePhoto = (photoId: number) => {
  return API.delete(`${ApiUrl}/${photoId}`);
};

const PhotoService = {
  GetPhotos,
  GetPhoto,
  AddPhoto,
  UpdateOrAddPhoto,
  UpdatePhoto,
  DeletePhoto,
};

export default PhotoService;
