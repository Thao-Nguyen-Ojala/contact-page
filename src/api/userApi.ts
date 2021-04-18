import axiosClient from "./axiosClient";

const usersApi = {
  getAll() {
    const url = '/users';
    return axiosClient.get(url)
  },
  get(userId: string) {
    const url = `/users/${userId}`;
    return axiosClient.get(url)
  },
 
}

export default usersApi
