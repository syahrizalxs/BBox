import { Deserialize, Serialize } from 'cerialize'
import service from '../commons/config/service.config'
import storage from '../commons/config/storage.config'
import BaseService from './BaseService'
import ErrorService from './ErrorService'

/**
 * @typedef {Http}
 */
export default class HttpService extends BaseService {
  static api = ''

  static entity = ''

  /**
   * @param {String} resource
   * @param {Object} options
   * @param {Object} http
   */
  constructor(api, entity, options = {}, http = null) {
    super(options)
    this.api = api
    this.entity = entity
    this.http = http || service
  }

  /**
   * @param {String} path
   * @param {Object} options
   */
  static build(options) {
    this.setHeader()
    return new this(this.api, this.entity, options)
  }

  static setHeader() {
    service.defaults.headers.common.Authorization = `Bearer ${storage.getToken()}`
    service.defaults.headers.common['Content-Type'] = 'application/json'
  }

  static removeHeader() {
    service.defaults.headers.common = {}
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  get(param = {}, url = '') {
    const api = url === '' ? this.api : url
    return this.http
      .get(api, { params: param })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  post(data, url = '', param = {}) {
    const api = url === '' ? this.api : url
    const deserializeData = Deserialize(data, this.entity)
    return this.http
      .post(api, Serialize(deserializeData), { params: param })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  put(data, url = '') {
    const api = url === '' ? this.api : url
    const deserializeData = Deserialize(data, this.entity)
    return this.http
      .put(api, Serialize(deserializeData))
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {String} url
   * @param {Object} data
   * @returns {*|Promise<any>}
   */
  patch(data, url = '') {
    const api = url === '' ? this.api : url
    const deserializeData = Deserialize(data, this.entity)
    return this.http
      .patch(api, Serialize(deserializeData))
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {String} url
   * @returns {*|Promise<any>}
   */
  delete(id, isPath = true) {
    return this.http
      .delete(isPath ? `${this.api}/${id}` : this.api, { params: (isPath ? {} : { id }) })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {Object} response
   * @returns {Object}
   */
  generateTable(param = {}, path = '') {
    const api = (path === '') ? this.api : this.api + path
    return this.http
      .get(api, {
        params: param,
        transformResponse: [
          (data) => {
            if (data === 'Invalid token') {
              return data
            }
            const res = JSON.parse(data)
            if (res.data) {
              return {
                data: {
                  data: Deserialize(res.data.contents, this.entity),
                  total: res.data.pages.totalElements,
                  size: res.data.pages.size,
                  page: res.data.pages.number,
                },
                status: res.status,
                message: res.message,
                success: res.success,
              }
            }
            return res
          },
        ],
      })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const error = new ErrorService(e)
          error.showError()
        }
      })
  }

  upload(data, url = '') {
    const api = url === '' ? `${this.api}/upload` : url
    return this.http
      .post(api, data)
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showErrorUpload()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  uploadVer2(data, url = '') {
    const api = url === '' ? `${this.api}/upload` : url
    return this.http
      .post(api, data, {
        headers: {
          appsource: 'EMS_WEB',
        },
      })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showErrorUpload()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  export(param = {}, filename) {
    const api = `${this.api}/export`
    return this.http
      .get(api, {
        params: param,
        responseType: 'blob',
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
      }).catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  /**
   * @param {Object} response
   * @returns {Object}
   */
  static then(response) {
    if (!response.data) {
      return {}
    }

    if ((response.data.status !== 200 || response.data.status === 'DATA_EXISTS' || response.data.status === '5000' || response.data.status === null || response.data.status === '') && response.status !== 200) {
      throw new ErrorService(response)
    }

    return response.data
  }
}
