import HttpService from './HttpService'

export default class EventService extends HttpService {
  static api = process.env.VUE_APP_EVENT

  getEvent(param) {
    const api = `${this.api}/list`
    return this.get(param, api)
  }

  clientCreate(param) {
    const api = `${this.api}/client/create`
    return this.post(param, api)
  }

  clientSubmit(param) {
    const api = `${this.api}/client/submit`
    return this.post(param, api)
  }

  acceptByManager(param) {
    const api = `${this.api}/manager/accept`
    return this.get(param, api)
  }

  acceptByVP(param) {
    const api = `${this.api}/vp/accept`
    return this.get(param, api)
  }

  acceptByDirectors(param) {
    const api = `${this.api}/director/accept`
    return this.get(param, api)
  }

  rejectByManager(param) {
    const api = `${this.api}/manager/reject`
    return this.post(param, api)
  }

  rejectByVP(param) {
    const api = `${this.api}/vp/reject`
    return this.post(param, api)
  }

  rejectByDirectors(param) {
    const api = `${this.api}/director/reject`
    return this.post(param, api)
  }

  assignTeam(param) {
    const api = `${this.api}/manager/assign`
    return this.post(param, api)
  }

  getSummary() {
    const api = `${this.api}/summary`
    return this.get(null, api)
  }

  completedByEmployee(param) {
    const api = `${this.api}/staff/complete`
    return this.get(param, api)
  }

  approveByManager(param) {
    const api = `${this.api}/manager/approve`
    return this.get(param, api)
  }

  approveByVP(param) {
    const api = `${this.api}/vp/approve`
    return this.get(param, api)
  }

  approveByDirectors(param) {
    const api = `${this.api}/director/approve`
    return this.get(param, api)
  }

  disapproveByManager(param) {
    const api = `${this.api}/manager/disapprove`
    return this.post(param, api)
  }

  disapproveByVP(param) {
    const api = `${this.api}/vp/disapprove`
    return this.post(param, api)
  }

  disapproveByDirectors(param) {
    const api = `${this.api}/director/disapprove`
    return this.post(param, api)
  }
}
