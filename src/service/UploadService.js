import HttpService from './HttpService'

export default class UploadService extends HttpService {
  static api = process.env.VUE_APP_UPLOAD_API

  uploadFile (data, param) {
    const api = this.api + '/uploadFile'
    return this.upload(data, api, param)
  }

}