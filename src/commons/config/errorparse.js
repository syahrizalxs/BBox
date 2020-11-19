export function errorparser(value) {
  let error = ''
  switch (value) {
    case '5851':
      error = 'Version upload belum diisi'
      break
    case '5000':
      error = 'Data sudah ada'
      break
    case '1111':
      error = 'Data tidak valid'
      break
    case '0019':
      error = 'System Exception'
      break
    default:
      error = value
  }

  return error
}
