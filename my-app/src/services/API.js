import axios from "axios";

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// contollers
// Get ALL Posts Data
export const getData = () => API.get('/posts')
// Get Single Post
export const getPostById = (id) => API.get(`/posts/${id}`)
// Create a new post
export const createPost = (postData) => API.post('/posts', postData);
// Update a post
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData);
// Delete a post
export const deletePost = (id) => API.delete(`/posts/${id}`);