/* ============
 * Actions for the common module
 * ============
 *
 * The actions that are available on the
 * user module.
 */
import axios from 'axios'

export default {
  getDestinations ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('destinos/')
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  sendQuote ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('cotizaciones/enviarcotizacion', item)
        .then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
