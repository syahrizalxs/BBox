// import swall from 'sweetalert'
// import storage from '../commons/config/storage.config'

export default class ErrorService extends Error {
  constructor (error) {
    // console.log(error.request)
    super(error)
    this.name = 'Error: '
    this.error = error.request.response === 'Invalid token' ? { status: 401, message: error.request.response } : error.request.response ? JSON.parse(error.request.response) : error
  }

  showError () {
    // const message = {
      // title: this.error.currentStatus === 500 ? 'Terjadi Kesalahan' : this.error.currentStatus ? 'Perhatian' : 'Jaringan Bermasalah',
      // icon: this.error.currentStatus === 500 ? 'error' : this.error.success ? 'success' : this.error.currentStatus ? 'warning' : 'error',
      // text: this.error.currentStatus === 500 ? this.error.message : this.error.currentStatus ? this.error.message : this.error.message.charAt(0).toUpperCase() + this.error.message.slice(1)
      // text: this.error.currentStatus === 500 ? 'System Exception' : this.error.currentStatus ? this.error.message : this.error.message.charAt(0).toUpperCase() + this.error.message.slice(1)
    // }
    // console.log(message)
    // swall(message).then(() => {
    //   if (this.error.currentStatus === 401) {
    //     storage.clearSession()
    //     location.reload()
    //   }
    // })
  }

  showErrorUpload () {
    // const message = {
    //   title: 'Perhatian',
    //   icon: 'warning',
    //   text: this.error.message
    // }
    // console.log(message)
    // swall(message)
  }
}
