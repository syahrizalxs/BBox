import storage from '../commons/config/storage.config'
import HttpService from './HttpService'

export default class AuthService extends HttpService {
  static api = process.env.VUE_APP_AUTH

  login (data) {
    const api = this.api + '/login'
    return this.post(data, api).then((response) => {
      if (response.status === 200) {
        storage.saveToken(response.data.token)
        HttpService.setHeader()
        return response
      }
      if (response) {
        return response
        // swal({
        //   title: 'Error!!',
        //   text: response.message,
        //   icon: 'error',
        //   dangerMode: true
        // })
      }
    })
  }
  
  logout () {
    const api = this.api + '/logout'
    return this.post({}, api).then((response) => {
      HttpService.removeHeader()
      storage.clearSession()
      if (response.status === 200) {
        HttpService.removeHeader()
        storage.clearSession()
      }
    })
  }
}