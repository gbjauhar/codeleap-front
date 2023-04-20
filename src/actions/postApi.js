import axios from "axios";
import api from "./api"

export async function createPost(body) {
    const res = await api.post('/', body);

    return res.data;
}

export async function getPosts() {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/`);

    return res.data.results;
}

export async function updatePost(id, body) {
    const res = await api.patch(`/${id}/`, body);

    return res.data;

}

export async function deletePost(id) {
    const res = await api.delete(`/${id}/`);

    return res.data;
}