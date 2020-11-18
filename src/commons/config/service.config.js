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
    }
  ]
})

// logging response request on development environment
if (process.env.NODE_ENV === 'development') {
  service.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  // Add a response interceptor
  service.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  })
}

export default service
