import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: ' https://b74f754192c4.ngrok.io/v1'
  })
}