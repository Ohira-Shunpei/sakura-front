import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://755a2a3a57c7.ngrok.io/v1'
  })
}