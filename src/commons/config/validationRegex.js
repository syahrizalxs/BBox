const validation = {

  alphabet(value) {
    let regex = /^[a-zA-Z ]$/
     return regex.test(value)
  },

  alphanumeric(value) {
    let regex = /[a-zA-Z,0-9]/g
     return regex.test(value)
  },

  numbers(value) {
    let regex = /^\d+$/
    return regex.test(value)
  },

  email(value) {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(value)
  },
 
  latitude(value) {
    let regex = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/g
    return regex.test(value)
  },

  longitude(value) {
    let regex = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/g
    return regex.test(value)
  },

  genericText(value) {
    let regex = /^./
    return regex.test(value)
  },

  telephone(value) {
    let regex = /[0-9]{6,16}$/
    return regex.test(value)
  },
}

export default validation
