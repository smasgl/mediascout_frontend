import axios from 'axios'
import Cookies from 'js-cookie'
import { envVariables } from '../../envVariables'

const ACCESS_SECRET = 'Access-Secret'

const axiosApi = axios.create({
	baseURL: envVariables.BASE_URL
})

const apiRequest = async <Type>(
	method: string,
	url: string | undefined,
	request: unknown
): Promise<Type> => {
	const secret = Cookies.get(ACCESS_SECRET)
	try {
		let result
		if (secret)
			result = await axiosApi({
				method,
				url,
				data: request,
				headers: {
					Authorization: `Bearer ${secret}`
				}
			})
		else
			result = await axiosApi({
				method,
				url,
				data: request,
				headers: {}
			})
		return (await Promise.resolve(result.data)) as Promise<Type>
	} catch (error) {
		return await Promise.reject(error)
	}
}

const get = (url: string, request: unknown = null) => apiRequest('get', url, request)

const API = {
	get
}

export default API
