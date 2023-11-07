import axios from "axios";
import { urlsPRD } from "../Static/variables";

export function getPosts(){
    return axios.get(urlsPRD.getAll)
}

export function createPosts(title, text){
    return axios.post(urlsPRD.createPost, { title: title, text: text })
}

export function searchPosts(value){
    return axios.get(urlsPRD.searchPosts + value)
}

export function favoritePost(id){
    return axios.put(urlsPRD.favoritePost + id)
}

export function editPost(title, text, id){
    return axios.put(urlsPRD.editPost + id, { title: title, text: text })
}

export function removePost(id){
    return axios.delete(urlsPRD.deletePost + id)
}