import HttpService from './HttpService'

export default class EventService extends HttpService {
  static api = process.env.VUE_APP_EVENT

  getEvent (param) {
    const api = this.api + '/client/list'
    return this.get(param, api)
  }

  clientCreate (param) {
    const api = this.api + '/client/create'
    return this.post(param, api)
  }

  clientSubmit (param) {
    const api = this.api + '/client/submit'
    return this.post(param, api)
  }

}