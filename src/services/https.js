import api from "./axios"

export const postRequest = async (url, data = {}) => {
    try {
        const response = await api.post(url, data);
        return response.data
    } catch (error) {
        throw error?.response?.data || error.message
    }
}

export const getRequest = async (url, params = {}) => {
    try {
        const response = await api.get(url, { params })
        return response.data
    } catch (error) {
        throw error?.response?.data || error.message;
    }
}
