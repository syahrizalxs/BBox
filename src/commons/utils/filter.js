export function convertDate(data) {
  if (!data) return '-'
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', seconds: 'numeric',
  }
  const event = new Date(data)
  const date = event.toLocaleDateString('id-ID', options)
  const time = `${event.getHours()}:${event.getMinutes()}`
  return `${date} at ${time}`
}

export function convertStatus(data) {
  const isDashExist = data.split('').includes('_')
  if (isDashExist) {
    const words = data.toLowerCase().split('_')
    return `${capitalizeFirstLetter(words[0])} ${capitalizeFirstLetter(words[1])}`
  }
  return capitalizeFirstLetter(data.toLowerCase())
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
