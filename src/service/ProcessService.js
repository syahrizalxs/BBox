import HttpService from './HttpService'

export default class ProcessService extends HttpService {
  static api = process.env.VUE_APP_PROCESS

  getProcess(param) {
  	const api = `${this.api}/list`
  	return this.get(param, api)
  }

  saveProcess(param) {
  	const api = `${this.api}/add`
  	return this.post(param, api)
  }

  editProcess(param) {
  	const api = `${this.api}/edit`
  	return this.post(param, api)
  }
}
