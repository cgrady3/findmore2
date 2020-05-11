import axios from "axios";

export default {
  getCollectionsByTitle: function (title) {
    return axios.get("/api/books/" + title);
  },
  getCollectionByUserId: function (id) {
    return axios.get("/api/books/user/" + id);
  },
  deleteCollection: function (id) {
    return axios.delete("/api/books/" + id);
  },
  createCollection: function (data) {
    return axios.post("/api/books/", data);
  },
  LoginUser: function (data) {
    return axios.post("api/user/login", data);
  },
  RegisterUser: function (data) {
    return axios.post("api/user/register", data);
  },
  getUserById: function (id) {
    return axios.get("api/user/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
};
