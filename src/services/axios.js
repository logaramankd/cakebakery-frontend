import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost/5000/api',
    withCredentials: true
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
        return response.reject(error)
    }
)

export default api;