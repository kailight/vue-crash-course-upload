/**
 * We set custom var in webpack: @see config/kailight-env.js,
 * If its KaiLight runs dev, backend is set to 'deathnote',
 * If KaiLight runs build, backend is set to heroku
 * If OtherDev runs dev/build, backend is set to heroku
 */
const ENV = process.env.ENV
const KEY = process.env.KEY

let BASE // backend location, don't forget the trailing slash
let SOCKETBASE // Socket base location

if (ENV === 'deathnote') {
  SOCKETBASE = 'http://localhost:1337/'
  // BASE = 'http://127.0.0.1/'
} else {
  // BASE = 'https://my.secret.server/'
  SOCKETBASE = 'http://127.0.0.1:1337/'
}

// console.warn('Backend BASE location set to', BASE )
console.warn('Backend SOCKETBASE location set to', SOCKETBASE )

module.exports = { BASE, SOCKETBASE }
