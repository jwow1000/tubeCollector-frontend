// this is the users services 
import api from "./apiConfig.js";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/register/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  } catch (error) {
    console.log('sign up failed');
    throw error;
  }
};

export const Login = async (credentials) => {
  try {
    const resp = await api.post("/users/login/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const resp = await api.get("/users/token/refresh/");
    localStorage.setItem("token", resp.data.access);
    return resp.data.user;
  } else {
    console.log('NOT VERIFIED')
  }
  return false;
};

//get profile by user id
export const getProfile = async (id) => {
  try {
    const response = await api.get(`/users/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// get all posts by user with profile id
export const getUserPostsById = async (id) => {
  try {
    const response = await api.get(`profile/${id}/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//edit profile
export const editProfile = async (id, data) => {
  try {
    const response = await api.patch(`/users/${id}/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// add like
export const addLike = async (postID, profileID) => {
  try {
    const response = await api.patch(`posts/${postID}/add_like/${profileID}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// remove like
export const removeLike = async (postID, profileID) => {
  try {
    const response = await api.patch(`posts/${postID}/remove_like/${profileID}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

