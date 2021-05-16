import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://8caec69835d1.ngrok.io/v1'
  })
}