import axios from 'axios'
import Cookies from 'js-cookie'
import {envVariables} from '../../envVariables'

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const axiosApi = axios.create({
  baseURL: envVariables.BASE_URL,
})

const apiRequest = async <Type>(
  method: string,
  url: string | undefined,
  request: unknown
): Promise<Type> => {
  try {
    let result = await axiosApi({
      method,
      url,
      data: request,
      withCredentials: true
    })
    return (await Promise.resolve(result.data)) as Promise<Type>
  } catch (error) {
    return await Promise.reject(error)
  }
}

const get = (url: string) =>
  apiRequest('get', url, null)

const post = (url: string, request: unknown = null) => 
  apiRequest('post', url, request)

const API = {
  get,
  post
}

export default API
