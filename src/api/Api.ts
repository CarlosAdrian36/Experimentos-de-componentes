import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_X_API_URL,
})

console.log('API URL:', import.meta.env)
//Interceptors

export { apiClient }
