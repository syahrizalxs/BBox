import HttpService from './HttpService'

export default class EventService extends HttpService {
  static api = process.env.VUE_APP_EVENT

  clientCreate (param) {
    const api = this.api + '/client/create'
    return this.post(param, api)
  }

  clientSubmit (param) {
    const api = this.api + '/client/submit'
    return this.post(param, api)
  }

//   getById (param) {
//     const api = this.api + '/getById'
//     return this.get(param, api)
//   }
}