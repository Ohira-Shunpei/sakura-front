import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://d389715569f1.ngrok.io/v1'
  })
}