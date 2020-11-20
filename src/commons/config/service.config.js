import axios from 'axios'

const service = axios.create({
	timeout: 30000,
	transformResponse: [
		function (data) {
			if (typeof data === 'string') {
				try {
					data = JSON.parse(data)
				} catch (e) { /* Ignore */ }
			}

			return data
		},
	],
})

// logging response request on development environment
if (process.env.NODE_ENV === 'development') {
	service.interceptors.request.use((config) => config, (error) => Promise.reject(error))

	// Add a response interceptor
	service.interceptors.response.use((response) => response, (error) => Promise.reject(error))
}

export default service
