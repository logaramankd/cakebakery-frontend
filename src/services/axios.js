import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API error', error.response || error.message);
        return Promise.reject(error)
    }
)

export default api;