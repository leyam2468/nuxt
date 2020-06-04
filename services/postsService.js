import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/leyam2468/nuxt',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPosts() {
        return apiClient.get('/posts')
    },
    getPost(id) {
        return apiClient.get('posts/' + id)
    }
}
