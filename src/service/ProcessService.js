import HttpService from './HttpService'

export default class ProcessService extends HttpService {
  static api = process.env.VUE_APP_PROCESS

  saveProcess(param) {
    const api = `${this.api}/add`
    return this.post(param, api)
  }
}
