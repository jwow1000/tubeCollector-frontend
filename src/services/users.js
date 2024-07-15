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

export const signIn = async (credentials) => {
  const resp = await api.post("/users/login/", credentials);
  localStorage.setItem("token", resp.data.access);
  return resp.data.user; 
};


export const signOut = async () => {
  localStorage.removeItem("token");
  return true;

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
  const response = await api.get(`/users/${id}/`);
  return response.data;
 
}

// get all posts by user with profile id
export const getUserPostsById = async (id) => {
  const response = await api.get(`profile/${id}/posts`);
  return response.data;
}

//edit profile
export const editProfile = async (id, data) => {
  const response = await api.patch(`/users/${id}/`, data);
  return response.data;
}

// add like
export const addLike = async (postID, profileID) => {
  const response = await api.patch(`posts/${postID}/add_like/${profileID}/`);
  return response.data;
}

// remove like
export const removeLike = async (postID, profileID) => {
  const response = await api.patch(`posts/${postID}/remove_like/${profileID}/`);
  return response.data;
}

