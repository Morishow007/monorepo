import axios, { InternalAxiosRequestConfig } from 'axios'
import { API_ROUTES } from '../../global/constants'

const headers = {}

export const api = axios.create({ baseURL: API_ROUTES.baseUrl, headers })

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  /*  SET user auth here*/
  return config
})
