import api from "./api"

export async function createPost(username, title, content) {
    const body = { username: username, title: title, content: content };
    const res = await api.post('/', body);

    return res.data;
}

export async function getPosts() {
    const res = await api.get('/');

    return res.data;
}

export async function updatePost(id, title, content) {
    const body = { title: title, content: content };
    const res = await api.patch(`/${id}/`, body);

    return res.data;

}

export async function deletePost(id){
    const res = await api.delete(`/${id}/`);

    return res.data;
}