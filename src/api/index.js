import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://4deeafa2d424.ngrok.io/v1'
  })
}