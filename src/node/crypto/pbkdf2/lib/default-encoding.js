var defaultEncoding
/* istanbul ignore next */
if (process.browser) {
  defaultEncoding = 'utf-8'
} else {
  try {
    var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10)
    defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary'
  } catch (err) {
    defaultEncoding = 'utf-8'
  }
}
module.exports = defaultEncoding
