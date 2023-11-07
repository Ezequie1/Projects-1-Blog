import axios from "axios";
import { urls } from "../Static/variables";

export function getPosts(){
    return axios.get(urls.getAll)
}

export function createPosts(title, text){
    return axios.post(urls.createPost, { title: title, text: text })
}

export function searchPosts(value){
    return axios.get(urls.searchPosts + value)
}

export function favoritePost(id){
    return axios.put(urls.favoritePost + id)
}

export function editPost(title, text, id){
    return axios.put(urls.editPost + id, { title: title, text: text })
}

export function removePost(id){
    return axios.delete(urls.deletePost + id)
}