import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://0e7454879a59.ngrok.io/v1'
  })
}