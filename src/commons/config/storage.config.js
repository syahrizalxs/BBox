const TOKEN_KEY = 'access_token'
const USER_KEY = 'user_detail'
const USERNAME = 'username'

const Storage = {
	getToken() {
		return localStorage.getItem(TOKEN_KEY)
	},

	saveToken(accessToken) {
		localStorage.setItem(TOKEN_KEY, accessToken)
	},

	clearSession() {
		localStorage.removeItem(TOKEN_KEY)
		localStorage.removeItem(USER_KEY)
	},

	getUser() {
		return JSON.parse(localStorage.getItem(USER_KEY))
	},

	saveUser(userDetail) {
		return localStorage.setItem(USER_KEY, JSON.stringify(userDetail))
	},

	saveUserName(username) {
		return localStorage.setItem(USERNAME, username)
	},
}

export default Storage
