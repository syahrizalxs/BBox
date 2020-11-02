import AuthService from '../service/AuthService'
import storage from '../commons/config/storage.config'
import router from '../router'

const authService = AuthService.build()
const state = {
  authenticating: false,
  accessToken: '',
  authenticationErrorCode: 0,
  authenticationError: '',
  authenticatedUser: storage.getUser()
}

const getters = {
  loggedIn: (state) => {
    return !!state.accessToken
  },

  authenticationErrorCode: (state) => {
    return state.authenticationErrorCode
  },

  authenticationError: (state) => {
    return state.authenticationError
  },

  authenticating: (state) => {
    return state.authenticating
  },

  authenticatedUser: (state) => {
    return state.authenticatedUser
  }
}

const actions = {
  async login ({ commit }, { email, password, fcm }) {
    commit('loginRequest')

    const requestData = Object.assign({ email, password, fcm })
    const res = await authService.login(requestData)
    if (res.status !== 200) {
      return res
    }
    if (res) {
      const user = res.data
      storage.saveUser(user)
      commit('loginSuccess', { accessToken: res.data.token, user: user })
      router.push(router.history.current.query.redirect || '/')
      return true
    }
  },
  
  async logout ({ commit }) {
    await authService.logout()
    commit('logoutSuccess')
    router.push('/login')
  }
}

const mutations = {
  loginRequest (state) {
    state.authenticating = true
    state.authenticationError = ''
    state.authenticationErrorCode = 0
    state.authenticatedUser = {}
  },

  loginSuccess (state, { accessToken, user }) {
    state.accessToken = accessToken
    state.authenticatedUser = user
    state.authenticating = false
  },

  loginError (state, { errorCode, errorMessage }) {
    state.authenticating = false
    state.authenticationErrorCode = errorCode
    state.authenticationError = errorMessage
    state.authenticatedUser = {}
  },

  logoutSuccess (state) {
    state.accessToken = ''
    state.authenticatedUser = {}
  }
}

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}