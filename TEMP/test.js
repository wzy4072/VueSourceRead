var camelRE = /[-_](\w)/g var capitalCamelRE = /(?:^|[-_])(\w)/g function  camelize (str, cap) {
  var RE = cap ? capitalCamelRE : camelRE
  return str.replace(RE, function (_, c) {
      console.log(c)
    return c ? c.toUpperCase() : ''
  })
}